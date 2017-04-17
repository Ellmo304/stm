angular.module('stmApp')
.controller('HomeController', HomeController);

HomeController.$inject = ['$state'];
function HomeController($state) {
  const home = this;
  function change() {
    console.log('hello');
    document.getElementById('homeLink').style.color = 'red');
  }

  this.change = change;
  console.log(home, $state);
}
