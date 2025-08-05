// Enhanced typing animation with multiple texts
const typeText = document.querySelector('.type-glow');
if (typeText) {
  const texts = [
    "Hi, I'm Siri Aishwarya G U",
    "Full Stack Developer 💻",
    "AI/ML Enthusiast 🤖",
    "Problem Solver 🚀"
  ];
  
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  
  function typeWriter() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      typeText.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typeText.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }
    
    let typeSpeed = isDeleting ? 50 : 100;
    
    if (!isDeleting && charIndex === currentText.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typeSpeed = 500;
    }
    
    setTimeout(typeWriter, typeSpeed);
  }
  
  setTimeout(typeWriter, 1000);
}

// Enhanced particle system
function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `;
  document.body.appendChild(particlesContainer);

  const colors = ['#e879f9', '#8b5cf6', '#3b82f6', '#06b6d4'];
  
  for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      opacity: ${Math.random() * 0.6 + 0.2};
      animation: float ${Math.random() * 6 + 4}s ease-in-out infinite;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 4 + 's';
    
    particlesContainer.appendChild(particle);
  }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Enhanced intersection observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0) rotateX(0)';
    }
  });
}, observerOptions);

// Counter animation for stats
function animateCounter(element, target) {
  let current = 0;
  const increment = target / 100;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (target === 9.2) {
      element.textContent = current.toFixed(1);
    } else if (target === 90) {
      element.textContent = Math.floor(current) + '%+';
    } else if (target === 4) {
      element.textContent = Math.floor(current) + '+';
    } else {
      element.textContent = Math.floor(current);
    }
  }, 20);
}

// Initialize everything when DOM loads
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  
  // Animate project cards
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px) rotateX(10deg)';
    card.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    observer.observe(card);
  });
  
  // Animate stats counters
  const statNumbers = document.querySelectorAll('.project-card h3');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const text = entry.target.textContent;
        if (text.includes('9.2')) animateCounter(entry.target, 9.2);
        else if (text.includes('4+') && text.includes('4+')) animateCounter(entry.target, 4);
        else if (text.includes('4') && !text.includes('+')) animateCounter(entry.target, 4);
        else if (text.includes('90%+')) animateCounter(entry.target, 90);
        statsObserver.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => {
    if (stat.textContent.match(/\d+/)) {
      statsObserver.observe(stat);
    }
  });
  
  // Enhanced profile picture effects
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
    profilePic.addEventListener('mouseenter', () => {
      profilePic.style.filter = 'brightness(1.2) saturate(1.4) hue-rotate(10deg)';
    });
    
    profilePic.addEventListener('mouseleave', () => {
      profilePic.style.filter = 'brightness(1) saturate(1) hue-rotate(0deg)';
    });
  }
});

// Enhanced cursor effect
let cursor = null;
document.addEventListener('mousemove', (e) => {
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.style.cssText = `
      position: fixed;
      width: 25px;
      height: 25px;
      background: radial-gradient(circle, rgba(232,121,249,0.4) 0%, rgba(139,92,246,0.2) 50%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      transition: transform 0.1s ease;
      mix-blend-mode: screen;
    `;
    document.body.appendChild(cursor);
  }
  
  cursor.style.left = e.clientX - 12.5 + 'px';
  cursor.style.top = e.clientY - 12.5 + 'px';
});

// Enhanced form handling
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const button = form.querySelector('.glass-btn');
    const originalText = button.textContent;
    
    // Loading state
    button.textContent = 'Sending...';
    button.style.background = 'rgba(232, 121, 249, 0.3)';
    button.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
      button.textContent = 'Message Sent! ✓';
      button.style.background = 'rgba(34, 197, 94, 0.3)';
      button.style.borderColor = '#22c55e';
      
      // Reset after delay
      setTimeout(() => {
        button.textContent = originalText;
        button.style.background = 'rgba(232, 121, 249, 0.1)';
        button.style.borderColor = '#e879f9';
        button.disabled = false;
        form.reset();
      }, 3000);
    }, 2000);
  });
}

// Simple scroll to top on logo click
const logo = document.querySelector('.logo');
if (logo) {
  logo.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}