// Ques: Given a input string s, reverse the order of the words

// Input: "the sky is blue" -------> output : "blue is sky the"

function reverse(str) {
  let s = str.split(" ");
  let stack = [];
  for (let i of s) {
    stack.push(i);
  }

  let revString = "";
  while (stack.length) {
    let curr = stack.pop();

    if (curr) {
      revString += " " + curr;
    }
  }
  return revString;
}
console.log(reverse("the sky is blue"));

var isValid = function(s) {
    let stack =[];
    
    for(let i= 0 ; i < s.length ; i++)
    {
        const char= s[i]
        if( char === '(' || char === '[' || char === '{')
        {
            stack.push;
        }
        else if( char === ')' || char === ']' || char === '}'){
            
        
            if(isEmpty(stack)) return false;
            
        const top = stack.pop();
            
        if(
        (char === ")" && top !== "(") || 
        (char === "]" && top !== "[") || 
        (char === "}" && top !== "{") )
        {
            return false;
        }
        
        }
    }
return isEmpty(stack);    
function isEmpty(stack){
    return stack.length===0
}  
    
};
 