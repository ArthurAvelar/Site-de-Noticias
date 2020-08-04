$(window).on("scroll", function(){
    if( $(this).scrollTop() > 10 ){
        $("nav.navbar").addClass("mybg-dark");
        $(".navbar-dark .navbar-nav .nav-link").css({"color" : "#fff"});//
        
    }else{
       $("nav.navbar").removeClass("mybg-dark");
        $(".navbar-dark .navbar-nav .nav-link").css({"color" : "rgba(255,255,255,.5)"});
    }
 });