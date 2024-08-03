// Write a function to Print the name 5 times using recursion

function printName(i,n){
    if(i> n) return

    console.log("Shweta")
    printName(i+1,n)
}

printName(1,5)