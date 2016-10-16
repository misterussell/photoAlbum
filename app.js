var sideMenu = $('.sideMenu');
var pageHeader = $('.pageHeader');
var contentBox = $('.selectedContent');
var mainContainer = $('.allContent');
var $window = $(window);
var windowLocation = window.location.hash;
var $a = $('a');
//SCOPE
//automatically load the home page with all album options
//when an album is clicked, it should render the album page with the content for the selected album
//when an image on the selected album page is clicked it should render the image page with the selected image on it

//CAPITALIZE first letter of string
function capFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//RENDER home page content + add hash location to all album previews
function renderHome(pageHeader, contentBox) {
  //CLEAR contents for new data
  pageHeader.empty();
  contentBox.empty();
  //change the location hash
  //
  //CHANGE the header text
  pageHeader.append('<h1>My Albums</h1>');
  //CREATE a list item + add pictures to the list
  albums.forEach(function(album, i, arr){
    var $gridItem = $('<a href="#' + album.albumName + '"><li class="' + album.albumName + '"><img src="' + album.previewImage + '" /img><h2>' + album.albumDescription + '</h2></li></a>');
    contentBox.append($gridItem);
  });
  // console.log(albums);

}

//RENDER album page content for the passed in album info
function renderAlbum(sideMenu, pageHeader, mainContainer, contentBox, album) {
  //CLEAR contents for new data
  sideMenu.empty();
  pageHeader.empty();
  contentBox.empty();

  //STORAGE for passed in album data
  var selectedAlbum = album;

  //PRINT new title
  var selectedAlbumTitle = $('<h1>Album: ' + capFirst(selectedAlbum) + '</h1>');

  //INSERT title into header
  pageHeader.append(selectedAlbumTitle);
  // console.log(albums); // PROOF

  //RETRIEVE a specific album
  function getAlbum(album, i, arr) {
    return album.albumName === selectedAlbum;
  }
  var selectAlbum = albums.filter(getAlbum);
  // console.log(selectAlbum); // PROOF
  // console.log(selectAlbum[0].albumImages); // PROOF only one object, cannot access with forEach

  var allImages = selectAlbum[0].albumImages;
  // console.log(allImages); PROOF to find images

  // EXTRAPOLATES image data from the selected array position above
  allImages.forEach(function(image, i, arr) {
    $gridItem = $('<a href="' + windowLocation + image.imageHash + '"><li><img src="' + image.imageURL + '" /img><h2>' + image.imageName + '</h2></li></a>');
    contentBox.append($gridItem);
  });

  //SIDE MENU HANDLER
  sideMenu.css('display', 'inline-block');
  sideMenu.css('width', '15%');
  sideMenu.css('border-right', '.5rem solid #1A0669');
  mainContainer.css('width', '85%');

  albums.forEach(function(album, i, arr){
    var $menuItem = $('<a href="#' + album.albumName + '"><button>' + capFirst(album.albumName) + '</button></a>');
    sideMenu.append($menuItem);
  });

}

//RENDER a specific image to the image only page
//will require a a back button in the header
function renderImage(pageHeader, contentBox, currentLocation) {
  //CLEAR contents for new data
  pageHeader.empty();
  contentBox.empty();

  //STORAGE for passed in album data
  var location = currentLocation;

  //RETRIEVE the
  var selectedAlbum = location.split('%')[0];
  console.log(selectedAlbum);

  //RETREIVE the image to reference from the hash
  var selectedImage = '%' + location.split('%')[1];
  console.log(selectedImage);

  //PRINT new title
  var selectedAlbumTitle = $('<h1>Album: ' + capFirst(selectedAlbum) + '</h1>');

  //INSERT title into header
  pageHeader.append(selectedAlbumTitle);

  //RETRIEVE a specific album
  function getAlbum(album, i, arr) {
    return album.albumName === selectedAlbum;
  }

  var selectAlbum = albums.filter(getAlbum);
  // console.log(selectAlbum); // PROOF
  // console.log(selectAlbum[0].albumImages); // PROOF only one object, cannot access with forEach

  var allImages = selectAlbum[0].albumImages;
  // console.log(allImages); PROOF to find images

  $('body').css('background', '#6B949E');
}

//REMOVE default behavior from links
$a.on('click', function(e){
	e.preventDefault();
});


//


//CLICK handling and testing below
//CAPTURES albumname from hash location (used only for testing)
var album = windowLocation.slice(1);

//PROOF of page renderings
// renderHome(pageHeader, contentBox);
// renderAlbum(sideMenu, pageHeader, mainContainer, contentBox, album);
renderImage(pageHeader, contentBox, album);

// SET default page view + watch new traffic with specific hash to render that content
// if (windowLocation === '') {
//     renderHome(pageHeader, contentBox);
// }
// } else if (windowLocation.indexOf('%') === -1) {
//   var album = windowLocation.slice(1);
//   renderAlbum(sideMenu, pageHeader, mainContainer, contentBox, album);
// }

//watch location hash for changes and render new content
$window.on('hashchange', function(e){
  alert('help!');
  console.log('changed');
  var album = e.target.location.hash.slice(1);
  console.log(album);
  if(album.indexOf('%') === -1) {
    console.log('test');
    renderAlbum(sideMenu, pageHeader, mainContainer, contentBox, album);
  } else if (album.indexOf('%') === 1) {
    console.log('retrieved album');
    renderImage(pageHeader, contentBox, album);
  }
});
