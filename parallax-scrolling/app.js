const shopBtn = document.querySelectorAll('.btn');
const sendBtn = document.querySelector('.contactForm button');
const shop = document.querySelector('.shop');

const logo = document.querySelector('.logo');
const chooseNavi = document.querySelector('.menu').children;
const shopNav = document.querySelectorAll('.shopNow');
const whyRoomy = document.querySelector('.whyRoomy');
const contactUs = document.querySelector('.contactUs');

const image1 = document.querySelector('.image1');
const image2 = document.querySelector('.image2');

const pageTwo = document.getElementById('two');
const pageThree = document.getElementById('three');
const pageFour = document.getElementById('four');

const input = document.querySelector('input[type="email"]');
const contactScroll = document.querySelector('.contact'); 

// initialize iput values for the form //
input.value = '';
input.previousElementSibling.value = '';    
input.nextElementSibling.value = '';

// on logo click, back to the screen 1 and initialize the rest
logo.addEventListener('click', () => {
    for(let nav of chooseNavi) {
        if(nav.className) {
            nav.classList.remove('choose');
            nav.firstElementChild.classList.remove('choose');
        }
    }
    shop.style.display = 'none';  
    for(let btn of shopNav) {
        btn.classList.remove('disappear')
    }
})

// on 'shop now' button click, the button disappears 

for(let i = 0; i < shopNav.length; i++) {
    let shopButton = shopNav[i];
    shopButton.addEventListener('click', () => {
        shop.style.display = 'block';
        if((!shopButton.classList.contains('disappear'))) {
            for(let btn of shopBtn) {
                btn.classList.add('disappear');
                shopNav[0].classList.add('choose')
            }            
        }           
    })
}

// Show & remove underline on the menu upon selecting the item

for(let i = 0 ; i < chooseNavi.length; i++) {
    let choice = chooseNavi[i];   

    choice.addEventListener('click', (e) => {
        if(choice.contains(e.target)) {
            choice.classList.add('choose');
            let prevSibling = choice.previousElementSibling;
            let nextSibling = choice.nextElementSibling;
            removeClass(prevSibling)
            removeClass(nextSibling)
            if(i === 0) {
                removeClass(nextSibling.nextElementSibling);
                removeClass(nextSibling.parentElement);
            }
            shopNav[0].classList.remove('choose');

           
            if(i === 2) {
                removeClass(prevSibling.previousElementSibling);
                removeClass(prevSibling.parentElement)
            }           
        }        

        function removeClass(sibling) {
            if(sibling && sibling.classList.contains('choose')) {
                sibling.classList.remove('choose')
            }            
        }
    })       
}

// scrolling enables underline switches for the nav options

window.addEventListener('scroll', function() {
    if(scrollY < 100) {
        shopBtn[0].style.display = 'block';
        chooseNavi[0].firstElementChild.classList.remove('choose');
    }   

    if(scrollY > 540 && scrollY < 1250 ) {
        shopNav[0].classList.add('choose');
        whyRoomy.classList.remove('choose');
    }
    if(scrollY > 850 && scrollY < 2500) {
        shopNav[0].classList.remove('choose');
        whyRoomy.classList.add('choose');
        chooseControl(contactUs);
    }
    if(scrollY > 2500) {
        shopNav[0].classList.remove('choose')
        shopNav[0].parentElement.classList.remove('choose')
        contactUs.classList.add('choose');
        chooseControl(whyRoomy);
    }
})

function chooseControl(sibling) {
    sibling.classList.remove('choose');
    sibling.parentElement.classList.remove('choose');
}

// ad words options in an array format
const adLines = [
    'At least 95% recycled materials used',
    'We use local suppliers',
    'Affordable',
    '0% Toxin & kids friendly'
];

// insert tick per adwords
for(let i = 0; i < 4; i++) {
    let words = document.createElement('li');
    words.innerHTML = `${adLines[i]} ` + '<img src="img/1x/atick_1.png" alt="tick" width="30px"/>'
    const adWords = document.querySelector('.adWords');
    adWords.appendChild(words);    
}

// form button click action eventlistener
sendBtn.addEventListener('click', () => {   
    if(input.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        sendBtn.parentElement.innerHTML = '<h3>Thank you for contacting us. We will get back to you within 24 hours.</h3>';
    }   
})

