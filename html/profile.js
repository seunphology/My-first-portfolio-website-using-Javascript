$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
    // removing smooth scroll on slide-up button click
    $('html').css("scrollBehavior", "auto");
});
$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

var typed = new Typed(".typing", {
    strings: ["Geoscientist", "Developer", "Gamer", "Designer", "Freelancer"],
    typeSpeed: 1000,
    backSpeed: 60,
    loop: true
});


var typed = new Typed(".typing-2", {
    strings: ["Astronomy", "Math", "And", "Manchester United"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});