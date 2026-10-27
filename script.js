const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
    toggle.textContent = '☰';
  }));
}
document.querySelector('#year').textContent = new Date().getFullYear();

// Altere para o número da JR Piscinas, incluindo código do país e DDD.
// Exemplo: const WHATSAPP_NUMBER = '5548999999999';
const WHATSAPP_NUMBER = '5547992028234';

// O formulário monta a mensagem e abre o WhatsApp quando o número for configurado.
const form = document.querySelector('#quote-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name').trim();
    const service = data.get('service');
    const details = data.get('message').trim();
    const message = `Olá, JR Piscinas! Meu nome é ${name}. Gostaria de solicitar um orçamento para: ${service}.${details ? `\nDetalhes: ${details}` : ''}`;
    if (!WHATSAPP_NUMBER) {
      alert('Para ativar o envio, abra script.js e preencha WHATSAPP_NUMBER com o número da JR Piscinas, incluindo código do país e DDD.');
      return;
    }
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
}

// Efeitos de entrada ao rolar a página.
const revealItems = document.querySelectorAll('.service-card, .about-visual, .about-copy, .steps article, .contact-box');
if ('IntersectionObserver' in window) {
  revealItems.forEach(item => item.classList.add('reveal'));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
}
