let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

$('.page').each(function(i,e){
    $(this).click(function(event){
      var x = event.pageX;
      var y = event.pageY;
      
      var nextItem = i + 1;
      if (nextItem >= $('.page').length){
        nextItem = 0;
      }
      
      $('.page:eq('+ nextItem +')').css('z-index', parseInt($(this).css('z-index')) + 1);
      $('.page:eq('+ nextItem +')').css('clip-path', 'circle(0% at '+ x +'px '+ y +'px)');
      
      anime({
        targets: $('.page')[nextItem],
        update: function(anim) {
          $('.page:eq('+ nextItem +')').css('clip-path', 'circle('+ (anim.progress*2) +'% at '+ x +'px '+ y +'px)');
        }
      });
    });
  });