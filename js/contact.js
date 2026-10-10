/**
 * Research Portfolio
 * Contact Form In-Page Email Sender
 */

// If opened directly as a local file (file:///), automatically switch to the local server
// so AJAX in-page submissions work seamlessly without redirects or mail clients
if (window.location.protocol === 'file:') {
  window.location.replace('http://localhost:8000/contact.html');
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const alertSuccess = document.getElementById('contact-alert-success');
  const alertError = document.getElementById('contact-alert-error');
  const submitBtn = document.getElementById('submit-btn');

  if (!form) return;

  function hideAllAlerts() {
    if (alertSuccess) alertSuccess.style.display = 'none';
    if (alertError) alertError.style.display = 'none';
  }

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

  form.addEventListener('submit', async (e) => {
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

    if (hasErrors) {
      hideAllAlerts();
      return;
    }

    // Set sending button state
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending Message...';
    }
    hideAllAlerts();

    const payload = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      subject: fields.subject.value.trim(),
      _subject: `[Research Portfolio] ${fields.subject.value.trim()}`,
      message: fields.message.value.trim(),
      _captcha: 'false',
      _template: 'table'
    };

    try {
      // Obfuscated recipient to prevent email harvesting and scrapers
      const _e = atob('dGhpZGFzd2lja3JhbWFzaW5naGU4QGdtYWlsLmNvbQ==');
      const response = await fetch(`https://formsubmit.co/ajax/${_e}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);

      if (data && (data.success === 'true' || data.success === true)) {
        if (alertSuccess) {
          alertSuccess.style.display = 'block';
          alertSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
        form.reset();
      } else {
        throw new Error(data && data.message ? data.message : 'Submission failed');
      }
    } catch (err) {
      console.warn('Submission error:', err);
      if (alertError) {
        alertError.style.display = 'block';
        alertError.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Message';
      }
    }
  });
});
