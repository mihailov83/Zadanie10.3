$(function () {
    var carouselList = $('#carousel ul');
    setInterval(changeSlide, 4000);

    function changeSlide() {
        carouselList.animate({
            'marginLeft': -800
        }, 2000, moveFirstSlide);
    };

    function moveFirstSlide() {
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        lastItem.after(firstItem);
        carouselList.css({
            marginLeft: 0
        });
    };
});