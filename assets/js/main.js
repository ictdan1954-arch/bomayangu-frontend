// Set active nav link based on current path
function setActiveNav() {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link => {
    const href = link.getAttribute('href');
    let isActive = false;
    if (path === href) isActive = true;
    else if (path === '/' && href === 'index.html') isActive = true;
    else if (path.endsWith('/') && href === path) isActive = true;
    else if (href !== 'index.html' && path.includes(href.replace(/\//g, ''))) isActive = true;
    if (isActive) link.classList.add('active');
    else link.classList.remove('active');
  });
}

// Admin floating button
function initAdminButton() {
  const btn = document.getElementById('adminFloatBtn');
  if (btn) {
    btn.addEventListener('click', () => {
      window.location.href = 'admin.html';
    });
  }
}

// Global toast function (used by home page)
window.showToast = function(msg) {
  let t = document.querySelector('.toast-msg');
  if (t) t.remove();
  let div = document.createElement('div');
  div.className = 'toast-msg';
  div.textContent = msg;
  document.body.appendChild(div);
  setTimeout(() => div.remove(), 3500);
};

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initAdminButton();
});