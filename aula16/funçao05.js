//RECURSIVIDADE: quando uma função chama ela mesma!

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }

}

console.log(fatorial(6))


/*

5! = 5 * 4 * 3 * 2 * 1
5! = 5 * 4!

n! = n * (n-1)!
isso acontece a não ser que n seja 1, ja que 1! = 1

*/