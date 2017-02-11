
var didScroll;
var initpos;
var currentPos;
var header;

$(document).ready(function(){
  header=$('.main-header')
  initpos=header.offset();
  didScroll=false

});



$(window).scroll(function(event){
  if (!didScroll) {
    initpos=header.offset().top;
    console.log(';dddd');
  }
  didScroll=true;
});

setInterval(function(){
  if(didScroll){
    hasScrolled(header.offset().top);
  }else {
    header.show();
  }

},250);

function hasScrolled(currentPos){
  if (currentPos >= initpos) {
      header.hide();
  }
  didScroll=false;

}
