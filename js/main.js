/**
 * Multi-Causal AI Career Framework
 * Core Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initActiveNav();
  initDocModal();
});

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');

  if (!menuBtn || !mobileNav) return;

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    menuBtn.textContent = !isExpanded ? 'Close' : 'Menu';
    mobileNav.classList.toggle('open', !isExpanded);
  });

  // Close when pressing Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      menuBtn.setAttribute('aria-expanded', 'false');
      menuBtn.textContent = 'Menu';
      mobileNav.classList.remove('open');
      menuBtn.focus();
    }
  });
}

// Active Nav link based on current URL
function initActiveNav() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-item-link, .mobile-nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkPath = href.toLowerCase();
    const isHome = (currentPath === '/' || currentPath.endsWith('index.html')) && (linkPath === '/' || linkPath === 'index.html' || linkPath === './');
    const isMatch = isHome || (currentPath.includes(linkPath.replace('.html', '')) && linkPath !== '/' && linkPath !== 'index.html' && linkPath !== './');

    if (isMatch) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

// Document / Presentation Modal Helper
function initDocModal() {
  const modal = document.getElementById('doc-modal');
  const modalTitle = document.getElementById('modal-doc-title');
  const modalPath = document.getElementById('modal-doc-path');
  const modalDesc = document.getElementById('modal-doc-desc');
  const modalActionBtn = document.getElementById('modal-action-btn');
  const modalCloseBtns = document.querySelectorAll('[data-close-modal]');

  if (!modal) return;

  window.openDocModal = function(title, path, desc, actionType = 'View') {
    if (modalTitle) modalTitle.textContent = title;
    if (modalPath) modalPath.textContent = path ? `Target file path: ${path}` : 'Path: To be configured';
    if (modalDesc) modalDesc.textContent = desc || 'This document will be published once approved by the academic supervisor.';
    
    if (modalActionBtn) {
      modalActionBtn.textContent = actionType === 'Download' ? 'Download File' : 'Open in New Tab';
      modalActionBtn.onclick = () => {
        if (path) {
          window.open(path, '_blank');
        } else {
          alert('Document file is pending upload. Please check back later.');
        }
      };
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  };

  window.closeDocModal = function() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', window.closeDocModal);
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      window.closeDocModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      window.closeDocModal();
    }
  });
}
