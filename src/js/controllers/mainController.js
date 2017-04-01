angular.module('stmApp')
.controller('MainController', MainController);

MainController.$inject = ['$state'];
function MainController($state) {
  const main = this;
  console.log(main, $state);
}
