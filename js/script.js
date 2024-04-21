
$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows:false,
    dots:true,
  }); 


/* scroll to top button start */  
myButton = document.getElementById("myBtn")
window.onscroll = function(){
scrollFunction()
}
function scrollFunction(){
if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  myButton.style.display = "block"
}else{
  myButton.style.display = "none"
}
}

function topFunction(){
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0 
}
/* scroll to top button end */


