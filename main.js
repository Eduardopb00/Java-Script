

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por cliar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://github.com/Eduardopb00");
    //window.location.href = "https://github.com/Eduardopb00";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passou o mouse";
    elemento.innerHTML = "Obrigado por passou o mouse"
    //alert ("trocar texto");
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}
/*
function soma(x, y){
    return x + y;
}
*/
/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = "Maior de Idade"
    }else{
        validar = "Menor de Idade"
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));
/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for(count=1; count <=5; count++){
    alert(count);
};
*/
/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
};
*/
/*
var idade = prompt("Qual sua idade")
if (idade >= 18){
    alert("maior de idade");
}else {
    alert("menor de idade");
};
*/


/*
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

// var lista = ["pera", "maça", "laranja"];
//lista.push("banana");
//lista.pop()

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" - "));


//var nome = "Eduardo";
//var x = 5;
//var y = 8;
//var frase = "Valorant é o melhor jogo do mundo"
//alert(nome + " tem " + idade + " anos ")
//alert (idade + idade2 + " é a idade de " + nome);
//console.log(nome);
//console.log(x * y);
//console.log(frase.replace("Valorant", "Minecraft"))
//alert(frase.replace("Valorant", "Minecraft"))