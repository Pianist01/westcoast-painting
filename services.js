console.log('This is working');
const body = document.querySelector('body');
const main = document.querySelector('main');
const serviceContainer = document.querySelector('.service-container');
let index = 0;
let btnNum = 0;
const serviceCard = document.querySelectorAll('.service-card');
const html = document.querySelector('html');
const heroSection = body.querySelector('.hero-section');
const footer = body.querySelector('footer');
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
                html.style.backgroundColor = 'black';
                heroSection.style.opacity = '0';
                footer.style.opacity = '0';
                serviceContainer.style.opacity = '0';
                requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);


            function createContent() {
                const service = serviceDescription[index];
                const unorderedList = document.createElement('ul');
                const benefitsUnorderedList = document.createElement('ul');
                const locationsUnorderedList = document.createElement('ul');
                const surfacesUnorderedList = document.createElement('ul');
                const whyUsSection = document.createElement('h3');
                whyUsSection.classList.add('why-us');
                const benefitsSection = document.createElement('h3');
                benefitsSection.classList.add('benefits');
                const whereWeServeSection = document.createElement('h3');
                whereWeServeSection.classList.add('locations');
                const typesOfSurfacesSection = document.createElement('h3');
                typesOfSurfacesSection.classList.add('surfaces');
                const whatWeOfferSection = document.createElement('h3');
                whatWeOfferSection.classList.add('what-we-offer');
                whatWeOfferSection.textContent = 'What We Offer';
                typesOfSurfacesSection.textContent = 'Types of Surfaces';
                whereWeServeSection.textContent = 'Where We Serve';
                benefitsSection.textContent = 'Benefits';
                whyUsSection.textContent = 'Why Us?';
                const whatWeSpecializeSection = document.createElement('h3');
                whatWeSpecializeSection.classList.add('specialize');
                whatWeSpecializeSection.textContent = 'What We Specialize In';
                const contentContainer = document.createElement('div');
                contentContainer.classList.add('content-container');
                const exitPopUp = document.createElement('div');
                exitPopUp.classList.add('exit');
                const title = document.createElement('h2');
                title.classList.add('content-title');
                title.textContent = service.title;
                const description = document.createElement('p');
                description.textContent = service.description;
                description.classList.add('content-description');

                contentContainer.append(exitPopUp);

                function closePopUp(){
                    exitPopUp.addEventListener('click', (e) => {
                        console.log('exit clicked');
                        function closeAnimation() {
                            popUpContainer.style.width = '0px';
                            html.style.backgroundColor = '#ffffff';
                            heroSection.style.opacity = '100';
                            footer.style.opacity = '100';
                            serviceContainer.style.opacity = '100';
                            requestAnimationFrame(closeAnimation);
                        }
                        requestAnimationFrame(closeAnimation);
                    });
                }

                closePopUp();

                if(service.list) {
                    service.list.forEach((item) => {
                        const listItem = document.createElement('li');
                        listItem.textContent = item.service;
                        unorderedList.append(listItem);
                    });
                    contentContainer.append(whatWeOfferSection, unorderedList);
                }; 
                if(service.specializedIn) {
                    service.specializedIn.forEach((item) => {
                        const listItem = document.createElement('li');
                        const listLabel = document.createElement('strong');
                        listLabel.textContent = item.title;
                        const listDescription = document.createElement('p');
                        listDescription.textContent = item.description;
                        listItem.append(listLabel, listDescription);
                        unorderedList.append(listItem);
                    });
                    contentContainer.append(whatWeSpecializeSection, unorderedList);
                };
                if(service.whyUs) {
                    service.whyUs.forEach((item) => {
                        const listItem = document.createElement('li');
                        const listLabel = document.createElement('strong');
                        listLabel.textContent = item.title;
                        const listDescription = document.createElement('p');
                        listDescription.textContent = item.description;
                        listItem.append(listLabel, listDescription);
                        unorderedList.append(listItem);
                    });
                    contentContainer.append(whyUsSection, unorderedList);
                }
                if(service.benefits) {
                    service.benefits.forEach((item) => {
                        const listItem = document.createElement('li');
                        const listLabel = document.createElement('strong');
                        listLabel.textContent = item.title;
                        const listDescription = document.createElement('p');
                        listDescription.textContent = item.description;
                        listItem.append(listLabel, listDescription);
                        benefitsUnorderedList.append(listItem);
                    });
                    contentContainer.append(benefitsSection, benefitsUnorderedList);
                }
                if(service.whereWeServe) {
                    service.whereWeServe.forEach((item) => {
                        const listItem = document.createElement('li');
                        const listLabel = document.createElement('strong');
                        listLabel.textContent = item.title;
                        const listDescription = document.createElement('p');
                        listDescription.textContent = item.description;
                        listItem.append(listLabel, listDescription);
                        locationsUnorderedList.append(listItem);
                    });
                    contentContainer.append(whereWeServeSection, locationsUnorderedList);
                }
                if(service.typesOfSurfaces) {
                    service.typesOfSurfaces.forEach((item) => {
                        const listItem = document.createElement('li');
                        const listLabel = document.createElement('strong');
                        listLabel.textContent = item.title;
                        const listDescription = document.createElement('p');
                        listDescription.textContent = item.description;
                        listItem.append(listLabel, listDescription);
                        surfacesUnorderedList.append(listItem);
                    });
                    contentContainer.append(typesOfSurfacesSection, surfacesUnorderedList);
                }

                contentContainer.append(title, description);
                popUpContainer.append(contentContainer);
            }

            createContent();
            main.append(popUpContainer);
        });
    });
}

createPopUp();

const serviceDescription = [
    {
        id: 1,
        title: 'Residential Interior',
        description: `Refresh your home's interior with professional painting services designed to enhace the beauty and comfort of every room. We carefully prepare all surfaces, protect your furniture and flooring, and apply premium-quality paints to achieve a smooth, long-lasting finish that you will enjoy for years to come.`,
        list: [
            {
                service: 'Wall Painting'
            },
            {
                service: 'Ceiling Painting'
            },
            {
                service: 'Trim and Molding Painting'
            },
            {
                service: 'Cabinet Refinishing'
            },
            {
                service: 'Wallpaper Removal'
            },
            {
                service: 'Color Consultations'
            }
        ]
    },
    {
        id: 2,
        title: 'Residential Exterior',
        description: `Protect and transform your home's exterior with durable, weather resistant finishes. From thorough surface preparation to the final coat, we focus on delivering a beautiful result that improves curb appeal while helping your home withstand the elements.`,
        specializedIn: [
                {
                    title: 'Deck',
                    description: 'Protect and enhance your outdoor wood surfaces with professional staining that brings out their natural beauty while helping defend against moisture, weather, and everyday wear.'
                },
                {
                    title: 'Garage',
                    description: `Refresh your home's exterior and boost its curb appeal with a professionally painted garage door. We provife a smooth, durable finish designed to complement and enhance your home's overall appearance.`
                },
                {
                    title: 'Siding',
                    description: `Give your home's exterior a fresh, updated look with professional siding painting. Whether your siding is wood, vinyl, aluminum, or another paintable materia, we carefully prepare eeeach surface and apply a quality finish for beautiful, long-lasting results.`
                },
                {
                    title: 'Stucco',
                    description: `Restore and refresh your stucco exterior with professional painting tailored to the unique characteristics of stucco surfaces. Our careful preparation and application process provides a clean, even finish designed to enhance your home's appearance and withstand outdoor conditions.`
                }
        ]
    },
    {
        id: 3,
        title: 'Commercial Interior',
        description: `Create a professional, welcoming environment that reflects your business with high-quality commercial interior painting. Whether you're refreshing an office, retail space, restaurant, or other commercial property, we deliver clean, durable finishes with careful attention to detail and minimal disruption to your daily operations.`,
        whyUs: [
            {
                title: 'Expert Craftsmanship',
                description: 'Our experienced painters bring careful preparation, attention to detail, and professional workmanship to commercial projects of all sizes.'
            },
            {
                title: 'Commercial Grade Materials',
                description: 'We use high-quality paints and finishes selected for durability, appearance, and the demands of busy commercial environments.'
            },
            {
                title: 'Tailored Solutions',
                description: 'Every business is different. We work with you to select colors, finishes, and painting solutions that complement your space and reflect the image you want your business to present.'
            },
            {
                title: 'Efficient Service',
                description: 'We understand that downtime can affect your business. Our team works efficiently and coordinates around your needs to help minimize disruption to employees, cusotmers, and daily operations.'
            },
            {
                title: 'Preparation',
                description: 'A lasting finish starts with proper preparation. We carefully prepare surfaces before painting to promote proper adhesion and achieve a smooth, professional result.'
            }
        ],
        benefits: [
            {
                title: 'Appearance',
                description: 'Create a clean, polished space that makes a strong impression on customers, clients, and employees.'
            },
            {
                title: 'Improved Work Environment',
                description: 'Refresh outdated or worn interiors to create a brighter and more inviting workplace.'
            },
            {
                title: 'Brand Consistency',
                description: `Use colors and finishes that complement your company's identity and create a cohesive environment.`
            },
            {
                title: 'Investment Value',
                description: 'Quality preparation and durable finishes help protech interior surfaces from everyday wear.'
            }
        ],
        whereWeServe: [
            {
                title: 'Office',
                description: 'Create a clean and professional environment for your employees, clients, and visitors.'
            },
            {
                title: 'Retail',
                description: 'Refresh your storefront or interior with finishes that complement your products and customer experience.'
            },
            {
                title: 'Restaurant & Cafe',
                description: 'Create an inviting atmosphere with colors and finishes suited to your establishment.'
            },
            {
                title: 'Healthcare',
                description: 'Maintain clean, professional, and welcoming interior spaces for patients, visitors, and staff.'
            },
            {
                title: 'Education',
                description: 'Refresh classrooms, offices, and common areas with durable finishes desigend for frequently used spaces.'
            }
        ]
    },
    {
        id: 4,
        title: 'Commercial Exterior',
        description: `Make a strong first impression with a professionally painted exterior that reflects the quality of your business. Our commercial exterior painting services are designed to refresh your property's appearance while providing durable protection against weather, sun exposure, and everyday wear.`,
        whyUs: [
            {
                title: 'Expert Craftsmanship',
                description: 'Our experienced painters approach every commercial project with careful attention to detail, delivering clean, consistent finishes that enhance the appearance of your property.'
            },
            {
                title: 'Durable Materials',
                description: 'We use high-quality exterior paints and coatings selected to withstand outdoor conditions while maintaining a professional appearance over time.'
            },
            {
                title: 'Surface Preparation',
                description: 'A quality exterior finish starts long before the first coat of paint. We carefully prepare surfaces to promotee proper adhesion, address imperfections, and create the foundation for a smooth, lasting finish.'
            },
            {
                title: 'Tailored Solutions',
                description: 'Every commercial property has different needs. We work with you to select colors, finishes, and painting solutions that complement your the architecture of your building and represents your business professionally.'
            },
            {
                title: 'Efficient Service',
                description: 'We understand the importance of keeping your business running. Our team works efficiently and coordinates around your needs to help minimizee disruption to employees, customers, and normal business operations.'
            }
        ],
        benefits: [
            {
                title: 'Appeal',
                description: 'Give customers and visitors a clean, professional first impression before they walk through the door.'
            },
            {
                title: 'Protection',
                description: 'Quality exterior coatings help protect painted surfaces from sun, moisture, and changing weather conditions.'
            },
            {
                title: 'Appearance',
                description: 'Refresh faded, worn, or outdated surfaces and maintain an exterior that reflects the quality of your business.'
            },
            {
                title: 'Lasting Results',
                description: 'Proper preparation combined with quality materials helps extend the life and appearance of your exterior finish.'
            }
        ]
    },
    {
        id: 5,
        title: 'Wood Stains',
        description: `Bring out the natural beauty and character of your wood surfaces with professional staining and finishing. Whether you're refreshing a deck, fence, doors, trim, or other wood features, we provide carefully applied finishes that enhance the wood's natural appearance while helping protect it from moisturee, weather, and everyday wear.`,
        whyUs: [
            {
                title: 'Expert Craftsmanship',
                description: 'Wood requires careful attention to achieve an even, consistent finish. Our experience team works with the natural characteristics of each surface to highlight the grain and create a rich, professional appearance.'
            },
            {
                title: 'Quality Stains',
                description: 'We use high-quality stains and finishing products selected to enhance the natural color and character of the wood while providing durable protection.'
            },
            {
                title: 'Surface Preparation',
                description: 'Proper preparation is essential for achieving an even stain and lasting finish. We carefully prepare each surface before application to promote consistent stain absorption and achieve the best possible result.'
            },
            {
                title: 'Customized Colors',
                description: `Choose from a variety of stain colors and finishes to complement your home's style and achieve the look you want, from subtle natural tones to deeper, richer finishes.`
            }
        ],
        benefits: [
            {
                title: 'Enhanced Beauty',
                description: 'Highlight the unique grain, texture, and character of your wood rather than covering it.'
            },
            {
                title: 'Protection',
                description: 'Quality stains and finishes can help protect wood surfaces from moisture, sun exposure, weather, and everyday wear.'
            },
            {
                title: 'Refresh Aging Wood',
                description: 'Restore the appearance of faded or weathered wood and give outdoor or interior features new life.'
            },
            {
                title: 'Customized Appearance',
                description: 'Select a stain color and finish that complements the surrounding space while preserving the natural look of the wood.'
            } 
        ],
        typesOfSurfaces: [
            {
                title: 'Decks',
                description: 'Refresh and protect outdoor entertaining spaces while preserving the natural character of the wood.'
            },
            {
                title: 'Fences',
                description: 'Enhance the appearance of wood fencing while adding protection against outdoor exposure.'
            },
            {
                title: 'Door Trim',
                description: 'Highlight the natural grain and warmth of interior or exterior wood details.'
            },
            {
                title: 'Other Features',
                description: 'Ask us about staining and finishing additional wood surfaces throughout your home or property.'
            }
        ]
    }
]