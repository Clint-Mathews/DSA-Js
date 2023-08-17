// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function isValid(s: string): boolean {
  const stack: string[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "{" || s[i] == "(" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      let lastEl: string | undefined;
      switch (s[i]) {
        case "}":
          lastEl = stack.pop();
          if (lastEl != "{") {
            return false;
          }
          break;
        case ")":
          lastEl = stack.pop();
          if (lastEl != "(") {
            return false;
          }
          break;
        case "]":
          lastEl = stack.pop();
          if (lastEl != "[") {
            return false;
          }
          break;
        default:
          return false;
      }
    }
  }
  if (stack.length > 0) {
    return false;
  }
  return true;
}

// Input: s = "()"
// Output: true
console.log("()", isValid("()"));

// Input: s = "()[]{}"
// Output: true
console.log("()[]{}", isValid("()[]{}"));

// Input: s = "(]"
// Output: false
console.log("(]", isValid("(]"));

function isValidV2(s: string): boolean {
  const bracketMap: { [key: string]: string } = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const openBracketArray: string[] = [];
  const bracketArray = s.split("");
  for (const currentBracket of bracketArray) {
    if (["{", "[", "("].includes(currentBracket)) {
      openBracketArray.push(currentBracket);
    } else {
      console.log(currentBracket);
      if (bracketMap[currentBracket] !== openBracketArray.pop()) {
        return false;
      }
    }
  }
  return openBracketArray.length == 0;
}
console.log("()[]{}", isValidV2("()[]{}"));
console.log("(]", isValidV2("(]"));
