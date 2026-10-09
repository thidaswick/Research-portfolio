/**
 * Multi-Causal AI Career Framework
 * Milestones Interactive Assessment Selector
 */

const milestonesData = [
  {
    name: 'Project Proposal',
    desc: 'Initial presentation of the research problem, objectives, scope and proposed methodology.',
    date: 'To be updated',
    marks: 'To be updated',
    status: 'To be updated',
    link: 'documents.html',
    linkLabel: 'Proposal Document',
    fileNote: '(file pending upload)'
  },
  {
    name: 'Progress Presentation 1',
    desc: 'First progress review covering early implementation and research findings.',
    date: 'To be updated',
    marks: 'To be updated',
    status: 'To be updated',
    link: 'presentations.html',
    linkLabel: 'Progress Presentation 1',
    fileNote: '(file pending upload)'
  },
  {
    name: 'Progress Presentation 2',
    desc: 'Second progress review demonstrating substantial system completion and evaluation.',
    date: 'To be updated',
    marks: 'To be updated',
    status: 'To be updated',
    link: 'presentations.html',
    linkLabel: 'Progress Presentation 2',
    fileNote: '(file pending upload)'
  },
  {
    name: 'Final Assessment',
    desc: 'Final evaluation of the completed framework, research outcomes and documentation.',
    date: 'To be updated',
    marks: 'To be updated',
    status: 'To be updated',
    link: 'documents.html',
    linkLabel: 'Final Research Document',
    fileNote: '(file pending upload)'
  },
  {
    name: 'Viva',
    desc: 'Oral examination where the team defends the research and answers examiner questions.',
    date: 'To be updated',
    marks: 'To be updated',
    status: 'To be updated',
    link: 'presentations.html',
    linkLabel: 'Viva Presentation',
    fileNote: '(file pending upload)'
  }
];

function renderMilestone(index) {
  const item = milestonesData[index] || milestonesData[0];
  const count = milestonesData.length;

  const numEl = document.getElementById('milestone-num');
  const titleEl = document.getElementById('milestone-title');
  const descEl = document.getElementById('milestone-desc');
  const dateEl = document.getElementById('milestone-date');
  const marksEl = document.getElementById('milestone-marks');
  const statusEl = document.getElementById('milestone-status');
  const linkEl = document.getElementById('milestone-link');
  const fileNoteEl = document.getElementById('milestone-filenote');

  if (numEl) numEl.textContent = `MILESTONE ${index + 1} OF ${count}`;
  if (titleEl) titleEl.textContent = item.name;
  if (descEl) descEl.textContent = item.desc;
  if (dateEl) dateEl.textContent = item.date;
  if (marksEl) marksEl.textContent = item.marks;
  if (statusEl) statusEl.textContent = item.status;
  
  if (linkEl) {
    linkEl.href = item.link;
    linkEl.textContent = `${item.linkLabel} →`;
  }
  if (fileNoteEl) fileNoteEl.textContent = item.fileNote;

  // Update dropdown
  const selectEl = document.getElementById('milestone-select');
  if (selectEl && Number(selectEl.value) !== index) {
    selectEl.value = index;
  }

  // Update button highlights
  const buttons = document.querySelectorAll('.milestone-btn');
  buttons.forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
    } else {
      btn.classList.remove('active');
      btn.setAttribute('aria-pressed', 'false');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const selectEl = document.getElementById('milestone-select');
  if (selectEl) {
    selectEl.addEventListener('change', (e) => {
      renderMilestone(Number(e.target.value));
    });
  }

  const buttons = document.querySelectorAll('.milestone-btn');
  buttons.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      renderMilestone(idx);
    });
  });

  // Render initial
  renderMilestone(0);
});
