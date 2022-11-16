import { projectData } from "./works.js"
const menuIcon = document.querySelector(".menuIcon")
const menuList = document.querySelector(".navbarList")
const cardContainer = document.getElementById('card-container')

menuIcon.addEventListener('click', function(e) {
  menuIcon.classList.toggle("change")
  menuList.classList.toggle("navbarChange")
  menuList.classList.toggle("navbarAnimation")
})

const sections = document.querySelectorAll('.section')

const options = {
  root: null, //it is the viewport
  threshhold: 1,
  rootMargin: "0px 0px -430px 0px"
}

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
    console.log(entry.target)
  })
}, options)

// observer.observe(sectionOne)

sections.forEach(section => {
  observer.observe(section)
})

setTimeout(function(){
  console.log('page is fully loaded');
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
  let textAnimation = 'I am a junior software engineer with the desire to work with others and continuously learn through challenges'
  for (let i = 0; i < textAnimation.length; i++) {
    setTimeout(() => {
      setTimeout(() => { document.getElementById("displayDiv").innerHTML += textAnimation[i]}, 40*i)
    }, 2000)
  }
}

const element = document.getElementById('notesContainer')
const notesHeader = document.getElementById('notesHeader')
// const notesDots = document.getElementById('notesDots')
const notesLine1 = document.getElementById('notesLine1')
const notesLine2 = document.getElementById('notesLine2')
const displayDiv = document.getElementById('displayDiv')
const spanBefore = document.getElementById('spanBefore')
var styleElem = document.head.appendChild(document.createElement("style"));
// const spanAfter = document.getElementById('spanAfter')

let scrolled = true

$(window).scroll(function () {
  if($(window).scrollTop() > 400 && scrolled === true) {
    element.classList.add("notesContainer")
    notesHeader.classList.add("notesHeader")
    // notesDots.classList.add("notesDots")
    notesLine1.classList.add("notesLine1")
    notesLine2.classList.add("notesLine2")
    displayDiv.classList.add("displayDiv")
    
    setTimeout(() => {
      console.log("Delayed for 1 second.");
      spanBefore.classList.add("spanBefore")
      // spanAfter.classList.add("spanAfter")


      styleElem.innerHTML = "#displayDiv::after {  content: '|';}";


    }, 1100)

    textFlow()
    console.log('hi')
    scrolled = false
    }
  }
  // else {
    //   element.removeClass("")
    // }
  )

  const htmlIcon = document.getElementById('htmlIcon')
  const jsIcon = document.getElementById('jsIcon')
  const cssIcon = document.getElementById('cssIcon')
  const reactIcon = document.getElementById('reactIcon')
  const pythonIcon = document.getElementById('pythonIcon')
  const nodejsIcon = document.getElementById('nodejsIcon')

  function htmlAnimation() {
    // const icons = [htmlIcon, jsIcon]
    // jsIcon.style.left = '100%'
    for (let i = 0; i <= 5350; i=i+0.5) {
      setTimeout(() => {
        htmlIcon.style.left = i*0.02 - 7 + '%'
        // jsIcon.style.left = i*0.2 + '%'
        // console.log(htmlIcon.style.left)
        if (htmlIcon.style.left === '11.5%') {
          jsAnimation()
        }

        if (htmlIcon.style.left === '100%') {
          console.log('100%')
          htmlIcon.style.left = '-7%'
          return htmlAnimation()
        }
      }, 3*i)
    }
  }

  function jsAnimation() {
    for (let i = 0; i <= 5350; i=i+0.5) {
      setTimeout(() => {
        jsIcon.style.left = i*0.02 - 25.5 + '%'
      }, 3*i)
    }
  }

  function cssAnimation() {
    // const icons = [htmlIcon, jsIcon]
    cssIcon.style.left = '-18%'
    // jsIcon.style.left = '100%'
    for (let i = 0; i <= 590; i=i+0.5) {
      setTimeout(() => {
        cssIcon.style.left = i*0.2 - 18 + '%'
        // jsIcon.style.left = i*0.2 + '%'
        if (cssIcon.style.left === '100%') {
          console.log('100%')
          return cssAnimation()
        }
      }, 30*i)
    }
  }

  function reactAnimation() {
    // const icons = [htmlIcon, jsIcon]
    reactIcon.style.left = '-18%'
    // jsIcon.style.left = '100%'
    for (let i = 0; i <= 590; i=i+0.5) {
      setTimeout(() => {
        reactIcon.style.left = i*0.2 - 18 + '%'
        // jsIcon.style.left = i*0.2 + '%'
        if (reactIcon.style.left === '100%') {
          console.log('100%')
          return reactAnimation()
        }
      }, 30*i)
    }
  }

  function pythonAnimation() {
    // const icons = [htmlIcon, jsIcon]
    pythonIcon.style.left = '-18%'
    // jsIcon.style.left = '100%'
    for (let i = 0; i <= 590; i=i+0.5) {
      setTimeout(() => {
        pythonIcon.style.left = i*0.2 - 18 + '%'
        // jsIcon.style.left = i*0.2 + '%'
        if (pythonIcon.style.left === '100%') {
          console.log('100%')
          return pythonAnimation()
        }
      }, 30*i)
    }
  }

  function nodejsAnimation() {
    // const icons = [htmlIcon, jsIcon]
    nodejsIcon.style.left = '-108%'
    // jsIcon.style.left = '100%'
    for (let i = 0; i <= 590; i=i+0.5) {
      setTimeout(() => {
        nodejsIcon.style.left = i*0.2 + '%'
        // jsIcon.style.left = i*0.2 + '%'
        if (nodejsIcon.style.left === '18%') {
          console.log('100%')
          return nodejsAnimation()
        }
      }, 30*i)
    }
  }

  // nodejsAnimation()
  // pythonAnimation()
  // reactAnimation()
  // cssAnimation()
  // jsAnimation()
  htmlAnimation()
cardContainer.innerHTML = projectMaterial