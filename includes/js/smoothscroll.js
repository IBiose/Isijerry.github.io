$(".navbar-responsive-collapse ul li a[href^='#']").on('click', function(e) {

    //Prevent default anchor click behaviour
        e.preventDefault();
    
    // Store hash
        var hash = this.hash;
    
    // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top -50
        }, 900, function(){
    
    // when done, add hash to url
    // default click behaviour
            
    window.location.hash = hash;

    });
                                            
});

$("a.navbar-brand[href^='#']").on('click', function(e) {

    //Prevent default anchor click behaviour
        e.preventDefault();
    
    // Store hash
        var hash = this.hash;
    
    // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top -50
        }, 900, function(){
    
    // when done, add hash to url
    // default click behaviour
            
    window.location.hash = hash;

    });
                                            
});
$("#back-to-top a[href^='#']").on('click', function(e) {

    //Prevent default anchor click behaviour
        e.preventDefault();
    
    // Store hash
        var hash = this.hash;
    
    // animate
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top -50
        }, 900, function(){
    
    // when done, add hash to url
    // default click behaviour
            
    window.location.hash = hash;

    });
                                            
});