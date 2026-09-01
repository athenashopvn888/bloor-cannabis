/* Bloor Cannabis — age gate, weight chips, reserve modal */
(function () {
  'use strict';

  /* ---- age gate (19+) ---- */
  var gate = document.getElementById('qcdGate');
  if (gate) {
    var ok = false;
    try { ok = localStorage.getItem('qcd_age_ok') === '1'; } catch (e) {}
    if (!ok) {
      gate.hidden = false;
      document.body.style.overflow = 'hidden';
      gate.querySelector('[data-gate-yes]').addEventListener('click', function () {
        try { localStorage.setItem('qcd_age_ok', '1'); } catch (e) {}
        gate.hidden = true;
        document.body.style.overflow = '';
      });
      gate.querySelector('[data-gate-no]').addEventListener('click', function () {
        window.location.href = 'https://www.google.com';
      });
    }
  }

  /* ---- weight chips: click switches active + updates the card/single price ---- */
  document.addEventListener('click', function (ev) {
    var chip = ev.target.closest('.qcd-chip');
    if (!chip || chip.getAttribute('data-out')) return;
    var wrap = chip.closest('.qcd-weights');
    if (!wrap) return;
    wrap.querySelectorAll('.qcd-chip').forEach(function (c) { c.classList.remove('qcd-active'); });
    chip.classList.add('qcd-active');
    var price = chip.getAttribute('data-price');
    if (price === null) return;
    var card = chip.closest('.product-card');
    if (card) {
      var el = card.querySelector('.product-card__price');
      if (el) el.innerHTML = '$' + price + '<small> in store</small>';
    }
    var single = document.querySelector('[data-single-price]');
    if (single && chip.closest('.single-info')) single.textContent = price;
  });

  /* ---- catalog filtering + sorting (Queensway-style) ---- */
  var grid = document.querySelector('[data-catalog-grid]');
  if (grid) {
    var cards = [].slice.call(grid.querySelectorAll('.product-card'));
    var boxes = [].slice.call(document.querySelectorAll('[data-filter]'));
    var searchEl = document.querySelector('[data-catalog-search]');
    var sortEl = document.querySelector('[data-catalog-sort]');
    var countEl = document.querySelector('[data-results-count]');
    var chipsEl = document.querySelector('[data-active-filters]');
    var noneEl = document.querySelector('[data-no-results]');
    var clearBtns = [].slice.call(document.querySelectorAll('[data-filters-clear]'));
    var sidebar = document.querySelector('[data-catalog-sidebar]');
    var toggle = document.querySelector('[data-filters-toggle]');
    var statusRank = { ok: 0, low: 1, ask: 2 };
    var priceBucket = function (p) { return p < 15 ? 'u15' : p < 30 ? 'p15_30' : p < 50 ? 'p30_50' : 'p50'; };
    var bucketLabels = { u15: 'Under $15', p15_30: '$15 – $30', p30_50: '$30 – $50', p50: '$50 +' };
    var statusLabels = { ok: 'Available', low: 'Low Stock', ask: 'Ask In Store' };

    function activeSets() {
      var sets = { status: [], tier: [], price: [] };
      boxes.forEach(function (b) { if (b.checked) sets[b.getAttribute('data-filter')].push(b.value); });
      return sets;
    }
    function apply() {
      var sets = activeSets();
      var q = searchEl ? searchEl.value.trim().toLowerCase() : '';
      var shown = 0;
      cards.forEach(function (c) {
        var okStatus = !sets.status.length || sets.status.indexOf(c.getAttribute('data-status')) > -1;
        var okTier = !sets.tier.length || sets.tier.indexOf(c.getAttribute('data-tier')) > -1;
        var okPrice = !sets.price.length || sets.price.indexOf(priceBucket(parseFloat(c.getAttribute('data-price')) || 0)) > -1;
        var okSearch = !q || (c.getAttribute('data-name') || '').indexOf(q) > -1;
        var show = okStatus && okTier && okPrice && okSearch;
        c.style.display = show ? '' : 'none';
        if (show) shown++;
      });
      if (countEl) countEl.textContent = shown;
      if (noneEl) noneEl.hidden = shown !== 0;
      // active chips
      if (chipsEl) {
        chipsEl.innerHTML = '';
        var anyFilter = false;
        boxes.forEach(function (b) {
          if (!b.checked) return;
          anyFilter = true;
          var kind = b.getAttribute('data-filter');
          var label = kind === 'status' ? statusLabels[b.value] : kind === 'price' ? bucketLabels[b.value] : b.value;
          var chip = document.createElement('button');
          chip.type = 'button';
          chip.className = 'filter-chip';
          chip.innerHTML = label + ' <span aria-hidden="true">×</span>';
          chip.addEventListener('click', function () { b.checked = false; apply(); });
          chipsEl.appendChild(chip);
        });
        clearBtns.forEach(function (cb) { if (cb.classList.contains('filters-clear')) cb.hidden = !anyFilter; });
      }
      sort();
    }
    function sort() {
      var mode = sortEl ? sortEl.value : 'featured';
      var sorted = cards.slice().sort(function (a, b) {
        var pa = parseFloat(a.getAttribute('data-price')) || 0, pb = parseFloat(b.getAttribute('data-price')) || 0;
        var na = a.getAttribute('data-name') || '', nb = b.getAttribute('data-name') || '';
        if (mode === 'price-asc') return pa - pb;
        if (mode === 'price-desc') return pb - pa;
        if (mode === 'name') return na < nb ? -1 : 1;
        if (mode === 'newest') return (b.getAttribute('data-date') || '') < (a.getAttribute('data-date') || '') ? -1 : 1;
        var ra = statusRank[a.getAttribute('data-status')] || 0, rb = statusRank[b.getAttribute('data-status')] || 0;
        return ra !== rb ? ra - rb : (na < nb ? -1 : 1);
      });
      sorted.forEach(function (c) { grid.appendChild(c); });
    }
    boxes.forEach(function (b) { b.addEventListener('change', apply); });
    if (searchEl) searchEl.addEventListener('input', apply);
    if (sortEl) sortEl.addEventListener('change', sort);
    clearBtns.forEach(function (cb) { cb.addEventListener('click', function () { boxes.forEach(function (b) { b.checked = false; }); if (searchEl) searchEl.value = ''; apply(); }); });
    if (toggle && sidebar) toggle.addEventListener('click', function () { sidebar.classList.toggle('open'); });
    apply();
  }

  /* ---- reserve modal ---- */
  var modal = document.getElementById('qcdRsv');
  var currentItem = '';
  document.addEventListener('click', function (ev) {
    var btn = ev.target.closest('[data-rsv-add]');
    if (!btn || !modal) return;
    currentItem = btn.getAttribute('data-rsv-add');
    var card = btn.closest('.product-card, .single-info');
    var name = card ? (card.querySelector('.product-card__name, h1') || {}).textContent : currentItem;
    modal.querySelector('[data-rsv-item-label]').textContent = (name || '').trim();
    modal.querySelector('[data-rsv-msg]').hidden = true;
    modal.hidden = false;
  });
  if (modal) {
    modal.querySelector('[data-rsv-close]').addEventListener('click', function () { modal.hidden = true; });
    modal.querySelector('[data-rsv-send]').addEventListener('click', function () {
      var name = modal.querySelector('[data-rsv-name]').value.trim();
      var phone = modal.querySelector('[data-rsv-phone]').value.trim();
      var msg = modal.querySelector('[data-rsv-msg]');
      if (!name || !phone) { msg.textContent = 'Please add your name and phone number.'; msg.hidden = false; return; }
      var body = new URLSearchParams();
      body.set('action', 'qcd_reserve');
      body.set('nonce', (window.QCD_AJAX || {}).nonce || '');
      body.set('item', currentItem);
      body.set('name', name);
      body.set('phone', phone);
      fetch((window.QCD_AJAX || {}).url || '/wp-admin/admin-ajax.php', { method: 'POST', body: body, credentials: 'same-origin' })
        .then(function (r) { return r.json(); })
        .then(function (j) {
          msg.textContent = j && j.data && j.data.msg ? j.data.msg : (j.success ? 'Reserved.' : 'Something went wrong — call us instead.');
          msg.hidden = false;
          if (j.success) setTimeout(function () { modal.hidden = true; }, 2600);
        })
        .catch(function () { msg.textContent = 'Network error — call us at (437) 223-9353.'; msg.hidden = false; });
    });
  }
})();
