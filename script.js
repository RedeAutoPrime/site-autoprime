/**
 * script.js
 * * Gerencia a interatividade do site Rede AutoPrime.
 * Foco: Performance e código Vanilla (sem dependências).
 * * Especialistas:
 * - Head de UX: Garante que a navegação móvel seja intuitiva.
 * - Dev. Front-end: Implementa código limpo e performático.
 */

// Executa o script quando o DOM estiver totalmente carregado.
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Funcionalidade do Menu Móvel (Hamburger) ---
    
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;

    if (navToggle) {
        navToggle.addEventListener('click', () => {
            // Alterna a classe 'nav-open' no <body>
            // Isso permite que o CSS controle o estado (aberto/fechado)
            body.classList.toggle('nav-open');
        });
    }

    // --- 2. Validação do Formulário de Análise (Bloco 7) ---
    
    const analysisForm = document.getElementById('analysis-form');

    if (analysisForm) {
        analysisForm.addEventListener('submit', (event) => {
            // Previne o envio padrão do formulário
            event.preventDefault();
            
            // Validação simples (campos 'required' já são tratados pelo HTML5)
            // Aqui podemos adicionar validações mais complexas, se necessário.
            
            const nome = document.getElementById('nome').value;
            const whatsapp = document.getElementById('whatsapp').value;
            
            if (nome.trim() === '' || whatsapp.trim() === '') {
                // Embora o 'required' pegue isso, é uma boa prática
                alert('Por favor, preencha todos os campos obrigatórios.');
                return;
            }

            // Simulação de envio bem-sucedido
            // Em um projeto real, aqui ocorreria uma chamada (fetch) para uma API/backend.
            console.log('Enviando dados do formulário:', {
                nome: nome,
                whatsapp: whatsapp,
                email: document.getElementById('email').value,
                oficina: document.getElementById('oficina').value
            });

            // Feedback ao usuário
            alert('Análise solicitada com sucesso! Em breve, um de nossos especialistas entrará em contato.');
            
            // Limpa o formulário
            analysisForm.reset();
        });
    }

    // --- 3. Otimização de Animação em Scroll (Fade-in) ---
    
    // Seleciona todos os elementos que queremos animar
    const animatedElements = document.querySelectorAll(
        '.dor-card, .solucao-imagem, .solucao-texto, .pilar-card, .video-embed-card, .depoimento-card, .cta-form'
    );

    // Adiciona uma classe inicial para prepará-los (invisíveis)
    animatedElements.forEach(el => el.classList.add('fade-in-on-scroll'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' quando o elemento entra na tela
                entry.target.classList.add('visible');
                // (Opcional) Para de observar depois que a animação ocorreu
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Ativa quando 10% do elemento está visível
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

});