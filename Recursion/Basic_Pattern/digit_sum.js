// 

function sum(n){
    let ans = 0
    while(n > 0){
        ans = ans + n %10;
        n = Math.floor(n/10) 
    }

    if(ans < 10){
        return ans 
    }

    return sum(ans)

}

console.log(sum(19))
console.log(sum(157))
console.log(sum(12))
console.log(sum(9999))
