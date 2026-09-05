import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test.describe('Blue Top Add to Cart and Checkout', () => {

  test('login, add blue top to cart, and checkout', async ({ page }) => {
    // Navigate to the website
    await page.goto('https://www.automationexercise.com/', { waitUntil: 'networkidle' });

    // Click on Signup/Login link
    const signupLogin = page.locator('a[href="/login"]', { hasText: 'Signup / Login' });
    await signupLogin.waitFor({ state: 'visible', timeout: 60000 });
    await signupLogin.click();

    // Wait for login form to load
    await page.waitForSelector('input[data-qa="login-email"]', { timeout: 60000 });

    // Fill in login credentials
    await page.fill('input[data-qa="login-email"]', 'janardhanp008@gmail.com');
    await page.fill('input[data-qa="login-password"]', 'Pass@1234');

    // Click Login button
    await page.click('button[data-qa="login-button"]');

    // Verify login successful
    await page.waitForSelector('a', { hasText: 'Logged in as', timeout: 60000 });

    // Go to Products page
    await page.click('a[href="/products"]');
    await page.waitForLoadState('networkidle');

    // Scroll down to find products and wait for Blue Top
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(2000);

    // Find Blue Top product and add to cart
    const blueTopSection = page.locator('.productinfo', { hasText: 'Blue Top' }).first();
    await blueTopSection.waitFor({ state: 'visible', timeout: 60000 });

    // Hover to reveal add to cart button
    await blueTopSection.hover();
    await page.waitForTimeout(500);

    // Click add to cart
    const addToCartBtn = blueTopSection.locator('a.add-to-cart');
    await addToCartBtn.click();

    // Wait for cart modal to appear and click continue shopping
    await page.waitForSelector('.modal.show, .modal.in, #cartModal.show, #cartModal.in', { timeout: 30000 });
    await page.click('.modal-footer .btn-success, .modal .btn-success');

    // Go to cart
    await page.click('a[href="/view_cart"]');
    await page.waitForLoadState('networkidle');

    // Verify Blue Top is in the cart
    await expect(page.locator('.cart_description a', { hasText: 'Blue Top' })).toBeVisible();

    // Click Proceed to Checkout
    const checkoutBtn = page.locator('a.check_out', { hasText: 'Proceed To Checkout' });
    await checkoutBtn.waitFor({ state: 'visible', timeout: 30000 });
    await checkoutBtn.click();
    await page.waitForLoadState('networkidle');

    // Verify delivery address is visible
    await expect(page.locator('.address_title').first()).toBeVisible();

    // Click Place Order
    const placeOrderBtn = page.locator('a.btn.btn-default.check_out', { hasText: 'Place Order' });
    await placeOrderBtn.waitFor({ state: 'visible', timeout: 30000 });
    await placeOrderBtn.click();
    await page.waitForLoadState('networkidle');

    // Fill in payment details
    await page.waitForSelector('input[name="name_on_card"]', { timeout: 30000 });
    await page.fill('input[name="name_on_card"]', 'Janardhan P');
    await page.fill('input[name="card_number"]', '4242424242424242');
    await page.fill('input[name="cvc"]', '123');
    await page.fill('input[name="expiry_month"]', '12');
    await page.fill('input[name="expiry_year"]', '2028');

    // Click Pay and Confirm Order
    await page.click('button#submit');

    // Verify order confirmation
    await page.waitForSelector('.title', { hasText: 'Order Placed!', timeout: 60000 });
    await expect(page.locator('.title', { hasText: 'Order Placed!' })).toBeVisible();
  });

});
