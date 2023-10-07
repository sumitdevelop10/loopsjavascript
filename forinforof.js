let sum =0
let n = prompt("enter the value of n")
n = Number.parseInt(n)

for (i = 0; i < n; i++){
    sum += i
    console.log((i + 1), "+")
}
console.log("sum of first" + n + "natural numbers is" + sum)

let obj = {
    harry :90,
    shubh : 45,
    akshay : 76,
    sumit : 56,
    Abhishek : 78
}

    for (let a in obj){
console.log("marks of " + a + "are" + obj[a])
}

for (let b of "messi"){
    console.log(b)
}