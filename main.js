const projects = [
  {
    slug: 'tradeflow',
    n: '01',
    label: 'BUSINESS OPERATIONS',
    title: 'TradeFlow',
    copy: 'Business operations software shaped by live SME deployments, including businesses that need operational visibility without a conventional POS workflow.',
    evidence: 'Production deployments · workflow adaptations · Android compatibility · production fixes',
    accent: 'green',
  },
  {
    slug: 'ntheemba',
    n: '02',
    label: 'CONVERSATIONAL INFRASTRUCTURE',
    title: 'NTheemba',
    copy: 'Conversational infrastructure for routing business requests to the correct capability while authoritative systems retain ownership of operational data.',
    evidence: 'FastAPI · PostgreSQL registry · Redis runtime · ports/adapters · tested workflows',
    accent: 'green',
  },
  {
    slug: 'ncpc',
    n: '03',
    label: 'CATALOGUE INFRASTRUCTURE',
    title: 'NCPC',
    copy: 'A shared product-identity layer for resolving inconsistent names, barcodes, variants and aliases into stable canonical references.',
    evidence: 'Canonical identity · barcode mappings · aliases · catalogue tooling',
    accent: 'gold',
  },
];

const caseContent = {
  tradeflow: {
    n: '01',
    label: 'BUSINESS OPERATIONS',
    title: 'TradeFlow',
    desc: 'Business-management software shaped by actual small-business workflows, including businesses that do not want every sale captured through a conventional POS.',
    status: 'Deployed · public details limited',
    role: 'Product + engineering + onboarding',
    stack: 'JavaScript · Apps Script · Sheets · APIs',
    evidenceStatus: 'AVAILABLE · PRIVATE MATERIAL PENDING',
    evidenceItems: [
      ['Technical evidence', 'AVAILABLE', 'The public Standard TradeFlow copy includes the setup gate, API contracts and focused tests.', 'https://github.com/OddJei/TradeFlow-Standard-App/blob/3138b2af7b01359af0aaa5ce0ae856a8608597d7/appscript/tests/first-time-setup-preflight.test.mjs'],
      ['Architecture', 'AVAILABLE', 'The public source shows the Apps Script, business-data and NCPC mapping boundaries.', 'https://github.com/OddJei/TradeFlow-Standard-App/blob/3138b2af7b01359af0aaa5ce0ae856a8608597d7/appscript/code.gs'],
      ['Client reviews', 'PRIVATE', 'Owner and staff reviews are being collected and will be added after review and permission.'],
      ['Real-world photos', 'COMING SHORTLY', 'Permissioned shop and usage photos will be added as they are prepared for public viewing.'],
      ['Source / GitHub', 'AVAILABLE', 'Selected implementation and architecture evidence is available in the public Standard TradeFlow repository.', 'https://github.com/OddJei/TradeFlow-Standard-App/commit/3138b2af7b01359af0aaa5ce0ae856a8608597d7'],
    ],
    sections: [
      ['01', 'CONTEXT', 'Operational visibility did not require one universal workflow.', 'Early versions assumed that detailed transaction capture would be central to business visibility. Client use showed that some businesses required stock, revenue and expense visibility without changing existing sales routines.'],
      ['02', 'ENGINEERING PROBLEM', 'Different business models required different workflows.', 'POS was therefore treated as one capability within the system rather than the definition of TradeFlow. The architecture had to support multiple operating models while preserving consistent data handling, configuration and reporting.'],
      ['03', 'PRODUCTION REALITY', 'Production use exposed assumptions that prototype testing did not.', 'Older Android devices exposed compatibility assumptions, while restocking and physical-count workflows revealed persistence, state-management and synchronization edge cases. These findings influenced implementation changes and testing priorities, including multi-device behavior.'],
      ['04', 'REFLECTION', 'Engineering lessons.', 'Subsequent work placed greater emphasis on workflow-level testing, configuration standardization and onboarding as part of the product rather than as a separate operational activity.'],
    ],
  },
  ntheemba: {
    n: '02',
    label: 'CONVERSATIONAL INFRASTRUCTURE',
    title: 'NTheemba',
    desc: 'A capability-oriented WhatsApp assistant that interprets requests, routes them to authoritative systems and keeps tenant configuration durable.',
    status: 'Under development · core runtime built',
    role: 'Backend architecture + implementation',
    stack: 'Python 3.12 · FastAPI · PostgreSQL · Redis',
    evidenceStatus: 'AVAILABLE · LIVE GATEWAY UNDER DEVELOPMENT',
    evidenceItems: [
      ['Technical evidence', 'AVAILABLE', 'The public copy contains the FastAPI runtime, inbound worker and focused test suite.', 'https://github.com/OddJei/NTheemba/tree/91f1a1de968f217abd719176139cbd6dead98100/bot/tests'],
      ['Architecture', 'AVAILABLE', 'The public source commit exposes the runtime entry point, worker and adapter boundaries.', 'https://github.com/OddJei/NTheemba/blob/91f1a1de968f217abd719176139cbd6dead98100/bot/ntheemba/main.py'],
      ['Runtime / session evidence', 'AVAILABLE', 'The repository documents durable configuration, runtime coordination and capability workflows; this is local/source evidence, not live WhatsApp proof.', 'https://github.com/OddJei/NTheemba/blob/91f1a1de968f217abd719176139cbd6dead98100/bot/ntheemba/inbound_worker.py'],
      ['Gateway / WAHA integration', 'UNDER DEVELOPMENT', 'Gateway materials remain integration work; live WhatsApp activation is not claimed.'],
      ['Source / GitHub', 'AVAILABLE', 'Selected implementation and architecture evidence is available in the public NTheemba repository.', 'https://github.com/OddJei/NTheemba/commit/91f1a1de968f217abd719176139cbd6dead98100'],
    ],
    sections: [
      ['01', 'PROBLEM', 'The engineering challenge extends beyond generating conversational responses.', 'A business assistant must identify the correct business, understand available capabilities, manage session state, tolerate retries and duplicate messages, and obtain business facts from authoritative systems.'],
      ['02', 'ARCHITECTURE', 'Conversation is treated as orchestration rather than authority.', 'NTheemba interprets requests and routes them to the appropriate capability, while systems such as TradeFlow and NCPC retain ownership of the data they are responsible for.'],
      ['03', 'KEY DECISIONS', 'Durable configuration and runtime state are separated.', 'PostgreSQL stores tenant and capability configuration that must persist across restarts. Redis is used for short-lived session, cache and coordination state; it is not the source of tenant truth.'],
      ['04', 'CURRENT IMPLEMENTATION STATUS', 'Core foundations are implemented while the messaging edge remains under development.', 'Core workflow, registry, PostgreSQL and Redis foundations are implemented. Live WAHA gateway integration and the final end-to-end messaging path remain under active development.'],
      ['05', 'CRITICAL PATH', 'The current flow routes each request to the system responsible for that data or action.', 'Inbound message → worker process → NCPC resolve → TradeFlow truth → outbound reply.'],
      ['06', 'REFLECTION', 'Reliability requirements are part of the product.', 'Duplicate messages, retries, timeouts and restarts are treated as normal operating conditions that the implementation must handle explicitly.'],
    ],
  },
  ncpc: {
    n: '03',
    label: 'CATALOGUE INFRASTRUCTURE',
    title: 'NCPC',
    desc: 'A canonical product catalogue for resolving barcodes, aliases, variants and imperfect human descriptions without owning business-specific stock or price.',
    status: 'Under development · catalogue tooling works',
    role: 'Data model + APIs + contracts',
    stack: 'JavaScript · catalogue JSON · API contracts',
    evidenceStatus: 'AVAILABLE · UI EVIDENCE IN PROGRESS',
    evidenceItems: [
      ['Technical evidence', 'AVAILABLE', 'The public copy contains the identity model, API contracts and workflow tests.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/blob/dae04f65295dccc7ec89a094a9ba7e249cde7fc2/service/src/ncpc_service/models.py'],
      ['Architecture', 'AVAILABLE', 'The public source shows identity, variant, alias, barcode and review/publication boundaries.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/blob/dae04f65295dccc7ec89a094a9ba7e249cde7fc2/service/src/ncpc_service/api.py'],
      ['Review / workflow tests', 'AVAILABLE', 'The workflow tests provide source-level evidence for controlled catalogue operations.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/blob/dae04f65295dccc7ec89a094a9ba7e249cde7fc2/service/tests/test_workflow.py'],
      ['Catalogue / admin UI', 'IN PROGRESS', 'Catalogue UI screenshots and additional workflow evidence will be added as they are prepared for public viewing.'],
      ['Source / GitHub', 'AVAILABLE', 'Selected implementation and architecture evidence is available in the public NCPC repository.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/commit/dae04f65295dccc7ec89a094a9ba7e249cde7fc2'],
    ],
    sections: [
      ['01', 'PROBLEM', 'Products have one identity. People describe them many ways.', 'Product onboarding repeatedly exposed inconsistent descriptions of the same item across cashier input, supplier lists, barcodes, aliases and misspellings. Repeating this identity work for every business created unnecessary catalogue-cleaning effort.'],
      ['02', 'AUTHORITY BOUNDARY', 'Product identity was separated from inventory.', 'NCPC was scoped to own canonical product identity, variants, barcodes and aliases. Business-specific facts such as stock, selling price and availability remain in TradeFlow.'],
      ['03', 'RESOLUTION MODEL', 'Different descriptions resolve toward a stable product reference.', 'Barcode matches, exact variants, known aliases and imperfect descriptions feed into candidate resolution before a stable product and variant identity is returned.'],
      ['04', 'WHY IT MATTERS', 'Catalogue work can become reusable.', 'Once a product mapping has been identified and reviewed, that work can potentially be reused during future onboarding instead of repeating catalogue cleanup for every business. This remains a hypothesis to validate as the catalogue and deployment base grow.'],
      ['05', 'REFLECTION', 'Keeping the scope narrow improved ownership.', 'Adding stock or price to NCPC would duplicate business-specific truth and increase the risk of stale data. Keeping the service focused on identity preserves clearer boundaries between systems.'],
    ],
  },
};

const root = document.getElementById('app');

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;',
  }[character]));
}

function nav() {
  return `
    <header class="nav">
      <a class="brand" href="/">JAMES CHISULO</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="portfolio-nav">MENU</button>
      <nav class="nav-links" id="portfolio-nav">
        <a href="/#work">WORK</a>
        <a href="/#about">ABOUT</a>
        <a href="/#nds">NDS</a>
        <a href="/#contact" data-open-contact>CONTACT</a>
      </nav>
    </header>
  `;
}

function sectionLabel(n, label) {
  return `<div class="section-label"><span>${n}</span><span>${label}</span></div>`;
}

function button(href, text, secondary = false, external = false) {
  const externalAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
  return `<a class="btn${secondary ? ' secondary' : ''}" href="${href}"${externalAttrs}>${text}</a>`;
}

function placeholderButton(text, topic, secondary = true) {
  return `<button class="btn${secondary ? ' secondary' : ''} evidence-trigger" type="button" data-evidence-topic="${topic}">${text}</button>`;
}

function contactTrigger(text = 'Contact James', secondary = false) {
  return `<button class="btn${secondary ? ' secondary' : ''} contact-trigger" type="button" data-open-contact>${text}</button>`;
}

function dot(gold = false) {
  return `<span class="dot${gold ? ' gold' : ''}"></span>`;
}

function evidenceSection(data) {
  return `
    <section class="case-evidence" id="evidence">
      ${sectionLabel('E', 'EVIDENCE')}
      <div class="case-evidence-head">
        <div>
        <h2>Technical evidence, with context.</h2>
          <p>Technical and implementation evidence is published where appropriate. Client reviews, real-world photos and additional deployment evidence will be added as they are prepared for public viewing.</p>
        </div>
        <span class="evidence-state">${data.evidenceStatus}</span>
      </div>
      <div class="evidence-grid">
        ${data.evidenceItems.map(([title, status, copy, href]) => `
          <article class="evidence-card">
            <div class="evidence-card-top">
              <h3>${title}</h3>
              <span class="evidence-badge ${status === 'PRIVATE' ? 'private' : status === 'PENDING' ? 'pending' : ''}">${status}</span>
            </div>
            <p>${copy}</p>
            ${href ? button(href, title === 'Architecture' ? 'View architecture' : title.includes('Test') ? 'View tests' : title.includes('Source') ? 'View source evidence' : 'View technical evidence', true, true) : placeholderButton('View evidence', `${data.title} — ${title}`)}
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function evidenceModal() {
  return `
    <div class="evidence-modal" id="evidence-modal" aria-hidden="true">
      <div class="evidence-modal-backdrop" data-close-evidence></div>
        <section class="evidence-modal-panel" role="dialog" aria-modal="true" aria-labelledby="evidence-modal-title" aria-describedby="evidence-modal-copy">
        <button class="evidence-modal-close" type="button" aria-label="Close" data-close-evidence>×</button>
        <div class="eyebrow">EVIDENCE</div>
        <h3 id="evidence-modal-title">Additional evidence is in progress.</h3>
        <p id="evidence-modal-copy">This material will be added as it is reviewed and prepared for public viewing. The portfolio does not imply client, deployment, payment or live-channel proof where it is not available.</p>
        <button class="btn" type="button" data-close-evidence>Close</button>
      </section>
    </div>
  `;
}

function contactModal() {
  const whatsappMessage = encodeURIComponent('Hi James, I found your portfolio and would like to connect.');
  return `
    <div class="contact-modal" id="contact-modal" aria-hidden="true">
      <div class="contact-modal-backdrop" data-close-contact></div>
      <section class="contact-card" role="dialog" aria-modal="true" aria-labelledby="contact-card-title" aria-describedby="contact-card-copy">
        <button class="evidence-modal-close" type="button" aria-label="Close contact card" data-close-contact>×</button>
        <div class="chip">CONTACT CARD</div>
        <p class="contact-card-kicker">JAMES CHISULO</p>
        <h3 id="contact-card-title">Software Engineer · Product Builder</h3>
        <p id="contact-card-copy" class="contact-card-copy">Engineering, product work, collaboration and opportunities.</p>
        <div class="contact-links">
          <a href="mailto:jchisulokt@gmail.com" class="contact-link"><span class="contact-link-icon" aria-hidden="true">@</span><span><strong>Email</strong><small>jchisulokt@gmail.com</small></span><span aria-hidden="true">↗</span></a>
          <a href="https://wa.me/260961086845?text=${whatsappMessage}" class="contact-link" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon" aria-hidden="true">WA</span><span><strong>WhatsApp</strong><small>+260 961 086845</small></span><span aria-hidden="true">↗</span></a>
          <a href="https://www.linkedin.com/in/james-chisulo-kt-7b1831239/" class="contact-link" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon" aria-hidden="true">in</span><span><strong>LinkedIn</strong><small>James Chisulo</small></span><span aria-hidden="true">↗</span></a>
          <a href="https://github.com/OddJei" class="contact-link" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon" aria-hidden="true">&lt;/&gt;</span><span><strong>GitHub</strong><small>github.com/OddJei</small></span><span aria-hidden="true">↗</span></a>
          <a href="https://www.facebook.com/profile.php?id=100007241835936" class="contact-link" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon" aria-hidden="true">f</span><span><strong>Facebook</strong><small>James Chisulo</small></span><span aria-hidden="true">↗</span></a>
          <a href="/assets/James_Chisulo_Master_CV.pdf" class="contact-link contact-link-resume" target="_blank" rel="noopener noreferrer"><span class="contact-link-icon" aria-hidden="true">CV</span><span><strong>Master résumé</strong><small>Open James_Chisulo_Master_CV.pdf</small></span><span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </div>
  `;
}

function bindEvidenceActions() {
  const modal = document.getElementById('evidence-modal');
  if (!modal) return;

  const title = document.getElementById('evidence-modal-title');
  const copy = document.getElementById('evidence-modal-copy');
  let returnFocus = null;
  const focusableSelector = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';
  const openModal = topic => {
    returnFocus = document.activeElement;
    title.textContent = `${topic} — will be updated shortly.`;
    copy.textContent = 'This material is not yet available for public viewing. It will be added as reviews, photos and additional evidence are prepared and approved.';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.evidence-modal-close')?.focus();
  };
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (returnFocus instanceof HTMLElement && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  };

  document.querySelectorAll('.evidence-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => openModal(trigger.dataset.evidenceTopic || 'Evidence'));
  });
  modal.querySelectorAll('[data-close-evidence]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key === 'Tab') {
      const focusable = [...modal.querySelectorAll(focusableSelector)];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function bindContactActions() {
  const modal = document.getElementById('contact-modal');
  if (!modal) return;
  let returnFocus = null;
  const focusableSelector = 'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';
  const openModal = () => {
    returnFocus = document.activeElement;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.evidence-modal-close')?.focus();
  };
  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (returnFocus instanceof HTMLElement && document.contains(returnFocus)) returnFocus.focus();
    returnFocus = null;
  };
  document.querySelectorAll('[data-open-contact]').forEach(trigger => trigger.addEventListener('click', event => {
    if (trigger.tagName === 'A') event.preventDefault();
    openModal();
  }));
  modal.querySelectorAll('[data-close-contact]').forEach(el => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', event => {
    if (!modal.classList.contains('open')) return;
    if (event.key === 'Escape') {
      closeModal();
      return;
    }
    if (event.key === 'Tab') {
      const focusable = [...modal.querySelectorAll(focusableSelector)];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
}

function bindNavigation() {
  const nav = document.querySelector('.nav');
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (!nav || !toggle || !links) return;
  const close = () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };
  toggle.addEventListener('click', () => {
    const open = !links.classList.contains('open');
    links.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('click', event => {
    if (!nav.contains(event.target)) close();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
}

function profileCard() {
  return `
    <article class="profile-card">
      <div class="profile-frame">
        <img src="/assets/james-profile.webp" alt="Portrait of James Chisulo" class="profile-image" />
      </div>
      <div class="profile-meta">
        <div>
          <div class="eyebrow">PROFILE</div>
          <h3>James Chisulo</h3>
        </div>
        <p>Software engineer and product builder focused on practical systems, real deployments, and software that survives production reality.</p>
      </div>
    </article>
  `;
}

function systemPanel() {
  return `
    <aside class="system-panel">
      <div class="eyebrow">SYSTEMS, NOT DEMOS</div>
      <h3>Three connected products.<br />Different responsibilities.</h3>
      <div class="system-row">
        <div>
          <div class="row-title">${dot()}NTheemba</div>
          <small>conversation + routing</small>
        </div>
        <b>CORE BUILT</b>
      </div>
      <div class="system-row">
        <div>
          <div class="row-title">${dot(true)}NCPC</div>
          <small>canonical product identity</small>
        </div>
        <b class="gold-text">UNDER DEV</b>
      </div>
      <div class="system-row">
        <div>
          <div class="row-title">${dot()}TradeFlow</div>
          <small>business operations + truth</small>
        </div>
        <b>DEPLOYED</b>
      </div>
    </aside>
  `;
}

function diagram(type) {
  if (type === 'tradeflow') {
    return `
      <div class="diagram">
        <div class="diagram-title">REAL WORKFLOW → SYSTEM MODEL</div>
        <div class="workflow">
          <div>
            <span>STOCK RECEIVED</span>
            <i></i>
            <span>DAY SALES / REVENUE</span>
            <i></i>
            <span>EXPENSES</span>
            <i></i>
            <span>OWNER VISIBILITY</span>
          </div>
          <div class="insights">
            <section>
              <strong>REAL USERS</strong>
              <small>Production reality</small>
              <em></em>
            </section>
            <section>
              <strong>WORKFLOW &gt; FEATURES</strong>
              <small>Core lesson</small>
              <em class="goldbar"></em>
            </section>
          </div>
        </div>
      </div>
    `;
  }

  if (type === 'ntheemba') {
    return `
      <div class="diagram">
        <div class="diagram-title">MESSAGE → CAPABILITY → AUTHORITY</div>
        <div class="pipeline">
          <span>WhatsApp</span><i></i><span>NTheemba</span><i></i><span>Capability</span><i></i><span>System</span>
        </div>
        <p>Core runtime built; live gateway + HTTP adapters remain the integration edge.</p>
      </div>
    `;
  }

  return `
    <div class="diagram">
      <div class="diagram-title gold-text">INCONSISTENT INPUT → CANONICAL IDENTITY</div>
      <div class="alias-grid">
        <div>
          <span>coke 500</span>
          <span>coca cola 500ml</span>
          <span>barcode 544…</span>
          <span>supplier alias</span>
        </div>
        <i></i>
        <section>PRODUCT → VARIANT<br />BARCODE → ALIAS</section>
      </div>
    </div>
  `;
}

function projectCard(project) {
  return `
    <a href="/work/${project.slug}" class="project-card">
      <div class="project-copy">
        <div class="mini-label">
          <span class="${project.accent === 'gold' ? 'gold-text' : ''}">${project.n}</span>
          <span>${project.label}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.copy}</p>
        <div class="evidence ${project.accent === 'gold' ? 'gold-text' : ''}">EVIDENCE</div>
        <small>${project.evidence}</small>
      </div>
      ${diagram(project.slug)}
    </a>
  `;
}

function homePage() {
  return `
    <div class="app">
      <div class="page">
        ${nav()}
        <main>
          <section class="hero">
            <div class="hero-copy">
              <div class="chip">SOFTWARE ENGINEER · PRODUCT BUILDER</div>
              <h1>I build systems that have to work in the real world.</h1>
              <p class="stack">Python · FastAPI · PostgreSQL · Redis · JavaScript · APIs</p>
              <p class="lead">Business software, backend systems and product infrastructure shaped by real deployments, user feedback and production constraints.</p>
              <div class="actions">
                ${button('#work', 'View selected work')}
                ${contactTrigger('Contact / résumé', true)}
              </div>
              <div class="proof">
                <span>${dot()}Real client deployments</span>
                <span>${dot()}Multi-tenant systems</span>
                <span>${dot()}Production debugging</span>
              </div>
            </div>
            <div class="hero-sidebar">
              <div class="living-line"></div>
              <div class="hero-rail">
                ${profileCard()}
                ${systemPanel()}
              </div>
            </div>
          </section>

          <section id="work" class="section work">
            ${sectionLabel('01', 'SELECTED WORK')}
            <h2>Three systems. Three different engineering problems.</h2>
            <p class="section-intro">Context, constraints, architecture, decisions, production reality and reflection.</p>
            <div class="projects">
              ${projects.map(projectCard).join('')}
            </div>
          </section>

          <section class="section snapshot">
            ${sectionLabel('02', 'ENGINEERING SNAPSHOT')}
            <h2>The interesting part is why.</h2>
            <p class="section-intro">A stack is only useful when it explains a trade-off.</p>
            <div class="decision-grid">
              <article><span>01</span><div><h4>PostgreSQL holds durable configuration</h4><p>Tenant registration, capability configuration and persistent state belong in a durable relational store.</p></div></article>
              <article><span>02</span><div><h4>Redis is used for short-lived runtime state</h4><p>Sessions, cache, dedupe and coordination stay separate from durable business configuration.</p></div></article>
              <article><span>03</span><div><h4>Operational truth remains with the owning system</h4><p>NCPC identifies products; TradeFlow owns price and availability; NTheemba orchestrates.</p></div></article>
              <article><span>04</span><div><h4>Production findings influence architectural decisions</h4><p>Compatibility, persistence and workflow findings from real deployments inform implementation and testing priorities.</p></div></article>
            </div>
            <div class="tech-strip">Python 3.12 · FastAPI · PostgreSQL · Redis · JavaScript · Apps Script · REST contracts · pytest</div>
          </section>

          <section id="about" class="section about">
            ${sectionLabel('03', 'ABOUT')}
            <div class="about-grid">
              <div>
                <h2>A non-linear path into software.</h2>
                <p class="lead">I learned through building, supporting real users and revisiting assumptions when production behavior differed from the prototype. That progression shaped how I approach architecture, testing and product decisions today.</p>
              </div>
              <div class="timeline">
                <div><span class="dot"></span><span><strong>Started self-teaching</strong><small>experiments</small></span></div>
                <div><span class="dot"></span><span><strong>Built business tools</strong><small>real workflows</small></span></div>
                <div><span class="dot"></span><span><strong>First paid deployments</strong><small>production reality</small></span></div>
                <div><span class="dot"></span><span><strong>Now</strong><small>connected systems + NDS</small></span></div>
              </div>
            </div>
          </section>

          <section id="nds" class="section nds">
            <div class="nds-panel">
              <div>
                <div class="chip gold-chip">ALSO BUILDING</div>
                <h3>NTheemba Digital Services</h3>
                <p>NTheemba Digital Services provides the operating context for much of this work, including product implementation, client onboarding, production support and ongoing system improvement.</p>
              </div>
              <strong>TRADEFLOW · NTHEEMBA · NCPC</strong>
            </div>
          </section>

          <section id="contact" class="section contact">
            ${sectionLabel('04', 'CONTACT')}
            <h2>Let’s connect.</h2>
            <p class="section-intro">Interested in the engineering, product work, collaboration or an opportunity?</p>
            <div class="actions">
              ${contactTrigger('Contact James')}
              ${button('/assets/James_Chisulo_Master_CV.pdf', 'Résumé', true, true)}
              ${button('https://github.com/OddJei', 'GitHub', true, true)}
            </div>
          </section>
        </main>
      </div>
      ${evidenceModal()}
      ${contactModal()}
    </div>
  `;
}

function snapshot(data) {
  return `
    <aside class="case-snapshot">
      <div class="eyebrow">PROJECT SNAPSHOT</div>
      <dl>
        <dt>STATUS</dt><dd>${data.status}</dd>
        <dt>ROLE</dt><dd>${data.role}</dd>
        <dt>STACK</dt><dd>${data.stack}</dd>
      </dl>
    </aside>
  `;
}

function caseStudyPage(slug) {
  const data = caseContent[slug];
  const index = projects.findIndex(project => project.slug === slug);
  const next = projects[(index + 1) % projects.length];
  return `
    <div class="app">
      <div class="page">
        ${nav()}
        <main class="case-main">
          ${button('/', '← Back to work', true)}
          <section class="case-hero">
            <div><div class="chip">${data.n} · ${data.label}</div><h1>${data.title}</h1><p class="lead">${data.desc}</p></div>
            ${snapshot(data)}
          </section>
          <div class="divider"></div>
          ${data.sections.map(([n, label, title, body], indexInSections) => `
            <section class="case-section">
              ${sectionLabel(n, label)}
              <div class="case-section-grid">
                <h2>${title}</h2>
                <div class="case-body"><p>${body}</p>${indexInSections === 1 ? diagram(slug) : ''}</div>
              </div>
            </section>
          `).join('')}
          ${evidenceSection(data)}
          <div class="case-nav">${contactTrigger('Contact James')}${button('/assets/James_Chisulo_Master_CV.pdf', 'View résumé', true, true)}${button('/', '← Portfolio home', true)}${button(`/work/${next.slug}`, `Next: ${next.title} →`)}</div>
        </main>
      </div>
      ${evidenceModal()}
      ${contactModal()}
    </div>
  `;
}

function notFoundPage(pathname) {
  return `
    <div class="app">
      <div class="page">
        ${nav()}
        <main class="case-main">
          ${button('/', '← Portfolio home', true)}
          <section class="case-hero">
            <div><div class="chip">404 · NOT FOUND</div><h1>That route does not exist.</h1><p class="lead">The portfolio only publishes the home page and the three documented case studies. The requested path was <code>${escapeHtml(pathname)}</code>.</p></div>
          </section>
        </main>
      </div>
    </div>
  `;
}

// Normalize direct links such as /work/tradeflow/ before resolving the SPA route.
const path = window.location.pathname.replace(/\/+$/, '') || '/';
if (path.startsWith('/work/')) {
  const slug = path.split('/').filter(Boolean).pop();
  root.innerHTML = caseContent[slug] ? caseStudyPage(slug) : notFoundPage(path);
  document.title = caseContent[slug] ? `${caseContent[slug].title} — James Chisulo` : 'Page not found — James Chisulo';
} else {
  root.innerHTML = homePage();
  document.title = 'James Chisulo — Software Engineer & Product Builder';
}

bindNavigation();
bindEvidenceActions();
bindContactActions();
