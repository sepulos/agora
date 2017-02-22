var gallery = (function () {

  //catche DOM
  var $posterBox;
  var $item;

  //bind events


  var init = function () {
    var $poster = $('.poster');
    if ($poster.length > 0) {
      $posterBox = $poster.find('.poster__box');
      $item = $poster.find('.poster__boxItem');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    lightBox();
    slickGallery();
  };


  var lightBox = function () {
    $posterBox.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

  var slickGallery = function () {
    $posterBox.waitForImages(function () {
      $posterBox.slick({
        infinite: true,
        selector: $item,
        dots: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        prevArrow: '.poster .poster__prev ',
        nextArrow: '.poster .poster__next '
      });
    });

  };
})();
