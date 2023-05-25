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
// 

  const slide = document.querySelectorAll(".quote");
  const buttons = document.querySelectorAll(".rectangle");
  
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const slideNumber = button.getAttribute("data-slide");
  
      slides.forEach((slide) => {
        slide.classList.remove("active");
      });
  
      const slideToShow = document.querySelector(
        `.quote[data-slide="${slideNumber}"]`
      );
      slideToShow.classList.add("active");
    });
  });
  
  const listItems = document.querySelectorAll(".list-item");
  const projectItems = document.querySelectorAll(".project");
  
  listItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      listItems.forEach((listItem) => {
        listItem.classList.remove("active");
      });
      item.classList.add("active");
  
      const category = item.innerText;
  
      projectItems.forEach((project, projectIndex) => {
        if (category === "All") {
          project.style.display = "block";
        } else if (projectIndex === index - 1) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
    });
  });
  
  const logoContainer = document.querySelector(".logo-container");
  
  