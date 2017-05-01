var meuNumero = 10;
var meuNome = "Lucas Soares";
var estado = true;
var minhaLista = [10,120,10,10];

if(estado){
    alert("Olá eu sou o felpudo!");    
}else{
    alert(minhaLista[1]);    
}

for (var i = 0; i<=3; i++){
        alert("Contador i = " + i);    
    }

var textoResposta = prompt("Qual é o seu Nome?","Insira aqui seu nome"); 
switch (textoResposta) {  
        case "Felpudo": alert("É o Felpudo!")
        break;  

        case "Lucas Soares": alert("É o " + textoResposta);
        break;  

        default : alert(textoResposta)
        break;  
}

var contador = 0
while(contador<10){
    alert(contador)    
    contador++
}

minhaFuncaoSimples()
function minhaFuncaoSimples(){
    alert("Executou a Função!")
}

somaNumeros(10,5)
function somaNumeros(numeroA, numeroB){
    alert(numeroA+numeroB)
}

alert(multiplcaNumeros(10,3))
function multiplcaNumeros(numA, numB){
    return numA*numB
}