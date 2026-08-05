console.log('This is working');
let index = 0;
const detailsBtn = document.querySelectorAll('button');
const serviceCard = document.querySelectorAll('.service-card');
console.log(serviceCard);
detailsBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log('Button Clicked');
        index++;
        console.log(index);
    });
});