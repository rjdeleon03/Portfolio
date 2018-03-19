$("#a-projects").on("click", function() {
    $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1000);
});

$("#a-skills").on("click", function() {
    $("html, body").animate({ scrollTop: $("#skills").offset().top }, 1000);
});

$('.grid').packery({
    itemSelector: '.grid-item',
    gutter: '.gutter-sizer',
    percentPosition: true
  });