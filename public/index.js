const contactButton = document.getElementById('contact-button')
const contactArea = document.getElementById('contact-form')
const closeButton = document.getElementById('fa-xmark')
const load = document.getElementById('load')
const responsiveButton = document.getElementById('responsive-button')
const responsiveHeader = document.getElementById('response-header')
const responseClose = document.getElementById('response-close')
contactButton.addEventListener('click' , () =>{
    window.location.href = '/components/contact.html'
})
closeButton.addEventListener('click', () =>{
    contactArea.style.display = 'none'
})
window.addEventListener('load' ,() =>{
    setTimeout(() => {
       load.style.display = 'none'
    }, 1200);
})
responsiveButton.addEventListener('click', () =>{
    responsiveHeader.style.display = 'block'
})
responseClose.addEventListener('click', () =>{
    responsiveHeader.style.display = 'none'
} )