
$( document ).ready(function() {
  var player = $("#player");
  if (player){
    var href = $('<a>'); 
    var url = "http://tbertelsen.dk/castdr/?url=";
    var encodedDrURL = encodeURIComponent($(location).attr('href'));
    href.attr('href', url + encodedDrURL);
    href.attr('target', '_blank');
    href.append(getCastImg());
    player.append(href);
  }
  

  function getCastImg(){
    var img = $('<img>'); 
    img.attr('id', 'castimg');
    img.attr('src', chrome.extension.getURL("images/cast.png"));
    img.attr('height', 40);
    return img;
  }

});





