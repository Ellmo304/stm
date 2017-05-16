angular.module('stmApp')
.controller('MusicController', MusicController);

MusicController.$inject = ['$state', '$scope'];
function MusicController($state, $scope) {
  const music = this;
  this.playPauseCounter = 0;
  this.songCounter = 1;
  this.currentSong = new Audio();
  this.songList = [{
    title: 'OnE',
    src: 'one',
    trackNo: 1
    },{
    title: 'WAITInG FOr YOU',
    src: 'w4u',
    trackNo: 2
    }, {
    title: 'BABY, THESE FAnGS ArE POISOn',
    src: 'fangs',
    trackNo: 3
    }, {
    title: 'SMILE',
    src: 'smile',
    trackNo: 4
    }, {
    title: 'Y3H!',
    src: 'y3h',
    trackNo: 5
    }, {
    title: 'BAMBOO rIDGE',
    src: 'bamboo',
    trackNo: 6
    }
  ];

  function playSong(track, index, autoplay) {
    if (!this.currentSong.src) {
      this.currentSong.src = `../../audio/one.mp3`;
    }
    if (track) {
      if (autoplay) {
        this.playPauseCounter = 1;
      }
      this.songCounter = index;
      this.currentSong.pause();
      this.currentSong.src = null;
      this.currentSong.src = `../../audio/${track}.mp3`;
      if (this.playPauseCounter % 2 !== 0) {
      this.currentSong.play();
    }
    }
    else if (!track) {
      this.playPauseCounter ++;
      if (this.playPauseCounter % 2 === 0) {
        this.currentSong.pause();
      }
      else {
        this.currentSong.play();
      }
    }
  }
  function trackChange(direction) {
    if (direction === "next" && this.songCounter < 6) {
      this.songCounter ++;
      this.chooseSong();
    }
    else if (direction === "previous" && this.songCounter > 1) {
      this.songCounter --;
      this.chooseSong();
    }
  }
  function chooseSong() {
    switch (this.songCounter) {
      case 1 : this.playSong('one', 1);
      break;
      case 2 : this.playSong('w4u', 2);
      break;
      case 3 : this.playSong('fangs', 3);
      break;
      case 4 : this.playSong('smile', 4);
      break;
      case 5 : this.playSong('y3h', 5);
      break;
      case 6 : this.playSong('bamboo', 6);
      break;
    }
  }



  this.currentSong.onended = function() {
    if (music.songCounter < 6) {
      music.currentSong.src = false;
      const index = music.songCounter - 1;
      const newIndex = index+1;
      music.currentSong.src = `../../audio/${music.songList[newIndex].src}.mp3`;
      music.currentSong.play();
      music.songCounter ++;
      $scope.$apply();
    }
  }


  // function showDuration(){
  //   if(this.currentSong.src) {
  //     this.currentSong.bind('timeupdate',function(){
  //       var s = parseInt(this.currentSong.currentTime % 60);
  //       var m = parseInt(this.currentSong.currentTime / 60) % 60;
  //       if(s < 10){
  //         s = '0'+s;
  //       }
  //       this.duration = (m + ':'+ s);
  //       let value = 0;
  //     //   if(this.currentSong.currentTime > 0){
  //     //     value = Math.floor((100 / $currentSong.duration) * $currentSong.currentTime);
  //     //   }
  //     //   $('#progress').css('width',value+'%');
  //     // });
  //   }
  // }
  this.duration = '00:00';
  // this.showDuration = showDuration;
  this.playSong = playSong;
  this.trackChange = trackChange;
  this.chooseSong = chooseSong;
}
