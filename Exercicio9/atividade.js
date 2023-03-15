function parimp(n){
    if(n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(1118)

console.log(res)
console.log('............................................')

function soma(n1=0, n2=0) {
    return n1+n2
}

console.log(soma(7))
console.log('............................................')

function fatorial(n) {
    let fat = 1
    for(let c = n ; c > 1 ; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(11))

console.log('............................................')

//função recursiva

function factorial(m) {
    if(m == 1) {
        return 1
    } else {
        return m * factorial(m-1)
    }
}
console.log(factorial(5))