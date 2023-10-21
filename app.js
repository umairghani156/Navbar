const nav = document.querySelector('.navbar');
function myHandler(){
    nav.style.visibilty = 'hidden'
    nav.style.transform = 'translate(-100%)'
}
function offHandler(){
    nav.style.visibilty = 'visible'
    nav.style.transform = 'translate(0%)'
}