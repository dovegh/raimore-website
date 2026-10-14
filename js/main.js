const header = document.getElementById('header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
window.addEventListener('scroll', onScroll);
onScroll();

const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  const isMobile = () => window.matchMedia('(max-width: 720px)').matches;
  const setMenu = (open) => {
    links.classList.toggle('open', open);
    toggle.classList.toggle('is-open', open);
    document.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open) {
      links.querySelectorAll('.has-dropdown.open').forEach((d) => d.classList.remove('open'));
    }
  };
  toggle.addEventListener('click', () => setMenu(!links.classList.contains('open')));

  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      if (!a.parentElement.classList.contains('has-dropdown')) setMenu(false);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) setMenu(false);
  });
  window.addEventListener('resize', () => {
    if (!isMobile() && links.classList.contains('open')) setMenu(false);
  });
}

document.querySelectorAll('.faq-q').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const answer = item.querySelector('.faq-a');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach((openItem) => {
      openItem.classList.remove('open');
      openItem.querySelector('.faq-a').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
});

const counters = document.querySelectorAll('.num[data-count]');
const animate = (el) => {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  if (target === 0) { el.textContent = '0' + suffix; return; }
  let cur = 0;
  const step = Math.max(1, Math.ceil(target / 60));
  const tick = () => {
    cur = Math.min(target, cur + step);
    el.textContent = cur + suffix;
    if (cur < target) requestAnimationFrame(tick);
  };
  tick();
};
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
  });
}, { threshold: 0.4 });
counters.forEach((c) => io.observe(c));

const heroSlides = document.querySelectorAll('.hero-slide');
if (heroSlides.length > 1 && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  let h = 0;
  setInterval(() => {
    heroSlides[h].classList.remove('is-active');
    h = (h + 1) % heroSlides.length;
    heroSlides[h].classList.add('is-active');
  }, 5000);
}

document.querySelectorAll('.nav-links .has-dropdown').forEach((dd) => {
  const trigger = dd.querySelector('a');
  if (!trigger) return;
  trigger.addEventListener('click', (e) => {
    if (window.matchMedia('(max-width: 980px)').matches) {
      e.preventDefault();
      dd.classList.toggle('open');
    }
  });
});

(function () {
  var INDEX = [{"t":"Home","u":"/","k":"home raimore construction heavy civil portland","y":"Page"},{"t":"About Us","u":"/about-us","k":"about company story history who we are mbe","y":"Company"},{"t":"Leadership","u":"/leadership","k":"leadership team management executives directors","y":"Company"},{"t":"Diversity","u":"/diversity","k":"diversity inclusion equity mbe workforce supplier","y":"Company"},{"t":"Safety","u":"/safety","k":"safety environmental health program zero harm","y":"Company"},{"t":"Community","u":"/community","k":"community outreach pathways partners giving","y":"Company"},{"t":"Services","u":"/services","k":"services capabilities construction management cm gc heavy civil","y":"Page"},{"t":"Projects","u":"/project","k":"projects portfolio work transit parks roads","y":"Page"},{"t":"Careers","u":"/careers","k":"careers jobs apply union employment hiring openings","y":"Page"},{"t":"Apply","u":"/apply","k":"apply application form resume portfolio job careers submit hiring openings","y":"Page"},{"t":"Contact","u":"/contact","k":"contact email phone address location directions get in touch","y":"Page"},{"t":"82nd Avenue Transit Project (FX-BRT)","u":"/project-82nd-ave-transit","k":"trimet portland, or bus rapid transit • corridor infrastructure cm/gc (jv — raimore lead partner) current 2025–2029","y":"Project"},{"t":"I-5 Rose Quarter Improvement Project — Phase 1A","u":"/project-i5-rose-quarter","k":"oregon department of transportation (odot) portland, or highway • seismic retrofit • urban infrastructure cm/gc (project team participation) current 2025–2026","y":"Project"},{"t":"82nd Avenue Major Maintenance Project","u":"/project-82nd-ave-major-maintenance","k":"portland bureau of transportation (pbot) ne/se 82nd ave, portland, or roadway • corridor improvements cm/gc (prime) current 2023–2026","y":"Project"},{"t":"Hollywood Transit Center","u":"/project-hollywood-transit-center","k":"trimet portland, or (hollywood district) transit • substation • civil infrastructure cm/gc (prime) current 2023–2026","y":"Project"},{"t":"USPS Broadway Corridor Demolition","u":"/project-usps-broadway-demolition","k":"prosper portland portland, or heavy civil • demolition construction participation completed 2023","y":"Project"},{"t":"Gateway Green Development & Restoration","u":"/project-gateway-green","k":"portland parks & recreation portland, or parks • environmental restoration cm/gc (prime) completed 2024","y":"Project"},{"t":"Division Transit Project (FX2-Division)","u":"/project-division-transit","k":"trimet gresham to downtown portland, or bus rapid transit • oregon's first brt cm/gc (prime) completed 2022","y":"Project"},{"t":"ODMNSP / OMMSP Program","u":"/project-odmnsp-ommsp","k":"portland bureau of transportation (pbot) portland, or streetscape • safety improvements cm/gc (prime) completed 2022","y":"Project"},{"t":"Mill Park Improvements","u":"/project-mill-park","k":"portland parks & recreation portland, or parks • community infrastructure cm/gc (prime) completed","y":"Project"},{"t":"Lents Park Improvements","u":"/project-lents-park","k":"portland parks & recreation portland, or parks • community infrastructure cm/gc completed","y":"Project"},{"t":"92nd & Sandy Sidewalk Infill Project","u":"/project-92nd-sandy-sidewalk","k":"portland bureau of transportation (pbot) se 92nd & sandy blvd, portland, or streetscape • sidewalk infrastructure cm/gc completed","y":"Project"},{"t":"Beech Park Development","u":"/project-beech-park","k":"portland parks & recreation portland, or parks • community development cm/gc (joint venture) completed","y":"Project"},{"t":"Oregon Convention Center Renovation","u":"/project-oregon-convention-center","k":"metro portland, or institutional • public facility cm/gc (prime) completed 2019","y":"Project"},{"t":"OHSU Knight Cancer Research Building","u":"/project-ohsu-knight-cancer","k":"oregon health & science university portland, or healthcare • research facility construction participation completed","y":"Project"},{"t":"Ruby Junction Facility Expansion (Phase 1)","u":"/project-ruby-junction","k":"trimet gresham, or transit operations facility construction participation completed","y":"Project"},{"t":"Luuwit View Park","u":"/project-luwit-view-park","k":"portland parks & recreation ne portland (cully neighborhood), or parks • public infrastructure • community space construction participation completed 2018","y":"Project"},{"t":"TriMet Moving Together Project","u":"/project-moving-together","k":"trimet portland, or site development • transit support general contracting (prime) completed","y":"Project"},{"t":"PCC Satellite Parking Lots","u":"/project-pcc-cascade","k":"portland community college portland, or (pcc cascade campus) site development general contracting (prime) completed","y":"Project"},{"t":"Portland Open Space Sequence Restoration","u":"/project-open-space-sequence","k":"city of portland — parks & recreation downtown portland, or parks • urban infrastructure cm/gc completed 2017–2019","y":"Project"},{"t":"Portland-Milwaukie Light Rail Deferred Shelter Installation","u":"/project-portland-milwaukie-shelters","k":"trimet portland metro area light rail infrastructure cm/gc completed 2016–2017","y":"Project"},{"t":"Portland Transit Mall","u":"/project-portland-transit-mall","k":"trimet 5th & 6th avenues, downtown portland, or streetscape • transit infrastructure • brick restoration construction participation completed 2006–2009","y":"Project"},{"t":"Nelson Parking Lot Improvements","u":"/project-nelson-parking-lot","k":"portland development commission portland, or site development general contracting completed 2016","y":"Project"},{"t":"Portland Streetcar (Phases 1–4)","u":"/project-portland-streetcar","k":"city of portland / portland streetcar inc. portland, or streetcar • light rail transit infrastructure construction participation completed 2001–2015","y":"Project"},{"t":"Interstate MAX Yellow Line","u":"/project-interstate-max","k":"trimet rose quarter to expo center, north portland, or light rail • corridor infrastructure cm/gc (construction participation) completed 2000–2004","y":"Project"},{"t":"TriMet eFare Infrastructure Project","u":"/project-efare-infrastructure","k":"trimet portland metro area electrical • transit systems cm/gc (co-prime) completed","y":"Project"},{"t":"TriMet Lot E Improvements","u":"/project-trimet-lot-e","k":"trimet portland, or site development general contracting completed","y":"Project"}];

  var triggers = document.querySelectorAll('.nav-search');
  if (!triggers.length) return;

  var overlay = document.createElement('div');
  overlay.className = 'site-search';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Search this site');
  overlay.innerHTML =
    '<div class="ss-panel">' +
      '<div class="ss-field">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>' +
        '<input type="text" id="ssInput" placeholder="Search projects, pages, services..." autocomplete="off" aria-label="Search" />' +
        '<button class="ss-close" id="ssClose" aria-label="Close search">&times;</button>' +
      '</div>' +
      '<div class="ss-results" id="ssResults" role="listbox"></div>' +
      '<p class="ss-hint">Press <kbd>Esc</kbd> to close</p>' +
    '</div>';
  document.body.appendChild(overlay);

  var input = overlay.querySelector('#ssInput');
  var results = overlay.querySelector('#ssResults');
  var closeBtn = overlay.querySelector('#ssClose');

  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  function render(items) {
    if (!items.length) {
      results.innerHTML = '<p class="ss-empty">No matches. Try another word.</p>';
      results.classList.add('has-items');
      return;
    }
    results.innerHTML = items.map(function (it) {
      return '<a class="ss-result" href="' + it.u + '">' +
        '<span class="ss-r-title">' + esc(it.t) + '</span>' +
        '<span class="ss-r-type">' + it.y + '</span>' +
        '<span class="ss-arrow">&#8594;</span>' +
      '</a>';
    }).join('');
    results.classList.add('has-items');
  }

  function search(q) {
    q = q.trim().toLowerCase();
    if (!q) { results.classList.remove('has-items'); results.innerHTML = ''; return; }
    var terms = q.split(/\s+/);
    var scored = [];
    INDEX.forEach(function (it) {
      var hay = (it.t + ' ' + it.k).toLowerCase();
      var ok = terms.every(function (t) { return hay.indexOf(t) !== -1; });
      if (!ok) return;
      var score = 0;
      terms.forEach(function (t) {
        if (it.t.toLowerCase().indexOf(t) === 0) score += 3;
        else if (it.t.toLowerCase().indexOf(t) !== -1) score += 2;
        else score += 1;
      });
      scored.push({ it: it, score: score });
    });
    scored.sort(function (a, b) { return b.score - a.score; });
    render(scored.slice(0, 8).map(function (s) { return s.it; }));
  }

  function open() {
    overlay.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
    setTimeout(function () { input.focus(); }, 60);
  }
  function close() {
    overlay.classList.remove('is-open');
    document.documentElement.style.overflow = '';
    input.value = '';
    results.classList.remove('has-items');
    results.innerHTML = '';
  }

  Array.prototype.forEach.call(triggers, function (t) {
    t.setAttribute('role', 'button');
    t.setAttribute('tabindex', '0');
    t.addEventListener('click', open);
    t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
  input.addEventListener('input', function () { search(input.value); });
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
    if (e.key === 'Enter') { var first = results.querySelector('.ss-result'); if (first) window.location.href = first.getAttribute('href'); }
  });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && overlay.classList.contains('is-open')) close(); });
})();

(function () {
  var root = document.documentElement;
  function current() {
    return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  }
  function apply(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch (e) {}
    document.querySelectorAll('#themeToggle').forEach(function (b) {
      b.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }
  document.querySelectorAll('#themeToggle').forEach(function (btn) {
    btn.setAttribute('aria-pressed', current() === 'dark' ? 'true' : 'false');
    btn.addEventListener('click', function () {
      apply(current() === 'dark' ? 'light' : 'dark');
    });
  });
})();
