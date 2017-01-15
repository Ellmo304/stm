$(function() {
  console.log('Sabre Loaded!!!!');

  function showMenu() {
    $('#menuButton').css('visibility', 'hidden');
    $('#navBar').css('visibility', 'visible');
    $('#menuButton2').css('visibility', 'visible');
  }

  function closeMenu() {
    $('#menuButton2').css('visibility', 'hidden');
    $('#navBar').css('visibility', 'hidden');
    $('#menuButton').css('visibility', 'visible');
  }

  $('#menuButton').on('click', showMenu);
  $('#menuButton2').on('click', closeMenu);












});
