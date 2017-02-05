$(function() {
  console.log('Sabre Loaded!!!!');

  const $eyes = $('.eye');
  // const $c2 = $('#c2');

  const $songOne = new Audio('../audio/one.mp3');
  // const $songFangs = new Audio('../audio/fangs.mp3');

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

  $('body').on('click', '#c2', function() {
    $songOne.pause();
    $('.content').css('animation', 'fadeOutObject 3s');
    setTimeout(function(){
      $('.content').empty();
      $('.content').append(
        `<h1 class="fadeIn">SABrE TOOTH MOnK</h1>\
        ${video}`);
    }, 3000);
  });

});
