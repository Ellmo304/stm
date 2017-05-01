angular.module('stmApp')
.controller('GigsController', GigsController);

GigsController.$inject = ['$state'];
function GigsController($state) {
  const gigs = this;
  gigs.gigList = [{
      venue: 'EP LAUNCH AT THE GOOD SHIP',
      date: '13TH MArCH 2017   ||   FrOM 19.30 TIL 03.00',
      image: '../../images/look-down.jpg',
      location: 'THE GOOD SHIP, 289 KILBUrn HIGH rOAD, NW6 7Jr, LOnDOn, UnITED KInGDOM',
      tubes: 'KILBUrN, BrOnDESBUrY, KILBUrn HIGH rOAD',
      info: 'LIVE SETS FrOM: SABrE TOOTH MOnK / SUBUrBAn MInDS / PETEr rOCH / SHYEr / SErE TrOUBLE - PLUS DJS AFTEr TIL 2.30AM AT nO EXTrA COST!',
      link: 'https://www.facebook.com/events/1896813050608331/',
    }];
}
