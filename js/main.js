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
  const segments = currentPath.split(/[/\\]/).filter(Boolean);
  const currentFileName = segments.length > 0 ? segments[segments.length - 1] : '';
  const isHome = !currentFileName || currentFileName === 'index.html';

  const navLinks = document.querySelectorAll('.nav-item-link, .mobile-nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;

    const linkSegments = href.toLowerCase().split(/[/\\]/).filter(Boolean);
    const linkFileName = linkSegments.length > 0 ? linkSegments[linkSegments.length - 1] : '';
    const isLinkHome = !linkFileName || linkFileName === 'index.html' || href === '/' || href === './';

    const isMatch = isHome ? isLinkHome : (linkFileName === currentFileName);

    if (isMatch) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    } else {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
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
          if (actionType === 'Download') {
            const dlLink = document.createElement('a');
            dlLink.href = path;
            dlLink.download = path.split('/').pop();
            document.body.appendChild(dlLink);
            dlLink.click();
            document.body.removeChild(dlLink);
          } else {
            window.open(path, '_blank');
          }
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
