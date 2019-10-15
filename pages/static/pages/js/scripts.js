$ (function () {
    // abre e fecha menu
    $ ('.nav-toggle, .nav-close').click(function(e) {
        e.preventDefault();
        $ ('.nav').toggleClass('active');
    });
    // fixar header
    $ (window).scroll(function(){
        if ($ (this).scrollTop() < 100) {
            $ ('.header').removeClass('fixed');
        }
        else {
            $ ('.header').addClass('fixed');
        }
    });
});
