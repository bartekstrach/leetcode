// Solution for 0141-linked-list-cycle problem

// Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) {
        return false;
    }

    let slowPtr: ListNode | null = head.next;
    let fastPtr: ListNode | null = head.next.next ?? null;

    while (slowPtr !== fastPtr && fastPtr && fastPtr.next) {
        slowPtr = slowPtr?.next ?? null;
        fastPtr = fastPtr?.next?.next ?? null;
    }

    return slowPtr === fastPtr;
};
