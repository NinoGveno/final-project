const slider = document.querySelector('.headerslider');
const slides = slider.querySelectorAll('.headerslider img');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 5000);

window.addEventListener('scroll', function() {
    var skillBar = document.querySelector('.skill-bar');
    var skillBarFill = document.querySelectorAll('.skill-bar-fill');
    var skillBarPosition = skillBar.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
  
    for (var i = 0; i < skillBarFill.length; i++) {
      var skillBarFillPercentage = skillBarFill[i].getAttribute('data-percentage');
      var skillBarFillWidth = (skillBarFillPercentage / 100) * skillBar.offsetWidth;
  
      if (skillBarPosition < windowHeight) {
        skillBarFill[i].style.width = skillBarFillWidth + 'px';
      }
    }
  });
 
