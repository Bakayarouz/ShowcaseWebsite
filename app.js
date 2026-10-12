(function () {
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmtDate = (d) => {
    const dt = new Date(d + "T00:00:00");
    return isNaN(dt) ? d : dt.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
  };

  const features = [...FEATURES].sort((a, b) => (b.date || "").localeCompare(a.date || ""));

  /* ---------- Site settings ---------- */
  document.title = SITE.name;
  $("#brand-name").textContent = SITE.name;
  $("#hero-title").textContent = SITE.name;
  $("#hero-tagline").textContent = SITE.tagline;
  $("#footer-text").textContent = `© ${new Date().getFullYear()} ${SITE.name}. ${SITE.footer || ""}`;

  const setLink = (el, url) => { if (url) el.href = url; else el.remove(); };
  setLink($("#btn-download"), SITE.links?.download);
  setLink($("#btn-source"), SITE.links?.source);
  setLink($("#nav-source"), SITE.links?.source);
  setLink($("#btn-discord"), SITE.links?.discord);

  /* ---------- Stats ---------- */
  const released = features.filter((f) => (f.status || "released") === "released");
  $("#stat-total").textContent = released.length;
  const latest = released.find((f) => f.version);
  $("#stat-version").textContent = latest ? latest.version : "–";
  $("#stat-updated").textContent = released[0] ? fmtDate(released[0].date) : "–";

  /* ---------- Filters ---------- */
  const categories = ["All", ...new Set(features.map((f) => f.category).filter(Boolean))];
  let activeCat = "All";
  let query = "";

  const filtersEl = $("#filters");
  categories.forEach((cat) => {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = cat;
    b.setAttribute("aria-pressed", cat === activeCat);
    b.addEventListener("click", () => {
      activeCat = cat;
      filtersEl.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", c.textContent === cat));
      render();
    });
    filtersEl.appendChild(b);
  });

  $("#search").addEventListener("input", (e) => { query = e.target.value.trim().toLowerCase(); render(); });

  /* ---------- Cards ---------- */
  const media = (f) => f.image
    ? `<div class="card-media"><img src="${esc(f.image)}" alt="${esc(f.title)}" loading="lazy"></div>`
    : `<div class="card-media" aria-hidden="true">${esc(f.icon || "⛏️")}</div>`;

  const meta = (f) => {
    const status = f.status || "released";
    return `<div class="card-meta">
      <span class="tag status-${esc(status)}">${esc(status)}</span>
      ${f.category ? `<span class="tag">${esc(f.category)}</span>` : ""}
      ${f.version ? `<span>v${esc(f.version)}</span>` : ""}
      <span>· ${esc(fmtDate(f.date))}</span>
    </div>`;
  };

  function render() {
    const list = features.filter((f) => {
      if (activeCat !== "All" && f.category !== activeCat) return false;
      if (!query) return true;
      return [f.title, f.summary, f.category, f.version, ...(f.details || [])].join(" ").toLowerCase().includes(query);
    });
    $("#grid").innerHTML = list.map((f) => `
      <button class="card" data-idx="${features.indexOf(f)}">
        ${media(f)}
        <div class="card-body">
          ${meta(f)}
          <h3>${esc(f.title)}</h3>
          <p>${esc(f.summary)}</p>
        </div>
      </button>`).join("");
    $("#empty").hidden = list.length > 0;
  }

  $("#grid").addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openModal(features[+card.dataset.idx]);
  });

  /* ---------- Timeline (grouped by version) ---------- */
  const groups = new Map();
  features.forEach((f, i) => {
    const key = f.version ? `v${f.version}` : fmtDate(f.date);
    if (!groups.has(key)) groups.set(key, { date: f.date, items: [] });
    groups.get(key).items.push(i);
  });
  $("#timeline-list").innerHTML = [...groups].map(([label, g]) => `
    <li>
      <time datetime="${esc(g.date)}">${esc(fmtDate(g.date))} · ${esc(label)}</time>
      ${g.items.map((i) => `<span class="tl-title"><button data-idx="${i}">${esc(features[i].title)}</button></span>
        <span class="tl-sub">${esc(features[i].summary)}</span>`).join("")}
    </li>`).join("");
  $("#timeline-list").addEventListener("click", (e) => {
    const b = e.target.closest("button[data-idx]");
    if (b) openModal(features[+b.dataset.idx]);
  });

  /* ---------- Modal ---------- */
  const modal = $("#modal");
  function openModal(f) {
    $("#modal-body").innerHTML = `
      ${media(f)}
      <div class="modal-content">
        ${meta(f)}
        <h3>${esc(f.title)}</h3>
        <p>${esc(f.summary)}</p>
        ${f.details && f.details.length ? `<ul>${f.details.map((d) => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
      </div>`;
    if (typeof modal.showModal === "function") modal.showModal();
    else modal.setAttribute("open", "");
  }
  const closeModal = () => (modal.close ? modal.close() : modal.removeAttribute("open"));
  modal.querySelector(".modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

  render();
})();
