// angular.module('stmApp', ['ui.router']);
//
//
// $(function() {
//   console.log('Sabre Loaded!!!!');
//
// //----------------------------------------------------------Variables------------------------------------------------------------//
//
//   const $eyes = $('.eye');
//   let playPauseCounter = 0;
//   let $songCounter = 1;
//   let previousSong = false;
//   const $currentSong = new Audio();
//   $currentSong.src = false;
//   let $songOne = new Audio('../audio/one.mp3');
//
// //-----------------------------------------------SWITCHING PAGE CONTENT------------------------------------------------------------//
//
//   $eyes.on('mouseenter', function() {
//     $eyes.css('animation', 'glow 3s infinite ease-in-out');
//     $songOne.play();
//   });
//
//   $eyes.on('click', function() {
//     $('#splashDiv').css('animation', 'fadeOutObject 3s');
//     setTimeout(function(){
//       $('#splashDiv').remove();
//       $('.content').html(
//         ' <img class="bannerImage fadeIn" src="../images/banner.jpg" alt="bandPhoto"/>\
//         <h1 class="fadeIn">SABrE TOOTH MOnK</h1>\
//         <div id="c1" class="choice fadeIn"><h2>MUsic</h2></div><div id="c2" class="choice fadeIn"><h2>VidEos</h2></div><div id="c3" class="choice fadeIn"><h2>Gigs</h2></div>');
//     }, 3000);
//   });
//

//
//   function goMusic() {
//     if($songOne !== false) {
//       $songOne.pause();
//       $songOne = false;
//     }
//     $currentSong.src = '../audio/one.mp3';
//     $('.content').css('animation', 'fadeOutObject 3s');
//     setTimeout(function(){
//       $('.content').empty();
  //     $('.content').html(
  //       `<h1 id="homeLink" class="fadeIn">SABrE TOOTH MOnK</h1>\
  //       <div class="fadeIn" id="audioPlayer">
  //       <div id="audioArt"><img src="../images/monk.jpg" alt="EP cover"/></div>
  //       <div id="progressBar"><div id="progress"></div></div>
  //       <div id="nowPlaying">
  //       <i style="margin-left: 120px;" id="previousButton" class="fa fa-backward"></i>
  //       <i id="playButton" class="fa fa-play"></i>
  //       <i id="nextButton" class="fa fa-forward"></i>
  //       </div>
  //       <h4 id="duration">0:00</h4>
  //         <ul id="songList">
  //         </ul>
  //       </div>`
  //     );
  //     for (let i = 0; i < songs.length; i ++) {
  //       $('#songList').append(`<li id="${songs[i].src}" data-id="${songs[i].trackNo}" class="song offSong fadeIn">${songs[i].title}</li>`);
  //     }
  //   }, 2800);
  // }

// //----------------------------------------------AUDIO PLAYER/MUSIC PAGE----------------------------------------------------------//
//
//   const songs = [{
//     title: 'OnE',
//     src: 'one',
//     trackNo: 1
//   },{
//     title: 'WAITInG FOr YOU',
//     src: 'w4u',
//     trackNo: 2
//   }, {
//     title: 'BABY, THESE FAnGS ArE POISOn',
//     src: 'fangs',
//     trackNo: 3
//   }, {
//     title: 'SMILE',
//     src: 'smile',
//     trackNo: 4
//   }, {
//     title: 'Y3H!',
//     src: 'y3h',
//     trackNo: 5
//   }, {
//     title: 'BAMBOO rIDGE',
//     src: 'bamboo',
//     trackNo: 6
//   }
//   ];
//
//   function checkSong(autoplay) {
//     if ($songCounter !== 1) {
//       $('#one').removeClass('playingSong');
//       $('#one').addClass('offSong');
//     }
//     if (previousSong) {
//       $(`#${previousSong}`).removeClass('playingSong');
//       $(`#${previousSong}`).addClass('offSong');
//     }
//     $currentSong.src = null;
//     console.log($songCounter);
//     if($songCounter === 1) {
//       setSong(`${songs[0].src}`, autoplay);
//     } else {
//       for (let i = 0; i < songs.length; i ++) {
//         if (songs[i].trackNo === $songCounter) {
//           setSong(`${songs[i].src}`, autoplay, `${songs[i-1].src}`);
//         }
//       }
//     }
//   }
//
//   function setSong(track, autoplay, previousTrack) {
//     $(`#${track}`).removeClass('offSong');
//     $(`#${track}`).addClass('playingSong');
//     $currentSong.src = `../audio/${track}.mp3`;
//     previousSong = track;
//     $currentSong.currentTime = 0;
//     showDuration();
//     if (autoplay === 'autoplay') {
//       $(`#${previousTrack}`).removeClass('playingSong');
//       $(`#${previousTrack}`).addClass('offSong');
//       playPause();
//     }
//   }
//
//   function playPause() {
//     playPauseCounter ++;
//     if ($songCounter === 1) {
//       $('#one').removeClass('offSong');
//       $('#one').addClass('playingSong');
//     }
//     if(playPauseCounter %2 !== 0) {
//       setTimeout(function() {
//         $currentSong.play();
//       }, 150);
//       $('#playButton').removeClass('fa fa-play');
//       $('#playButton').addClass('fa fa-pause');
//       showDuration();
//     } else {
//       setTimeout(function() {
//         $currentSong.pause();
//         $('#playButton').removeClass('fa fa-pause');
//         $('#playButton').addClass('fa fa-play');
//       }, 150);
//     }
//   }
//
//   function checkTrackNo(autoplay) {
//     if ($songCounter === 6) {
//       $('#nextButton').css('opacity', '0.3');
//     } else $('#nextButton').css('opacity', '1');
//     if ($songCounter === 1) {
//       $('#previousButton').css('opacity', '0.3');
//     } else $('#previousButton').css('opacity', '1');
//     checkSong(autoplay);
//   }
//
//   function nextTrack(autoplay) {
//     if ($songCounter < 6) {
//       $songCounter ++;
//     }
//     if (playPauseCounter %2 !== 0) {
//       playPauseCounter ++;
//       $currentSong.pause();
//       $('#playButton').removeClass('fa fa-pause');
//       $('#playButton').addClass('fa fa-play');
//     }
//     checkTrackNo(autoplay);
//   }
//
//   function previousTrack() {
//     if ($songCounter > 1) {
//       $songCounter --;
//     }
//     if (playPauseCounter %2 !== 0) {
//       playPauseCounter ++;
//       $currentSong.pause();
//       $('#playButton').removeClass('fa fa-pause');
//       $('#playButton').addClass('fa fa-play');
//     }
//     checkTrackNo();
//   }
//
//   function playNext() {
//     nextTrack('autoplay');
//   }
//
//   function playThis(autoplay, num) {
//     playPauseCounter = 2;
//     $songCounter = num;
//     $currentSong.pause();
//     $('#playButton').removeClass('fa fa-pause');
//     $('#playButton').addClass('fa fa-play');
//     checkTrackNo(autoplay);
//   }
//
//   $currentSong.onended = playNext;
//
//   function showDuration(){
//     if($currentSong.src) {
//       $($currentSong).bind('timeupdate',function(){
//         var s = parseInt($currentSong.currentTime % 60);
//         var m = parseInt($currentSong.currentTime / 60) % 60;
//         if(s < 10){
//           s = '0'+s;
//         }
//         $('#duration').html(m + ':'+ s);
//         let value = 0;
//         if($currentSong.currentTime > 0){
//           value = Math.floor((100 / $currentSong.duration) * $currentSong.currentTime);
//         }
//         $('#progress').css('width',value+'%');
//       });
//     }
//   }
// //----------------------------------------------------VIDEO PAGE-------------------------------------------------------------//

//   //----------------------------------------------------GIGS PAGE-------------------------------------------------------------//
//
// //----------------------------------------------------CLICK LISTENERS-----------------------------------------------------------//
//
//   $('body').on('click', '#c3', goGigs);
//   $('body').on('click', '#c2', goVideos);
//   $('body').on('click', '#c1', goMusic);
//   $('body').on('click', '#homeLink', goHomepage);
//   $('body').on('click', '#playButton', playPause);
//   $('body').on('click', '#nextButton', function() {
//     nextTrack('noAuto');
//   });
//   $('body').on('click', '#previousButton', previousTrack);
//   $('body').on('click', '.song', function() {
//     playThis('autoplay', $(this).data('id'));
//   });
//
// });
