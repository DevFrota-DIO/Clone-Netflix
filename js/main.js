$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 20) {
            $("header").addClass("menuScroll");
        } else {
            $("header").removeClass("menuScroll");
        }
    });
});