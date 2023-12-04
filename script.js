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
  
