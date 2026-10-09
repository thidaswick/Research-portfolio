/**
 * Multi-Causal AI Career Framework
 * Contact Form Validation & State Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const alertSuccess = document.getElementById('contact-alert-success');

  if (!form) return;

  const fields = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    subject: document.getElementById('subject'),
    message: document.getElementById('message')
  };

  const errors = {
    name: document.getElementById('name-err'),
    email: document.getElementById('email-err'),
    subject: document.getElementById('subject-err'),
    message: document.getElementById('message-err')
  };

  function validateField(fieldId, value) {
    const val = value.trim();
    switch (fieldId) {
      case 'name':
        return val.length === 0 ? 'Please enter your name.' : '';
      case 'email':
        if (val.length === 0) return 'Please enter your email address.';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(val) ? 'Please enter a valid email address.' : '';
      case 'subject':
        return val.length === 0 ? 'Please enter a subject.' : '';
      case 'message':
        return val.length < 10 ? 'Message must be at least 10 characters.' : '';
      default:
        return '';
    }
  }

  // Clear errors on input
  Object.keys(fields).forEach((key) => {
    const input = fields[key];
    if (!input) return;

    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        const errorMsg = validateField(key, input.value);
        if (!errorMsg) {
          input.classList.remove('error');
          input.removeAttribute('aria-invalid');
          if (errors[key]) errors[key].textContent = '';
        }
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let hasErrors = false;

    Object.keys(fields).forEach((key) => {
      const input = fields[key];
      const errEl = errors[key];
      if (!input || !errEl) return;

      const errorMsg = validateField(key, input.value);
      if (errorMsg) {
        hasErrors = true;
        input.classList.add('error');
        input.setAttribute('aria-invalid', 'true');
        errEl.textContent = errorMsg;
      } else {
        input.classList.remove('error');
        input.removeAttribute('aria-invalid');
        errEl.textContent = '';
      }
    });

    if (!hasErrors) {
      if (alertSuccess) {
        alertSuccess.style.display = 'block';
        alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      form.reset();
    } else {
      if (alertSuccess) {
        alertSuccess.style.display = 'none';
      }
    }
  });
});
