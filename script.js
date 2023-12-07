document.addEventListener('mousemove', function(e) {
    const glow = document.getElementById('glow');
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });

document.addEventListener('DOMContentLoaded', (e) => {
    const navbar = document.getElementById('portfolio-navbar');
    const portfolioSection = document.getElementById('my-portfolio');
  
    window.addEventListener('scroll', () => {
      const rect = portfolioSection.getBoundingClientRect();
      
      // Sprawdź, czy sekcja portfolio jest widoczna
      if (rect.top + window.innerHeight <= window.innerHeight) {
        navbar.style.transform = 'translateY(0)';
      } else {
        navbar.style.transform = 'translateY(-100%)';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', (event) => {
    const navbarItems = document.querySelectorAll('#portfolio-navbar p');
    const sections = document.querySelectorAll('.project-section');
  
    function onScroll() {
      let currentSection = '';
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= window.innerHeight / 2) {
          currentSection = section.getAttribute('id');
        }
      });
  
      navbarItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-target') === currentSection) {
          item.classList.add('active');
        }
      });
    }
  
    window.addEventListener('scroll', onScroll);
  });
  
  document.getElementById('scroll-button').addEventListener('click', function() {
    document.getElementById('scroll-to-portfolio').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.hamburger-menu-icon');
    const mobileNav = document.querySelector('.mobile-nav-open');
  
    menuIcon.addEventListener('click', function() {
      mobileNav.classList.toggle('mobile-active');
    });
    document.getElementById('close-button').addEventListener('click', function() {
      mobileNav.classList.remove('mobile-active');
    })
  });
