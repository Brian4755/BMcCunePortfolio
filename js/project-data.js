import { projectData } from "./works.js"
const menuIcon = document.querySelector(".menuIcon")
const menuList = document.querySelector(".navbarList")
const cardContainer = document.getElementById('card-container')
const home = document.getElementById('home')
const about = document.getElementById('about')
const work = document.getElementById('work')
const contact = document.getElementById('contact')
const section3 = document.querySelector('.icons')
const section1 = document.querySelector('.section1Background')

menuIcon.addEventListener('click', function(e) {
  menuIcon.classList.toggle("change")
  menuList.classList.toggle("navbarChange")
  menuList.classList.toggle("navbarAnimation")
})


  home.addEventListener('click', function(e) {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })

about.addEventListener('click', function(e) {
  section1.scrollIntoView()
})
work.addEventListener('click', function(e) {
  section3.scrollIntoView()
})
contact.addEventListener('click', function(e) {
  window.scrollTo(0, document.body.scrollHeight + 100);
})

const section2Text = document.querySelectorAll('.section2Text')
const section3Text = document.querySelectorAll('.section3Text')
const educationalBackground = document.querySelectorAll('.educationalBackground')
const selfimage2 = document.querySelectorAll('.selfimage2')
const projectContainer = document.querySelectorAll('.flex-container')
const iPhone = document.querySelectorAll('.phoneImageContainer')

const options = {
  root: null, //it is the viewport
  threshhold: 1,
  rootMargin: "0px 0px -140px 0px"
}

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  })
}, options)


section3Text.forEach(section => {
  observer.observe(section)
})

educationalBackground.forEach(section => {
  observer.observe(section)
})
section2Text.forEach(section => {
  observer.observe(section)
})
selfimage2.forEach(section => {
  observer.observe(section)
})
projectContainer.forEach(section => {
  observer.observe(section)
})
iPhone.forEach(section => {
  observer.observe(section)
})

setTimeout(function(){
  const element = document.querySelector(".preload");
  element.classList.remove("preload");
}, 1000);

const projectMaterial = projectData.map(project => {
  const html = `  
    <div class="card" style="width: 20rem;">
      <img class="card-img-top" src="${project.image}" alt="...">
      <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div>
          <a href="${project.gitHub}" target="_blank" class="btn btn-primary">GitHub</a>
          <a href="${project.deployment}" target="_blank" class="btn btn-secondary">Deployment</a>
        </div>
      </div>
    </div>
  `
  return html
}).join('')

function textFlow() {
  let textAnimation = 'I am a experienced software engineer with the desire to work with others and create complex front-end components from scratch like this one'
  for (let i = 0; i < textAnimation.length; i++) {
    setTimeout(() => {
      setTimeout(() => { document.getElementById("displayDiv").innerHTML += textAnimation[i]}, 40*i)
    }, 2000)
  }
}

const element = document.getElementById('notesContainer')
const notesHeader = document.getElementById('notesHeader')
const notesLine1 = document.getElementById('notesLine1')
const notesLine2 = document.getElementById('notesLine2')
const displayDiv = document.getElementById('displayDiv')
const spanBefore = document.getElementById('spanBefore')
var styleElem = document.head.appendChild(document.createElement("style"));

let scrolled = true

$(window).scroll(function () {
  if($(window).scrollTop() > 400 && scrolled === true) {
    element.classList.add("notesContainer")
    notesHeader.classList.add("notesHeader")
    notesLine1.classList.add("notesLine1")
    notesLine2.classList.add("notesLine2")
    displayDiv.classList.add("displayDiv")
    
    setTimeout(() => {
      spanBefore.classList.add("spanBefore")


      styleElem.innerHTML = "#displayDiv::after {  content: '|';}";


    }, 1100)

    textFlow()
    scrolled = false
    }
  }
  )

  const htmlIcon = document.getElementById('htmlIcon')
  const jsIcon = document.getElementById('jsIcon')
  const cssIcon = document.getElementById('cssIcon')
  const reactIcon = document.getElementById('reactIcon')
  const pythonIcon = document.getElementById('pythonIcon')
  const nodejsIcon = document.getElementById('nodejsIcon')

  function iconAnimation() {
    for (let i = 0; i <= 53500; i=i+0.5) {
      setTimeout(() => {
        htmlIcon.style.left = ((i % 5350)*0.02 - 7) + '%'
        jsIcon.style.left = (((i - 891) % 5350)*0.02 - 25.5) + '%'
        cssIcon.style.left = (((i - 1782) % 5350)*0.02 - 44) + '%'
        reactIcon.style.left = (((i - 2673) % 5350)*0.02 - 62.5) + '%'
        pythonIcon.style.left = (((i - 3564) % 5350)*0.02 - 81) + '%'
        nodejsIcon.style.left = (((i - 4455) % 5350)*0.02 - 99.5) + '%'
        if (i === 53500){
          return iconAnimation()
        }
      }, 3*i)
    }
  }


  iconAnimation()
cardContainer.innerHTML = projectMaterial