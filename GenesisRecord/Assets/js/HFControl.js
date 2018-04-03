window.onload = function () {
    if (window.pageYOffset > 150) {
        $(".Header").fadeIn('fast');
    } else {
        $(".Header").fadeOut('fast');
    }
}
window.onscroll = function () {
    if (window.pageYOffset > 150) {
        $(".Header").fadeIn('fast');
        $(".Footer").fadeOut('fast');
        $(".ScrollUp").fadeIn('fast');
    } else {
        $(".Header").fadeOut('fast');
        $(".Footer").fadeIn('fast');
        $(".ScrollUp").fadeOut('fast');
    }
}
