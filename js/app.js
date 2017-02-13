$(function() {
  console.log('Sabre Loaded!!!!');

  const $eyes = $('.eye');

  let playPauseCounter = 0;
  let $songCounter = 1;
  let previousSong = false;


  let $songOne = new Audio('../audio/one.mp3');


  const $currentSong = new Audio();
  $currentSong.src = '../audio/one.mp3';

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
    if (autoplay === 'autoplay' && $songCounter !== 6) {
      $(`#${previousTrack}`).removeClass('playingSong');
      $(`#${previousTrack}`).addClass('offSong');
      playPause();
    }
  }


  const video = '<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsabretoothmonkmusic%2Fvideos%2F1399419080092748%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>';


  function showMenu() {
    $('#menuButton').css('visibility', 'hidden');
    $('.navBox').css('width', '25%');
    $('.content').css('width', '75%');
    $('.content').children().css('margin-left', '-28%');

    $('#menuButton2').css('visibility', 'visible');
    $('#navBar').css('visibility', 'visible');
  }

  function closeMenu() {
    $('#menuButton2').css('visibility', 'hidden');
    $('.navBox').css('width', '4%');
    $('.content').css('width', '96%');
    $('.content').children().css('margin-left', '0');


    $('#navBar').css('visibility', 'hidden');
    $('#menuButton').css('visibility', 'visible');
  }

  $('#menuButton').on('click', showMenu);
  $('#menuButton2').on('click', closeMenu);

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
      $('.content').prepend(
        `<h1 id="homeLink" class="fadeIn">SABrE TOOTH MOnK</h1>\
        ${video}`);
    }, 3000);
  }

  function goMusic() {
    $songOne.pause();
    $songOne = null;
    $('.content').css('animation', 'fadeOutObject 3s');
    setTimeout(function(){
      $('.content').empty();
      $('.content').prepend(
        `<h1 id="homeLink" class="fadeIn">SABrE TOOTH MOnK</h1>\
        <div id="audioPlayer">
        <div id="audioArt"><img src="../images/monk.jpg" alt="EP cover"/></div>
        <div id="nowPlaying">
        <i id="previousButton" class="fa fa-backward"></i>
        <i id="playButton" class="fa fa-play"></i>
        <i id="nextButton" class="fa fa-forward"></i>
        </div>
          <ul>
            <li id="one" class="song offSong">OnE</li>
            <li id="w4u" class="song offSong">WAITInG FOr YOU</li>
            <li id="fangs" class="song offSong">BABY, THESE FAnGS ArE POISOn</li>
            <li id="smile" class="song offSong">SMILE</li>
            <li id="y3h" class="song offSong">Y3H!</li>
            <li id="bamboo" class="song offSong">BAMBOO rIDGE</li>
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


  $('body').on('click', '#c2', goVideos);
  $('body').on('click', '#c1', goMusic);
  $('body').on('click', '#homeLink', goHomepage);
  $('body').on('click', '#playButton', playPause);
  $('body').on('click', '#nextButton', function() {
    nextTrack('noAuto');
  });
  $('body').on('click', '#previousButton', previousTrack);


  $currentSong.onended = playNext;


});
