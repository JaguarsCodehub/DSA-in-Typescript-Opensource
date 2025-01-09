// Valid Parenthesis problem

function isValid(s: string): boolean {
    const stack: string[] = [];
    const matchingBrackets: Record<string, string> = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for(const char of s) {
        if(matchingBrackets[char]) {
            stack.push(matchingBrackets[char]);
        } else {
            if(char !== stack.pop()) {
                return false
            }   
        }
    }

    return stack.length === 0
}

console.log(isValid("()"));        // Output: true
console.log(isValid("()[]{}"));    // Output: true
console.log(isValid("(]"));        // Output: false
console.log(isValid("([)]"));      // Output: false
console.log(isValid("{[]}"));      // Output: true