angular.module('stmApp')
.controller('LandingController', LandingController);

LandingController.$inject = ['$state'];
function LandingController($state) {
  const landing = this;
  this.showHome = false;
  this.currentSong = new Audio();
  this.currentSong.src = '../../audio/one.mp3';
  this.currentSong.play();
  function endSong() {
    this.currentSong.pause();
    this.currentSong = false;
  }
  this.endSong = endSong;
}
