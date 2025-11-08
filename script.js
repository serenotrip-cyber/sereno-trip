const botao = document.getElementById("botaoRoteiro");
const roteiro = document.getElementById("roteiro");
botao.addEventListener("click", function() {
    if (roteiro.style.display === "none") {
        roteiro.style.display = "block";
        botao.textContent = "Esconder Roteiro";
    } else {
        roteiro.style.display = "none";
        botao.textContent = "Mostrar Roteiro";
    }
});// ===== MENU HAMBÚRGUER =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {
    navLinks.classList.toggle("show");
});// ===== FORMULÁRIO =====
// ===== FORMULÁRIO COM EMAILJS =====
(function() {
    emailjs.init(44uJ_gP3OQILbflgM); // substitua pela sua Public Key
})();

const formOrcamento = document.getElementById("formOrcamento");
const mensagemSucesso = document.getElementById("mensagemSucesso");
const mensagemErro = document.getElementById("mensagemErro");
const btnTexto = document.getElementById("btnTexto");
const loading = document.getElementById("loading");

formOrcamento.addEventListener("submit", function(event) {
    event.preventDefault();

    // Esconde mensagens antigas
    mensagemSucesso.style.display = "none";
    mensagemErro.style.display = "none";

    // Mostra loading
    btnTexto.style.display = "none";
    loading.style.display = "inline";

    emailjs.sendForm("service_33gp63e", "template_xvulvpt", formOrcamento)
        .then(function() {
            mensagemSucesso.style.display = "block"; // mostra sucesso
            formOrcamento.reset(); // limpa campos
        }, function(error) {
            mensagemErro.style.display = "block"; // mostra erro
            console.error("Erro:", error);
        });
        .finally(function() {
            // Restaura botão
            btnTexto.style.display = "inline";
            loading.style.display = "none";
        });
});
// Rolagem suave para o formulário de orçamento
document.addEventListener('DOMContentLoaded', () => {
  const botaoBanner = document.querySelector('.btn-banner');
  const formulario = document.querySelector('#formOrcamento');

  if (botaoBanner && formulario) {
    botaoBanner.addEventListener('click', (e) => {
      e.preventDefault();
      formulario.scrollIntoView({ behavior: 'smooth' });
    });
  }
});

