// Função para rolagem suave
function scrollToContact() {
    document.getElementById('contato').scrollIntoView({ behavior: 'smooth' });
}

// Manipulação do formulário (simulação)
document.getElementById('form-contato').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Obrigado pelo contato! Responderemos em breve.');
});