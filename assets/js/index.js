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

// navbar behavior
$(window).scroll(function(e){ 
    var $el = $("#about-nav"); 
    var isPositionFixed = ($el.css("position") == "fixed");
    console.log($(this).scrollTop() + " --- " + $("#about-nav").position().top);
    if ($(this).scrollTop() >= $navBarTop && !isPositionFixed){ 
        $("#about-nav").animate({
            backgroundColor: "#3c3c3c",
        });
      $("#about-nav").css({"position": "fixed", "top": "0px", "left": "0px"}); 
    }
    if ($(this).scrollTop() < $navBarTop && isPositionFixed)
    {
        $("#about-nav").animate({
            backgroundColor: "rgba(0, 0, 0, 0)",
        });
      $("#about-nav").css({"position": "static", "top": "0px", "left": "0px"}); 
    } 
});