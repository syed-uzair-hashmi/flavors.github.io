
AOS.init({
    offset: 250,
     duration: 800,
});

// top-btn
 window.onscroll = function() {
    var btn =document.getElementById("tbtn");
    if (window.pageYOffset > 500) {
        btn.classList.add('show');
    } else {
        btn.classList.remove('show');
    }
};

