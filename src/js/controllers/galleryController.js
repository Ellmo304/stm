angular.module('stmApp')
.controller('GalleryController', GalleryController);

GalleryController.$inject = ['$state'];
function GalleryController($state) {
  const gallery = this;
  this.blowup = false;
  this.showGallery = true;
  gallery.imageList = [{
      title: 'black-white-faces',
      src: '../../images/black-white-faces.jpg',
    },{
      title: 'color-posers',
      src: '../../images/color-posers.jpg',
    }, {
      title: 'black-white-wall',
      src: '../../images/black-white-wall.jpg',
    }, {
      title: 'color-shafts',
      src: '../../images/color-shafts.jpg',
    }, {
      title: 'purple-sky-monk',
      src: '../../images/purple-sky-monk.jpg',
    }, {
      title: 'pink-sky',
      src: '../../images/pink-sky.jpg',
    }];

  function showImage(image) {
    this.blowImage = `../../images/${image}.jpg`;
    this.showGallery = false;
  }
  
  this.showImage = showImage;
}
