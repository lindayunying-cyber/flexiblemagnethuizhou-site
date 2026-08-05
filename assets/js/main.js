/* ============================================
   Flexible Magnet (Huizhou).com — main.js
   Render logic: categories, product cards, product detail, inquiry form
   ============================================ */

// ----- URL helper -----
function getQuery(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

// ----- Home: product series -----
function renderCategoriesHome(targetId) {
  const el = document.getElementById(targetId);
  if (!el || typeof CATEGORIES === 'undefined') return;
  el.innerHTML = CATEGORIES.filter(cat => cat.slug !== 'all').map(cat => `
    <a href="products.html?cat=${cat.slug}" class="cat-card ${cat.color}">
      ${cat.tier ? `<div class="cat-card-tier">${cat.tier}</div>` : ''}
      <div class="cat-card-count">${cat.count ? `${cat.count} products` : 'Custom development'}</div>
      <div class="cat-card-bg">${cat.name.split(' ')[0].charAt(0)}</div>
      <div class="cat-card-overlay">
        <h3>${cat.name}</h3>
        <p>${cat.desc}</p>
      </div>
    </a>
  `).join('');
}

// ----- Product card HTML (v4.3 - Refined B2B Layout) -----
function productCardHTML(p) {
  // Only ONE marketing badge on image
  const badge = p.badge ? `<div class="product-card-badge">${p.badge}</div>` : '';
  
  // Extracting Metadata (Strict 3-Column Standard: MOQ, Lead Time, Customization)
  const moqVal = p.specs && p.specs['MOQ'] ? p.specs['MOQ'] : `${p.moq}+ Pcs`;
  const leadTime = p.specs && p.specs['Lead Time'] ? p.specs['Lead Time'] : '15 Days';
  const customVal = p.specs && p.specs['Customization'] ? p.specs['Customization'] : 'Custom Design';
  const appBadge = p.app_badge || 'Industrial';

  // Standardized Feature Tags (Strictly 3 - descriptive of features only)
  const tagList = [];
  if (p.features && p.features[0]) tagList.push(p.features[0].title);
  if (p.features && p.features[1]) tagList.push(p.features[1].title);
  if (p.features && p.features[2]) tagList.push(p.features[2].title);
  const tagsHTML = tagList.map(tag => `<span class="spec-tag">${tag.toUpperCase()}</span>`).join('');

  return `
    <div class="product-card">
      <div class="product-card-img">
        ${badge}
        <a href="product.html?p=${p.slug}" style="display:block; width:100%; height:100%;">
          <img src="assets/img/products/${p.sku.toLowerCase()}/main.png" 
               alt="${p.name}" 
               loading="lazy"
               style="width:100%; height:100%; object-fit:cover; display:block;"
               onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'padding:20px; color:var(--c-coffee-soft);\'>${p.name}</div>';">
        </a>
      </div>
      <div class="product-card-body">
        <a href="product.html?p=${p.slug}"><h3>${p.name}</h3></a>
        
        <div class="product-card-desc-wrap">
          <p class="product-card-desc">
            ${p.tagline}
          </p>
        </div>

        <div class="product-app-badge-wrap">
          <div class="product-app-badge">${appBadge}</div>
        </div>

        <div class="product-meta-grid">
          <div class="meta-item">
            <span class="meta-label">MOQ</span>
            <span class="meta-value">${moqVal}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Lead Time</span>
            <span class="meta-value">${leadTime}</span>
          </div>
          <div class="meta-item">
            <span class="meta-label">Customization</span>
            <span class="meta-value">${customVal}</span>
          </div>
        </div>

        <div class="spec-tags">
          ${tagsHTML}
        </div>
      </div>
      <div class="product-card-actions">
        <a href="https://wa.me/8613129581959?text=Inquiry:%20${encodeURIComponent(p.name)}" class="btn-quote">Request Quote</a>
      </div>
    </div>
  `;
}


// ----- Home: featured products -----
function renderFeaturedProducts(targetId, slugs) {
  const el = document.getElementById(targetId);
  if (!el || typeof PRODUCTS === 'undefined') return;
  const items = slugs.map(s => getProduct(s)).filter(Boolean);
  el.innerHTML = items.map(productCardHTML).join('');
}

// ----- Products page: render list with filter -----
function renderProductsPage() {
  const grid = document.getElementById('productGrid');
  const chipsEl = document.getElementById('filterChips');
  const countEl = document.getElementById('resultCount');
  const titleEl = document.getElementById('pageTitle');
  const descEl = document.getElementById('pageDesc');
  if (!grid) return;

  const currentCat = getQuery('cat') || 'all';
  const currentSub = getQuery('sub') || '';

  // Update page header by main category
  const catObj = getCategory(currentCat);
  if (titleEl && catObj && currentCat !== 'all') {
    titleEl.textContent = catObj.name;
    if (descEl) descEl.textContent = catObj.desc;
  } else if (titleEl) {
    titleEl.textContent = 'All Products';
    if (descEl) descEl.textContent = 'Browse custom magnetic products across five material and manufacturing-process series, from flat printed magnets to dimensional resin collections.';
  }

  // Top chips: product series plus All Products
  if (chipsEl) {
    chipsEl.innerHTML = CATEGORIES.map(c => `
      <a href="products.html?cat=${c.slug}" class="chip ${currentCat === c.slug ? 'active' : ''}">${c.name}</a>
    `).join('');
  }

  // Sub-category chips (Removed in v3.0 process-based categorization)
  const subEl = document.getElementById('subChips');
  if (subEl) subEl.style.display = 'none';

  // Filter products
  let items = getProductsByCategory(currentCat);

  if (countEl) countEl.textContent = `${items.length} product${items.length !== 1 ? 's' : ''}`;
  grid.innerHTML = items.length
    ? items.map(productCardHTML).join('')
    : '<p style="text-align:center; color:var(--c-coffee-soft); grid-column:1/-1; padding:60px 0;">No products in this category yet. <a href="contact.html" style="color:var(--c-orange);">Request custom</a></p>';
}

// ----- Product detail page -----
function renderProductDetail() {
  const wrap = document.getElementById('pdWrap');
  if (!wrap) return;
  const slug = getQuery('p');
  const p = getProduct(slug);
  if (!p) {
    wrap.innerHTML = '<div class="container" style="padding:80px 0; text-align:center;"><h2>Product not found</h2><p style="margin:20px 0;">The product you are looking for does not exist.</p><a href="products.html" class="btn btn-primary btn-arrow">Browse all products</a></div>';
    return;
  }

  const breadcrumbCat = getCategory(p.category);
  const tiersHTML = p.tiers.map((t, i) => `
    <div class="pd-tier ${i === 1 ? 'recommended' : ''}">
      <div class="qty">${t.qty}</div>
      <div class="price">${t.price}</div>
    </div>
  `).join('');

  const specsHTML = Object.entries(p.specs).map(([k, v]) => `
    <tr><td>${k}</td><td>${v}</td></tr>
  `).join('');

  const featuresHTML = p.features.map(f => `
    <div class="pd-feature">
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');

  wrap.innerHTML = `
    <div class="container">
      <div class="breadcrumb">
        <a href="index.html">Home</a> <span class="sep">/</span>
        <a href="products.html?cat=${p.category}">${breadcrumbCat ? breadcrumbCat.name : 'Products'}</a>
        <span class="sep">/</span> ${p.sku}
      </div>
      <div class="pd-grid">
        <div class="pd-gallery">
          <div class="pd-main-img" id="pdMainImg">
            <img src="assets/img/products/${p.sku.toLowerCase()}/main.png"
                 alt="${p.name} — Main"
                 onerror="this.style.display='none'; this.parentElement.classList.add('placeholder'); this.parentElement.innerHTML='${p.name.replace(/'/g, "\\'")}<br><span style=\\'font-size:.9rem; color:var(--c-coffee-soft); font-weight:500; margin-top:12px; display:block;\\'>[ Product photo placeholder ]</span>';">
          </div>
          <div class="pd-thumbs" id="pdThumbs">
            ${['main', 'detail', 'scale', 'pack'].map((kind, i) => `
              <div class="pd-thumb ${i === 0 ? 'active' : ''}" data-kind="${kind}" data-sku="${p.sku.toLowerCase()}">
                <img src="assets/img/products/${p.sku.toLowerCase()}/${kind}.png"
                     alt="${kind}"
                     onerror="this.style.display='none'; this.parentElement.classList.add('placeholder'); this.parentElement.innerHTML='${kind.charAt(0).toUpperCase() + kind.slice(1)}';">
              </div>
            `).join('')}
          </div>
        </div>
        <div class="pd-info">
          <div style="font-size:.8rem; color:var(--c-orange); font-weight:700; letter-spacing:.1em; text-transform:uppercase;">${p.sku}</div>
          <h1>${p.name}</h1>
          <p style="color:var(--c-coffee-mid); font-size:1.05rem; line-height:1.7;">${p.tagline}</p>
          <div class="pd-meta">
            <span>OEM / ODM</span>
            <span>Custom Design</span>
            <span>Sample Available</span>
          </div>
          <div class="pd-price-box">
            <div class="pd-price-tiers">${tiersHTML}</div>
            <div class="pd-moq">
              <div><strong>MOQ:</strong> ${p.moq} pcs</div>
              <div><strong>Sample:</strong> Available</div>
              <div><strong>Payment:</strong> T/T 30% + 70% / L/C / PayPal</div>
            </div>
          </div>
          <div class="pd-actions">
            <a href="contact.html?p=${encodeURIComponent(p.slug)}" class="btn btn-primary btn-arrow">Request Quote</a>
            <a href="https://wa.me/8613129581959?text=${encodeURIComponent(`Hi, I would like a quote for ${p.name}.`)}" class="btn btn-outline" target="_blank" rel="noopener">WhatsApp</a>
          </div>
          <div class="pd-specs">
            <h3>Specifications</h3>
            <table><tbody>${specsHTML}</tbody></table>
          </div>
        </div>
      </div>
    </div>
    <section class="pd-section">
      <div class="container">
        <h2>Why this product wins for your buyers</h2>
        <div class="pd-feature-grid">${featuresHTML}</div>
      </div>
    </section>
  `;

  // ----- Thumbnail click → swap main image -----
  const thumbs = wrap.querySelectorAll('#pdThumbs .pd-thumb');
  const mainBox = wrap.querySelector('#pdMainImg');
  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const kind = thumb.dataset.kind;
      const sku = thumb.dataset.sku;
      if (!kind || !sku) return;
      // Reset main box
      mainBox.classList.remove('placeholder');
      mainBox.innerHTML = `<img src="assets/img/products/${sku}/${kind}.png"
                                alt="${p.name} — ${kind}"
                                onerror="this.style.display='none'; this.parentElement.classList.add('placeholder'); this.parentElement.innerHTML='${p.name.replace(/'/g, "\\'")} — ${kind}<br><span style=\\'font-size:.9rem; color:var(--c-coffee-soft); font-weight:500; margin-top:12px; display:block;\\'>[ Photo coming soon ]</span>';">`;
      // Toggle active state
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
    });
  });
}

// ----- Inquiry form (secure async submit) -----
function setupInquiryForm() {
  const form = document.getElementById('inquiryForm');
  if (!form || form.dataset.bound === 'true') return;
  form.dataset.bound = 'true';

  const productSlug = getQuery('p');
  if (productSlug) {
    const product = getProduct(productSlug);
    const productField = form.querySelector('[name="product_type"]');
    if (product && productField && !productField.value) productField.value = product.name;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const submitButton = form.querySelector('button[type="submit"]');
    const success = document.getElementById('formSuccess');
    const endpoint = form.dataset.submitEndpoint || '/api/inquiry';

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.dataset.originalText = submitButton.textContent;
      submitButton.textContent = 'SENDING...';
    }
    if (success) {
      success.style.display = 'block';
      success.className = 'form-success';
      success.textContent = 'Sending your project brief...';
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Submission failed');
      form.reset();
      const fileName = document.getElementById('qfFileName');
      if (fileName) fileName.textContent = 'No file selected';
      if (success) {
        success.className = 'form-success show';
        success.innerHTML = '<strong>Thank you — your project brief has been sent.</strong><br>Our team will review your requirements and reply by email.';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (typeof gtag === 'function') gtag('event', 'inquiry_form_submit');
    } catch (error) {
      if (success) {
        success.className = 'form-success show form-error';
        success.innerHTML = '<strong>We could not send the form.</strong><br>Please email <a href="mailto:sales08@flexiblemagnetchina.com">sales08@flexiblemagnetchina.com</a> or contact us on WhatsApp.';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || 'SEND PROJECT BRIEF';
      }
    }
  });
}

function setupAnalyticsEvents() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a');
    if (!link || typeof gtag !== 'function') return;
    if (link.href.startsWith('https://wa.me/')) gtag('event', 'whatsapp_click');
    if (link.href.startsWith('mailto:')) gtag('event', 'email_click');
    if (link.classList.contains('btn-quote')) gtag('event', 'request_quote_click');
  });
}

// ----- Auto-init based on page -----
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('productGrid')) renderProductsPage();
  if (document.getElementById('pdWrap')) renderProductDetail();
  if (document.getElementById('inquiryForm')) setupInquiryForm();
  setupAnalyticsEvents();
});

// ----- WhatsApp Floating Button (auto-inject on every page) -----
function injectWhatsAppFAB() {
  if (document.getElementById('waFab')) return;
  const phone = '8613129581959';
  const msg = encodeURIComponent("Hi! I saw your magnet products on Flexible Magnet (Huizhou).com and would like a quote.");
  const a = document.createElement('a');
  a.id = 'waFab';
  a.href = `https://wa.me/${phone}?text=${msg}`;
  a.target = '_blank';
  a.rel = 'noopener';
  a.setAttribute('aria-label', 'Chat with us on WhatsApp');
  a.innerHTML = `
    <svg viewBox="0 0 32 32" width="44" height="44" fill="#fff" aria-hidden="true">
      <path d="M16.001 3C9.373 3 4 8.373 4 15c0 2.385.696 4.61 1.892 6.49L4 29l7.7-1.85A12.94 12.94 0 0 0 16.001 27C22.628 27 28 21.627 28 15S22.628 3 16.001 3zm0 21.6c-1.86 0-3.6-.52-5.072-1.412l-.364-.216-4.572 1.099 1.12-4.453-.236-.376A9.563 9.563 0 0 1 6.4 15c0-5.292 4.31-9.6 9.601-9.6 5.291 0 9.6 4.308 9.6 9.6s-4.309 9.6-9.6 9.6zm5.265-7.18c-.288-.144-1.707-.842-1.972-.94-.265-.097-.458-.144-.65.144-.193.288-.747.94-.916 1.133-.169.193-.337.217-.625.073-.288-.145-1.217-.448-2.319-1.43-.857-.764-1.435-1.708-1.603-1.996-.169-.288-.018-.444.126-.587.13-.13.288-.337.433-.506.144-.169.192-.289.289-.482.097-.193.048-.361-.024-.505-.072-.144-.65-1.566-.891-2.146-.235-.564-.475-.488-.65-.497l-.554-.01c-.193 0-.506.072-.771.361-.265.289-1.012.988-1.012 2.41 0 1.422 1.036 2.795 1.18 2.989.144.193 2.038 3.114 4.94 4.367.69.298 1.227.476 1.647.609.692.22 1.321.189 1.819.115.555-.083 1.707-.698 1.948-1.371.241-.674.241-1.252.169-1.371-.072-.12-.265-.193-.553-.337z"/>
    </svg>
  `;
  document.body.appendChild(a);
}

// ----- Right-Bottom Get Quote Floating Button -----
function injectQuoteFAB() {
  if (document.getElementById('quoteFab')) return;
  // 当前页就是 contact.html 时不显示（避免冗余）
  if (location.pathname.toLowerCase().endsWith('contact.html')) return;
  const a = document.createElement('a');
  a.id = 'quoteFab';
  a.href = 'contact.html';
  a.setAttribute('aria-label', 'Request a Quote');
  a.innerHTML = `<span class="quote-fab-icon">✉️</span><span class="quote-fab-text">Request a Quote</span>`;
  document.body.appendChild(a);
}

document.addEventListener('DOMContentLoaded', () => {
  injectWhatsAppFAB();
  injectQuoteFAB();
});
