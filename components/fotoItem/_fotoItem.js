var gallery = (function () {

  //catche DOM
  var $foto;
  var $box;

  //bind events

  var init = function () {
    $foto = $('.fotoItem');
    if ($foto.length > 0) {
      $box = $foto.find('.fotoItem_box');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    lightBox();
  };

  var lightBox = function () {
    $box.lightGallery({

      speed: 1500,
      swipeThreshold: 100
    })

  };

})();
