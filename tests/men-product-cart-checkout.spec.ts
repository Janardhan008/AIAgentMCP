import { test, expect } from '@playwright/test';

test.setTimeout(120000);

test.describe('Men Product Add to Cart and Checkout', () => {

  test('login, add Men product to cart, and checkout', async ({ page }) => {
    // Navigate directly to login page
    await page.goto('https://www.automationexercise.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 });

    // Wait for login form to load
    await page.waitForSelector('input[data-qa="login-email"]', { timeout: 60000 });

    // Fill in login credentials
    await page.fill('input[data-qa="login-email"]', 'janardhanp008@gmail.com');
    await page.fill('input[data-qa="login-password"]', 'Pass@1234');

    // Click Login button
    await page.click('button[data-qa="login-button"]');

    // Verify login successful
    await page.waitForSelector('a', { hasText: 'Logged in as', timeout: 60000 });

    // Go to Men Tshirts category directly
    await page.goto('https://www.automationexercise.com/category_products/3', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(3000);

    // Verify we're on Men's Tshirts page
    console.log(`Page title: ${await page.title()}`);

    // Select first Men product and add to cart
    const menProduct = page.locator('.productinfo').first();
    await menProduct.waitFor({ state: 'visible', timeout: 60000 });

    // Get product name for verification
    const productName = await menProduct.locator('p').textContent();
    console.log(`Selected product: ${productName}`);

    // Hover to reveal add to cart button
    await menProduct.hover();
    await page.waitForTimeout(500);

    // Click add to cart
    const addToCartBtn = menProduct.locator('a.add-to-cart');
    await addToCartBtn.click();

    // Wait for cart modal to appear and click continue shopping
    await page.waitForSelector('.modal.show, .modal.in, #cartModal.show, #cartModal.in', { timeout: 30000 });
    await page.click('.modal-footer .btn-success, .modal .btn-success');

    // Go to cart
    await page.click('a[href="/view_cart"]');
    await page.waitForLoadState('domcontentloaded');

    // Verify product is in the cart
    const cartItem = page.locator('.cart_description a').first();
    await expect(cartItem).toBeVisible();
    const cartProductName = await cartItem.textContent();
    console.log(`Product added to cart: ${cartProductName}`);
    expect(cartProductName?.replace(/\s+/g, ' ').trim()).toContain(productName?.replace(/\s+/g, ' ').trim() || '');

    // Click Proceed to Checkout
    const checkoutBtn = page.locator('a.check_out', { hasText: 'Proceed To Checkout' });
    await checkoutBtn.waitFor({ state: 'visible', timeout: 30000 });
    await checkoutBtn.click();
    await page.waitForLoadState('domcontentloaded');

    // Verify delivery address is visible
    await expect(page.locator('.address_title').first()).toBeVisible();

    // Click Place Order
    const placeOrderBtn = page.locator('a.btn.btn-default.check_out', { hasText: 'Place Order' });
    await placeOrderBtn.waitFor({ state: 'visible', timeout: 30000 });
    await placeOrderBtn.click();
    await page.waitForLoadState('domcontentloaded');

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
    console.log('Order placed successfully!');
  });

});
