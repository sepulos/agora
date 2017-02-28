var lang = (function () {

  var $switch;
  var $btn;

  var init = function () {
    $switch = $('.switch');
    if ($switch.length > 0 ) {
      $btn = $switch.find('.switch__btn');
    }
  };

  $(document).ready(function () {
    init();
    switchClass();
  });

  var switchClass = function () {
    $btn.hover(function () {
      var $div = $(this);
      $(this).addClass('-act');
      $btn.not($div).removeClass('-act');
      return false;

    });
  };

})();