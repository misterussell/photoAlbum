var sideMenu = $('.sideMenu');
var pageHeader = $('.pageHeader');
var contentBox = $('.selectedContent');

function renderHome() {
  //change the header text
  pageHeader.text('My Albums');
  //create a list item
  //add pictures to the list
  albums.forEach(function(album, i, arr){
    // var $gridItem = $('<li>' + picture.previewImage + '</li>');
    var $gridItem = $('<a href="' + album.hashLocation + '"><li class="' + album.albumName + '"><img src="' + album.previewImage + '" /img><h2>' + album.albumDescription + '</h2></li></a>');
    contentBox.append($gridItem);
  });
}

function renderAlbum(sideMenu, pageHeader, contentBox) {

  //this will need to change to match the selected album
  pageHeader.text('Album');

  //get a specific album

  //gets all images in album
  function getAlbum(album, i, arr) {
    return album.albumImages;
  }

  var albumImages = albums.map(getAlbum);
  // console.log(albumImages);


}

renderHome(pageHeader, contentBox);
// renderAlbum(sideMenu, pageHeader, contentBox);
