// we're gonna make a parallax effet for the home-hero bckground image and for the "who we are box"

//we're gonna check for my window, and when my window scrolls we will do a function, and with than function we're gonna run parallax.
$(window).scroll(function(){
  parallax();
})

//parallax will be this function.The first thing is that i'm gonna track my screen as scrolling.I'm gonna create a variable and call it window scroll.
function parallax(){
  var wScroll = $(window).scrollTop();
  //console.log(wScroll);
  //everytime the windows scroll we have more hellos. Instead of hello i put my var wScroll. Now when i scroll it's gonna pop up some numbers that is how far down i've scrolled. And when i go up it starts to go up to zero.Its keeping track how far away from the top of the window i am.
  //now i want to select my parallax-bg, and i want to modify my css property.My background position property it gonging to be centered (i put the space because in my css i can say center left and between the two property i put some space, and i include my space also in js.)
  //i have multiplied * 0.5, so when i scroll down it should move half the speed.
  $('.parallax--bg').css('background-position','center '+(wScroll*0.175)+'px')
  //we want to do the same thing with the box.
  $('.parallax--box').css('top', -5+(wScroll*0.007)+'em');

}
