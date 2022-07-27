const hamburgerMenu = document.querySelector(".hamburgerMenu");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function mobileMenu() {
  hamburgerMenu.classList.toggle("active");
  navMenu.classList.toggle("active");
}
hamburgerMenu.addEventListener("click", mobileMenu);

function closeMenu() {
  hamburgerMenu.classList.remove("active");
  navMenu.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));



// function toggleModal() {
//     modal.classList.toggle("show-modal");
// }

// function windowOnClick(event) {
//     if (event.target === modal) {
//         toggleModal();
//     }
// }

// trigger.addEventListener("click", toggleModal);
// closeButton.addEventListener("click", toggleModal);
// window.addEventListener("click", windowOnClick);



const mobileModalContent = [
  {
    title: 'Multi-Post Stories',
    descriptionDesktop:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    imageDesktop: './image/modal-desktop.png',
    closeImage: './image/close-icon.png',
    languagesDesk: [
      '|',
      'html',
      '|',
      'Ruby on rails',
      '|',
      'css',
      '|',
      'Github',
      '|',
    ],
  },

  {
    title: 'Multi-Post Stories',
    descriptionDesktop:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    imageDesktop: './image/modal-desktop.png',
    closeImage: './image/close-icon.png',
    languagesDesk: [
      '|',
      'html',
      '|',
      'Ruby on rails',
      '|',
      'css',
      '|',
      'Github',
      '|',
    ],
  },

  {
    title: 'Multi-Post Stories',
    descriptionDesktop:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    imageDesktop: './image/modal-desktop.png',
    closeImage: './image/close-icon.png',
    languagesDesk: [
      '|',
      'html',
      '|',
      'Ruby on rails',
      '|',
      'css',
      '|',
      'Github',
      '|',
    ],
  },

  {
    title: 'Multi-Post Stories',
    descriptionDesktop:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
    imageDesktop: './image/modal-desktop.png',
    closeImage: './image/close-icon.png',
    languagesDesk: [
      '|',
      'html',
      '|',
      'Ruby on rails',
      '|',
      'css',
      '|',
      'Github',
      '|',
    ],
  },
];

const workList = document.querySelector('.worksList');

function createCards() {
  mobileModalContent.forEach((card) => {
    workList.innerHTML += ` <div class="multipleAndImageHolder container">
    <div>
      <img
        class="imgPlaceholder container"
        src="image/ImgPlaceholder.png"
        alt="My Recrnt Work "
      />
    </div>
    <div class="container">
      <div>
        <p class="ellipse1"></p>
        <p class="ellipse2"></p>
        <p class="ellipse3"></p>
        <p class="ellipse"></p>
      </div>
      <h3 class="multiplePost container">${card.title}</h3>
      <div class="supportingText container">
        <p>
        ${card.descriptionDesktop}
        </p>
      </div>
      <ul class="tags">
      <li>${card.languagesDesk[0]}</li>
        <li>${card.languagesDesk[1]}</li>
      <li>${card.languagesDesk[2]}</li>
      <li>${card.languagesDesk[3]}</li>
        <li>${card.languagesDesk[4]}</li>
        <li>${card.languagesDesk[5]}</li>
      <li>${card.languagesDesk[6]}</li>
        <li>${card.languagesDesk[7]}</li>
        <li>${card.languagesDesk[8]}</li>
      </ul>
      <button  data-modal-target="#modalMobile"  type="button"  class="seeProject"> See Project</button>
      
      <div class="mobile-modal" id="modalMobile"></div>
    </div>
    <div id="popup">
    </div>
  </div>`;
  });
}

createCards();

const openMobileModal = document.querySelectorAll('[data-modal-target]');
const popup = document.querySelector('#popup');
const mobileModal = [{
  title: 'Multi-Post Stories',
  descriptionMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
  imageMobile: './image/modalMobile.png',
  closeImage: './image/close-icon.png',
  languagesMobile: ['|', 'html', '|', 'Ruby on rails', '|', 'css'],
}];

const desktopModalContent = [{
  title: 'Multi-Post Stories',
  descriptionDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.",
  imageDesktop: './image/modal-desktop.png',
  closeImage: './image/close-icon.png',
  languagesDesk: [
    '|',
    'html',
    '|',
    'Ruby on rails',
    '|',
    'css',
    '|',
    'Github',
    '|',
  ],
}];

const modalData = document.getElementById('modalMobile');

desktopModalContent.title = 'Multi-Post Stories';
desktopModalContent.descriptionDesktop = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.";
desktopModalContent.imageDesktop = './image/modal-desktop.png';
desktopModalContent.closeImage = './image/close-icon.png';
desktopModalContent.languagesDesk = [
  '|',
  'html',
  '|',
  'Ruby on rails',
  '|',
  'css',
  '|',
  'Github',
  '|',
];
// modal data
mobileModal.descriptionMobile = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.";
mobileModal.imageMobile = './image/modalMobile.png';
mobileModal.languagesMobile = [
  '|',
  'html',
  '|',
  'Ruby on rails',
  '|',
  'css',
];

const language = mobileModal.languagesMobile.join('  ');

modalData.innerHTML = `<h2 class="mobile-modal-title">${desktopModalContent.title}</h2>
  <span> <a onclick="closePopupModal()" href="" class="close-popup"><img class="closeImage" src="${desktopModalContent.closeImage}" alt="Close Image Mobile modal" /></a></span>
  <img class="desktopModalImage" src="${desktopModalContent.imageDesktop}" alt="Project Image on desktop device">
  <p class="desktopModalText">${desktopModalContent.descriptionDesktop}</p>
  <ul class="mobileModalLang">${language}</ul>
  <img class="mobileModalImage" src="${mobileModal.imageMobile}" alt="Project Image on mobile device">
  <p class="mobileModalText">${mobileModal.descriptionMobile}</p>
  <div class="scrLive"><button class="liveButton" type="button">See Live <img class="live-icon" src="./image/Icon.png"></button>
  <button class="srcButton" type="button">See Source <img class="src-icon" src="./image/Vector(1).png"></button></div>
`;

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  popup.classList.add('active');
}

openMobileModal.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

function closePopup(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  popup.classList.remove('active');
}

popup.addEventListener('click', () => {
  const modals = document.querySelectorAll('.mobile-modal.active');
  modals.forEach((modal) => {
    closePopup(modal);
  });
});
