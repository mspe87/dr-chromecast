
$( document ).ready(function() {
  var player = $("#player");
  if (player){
    console.log(player);
    btnHolder = $(".player-button-holder");
    console.log(btnHolder);
    btnHolder.append('<div class="play-icon" id="test123"><span class="sr-only">Afspil</span></div>');
    $("#test123").append(getCastImg());
    

    $("#castimg").click(function(){
      clickChromeCast();
    });
  }


function clickChromeCast(){
    $(".content-overlay").empty();
    var iframe= $('<iframe>');
    iframe.attr('name', 'castIframe');
    iframe.attr('style', 'width: 100%; min-height: 500px;');

    var url = "http://salty-dawn-8826.herokuapp.com/?url=";
    var encodedDrURL = encodeURIComponent($(location).attr('href'));
    iframe.attr('src', url + encodedDrURL);

    $(".content-overlay").append(iframe);
}

  

  function getCastImg(){
    var img = $('<img>'); 
    img.attr('id', 'castimg');
    img.attr('src', chrome.extension.getURL("images/cast.png"));
    img.attr('height', 40);
    return img;
  }

});



