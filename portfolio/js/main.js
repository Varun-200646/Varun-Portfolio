// ============================================
//  VARUN MHATRE — PORTFOLIO SHARED SCRIPTS
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ---- Active nav link ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-overlay a').forEach(a => {
    if (a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // ---- Mobile nav ----
  const mobileBtn = document.querySelector('.nav-mobile-btn');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  if (mobileBtn && mobileOverlay) {
    mobileBtn.addEventListener('click', () => {
      mobileOverlay.classList.toggle('open');
      document.body.style.overflow = mobileOverlay.classList.contains('open') ? 'hidden' : '';
    });
    mobileOverlay.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileOverlay.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---- Intersection Observer: reveal + stagger ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        // trigger skill bars
        entry.target.querySelectorAll('.skill-fill').forEach(bar => {
          bar.classList.add('loaded');
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.reveal, .stagger').forEach(el => observer.observe(el));

  // ---- Skill category tabs ----
  const catBtns = document.querySelectorAll('.skill-cat-btn');
  const panels = document.querySelectorAll('.skills-panel');

  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      catBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const target = document.querySelector(`.skills-panel[data-cat="${btn.dataset.cat}"]`);
      if (target) {
        target.classList.add('active');
        // animate bars in newly shown panel
        target.querySelectorAll('.skill-fill').forEach(bar => bar.classList.add('loaded'));
      }
    });
  });

  // ---- Contact Form Handler (AJAX) ----
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Check if the user swapped the ID
      if (form.action.includes('YOUR_ID')) {
        status.style.color = 'var(--red)';
        status.textContent = "Error: Please replace 'YOUR_ID' in contact.html with your actual Formspree Form ID.";
        return;
      }

      const formData = new FormData(form);
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
      status.textContent = '';

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          submitBtn.textContent = '✓ Message sent!';
          submitBtn.style.background = 'var(--green)';
          submitBtn.style.color = '#000';
          status.style.color = 'var(--green)';
          status.textContent = 'Thank you! I will get back to you shortly.';
          form.reset();
        } else {
          const data = await response.json();
          status.style.color = 'var(--red)';
          status.textContent = data.errors ? data.errors.map(error => error.message).join(", ") : "Oops! There was a problem.";
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message →';
        }
      } catch (error) {
        status.style.color = 'var(--red)';
        status.textContent = "Oops! There was a problem submitting your form.";
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message →';
      }
    });
  }


  // ---- Cursor glow (desktop only) ----
  if (window.innerWidth > 768) {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow-el';
    glow.style.cssText = `
      position:fixed;width:360px;height:360px;border-radius:50%;
      background:radial-gradient(circle,rgba(56,189,248,0.04),transparent 70%);
      pointer-events:none;z-index:0;transform:translate(-50%,-50%);
      transition:left 0.08s,top 0.08s;
    `;
    document.body.appendChild(glow);
    document.addEventListener('mousemove', e => {
      glow.style.left = e.clientX + 'px';
      glow.style.top  = e.clientY + 'px';
    });
  }

});
