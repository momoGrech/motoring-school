// JQuery Smooth Scroll

$('.header__nav .link, .header__touch--link, .arrow-link').on('click', function(e) {
     if(this.hash !== '') {
         const hash = this.hash;

         $('html, body').animate({
             scrollTop: $(hash).offset().top
         }, 800);
     }
});




// touch screen
const touchScreenLink = document.querySelector('.header__touch--link')
const touchScreen = document.querySelector('.header__touch')

touchScreenLink.addEventListener('click', function(){
    touchScreen.classList.add('touch-fadeOut')
})




// scroll up button 
const btnScrollUp = document.querySelector('.arrow-up');

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
        btnScrollUp.classList.add("active-arrow")
        touchScreen.classList.add('touch-fadeOut')
    } else {
        btnScrollUp.classList.remove("active-arrow")
        touchScreen.classList.remove('touch-fadeOut')
    }
})