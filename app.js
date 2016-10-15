var sideMenu = $('.sideMenu');
var pageHeader = $('.pageHeader');
var contentBox = $('.selectedContent');
var windowLocation = window.location.hash;

function renderHome(pageHeader, contentBox) {
  //change the header text
  pageHeader.append('My Albums');
  //create a list item
  //add pictures to the list
  albums.forEach(function(album, i, arr){
    var $gridItem = $('<a href="' + album.hashLocation + '"><li class="' + album.albumName + '"><img src="' + album.previewImage + '" /img><h2>' + album.albumDescription + '</h2></li></a>');
    contentBox.append($gridItem);
  });
}

function renderAlbum(sideMenu, pageHeader, contentBox, album) {

  //this will need to change to match the selected album
  pageHeader.text('Album');

  //get a specific album
  function getAlbum(album, i, arr) {
    return album.albumName === 'surfers';
  }
  //gets all images in album
  function getAlbumImages(album, i, arr) {
    return album.albumImages;
  }
  //returns a defined album
  var selectAlbum = albums.filter(getAlbum);
  console.log(selectAlbum);
  //returns only images - currently for all albums
  var albumImages = albums.map(getAlbumImages);
  console.log(albumImages);

  $('body').css('background', 'pink');
}

function renderImage(pageHeader, contentBox) {
  pageHeader.text('Photo');
  console.log('hello');

  $('body').css('background', '#6B949E');
}

// renderHome(pageHeader, contentBox);
renderImage(pageHeader, contentBox);









// window.onhashchange = changeContent();
//
// function changeContent() {
//   // alert('hello');
//   renderAlbum(sideMenu, pageHeader, contentBox);
// }
