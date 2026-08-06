console.log('This is working');
const body = document.querySelector('body');
const main = document.querySelector('main');
const serviceContainer = document.querySelector('.service-container');
let index = 0;
let btnNum = 0;
const serviceCard = document.querySelectorAll('.service-card');
console.log(serviceCard);

function createPopUp() {
    serviceCard.forEach((service, index) => {
        const detailsBtn = service.querySelector('button');

        detailsBtn.addEventListener('click', (e) => {
            console.log(`Button Clicked${index} for Service at ${index}`);
            const popUpContainer = document.createElement('div');
            popUpContainer.classList.add('popup-container');
            function animate(){
                popUpContainer.style.width = '300px';
                requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
            main.append(popUpContainer);
        });
    });
}

createPopUp();

const serviceTitle = ['Residential Interior', 'Residential Exterior', 'Commercial Interior', 'Commercial Exterior', 'Wood Stains'];

const serviceDescription = [
    {
        id: 1,
        title: 'Residential Interior',
        description: `Refresh your home's interior with professional painting services designed to enhace the beauty and comfort of every room. We carefully prepare all surfaces, protect your furniture and flooring, and apply premium-quality paints to achieve a smooth, long-lasting finish that you will enjoy for years to come.`,
        list: ['Wall Painting', 'Ceiling Painting', 'Trim and molding painting', 'Cabinet Refinishing', 'Wallpaper Removal', 'Color Consultations']
    },
    {
        id: 2,
        title: 'Residential Exterior',
        description: `Protect and transform your home's exterior with durable, weather resistant finishes. From thorough surface preparation to the final coat, we focus on delivering a beautiful result that improves curb appeal while helping your home withstand the elements.`
    }
]