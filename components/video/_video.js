var gallery = (function () {

  //catche DOM
  var $video;
  var $trilerItem;
  var $triler;
  var $play;
  var $text;
  var $yt;
  var $frame;

  //bind events

  var init = function () {
    $video = $('.video');
    if ($video.length > 0) {
      $triler = $video.find('.video__triler');
      $trilerItem = $video.find('.video__trilerItem');
      $play = $video.find('.video__play');
      $text = $video.find('.video__trilerText');
      $yt = $video.find('.video__yt');
      $frame = $video.find('.video__film');

      bindEvents();
    }
  };

  $(document).ready(function () {
    init();
    first();
  });

  var bindEvents = function () {
    clickBtn();
  };

  var clickBtn = function () {
    $trilerItem.on('click', function () {
      var $act = $(this);
      playIcon($act);
      border($act);
      change($act);
    });
  };

  var border = function (act) {
      var $border = act.find($text);
      $border.css("border-bottom", "5px solid #A80B4F");
      $text.not($border).css("border-bottom", "5px solid transparent");
  };

  var playIcon = function (act) {
      var $div = act.find($play);
      $div.css("visibility", "visible");
      $play.not($div).css("visibility", "hidden");
  };

  var change = function (act) {
      var numberBtn = act.data('video');
      var active = $video.find('*[data-video="'+ numberBtn +'"]').css("display", "block");
      $yt.not(active).css("display", "none");
  };

  var first = function () {
    $video.find('*[data-video="1"]').css("display", "block");
    var first = $triler.find('*[data-video="1"]');
    first.find($text).css("border-bottom", "5px solid #A80B4F");
    first.find($play).css("visibility", "visible");

  }


})();