
let btnAdicionar = document.querySelector(".btn-adicionar");
let salvarPalavras = ["CAMELO", "AMEIXA","CROACIA"]

let input = document.querySelector(".input")

btnAdicionar.addEventListener("click",function()
{
   
       let adiciona = salvarPalavras.push(input.value);
             console.log(salvarPalavras);      
            localStorage.setItem("salvarPalavras", JSON.stringify(salvarPalavras)) 
    
            
})


