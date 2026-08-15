console.log('This Works');

const timeLineItems = document.querySelectorAll('.timeline-item');
const rectangle = document.querySelectorAll('.line');
const firstCircle = document.querySelectorAll('.circle');
const secondCircle = document.querySelectorAll('.circleTwo');
const firstTimeLineItem = document.querySelector('.first-item');
const lastRectangle = document.querySelector('.last-rectangle');
const firstTimeLineCircle = document.querySelector('.first-circle');
const options = {
    threshold: 0.2
};
const rectOptions = {
    threshold: 1,
    rootMargin: '0px 0px -40% 0px'
};
const circleTwoOptions = {
    threshold: 1,
    rootMargin: '0px 0px -40% 0px'
}

let previousScrollY = window.scrollY;
let scrollingUp;
let scrollDirection = 'Down';
let currentScrollY;
let atTop;


window.addEventListener('scroll', () => {
            currentScrollY = window.scrollY;
        if(currentScrollY > previousScrollY) {
        // console.log('Scrolling down');
        scrollDirection = 'Down';
        // console.log(scrollDirection);
    } else if(currentScrollY < previousScrollY) {
        // console.log('Scrolling Up');
        scrollDirection = 'Up';
        // console.log(scrollDirection);
    }
        previousScrollY = currentScrollY;
        console.log('Current Scroll at:', currentScrollY);
        if(currentScrollY === 0) {
            console.log('Y is at 0');
            atTop = true;
            scrollDirection = 'Down';
            console.log('Y is at 0 and scroll direction is:', scrollDirection);
            firstTimeLineItem.querySelector('h3').style.opacity = '1';
            firstTimeLineItem.querySelector('p').style.opacity = '1';
            firstTimeLineCircle.style.backgroundColor = '#333333';
        }

        if(currentScrollY === 4405 && scrollDirection === 'Up') {
            lastRectangle.querySelector('.rectThree').style.backgroundColor = '#d9d9d9';
            lastRectangle.querySelector('.rectTwo').style.backgroundColor = '#d9d9d9';
        }
    });


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        window.onload = () => {
            entry.isIntersecting;
            scrollDirection = 'Down';
        }

        console.log(entry.target, 'intersecting:', entry.isIntersecting, 'ratio:', entry.intersectionRatio);

        if(scrollDirection === 'Down') {
            if(entry.isIntersecting) {
                console.log('Observer fired for:', entry.target);
                    const yearTitle = entry.target.querySelector('h3');
                    yearTitle.style.opacity = '1';
                    yearTitle.classList.add('active');
                    const yearDescription = entry.target.querySelector('p');
                    yearDescription.style.opacity = '1';
                    yearDescription.classList.add('active');
            }
        } else if(scrollDirection === 'Up') {
            if(entry.isIntersecting) {
                entry.target.querySelector('h3').style.opacity = '0';
                entry.target.querySelector('p').style.opacity = '0';
            }
        }
    });
}, options);

const lineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        window.onload = () => {
            entry.intersecting;
            scrollDirection = 'Down';
        }

        if(scrollDirection === 'Down') {
            if(entry.isIntersecting) {
                entry.target.style.backgroundColor = '#333333';
            }
        } else if(scrollDirection === 'Up') {
            if(entry.isIntersecting) {
                entry.target.style.backgroundColor = '#d9d9d9';
            }
        }
    });
}, rectOptions);

const firstCircleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        window.onload = () => {
            entry.isIntersecting;
            scrollDirection = 'Down';
        }

        if(scrollDirection === 'Down') {
            if(entry.isIntersecting) {
                entry.target.style.backgroundColor = '#333333';
            }
        } else if(scrollDirection === 'Up') {
            if(entry.isIntersecting) {
                entry.target.style.backgroundColor = '#d9d9d9';
            }
        }
    });
}, circleTwoOptions);

const secondCircleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        // window.onload = () => {
        //     entry.isIntersecting; 
        //     scrollDirection = 'Down';
        // }

        if(scrollDirection === 'Down') {
            if(entry.isIntersecting) {
                entry.target.style.backgroundColor = '#333333';
            }
        } else if(scrollDirection === 'Up') {
            if(entry.isIntersecting) {
                entry.target.style.backgroundColor = '#d9d9d9';
            }
        }
    });
}, circleTwoOptions);

timeLineItems.forEach((item) => {
    observer.observe(item);
});

rectangle.forEach((item) => {
    // console.log('Observing:', item);
    lineObserver.observe(item);
});

firstCircle.forEach((item) => {
    firstCircleObserver.observe(item);
});

secondCircle.forEach((item) => {
    secondCircleObserver.observe(item);
});