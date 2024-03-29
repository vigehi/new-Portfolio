// initialize variables from html
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


//= ==========================PROJECTS-CARDS DATA==================================//
const projectsData = [
  {
    name: 'To Do list',
    client: 'Myself',
    id: 1,
    year: 2023,
    image: './assets/img1.jpg',
    technologies: ['html', 'css', 'javascript'],
    description:
    'To-do list" is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. I build a simple website that allows for doing that, and I do it using ES6 and Webpack!',
      liveVersion: 'https://vigehi.github.io/To-do-list/dist/',
      source: 'https://github.com/vigehi/To-do-list',
  },
  {
    name: 'Counselling Sessionss App',
    client: 'Myself',
    id: 2,
    year: 2022,
    image: './assets/cance.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'This is a simple web based website that gives more information about current counselling sessions and upcommng counselling session given by Blessed Adegu family, Anyone is invited to visit the site and book gfor counselling sessions to experience best counsellors',
    liveVersion: 'https://peaceful-puffpuff-3c2f23.netlify.app/',
    source: 'https://github.com/vigehi/project1',
  },

  {
    name: 'Series Episodes',
    client: 'Myself',
    year: 2022,
    id: 3,
    image: './assets/epi.png',
    technologies: ['html', 'css', 'javascript'],
    description:
      'A web based application created in react tha gives the all episodes of a movie series tha allows users to easily get to know more about the series and view the details like and leave a comment, Created data is called from an api',
      liveVersion: 'https://cerulean-gumdrop-a9551c.netlify.app/',
      source: 'https://github.com/vigehi/cap1',
  },

  {
    name: 'Best Technological Post',
    client: 'Myself',
    year: 2020,
    id: 4,
    image: './assets/tech.png',
    technologies: ['react', 'css', 'javascript'],
    description:
      'A Technological web based application tha give out technological post posted everyday, the web based application gives details on technology and its trends. It also give more information about the post for users to understand',
      liveVersion: 'https://whimsical-choux-fb6e7b.netlify.app/',
      source: 'https://github.com/vigehi/react-capstone-project',
  },
];

//= ==============================DETAILS POPUP==================================//
//= =========GLOBAL VARIABLES====================//
// Get the modal_content div
const popupProjectCard = document.getElementById('popupProjectCard');
function createProjectCard(pid) {
  // Project title
  const projName = document.createElement('div');
  projName.classList.add('popup-project-title');
  const h2 = document.createElement('h2');
  h2.innerText = projectsData[pid].name;
  projName.appendChild(h2);
  popupProjectCard.appendChild(projName);
  // Client-frame
  const clientFrame = document.createElement('div');
  clientFrame.classList.add('popup-client-frame');
  /* CLIENT NAME */
  const ul1 = document.createElement('ul');
  const li1 = document.createElement('li');
  const clientName = document.createElement('div');
  clientName.classList.add('popup-client-name');
  const h31 = document.createElement('h3');
  h31.innerText = 'CANOPY';
  clientName.appendChild(h31);
  li1.appendChild(clientName);
  ul1.appendChild(li1);
  /* ROLE TXT */
  const li2 = document.createElement('li');
  const roleTxt = document.createElement('div');
  const span1 = document.createElement('span');
  span1.classList.add('solid-circle');
  span1.innerHTML = '&#9679;';
  roleTxt.appendChild(span1);
  const h32 = document.createElement('h3');
  h32.innerText = 'Back End Dev';
  roleTxt.appendChild(h32);
  li2.appendChild(roleTxt);
  ul1.appendChild(li2);
  /* YEAR TXT */
  const li3 = document.createElement('li');
  const yearTxt = document.createElement('div');
  const span2 = document.createElement('span');
  span2.classList.add('solid-circle');
  span2.innerHTML = '&#9679;';
  yearTxt.appendChild(span2);
  const h33 = document.createElement('h3');
  h33.innerText = projectsData[pid].year;
  yearTxt.appendChild(h33);
  li3.appendChild(yearTxt);
  ul1.appendChild(li3);
  /* Finally append the whole 'ul' list to clientFrame */
  clientFrame.appendChild(ul1);
  popupProjectCard.appendChild(clientFrame);
  /* ADD IMAGE SNAPSHOOT-PORTFOLIO */
  const imgPortfolio = document.createElement('div');
  imgPortfolio.classList.add('popup-snapshoot-portfolio');
  const img = document.createElement('img');
  img.setAttribute('src', projectsData[pid].image, 'alt', `project${pid + 1}image`);
  imgPortfolio.appendChild(img);
  popupProjectCard.appendChild(imgPortfolio);
  /* ADD DESCRIPTION & ACTION-BUTTONS & TAGS CONTAINER */
  const descContainer = document.createElement('div');
  descContainer.classList.add('popup-description-container');
  /* ADD DESCRIPTION */
  const description = document.createElement('div');
  description.classList.add('popup-detail-txt');
  const p = document.createElement('p');
  p.innerText = projectsData[pid].description;
  description.appendChild(p);
  descContainer.appendChild(description);
  /* ADD TAGS & ACTION-BUTTONS CONTAINER */
  const actionContainer = document.createElement('div');
  actionContainer.classList.add('popup-action-container');
  /* ADD TAGS */
  const tags = document.createElement('div');
  tags.classList.add('popup-tags');
  const ul2 = document.createElement('ul');
  const li4 = document.createElement('li');
  li4.innerText = 'html';
  ul2.appendChild(li4);
  const li5 = document.createElement('li');
  li5.innerText = 'css';
  ul2.appendChild(li5);
  const li6 = document.createElement('li');
  li6.innerText = 'javascript';
  ul2.appendChild(li6);
  tags.appendChild(ul2);
  actionContainer.appendChild(tags);
  /* ADD ACTION-BUTTONS */
  const popupAction = document.createElement('div');
  popupAction.classList.add('popup-action');
  const aLive = document.createElement('a');
  aLive.href = projectsData[pid].liveVersion;
  const btnLive = document.createElement('button');
  btnLive.innerHTML = 'See Live <i class="fa-solid fa-arrow-up-right-from-square"></i>';
  aLive.appendChild(btnLive);
  popupAction.appendChild(aLive);
  const aSource = document.createElement('a');
  aSource.href = projectsData[pid].source;
  const btnSource = document.createElement('button');
  btnSource.innerHTML = 'Source Code <i class="fa-brands fa-github"></i>';
  aSource.appendChild(btnSource);
  popupAction.appendChild(aSource);
  actionContainer.appendChild(popupAction);
  descContainer.appendChild(actionContainer);
  popupProjectCard.appendChild(descContainer);
}

// Get the modal
const modal1 = document.getElementById('projectDetails');
// When the user clicks on the button, open the modal
function popupDetails(projId) {
  createProjectCard(projId - 1);
  modal1.style.display = 'block';
}

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
  // This while removes all the CARD child-elements.
  while (popupProjectCard.firstChild) {
    popupProjectCard.removeChild(popupProjectCard.firstChild);
  }
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
    // This while removes all the CARD child-elements.
    while (popupProjectCard.firstChild) {
      popupProjectCard.removeChild(popupProjectCard.firstChild);
    }
  }
};

/* JUST TO SKIP LINTER ERRORS */
popupDetails.call();
toggleMenu.call();
/* END OF JUST TO SKIP LINTER ERRORS */

// This function validates the email on the formspree
function ValidateEmail(inputText) {
  const mailformat = '.*[A-Z]+.*';
  if (!inputText.match(mailformat)) {
    document.getElementById('email-fail-id').style.display = 'none';
    return true;
  }
  document.getElementById('email-fail-id').style.display = 'flex';
  return false;
}

function myFunction(e) { // eslint-disable-line no-unused-vars
  if (!ValidateEmail(e.value)) {
    document.querySelector('.contact-form-btn').setAttribute('disabled', 'true');
  } else {
    document.querySelector('.contact-form-btn').removeAttribute('disabled', 'true');
  }
}
