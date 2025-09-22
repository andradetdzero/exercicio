//Exercício 1 – Mostrar Nome
function mostrarNome() {
  let nome = prompt("Qual é o seu nome?");
  document.getElementById("mensagem1").innerText = "Olá, " + nome + "! Seja bem-vindo!";
}
// window.onload = function() {
//   let nome = prompt("Qual é o seu nome?");
//   document.getElementById("mensagem1").innerText = "Olá, " + nome + "! Seja bem-vindo!";
// }

// Exercício 2 – Somador
function somarNumeros() {
  let n1 = Number(prompt("Digite o primeiro número:"));
  let n2 = Number(prompt("Digite o segundo número:"));
  let soma = n1 + n2;
  document.getElementById("mensagem2").innerText = "A soma é: " + soma;
}

// Exercício 2 – subtrator
function subtrairNumeros() {
  let n1 = prompt("Digite o primeiro número:");
  let n2 = prompt("Digite o segundo número:");
  let subtração = n1 - n2;
  document.getElementById("mensagem3").innerText = "A subtração é: " + subtração;
}

// Exercício 3 – Alterar Cor de Fundo


function mudarCor() {
  // Gera um número aleatório entre 0 e 16777215 (total de cores hexadecimais)
  let corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);

  // Aplica no fundo
  document.body.style.backgroundColor = corAleatoria;

  // Mostra no console para conferir
  console.log("Nova cor: " + corAleatoria);
  document.getElementById("mensagem6").innerText = corAleatoria
  document.getElementById("mensagem6").style.color = corAleatoria;
}

function modoEscuro(){
  let sections = document.querySelectorAll("section");
  document.body.style.backgroundColor = "black";
  sections.forEach(function(sec){
    sec.style.backgroundColor = "grey";
    sec.style.color = "white";
  });
  let buttons = document.querySelectorAll("button");
  buttons.forEach(function(but){
    but.style.backgroundColor = "Navy"
    but.style.borderColor = "Silver"
  });
}






let intervaloCor;
let imagens = ["https://placehold.co/600x400", "https://placehold.co/800x600", "https://placehold.co/300x200"];
let indice = 0;
let intervalo;

//Função que troca a imagem
function trocarImagem() {
  indice++;
  if (indice >= imagens.length) {
    indice = 0; // volta para a primeira imagem
  }
  document.getElementById("imagem").src = imagens[indice];
}

//Função que inicia a troca a cada 10 segundos
function iniciarTroca() {
  if (!intervalo) { // evita criar vários intervalos
    intervalo = setInterval(trocarImagem, 5000); // 10000 ms = 10s

  }
}
// function trocarImagem(){
//   let img = document.getElementById("imagem");
//   let imgProxima = document.getElementById("imagemProxima");
  
//   indice = (indice +)
  
//   img.style.transform = "translateX(100%)";
//   imgProxima.style.transform = "translateX(-100%)"
  
// }


function iniciarTrocaAleatoria() {
  if (!intervalo) { // evita criar vários intervalos
    intervalo = setInterval(mudarCor, 100);
  }
}