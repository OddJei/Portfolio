const projects = [
  {
    slug: 'tradeflow',
    n: '01',
    label: 'BUSINESS OPERATIONS',
    title: 'TradeFlow',
    copy: 'Visibility for small businesses without forcing every business into a supermarket-style POS workflow.',
    evidence: 'Production deployments · workflow adaptations · Android compatibility · production fixes',
    accent: 'green',
  },
  {
    slug: 'ntheemba',
    n: '02',
    label: 'CONVERSATIONAL INFRASTRUCTURE',
    title: 'NTheemba',
    copy: 'Routing natural-language requests to the right business capability while authoritative systems stay in control.',
    evidence: 'FastAPI · PostgreSQL registry · Redis runtime · ports/adapters · tested workflows',
    accent: 'green',
  },
  {
    slug: 'ncpc',
    n: '03',
    label: 'CATALOGUE INFRASTRUCTURE',
    title: 'NCPC',
    copy: 'Turning messy barcodes, aliases, spellings and variants into stable canonical product identity.',
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
    evidenceStatus: 'Evidence publishing in progress',
    evidenceItems: [
      ['Technical evidence', 'AVAILABLE', 'The public Standard TradeFlow copy includes the setup gate, API contracts and focused tests.', 'https://github.com/OddJei/TradeFlow-Standard-App/blob/3138b2af7b01359af0aaa5ce0ae856a8608597d7/appscript/tests/first-time-setup-preflight.test.mjs'],
      ['Architecture', 'AVAILABLE', 'The public source shows the Apps Script, business-data and NCPC mapping boundaries.', 'https://github.com/OddJei/TradeFlow-Standard-App/blob/3138b2af7b01359af0aaa5ce0ae856a8608597d7/appscript/code.gs'],
      ['Client reviews', 'PENDING', 'Owner and staff reviews are being collected and will be added after review and permission.'],
      ['Real-world photos', 'PENDING', 'Permissioned shop and usage photos will be added as they are collected.'],
      ['Source / GitHub', 'PUBLISHED', 'Public-safe Standard TradeFlow source and evidence copy at an immutable commit.', 'https://github.com/OddJei/TradeFlow-Standard-App/commit/3138b2af7b01359af0aaa5ce0ae856a8608597d7'],
    ],
    sections: [
      ['01', 'CONTEXT', 'The first assumption was simple. Reality was not.', 'Real client use exposed a harder question: what happens when the business does not operate like a supermarket checkout?'],
      ['02', 'ENGINEERING PROBLEM', 'Model the business without forcing the wrong workflow.', 'POS is a capability, not the definition. Some deployments need per-sale capture; others need revenue, expense, stock and restock visibility without changing staff behaviour.'],
      ['03', 'PRODUCTION REALITY', 'The useful part is what broke.', 'Production work forced fixes around older Android sign-in, inspection persistence, shop isolation and multi-device behaviour.'],
      ['04', 'REFLECTION', 'What I would do differently now.', 'Centralize durable data earlier, treat onboarding as part of product, test workflows rather than only functions, and avoid confusing feature breadth with differentiation.'],
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
    evidenceStatus: 'Evidence publishing in progress',
    evidenceItems: [
      ['Technical evidence', 'AVAILABLE', 'The public copy contains the FastAPI runtime, inbound worker and focused test suite.', 'https://github.com/OddJei/NTheemba/tree/91f1a1de968f217abd719176139cbd6dead98100/bot/tests'],
      ['Architecture', 'AVAILABLE', 'The immutable source commit exposes the runtime entry point, worker and adapter boundaries.', 'https://github.com/OddJei/NTheemba/blob/91f1a1de968f217abd719176139cbd6dead98100/bot/ntheemba/main.py'],
      ['Runtime / session evidence', 'AVAILABLE', 'The repository documents durable configuration, runtime coordination and capability workflows; this is local/source evidence, not live WhatsApp proof.', 'https://github.com/OddJei/NTheemba/blob/91f1a1de968f217abd719176139cbd6dead98100/bot/ntheemba/inbound_worker.py'],
      ['Gateway / WAHA integration', 'UNDER DEVELOPMENT', 'Gateway materials remain integration work; live WhatsApp activation is not claimed.'],
      ['Source / GitHub', 'PUBLISHED', 'Public-safe Ntheemba source and evidence copy at an immutable commit.', 'https://github.com/OddJei/NTheemba/commit/91f1a1de968f217abd719176139cbd6dead98100'],
    ],
    sections: [
      ['01', 'PROBLEM', 'A chatbot is easy. A trustworthy business agent is not.', 'The hard part is identifying the business, loading the right capability, handling duplicates and failures, and never inventing business facts.'],
      ['02', 'ARCHITECTURE', 'Conversation is orchestration.', 'WhatsApp gateway → NTheemba → capability → authoritative system, with PostgreSQL for durable configuration and Redis for runtime/session state.'],
      ['03', 'KEY DECISIONS', 'State boundaries matter.', 'Capabilities are owned by NTheemba, adapters isolate external systems, Redis is not tenant truth, and LLM output is not authority.'],
      ['04', 'WHAT IS ACTUALLY BUILT', 'Architecture with tests — without pretending integration is finished.', 'Core workflows and PostgreSQL/Redis foundations are built; the live end-to-end gateway remains the integration edge.'],
      ['05', 'CRITICAL PATH', 'Current integration spine.', 'Inbound message → worker process → NCPC resolve → TradeFlow truth → outbound reply.'],
      ['06', 'REFLECTION', 'Reliability is product work.', 'Duplicate messages, retries, timeouts and restarts must be treated as normal operating conditions.'],
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
    evidenceStatus: 'Evidence publishing in progress',
    evidenceItems: [
      ['Technical evidence', 'AVAILABLE', 'The public copy contains the identity model, API contracts and workflow tests.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/blob/dae04f65295dccc7ec89a094a9ba7e249cde7fc2/service/src/ncpc_service/models.py'],
      ['Architecture', 'AVAILABLE', 'The immutable source shows identity, variant, alias, barcode and review/publication boundaries.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/blob/dae04f65295dccc7ec89a094a9ba7e249cde7fc2/service/src/ncpc_service/api.py'],
      ['Review / workflow tests', 'AVAILABLE', 'The workflow tests provide source-level evidence for controlled catalogue operations.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/blob/dae04f65295dccc7ec89a094a9ba7e249cde7fc2/service/tests/test_workflow.py'],
      ['Catalogue / admin UI', 'PREPARING', 'Public-safe screenshots and catalogue workflow evidence will be added shortly.'],
      ['Source / GitHub', 'PUBLISHED', 'Public-safe NCPC source and evidence copy at an immutable commit.', 'https://github.com/OddJei/NTheemba-Central-Product-Catalogue-NCPC-/commit/dae04f65295dccc7ec89a094a9ba7e249cde7fc2'],
    ],
    sections: [
      ['01', 'PROBLEM', 'Products have one identity. People describe them many ways.', 'A customer, cashier, barcode and supplier list may all refer to the same product differently. Re-discovering identity for every business is expensive and inconsistent.'],
      ['02', 'AUTHORITY BOUNDARY', 'Identity is not inventory.', 'NCPC owns canonical identity. TradeFlow owns business-specific truth such as selling price, stock and availability.'],
      ['03', 'RESOLUTION MODEL', 'Normalize messy input into a stable product reference.', 'Barcode, exact variant, alias and fuzzy phrase all feed candidate search before returning a stable product/variant identity.'],
      ['04', 'WHY IT MATTERS', 'Every onboarding can compound.', 'The hypothesis is that a growing shared identity layer reduces repeated catalogue-cleaning work. It is a hypothesis to validate, not a moat to claim prematurely.'],
      ['05', 'REFLECTION', 'Keep the scope narrow.', 'Price and stock would blur ownership and introduce staleness. Data quality itself is product work.'],
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
        <h2>Evidence, with boundaries.</h2>
          <p>Public source and test evidence are linked directly where available. Deployment, client, payment and live-channel proof remains private or pending approval rather than being implied by source code.</p>
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
            ${href ? button(href, status === 'PUBLISHED' ? 'View immutable source' : 'View public evidence', true, true) : placeholderButton('View evidence', `${data.title} — ${title}`)}
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
        <div class="eyebrow">EVIDENCE UPDATE</div>
        <h3 id="evidence-modal-title">Will be updated shortly.</h3>
        <p id="evidence-modal-copy">This evidence is not yet published. The portfolio is being updated continuously as material is reviewed and cleared for public use.</p>
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
    copy.textContent = 'This item is not yet published. The portfolio is being updated continuously as reviews, photos and public-safe technical evidence are prepared and approved.';
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
      <div class="diagram-title gold-text">MESSY INPUT → CANONICAL IDENTITY</div>
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
              <p class="lead">Business software, backend architecture and product systems shaped by real deployments, real users and production constraints.</p>
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
              <article><span>01</span><div><h4>PostgreSQL stores durable truth</h4><p>Tenant registration, capability configuration and persistent state belong in a durable relational store.</p></div></article>
              <article><span>02</span><div><h4>Redis handles runtime state</h4><p>Sessions, cache, dedupe and short-lived coordination stay separate from durable business configuration.</p></div></article>
              <article><span>03</span><div><h4>Authority stays with the owning system</h4><p>NCPC identifies products; TradeFlow owns price and availability; NTheemba orchestrates.</p></div></article>
              <article><span>04</span><div><h4>Production feedback changes architecture</h4><p>Compatibility, persistence and workflow failures from real deployments are documented instead of hidden.</p></div></article>
            </div>
            <div class="tech-strip">Python 3.12 · FastAPI · PostgreSQL · Redis · JavaScript · Apps Script · REST contracts · pytest</div>
          </section>

          <section id="about" class="section about">
            ${sectionLabel('03', 'ABOUT')}
            <div class="about-grid">
              <div>
                <h2>A non-linear path into software.</h2>
                <p class="lead">I learned by building, breaking assumptions, working with real businesses and supporting what I shipped. The useful story is the progression from experiments to systems with real users and consequences.</p>
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
                <p>A small product and implementation company focused on practical digital systems for MSMEs — shown here as evidence of product ownership and client responsibility, not as a second sales website.</p>
              </div>
              <strong>TRADEFLOW · NTHEEMBA · NCPC</strong>
            </div>
          </section>

          <section id="contact" class="section contact">
            ${sectionLabel('04', 'CONTACT')}
            <h2>Let’s connect.</h2>
            <p class="section-intro">Interested in the engineering, product work, collaboration or opportunities?</p>
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
