


// navbar //
document.addEventListener("DOMContentLoaded", function() {
    const navDots = document.querySelectorAll(".nav-dot");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const sections = document.querySelectorAll("section");

    function removeHoverClass() {
        navDots.forEach(dot => dot.classList.remove("hover"));
    }

    function addHoverClass(section) {
        const dot = document.querySelector(`.nav-dot[data-section="${section}"]`);
        if (dot) {
            dot.classList.add("hover");
        }
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const section = this.getAttribute("data-section");
            removeHoverClass();
            addHoverClass(section);
            document.querySelector(section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    navDots.forEach(dot => {
        dot.addEventListener("click", function() {
            const section = this.getAttribute("data-section");
            removeHoverClass();
            addHoverClass(section);
            document.querySelector(section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = `#${entry.target.id}`;
                removeHoverClass();
                addHoverClass(sectionId);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});



 // Other carousal //
 const scrollingContent = document.querySelector('.scrolling-content');

scrollingContent.addEventListener('animationiteration', () => {
    scrollingContent.style.animation = 'none';
    scrollingContent.offsetHeight; // Trigger reflow
    scrollingContent.style.animation = null;
});



// swiper //
document.addEventListener('DOMContentLoaded', function() {
  new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 6000, 
      disableOnInteraction: false, 
    },
  });
});



// 2nd page button //
document.getElementById('sendButton').addEventListener('click', function(event) {
            event.preventDefault();
            const form = document.getElementById('contactForm');
            if (form.checkValidity()) {
                alert('Form submitted successfully!');
                // You can add your form submission logic here
            } else {
                alert('Please fill out all required fields.');
            }
        });



// pricing mobile view slider //
        
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToCard(index);
    });
});

document.querySelectorAll('.pricing-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        scrollToCard(index);
    });
});

function scrollToCard(index) {
    const cards = document.querySelectorAll('.pricing-card');
    const card = cards[index];
    const container = document.querySelector('.pricing-section');

    const cardRect = card.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const offset = cardRect.left - containerRect.left + container.scrollLeft - (container.clientWidth / 2) + (cardRect.width / 2);
    container.scrollTo({
        left: offset,
        behavior: 'smooth'
    });

    updateDots(index);
}

function updateDots(activeIndex) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index === activeIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}



// logo scrolling //
    document.querySelectorAll('.logo-link').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector('#section1').scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


// card pagination //
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselCards = document.querySelectorAll('.carousel-card');
    
    // Clone cards for infinite effect
    carouselCards.forEach(card => {
        carouselContainer.appendChild(card.cloneNode(true));
    });

    let index = 0;

    function scrollCarousel() {
        index++;
        if (index >= carouselCards.length) {
            index = 0;
            carouselContainer.style.transition = 'none';
            carouselContainer.style.transform = 'translateX(0)';
            setTimeout(() => {
                carouselContainer.style.transition = 'transform 0.5s ease-in-out';
                index++;
                carouselContainer.style.transform = `translateX(-${index * 100 / (carouselCards.length / 4)}%)`;
            }, 50);
        } else {
            carouselContainer.style.transform = `translateX(-${index * 100 / (carouselCards.length / 4)}%)`;
        }
    }

    setInterval(scrollCarousel, 3000); // Adjust interval as needed
});











