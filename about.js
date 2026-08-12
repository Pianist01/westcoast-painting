console.log('This Works');

const timeLineItems = document.querySelectorAll('.timeline-item');
const options = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target, entry.isIntersecting, entry.intersectionRatio);
            const yearTitle = entry.target.querySelector('h3');
            yearTitle.style.opacity = '1';
            yearTitle.classList.add('active');
            const yearDescription = entry.target.querySelector('p');
            yearDescription.style.opacity = '1';
            yearDescription.classList.add('active');
            const yearCircle = entry.target.querySelector('.circle');
            yearCircle.style.backgroundColor = '#333333';
            const rectOne = entry.target.querySelector('.rectOne');
            rectOne.style.backgroundColor = '#333333';
        } else {
            entry.target.querySelector('h3').style.opacity = '0';
            entry.target.querySelector('p').style.opacity = '0';
        }
    });
}, options);

timeLineItems.forEach((item) => {
    observer.observe(item);
});