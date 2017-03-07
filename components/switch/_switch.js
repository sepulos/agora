var lang = (function () {

  var $switch;
  var $btn;
  var $btn2;

  var init = function () {
    $switch = $('.switch');
    if ($switch.length > 0 ) {
      $btn = $switch.find('.switch__en');
      $btn2 = $switch.find('.switch__pl');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
  });

  var bindEvents = function () {
    switchClass();
    switchClassPl();
  };

  var switchClass = function () {
    $btn.hover(function () {
      $btn2.toggleClass('-red');

    });
  };
  var switchClassPl = function () {
    $btn2.hover(function () {
      $btn.toggleClass('-white');

    });
  };

})();