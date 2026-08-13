console.log('This Works');

const timeLineItems = document.querySelectorAll('.timeline-item');
const rectangle = document.querySelectorAll('.line');
const firstCircle = document.querySelectorAll('.circle');
const secondCircle = document.querySelectorAll('.circleTwo');
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


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        window.addEventListener('scroll', () => {
              const currentScrollY = window.scrollY;  

            //   if(currentScrollY > previousScrollY) {
            //     console.log('Scrolling Down');
            //   } else if(currentScrollY < previousScrollY) {
            //     console.log('Scrolling Up');
            //   }

              
              if(entry.isIntersecting) {
                console.log('intersecting', entry.isIntersecting);
                console.log('current:', currentScrollY);
                console.log('previous:', previousScrollY);
                console.log('direction check:', currentScrollY > previousScrollY);

                if(currentScrollY > previousScrollY) {
                    // console.log('Scrolling Down');
                    // const yearTitle = entry.target.querySelector('h3');
                    // yearTitle.style.opacity = '1';
                    // yearTitle.classList.add('active');
                    // const yearDescription = entry.target.querySelector('p');
                    // yearDescription.style.opacity = '1';
                    // yearDescription.classList.add('active');
                }
            } else {
                if(currentScrollY < previousScrollY) {
                    console.log(Up);
                }
                entry.target.querySelector('h3').style.opacity = '0';
                entry.target.querySelector('p').style.opacity = '0';
        }
        previousScrollY = currentScrollY;

            });
    });
}, options);

const lineObserver = new IntersectionObserver((entries) => {
    console.log('Observer Fired');
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            console.log(entry.target);
            console.log(entry.isIntersecting);
            console.log(entry.intersectionRatio);
            entry.target.style.backgroundColor = '#333333';
        }
    });
}, rectOptions);

const firstCircleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.backgroundColor = '#333333';
        }
    });
}, circleTwoOptions);

const secondCircleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.style.backgroundColor = '#333333';
        }
    })
}, circleTwoOptions);

timeLineItems.forEach((item) => {
    observer.observe(item);
});

rectangle.forEach((item) => {
    console.log('Observing:', item);
    lineObserver.observe(item);
});

firstCircle.forEach((item) => {
    firstCircleObserver.observe(item);
});

secondCircle.forEach((item) => {
    secondCircleObserver.observe(item);
});