$(function() {
  console.log('Sabre Loaded!!!!');

  const $eyes = $('.eye');
  // const $c2 = $('#c2');

  let playPauseCounter = 0;

  const $songOne = new Audio('../audio/one.mp3');
  const $songW4u = new Audio('../audio/w4u.mp3');
  const $songFangs = new Audio('../audio/fangs.mp3');
  const $songSmile = new Audio('../audio/smile.mp3');
  const $songY3h = new Audio('../audio/y3h.mp3');
  const $songBamboo = new Audio('../audio/bamboo.mp3');

  // const videos = [''];

  let $currentSong = $songFangs;
  let $songCounter = 1;

  function checkSong() {
    console.log($songCounter);
    $currentSong = null;
    switch ($songCounter) {
      case 1 : {$currentSong = $songOne;}
        break;
      case 2 : {$currentSong = $songW4u;}
        break;
      case 3 : {$currentSong = $songFangs;}
        break;
      case 4 : {$currentSong = $songSmile;}
        break;
      case 5 : {$currentSong = $songY3h;}
        break;
      case 6 : {$currentSong = $songBamboo;}
        break;
      // default : $currentSong = $songOne;
    }
    // $currentSong.currentTime = 0;
  }



  const video = `<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsabretoothmonkmusic%2Fvideos%2F1399419080092748%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe>`;


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
        ' <img class="bannerImage" src="../images/banner.jpg" alt="bandPhoto"/>\
        <h1 class="fadeIn">SABrE TOOTH MOnK</h1>\
        <div id="c1" class="choice"><h2>MUsic</h2></div><div id="c2" class="choice"><h2>VidEos</h2></div><div id="c3" class="choice"><h2>Gigs</h2></div>');
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
    $songOne.currentTime = 0;
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
            <li class="song">OnE</li>
            <li class="song">WAITInG FOr YOU</li>
            <li class="song">BABY, THESE FAnGS ArE POISOn</li>
            <li class="song">SMILE</li>
            <li class="song">Y3H!</li>
            <li class="song">BAMBOO rIDGE</li>
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
        ' <img class="bannerImage" src="../images/banner.jpg" alt="bandPhoto"/>\
        <h1 class="fadeIn">SABrE TOOTH MOnK</h1>\
        <div id="c1" class="choice"><h2>MUsic</h2></div><div id="c2" class="choice"><h2>VidEos</h2></div><div id="c3" class="choice"><h2>Gigs</h2></div>');
      $songOne.play();
    }, 3000);
  }

  function playPause() {
    $currentSong.currentTime = 0;
    console.log($currentSong);
    playPauseCounter = playPauseCounter + 1;
    if(playPauseCounter %2 !== 0) {
      $currentSong.play();
      $('#playButton').removeClass('fa fa-play');
      $('#playButton').addClass('fa fa-pause');
    } else {
      $currentSong.pause();
      $('#playButton').removeClass('fa fa-pause');
      $('#playButton').addClass('fa fa-play');
    }
  }

  function checkTrackNo() {
    if ($songCounter === 6) {
      $('#nextButton').css('opacity', '0.3');
    } else $('#nextButton').css('opacity', '1');
    if ($songCounter === 1) {
      $('#previousButton').css('opacity', '0.3');
    } else $('#previousButton').css('opacity', '1');
  }

  function nextTrack() {
    if ($songCounter < 6) {
      $songCounter ++;
    }
    checkSong();
    checkTrackNo();
  }

  function previousTrack() {
    if ($songCounter > 1) {
      $songCounter --;
    }
    checkSong();
    checkTrackNo();
  }



  $('body').on('click', '#c2', goVideos);
  $('body').on('click', '#c1', goMusic);
  $('body').on('click', '#homeLink', goHomepage);
  $('body').on('click', '#playButton', playPause);
  $('body').on('click', '#nextButton', nextTrack);
  $('body').on('click', '#previousButton', previousTrack);


});
