$(window).scroll(
    {
        previousTop: 0
    },
    function () {
    var currentTop = $(window).scrollTop();
    if (currentTop < this.previousTop) {
        $(".main-header").show();
    } else {
        $(".main-header").hide();
    }
    this.previousTop = currentTop;
});
