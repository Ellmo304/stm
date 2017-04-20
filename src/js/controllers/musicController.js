angular.module('stmApp')
.controller('MusicController', MusicController);

MusicController.$inject = ['$state'];
function MusicController($state) {
  const music = this;
  console.log(music, $state);
}
