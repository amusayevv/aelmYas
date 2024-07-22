// Запрет на копирование текста на сайте
document.ondragstart = noselect;
// document.onselectstart = noselect;
// document.oncontextmenu = noselect;
function noselect() {return false;}





document.addEventListener('mousemove', (e) => {
    const height = circle.offsetHeight;
    const width = circle.offsetWidth;
  
    if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.parentNode.tagName === 'A' ||
        e.target.parentNode.tagName === 'BUTTON' ||
        e.target.parentNode.tagName === 'INPUT' ||
        e.target.tagName === 'INPUT' ||
        e.target.parentNode.parentNode.tagName === 'A' ||
        e.target.parentNode.parentNode.parentNode.tagName === 'A'
    ) {
        circle.classList.add('big');
    } else {
        circle.classList.remove('big');
    }
  
    setTimeout(() => { 
        circle.style.left = `${e.clientX - width/2}px`;
        circle.style.top = `${e.clientY - height/2}px`;
    }, 20);
});

document.addEventListener('click', e => {
    circle.classList.add("expand");
    setTimeout(() => {
        circle.classList.remove("expand");
    }, 500);
});


// ***************************************************

$(document).ready(function() {
    $(".header__burger").on("click", function() {
        $(".burgerMenu").toggleClass("active");
    });
});