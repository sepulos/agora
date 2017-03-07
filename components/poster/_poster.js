var gallery = (function () {

  //catche DOM
  var $poster;
  var $posterBox;
  var $item;
  var $all;

  //bind events


  var init = function () {
    $poster = $('.poster');
    if ($poster.length > 0) {
      $posterBox = $poster.find('.poster__box');
      $item = $poster.find('.poster__boxItem');
      $all = $poster.find('.poster__all');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
    all();
  });

  var bindEvents = function () {
    lightBox();
    slickGallery();
  };

  var all = function () {

    var items = $item.length;

    var nowy = $all.html(' / ' + items);


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
        dots: true,
        dotsClass: 'poster__controllers',
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.poster .poster__prev ',
        nextArrow: '.poster .poster__next '
      });
    });

  };
})();
