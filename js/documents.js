/**
 * ============================================================================
 * Multi-Causal AI Career Framework — Document Management System
 * ============================================================================
 * Centralized Google Drive Hosted Document Repository Configuration
 * 
 * Each document entry has:
 *   - id: Unique identifier string
 *   - title: Document display title
 *   - description: Brief description of contents
 *   - driveId: Google Drive public file ID
 *   - viewUrl: Google Drive view URL (opens in new tab)
 *   - downloadUrl: Direct Google Drive download URL
 *   - category: 'individual' | 'project'
 *   - type: File type ('PDF')
 *   - keywords: Search keywords, aliases (e.g. 's1', 'd2', student IDs, authors)
 */

const documents = [
  {
    id: 'component-01',
    title: 'Component 01 — Interview Readiness Analysis',
    description: 'Explainable AI-Based Interview Readiness Analysis and Career Path Recommendation — IT22112446 – Kaluarachchi S.M.',
    driveId: '1KKwjB4hdMnj3UJKPFsBSC8vesyOlg95x',
    viewUrl: 'https://drive.google.com/file/d/1KKwjB4hdMnj3UJKPFsBSC8vesyOlg95x/view',
    category: 'individual',
    type: 'PDF',
    keywords: ['s1', 'component 1', 'component 01', 'kaluarachchi', 'it22112446', 'interview', 'readiness']
  },
  {
    id: 'component-02',
    title: 'Component 02 — Behavior-Aware Impact',
    description: 'Behavior-Aware Career Impact Prediction System — IT22176110 – Daundasekara D.M.D.C.',
    driveId: '1mxLHp1POVdl2dX2FpVwXN01NJPM0ma2N',
    viewUrl: 'https://drive.google.com/file/d/1mxLHp1POVdl2dX2FpVwXN01NJPM0ma2N/view',
    category: 'individual',
    type: 'PDF',
    keywords: ['d2', 'component 2', 'component 02', 'daundasekara', 'it22176110', 'behavior', 'impact']
  },
  {
    id: 'component-03',
    title: 'Component 03 — Career Safety & Stability',
    description: 'Career Safety and Industry Stability Analysis Using Machine Learning — IT22201614 – WICKRAMASINGHE T.B.B.',
    driveId: '118UE2zSwqSWNhy-sqPjv1NNu7YapdKnh',
    viewUrl: 'https://drive.google.com/file/d/118UE2zSwqSWNhy-sqPjv1NNu7YapdKnh/view',
    category: 'individual',
    type: 'PDF',
    keywords: ['t3', 'component 3', 'component 03', 'wickramasinghe', 'thidas', 'it22201614', 'safety', 'stability']
  },
  {
    id: 'component-04',
    title: 'Component 04 — Employer Trust & Hiring Risk',
    description: 'AI-Assisted Employer Trust and Hiring Risk Assessment System — IT22546470 – MUAZ M.M.R.',
    driveId: '16ZsN6f0yWgFRMcyTas9qbUpTFPs17TYB',
    viewUrl: 'https://drive.google.com/file/d/16ZsN6f0yWgFRMcyTas9qbUpTFPs17TYB/view',
    category: 'individual',
    type: 'PDF',
    keywords: ['m4', 'component 4', 'component 04', 'muaz', 'it22546470', 'trust', 'hiring', 'risk']
  },
  {
    id: 'thesis-draft-component-01',
    title: 'Thesis draft Component 01 — Interview Readiness Analysis',
    description: 'Thesis draft for Component 01 — Interview Readiness Analysis.',
    driveId: '1alMBVsPZs6t5ZKkY2DzpLNBTxUoSAPZu',
    viewUrl: 'https://drive.google.com/file/d/1alMBVsPZs6t5ZKkY2DzpLNBTxUoSAPZu/view?usp=sharing',
    category: 'thesis',
    type: 'PDF',
    keywords: ['thesis', 'draft', 's1', 'component 1', 'component 01', 'interview', 'readiness']
  },
  {
    id: 'thesis-draft-component-02',
    title: 'Thesis draft Component 02 — Behavior-Aware Impact',
    description: 'Thesis draft for Component 02 — Behavior-Aware Impact.',
    driveId: '13XLXYj4TMBvT1cqf0xYAiHQdvns1ra3D',
    viewUrl: 'https://drive.google.com/file/d/13XLXYj4TMBvT1cqf0xYAiHQdvns1ra3D/view?usp=sharing',
    category: 'thesis',
    type: 'PDF',
    keywords: ['thesis', 'draft', 'd2', 'component 2', 'component 02', 'behavior', 'impact']
  },
  {
    id: 'thesis-draft-component-03',
    title: 'Thesis draft Component 03 — Career Safety & Stability',
    description: 'Thesis draft for Component 03 — Career Safety & Stability.',
    driveId: '1LWPddpvMJJzLGpEXhubE5Sp8TZbEVDKl',
    viewUrl: 'https://drive.google.com/file/d/1LWPddpvMJJzLGpEXhubE5Sp8TZbEVDKl/view?usp=sharing',
    category: 'thesis',
    type: 'PDF',
    keywords: ['thesis', 'draft', 't3', 'component 3', 'component 03', 'safety', 'stability']
  },
  {
    id: 'thesis-draft-component-04',
    title: 'Thesis draft Component 04 — Employer Trust & Hiring Risk',
    description: 'Thesis draft for Component 04 — Employer Trust & Hiring Risk.',
    driveId: '146hda7cHsqI5m3Z-U4jz-B-6EiV0X1Xx',
    viewUrl: 'https://drive.google.com/file/d/146hda7cHsqI5m3Z-U4jz-B-6EiV0X1Xx/view?usp=sharing',
    category: 'thesis',
    type: 'PDF',
    keywords: ['thesis', 'draft', 'm4', 'component 4', 'component 04', 'trust', 'hiring', 'risk']
  }
];

// Document Categories Definition
const documentCategories = [
  {
    id: 'individual',
    name: 'Individual Component Documents',
    eyebrow: 'Individual documents',
    title: 'Component research papers',
    description: 'Detailed individual academic research reports authored for components 01 through 04.'
  },
  {
    id: 'thesis',
    name: 'Thesis Drafts',
    eyebrow: 'Thesis drafts',
    title: 'Component thesis drafts',
    description: 'Thesis draft documents for components 01 through 04.'
  }
];

/**
 * Global Presentation Registry (Preserved for compatibility with presentations.html)
 */
const presentationsList = [
  {
    title: 'Proposal Presentation',
    desc: 'Slides presenting the research problem, gap, objectives and proposed methodology.',
    type: 'Slides',
    url: 'https://docs.google.com/presentation/d/17pQ_WV_Iwqe9j2kNLEP-o6_9rb5w3eZY/edit?usp=drive_link&ouid=115225098652275789562&rtpof=true&sd=true',
    available: true
  },
  {
    title: 'Progress Presentation-1',
    desc: 'Slides from the first progress review covering early implementation and research findings.',
    type: 'Slides',
    url: 'https://docs.google.com/presentation/d/17pQ_WV_Iwqe9j2kNLEP-o6_9rb5w3eZY/edit?usp=drive_link&ouid=115225098652275789562&rtpof=true&sd=true',
    available: true
  },
  {
    title: 'Progress Presentation-2',
    desc: 'Slides from the second progress review demonstrating substantial system completion and evaluation.',
    type: 'Slides',
    url: 'https://docs.google.com/presentation/d/1q_RkbzSYKltw0K-32B2oI0jJmVSWUAqU/edit?usp=drive_link&ouid=115225098652275789562&rtpof=true&sd=true',
    available: true
  },
  {
    title: 'Research Paper',
    desc: 'Comprehensive academic research paper detailing the framework, methodology, experimental results, and domain findings.',
    type: 'Paper',
    url: 'https://drive.google.com/file/d/1HIvBwy0XTsyMYHUFFnY5K3jpOOSmf92n/view?usp=drive_link',
    available: true
  }
];

// Active State for Filtering
let activeCategoryFilter = 'all';
let searchQuery = '';

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
          </div>
        </div>
        <h3 class="card-title text-lg font-medium mt-4">${escapeHTML(doc.title)}</h3>
        <p class="card-text text-sm text-muted-foreground mt-2">${escapeHTML(doc.description)}</p>
      </div>
      <div class="doc-card-actions">
        <a href="${escapeHTML(doc.viewUrl)}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn btn-secondary text-xs px-3 py-1.5"
           aria-label="View ${escapeHTML(doc.title)} in Google Drive">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
          <span>View Document</span>
        </a>
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

    // Search query match (in title, description, id, driveId, or keywords)
    if (query) {
      const matchTitle = doc.title && doc.title.toLowerCase().includes(query);
      const matchDesc = doc.description && doc.description.toLowerCase().includes(query);
      const matchId = doc.id && doc.id.toLowerCase().includes(query);
      const matchDriveId = doc.driveId && doc.driveId.toLowerCase().includes(query);
      const matchKeywords = Array.isArray(doc.keywords) && doc.keywords.some((k) => k.toLowerCase().includes(query));
      return matchTitle || matchDesc || matchId || matchDriveId || matchKeywords;
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
  if (typeof window !== 'undefined' && typeof window.openDocModal === 'function') {
    window.openDocModal(title, path, desc, actionType);
    return;
  }
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
  window.handleDocAction = handleDocAction;
}

// Immediate initial execution and DOMContentLoaded handler
function bootstrapDocuments() {
  if (document.getElementById('documents-categories-root')) {
    initDocumentFilters();
    renderDocumentsView();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootstrapDocuments);
} else {
  // If already loaded or injected, execute immediately
  bootstrapDocuments();
}
