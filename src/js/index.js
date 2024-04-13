const botaoFormacao = document.querySelector(".botao-formacao");
const elementoFormacoes = document.querySelector(".formacoes");

botaoFormacao.addEventListener("click", () => {
   elementoFormacoes.classList.toggle("ativo");
});

const botaoSoft = document.querySelector(".botao-soft");
const elementoSofts = document.querySelector(".softs");

botaoSoft.addEventListener("click", () => {
   elementoSofts.classList.toggle("ativo");
});

const botaoHard = document.querySelector(".botao-hard");
const elementoHards = document.querySelector(".hards");

botaoHard.addEventListener("click", () => {
   elementoHards.classList.toggle("ativo");
});