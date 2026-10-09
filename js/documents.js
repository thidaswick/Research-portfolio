/**
 * Multi-Causal AI Career Framework
 * Document and Presentation Repository Registry
 */

const projectDocuments = [
  {
    title: 'Project Charter',
    desc: 'Defines project scope, objectives, stakeholders and governance.',
    type: 'PDF',
    path: 'documents/project-charter.pdf',
    category: 'core'
  },
  {
    title: 'Proposal Document',
    desc: 'Formal research proposal including problem, gap, objectives and methodology.',
    type: 'PDF',
    path: 'documents/project-proposal.pdf',
    category: 'core'
  },
  {
    title: 'Check List Documents',
    desc: 'Assessment checklists submitted throughout the research project lifecycle.',
    type: 'PDF',
    path: 'documents/checklist-documents.pdf',
    category: 'core'
  },
  {
    title: 'Final Research Document',
    desc: 'Complete final research report of the integrated Multi-Causal AI framework.',
    type: 'PDF',
    path: 'documents/final-report.pdf',
    category: 'core'
  }
];

const individualDocuments = [
  {
    title: 'Individual Research Document – Component 01',
    desc: 'Explainable AI-Based Interview Readiness Analysis and Career Path Recommendation — IT22112446 – Kaluarachchi S.M.',
    type: 'PDF',
    path: 'documents/individual-component-1.pdf',
    category: 'individual'
  },
  {
    title: 'Individual Research Document – Component 02',
    desc: 'Behavior-Aware Career Impact Prediction System — IT22176110 – Daundasekara D.M.D.C.',
    type: 'PDF',
    path: 'documents/individual-component-2.pdf',
    category: 'individual'
  },
  {
    title: 'Individual Research Document – Component 03',
    desc: 'Career Safety and Industry Stability Analysis — IT22201614 – WICKRAMASINGHE T.B.B.',
    type: 'PDF',
    path: 'documents/individual-component-3.pdf',
    category: 'individual'
  },
  {
    title: 'Individual Research Document – Component 04',
    desc: 'AI-Assisted Employer Trust and Hiring Risk Assessment System — IT22546470 – MUAZ M.M.R.',
    type: 'PDF',
    path: 'documents/individual-component-4.pdf',
    category: 'individual'
  }
];

const otherDocuments = [
  {
    title: 'Other Documents & Supplementary Material',
    desc: 'Ethical review approval, questionnaire instruments, and supplementary datasets.',
    type: 'Various',
    path: 'documents/supplementary-materials.pdf',
    category: 'other'
  }
];

const presentationsList = [
  {
    title: 'Project Proposal Presentation',
    desc: 'Initial defense presenting the research problem, gap, proposed solution and methodology.',
    type: 'Slides',
    path: 'presentations/proposal.pdf'
  },
  {
    title: 'Progress Presentation 1',
    desc: 'First formal review covering literature review, initial architecture, and component prototypes.',
    type: 'Slides',
    path: 'presentations/progress-1.pdf'
  },
  {
    title: 'Progress Presentation 2',
    desc: 'Second progress review showcasing experimental evaluation, random forest model, and initial metrics.',
    type: 'Slides',
    path: 'presentations/progress-2.pdf'
  },
  {
    title: 'Final Presentation',
    desc: 'Comprehensive presentation defending the completed framework, integration, and verified results.',
    type: 'Slides',
    path: 'presentations/final.pdf'
  },
  {
    title: 'Viva Presentation',
    desc: 'Oral defense examination slides used during individual component questioning.',
    type: 'Slides',
    path: 'presentations/viva.pdf'
  }
];

// Document Card Component HTML Generator
function createDocCardHTML(item) {
  const iconSvg = item.type === 'Slides' 
    ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" aria-hidden="true"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M7 21h10"/><path d="M12 17v4"/></svg>`
    : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" aria-hidden="true"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>`;

  const escapedTitle = item.title.replace(/"/g, '&quot;');
  const escapedPath = item.path.replace(/"/g, '&quot;');
  const escapedDesc = item.desc.replace(/"/g, '&quot;');

  return `
    <article class="card flex flex-col justify-between hover-lift">
      <div>
        <div class="flex items-center justify-between gap-3">
          <div class="flex items-center gap-2">
            ${iconSvg}
            <span class="badge-type">${item.type}</span>
          </div>
          <span class="badge-status">
            <span class="badge-status-dot"></span>
            To be updated
          </span>
        </div>
        <h3 class="card-title text-lg font-medium mt-4">${item.title}</h3>
        <p class="card-text text-sm text-muted-foreground mt-2">${item.desc}</p>
        <p class="mt-3 font-mono text-xs text-muted-foreground" style="word-break: break-all;">
          Intended path: <span class="text-foreground">${item.path}</span>
        </p>
      </div>
      <div class="mt-6 flex flex-wrap gap-2">
        <button type="button" 
                class="btn btn-secondary text-xs px-3 py-1.5" 
                onclick="handleDocAction('${escapedTitle}', '${escapedPath}', '${escapedDesc}', 'View')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          View Document
        </button>
        <button type="button" 
                class="btn btn-outline text-xs px-3 py-1.5" 
                onclick="handleDocAction('${escapedTitle}', '${escapedPath}', '${escapedDesc}', 'Download')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
          Download
        </button>
      </div>
    </article>
  `;
}

function handleDocAction(title, path, desc, actionType) {
  if (window.openDocModal) {
    window.openDocModal(title, path, desc, actionType);
  } else {
    window.open(path, '_blank');
  }
}
