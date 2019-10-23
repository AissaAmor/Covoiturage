$("submit").click(function scroll() {
    $('html,body').animate({
        scrollTop: $(".row").offset().top},
        'slow');
});