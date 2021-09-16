var hamb = 0
$('.tg-hamburger').click(function(){
  if(hamb % 2 == 0){
    $('.tg-hamburger span:nth-child(1)').css("transform","rotate(-45deg)")
    $('.tg-hamburger span:nth-child(2)').css("transform","rotate(45deg)")
    $('.mobile-menu').show(300)
    hamb++
  }
  else{
    $('.tg-hamburger span:nth-child(1)').css("transform","rotate(0deg)")
    $('.tg-hamburger span:nth-child(2)').css("transform","rotate(-0deg)")
    $('.mobile-menu').hide(300)
    hamb++
  }
})