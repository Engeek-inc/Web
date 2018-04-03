window.onload = function () {
    if (window.pageYOffset > 150) {
        $("header").fadeIn('fast');
    } else {
        $("header").fadeOut('fast');
    }
}
window.onscroll = function () {
    if (window.pageYOffset > 150) {
        $("header").fadeIn('fast');
        $(".Footer").fadeOut('fast');
        $(".ScrollUp").fadeIn('fast');
    } else {
        $("header").fadeOut('fast');
        $(".Footer").fadeIn('fast');
        $(".ScrollUp").fadeOut('fast');
    }
}
