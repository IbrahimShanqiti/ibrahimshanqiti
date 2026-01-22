// Minimal JS - just what's needed

document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe project cards and experience cards
  document.querySelectorAll('.project-card, .exp-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });

  // Add stagger delay to experience cards
  document.querySelectorAll('.exp-card').forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });
});
