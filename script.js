// ===========================
// INTERATIVIDADE DA LANDING PAGE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    // Adicionar classe de animação aos elementos
    const boxes = document.querySelectorAll('.info-box');
    boxes.forEach((box, index) => {
        box.style.animationDelay = `${0.1 + index * 0.1}s`;
    });

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Rastreamento de cliques nos botões de contato
    const contactButtons = document.querySelectorAll('.btn');
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonType = this.classList.contains('btn-whatsapp') ? 'WhatsApp' :
                             this.classList.contains('btn-email') ? 'Email' :
                             this.classList.contains('btn-linkedin') ? 'LinkedIn' : 'Unknown';
            
            console.log(`Usuário clicou em: ${buttonType}`);
            
            // Você pode enviar dados para analytics aqui
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_click', {
                    'contact_method': buttonType
                });
            }
        });
    });

    // Efeito de hover nos boxes
    const infoBoxes = document.querySelectorAll('.info-box');
    infoBoxes.forEach(box => {
        box.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        box.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Validação de formulário (se necessário no futuro)
    console.log('Landing page carregada com sucesso!');
});

// Função para copiar texto para a área de transferência
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copiado para a área de transferência!');
    }).catch(err => {
        console.error('Erro ao copiar:', err);
    });
}

// Função para rastrear visualizações de página
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
            'page_path': window.location.pathname,
            'page_title': document.title
        });
    }
}

// Chamar rastreamento ao carregar a página
trackPageView();
