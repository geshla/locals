(function () {
  const LINES = window.LINES, FITS = window.FITS, ENTRIES = window.ENTRIES, MILESTONES = window.MILESTONES;
  const TAB_COLORS = { red: "#c0392b", orange: "#e08a2c", silver: "#b8bec7", blue: "#3b6fb6" };

  const state = { view: "timeline", lines: new Set(Object.keys(LINES)), q: "" };
  try {
    const saved = JSON.parse(localStorage.getItem("levis-archive-lines") || "null");
    if (Array.isArray(saved) && saved.length) state.lines = new Set(saved.filter(k => LINES[k]));
  } catch (e) {}

  const $ = (s, el = document) => el.querySelector(s);
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const byId = Object.fromEntries(ENTRIES.map(e => [e.id, e]));

  /* ---------- Fit drawing ---------- */
  function geom(fitKey, flare) {
    const f = FITS[fitKey] || FITS.original;
    const cy = 64 + f.rise * 40;
    const thigh = f.thigh, knee = f.knee, hem = f.hem * (flare || 1);
    const outer0 = 100 - thigh - 4;
    const kc = 100 - knee / 2 - 6, hc = 100 - Math.max(hem, knee) / 2 - 8 + (hem > knee ? (hem - knee) / 6 : 0);
    return { f, cy, outer0, kOut: kc - knee / 2, kIn: kc + knee / 2, hOut: hc - hem / 2, hIn: hc + hem / 2, kY: 172, hY: 262 };
  }
  function halfPath(g) {
    return `M52,22 L100,22 L100,${g.cy + 4} Q99,${g.cy + 22} ${g.kIn},${g.kY} L${g.hIn},${g.hY} L${g.hOut},${g.hY} L${g.kOut},${g.kY} L${g.outer0},${g.cy} C${g.outer0},${g.cy - 26} 50,${(22 + g.cy) / 2} 52,22 Z`;
  }
  function drawJeans(e, opts = {}) {
    const g = geom(e.fit, e.flare);
    const id = "j" + Math.random().toString(36).slice(2, 8);
    const tab = TAB_COLORS[e.tab || (e.line === "collab" ? "red" : "red")];
    const loops = !(e.suspenders && e.year < 1922);
    const stitch = "var(--stitch)";
    let s = `<svg viewBox="0 0 200 274" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(e.name)} fit drawing: ${esc((FITS[e.fit] || {}).label || "")}">`;
    s += `<defs><g id="${id}">
      <path d="${halfPath(g)}" fill="var(--indigo)" stroke="var(--indigo-dark)" stroke-width="1.5"/>
      <path d="M${g.outer0 + 4},${g.cy} L${g.kOut + 3},${g.kY} L${g.hOut + 3},${g.hY - 2}" fill="none" stroke="${stitch}" stroke-width="1" stroke-dasharray="3 2" opacity=".75"/>
      <path d="M56,32 Q${70},${54} 84,30" fill="none" stroke="${stitch}" stroke-width="1" stroke-dasharray="3 2"/>
      <circle cx="57" cy="33" r="1.8" fill="#c9a46a"/><circle cx="83" cy="31" r="1.8" fill="#c9a46a"/>
      ${g.f.twist ? `<path d="M${g.outer0 + 6},${g.cy + 4} Q${(g.kOut + g.kIn) / 2},${g.kY} ${g.hIn - 6},${g.hY - 2}" fill="none" stroke="${stitch}" stroke-width="1.6" stroke-dasharray="4 2"/>` : ""}
      ${loops ? `<rect x="60" y="20" width="4" height="12" rx="1" fill="var(--indigo-dark)"/>` : ""}
      ${e.suspenders ? `<circle cx="66" cy="26" r="2.4" fill="#c9a46a" stroke="#8a6d3d" stroke-width=".6"/>` : ""}
    </g></defs>`;
    if (opts.ghost) {
      const g0 = geom("original");
      s += `<path d="${halfPath(g0)}" fill="none" stroke="#9fb0cf" stroke-width="1.2" stroke-dasharray="4 3"/>`;
      s += `<path d="${halfPath(g0)}" fill="none" stroke="#9fb0cf" stroke-width="1.2" stroke-dasharray="4 3" transform="translate(200,0) scale(-1,1)"/>`;
    }
    s += `<use href="#${id}"/><use href="#${id}" transform="translate(200,0) scale(-1,1)"/>`;
    // waistband + fly
    s += `<rect x="52" y="12" width="96" height="11" fill="var(--indigo-dark)"/>`;
    s += `<line x1="52" y1="21" x2="148" y2="21" stroke="${stitch}" stroke-dasharray="3 2" stroke-width="1"/>`;
    s += `<circle cx="100" cy="17.5" r="3" fill="#c9a46a"/>`;
    if (e.fly === "zip") {
      s += `<path d="M104,23 L104,${g.cy - 8} Q104,${g.cy} 96,${g.cy + 2}" fill="none" stroke="${stitch}" stroke-width="1" stroke-dasharray="3 2"/>`;
    } else {
      s += `<path d="M106,23 L106,${g.cy - 6} Q106,${g.cy + 2} 98,${g.cy + 3}" fill="none" stroke="${stitch}" stroke-width="1" stroke-dasharray="3 2"/>`;
      for (let y = 32; y < g.cy - 4; y += 11) s += `<circle cx="101" cy="${y}" r="1.6" fill="#c9a46a"/>`;
    }
    // tab peeking at right hip
    s += `<rect x="150" y="${30 + (g.cy - 30) * 0.35}" width="6" height="11" rx="1" fill="${tab}"/>`;
    s += `</svg>`;
    return s;
  }

  /* ---------- Helpers ---------- */
  const lineTag = k => `<span class="line-tag"><span class="dot" style="background:${LINES[k].color}"></span>${esc(LINES[k].label)}</span>`;
  const yearLabel = e => (e.approx ? `<span class="approx-badge" title="Approximate or unconfirmed">c.</span> ` : "") + e.year + (e.released ? ` <span class="mono" style="color:var(--muted)">(reissued ${e.released})</span>` : "");
  function matches(e) {
    if (!state.lines.has(e.line)) return false;
    if (!state.q) return true;
    const hay = `${e.lot} ${e.name} ${e.summary} ${e.year} ${(FITS[e.fit] || {}).label} ${LINES[e.line].label}`.toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(t => hay.includes(t));
  }
  function searchQuery(e) {
    if (e.q) return e.q;
    if (e.line === "lvc") return `Levi's Vintage Clothing ${e.name} jeans`;
    if (e.line === "collab") return `${e.name} jeans`;
    if (e.line === "premium") return `Levi's ${e.name} jeans`;
    return `Levi's ${e.name} jeans`;
  }

  /* ---------- Views ---------- */
  function renderChips() {
    const counts = {};
    ENTRIES.forEach(e => counts[e.line] = (counts[e.line] || 0) + 1);
    $("#chips").innerHTML = Object.entries(LINES).map(([k, l]) =>
      `<button class="chip" data-line="${k}" aria-pressed="${state.lines.has(k)}" title="${esc(l.blurb)}"><span class="dot" style="background:${l.color}"></span>${esc(l.label)} <span class="n">${counts[k] || 0}</span></button>`
    ).join("") + `<button class="chip" data-line="__all" aria-pressed="true">All</button>`;
  }

  function renderTimeline() {
    const items = ENTRIES.filter(matches).map(e => ({ y: e.year, kind: "e", e }))
      .concat(state.q ? [] : MILESTONES.filter(m => state.lines.has(m.line)).map(m => ({ y: m.year, kind: "m", m })))
      .sort((a, b) => a.y - b.y || (a.kind === "m" ? -1 : 1));
    if (!items.length) return `<p class="empty">Nothing matches. Try clearing the search or turning a line back on.</p>`;
    const decades = {};
    items.forEach(it => { const d = Math.floor(it.y / 10) * 10; (decades[d] = decades[d] || []).push(it); });
    return Object.keys(decades).sort((a, b) => a - b).map(d => `
      <section class="decade">
        <h2>${d}s<small>${decades[d].filter(i => i.kind === "e").length} jeans</small></h2>
        <div class="events">${decades[d].map(it => it.kind === "m"
          ? `<div class="event"><div class="yr">${it.m.approx ? "c." : ""}${it.y}</div><div class="milestone">${esc(it.m.text)}<a href="${esc(it.m.source)}" target="_blank" rel="noopener">source ↗</a></div></div>`
          : `<div class="event"><div class="yr">${it.e.approx ? "c." : ""}${it.y}</div>
              <button class="tl-card" data-open="${it.e.id}">${drawJeans(it.e)}
                <div class="meta">${lineTag(it.e.line)}<h3>${it.e.lot !== "×" ? `<span class="lot">${esc(it.e.lot)}</span> · ` : ""}${esc(it.e.name)}</h3><p>${esc(it.e.summary)}</p></div>
              </button></div>`).join("")}</div>
      </section>`).join("");
  }

  function cardHTML(e) {
    return `<button class="card" data-open="${e.id}">
      <div class="fig">${drawJeans(e)}</div>
      <div class="lotbig">${esc(e.lot)}</div>
      <h3>${esc(e.name)}</h3>
      <div class="yr">${yearLabel(e)}</div>
      ${e.photos && e.photos.length ? `<div class="has-photos">● ${e.photos.length} photo${e.photos.length > 1 ? "s" : ""}</div>` : ""}
    </button>`;
  }

  function renderGrid(onlyCollab) {
    const keys = onlyCollab ? ["collab"] : Object.keys(LINES).filter(k => k !== "collab");
    const html = keys.filter(k => onlyCollab || state.lines.has(k)).map(k => {
      const list = ENTRIES.filter(e => e.line === k && (onlyCollab ? (!state.q || matchesText(e)) : matches(e)))
        .sort((a, b) => a.year - b.year || String(a.lot).localeCompare(String(b.lot), undefined, { numeric: true }));
      if (!list.length) return "";
      return `<section class="group"><div class="group-head"><h2>${lineTag(k)}</h2><p>${esc(LINES[k].blurb)}</p></div>
        <div class="grid">${list.map(cardHTML).join("")}</div></section>`;
    }).join("");
    return html || `<p class="empty">Nothing matches. Try clearing the search or turning a line back on.</p>`;
  }
  function matchesText(e) {
    const hay = `${e.lot} ${e.name} ${e.summary} ${e.year}`.toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(t => hay.includes(t));
  }

  function render() {
    document.querySelectorAll(".tabs button").forEach(b => b.setAttribute("aria-selected", b.dataset.view === state.view));
    $("#chips").style.display = state.view === "collabs" ? "none" : "";
    const main = $("#main");
    main.innerHTML = state.view === "timeline" ? renderTimeline() : state.view === "models" ? renderGrid(false) : renderGrid(true);
  }

  /* ---------- Detail ---------- */
  function openDetail(id) {
    const e = byId[id]; if (!e) return;
    const q = encodeURIComponent(searchQuery(e));
    const fit = FITS[e.fit] || {};
    const photos = (e.photos || []).length
      ? `<div class="gallery">${e.photos.map(p => `<figure><a href="${esc(p.src)}" target="_blank" rel="noopener"><img src="${esc(p.src)}" alt="${esc(p.caption || e.name)}" loading="lazy"></a><figcaption>${esc(p.caption || "")}${p.credit ? ` · ${esc(p.credit)}` : ""}</figcaption></figure>`).join("")}</div>`
      : `<div class="slot">No photos added yet. Put your own images in <code>images/${esc(e.id)}/</code> and list them in this entry's <code>photos</code> in <code>data.js</code>.</div>`;
    $("#detail-body").innerHTML = `
      <div class="dlg-fig">${drawJeans(e, { ghost: e.fit !== "original" })}
        <div class="legend"><span>${esc(fit.label || "")}</span>${e.fit !== "original" ? `<span><i></i>501 outline</span>` : ""}<span>${e.fly === "zip" ? "Zip fly" : "Button fly"}</span></div>
      </div>
      <div class="dlg-body">
        <button class="close" aria-label="Close">×</button>
        ${lineTag(e.line)}
        <h2>${e.lot !== "×" ? `<span class="mono">${esc(e.lot)}</span> · ` : ""}${esc(e.name)}</h2>
        <p class="sub">${yearLabel(e)}</p>
        <p>${esc(e.summary)}</p>
        ${e.details && e.details.length ? `<h4>Details</h4><ul>${e.details.map(d => `<li>${esc(d)}</li>`).join("")}</ul>` : ""}
        <h4>See real photos</h4>
        <div class="photo-links">
          <a class="btn primary" href="https://www.google.com/search?tbm=isch&q=${q}" target="_blank" rel="noopener">Google Images ↗</a>
          <a class="btn" href="https://www.ebay.com/sch/i.html?_nkw=${q}" target="_blank" rel="noopener">eBay listings ↗</a>
          <a class="btn" href="https://www.pinterest.com/search/pins/?q=${q}" target="_blank" rel="noopener">Pinterest ↗</a>
        </div>
        <h4>Your photos</h4>${photos}
        <h4>Sources</h4>
        <ul class="sources">${(e.sources || []).map(s => `<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)}</a></li>`).join("")}</ul>
      </div>`;
    const dlg = $("#detail");
    if (!dlg.open) dlg.showModal();
    $(".close", dlg).onclick = () => dlg.close();
    if (location.hash !== "#/" + id) history.replaceState(null, "", "#/" + id);
  }
  $("#detail").addEventListener("close", () => history.replaceState(null, "", location.pathname + location.search));
  $("#detail").addEventListener("click", ev => { if (ev.target.id === "detail") ev.target.close(); });

  /* ---------- Events ---------- */
  document.addEventListener("click", ev => {
    const open = ev.target.closest("[data-open]");
    if (open) return openDetail(open.dataset.open);
    const tab = ev.target.closest("[data-view]");
    if (tab) { state.view = tab.dataset.view; return render(); }
    const chip = ev.target.closest("[data-line]");
    if (chip) {
      const k = chip.dataset.line;
      if (k === "__all") state.lines = new Set(Object.keys(LINES));
      else if (ev.altKey || ev.metaKey) state.lines = new Set([k]);
      else state.lines.has(k) ? state.lines.delete(k) : state.lines.add(k);
      try { localStorage.setItem("levis-archive-lines", JSON.stringify([...state.lines])); } catch (e) {}
      renderChips(); render();
    }
  });
  $("#search").addEventListener("input", ev => { state.q = ev.target.value.trim(); render(); });

  renderChips(); render();
  const m = location.hash.match(/^#\/(.+)$/);
  if (m) openDetail(decodeURIComponent(m[1]));
})();
