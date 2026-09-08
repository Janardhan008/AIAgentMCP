const fs = require('fs');

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

function findMiddleNodeValue(values) {
    if (values.length === 0) return null;

    // 1. Build the singly linked list
    const head = new ListNode(values[0]);
    let current = head;
    for (let i = 1; i < values.length; i++) {
        current.next = new ListNode(values[i]);
        current = current.next;
    }

    // 2. Slow and Fast pointer technique
    let slow = head;
    let fast = head;

    // Fast moves 2 steps, slow moves 1 step.
    // When the length is even, this lands slow on the second middle node.
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.val;
}

function main() {
    // Read all input from standard input
    const input = fs.readFileSync(0, 'utf-8').trim();
    if (!input) return;

    // Parse space-separated values
    const values = input.split(/\s+/).map(Number);

    const result = findMiddleNodeValue(values);
    if (result !== null) {
        console.log(result);
    }
}

main();