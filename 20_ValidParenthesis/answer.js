function validParenthesis(s){
    if(s.length === 1){
        return false
    }

    function peek(stack){
        return stack[stack.length - 1]
    }

    let stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        } else if(stack.length && s[i] === ')' && peek(stack) === '('){
            stack.pop()
        } else if(stack.length && s[i] === '}' && peek(stack) === '{'){
            stack.pop()
        } else if(stack.length && s[i] === ']' && peek(stack) === '['){
            stack.pop()
        } else {
            return false
        }
    }

    return stack.length === 0
}

const s1 = "()"
const s2 = "()[]{}"
const s3 = "(]"
const s4 = "([)]"
const s5 = "{[]}"
const s6 = "(("

console.log(validParenthesis(s1))
console.log(validParenthesis(s2))
console.log(validParenthesis(s3))
console.log(validParenthesis(s4))
console.log(validParenthesis(s5))
console.log(validParenthesis(s6))