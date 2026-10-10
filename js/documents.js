/**
 * ============================================================================
 * Multi-Causal AI Career Framework — Document Management System
 * ============================================================================
 * Centralized Document Repository Configuration
 * 
 * To add, modify, or remove documents, edit the `documents` array below.
 * Each document entry has:
 *   - id: Unique identifier string
 *   - title: Document display title
 *   - description: Brief description of contents
 *   - file: Path to the PDF file inside the /documents/ folder
 *   - category: 'project' | 'research' | 'individual' | 'other'
 *   - type: File type (default: 'PDF')
 *   - size: (Optional) Pre-configured size. Auto-detected from server if available.
 *   - downloadName: (Optional) Filename when downloaded to device
 *   - keywords: Search keywords, aliases (e.g. 's1', 'd2', student IDs, authors)
 *   - available: Initial availability state. Auto-checked via HEAD request.
 */

const documents = [
  // --------------------------------------------------------------------------
  // 1. Project Documents
  // --------------------------------------------------------------------------
  {
    id: 'project-charter',
    title: 'Project Charter',
    description: 'Initial project charter establishing scope, objectives, stakeholder roles, and governance.',
    file: 'documents/project-charter.pdf',
    category: 'project',
    type: 'PDF',
    downloadName: 'Project-Charter.pdf',
    keywords: ['charter', 'project-charter', 'scope', 'governance', 'initiation'],
    available: false
  },
  {
    id: 'project-proposal',
    title: 'Proposal Document',
    description: 'Formal research proposal covering domain background, research gap, objectives, and methodology.',
    file: 'documents/project-proposal.pdf',
    category: 'project',
    type: 'PDF',
    downloadName: 'Project-Proposal.pdf',
    keywords: ['proposal', 'project-proposal', 'research-proposal', 'methodology', 'objectives'],
    available: false
  },
  {
    id: 'checklist-documents',
    title: 'Check List Documents',
    description: 'Assessment checklists and milestone compliance records submitted throughout the lifecycle.',
    file: 'documents/checklist-documents.pdf',
    category: 'project',
    type: 'PDF',
    downloadName: 'Checklist-Documents.pdf',
    keywords: ['checklist', 'checklists', 'checklist-documents', 'milestones', 'assessment'],
    available: false
  },

  // --------------------------------------------------------------------------
  // 2. Research Documents
  // --------------------------------------------------------------------------
  {
    id: 'final-report',
    title: 'Final Research Document',
    description: 'Complete final research report and comprehensive academic paper of the integrated framework.',
    file: 'documents/final-report.pdf',
    category: 'research',
    type: 'PDF',
    downloadName: 'Final-Research-Document.pdf',
    keywords: ['final', 'final report', 'final paper', 'research paper', 'final-report', 'integrated'],
    available: false
  },

  // --------------------------------------------------------------------------
  // 3. Individual Component Documents
  // --------------------------------------------------------------------------
  {
    id: 'component-01',
    title: 'Component 01: Interview Readiness Analysis',
    description: 'Explainable AI-Based Interview Readiness Analysis and Career Path Recommendation — IT22112446 – Kaluarachchi S.M.',
    file: 'documents/s1.pdf',
    category: 'individual',
    type: 'PDF',
    size: '2.73 MB',
    downloadName: 's1.pdf',
    keywords: ['s1', 's1.pdf', 'component 1', 'component 01', 'kaluarachchi', 'it22112446', 'interview', 'readiness', 'individual-component-1'],
    available: true
  },
  {
    id: 'component-02',
    title: 'Component 02: Behavior-Aware Impact',
    description: 'Behavior-Aware Career Impact Prediction System — IT22176110 – Daundasekara D.M.D.C.',
    file: 'documents/d2.pdf',
    category: 'individual',
    type: 'PDF',
    size: '1.04 MB',
    downloadName: 'd2.pdf',
    keywords: ['d2', 'd2.pdf', 's2', 's2.pdf', 'component 2', 'component 02', 'daundasekara', 'it22176110', 'behavior', 'impact', 'individual-component-2'],
    available: true
  },
  {
    id: 'component-03',
    title: 'Component 03: Career Safety & Stability',
    description: 'Career Safety and Industry Stability Analysis Using Machine Learning — IT22201614 – WICKRAMASINGHE T.B.B.',
    file: 'documents/t3.pdf',
    category: 'individual',
    type: 'PDF',
    size: '637 KB',
    downloadName: 't3.pdf',
    keywords: ['t3', 't3.pdf', 's3', 's3.pdf', 'component 3', 'component 03', 'wickramasinghe', 'thidas', 'it22201614', 'safety', 'stability', 'individual-component-3'],
    available: true
  },
  {
    id: 'component-04',
    title: 'Component 04: Employer Trust & Hiring Risk',
    description: 'AI-Assisted Employer Trust and Hiring Risk Assessment System — IT22546470 – MUAZ M.M.R.',
    file: 'documents/m4.pdf',
    category: 'individual',
    type: 'PDF',
    size: '15.77 MB',
    downloadName: 'm4.pdf',
    keywords: ['m4', 'm4.pdf', 's4', 's4.pdf', 'component 4', 'component 04', 'muaz', 'it22546470', 'trust', 'hiring', 'risk', 'individual-component-4'],
    available: true
  },

  // --------------------------------------------------------------------------
  // 4. Other Documents
  // --------------------------------------------------------------------------
  {
    id: 'other-materials',
    title: 'Other Documents & Supplementary Material',
    description: 'Supplementary research questionnaires, ethics approval documentation, evaluation rubrics, and data sheets.',
    file: 'documents/supplementary-materials.pdf',
    category: 'other',
    type: 'PDF',
    downloadName: 'Supplementary-Materials.pdf',
    keywords: ['other', 'supplementary', 'materials', 'ethics', 'questionnaires', 'instruments'],
    available: false
  }
];

// Document Categories Definition
const documentCategories = [
  {
    id: 'project',
    name: 'Project Documents',
    eyebrow: 'Project documents',
    title: 'Core framework documents',
    description: 'Governance charter, research proposals, checklists, and academic milestone documentation.'
  },
  {
    id: 'research',
    name: 'Research Documents',
    eyebrow: 'Research documents',
    title: 'Academic reports & publications',
    description: 'Comprehensive research deliverables, empirical findings, and unified framework papers.'
  },
  {
    id: 'individual',
    name: 'Individual Component Documents',
    eyebrow: 'Individual documents',
    title: 'Component research papers',
    description: 'Detailed individual academic research reports authored for components 01 through 04.'
  },
  {
    id: 'other',
    name: 'Other Documents',
    eyebrow: 'Other documents',
    title: 'Supplementary materials',
    description: 'Ethical review approval, survey questionnaires, evaluation rubrics, and datasets.'
  }
];

/**
 * Global Presentation Registry (Preserved for compatibility with presentations.html)
 */
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

// Active State for Filtering
let activeCategoryFilter = 'all';
let searchQuery = '';

/**
 * Format bytes to readable string (KB / MB)
 */
function formatBytes(bytes) {
  if (!bytes || isNaN(bytes)) return '';
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1048576) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / 1048576).toFixed(2)} MB`;
}

/**
 * Safely escape HTML strings
 */
function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/**
 * Generate HTML for a single document card
 */
function renderDocumentCard(doc) {
  const isAvailable = Boolean(doc.available);
  const sizeBadge = doc.size 
    ? `<span class="doc-size-badge" title="File size">${escapeHTML(doc.size)}</span>` 
    : '';

  const statusBadge = isAvailable
    ? `<span class="badge-status badge-status-available">
         <span class="badge-status-dot"></span>
         Available
       </span>`
    : `<span class="badge-status" title="Pending file upload to /documents/">
         <span class="badge-status-dot"></span>
         File unavailable
       </span>`;

  const downloadFilename = doc.downloadName || doc.file.split('/').pop() || 'document.pdf';

  // Action buttons: Use native <a> tags for available files so browser native PDF viewer and download work seamlessly
  const viewButtonHTML = isAvailable
    ? `<a href="${escapeHTML(doc.file)}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="btn btn-secondary text-xs px-3 py-1.5"
          aria-label="View ${escapeHTML(doc.title)} in new browser tab">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
           <circle cx="12" cy="12" r="3"/>
         </svg>
         <span>View PDF</span>
       </a>`
    : `<button type="button" 
               class="btn btn-secondary btn-disabled text-xs px-3 py-1.5" 
               disabled 
               aria-disabled="true"
               title="File unavailable">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
           <circle cx="12" cy="12" r="3"/>
         </svg>
         <span>View PDF</span>
       </button>`;

  const downloadButtonHTML = isAvailable
    ? `<a href="${escapeHTML(doc.file)}" 
          download="${escapeHTML(downloadFilename)}" 
          class="btn btn-outline text-xs px-3 py-1.5"
          aria-label="Download ${escapeHTML(doc.title)} to device">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
           <polyline points="7 10 12 15 17 10"/>
           <line x1="12" y1="15" x2="12" y2="3"/>
         </svg>
         <span>Download</span>
       </a>`
    : `<button type="button" 
               class="btn btn-outline btn-disabled text-xs px-3 py-1.5" 
               disabled 
               aria-disabled="true"
               title="File unavailable">
         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
           <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
           <polyline points="7 10 12 15 17 10"/>
           <line x1="12" y1="15" x2="12" y2="3"/>
         </svg>
         <span>Download</span>
       </button>`;

  return `
    <article class="card flex flex-col justify-between hover-lift reveal" id="doc-card-${escapeHTML(doc.id || '')}" style="display: flex; flex-direction: column; justify-content: space-between;">
      <div>
        <div class="flex items-center justify-between gap-3" style="display: flex; justify-content: space-between; align-items: center;">
          <div class="flex items-center gap-2" style="display: flex; align-items: center; gap: 0.5rem;">
            <!-- Document PDF Icon -->
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary" aria-hidden="true">
              <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
            </svg>
            <span class="badge-type">${escapeHTML(doc.type || 'PDF')}</span>
            ${sizeBadge}
          </div>
          ${statusBadge}
        </div>
        <h3 class="card-title text-lg font-medium mt-4">${escapeHTML(doc.title)}</h3>
        <p class="card-text text-sm text-muted-foreground mt-2">${escapeHTML(doc.description)}</p>
      </div>
      <div class="doc-card-actions">
        ${viewButtonHTML}
        ${downloadButtonHTML}
      </div>
    </article>
  `;
}

/**
 * Filter documents according to current search query and category filter
 */
function getFilteredDocuments() {
  const query = searchQuery.trim().toLowerCase();

  return documents.filter((doc) => {
    // Category match
    const categoryMatch = (activeCategoryFilter === 'all') || (doc.category === activeCategoryFilter);
    if (!categoryMatch) return false;

    // Search query match (in title, description, file, id, or keywords)
    if (query) {
      const matchTitle = doc.title && doc.title.toLowerCase().includes(query);
      const matchDesc = doc.description && doc.description.toLowerCase().includes(query);
      const matchFile = doc.file && doc.file.toLowerCase().includes(query);
      const matchId = doc.id && doc.id.toLowerCase().includes(query);
      const matchKeywords = Array.isArray(doc.keywords) && doc.keywords.some((k) => k.toLowerCase().includes(query));
      return matchTitle || matchDesc || matchFile || matchId || matchKeywords;
    }

    return true;
  });
}

/**
 * Render all document categories and their matching cards into the DOM
 */
function renderDocumentsView() {
  const categoriesRoot = document.getElementById('documents-categories-root');
  const countBadge = document.getElementById('doc-results-count');
  const emptyGlobalNotice = document.getElementById('docs-empty-state');

  if (!categoriesRoot) return;

  const filtered = getFilteredDocuments();
  const totalCount = documents.length;

  // Update counter text
  if (countBadge) {
    if (activeCategoryFilter === 'all' && !searchQuery.trim()) {
      countBadge.textContent = `Showing all ${totalCount} documents`;
    } else {
      countBadge.textContent = `Showing ${filtered.length} of ${totalCount} documents`;
    }
  }

  // Handle zero results across entire repo
  if (filtered.length === 0) {
    categoriesRoot.innerHTML = '';
    if (emptyGlobalNotice) emptyGlobalNotice.style.display = 'block';
    return;
  }

  if (emptyGlobalNotice) emptyGlobalNotice.style.display = 'none';

  // Determine which categories should be displayed
  const visibleCategories = documentCategories.filter((cat) => {
    if (activeCategoryFilter !== 'all' && activeCategoryFilter !== cat.id) {
      return false;
    }
    return true;
  });

  let fullHTML = '';

  visibleCategories.forEach((cat, index) => {
    const catDocs = filtered.filter((d) => d.category === cat.id);
    const isAlternateBg = index % 2 === 1;

    let contentHTML = '';

    if (catDocs.length === 0) {
      // If there are literally no documents configured or matched for this category
      contentHTML = `
        <div class="empty-category-box">
          <p>No documents available yet.</p>
        </div>
      `;
    } else {
      contentHTML = catDocs.map(renderDocumentCard).join('');
    }

    const sectionHTML = `
      <section class="section-wrapper ${isAlternateBg ? 'bg-secondary-section' : ''}" id="cat-section-${cat.id}" style="${isAlternateBg ? 'border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);' : ''}">
        <p class="section-eyebrow">${escapeHTML(cat.eyebrow)}</p>
        <h2 class="section-title">${escapeHTML(cat.title)}</h2>
        <p class="section-desc" style="margin-top: -1.25rem; margin-bottom: 2rem;">${escapeHTML(cat.description)}</p>
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3" id="cat-grid-${cat.id}">
          ${contentHTML}
        </div>
      </section>
    `;

    fullHTML += sectionHTML;
  });

  categoriesRoot.innerHTML = fullHTML;
}

/**
 * Asynchronously probe server for actual file presence and content length
 * Automatically updates card without full page refresh when files are uploaded to /documents/
 */
async function checkServerFilesAvailability() {
  if (typeof window === 'undefined' || !window.fetch) return;

  // Only run network probes when served over HTTP/HTTPS
  const isHttp = window.location.protocol.startsWith('http');
  if (!isHttp) return;

  let hasUpdates = false;

  const checks = documents.map(async (doc) => {
    try {
      const response = await fetch(doc.file, { method: 'HEAD' });
      if (response.ok) {
        if (!doc.available) {
          doc.available = true;
          hasUpdates = true;
        }
        const len = response.headers.get('content-length');
        if (len && (!doc.size || doc.size.includes('pending'))) {
          const formatted = formatBytes(parseInt(len, 10));
          if (formatted && formatted !== doc.size) {
            doc.size = formatted;
            hasUpdates = true;
          }
        }
      } else if (response.status === 404) {
        if (doc.available) {
          doc.available = false;
          hasUpdates = true;
        }
      }
    } catch (e) {
      // In case of network error, do not modify fallback status
    }
  });

  await Promise.all(checks);

  if (hasUpdates) {
    renderDocumentsView();
  }
}

/**
 * Initialize search input and category filter buttons
 */
function initDocumentFilters() {
  const searchInput = document.getElementById('doc-search-input');
  const filterBtns = document.querySelectorAll('.docs-filter-btn');
  const resetBtn = document.getElementById('reset-filter-btn');

  // Search input event with instant response
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderDocumentsView();
    });
  }

  // Category filter button events
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetCat = btn.getAttribute('data-filter') || 'all';
      activeCategoryFilter = targetCat;

      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      renderDocumentsView();
    });
  });

  // Global reset button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      activeCategoryFilter = 'all';
      searchQuery = '';
      if (searchInput) searchInput.value = '';
      filterBtns.forEach((b) => {
        if (b.getAttribute('data-filter') === 'all') {
          b.classList.add('active');
          b.setAttribute('aria-selected', 'true');
        } else {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        }
      });
      renderDocumentsView();
    });
  }
}

/**
 * Compatibility handler for older pages or modal requests (e.g., presentations.html)
 */
function handleDocAction(title, path, desc, actionType) {
  if (!path) return;

  if (actionType === 'Download') {
    const a = document.createElement('a');
    a.href = path;
    a.download = path.split('/').pop() || 'document.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } else {
    window.open(path, '_blank');
  }
}

// Global functions attached to window for direct console access
if (typeof window !== 'undefined') {
  window.documents = documents;
  window.documentCategories = documentCategories;
  window.renderDocumentsView = renderDocumentsView;
  window.renderDocumentCard = renderDocumentCard;
  window.getFilteredDocuments = getFilteredDocuments;
  window.checkServerFilesAvailability = checkServerFilesAvailability;
  window.handleDocAction = handleDocAction;
}

// Immediate initial execution and DOMContentLoaded handler
function bootstrapDocuments() {
  if (document.getElementById('documents-categories-root')) {
    initDocumentFilters();
    renderDocumentsView();
    checkServerFilesAvailability();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapDocuments);
} else {
  // If already loaded or injected, execute immediately
  bootstrapDocuments();
}
