
var initpos;
var header;
var finalpos;

$(document).ready(function(){
  header=$('.main-header');
  initpos=header.offset().top;
  console.log("pos "+initpos);
});

$(window).scroll(function(){
  currentTop=header.offset().top;
  isLoading = true;
  if (currentTop > initpos) {
    header.hide();
    finalpos=currentTop
  }else if (finalpos > currentTop) {
    header.show();
  }






});
