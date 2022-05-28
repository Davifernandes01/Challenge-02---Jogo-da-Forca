//pega o array da pagina adicionarPalavras e passa para pagina de jogoForca
let adicionaSalvarPalavras = JSON.parse(localStorage.getItem("salvar-palavras"));
//console.log(adicionaSalvarPalavras)

//escolhendo a palavra sorteada, por meio de um sorteio
let palavraSecreta = adicionaSalvarPalavras[Math.floor(Math.random() * adicionaSalvarPalavras.length )]
console.log(palavraSecreta);

// evento para saber se o usuario clicou em uma letra
document.addEventListener("keydown" , (evento)=>
    {
        let codigo = evento.keyCode; //65 - 90

        if(letraTrue(codigo))
        {
            let letra = evento.key;
            console.log(letra);
        }
    } )


            function letraTrue(codigo)
        {
            return codigo >= 65 &&  codigo <= 90;
        }

        