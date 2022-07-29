const store = [
    {
        id: 1,
        title: 'Multi-Post Stories',
        name: 'Multi-Post Stories',
        description: 'A React and Rails web app',
        detail: 'This is an implemetation os a web application for bookin the services of a lawyer. The front end is built on react/redux and backend on Rails.',
        image: './images/screenshot.png',
        technologies: {
          tech1: 'Ruby on rails',
          tech2: 'PLSQL',
          tech3: 'JavaScript',
          tech4: 'React/Redux',
        },
        livelink: '',
        sourcelink: '',
      },
      {
        id: 2,
        title: 'Multi-Post Stories',
        name: 'Multi-Post Stories',
        description: 'Management System',
        detail: 'The system automates most of the processes that you might think of in a University setting. Stusents are able log in to the system and carry out activities like selecting courses that they would have otherwise done manually. Lecturers and the management at large are able to see all student request in addditon to carrrying out adminstrative duties. The system is built on Java, Javascript, Html & CSS and heavily relies on PLSQL functions and triggers for functionalities',
        image: './images/ueab.png',
        technologies: {
          tech1: 'Ruby on rails',
          tech2: 'PLSQL',
          tech3: 'JavaScript',
          tech4: 'Html & CSS',
        },
        livelink: '',
        sourcelink: '',
      },
      {
        id: 3,
        title: 'Multi-Post Stories',
        name: 'Multi-Post Stories',
        description: 'Travel Sumit Website',
        detail: 'The Awesome Travel Summit Website give ingormation about the yearly travel agencies summit that hold in different parts of the World. The website is built purely on HTML, CSS AND Vanila JavaScript ',
        image: './asse',
        technologies: {
          tech1: 'HTML',
          tech2: 'CSS',
          tech3: 'JavaScript',
        },
        livelink: '',
        sourcelink: '',
      },
      {
        id: 4,
        title: 'Multi-Post Stories',
        name: 'Multi-Post Stories',
        description: 'Management System',
        detail: 'The system automates most of the processes that you might think of in a University setting. Stusents are able log in to the system and carry out activities like selecting courses that they would have otherwise done manually. Lecturers and the management at large are able to see all student request in addditon to carrrying out adminstrative duties. The system is built on Java, Javascript, Html & CSS and heavily relies on PLSQL functions and triggers for functionalities',
        image: './images/aua.png',
        technologies: {
          tech1: 'Ruby on rails',
          tech2: 'PLSQL',
          tech3: 'JavaScript',
          tech4: 'Html & CSS',
        },
        livelink: '',
        sourcelink: '',
      },
    ]
  
  
const containerPopUp = document.querySelector('#mobile-pop-up');
const container = document.querySelector('#container-div');

store.forEach((item) => {
    const content = `
     <section id="container">
        <div class="container-image">
          <img class="item-image" src="${item.image}" alt="ueab-university" />
        </div>
        <div class="container-title">
          <h4>
            ${item.name} <br/>
            ${item.description}
          </h4>
        </div>
        <div class="container-projects">
          <ul class="container-projects-element">
            <li>${item.technologies.tech1}</li>
            <li>${item.technologies.tech2}</li>
            <li>${item.technologies.tech3}</li>
            <li>${item.technologies.tech4}</li>
          </ul>
        </div>
        <button onclick="createModal(${item.id})" class="container-btn" type="button" name="button">
          See Project
        </button>
      </section>`;
    container.innerHTML += content;
  });


// handles the modal on button click
const createModal = (portfolioId) => { // eslint-disable-line no-unused-vars
    const portfolioArr = store.filter((portfolio) => portfolio.id === portfolioId);
    const [portfolioObj] = portfolioArr;
  
    containerPopUp.style.display = 'block';
    const content = `<div class="mobile-pop-up-container-image">
          <a onclick="closeModal()" id="modal-hiden-image">
          <img src="images/iconcancel.png" alt=""/></a>
        <img class="mobile-pop-up-item-image" src="${portfolioObj.image}" alt="ueab-university"/>
        </div>
        <div class="mobile-pop-up-container-title">
          <h2>${portfolioObj.title}</h2>
          <div class="hidden-mobile-button-pop-up">
            <button class="mobile-pop-up-container-btn" type="button" name="button">
              <a href="${portfolioObj.livelink}" target="_blank" rel="noopener noreferrer">See Live
            <i class="fab fa-github fa-sm modal-social"></i></a></button>
            <button class="" type="button" name="button">
              <a href="./index.html" target="_blank">See Source
            <i class="fab fa-github fa-sm modal-social"></i></a></button>
          </div>
        </div>
        <div class="mobile-pop-up-container-projects">
          <ul class="mobile-pop-up-container-projects-element">
            <li>${portfolioObj.technologies.tech1}</li>
            <li>${portfolioObj.technologies.tech2}</li>
            <li>${portfolioObj.technologies.tech3}</li>
            <li>${portfolioObj.technologies.tech4}</li>
          </ul>
        </div>
        <div class="mobile-pop-up-text">
            <p>${portfolioObj.detail}</p>
        </div>
        <div class="mobile-button-pop-up">
          <button class="mobile-pop-up-container-btn" type="button" name="button">
            <a href="${portfolioObj.livelink}" target="_blank">See Live
          <i class="fab fa-github fa-sm modal-social"></i></a></button>
          <button class="mobile-pop-up-container-btn" type="button" name="button">
            <a href="./index.html" target="_blank">See Source
          <i class="fab fa-github fa-sm modal-social"></i></a></button>
      </div>`;
    containerPopUp.innerHTML = content;
  };
  
  // to close the modal
  function closeModal() { // eslint-disable-line no-unused-vars
    containerPopUp.style.display = 'none';
  }
  