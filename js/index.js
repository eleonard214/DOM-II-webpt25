// Your code goes here
const nav1 =document.querySelector('a')
const nav2 =nav1.nextElementSibling
const nav3 =nav2.nextElementSibling
const firstH1=document.querySelector('h1')
const allH2s=document.querySelectorAll('h2')
const firstH2=allH2s[0]
const secH2 =allH2s[1]
const thirdH2=allH2s[2]
const fourthH2=allH2s[3]
const busImage=document.querySelector('img')
const footerParagraph=document.querySelector('.footer p')


console.log(nav1)
console.log(nav2)
console.log(nav3)
console.log(firstH1)
console.log(allH2s)
console.log(firstH2)
console.log(secH2)
console.log(thirdH2)
console.log(fourthH2)
console.log(busImage)
console.log(footerParagraph)

nav1.addEventListener('auxclick', (event)=> {
    event.target.style.backgroundColor='orchid'
})
nav2.addEventListener('click', (event)=>{
    event.target.style.color='orchid'
})

nav3.addEventListener('mouseleave', (event)=> {
    event.target.style.color='orange'
})
window.addEventListener('resize', (event)=>{
    busImage.src='http://images.clipartpanda.com/city-bus-side-view-clipart-dTraX7aT9.png'
})
firstH1.addEventListener('keydown', (event)=> {
    event.target.style.color='red'
})
firstH2.addEventListener('keyup', (event)=> {
    event.target.style.border='5px solid blue'
})
secH2.addEventListener('wheel', (event)=> {
    event.target.textContent='Welcome!!!'
})
thirdH2.addEventListener('dblclick',(event)=>{
    event.target.textContent='Are You Ready?!?!'
})
fourthH2.addEventListener('focus', (event)=>{
    event.target.style.backgroundColor='cyan'
})
footerParagraph.addEventListener('mouseover', (event)=>{
    event.target.textContent="Edited in DOM by EL 2021"
})
const navLinks = document.querySelectorAll('nav a')
navLinks.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})