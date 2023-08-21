// https://leetcode.com/problems/valid-parentheses/

export function isValid(str) {
    const stack = [];
    const opening = ['[', '(', '{'];
    const closing = [']', ')', '}'];
    const match = {
        ']': '[',
        ')': '(',
        '}': '{',
    }

    for (const char of str) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            const lastEl = stack.at(-1);
            if (lastEl !== match[char]) {
                return false;
            }
            stack.pop();
        }
    }

    return !stack.length;
}
