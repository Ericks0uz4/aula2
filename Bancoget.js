class Pessoa {
    conta =0
    constructor (nome) {
        this.nome = nome
    }
}
   
    let p1 = new Pessoa ("Aline")
    let p2 = new Pessoa ("Junior")

    p1.conta = ("Corrente")
    p2.conta = ("Poupança")

    console.log (`${p1.nome} tem conta ${p1.conta}`)
    console.log (`${p2.nome} tem conta ${p2.conta}`)