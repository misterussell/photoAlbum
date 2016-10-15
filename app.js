var sideMenu = $('.sideMenu');
var pageHeader = $('.pageHeader');
var contentBox = $('.selectedContent');
var windowLocation = window.location.hash;
var $a = $('a');
var album = 'surfers';

//SCOPE
//automatically load the home page with all album options
//when an album is clicked, it should render the album page with the content for the selected album
//when an image on the selected album page is clicked it should render the image page with the selected image on it

function renderHome(pageHeader, contentBox) {
  //change the location hash
  //
  //CHANGE the header text
  pageHeader.append('<h1>My Albums</h1>');
  //CREATE a list item + add pictures to the list
  albums.forEach(function(album, i, arr){
    var $gridItem = $('<a href="' + album.hashLocation + '"><li class="' + album.albumName + '"><img src="' + album.previewImage + '" /img><h2>' + album.albumDescription + '</h2></li></a>');
    contentBox.append($gridItem);
  });
}

function renderAlbum(sideMenu, pageHeader, contentBox, album) {
  //STORAGE for passed in album data
  var selectedAlbum = album;
  //CAPITALIZE first letter of string
  function capFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  //PRINT new title
  var selectedAlbumTitle = $('<h1>Album: ' + capFirst(selectedAlbum) + '</h1>');
  //INSERT title into header
  pageHeader.append(selectedAlbumTitle);
  //RETRIEVE a specific album
  function getAlbum(album, i, arr) {
    return album.albumName === selectedAlbum;
  }
  //RETREIVE all images in album
  function getAlbumImages(album, i, arr) {
    return album.albumImages;
  }
  //returns a defined album
  var selectAlbum = albums.filter(getAlbum).map(getAlbumImages);
  console.log(selectAlbum);

  // selectAlbum.forEach()

  //Proofs no
  // var albumImages = albums.map(getAlbumImages);
  // console.log(albumImages);


  //SIDE MENU HANNDLER
  $('.sideMenu').css('display', 'block');

}

function renderImage(pageHeader, contentBox) {
  pageHeader.text('Photo');
  console.log('hello');

  $('body').css('background', '#6B949E');
}

// renderHome(pageHeader, contentBox);
renderAlbum(sideMenu, pageHeader, contentBox, album);
// renderImage(pageHeader, contentBox);


$a.on('click', function() {

});

// renderHome(pageHeader, contentBox);
// renderAlbum(sideMenu, pageHeader, contentBox, album);
// renderImage(pageHeader, contentBox);








// window.onhashchange = changeContent();
//
// function changeContent() {
//   // alert('hello');
//   renderAlbum(sideMenu, pageHeader, contentBox);
// }
