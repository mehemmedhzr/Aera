// SEARCH MODAL APPEARS AND DISAPPEARS

let searchArea = document.getElementsByClassName('searchArea')[0];
let searchModal = document.getElementsByClassName('searchModal')[0];
let modalTop = document.getElementsByClassName('modalTop')[0];
let closeIcon = modalTop.getElementsByTagName('img')[0];
let modalBox = document.getElementsByClassName('modalBox')[0];
let searchButtonMob = document.getElementsByClassName('searchButtonMob')[0];


function showModal() {
    searchModal.style.display = 'block';
    setTimeout(function() {
        searchModal.classList.add('visible');
        modalBox.style.transform = 'none';
      }, 0);
}
  
function hideModal() {
    searchModal.classList.remove('visible');
    modalBox.style.transform = 'translate(0,-50px)';
    setTimeout(function() {
        searchModal.style.display = 'none';
      }, 150);
}

searchArea.addEventListener('click', showModal);

searchButtonMob.addEventListener('click', showModal);

closeIcon.addEventListener('click', hideModal);

searchModal.addEventListener('click', function (event) {
    if (event.target === this) {
        hideModal();
    }
});



// DROPDOWN MENU FOR MOBILE

const langSetMob = document.querySelector('.langSetMob');
const dropDownMob = document.querySelector('.dropDownMob');
const title = document.querySelector('.langSet > .title');
const title2 = document.querySelector('.langSetMob > .title');
const dropdownItemsMob = dropDownMob.querySelectorAll('li');
const dropdownItems = document.querySelectorAll('.dropDown li');

langSetMob.addEventListener('click', function() {
    dropDownMob.style.display = (dropDownMob.style.display === 'none' || dropDownMob.style.display === '') ? 'block' : 'none';
});

dropdownItemsMob.forEach((item) => {
  item.addEventListener('click', function() {
    title2.textContent = this.textContent
    console.log(this.textContent)
  })
});

dropdownItems.forEach((item) => {
  item.addEventListener('click', function() {
    title.textContent = this.textContent
  })
});


// NAVIGATION FOR MOBILE

let openMenu = document.getElementById('openMenu');
let closeMenu = document.getElementById('closeMenu');
let mobileLinks = document.getElementsByClassName('mobileLinks')[0];

function showMobileMenu() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'flex';
    mobileLinks.style.display = 'block';
};

function hideMobileMenu() {
    openMenu.style.display = 'flex';
    closeMenu.style.display = 'none';
    mobileLinks.style.display = 'none';
}

openMenu.addEventListener('click', showMobileMenu);
closeMenu.addEventListener('click', hideMobileMenu);


// CREATE CHILDREN ELEMENTS FOR MOBILE MENU

let hasChildElements = document.getElementsByClassName('hasChildMob');
let parentUl = document.getElementsByClassName('parentUl')[0];

for (let i = 0; i < hasChildElements.length; i++) {
  let hasChildElementA = hasChildElements[i].querySelectorAll('.hasChildMob > a, .hasChildMobSub > a');

  for (let j = 0; j < hasChildElementA.length; j++) {
    let arrowDiv = document.createElement('div');
    arrowDiv.className = 'arrow';

    let spanElement = document.createElement('span');
    spanElement.className = 'fas fa-chevron-down';

    arrowDiv.appendChild(spanElement);

    hasChildElementA[j].appendChild(arrowDiv);
  }
};


const listItems = document.querySelectorAll('.parentUl li');
const listA = document.querySelectorAll('.listA');
const goBackMenus = document.querySelectorAll('.goBackMenu');
const mobSub = document.querySelectorAll('.hasChildMobSub>a');
const listB = document.querySelectorAll('.listB');
const goBackMenusSub = document.querySelectorAll('.hasChildMobSub .goBackMenuSub');


listItems.forEach((item) => {
  item.addEventListener('click', function() {
    
    const submenu = this.querySelector('.submenu');
    submenu.classList.add('active');
    
    listA.forEach((element) => {
      element.classList.add('deActive');
    });
  });
});

mobSub.forEach((item)=>{
    item.addEventListener('click', function() {
        listB.forEach((element)=>{
            element.classList.add('deActive');
        })
    })
})


goBackMenus.forEach((goBackMenu) => {
  goBackMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    
    const submenu = this.closest('.submenu');
    console.log(submenu)
    submenu.classList.remove('active');
    
    listA.forEach((element) => {
      element.classList.remove('deActive');
    });
  });
});

goBackMenusSub.forEach((goBackMenu) => {
    goBackMenu.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const submenu = this.closest('.submenu');
      console.log(submenu)
      submenu.classList.remove('active');
  
      listB.forEach((element) => {
          element.classList.remove('deActive');
        });
    });
  });



$(document).ready(function() {
  var owl = $(".carousel1");
  owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 400
  });

  $(".next").click(function() {
    owl.trigger("next.owl.carousel");
  });

  $(".prev").click(function() {
    owl.trigger("prev.owl.carousel");
  });
});

var owl = $('.carousel2');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive: {
      0: {
        items: 1
      },
      757: {
        items: 3
      }
    }
});

// GO TO TOP BUTTON

const scrollToTopBtn = document.querySelector('.scrollToTopBtn');

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollToTopBtn.classList.add('dFflex');
  } else {
    scrollToTopBtn.classList.remove('dFflex');
  }
});














