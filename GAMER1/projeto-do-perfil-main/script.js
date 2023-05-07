alert("Olá seja bem vindo ") /* alerta mostrando no inicio Seja Bem vindo*/

/* declarando as variaveis P e chamando o prompt  */

let p1=prompt("Digite seu nome: "); 

let p2=prompt9("Digite o nome de um vilão:  ")

let p3=prompt("Digite um lugar que você gostaria de estar: ")

let msg= document.getElementById('msg') /* declarando a variavel msg e chamando o id criado dentro do <p> no html */



/* para chamar o id msg e mostrar na tela precisamos criar msg em seguido o innerHTML (mostre no html) 

    a crase é uma estrutura na nova versão do javascript chamada TEMPLATE STRINGS 
    $ representa a string

    {} onde é passado a variavel que deseja manipular como concatenar, como no exemplo abaixo

*/

    msg.innerHTML = '<p>Olá${p1} o seu poder é a/o ${p2} você vai enfrentar o/a {p} no/em ${p4}'