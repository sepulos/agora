var gallery = (function () {

  //catche DOM
  var $subMenu;
  var $nav;
  var $bars;

  //bind events

  var init = function () {
    $subMenu = $('.subMenu');
    if ($subMenu.length > 0) {
      $nav = $subMenu.find('.subMenu__nav');
      $bars = $subMenu.find('.subMenu__bars');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    menuStick();
    menuClick();
  };

  var menuStick = function () {
    $subMenu.sticky({topSpacing:65, zIndex:10});
    $( window ).resize(function () {
      menuResize();
    });
  };

  var menuResize = function () {
    if ($( window ).width() >= 812) {
      $subMenu.sticky({topSpacing:65, zIndex:10});
      $nav.show();
      $bars.hide();
    }
    else {
      $subMenu.unstick();
      $nav.hide();
      $bars.show();
    }
  };

  var menuClick = function () {

    $bars.on('click', function () {
      menuToggle();
    });

  };

  var menuToggle = function () {
    $nav.slideToggle(300);
  };


})();