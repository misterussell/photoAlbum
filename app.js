var sideMenu = $('.sideMenu');
var pageHeader = $('.pageHeader');
var contentBox = $('.selectedContent');

function renderHome() {
  //change the header text
  pageHeader.text('My Albums');
  //create a list item
  //add pictures to the list
  albums.forEach(function(picture, i, arr){
    // var $gridItem = $('<li>' + picture.previewImage + '</li>');
    var $gridItem = $('<li><img src="' + picture.previewImage + '" /img></li>');
    contentBox.append($gridItem);
  });
}

function renderAlbum(sideMenu, pageHeader, contentBox) {
  // albums.forEach(function(picture, i, arr){
  //   contentBox.append($gridItem);
  //   var $gridItem = $('<li>' + picture + '</li>');
  // });



}

renderHome(pageHeader, contentBox);
