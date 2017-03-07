var banerBig = (function () {

  //catche DOM
  var $slider;
  var $for;
  var $controls;

  //bind events

  var init = function () {
    $slider = $('.slider');

    if ($slider.length > 0) {
      $for = $slider.find('.slider__for');
      $controls = $slider.find('.container');

      slickFor();

    }
  };

  $(document).ready(function () {
    init();
  });


  function slickFor() {
    $for.waitForImages(function () {
      $for.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<div class="slider__prev"></div> ',
        nextArrow: '<div class="slider__next"></div> ',
        appendArrows: $controls,
        asNavFor: '.sliderNav__nav',
        autoplay: true,
        autoplaySpeed: 2500
      });
    });

  }


})();