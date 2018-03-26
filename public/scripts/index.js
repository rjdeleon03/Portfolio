$(".a-top").on("click", function() {
    $("html, body").animate({ scrollTop: $("#about").offset().top }, 1000);
});

$(".a-skills").on("click", function() {
    $("html, body").animate({ scrollTop: $("#skills").offset().top }, 1000);
});

$(".a-projects").on("click", function() {
    $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1000);
});

$(".a-contact").on("click", function() {
    $("html, body").animate({ scrollTop: $("#contact").offset().top }, 1000);
});

var $navBarTop = $("#skills").offset().top;
var isPositionFixed = ($("#about-nav").css("position") == "fixed");

// Navbar behavior on scroll
$(window).scroll(function(e){ 
    repositionNavbar();
});

// Navbar behavior on resize
$(window).resize(function(e) {
    $navBarTop = $("#skills").offset().top;
    repositionNavbar();
});

// Navbar behavior on orientation change
$(window).on("orientationchange", function(e) {
    $navBarTop = $("#skills").offset().top;
    repositionNavbar();
});

// Reposition navbar based on position 
function repositionNavbar() {
    var $el = $("#about-nav");     
    if ($(this).scrollTop() >= $navBarTop && !isPositionFixed){ 
        $("#about-nav-menu").fadeIn(200);
        $("#about-nav-menu").removeClass("hidden");
        $("#about-nav-menu").addClass("sticky");
        isPositionFixed = true;
    }
    if ($(this).scrollTop() < $navBarTop && $(this).scrollTop() > 0 && isPositionFixed)
    {
        $("#about-nav-menu").fadeOut(200, function() {  
            $("#about-nav-menu").removeClass("sticky");
            $("#about-nav-menu").addClass("hidden");
            isPositionFixed = false;
        });
    } 
}