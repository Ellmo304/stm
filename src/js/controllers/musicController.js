angular.module('stmApp')
.controller('MusicController', MusicController);

MusicController.$inject = ['$state'];
function MusicController($state) {
  const music = this;
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
  console.log(music, $state);
}
