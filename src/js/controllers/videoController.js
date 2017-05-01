angular.module('stmApp')
.controller('VideoController', VideoController);

VideoController.$inject = ['$state'];
function VideoController($state) {
  const videos = this;
  videos.videoList = ['https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsabretoothmonkmusic%2Fvideos%2F1399419080092748%2F&show_text=0&width=560', 'https://www.youtube.com/embed/raYdlvRMbG4', 'https://www.youtube.com/embed/I-1nUAXA8wY'];
}
