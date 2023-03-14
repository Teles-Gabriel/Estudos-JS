let num = [1,2,5,4,0]
num.push(3)
console.log(`Vetor: ${num}`)
num.sort()
console.log(`Vetor: ${num}`)
console.log(`Vetor tem ${num.length} posições`)
console.log(`o segundo valor do vetor é: ${num[1]}`)
console.log("..............................")

for(let pos = 0; pos<num.length ; pos++){
    console.log(num[pos])
}

console.log("..............................")

for(let gos in num){
    console.log(num[gos])
}

console.log("..............................")

let dos = num.indexOf(5)
console.log(dos)