angular.module('stmApp')
.controller('HomeController', HomeController);

HomeController.$inject = ['$state'];
function HomeController($state) {
  const home = this;
  function change() {
    console.log('hello');
  }

  this.change = change;
  console.log(home, $state);
}
