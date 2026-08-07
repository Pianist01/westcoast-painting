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
        description: `Protect and transform your home's exterior with durable, weather resistant finishes. From thorough surface preparation to the final coat, we focus on delivering a beautiful result that improves curb appeal while helping your home withstand the elements.`,
        specializeedIn: [
            {
                deck: 'Protect and enhance your outdoor wood surfaces with professional staining that brings out their natural beauty while helping defend against moisture, weather, and everyday wear.',
                garage: `Refresh your home's exterior and boost its curb appeal with a professionally painted garage door. We provife a smooth, durable finish designed to complement and enhance your home's overall appearance.`,
                siding: `Give your home's exterior a fresh, updated look with professional siding painting. Whether your siding is wood, vinyl, aluminum, or another paintable materia, we carefully prepare eeeach surface and apply a quality finish for beautiful, long-lasting results.`,
                stucco: `Restore and refresh your stucco exterior with professional painting tailored to the unique characteristics of stucco surfaces. Our careful preparation and application process provides a clean, even finish designed to enhance your home's appearance and withstand outdoor conditions.`
            }
        ]
    },
    {
        id: 3,
        title: 'Commercial Interior',
        description: `Create a professional, welcoming environment that reflects your business with high-quality commercial interior painting. Whether you're refreshing an office, retail space, restaurant, or other commercial property, we deliver clean, durable finishes with careful attention to detail and minimal disruption to your daily operations.`,
        whyUs: [
            {
                expertCraft: 'Our experienced painters bring careful preparation, attention to detail, and professional workmanship to commercial projects of all sizes.',
                commercialGradeMaterials: 'Wee use high-quality paints and finishes selected for durability, appearance, and the demands of busy commercial environments.',
                tailoredSolutions: 'Every business is different. We work with you to select colors, finishes, and painting solutions that complement your space and reflect the image you want your business to present.',
                efficientService: 'We understand that downtime can affect your business. Our team works efficiently and coordinates around your needs to help minimize disruption to employees, cusotmers, and daily operations.',
                preparation: 'A lasting finish starts with proper preparation. We carefully prepare surfaces before painting to promote proper adhesion and achieve a smooth, professional result.'
            }
        ],
        benefits: [
            {
                appearance: 'Create a clean, polished space that makes a strong impression on customers, clients, and employees.',
                improvedWorkEnvironment: 'Refresh outdated or worn interiors to create a brighter and more inviting workplace.',
                brandConsistency: `Use colors and finishes that complement your company's identity and create a cohesive environment.`,
                investmentValue: 'Quality preparation and durable finishes help protech interior surfaces from everyday wear.'
            }
        ],
        whereWeServe: [
            {
                office: 'Create a clean and professional environment for your employees, clients, and visitors.',
                retail: 'Refresh your storefront or interior with finishes that complement your products and customer experience.',
                restaurantCafe: 'Create an inviting atmosphere with colors and finishes suited to your establishment.',
                healthcare: 'Maintain clean, professional, and welcoming interior spaces for patients, visitors, and staff.',
                educational: 'Refresh classrooms, offices, and common areas with durable finishes desigend for frequently used spaces.'
            }
        ]
    },
    {
        id: 4,
        title: 'Commercial Exterior',
        description: `Make a strong first impression with a professionally painted exterior that reflects the quality of your business. Our commercial exterior painting services are designed to refresh your property's appearance while providing durable protection against weather, sun exposure, and everyday wear.`,
        whyUs: [
            {
                expertCraft: 'Our experienced painters approach every commercial project with careful attention to detail, delivering clean, consistent finishes that enhance the appearance of your property.',
                durableMaterials: 'We use high-quality exterior paints and coatings selected to withstand outdoor conditions while maintaining a professional appearance over time.',
                surfacePreparation: 'A quality exterior finish starts long before the first coat of paint. We carefully prepare surfaces to promotee proper adhesion, address imperfections, and create the foundation for a smooth, lasting finish.',
                tailoredSolutions: 'Every commercial property has different needs. We work with you to select colors, finishes, and painting solutions that complement your the architecture of your building and represents your business professionally.',
                efficientService: 'We understand the importance of keeping your business running. Our team works efficiently and coordinates around your needs to help minimizee disruption to employees, customers, and normal business operations.'
            }
        ],
        benefits: [
            {
                appeal: 'Give customers and visitors a clean, professional first impression before they walk through the door.',
                protection: 'Quality exterior coatings help protect painted surfaces from sun, moisture, and changing weather conditions.',
                appearance: 'Refresh faded, worn, or outdated surfaces and maintain an exterior that reflects the quality of your business.',
                lastingResults: 'Proper preparation combined with quality materials helps extend the life and appearance of your exterior finish.'
            }
        ]
    },
    {
        id: 5,
        title: 'Wood Stains',
        description: `Bring out the natural beauty and character of your wood surfaces with professional staining and finishing. Whether you're refreshing a deck, fence, doors, trim, or other wood features, we provide carefully applied finishes that enhance the wood's natural appearance while helping protect it from moisturee, weather, and everyday wear.`,
        whyUs: [
            {
                expertCraft: 'Wood requires careful attention to achieve an even, consistent finish. Our experience team works with the natural characteristics of each surface to highlight the grain and create a rich, professional appearance.',
                qualityStains: 'We use high-quality stains and finishing products selected to enhance the natural color and character of the wood while providing durable protection.',
                surfacePreparation: 'Proper preparation is essential for achieving an even stain and lasting finish. We carefully prepare each surface before application to promote consistent stain absorption and achieve the best possible result.',
                customizedColors: `Choose from a variety of stain colors and finishes to complement your home's style and achieve the look you want, from subtle natural tones to deeper, richer finishes.`
            }
        ],
        benefits: [
            {
                enhanceBeauty: 'Highlight the unique grain, texture, and character of your wood rather than covering it.',
                protection: 'Quality stains and finishes can help protect wood surfaces from moisture, sun exposure, weather, and everyday wear.',
                refreshAgingWood: 'Restore the appearance of faded or weathered wood and give outdoor or interior features new life.',
                customizedAppearance: 'Select a stain color and finish that complements the surrounding space while preserving the natural look of the wood.' 
            }
        ],
        typesOfSurfaces: [
            {
                deck: 'Refresh and protect outdoor entertaining spaces while preserving the natural character of the wood.',
                fence: 'Enhance the appearance of wood fencing while adding protection against outdoor exposure.',
                doorsTrim: 'Highlight the natural grain and warmth of interior or exterior wood details.',
                otherFeatures: 'Ask us about staining and finishing additional wood surfaces throughout your home or property.'
            }
        ]
    }
]