console.log('This is working');
console.log('OK');

const heroBtn = document.querySelector('.hero-btn');

heroBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = 'contact.html';
});