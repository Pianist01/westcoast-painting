console.log('This Works');

const timeLineItems = document.querySelectorAll('.timeline-item');
const options = {
    threshold: 0.5
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target, entry.isIntersecting, entry.intersectionRatio);
            function animate() {
                const yearTitle = document.querySelectorAll('h3');
                yearTitle.forEach((year) => {
                    year.style.opacity = '100';
                    requestAnimationFrame(animate);
                });
                requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
        }
    });
}, options);

timeLineItems.forEach((item) => {
    observer.observe(item);
});