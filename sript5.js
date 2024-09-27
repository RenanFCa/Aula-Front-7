let a,b,c,d,e,f;
let saida = document.getElementById("saida");
a=50; // int
b=120; // int
c=200; // int
f=(a%2==0)?"PAR": "IMPAR"; // f = 
d=(a<=b) ? "Verdadeiro" : "Falso"; //  d = ( true)
e=(a>=c) ? "Verdadeiro" : "Falso"; // e = ( false)
saida.innerHTML=`d = ${d}<br>`; // 
saida.innerHTML+=`e = ${e}`; // 
saida.innerHTML+=`a = ${a} - é ${f}`; 