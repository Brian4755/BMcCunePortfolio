import { projectData } from "./works.js"
const menuIcon = document.querySelector(".menuIcon")
const menuList = document.querySelector(".navbarList")
const cardContainer = document.getElementById('card-container')

menuIcon.addEventListener('click', function(e) {
  menuIcon.classList.toggle("change")
  menuList.classList.toggle("navbarChange")
  menuList.classList.toggle("navbarAnimation")
})

// const sectionOne = document.querySelector('.section1')
const sections = document.querySelectorAll('section')

const options = {
  root: null, //it is the viewport
  threshhold: 0,
  rootMargin: "0px"
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


cardContainer.innerHTML = projectMaterial