let a,b,res;
let saida = document.getElementById("saida");
a=9; // int
b=10; // int
res=(a<b); // true
saida.innerHTML=`a = ${a} , b = ${b} <br>`; // a = 9 , b = 10
saida.innerHTML+=`a < b : ${(a<b)} <br>`; // a < b : true 
saida.innerHTML+=`!( a < b) : ${!(a<b)}<br>`; // !(a < b): falsa   "SEMPRE QUE TIVER ! O RESULTADO DE VERDADEIRO OU FALSO É INVERTIDO".
saida.innerHTML+="res : "+typeof(res); // res : boolean, number, string
// typeoff mostra se é boolean, number ou string.

// QUANDO TIVER O SIFRÃO QUER DIZER QUER VAI MOSTRAR A VARIAVEL. QUL QUER O QUAL QUER COISA QUE ESTIVER DENTRO DE ' ${} '