let a,b,c;
let saida = document.getElementById("saida");
a=10; // int
b=10; // int
c=11; // int 
saida.innerHTML="Menor = "+(a<b)+"<br>"; // false
saida.innerHTML+="Menor ou igual = "+(a<=b)+"<br>"; // true
saida.innerHTML+="Maior = "+(c>b)+"<br>"; // true
saida.innerHTML+="Maior ou igual = "+(c>=b)+"<br>"; // true