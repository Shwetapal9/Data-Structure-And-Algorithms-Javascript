// Write a function to print Sum of n numbers using Recursion

function ADD(i,sum){
    if( i < 1){
        console.log(sum)
        return
    }
    ADD(i-1,sum + i)
}

ADD(5, 0)