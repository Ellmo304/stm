angular.module('stmApp')
.controller('GigsController', GigsController);

GigsController.$inject = ['$state'];
function GigsController($state) {
  const gigs = this;
  gigs.gigList = [{
      venue: 'THE MOULDY BASEMEnT',
      date: '03.04.17',
      location: '456 MOULD STrEET, EC1V',
      tube: 'OLD SrEET',
      info: 'STM On STAGE AT 10, SUPPOrT FrOM BLAH, BLAH AND BLAH'
    },{
      venue: 'THE SInKInG SHIP',
      date: '21.04.17',
      location: '890 nO STrEET, nW6',
      tube: 'BrOnDESBUrY',
      info: 'STM On STAGE AT 10, SUPPOrT FrOM BLAH, BLAH AND BLAH'
    }, {
      venue: 'THE DUSTY CASTLE',
      date: '12.05.17',
      location: '123 FAKE STrEET, CAMDEn, nW1',
      tube: 'CAMDEn TOWn',
      info: 'STM On STAGE AT 10, SUPPOrT FrOM BLAH, BLAH AND BLAH'
    }];

  console.log(gigs, $state);
}
