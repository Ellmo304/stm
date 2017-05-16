angular.module('stmApp')
.controller('GigsController', GigsController);

GigsController.$inject = ['$state'];
function GigsController($state) {
  const gigs = this;
  gigs.gigList = [{
      venue: 'THE SPICE OF LIFE',
      date: 'SAT 1ST JULY 2017   ||   FrOM 19.30 TIL LATE',
      image: '../../images/look-down.jpg',
      location: '6 MOOr ST, SOHO, W1D 5nA, LOnDOn, UnITED KInGDOM',
      tubes: 'LEICESTEr SQUArE, COVEnT GArDEn, TOTTENHAM CrT rD',
      info: 'COME AnD WATCH US HEADLInE A FAnTASTIC nIGHT OF LIVE MUSIC In LOnDOn, PrOMOTInG OUr nEW EP!',
      link: 'https://www.facebook.com/sabretoothmonkmusic/',
    }];
}
