$(function() {
  console.log('Sabre Loaded!!!!');

//----------------------------------------------------------Variables------------------------------------------------------------//

  const $eyes = $('.eye');
  let playPauseCounter = 0;
  let $songCounter = 1;
  let previousSong = false;
  const $currentSong = new Audio();
  $currentSong.src = false;
  let $songOne = new Audio('../audio/one.mp3');

//-----------------------------------------------SWITCHING PAGE CONTENT------------------------------------------------------------//

  $eyes.on('mouseenter', function() {
    $eyes.css('animation', 'glow 3s infinite ease-in-out');
    $songOne.play();
  });

  $eyes.on('click', function() {
    $('#splashDiv').css('animation', 'fadeOutObject 3s');
    setTimeout(function(){
      $('#splashDiv').remove();
      $('.content').append(
        ' <img class="fadeIn" class="bannerImage" src="../images/banner.jpg" alt="bandPhoto"/>\
        <h1 class="fadeIn">SABrE TOOTH MOnK</h1>\
        <div id="c1" class="choice fadeIn"><h2>MUsic</h2></div><div  id="c2" class="choice fadeIn"><h2>VidEos</h2></div><div id="c3" class="choice fadeIn"><h2>Gigs</h2></div>');
    }, 3000);
  });

  function goVideos() {
    $songOne.pause();
    $('.content').css('animation', 'fadeOutObject 3s');
    setTimeout(function(){
      $('.content').empty();
      spawnVideos();
      $('.content').prepend(
        '<h1 id="homeLink" class="fadeIn">SABrE TOOTH MOnK</h1>'
      );
    }, 3000);
  }

  function goMusic() {
    $songOne.pause();
    $songOne = null;
    $currentSong.src = '../audio/one.mp3';
    $('.content').css('animation', 'fadeOutObject 3s');
    setTimeout(function(){
      $('.content').empty();
      $('.content').prepend(
        `<h1 id="homeLink" class="fadeIn">SABrE TOOTH MOnK</h1>\
        <div id="audioPlayer">
        <div id="audioArt"><img src="../images/monk.jpg" alt="EP cover"/></div>
        <div id="progressBar"><div id="progress"></div></div>
        <div id="nowPlaying">
        <i style="margin-left: 120px;" id="previousButton" class="fa fa-backward"></i>
        <i id="playButton" class="fa fa-play"></i>
        <i id="nextButton" class="fa fa-forward"></i>
        </div>
        <h4 id="duration">0:00</h4>
          <ul>
            <li id="one" data-id="1" class="song offSong">OnE</li>
            <li id="w4u" data-id="2" class="song offSong">WAITInG FOr YOU</li>
            <li id="fangs" data-id="3" class="song offSong">BABY, THESE FAnGS ArE POISOn</li>
            <li id="smile" data-id="4" class="song offSong">SMILE</li>
            <li id="y3h" data-id="5" class="song offSong">Y3H!</li>
            <li id="bamboo" data-id="6" class="song offSong">BAMBOO rIDGE</li>
          </ul>
        </div>`
      );
    }, 3000);
  }

  function goHomepage() {
    $('body').css('animation', 'fadeOutObject 3s');
    setTimeout(function() {
      $('.content').empty();
      $('.content').append(
        ' <img class="bannerImage fadeIn" src="../images/banner.jpg" alt="bandPhoto"/>\
        <h1 class="fadeIn">SABrE TOOTH MOnK</h1>\
        <div id="c1" class="choice"><h2>MUsic</h2></div><div id="c2" class="choice"><h2>VidEos</h2></div><div id="c3" class="choice"><h2>Gigs</h2></div>');
      $songOne.play();
    }, 3000);
  }

//----------------------------------------------AUDIO PLAYER/MUSIC PAGE----------------------------------------------------------//

  function checkSong(autoplay) {
    if ($songCounter !== 1) {
      $('#one').removeClass('playingSong');
      $('#one').addClass('offSong');
    }
    if (previousSong !== false) {
      $(`#${previousSong}`).removeClass('playingSong');
      $(`#${previousSong}`).addClass('offSong');
    }
    $currentSong.src = null;
    console.log($songCounter);
    switch ($songCounter) {
      case 1 : { setSong('one', autoplay);}
        break;
      case 2 : { setSong('w4u', autoplay, 'one');}
        break;
      case 3 : { setSong('fangs', autoplay, 'w4u');}
        break;
      case 4 : { setSong('smile', autoplay, 'fangs');}
        break;
      case 5 : { setSong('y3h', autoplay, 'smile');}
        break;
      case 6 : { setSong('bamboo', autoplay, 'y3h');}
        break;
    }
  }

  function setSong(track, autoplay, previousTrack) {
    $(`#${track}`).removeClass('offSong');
    $(`#${track}`).addClass('playingSong');
    $currentSong.src = `../audio/${track}.mp3`;
    previousSong = track;
    $currentSong.currentTime = 0;
    showDuration();
    if (autoplay === 'autoplay') {
      $(`#${previousTrack}`).removeClass('playingSong');
      $(`#${previousTrack}`).addClass('offSong');
      playPause();
    }
  }

  function playPause() {
    playPauseCounter ++;
    if ($songCounter === 1) {
      $('#one').removeClass('offSong');
      $('#one').addClass('playingSong');
    }
    if(playPauseCounter %2 !== 0) {
      setTimeout(function() {
        $currentSong.play();
      }, 150);
      $('#playButton').removeClass('fa fa-play');
      $('#playButton').addClass('fa fa-pause');
      showDuration();
    } else {
      setTimeout(function() {
        $currentSong.pause();
        $('#playButton').removeClass('fa fa-pause');
        $('#playButton').addClass('fa fa-play');
      }, 150);
    }
  }

  function checkTrackNo(autoplay) {
    if ($songCounter === 6) {
      $('#nextButton').css('opacity', '0.3');
    } else $('#nextButton').css('opacity', '1');
    if ($songCounter === 1) {
      $('#previousButton').css('opacity', '0.3');
    } else $('#previousButton').css('opacity', '1');
    checkSong(autoplay);
  }

  function nextTrack(autoplay) {
    if ($songCounter < 6) {
      $songCounter ++;
    }
    if (playPauseCounter %2 !== 0) {
      playPauseCounter ++;
      $currentSong.pause();
      $('#playButton').removeClass('fa fa-pause');
      $('#playButton').addClass('fa fa-play');
    }
    checkTrackNo(autoplay);
  }

  function previousTrack() {
    if ($songCounter > 1) {
      $songCounter --;
    }
    if (playPauseCounter %2 !== 0) {
      playPauseCounter ++;
      $currentSong.pause();
      $('#playButton').removeClass('fa fa-pause');
      $('#playButton').addClass('fa fa-play');
    }
    checkTrackNo();
  }

  function playNext() {
    nextTrack('autoplay');
  }

  function playThis(autoplay, num) {
    playPauseCounter = 2;
    $songCounter = num;
    $currentSong.pause();
    $('#playButton').removeClass('fa fa-pause');
    $('#playButton').addClass('fa fa-play');
    checkTrackNo(autoplay);
  }

  $currentSong.onended = playNext;

  function showDuration(){
    if($currentSong.src) {
      $($currentSong).bind('timeupdate',function(){
        var s = parseInt($currentSong.currentTime % 60);
        var m = parseInt($currentSong.currentTime / 60) % 60;
        if(s < 10){
          s = '0'+s;
        }
        $('#duration').html(m + ':'+ s);
        let value = 0;
        if($currentSong.currentTime > 0){
          value = Math.floor((100 / $currentSong.duration) * $currentSong.currentTime);
        }
        $('#progress').css('width',value+'%');
      });
    }
  }
//----------------------------------------------------VIDEO PAGE-------------------------------------------------------------//

  const videos = ['https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsabretoothmonkmusic%2Fvideos%2F1399419080092748%2F&show_text=0&width=560', 'https://www.youtube.com/embed/ZjaF7XhVa4o'];

  function spawnVideos() {
    for (let i = 0; i < videos.length; i ++) {
      $('.content').prepend(`<iframe src="${videos[i]}" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>`);
    }
  }

//----------------------------------------------------CLICK LISTENERS-----------------------------------------------------------//

  $('body').on('click', '#c2', goVideos);
  $('body').on('click', '#c1', goMusic);
  $('body').on('click', '#homeLink', goHomepage);
  $('body').on('click', '#playButton', playPause);
  $('body').on('click', '#nextButton', function() {
    nextTrack('noAuto');
  });
  $('body').on('click', '#previousButton', previousTrack);
  $('body').on('click', '.song', function() {
    playThis('autoplay', $(this).data('id'));
  });

});
