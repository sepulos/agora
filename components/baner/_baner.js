var banerBig = (function () {

  //catche DOM
  var $baner = $('.baner');
  var $slider = $baner.find('.baner__slider');

  //bind events

  function slick() {
    $slider.waitForImages(function () {
      $slider.slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
      });
    });

  }

  var init = function () {
    slick();

  };


  $(document).ready(function () {
    slick();
  });



})();