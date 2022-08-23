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
    }
    console.log(entry.target)
  })
}, options)

// observer.observe(sectionOne)

sections.forEach(section => {
  observer.observe(section)
})