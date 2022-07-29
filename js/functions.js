const store = {

    card1: {
      topic: 'Tonic',
      technologies: ['html', 'css', 'javaScript'],
      details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      image: './assets/',
      feature: ['Canopy', './assets/', 'Back End Dev', './assets/', '2022'],
      live: '',
      source: '',
    },

    card2: {
      topic: 'Multi-Post Stories',
      technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
      image: './assets/',
      feature: ['FACEBOOK', './assets/Counter.png', 'Full Stack Dev', './assets/Counter.png', '2022'],
      live: 'www.google.com',
      source: 'www.google.com',
    },

    card1: {
      topic: 'Tonic',
      technologies: ['html', 'css', 'javaScript'],
      details: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
      image: './assets/',
      feature: ['Canopy', './assets/', 'Back End Dev', './assets/', '2022'],
      live: '',
      source: '',
    },
    card2: {
      topic: 'Multi-Post Stories',
      technologies: ['html', 'Ruby on rails', 'css', 'javaScript'],
      image: './assets/',
      feature: ['FACEBOOK', './assets/Counter.png', 'Full Stack Dev', './assets/Counter.png', '2022'],
      live: 'www.google.com',
      source: 'www.google.com',
    },
  }

 function elementFactory(element, idd="", cls=""){
  let el = document.createElement(element)
  if (cls.length >= 1){
    el.className = cls
  }
  el.id = idd
  return  el

 }
  
function ulGenerator(iterator,className){
  let ul = elementFactory('ul', 'popUpRole');
  let li;
  for (let i= 0; i< iterator.length; i+=1 ){
     li = document.createElement('li')
     li.className=className

     if(/.\/assets\//.test()){
        let img =elementFactory('img', "counters")
        img.setAttribute("src", "assets/Counter.png")
        img.setAttribute("alt", "dot")
        li.appendChild(img)
     }else{
      li.textContent = iterator[i]
     }
     ul.appendChild(li)
  }
  return ul
}

function createPopup(obj){
  
    let section1 = elementFactory('div', 'popUpSection1');
    let close = elementFactory('img', 'popUpClose');
    close.setAttribute("src", "assets/Union.png")
    let header2 = elementFactory('div', 'header2');
    header2.textContent = obj.topic
  
    let closeContainer =elementFactory('div',"closeContainer")
    closeContainer.appendChild(close)
    section1.appendChild(closeContainer)
    section1.appendChild(header2)
    section1.appendChild(ulGenerator(obj.feature,'list'))

    let section2 = elementFactory("img", "detailsImg")
    section2.setAttribute("src", "assets/tonic.png")
    section2.setAttribute("alt", "details image")

  
  
    let description = elementFactory("p", "popDescription")
    description.textContent=obj.details
    
 
    let liveBtn = elementFactory("button", "BtnLive")
    let sourceBtn = elementFactory("button", "SourceBtn")
    liveBtn.textContent = "See Live"
    sourceBtn.textContent ="See Source"

    let imgL = elementFactory("img", "imgBtnS")
    let imgS = elementFactory("img", "imgBtnS")
    liveBtn.appendChild(imgL)
    sourceBtn.appendChild(imgS)

    let btnWrapper = elementFactory("div", "btnWrapper")
    btnWrapper.appendChild(liveBtn)
    btnWrapper.appendChild(sourceBtn)

    let btnContainer = elementFactory("div", "btnContainer")
    btnContainer.appendChild(ulGenerator(obj.technologies,'techList'))
    btnContainer.appendChild(btnWrapper)

    let section3 = elementFactory("div", "popTextContainer")
    section3.appendChild(description)
    section3.appendChild(btnContainer)

    let container = elementFactory('div', 'popUpContainer');
    container.appendChild(section1)
    container.appendChild(section2)
    container.appendChild(section3)

 console.log(container)
  }

  console.log(createPopup(store.card1)) 
