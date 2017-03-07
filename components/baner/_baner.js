var banerBig = (function () {

  //catche DOM
  var $baner;
  var $slider;

  //bind events

  var init = function () {
    $baner = $('.baner');

    if ($baner.length > 0) {
      $slider = $baner.find('.baner__slider');

    }
  };

  $(document).ready(function () {
    init();
    slick();

  });

  function slick() {
    $slider.waitForImages(function () {
      $slider.slick({
        infinite: true,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2500
      });
    });

  }
})();