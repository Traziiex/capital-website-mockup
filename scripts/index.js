const navBar = document.querySelector('.nav-bar');
const navCont = document.querySelector('.nav-container');
const navTop = navBar.offsetTop;

const logo = document.querySelector('.logo');

window.onscroll = function(){
    const pageY = window.pageYOffset;
    if(pageY > navTop){
       navBar.classList.add('nav-bar-smaller');
       navCont.classList.add('nav-container-after');
    }else{
        navBar.classList.remove('nav-bar-smaller');
        navCont.classList.remove('nav-container-after');
    }
}