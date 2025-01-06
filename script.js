//scroll nav bar
let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector('.nav_bar').classList.add('show');
    document.querySelector('.nav_bar').classList.remove('remove');
    
  } else {
    document.querySelector('.nav_bar').classList.add('remove');
    document.querySelector('.nav_bar').classList.remove('show');
  
  }

  prevScrollPos = currentScrollPos;
});


document.querySelectorAll(".nav_link").forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetElement = document.querySelector(this.getAttribute('href'));

      scrollToElement(targetElement, 1000); 
  });
});


function scrollToElement(element, duration) {
  const targetPosition = element.getBoundingClientRect().top;
  const startPosition = window.pageYOffset;
  const startTime = performance.now();

  function animateScroll(currentTime) {
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animateScroll);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animateScroll);
}

