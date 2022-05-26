const personagem = {
 nome: "Princesa Leia",
 apresentar: function(){
   return `a personagem é ${this.nome}`
 }
}

const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())
//a personagem é Princesa Leia

//O método bind() “prende” ou “liga” uma função ao contexto de um objeto.