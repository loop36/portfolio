document.addEventListener("DOMContentLoaded", function() {
//toggle-bar animation
var sc=0;
var count =2;
var b=true; //setting menu as hidden
$('.menu-icon').on("click", function() {
  if(b){
$('.menu-icon').css("transform","rotate(-20deg)");
  $('.menu').css("width", "100%");
  $('.a').css("fill", "#000");
  $('.a:nth-child(1) ,.a:nth-child(2)').css("opacity", "0");
b=false; //setting menu as visible
}
else{
  $('.menu').css("width", "0");
  $('.menu-icon').css("transform","rotate(0deg)");
    $('.a:nth-child(1) ,.a:nth-child(2)').css("opacity", "1");
    b=true;
    setTimeout(function(){
        $('.a').css("fill", "#fff");
    },500);
}

});
//toggle-bar animation ends
//round-button click animation
$('.btn').on("click", function() {

  switch (count) {
    case 1:
       $('.desc4').css("opacity","0");
       $('.line').css("width","40%");
         $('.line').css("opacity","1");
setTimeout(function(){
  $('.line').css("width","0%");
      $('.line').css("opacity","0");
      $('.desc1').css("display", "block");
      $('.desc2').css("display", "none");
      $('.desc3').css("display", "none");
      $('.desc4').css("display", "none");
    },700);
      $('.indic-1').css("fill", "#fff");
      $('.indic-2').css("fill", "none");
      $('.indic-3').css("fill", "none");
      $('.indic-4').css("fill", "none");
      $('.shade').attr("transform", "rotate(0,1470, 450)");
      count = 2;
    $('.desc3').css("opacity","1");
      break;
    case 2:
  $('.desc1').css("opacity","0");
  $('.line').css("width","40%");
    $('.line').css("opacity","1");
      $('.heading').css("background-image", "none");

      setTimeout(function(){
        $('.line').css("width","0%");
            $('.line').css("opacity","0");
      $('.desc1').css("display", "none");
      $('.desc2').css("display", "block")
      $('.desc3').css("display", "none");
      $('.desc4').css("display", "none");
    },700);
      $('.indic-1').css("fill", "none");
      $('.indic-2').css("fill", "#fff");
      $('.indic-3').css("fill", "none");
      $('.indic-4').css("fill", "none");
      $('.shade').attr("transform", "rotate(-65,1470, 450)");
      count = 3;
$('.desc4').css("opacity","1");

      break;
    case 3:

    $('.desc2').css("opacity","0");
    $('.line').css("width","40%");
      $('.line').css("opacity","1");
        setTimeout(function(){
          $('.line').css("width","0%");
              $('.line').css("opacity","0");
      $('.desc1').css("display", "none");
      $('.desc2').css("display", "none");
      $('.desc3').css("display", "block");
      $('.desc4').css("display", "none");
    },700);
      $('.indic-1').css("fill", "none");
      $('.indic-2').css("fill", "none");
      $('.indic-3').css("fill", "#fff");
      $('.indic-4').css("fill", "none");
      $('.shade').attr("transform", "rotate(-160,1470, 450)");
      count = 4;
     $('.desc1').css("opacity","1");
      break;
    case 4:
    $('.desc3').css("opacity","0");
    $('.line').css("width","40%");
    $('.line').css("opacity","1");
        setTimeout(function(){
          $('.line').css("width","0%");
          $('.line').css("opacity","0");
      $('.desc1').css("display", "none");
      $('.desc2').css("display", "none");
      $('.desc3').css("display", "none");
      $('.desc4').css("display", "block");
    },700);
      $('.indic-1').css("fill", "none");
      $('.indic-2').css("fill", "none");
      $('.indic-3').css("fill", "none");
      $('.indic-4').css("fill", "#fff");
      count = 1;
        $('.desc2').css("opacity","1");
      $('.shade').attr("transform", "rotate(-250,1470, 450)");
      break;


  }


});
//round button click animation ends
//scroll animation event
document.addEventListener("wheel",function(event){
  console.log($(document).scrollTop());
if(event.deltaY>0)
{


  sc=sc+1;
    console.log("down "+sc);
    if(sc>12)
    {
      TweenLite.to($('.heading'),.2,{transform:"scale(0.78,0.78)"});
      //$('.heading').css("transform", "scale(0.78,0.78)");
      $('.a').css("fill", "#000");
      $('.heading').css("transform", "translateX(-1000px) scale(0.78,0.78)");

       $('.secondcontent').css("right", "700px");
    sc=15;
    }
}
else {
  $('.heading').css("transform", "scale(1,1)");
  $('.a').css("fill", "#fff");
sc=sc-1;
if(sc<12)
{
  $('.heading').css("transform", "translateX(0)");
  $('.secondcontent').css("right", "-100px");
}
console.log("up "+sc);
}
});
//scroll animation ends
});
