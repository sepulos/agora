var menu = (function () {

  //catche DOM

  var $menu = $('.menu');
  var $nav = $menu.find('.menu__nav');
  var $share = $menu.find('.menu__share');
  var $bars = $menu.find('.menu__bars');

  //bind events

  var menuDisplay = function () {
    $( window ).resize(function () {
      menuResize();
    });
  };

  var menuResize = function () {
    if ($( window ).width() >= 812) {
      $nav.show();
      $share.show();
    }
    else {
      $nav.hide();
      $share.hide();
    }
  };

  var menuClick = function () {

    $bars.on('click', function () {
      menuToggle();
    });

  };

  var menuToggle = function () {
    $nav.slideToggle(300);
    $share.slideToggle(300);
  };



  var init = function () {
    menuDisplay();
    menuClick();


  };

  $(document).ready(function () {
    init();
  });

  return {
    init : init
  }


})();