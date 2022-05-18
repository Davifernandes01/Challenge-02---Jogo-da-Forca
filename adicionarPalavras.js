
let btnAdicionar = document.querySelector(".btn-adicionar");
let salvarPalavras = ["CAMELO", "AMEIXA","CROACIA"]
localStorage.setItem("salvarPalavras", JSON.stringify(salvarPalavras))
let input = document.querySelector(".input")

btnAdicionar.addEventListener("click",function()
{
 
      let adiciona = salvarPalavras.push(input.value);
     console.log(salvarPalavras); 
   
})

