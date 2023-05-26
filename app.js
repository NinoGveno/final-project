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


function quoteSlider() {
  const qSlide = document.querySelectorAll('.quote');
  const qSlider = document.querySelector('.quotes');
  const bullets = document.querySelectorAll('.bullet');
  let activeIndex = 0;

  function nextQuote(direction) {
    if (direction === "right") {
      if (activeIndex === qSlide.length - 1) {
        activeIndex = 0;
      } else {
        activeIndex++;
      }
    } else if (direction === "left") {
      if (activeIndex === 0) {
        activeIndex = qSlide.length - 1;
      } else {
        activeIndex--;
      }
    }
    renderSlides();
  }

  bullets.forEach((bullet, i) => {
    bullet.addEventListener("click", () => {
      activeIndex = i;
      renderSlides();
      bullets.forEach((bullet) => {
        bullet.classList.remove("bullet-active");
      });
      bullet.classList.add("bullet-active");
    });
    if (i === activeIndex) {
      bullet.classList.add("bullet-active");
    } else {
      bullet.classList.remove("bullet-active");
    }
    if (i === activeIndex) {
      qSlide[i].classList.add("actives");
    } else {
      qSlide[i].classList.remove("actives");
    }
  });

  function renderSlides() {
    qSlide.forEach((slide, i) => {
      if (i === activeIndex) {
        slide.classList.add("actives");
      } else {
        slide.classList.remove("actives");
      }
    });
  }

  renderSlides();
}

quoteSlider();

//last project
const lis = Array.from(document.getElementsByClassName('last-content-li'));
const divs = Array.from(document.getElementsByClassName('last-content'));

function showContent() {
  const activeDiv = Array.from(document.getElementsByClassName('active-li'));
  activeDiv.forEach(element => {
    element.classList.remove('active-li')
  });
  this.classList.add('active-li')

  if (this.dataset.target === '-1') {
    // show all content
    divs.forEach(element => {
      element.classList.add('show')
    });
  } else {
    // hide all content
    divs.forEach(element => {
      element.classList.remove('show')
    });
    // show target
    divs[this.dataset.target].classList.add('show')
  }
}

lis.forEach((li) => {
  li.addEventListener('mouseover', showContent);
});

//contact 
const form = document.getElementById('contactForm')
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const modal = document.getElementById('contactModal');
  const closeButton = document.querySelector('.close');
  
  closeButton.addEventListener('click', closeModal);

  function showModal() {
    modal.style.display = 'block';
  }

  function closeModal() {
    modal.style.display = 'none';
  }

  const data = new URLSearchParams();
  Array.from(new FormData(form).entries()).forEach(([name, value]) => {
    data[name] = value
  })
  fetch(`https://borjomi.loremipsum.ge/api/send-message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((json) => {
    showModal();
  })
  .catch(() => {
    console.log('contact submit error')
  })
})
