/**
 * SECOND CHANCE - GSAP ANIMATIONS
 * Scroll-triggered animations and microinteractions
 */

(function() {
  'use strict';

  const initAnimations = () => {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not loaded');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Counter animations
    animateCounters();

    // Section fade-ins
    animateSections();

    // Service cards
    animateServiceCards();

    // Gallery items
    animateGallery();

    // Review cards
    animateReviews();

    // FAQ items
    animateFAQ();

    // Parallax effects
    parallaxEffects();

    // Button hover effects
    buttonMicrointeractions();

    // Lazy load images
    lazyLoadImages();
  };

  const animateCounters = () => {
    const counters = document.querySelectorAll('.indicator-number[data-count]');
    
    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-count'));
      
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        once: true,
        onEnter: () => {
          gsap.to(counter, {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            ease: 'power2.out',
            onUpdate: function() {
              counter.innerText = Math.ceil(counter.innerText).toLocaleString();
            }
          });
        }
      });
    });
  };

  const animateSections = () => {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  };

  const animateServiceCards = () => {
    const cards = document.querySelectorAll('.service-card');
    
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 50,
        rotationY: -15,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'back.out(1.2)'
      });
    });
  };

  const animateGallery = () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: index * 0.05,
        ease: 'back.out(1.5)'
      });
    });
  };

  const animateReviews = () => {
    const reviews = document.querySelectorAll('.review-card');
    
    reviews.forEach((review, index) => {
      gsap.from(review, {
        scrollTrigger: {
          trigger: review,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: index % 2 === 0 ? -50 : 50,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power2.out'
      });
    });
  };

  const animateFAQ = () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: index * 0.05,
        ease: 'power2.out'
      });
    });
  };

  const parallaxEffects = () => {
    // Parallax on hero elements
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      },
      y: 100,
      opacity: 0.5,
      ease: 'none'
    });

    // Parallax on section headers
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
      gsap.to(header, {
        scrollTrigger: {
          trigger: header,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: -30,
        ease: 'none'
      });
    });
  };

  const buttonMicrointeractions = () => {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function() {
        gsap.to(this, {
          scale: 1.05,
          duration: 0.3,
          ease: 'back.out(1.5)'
        });
      });
      
      button.addEventListener('mouseleave', function() {
        gsap.to(this, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mousedown', function() {
        gsap.to(this, {
          scale: 0.95,
          duration: 0.1,
          ease: 'power2.out'
        });
      });
      
      button.addEventListener('mouseup', function() {
        gsap.to(this, {
          scale: 1.05,
          duration: 0.2,
          ease: 'back.out(2)'
        });
      });
    });
  };

  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.removeAttribute('data-src');
          
          img.addEventListener('load', () => {
            gsap.to(img, {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out'
            });
          });
          
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px'
    });
    
    images.forEach(img => {
      img.style.opacity = '0';
      imageObserver.observe(img);
    });
  };

  // Scroll reveal animations for text elements
  const initTextReveals = () => {
    const textElements = document.querySelectorAll('h2, h3, p');
    
    textElements.forEach(element => {
      // Skip if already animated
      if (element.classList.contains('animated')) return;
      
      element.classList.add('animated');
      
      ScrollTrigger.create({
        trigger: element,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.from(element, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out'
          });
        }
      });
    });
  };

  // Stagger animation for lists
  const animateLists = () => {
    const lists = document.querySelectorAll('.service-features, .area-badge ul, .about-values ul');
    
    lists.forEach(list => {
      const items = list.querySelectorAll('li');
      
      gsap.from(items, {
        scrollTrigger: {
          trigger: list,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out'
      });
    });
  };

  // Progress bar animation for estimator
  const animateProgressBar = () => {
    const progressSteps = document.querySelectorAll('.progress-step');
    
    progressSteps.forEach((step, index) => {
      gsap.from(step, {
        scrollTrigger: {
          trigger: '.estimator-progress',
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 0,
        scale: 0,
        duration: 0.5,
        delay: index * 0.1,
        ease: 'back.out(1.5)'
      });
    });
  };

  // Initialize all animations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initAnimations();
      initTextReveals();
      animateLists();
      animateProgressBar();
    });
  } else {
    initAnimations();
    initTextReveals();
    animateLists();
    animateProgressBar();
  }
})();