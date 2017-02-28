var banerBig = (function () {

  //catche DOM
  var $slider;
  var $nav;

  //bind events

  var init = function () {
    $slider = $('.sliderNav');

    if ($slider.length > 0) {
      $nav = $slider.find('.sliderNav__nav');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    slickNav();
  };

  function slickNav() {
    $nav.waitForImages(function () {
      $nav.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.slider__for',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 710,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 510,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    });

  }


})();