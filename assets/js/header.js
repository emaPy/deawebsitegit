
var isScrolling;
var initpos;
var currentPos;
var header;

$(document).ready(function(){
  header=$('.main-header')
  isScrolling=false

});


$(window)
  .on("scrollstart", function() {
    initpos=header.offset().top;
  })
  .on("scrollstop", function() {
    header.show();
    initpos=header.offset().top;
  })
  $(window).scroll(function(){
    isScrolling=true;
    currentPos=header.offset().top;

  });

setInterval(function(){
  if(isScrolling){
    console.log("scrolling");
    adjustHeader();

  }
  isScrolling=false;

},300);


function adjustHeader(){
  if (initpos<currentPos) {
    header.hide();
  }



}
