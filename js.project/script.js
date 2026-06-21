const translations = {
    ka: {
        nav_home: "მთავარი",
        nav_about: "ჩვენს შესახებ",
        nav_contact: "კონტაქტი",
        button: "English",
        hero_title: "იპოვნე შენი ოცნების სახლი",
        opt_buy: "ყიდვა",
        opt_rent: "ქირაობა",
        search_placeholder: "თბილისი, ბათუმი...",
        search_btn: "ძებნა",
        section_title: "ბოლო განცხადებები",
        section_title1: "ასევე პოპულარულები",


        card1_title: "3-ოთახიანი ბინა საბურთალოზე",
        card1_price: "120,000 $",
        card1_desc: "ნათელი ბინა ახალაშენებულ კორპუსში, ავეჯითა და ტექნიკით.",
        
        card2_title: "საკუთარი სახლი წყნეთში",
        card2_price: "350,000 $",
        card2_desc: "დიდი ეზოთი, ლამაზი ხედებითა და მყუდრო გარემოთი."
    },
    en: {
        nav_home: "Home",
        nav_about: "About Us",
        nav_contact: "Contact",
        button: "ქართული",
        hero_title: "Find Your Dream Home",
        opt_buy: "Buy",
        opt_rent: "Rent",
        search_placeholder: "Tbilisi, Batumi...",
        search_btn: "Search",
        section_title: "Recent Listings",
        section_title1: "Also Popular",
        
        card1_title: "3-Room Apartment in Saburtalo",
        card1_price: "$ 120,000",
        card1_desc: "Bright apartment in a newly built building, with furniture and appliances.",
        
        card2_title: "Private House in Tskneti",
        card2_price: "$ 350,000",
        card2_desc: "With a large yard, beautiful views, and a cozy environment."
    }
};

let currentLang = localStorage.getItem('selectedLanguage') || 'ka';
const langToggleBtn = document.getElementById('lang-toggle');

function changeLanguage(lang) {
    
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    
    const inputs = document.querySelectorAll('[data-placeholder]');
    inputs.forEach(input => {
        const key = input.getAttribute('data-placeholder');
        if (translations[lang][key]) {
            input.setAttribute('placeholder', translations[lang][key]);
        }
    });

    langToggleBtn.textContent = translations[lang]['button'];
    document.documentElement.lang = lang;
    localStorage.setItem('selectedLanguage', lang);
}


changeLanguage(currentLang);

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'ka' ? 'en' : 'ka';
    changeLanguage(currentLang);
});





const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;

            if (index < 0) {
                index = images.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);