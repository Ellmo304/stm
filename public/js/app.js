"use strict";function Router(e,o){e.state("landing",{url:"/",templateUrl:"/templates/landingPage.html",controller:"LandingController as landing"}).state("home",{url:"/home",templateUrl:"/templates/homePage.html",controller:"HomeController as home"}).state("music",{url:"/music",templateUrl:"/templates/musicPage.html",controller:"MusicController as music"}).state("video",{url:"/video",templateUrl:"/templates/videoPage.html",controller:"VideoController as video"}).state("gigs",{url:"/gigs",templateUrl:"/templates/gigPage.html",controller:"GigsController as gigs"}),o.otherwise("/home")}function GigsController(e){var o=this;o.gigList=[{venue:"THE MOULDY BASEMEnT",date:"03.04.17",location:"456 MOULD STrEET, EC1V",tube:"OLD SrEET",info:"STM On STAGE AT 10, SUPPOrT FrOM BLAH, BLAH AND BLAH"},{venue:"THE SInKInG SHIP",date:"21.04.17",location:"890 nO STrEET, nW6",tube:"BrOnDESBUrY",info:"STM On STAGE AT 10, SUPPOrT FrOM BLAH, BLAH AND BLAH"},{venue:"THE DUSTY CASTLE",date:"12.05.17",location:"123 FAKE STrEET, CAMDEn, nW1",tube:"CAMDEn TOWn",info:"STM On STAGE AT 10, SUPPOrT FrOM BLAH, BLAH AND BLAH"}],console.log(o,e)}function MainController(e){var o=this;console.log(o,e)}function MusicController(e){var o=this;console.log(o,e)}function VideoController(e){var o=this;o.videoList=["https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fsabretoothmonkmusic%2Fvideos%2F1399419080092748%2F&show_text=0&width=560","https://www.youtube.com/embed/ZjaF7XhVa4o"],console.log(o,e)}angular.module("stmApp",["ngResource","ui.router"]).filter("trusted",["$sce",function(e){return function(o){return e.trustAsResourceUrl(o)}}]).config(Router),Router.$inject=["$stateProvider","$urlRouterProvider"],angular.module("stmApp").controller("GigsController",GigsController),GigsController.$inject=["$state"],angular.module("stmApp").controller("MainController",MainController),MainController.$inject=["$state"],angular.module("stmApp").controller("MusicController",MusicController),MusicController.$inject=["$state"],angular.module("stmApp").controller("VideoController",VideoController),VideoController.$inject=["$state"];
//# sourceMappingURL=app.js.map
