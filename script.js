let a,b;
let saida = document.getElementById("saida");
a=10; // a = 10 inteiro
b="10"; // b = 10 string
saida.innerHTML="igualdade = "+(a==b)+"<br>";
saida.innerHTML+="identico ="+(a===b)+"<br>"; //  para ser identico tem que ser do mesmo tipo e mesmo valor
saida.innerHTML+="Não igual"+(a!=b)+"<br>";
saida.innerHTML+="não identico ="+(a!==b)+"<br>";
