$("#a-projects").on("click", function() {
    $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1000);
});

$("#a-skills").on("click", function() {
    $("html, body").animate({ scrollTop: $("#skills").offset().top }, 1000);
});

$(".grid").packery({
    itemSelector: ".grid-item",
    gutter: ".gutter-sizer",
    percentPosition: true
});

var $navBarTop = $("#about-nav").position().top;
var isPositionFixed = ($("#about-nav").css("position") == "fixed");

// navbar behavior
$(window).scroll(function(e){ 
    var $el = $("#about-nav"); 
    if ($(this).scrollTop() >= $navBarTop && !isPositionFixed){ 
        $("#about-nav").animate({
            backgroundColor: "rgba(60, 60, 60, 0.9)",
        }, 300);
      $("#about-nav").css({"position": "fixed", "top": "0px", "left": "0px", "right": "0px"}); 
      isPositionFixed = true;
    }
    if ($(this).scrollTop() < $navBarTop && $(this).scrollTop() > 0 && isPositionFixed)
    {
        $("#about-nav").animate({
            backgroundColor: "rgba(0, 0, 0, 0)",
        }, 200);
      $("#about-nav").css({"position": "static", "top": "0px", "left": "0px"}); 
      isPositionFixed = false;
    } 
});