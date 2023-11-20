class Pessoa {
    conta =0 
    constructor (nome) {
        this.nome = nome
    }


setarconta (conta) {
    if (typeof novaconta == "string") {
        this.conta = novaconta
    } 
}
get conta () {
    return this.conta
}

set conta (X) { 
    if (typeof x == "string") {
        this.x = x
    }}}
    
    let p1 = new Pessoa ("Laisa")
    let p2 = new Pessoa ("Leo")

    p1.conta = ("Corrente")
    p2.conta = ("Poupança")

    console.log (`${p1.nome} tem conta ${p1.conta}`)
    console.log (`${p2.nome} tem conta ${p2.conta}`)