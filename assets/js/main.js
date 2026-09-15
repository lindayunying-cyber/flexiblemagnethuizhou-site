/* ============================================
   Flexible Magnet (Huizhou).com — main.js
   Render logic: categories, product cards, product detail, inquiry form
   ============================================ */

// ----- URL helper -----
function getQuery(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

const SITE_ORIGIN = 'https://www.flexiblemagnethuizhou.com';
const SITE_LANGUAGE = document.documentElement.lang === 'es' || window.location.pathname.startsWith('/es/') ? 'es' : 'en';

function translateUi(text) {
  if (SITE_LANGUAGE !== 'es' || typeof FMH_ES === 'undefined') return text;
  return FMH_ES.ui[text] || text;
}

function localizedPagePath(path) {
  if (SITE_LANGUAGE !== 'es') return path;
  if (path === '/') return '/es/';
  return path.startsWith('/es/') ? path : `/es${path}`;
}

function productDetailHref(slug) {
  const encodedSlug = encodeURIComponent(slug);
  return SITE_LANGUAGE === 'es' ? `product.html?p=${encodedSlug}` : `/product?p=${encodedSlug}`;
}

function normalizeProductHref(href) {
  if (SITE_LANGUAGE === 'es' || typeof href !== 'string') return href;
  return href.replace(/^(?:\.\.\/)?product\.html\?p=/, '/product?p=');
}

function productCanonicalPath(slug = '') {
  const pagePath = SITE_LANGUAGE === 'es' ? '/product.html' : '/product';
  return slug ? `${pagePath}?p=${encodeURIComponent(slug)}` : pagePath;
}

function localizedAssetPath(assetPath) {
  if (SITE_LANGUAGE === 'es' && typeof assetPath === 'string' && assetPath.startsWith('assets/')) return `/${assetPath}`;
  return assetPath;
}

function absoluteAssetUrl(assetPath) {
  return `${SITE_ORIGIN}/${String(assetPath || '').replace(/^\/+/, '')}`;
}

function localizeCategory(category) {
  if (!category || SITE_LANGUAGE !== 'es' || typeof FMH_ES === 'undefined') return category;
  const translated = FMH_ES.categories[category.slug];
  return translated ? { ...category, ...translated } : category;
}

function localizeSubcategory(subcategory) {
  if (!subcategory || SITE_LANGUAGE !== 'es' || typeof FMH_ES === 'undefined') return subcategory;
  const translatedName = FMH_ES.subcategories[subcategory.slug];
  return translatedName ? { ...subcategory, name: translatedName, seoH1: translatedName } : subcategory;
}

function localizeProduct(product) {
  if (!product || SITE_LANGUAGE !== 'es' || typeof FMH_ES === 'undefined') return product;
  const translated = FMH_ES.products[product.slug] || {};
  return {
    ...product,
    ...translated,
    aliases: product.aliases,
    category: product.category,
    imageSku: product.imageSku,
    imageSlots: Array.isArray(product.imageSlots)
      ? product.imageSlots.map((slot) => ({
        ...slot,
        src: localizedAssetPath(slot.src),
        label: translateUi(slot.label),
        alt: slot.alt ? slot.alt.replace(product.name, translated.name || product.name) : slot.alt
      }))
      : product.imageSlots,
    public: product.public,
    publicationStatus: product.publicationStatus,
    slug: product.slug,
    sku: product.sku,
    specs: { ...(product.specs || {}), ...(translated.specs || {}) },
    technicalSpecifications: product.technicalSpecifications
      ? { ...product.technicalSpecifications, ...(translated.technicalSpecifications || {}) }
      : translated.technicalSpecifications
  };
}

function siteUrl(path) {
  return `${SITE_ORIGIN}${path}`;
}

function languageVersionPath(language) {
  const spanishPilotByEnglishPath = new Map([
    ['/', '/es/'],
    ['/products', '/es/products.html'],
    ['/product', '/es/product.html'],
    ['/contact', '/es/contact.html']
  ]);
  const cleanEnglishPaths = new Map([
    ['/index.html', '/'],
    ['/products.html', '/products'],
    ['/product.html', '/product'],
    ['/contact.html', '/contact']
  ]);
  const sourceEnglishPath = window.location.pathname.replace(/^\/es(?=\/)/, '') || '/';
  const englishPath = cleanEnglishPaths.get(sourceEnglishPath) || sourceEnglishPath;
  const targetPath = language === 'es'
    ? (spanishPilotByEnglishPath.get(englishPath) || `/es${englishPath}`)
    : englishPath;
  return `${targetPath}${window.location.search}${window.location.hash}`;
}

function setupLanguageNavigation() {
  const spanishPilotPaths = new Set(['/', '/index.html', '/products', '/products.html', '/product', '/product.html', '/contact', '/contact.html']);
  const currentEnglishPath = window.location.pathname.replace(/^\/es(?=\/)/, '') || '/';
  if (!spanishPilotPaths.has(currentEnglishPath)) return;
  const englishHref = languageVersionPath('en');
  const spanishHref = languageVersionPath('es');
  const head = document.head;
  [['en', englishHref], ['es', spanishHref]].forEach(([language, href]) => {
    let link = head.querySelector(`link[rel="alternate"][hreflang="${language}"]`);
    if (!link) {
      link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = language;
      head.appendChild(link);
    }
    link.href = siteUrl(href.split('#')[0]);
  });
  if (englishHref.split(/[?#]/)[0] === '/') {
    let defaultLink = head.querySelector('link[rel="alternate"][hreflang="x-default"]');
    if (!defaultLink) {
      defaultLink = document.createElement('link');
      defaultLink.rel = 'alternate';
      defaultLink.hreflang = 'x-default';
      head.appendChild(defaultLink);
    }
    defaultLink.href = `${SITE_ORIGIN}/`;
  }

  const navList = document.getElementById('primaryNavMenu');
  if (!navList || navList.querySelector('.nav-language-switcher')) return;
  const item = document.createElement('li');
  item.className = 'nav-language-switcher';
  item.setAttribute('aria-label', SITE_LANGUAGE === 'es' ? 'Selector de idioma' : 'Language selector');
  item.innerHTML = `<a href="${englishHref}" lang="en"${SITE_LANGUAGE === 'en' ? ' aria-current="page"' : ''}>English</a><span aria-hidden="true">/</span><a href="${spanishHref}" lang="es"${SITE_LANGUAGE === 'es' ? ' aria-current="page"' : ''}>Español</a>`;
  const mobileCta = navList.querySelector('.nav-mobile-cta');
  navList.insertBefore(item, mobileCta || null);
}

// ----- Accessible homepage navigation -----
function setupPrimaryNavigation() {
  const nav = document.getElementById('mainNav');
  if (!nav || nav.dataset.navigationBound === 'true') return;
  nav.dataset.navigationBound = 'true';

  const toggle = nav.querySelector('.nav-toggle');
  const triggers = [...nav.querySelectorAll('.nav-trigger')];
  nav.querySelectorAll('a[data-draft-product]').forEach((link) => {
    link.hidden = !isLocalDevelopmentMode();
  });

  const closeSubmenus = (exceptItem = null) => {
    triggers.forEach((trigger) => {
      const item = trigger.closest('.nav-item');
      if (item !== exceptItem) {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  };

  const closeMobileMenu = () => {
    nav.classList.remove('mobile-open');
    document.body.classList.remove('nav-open');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open navigation menu');
    }
    closeSubmenus();
  };

  if (toggle) {
    toggle.addEventListener('click', () => {
      const willOpen = !nav.classList.contains('mobile-open');
      nav.classList.toggle('mobile-open', willOpen);
      document.body.classList.toggle('nav-open', willOpen);
      toggle.setAttribute('aria-expanded', String(willOpen));
      toggle.setAttribute('aria-label', willOpen ? 'Close navigation menu' : 'Open navigation menu');
      if (!willOpen) closeSubmenus();
    });
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.nav-item');
      const willOpen = !item.classList.contains('is-open');
      closeSubmenus(item);
      item.classList.toggle('is-open', willOpen);
      trigger.setAttribute('aria-expanded', String(willOpen));
    });
  });

  nav.addEventListener('click', (event) => {
    if (event.target.closest('a') && window.matchMedia('(max-width: 880px)').matches) closeMobileMenu();
  });

  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target)) closeSubmenus();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const activeTrigger = triggers.find((trigger) => trigger.getAttribute('aria-expanded') === 'true');
    closeMobileMenu();
    if (activeTrigger) activeTrigger.focus();
    else if (toggle && window.matchMedia('(max-width: 880px)').matches) toggle.focus();
  });

  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 880px)').matches) closeMobileMenu();
  });
}

// ----- Home: product series -----
function renderCategoriesHome(targetId) {
  const el = document.getElementById(targetId);
  if (!el || typeof CATEGORIES === 'undefined') return;
  el.innerHTML = CATEGORIES.filter(cat => cat.slug !== 'all').map(localizeCategory).map(cat => `
    <a href="products.html?cat=${cat.slug}" class="cat-card ${cat.color}">
      ${cat.tier ? `<div class="cat-card-tier">${cat.tier}</div>` : ''}
      <div class="cat-card-count">${cat.count ? `${cat.count} ${translateUi('products')}` : translateUi('Custom development')}</div>
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
  p = localizeProduct(p);
  // Only ONE marketing badge on image
  const badge = p.badge ? `<div class="product-card-badge">${p.badge}</div>` : '';
  
  // Extracting Metadata (Strict 3-Column Standard: MOQ, Lead Time, Customization)
  const moqVal = p.specs && p.specs['MOQ'] ? p.specs['MOQ'] : `${p.moq}+ Pcs`;
  const leadTime = p.specs && p.specs['Bulk Production'] ? p.specs['Bulk Production'] : '15–30 calendar days';
  const customVal = p.listingCustomization
    || (p.specs && p.specs['Customization'] ? p.specs['Customization'] : 'Custom Design');
  const appBadge = p.app_badge || 'Industrial';

  // Standardized Feature Tags (Strictly 3 - descriptive of features only)
  const tagList = Array.isArray(p.listingTags)
    ? p.listingTags.slice(0, 3)
    : [
      p.features && p.features[0] ? p.features[0].title : '',
      p.features && p.features[1] ? p.features[1].title : '',
      p.features && p.features[2] ? p.features[2].title : ''
    ].filter(Boolean);
  const tagsHTML = tagList.map(tag => `<span class="spec-tag">${tag.toUpperCase()}</span>`).join('');

  return `
    <div class="product-card">
      <div class="product-card-img">
        ${badge}
        <a href="${productDetailHref(p.slug)}" class="product-card-media-link">
          <img src="${productImagePath(p, 'main')}"
               alt="${p.name}"
               width="1200"
               height="1200"
               loading="lazy"
               decoding="async"
               class="product-card-image">
          <span class="product-card-image-fallback" hidden>${p.name}</span>
        </a>
      </div>
      <div class="product-card-body">
        <a href="${productDetailHref(p.slug)}"><h3>${p.name}</h3></a>
        <div class="spec-tags">
          ${tagsHTML}
        </div>
        <div class="pd-moq"><strong>${translateUi('MOQ')}:</strong><span>${translateUi(moqVal)}</span></div>
      </div>
      <div class="product-card-actions">
        <a href="${productDetailHref(p.slug)}" class="btn-quote">${translateUi('View Details')}</a>
      </div>
    </div>
  `;
}


// ----- Home: featured products -----
function renderFeaturedProducts(targetId, slugs) {
  const el = document.getElementById(targetId);
  if (!el || typeof PRODUCTS === 'undefined') return;
  const items = slugs.map(s => getProduct(s)).filter(p => p && isPublicProduct(p));
  el.innerHTML = items.map(productCardHTML).join('');
}

function setupHomepageMedia() {
  document.addEventListener('error', (event) => {
    const image = event.target.closest && event.target.closest('.product-card-image');
    if (!image) return;
    image.hidden = true;
    const fallback = image.parentElement.querySelector('.product-card-image-fallback');
    if (fallback) fallback.hidden = false;
  }, true);

  const videos = [...document.querySelectorAll('video[data-lazy-video]')];
  const loadVideo = (video) => {
    if (video.dataset.loaded === 'true') return;
    video.querySelectorAll('source[data-src]').forEach((source) => {
      source.src = source.dataset.src;
      source.removeAttribute('data-src');
    });
    video.dataset.loaded = 'true';
    video.load();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      video.play().catch(() => {});
    }
  };
  if (!('IntersectionObserver' in window)) {
    videos.forEach(loadVideo);
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      loadVideo(entry.target);
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '320px 0px' });
  videos.forEach(video => observer.observe(video));
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
  const listingOptions = { includeDrafts: isLocalDevelopmentMode() };

  // Update page header and SEO metadata by customer-facing category.
  const catObj = localizeCategory(getCategory(currentCat) || getCategory('all'));
  const subObj = currentSub ? localizeSubcategory(getSubcategory(currentSub)) : null;
  const pageMeta = subObj && subObj.family === currentCat ? subObj : catObj;
  if (titleEl && pageMeta) {
    titleEl.textContent = pageMeta.seoH1 || pageMeta.name;
    if (descEl) descEl.textContent = pageMeta.desc || pageMeta.seoDescription || catObj.desc;
    document.title = pageMeta.seoTitle || `${pageMeta.name} | Flexible Magnet (Huizhou)`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && pageMeta.seoDescription) metaDescription.setAttribute('content', pageMeta.seoDescription);
    const canonical = document.querySelector('link[rel="canonical"]');
    const productsPagePath = SITE_LANGUAGE === 'es' ? '/products.html' : '/products';
    const productsCanonical = `${productsPagePath}${currentCat !== 'all' ? `?cat=${encodeURIComponent(currentCat)}${currentSub ? `&sub=${encodeURIComponent(currentSub)}` : ''}` : ''}`;
    if (canonical) canonical.setAttribute('href', siteUrl(localizedPagePath(productsCanonical)));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageMeta.ogTitle || pageMeta.seoTitle || pageMeta.name);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription && pageMeta.seoDescription) ogDescription.setAttribute('content', pageMeta.seoDescription);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', siteUrl(localizedPagePath(productsCanonical)));
  }

  // Top chips: buyer-facing product families plus All Products
  if (chipsEl) {
    const filterFamilies = typeof PRODUCT_FAMILIES !== 'undefined' ? PRODUCT_FAMILIES : [];
    chipsEl.innerHTML = [
      ...filterFamilies.map(c => `
        <a href="products.html?cat=${c.slug}" class="chip ${currentCat === c.slug ? 'active' : ''}">${c.name}</a>
      `),
      `<a href="products.html" class="chip ${currentCat === 'all' ? 'active' : ''}">All Products</a>`
    ].join('');
  }

  const subEl = document.getElementById('subChips');
  if (subEl) {
    const visibleProducts = typeof getProductsByCategory === 'function'
      ? getProductsByCategory(currentCat, listingOptions)
      : [];
    const subFilters = typeof SUBCATEGORY_FILTERS !== 'undefined'
      ? SUBCATEGORY_FILTERS.filter((item) => item.family === currentCat
        && visibleProducts.some((product) => product.category === currentCat && product.subcategorySlug === item.slug))
      : [];
    subEl.style.display = subFilters.length ? '' : 'none';
    subEl.innerHTML = subFilters.map(localizeSubcategory).map(item => `
      <a href="products.html?cat=${currentCat}&sub=${item.slug}" class="chip ${currentSub === item.slug ? 'active' : ''}">${item.name}</a>
    `).join('');
  }

  // Filter products
  let items = currentSub
    ? getProductsBySubcategory(currentCat, currentSub, listingOptions)
    : getProductsByCategory(currentCat, listingOptions);

  if (countEl) countEl.textContent = SITE_LANGUAGE === 'es'
    ? `${items.length} ${items.length === 1 ? translateUi('product') : translateUi('products')}`
    : `${items.length} product${items.length !== 1 ? 's' : ''}`;
  grid.innerHTML = items.length
    ? items.map(productCardHTML).join('')
    : '<p style="text-align:center; color:var(--c-coffee-soft); grid-column:1/-1; padding:60px 0;">No products match this filter yet. <a href="contact.html" style="color:var(--c-orange);">Request custom</a></p>';
}

// ----- Product detail page -----
function getProductFamily(product) {
  if (!product || typeof PRODUCT_FAMILIES === 'undefined') return null;
  return PRODUCT_FAMILIES.find((family) => family.slug === product.category || (family.productSlugs || []).includes(product.slug)) || null;
}

function productImagePath(product, kind = 'main') {
  const sku = product.imageSku || product.sku;
  return localizedAssetPath(`assets/img/products/${sku.toLowerCase()}/${kind}.png`);
}

function isLocalDevelopmentMode() {
  const hostname = window.location.hostname.toLowerCase();
  return hostname === 'localhost'
    || hostname === '127.0.0.1'
    || window.location.protocol === 'file:';
}

function isImageAuditMode() {
  const params = new URLSearchParams(window.location.search);
  return isLocalDevelopmentMode() || params.get('imageAudit') === '1';
}

function getProductImageSlots(product) {
  const explicitSlots = Array.isArray(product.imageSlots) ? product.imageSlots : [];
  const legacyGallery = Array.isArray(product.gallery) ? product.gallery : [];
  if (product.pageType === 'series-overview' && !explicitSlots.length && !legacyGallery.length) return [];
  const fallbackMain = explicitSlots.length || legacyGallery.length ? [] : [{
      type: 'main',
      src: productImagePath(product, 'main'),
      label: 'Main Product Photo',
      required: true,
      recommendedSize: '1200 × 1200 px',
      recommendedRatio: '1:1',
      alt: `${product.name} overall product view`
    }];
  const sourceItems = explicitSlots.length ? explicitSlots : (legacyGallery.length ? legacyGallery : fallbackMain);
  const seen = new Set();
  return sourceItems
    .filter((item) => item && item.src)
    .filter((item) => {
      if (seen.has(item.src)) return false;
      seen.add(item.src);
      return true;
    })
    .map((item, index) => ({
      type: item.type || (index === 0 ? 'main' : 'detail'),
      src: item.src,
      alt: item.alt || `${product.name} ${item.type || 'product'} view`,
      label: item.label || galleryTypeLabel(item.type || (index === 0 ? 'main' : 'detail')),
      required: typeof item.required === 'boolean' ? item.required : index === 0,
      recommendedSize: item.recommendedSize || '1200 × 1200 px',
      recommendedRatio: item.recommendedRatio || '1:1',
      guidance: item.guidance || ''
    }));
}

function getProductGallery(product) {
  return getProductImageSlots(product);
}

function galleryTypeLabel(type) {
  const labels = {
    main: 'Main view',
    detail: 'Detail view',
    structure: 'Structure view',
    packaging: 'Packaging view',
    application: 'Application view',
    scale: 'Scale view',
    variant: 'Variant view'
  };
  return labels[type] || 'Product view';
}

function productImageFileName(src) {
  return String(src || '').split('/').pop() || 'product-image.webp';
}

function probeProductImage(slot) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(image.naturalWidth > 0 && image.naturalHeight > 0);
    image.onerror = () => resolve(false);
    image.src = slot.src;
  });
}

async function resolveProductGallery(product) {
  const slots = getProductImageSlots(product);
  const auditMode = isImageAuditMode();
  const checkedSlots = await Promise.all(slots.map(async (slot) => ({
    ...slot,
    productName: product.name,
    publicationStatus: product.publicationStatus || '',
    available: await probeProductImage(slot)
  })));
  const missingSlots = checkedSlots.filter((slot) => !slot.available);
  const mainBlockers = missingSlots.filter((slot) => slot.required && slot.type === 'main');

  missingSlots.forEach((slot) => {
    const level = slot.required ? 'BLOCKER' : 'WARNING';
    const message = `[ProductImage ${level}] ${product.slug} | ${slot.type} | ${slot.src}`;
    console.warn(message);
  });

  const validItems = checkedSlots.filter((slot) => slot.available).map((slot) => ({ ...slot, placeholder: false }));
  const shouldShowPlaceholder = (slot) => auditMode && (slot.required || product.publicationStatus === 'draft');
  const items = mainBlockers.length && !auditMode
    ? []
    : checkedSlots
      .filter((slot) => slot.available || shouldShowPlaceholder(slot))
      .map((slot) => ({ ...slot, placeholder: !slot.available }));
  const primaryImage = validItems.find((slot) => slot.type === 'main' && slot.required) || null;

  return { items, validItems, missingSlots, mainBlockers, primaryImage, auditMode };
}

function renderImageSlotPlaceholder(item, compact = false) {
  const isDraftMain = item.type === 'main' && item.publicationStatus === 'draft';
  const typeLabel = isDraftMain ? 'PRODUCT PHOTO' : item.type === 'main' ? 'MAIN PRODUCT PHOTO' : `${item.type.toUpperCase()} PHOTO`;
  const requiredText = isDraftMain ? 'Image coming soon' : item.type === 'main' ? 'MAIN PRODUCT PHOTO REQUIRED' : 'Image required';
  return `
    <div class="pd-image-slot-placeholder ${compact ? 'is-compact' : ''}" role="status" aria-label="Missing ${item.label}">
      <span class="pd-image-slot-type">${typeLabel}</span>
      <strong>${requiredText}</strong>
      ${isDraftMain ? `<span class="pd-image-slot-product">${item.productName}</span>` : ''}
      ${item.guidance ? `<span class="pd-image-slot-guidance">${item.guidance}</span>` : ''}
      <span class="pd-image-slot-file">File: <b>${productImageFileName(item.src)}</b></span>
      ${isDraftMain ? `<span class="pd-image-slot-path">Target path: <b>${item.src}</b></span>` : ''}
      <span class="pd-image-slot-recommendation">Recommended: <b>${item.recommendedSize} · ${item.recommendedRatio}</b></span>
      ${isDraftMain ? '<span class="pd-image-slot-audit">Development audit only · Required before publication</span>' : ''}
    </div>
  `;
}

function renderGalleryMedia(item, compact = false) {
  if (item.placeholder) return renderImageSlotPlaceholder(item, compact);
  return `<img src="${item.src}" alt="${item.alt}"${compact ? ' loading="lazy"' : ''}>`;
}

function renderMissingImageSlotsPanel(galleryState) {
  if (!galleryState.auditMode || !galleryState.missingSlots.length) return '';
  return `
    <section class="pd-missing-slots-panel" aria-labelledby="pdMissingSlotsTitle">
      <div class="pd-missing-slots-heading">
        <h3 id="pdMissingSlotsTitle">Missing Image Slots</h3>
        <p>Development audit only. Upload files to the exact target paths below.</p>
      </div>
      <div class="pd-missing-slots-grid">
        ${galleryState.missingSlots.map((item) => `
          <article class="pd-image-slot-placeholder pd-missing-slot-card">
            <span class="pd-image-slot-type">${item.type.toUpperCase()} PHOTO</span>
            <strong>Image coming soon</strong>
            <span class="pd-image-slot-product">${item.productName}</span>
            <h4>${item.label}</h4>
            <dl>
              <div><dt>File</dt><dd>${productImageFileName(item.src)}</dd></div>
              <div><dt>Target path</dt><dd>${item.src}</dd></div>
              ${item.guidance ? `<div><dt>Suggested content</dt><dd>${item.guidance}</dd></div>` : ''}
              <div><dt>Recommended</dt><dd>${item.recommendedSize} · ${item.recommendedRatio}</dd></div>
              ${item.required ? '<div><dt>Status</dt><dd>Required before publication</dd></div>' : ''}
            </dl>
            <span class="pd-image-slot-audit">Development audit only</span>
          </article>
        `).join('')}
      </div>
    </section>
  `;
}

function renderProductGallery(product, galleryState) {
  const galleryItems = galleryState.items;
  if (!galleryItems.length) {
    return `<div class="pd-gallery pd-gallery-unavailable" data-count="0" hidden aria-hidden="true"></div>`;
  }
  const first = galleryItems[0];
  const hasMultiple = galleryItems.length > 1;
  const showCaption = hasMultiple || product.pageType === 'series-overview';
  const validCount = galleryState.validItems.length;
  const hasLightbox = validCount > 1;
  const thumbsHTML = hasMultiple ? `
    <div class="pd-thumbs" id="pdThumbs" aria-label="${product.name} image thumbnails">
      ${galleryItems.map((item, i) => `
        <button class="pd-thumb ${item.placeholder ? 'is-audit-slot' : ''} ${i === 0 ? 'active' : ''}" type="button" data-index="${i}" aria-label="View ${item.label}">
          ${renderGalleryMedia(item, true)}
          <span>${item.label}</span>
        </button>
      `).join('')}
    </div>
  ` : '';
  const controlsHTML = hasMultiple ? `
    <button class="pd-gallery-nav pd-gallery-prev" type="button" aria-label="Previous product image">&lsaquo;</button>
    <button class="pd-gallery-nav pd-gallery-next" type="button" aria-label="Next product image">&rsaquo;</button>
  ` : '';
  const firstValid = galleryState.validItems[0];
  const lightboxHTML = hasLightbox ? `
    <div class="pd-lightbox" id="pdLightbox" aria-hidden="true">
      <button class="pd-lightbox-close" type="button" aria-label="Close product image preview">&times;</button>
      <button class="pd-lightbox-nav pd-lightbox-prev" type="button" aria-label="Previous product image">&lsaquo;</button>
      <img src="${firstValid.src}" alt="${firstValid.alt}">
      <button class="pd-lightbox-nav pd-lightbox-next" type="button" aria-label="Next product image">&rsaquo;</button>
    </div>
  ` : '';

  return `
    <div class="pd-gallery ${hasMultiple ? 'has-multiple' : 'is-single'} ${galleryState.auditMode ? 'is-image-audit' : ''}" data-count="${validCount}" data-audit-count="${galleryState.missingSlots.length}">
      <div class="pd-main-img ${first.placeholder ? 'has-main-placeholder' : ''}" id="pdMainImg"${hasLightbox ? ' role="button" tabindex="0" aria-label="Open product image preview"' : ''}>
        <div class="pd-main-media" id="pdMainMedia">${renderGalleryMedia(first)}</div>
        ${showCaption ? `<div class="pd-gallery-caption" id="pdGalleryCaption">${first.label}</div>` : ''}
        ${controlsHTML}
      </div>
      ${thumbsHTML}
      ${renderMissingImageSlotsPanel(galleryState)}
      ${lightboxHTML}
    </div>
  `;
}

function setupProductGallery(root, galleryState, productName) {
  const gallery = root.querySelector('.pd-gallery');
  const mainBox = root.querySelector('#pdMainImg');
  const mainMedia = root.querySelector('#pdMainMedia');
  const caption = root.querySelector('#pdGalleryCaption');
  if (!gallery || !mainBox || !mainMedia) return;

  let items = [...galleryState.items];
  let currentIndex = 0;
  let touchStartX = null;
  let lastGalleryFocus = null;

  const updateSingleState = () => {
    const hasMultiple = items.length > 1;
    const validCount = items.filter((item) => !item.placeholder).length;
    gallery.classList.toggle('has-multiple', hasMultiple);
    gallery.classList.toggle('is-single', !hasMultiple);
    gallery.dataset.count = String(validCount);
    gallery.querySelectorAll('.pd-gallery-nav, .pd-thumbs').forEach((element) => {
      element.hidden = !hasMultiple;
    });
    const lightbox = root.querySelector('#pdLightbox');
    if (lightbox) lightbox.hidden = validCount < 2;
  };

  const handleRuntimeImageFailure = (src) => {
    const failedIndex = items.findIndex((item) => item.src === src);
    if (failedIndex < 0) return;
    const failedItem = items[failedIndex];
    if (galleryState.auditMode) {
      failedItem.placeholder = true;
      const thumb = root.querySelector(`.pd-thumb[data-index="${failedIndex}"]`);
      if (thumb) {
        thumb.classList.add('is-audit-slot');
        thumb.innerHTML = `${renderGalleryMedia(failedItem, true)}<span>${failedItem.label}</span>`;
      }
      if (currentIndex === failedIndex) showImage(failedIndex);
      console.warn(`[ProductImage WARNING] Runtime image failure replaced with audit slot: ${src}`);
      updateSingleState();
      return;
    }
    removeImage(src);
  };

  const bindMainImageError = () => {
    const image = mainMedia.querySelector('img');
    if (image) image.addEventListener('error', () => handleRuntimeImageFailure(image.getAttribute('src')), { once: true });
  };

  const showImage = (index) => {
    if (!items.length) {
      gallery.hidden = true;
      console.warn(`Product gallery has no valid images for ${productName}.`);
      return;
    }
    currentIndex = (index + items.length) % items.length;
    const item = items[currentIndex];
    mainMedia.innerHTML = renderGalleryMedia(item);
    bindMainImageError();
    if (caption) caption.textContent = item.label || galleryTypeLabel(item.type);
    root.querySelectorAll('.pd-thumb').forEach((thumb, i) => {
      thumb.classList.toggle('active', i === currentIndex);
    });
    const lightboxImg = root.querySelector('#pdLightbox img');
    if (lightboxImg && !item.placeholder) {
      lightboxImg.src = item.src;
      lightboxImg.alt = item.alt;
    }
    updateSingleState();
  };

  const removeImage = (src) => {
    const removeIndex = items.findIndex((item) => item.src === src);
    if (removeIndex < 0) return;
    console.warn(`[ProductImage WARNING] Removed missing production gallery image: ${src}`);
    items.splice(removeIndex, 1);
    const thumb = root.querySelector(`.pd-thumb[data-index="${removeIndex}"]`);
    if (thumb) thumb.remove();
    root.querySelectorAll('.pd-thumb').forEach((button, i) => {
      button.dataset.index = String(i);
    });
    showImage(Math.min(currentIndex, items.length - 1));
  };

  root.querySelectorAll('.pd-thumb').forEach((thumb) => {
    thumb.addEventListener('click', () => showImage(Number(thumb.dataset.index || 0)));
    const img = thumb.querySelector('img');
    if (img) img.addEventListener('error', () => handleRuntimeImageFailure(img.getAttribute('src')), { once: true });
  });

  const stepImage = (delta, validOnly = false) => {
    if (!items.length) return;
    let nextIndex = currentIndex;
    for (let attempt = 0; attempt < items.length; attempt += 1) {
      nextIndex = (nextIndex + delta + items.length) % items.length;
      if (!validOnly || !items[nextIndex].placeholder) {
        showImage(nextIndex);
        return;
      }
    }
  };

  root.querySelectorAll('.pd-gallery-prev').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      stepImage(-1);
    });
  });
  root.querySelectorAll('.pd-gallery-next').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      stepImage(1);
    });
  });
  root.querySelectorAll('.pd-lightbox-prev').forEach((button) => button.addEventListener('click', (event) => {
    event.stopPropagation();
    stepImage(-1, true);
  }));
  root.querySelectorAll('.pd-lightbox-next').forEach((button) => button.addEventListener('click', (event) => {
    event.stopPropagation();
    stepImage(1, true);
  }));

  mainBox.addEventListener('click', () => {
    const lightbox = root.querySelector('#pdLightbox');
    if (!lightbox || items[currentIndex].placeholder || items.filter((item) => !item.placeholder).length < 2) return;
    lastGalleryFocus = mainBox;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    const close = lightbox.querySelector('.pd-lightbox-close');
    if (close) close.focus();
  });

  mainBox.addEventListener('keydown', (event) => {
    if (!['Enter', ' '].includes(event.key) || items[currentIndex].placeholder || items.filter((item) => !item.placeholder).length < 2) return;
    event.preventDefault();
    mainBox.click();
  });

  const closeLightbox = () => {
    const lightbox = root.querySelector('#pdLightbox');
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lastGalleryFocus && typeof lastGalleryFocus.focus === 'function') lastGalleryFocus.focus();
  };

  const lightbox = root.querySelector('#pdLightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    const close = lightbox.querySelector('.pd-lightbox-close');
    if (close) {
      close.addEventListener('click', (event) => {
        event.stopPropagation();
        closeLightbox();
      });
    }
  }

  mainBox.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0] ? event.touches[0].clientX : null;
  }, { passive: true });
  mainBox.addEventListener('touchend', (event) => {
    if (touchStartX === null || items.length < 2) return;
    const endX = event.changedTouches[0] ? event.changedTouches[0].clientX : touchStartX;
    const delta = endX - touchStartX;
    touchStartX = null;
    if (Math.abs(delta) < 40) return;
    stepImage(delta < 0 ? 1 : -1);
  }, { passive: true });

  document.addEventListener('keydown', (event) => {
    const lightboxOpen = lightbox && lightbox.classList.contains('is-open');
    if (event.key === 'Escape' && lightboxOpen) closeLightbox();
    if (!lightboxOpen || items.filter((item) => !item.placeholder).length < 2) return;
    if (event.key === 'ArrowLeft') stepImage(-1, true);
    if (event.key === 'ArrowRight') stepImage(1, true);
  });

  showImage(0);
}

const PUBLIC_SPEC_STATUSES = ['confirmed', 'example', 'project-specific'];

function normalizeSpecItems(items) {
  if (!items) return [];
  const list = Array.isArray(items) ? items : [items];
  return list
    .map((item) => (typeof item === 'string' ? { value: item, status: 'confirmed' } : item))
    .filter((item) => item && item.value && PUBLIC_SPEC_STATUSES.includes(item.status || 'confirmed'));
}

function uniqueSpecItems(items) {
  const seen = new Set();
  return normalizeSpecItems(items).filter((item) => {
    const key = item.value.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function renderSpecList(items) {
  const visible = uniqueSpecItems(items);
  if (!visible.length) return '';
  return `
    <ul class="pd-material-list">
      ${visible.map((item) => `<li>${item.value}</li>`).join('')}
    </ul>
  `;
}

function renderMaterialPanel(title, items) {
  const content = renderSpecList(items);
  if (!content) return '';
  return `<article class="pd-material-panel"><h3>${title}</h3>${content}</article>`;
}

function renderProductMaterials(product) {
  if (!product) return '';
  const panels = [
    renderMaterialPanel('Materials & Construction', [
      ...(product.materials || []),
      ...(product.construction || [])
    ]),
    renderMaterialPanel('Common Size & Customization Options', [
      ...(product.commonSizes || []),
      ...(product.thickness || []),
      ...(product.printingOptions || []),
      ...(product.finishOptions || [])
    ]),
    renderMaterialPanel('Packaging Options', product.packagingOptions),
    renderMaterialPanel('Compact Quote Checklist', product.quoteRequirements)
  ].filter(Boolean);

  if (!panels.length) return '';
  const hasProjectSpecificData = [
    ...(product.materials || []),
    ...(product.construction || []),
    ...(product.commonSizes || []),
    ...(product.thickness || []),
    ...(product.printingOptions || []),
    ...(product.finishOptions || []),
    ...(product.packagingOptions || [])
  ].some((item) => item && item.status === 'project-specific');
  const note = hasProjectSpecificData
    ? '<p class="pd-material-note">Custom details are reviewed according to artwork, product construction, packaging, intended use and destination market.</p>'
    : '';
  return `<div class="pd-material-sections">${panels.join('')}${note}</div>`;
}

function renderProductSummary(product) {
  const customPanels = Array.isArray(product.summaryPanels) ? product.summaryPanels : [];
  if (customPanels.length) {
    const customPanelsHTML = customPanels.map((panel) => {
      const paragraphs = (panel.paragraphs || []).filter(Boolean);
      const items = (panel.items || []).filter(Boolean);
      return `
        <article class="pd-material-panel pd-summary-panel-rich">
          <h3>${panel.title}</h3>
          ${paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
          ${items.length ? `<ul class="pd-material-list">${items.map((item) => `<li>${item}</li>`).join('')}</ul>` : ''}
        </article>
      `;
    }).join('');
    return `<div class="pd-summary-panels">${customPanelsHTML}</div>`;
  }

  const materialItems = uniqueSpecItems([
    ...(product.construction || []),
    ...(product.materials || [])
  ]).slice(0, 3);
  const customizationItems = uniqueSpecItems([
    ...(product.commonSizes || []),
    ...(product.thickness || []),
    ...(product.printingOptions || []),
    ...(product.finishOptions || []),
    ...(product.packagingOptions || [])
  ]).slice(0, 4);
  const seriesSpecifications = Object.entries(product.seriesSpecifications || {});
  const seriesPanel = seriesSpecifications.length ? `
    <article class="pd-material-panel pd-series-specifications">
      <h3>Confirmed Series Format</h3>
      <dl>
        ${seriesSpecifications.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}
      </dl>
      ${product.seriesConfigurationNote ? `<p>${product.seriesConfigurationNote}</p>` : ''}
    </article>
  ` : '';
  const panels = [
    seriesPanel,
    renderMaterialPanel('Materials & Construction', materialItems),
    renderMaterialPanel('Common Size, Customization & Packaging', customizationItems)
  ].filter(Boolean);
  if (!panels.length) return '';
  return `<div class="pd-summary-panels">${panels.join('')}</div>`;
}

function getFamilyBrowseCta(product, family) {
  const fallbackSlug = family ? family.slug : product.category;
  const labels = {
    'custom-fridge-magnets': 'Browse Custom Fridge Magnets',
    'magnetic-stationery': 'Browse Magnetic Stationery',
    'magnetic-educational-products': 'Browse Educational Products',
    'gift-sets-retail-packaging': 'Browse Gift Sets & Retail Packaging'
  };
  return {
    label: labels[fallbackSlug] || `Browse ${family ? family.name : 'Products'}`,
    href: `products.html?cat=${fallbackSlug}`
  };
}

function syncProductPageCta(product, family) {
  const browse = getFamilyBrowseCta(product, family);
  const cta = product.cta || {};
  const eyebrow = document.querySelector('.cta-section .eyebrow');
  if (eyebrow && cta.eyebrow) eyebrow.textContent = cta.eyebrow;
  const heading = document.querySelector('.cta-section h2');
  if (heading && cta.heading) heading.textContent = cta.heading;
  const description = document.querySelector('.cta-section p');
  if (description && cta.description) description.textContent = cta.description;
  const browseButton = document.querySelector('.cta-section .btn-outline-light');
  if (browseButton) {
    browseButton.textContent = browse.label;
    browseButton.setAttribute('href', browse.href);
  }
  const sampleButton = document.querySelector('.cta-section .btn-primary');
  if (sampleButton) {
    sampleButton.setAttribute('href', `contact.html?p=${encodeURIComponent(product.slug)}`);
    if (cta.sampleLabel) sampleButton.textContent = cta.sampleLabel;
  }
}

function renderProductVariants(product) {
  const variants = (product.variants || []).filter((variant) => variant.name);
  if (!variants.length) return '';

  if (product.pageType === 'series-overview') {
    const comparison = (product.comparisonRows || []).length ? `
      <div class="pd-series-comparison">
        <h4>Format Comparison</h4>
        <dl>
          ${product.comparisonRows.map(([label, description]) => `<div><dt>${label}</dt><dd>${description}</dd></div>`).join('')}
        </dl>
      </div>
    ` : '';
    return `
      <div class="pd-variants pd-series-overview">
        <h3>${product.variantLabel || 'Available Series'}</h3>
        <div class="pd-series-entry-grid">
          ${variants.map((variant) => `
            <a class="pd-series-entry-card" href="${normalizeProductHref(variant.href)}">
              <img src="${variant.image}" alt="${variant.alt || `${variant.name} product view`}" loading="lazy">
              <div>
                ${product.showVariantIds === false ? '' : `<span>${variant.id}</span>`}
                <h4>${variant.name}</h4>
                ${variant.description ? `<p>${variant.description}</p>` : ''}
                ${variant.externalBoxSize || variant.setCapacity ? `
                  <dl>
                    ${variant.externalBoxSize ? `<div><dt>External Box Size</dt><dd>${variant.externalBoxSize}</dd></div>` : ''}
                    ${variant.setCapacity ? `<div><dt>Set Capacity</dt><dd>${variant.setCapacity}</dd></div>` : ''}
                  </dl>
                ` : ''}
                <strong>${variant.ctaLabel || 'View Series'} →</strong>
              </div>
            </a>
          `).join('')}
        </div>
        ${comparison}
      </div>
    `;
  }

  return `
    <div class="pd-variants">
      <h3>${product.variantLabel || 'Available Series'}</h3>
      <div class="pd-variant-grid">
        ${variants.filter((variant) => variant.image).map((variant) => `
          <article class="pd-variant-card">
            <img src="${variant.image}" alt="${product.name} - ${variant.name}" loading="lazy" onerror="this.closest('.pd-variant-card').classList.add('image-missing'); this.remove();">
            <div>
              <span>${variant.id || ''}</span>
              <h4>${variant.name}</h4>
              <ul>
                ${(variant.confirmedFacts || ['Specifications available subject to project review.']).map((fact) => `<li>${fact}</li>`).join('')}
              </ul>
            </div>
          </article>
        `).join('')}
      </div>
    </div>
  `;
}

function renderBoxedSeriesLinks(product) {
  if (!product.boxedEpoxySeries || typeof PRODUCTS === 'undefined') return '';
  const relatedSeries = PRODUCTS.filter((item) => item.boxedEpoxySeries && item.slug !== product.slug);
  const overview = getProduct('boxed-epoxy-magnet-sets');
  const links = [
    ...relatedSeries.map((item) => ({
      name: item.name,
      href: productDetailHref(item.slug),
      image: productImagePath(item, 'main'),
      eyebrow: item.sku
    })),
    {
      name: overview.name,
      href: productDetailHref(overview.slug),
      image: productImagePath(overview, 'main'),
      eyebrow: 'SERIES OVERVIEW'
    }
  ];
  return `
    <div class="pd-boxed-related">
      <h3>Explore Other Boxed Epoxy Series</h3>
      <div class="pd-boxed-related-grid">
        ${links.map((item) => `
          <a href="${item.href}">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            <span>${item.eyebrow}</span>
            <strong>${item.name}</strong>
          </a>
        `).join('')}
      </div>
    </div>
  `;
}

function renderAcrylicProductLinks(product) {
  if (!product.acrylicProduct || typeof PRODUCTS === 'undefined') return '';
  const relatedProducts = PRODUCTS.filter((item) => item.acrylicProduct && item.public !== false && item.slug !== product.slug);
  return `
    <div class="pd-boxed-related pd-acrylic-related">
      <h3>Explore Other Acrylic Products</h3>
      <div class="pd-boxed-related-grid">
        ${relatedProducts.map((item) => `
          <a href="${productDetailHref(item.slug)}">
            <img src="${productImagePath(item, 'main')}" alt="${item.name}" loading="lazy">
            <span>${item.sku}</span>
            <strong>${item.name}</strong>
          </a>
        `).join('')}
      </div>
      <a class="link pd-related-all-link" href="products.html?cat=custom-fridge-magnets&amp;sub=acrylic">View All Acrylic Magnets →</a>
    </div>
  `;
}

function ensureUniqueHeadElement(selector, tagName, attributes) {
  const matches = [...document.head.querySelectorAll(selector)];
  const element = matches.shift() || document.createElement(tagName);
  Object.entries(attributes).forEach(([name, value]) => element.setAttribute(name, value));
  if (!element.parentNode) document.head.appendChild(element);
  matches.forEach((duplicate) => duplicate.remove());
  return element;
}

function syncProductHead({ title, description, canonicalPath, ogTitle, ogDescription, ogImage, indexable }) {
  const canonicalUrl = siteUrl(localizedPagePath(canonicalPath));
  document.title = title;
  ensureUniqueHeadElement('meta[name="description"]', 'meta', { name: 'description' }).setAttribute('content', description);
  ensureUniqueHeadElement('meta[name="robots"]', 'meta', { name: 'robots' }).setAttribute('content', indexable ? 'index, follow' : 'noindex, nofollow');
  ensureUniqueHeadElement('link[rel="canonical"]', 'link', { rel: 'canonical' }).setAttribute('href', canonicalUrl);
  ensureUniqueHeadElement('meta[property="og:type"]', 'meta', { property: 'og:type' }).setAttribute('content', 'product');
  ensureUniqueHeadElement('meta[property="og:title"]', 'meta', { property: 'og:title' }).setAttribute('content', ogTitle || title);
  ensureUniqueHeadElement('meta[property="og:description"]', 'meta', { property: 'og:description' }).setAttribute('content', ogDescription || description);
  ensureUniqueHeadElement('meta[property="og:url"]', 'meta', { property: 'og:url' }).setAttribute('content', canonicalUrl);
  const ogImageMeta = ensureUniqueHeadElement('meta[property="og:image"]', 'meta', { property: 'og:image' });
  if (ogImage) ogImageMeta.setAttribute('content', absoluteAssetUrl(ogImage));
  else ogImageMeta.removeAttribute('content');
}

function clearProductStructuredData() {
  document.head.querySelectorAll('#productStructuredData, script[data-product-structured-data="true"]').forEach((script) => script.remove());
}

function syncProductStructuredData(product, canonicalPath, primaryImage, indexable) {
  clearProductStructuredData();
  if (!product || !indexable || !primaryImage) return;
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.seoDescription || product.tagline,
    image: absoluteAssetUrl(primaryImage),
    url: siteUrl(localizedPagePath(canonicalPath)),
    brand: {
      '@type': 'Brand',
      name: 'Flexible Magnet (Huizhou)'
    },
    manufacturer: {
      '@type': 'Organization',
      name: 'Flexible Magnet (Huizhou) Co., Ltd.',
      url: `${SITE_ORIGIN}/`
    }
  };
  const productReference = product.sku || product.productNumber || product.id;
  if (productReference) data.sku = productReference;
  const script = document.createElement('script');
  script.id = 'productStructuredData';
  script.dataset.productStructuredData = 'true';
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

async function renderProductDetail() {
  const wrap = document.getElementById('pdWrap');
  if (!wrap) return;
  const slug = getQuery('p');
  const sourceProduct = getProduct(slug);
  if (!sourceProduct) {
    const notFoundTitle = SITE_LANGUAGE === 'es' ? 'Producto no encontrado | Flexible Magnet (Huizhou)' : 'Product not found | Flexible Magnet (Huizhou)';
    const notFoundDescription = SITE_LANGUAGE === 'es'
      ? 'No se ha encontrado el producto solicitado. Consulte la gama actual de productos magnéticos personalizados de Flexible Magnet (Huizhou).'
      : 'The requested product could not be found. Browse the current custom magnetic product range from Flexible Magnet (Huizhou).';
    syncProductHead({
      title: notFoundTitle,
      description: notFoundDescription,
      canonicalPath: productCanonicalPath(),
      ogTitle: notFoundTitle,
      ogDescription: notFoundDescription,
      ogImage: '',
      indexable: false
    });
    clearProductStructuredData();
    wrap.innerHTML = `<div class="container" style="padding:80px 0; text-align:center;"><h1>${translateUi('Product not found')}</h1><p style="margin:20px 0;">${translateUi('The product you are looking for does not exist.')}</p><a href="products.html" class="btn btn-primary btn-arrow">${translateUi('Browse all products')}</a></div>`;
    return;
  }

  const p = localizeProduct(sourceProduct);

  if (p.publicationStatus === 'draft' && !isLocalDevelopmentMode()) {
    const unavailableTitle = `${translateUi('Product not available')} | Flexible Magnet (Huizhou)`;
    const unavailableDescription = translateUi('This product is not currently available for public viewing.');
    syncProductHead({
      title: unavailableTitle,
      description: unavailableDescription,
      canonicalPath: productCanonicalPath(p.slug),
      ogTitle: unavailableTitle,
      ogDescription: unavailableDescription,
      ogImage: '',
      indexable: false
    });
    clearProductStructuredData();
    wrap.innerHTML = `<div class="container" style="padding:80px 0; text-align:center;"><h1>${translateUi('Product not available')}</h1><p style="margin:20px 0;">${translateUi('This product is still under development.')}</p><a href="products.html" class="btn btn-primary btn-arrow">${translateUi('Browse available products')}</a></div>`;
    return;
  }

  const family = localizeCategory(getProductFamily(sourceProduct) || getCategory(sourceProduct.category));
  const familySlug = family ? family.slug : p.category;
  const familyName = family ? family.name : 'Products';
  const galleryState = await resolveProductGallery(p);
  const primaryGalleryImage = galleryState.primaryImage ? galleryState.primaryImage.src : '';
  const canonicalPath = productCanonicalPath(p.slug);
  const detailDescription = p.seoDescription || `Request a factory-direct quote for ${p.name}. Custom manufacturing, OEM support, MOQ, sampling, production lead time and packaging options are reviewed by project.`;
  const detailTitle = p.seoTitle || `${p.name} | Flexible Magnet (Huizhou)`;
  const hasCompleteTranslation = SITE_LANGUAGE !== 'es' || p.translationComplete === true;
  const isIndexableProduct = p.public === true && p.publicationStatus !== 'draft' && !p.noIndex && hasCompleteTranslation;
  syncProductHead({
    title: detailTitle,
    description: detailDescription,
    canonicalPath,
    ogTitle: p.ogTitle || detailTitle,
    ogDescription: p.ogDescription || detailDescription,
    ogImage: primaryGalleryImage,
    indexable: isIndexableProduct
  });
  syncProductStructuredData(p, canonicalPath, primaryGalleryImage, isIndexableProduct);

  const productSpecs = p.specs || {};
  const productMoq = productSpecs.MOQ || '200 pcs/sets total';
  const productSampling = productSpecs['Physical Sampling'] || '7–10 calendar days';
  const productBulk = productSpecs['Bulk Production'] || '15–30 calendar days';
  const procurement = [
    ['MOQ', productMoq],
    ['Physical Sampling', productSampling],
    ['Bulk Production', productBulk]
  ];
  const heroProcurementHTML = p.showHeroProcurement === false
    ? ''
    : `<div class="pd-price-box">
        <div class="pd-procurement-grid">
          ${procurement.map(([label, value]) => `<div class="pd-procurement-item"><span>${translateUi(label)}</span><strong>${translateUi(value)}</strong></div>`).join('')}
        </div>
        <p class="pd-payment-note"><strong>Payment:</strong> ${productSpecs.Payment || 'Payment terms are confirmed according to order value and project requirements.'}</p>
      </div>`;
  const projectStandards = p.projectStandards || {
    'MOQ': '200 pcs/sets total per product construction and manufacturing process',
    'Multi-design': 'Multiple designs may be combined, subject to project review',
    'Physical Sampling': productSampling,
    'Bulk Production': productBulk,
    'Testing & Documentation': typeof COMPLIANCE_NOTE !== 'undefined'
      ? COMPLIANCE_NOTE
      : 'Applicable testing and documentation are confirmed according to product construction, materials, intended use, age group and destination market.'
  };
  const rowsHTML = (rows) => Object.entries(rows).map(([k, v]) => `<tr><td>${translateUi(k)}</td><td>${translateUi(v)}</td></tr>`).join('');
  const projectStandardsHTML = p.showProjectStandards === false
    ? ''
    : `<div class="pd-specs pd-project-standards">
        <h3>${translateUi('Project Standards')}</h3>
        <table><tbody>${rowsHTML(projectStandards)}</tbody></table>
      </div>`;
  const technicalSpecificationsHTML = p.technicalSpecifications
    ? `<div class="pd-specs"><h3>${translateUi('Technical Specifications')}</h3><table><tbody>${rowsHTML(p.technicalSpecifications)}</tbody></table></div>`
    : '';
  const orderInformationHTML = p.showOrderInformation === true
    ? `<section class="pd-price-box pd-order-information">
        <h3 style="margin:0 0 18px;">${translateUi('Order Information')}</h3>
        <div class="pd-procurement-grid">
          ${procurement.map(([label, value]) => `<div class="pd-procurement-item"><span>${translateUi(label)}</span><strong>${translateUi(value)}</strong></div>`).join('')}
        </div>
        <p class="pd-payment-note">${productSpecs['Multi-design']}</p>
        <p class="pd-payment-note">${productSpecs.Payment}</p>
      </section>`
    : '';
  const packagingDetailsHTML = p.packagingDetails
    ? `<div class="pd-specs"><h3>${translateUi('Packaging Details')}</h3><table><tbody>${rowsHTML(p.packagingDetails)}</tbody></table></div>`
    : '';
  const validFeatures = (p.features || []).filter((feature) => feature.title && feature.desc).slice(0, p.featureLimit || 3);
  const featuresHTML = validFeatures.map(f => `
    <div class="pd-feature">
      <h4>${f.title}</h4>
      <p>${f.desc}</p>
    </div>
  `).join('');
  const bestSuitedHTML = (p.bestSuitedFor || []).length ? `
    <div class="pd-best-fit">
      <h3>${p.bestSuitedForTitle || 'Best Suited For'}</h3>
      <div class="pd-best-fit-grid">
        ${p.bestSuitedFor.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
      </div>
    </div>
  ` : '';
  const isDraftProduct = p.publicationStatus === 'draft';
  const statusHTML = isDraftProduct ? `
    <div class="pd-status-note pd-draft-status-note" role="note">
      <strong>Local development draft.</strong> ${p.draftStatusNote || 'Product reference, final specifications and a real main product photo require confirmation before publication.'}
    </div>
  ` : p.public === false ? `
    <div class="pd-status-note" role="note">
      This product is available for custom recommendation. Please contact us for the most suitable product route.
    </div>
  ` : '';
  const variantsHTML = renderProductVariants(p);
  const boxedSeriesLinksHTML = renderBoxedSeriesLinks(p);
  const acrylicProductLinksHTML = renderAcrylicProductLinks(p);
  const productReferenceHTML = p.sku
    ? `<div class="pd-product-reference">${translateUi('Product Reference')}: ${p.sku}</div>`
    : isDraftProduct ? '<div class="pd-product-reference">Product Reference: awaiting confirmation</div>' : '';
  const subcategoryBreadcrumbHTML = p.acrylicProduct
    ? `<a href="products.html?cat=custom-fridge-magnets&amp;sub=acrylic">Acrylic</a><span class="sep">/</span>`
    : '';
  const productGridClass = p.pageType !== 'series-overview'
    ? ''
    : galleryState.items.length === 0 ? 'is-series-overview' : 'has-series-overview-gallery';
  const productSummaryHTML = renderProductSummary(p);
  const heroSummaryHTML = p.summaryPlacement === 'below' ? '' : productSummaryHTML;
  const belowSummaryHTML = p.summaryPlacement === 'below' ? productSummaryHTML : '';
  const usesRightColumnTechnicalSpecs = [
    'glass-dome-fridge-magnets',
    'laminated-tinplate-fridge-magnets'
  ].includes(p.slug) && Boolean(technicalSpecificationsHTML);
  const detailBelowBlocks = [
    usesRightColumnTechnicalSpecs ? '' : technicalSpecificationsHTML,
    orderInformationHTML,
    belowSummaryHTML,
    packagingDetailsHTML,
    variantsHTML,
    boxedSeriesLinksHTML,
    acrylicProductLinksHTML,
    bestSuitedHTML
  ].filter(Boolean).join('');
  const detailBelowHTML = detailBelowBlocks ? `<div class="pd-detail-below">${detailBelowBlocks}</div>` : '';
  const productIntroHTML = `
    <div class="breadcrumb">
      <a href="index.html">${translateUi('Home')}</a> <span class="sep">/</span>
      <a href="products.html?cat=${familySlug}">${familyName}</a>
      <span class="sep">/</span> ${subcategoryBreadcrumbHTML} ${p.name}
    </div>
    ${productReferenceHTML}
    <h1>${p.name}</h1>
    ${statusHTML}
    <p style="color:var(--c-coffee-mid); font-size:1.05rem; line-height:1.7;">${p.tagline}</p>
    <div class="pd-meta">
      ${(p.featureTags || ['OEM / ODM', SITE_LANGUAGE === 'es' ? 'Diseño personalizado' : 'Custom Design', SITE_LANGUAGE === 'es' ? 'Revisión del proyecto' : 'Project Review']).map((tag) => `<span>${tag}</span>`).join('')}
    </div>`;
  const productActionsHTML = `
    ${heroProcurementHTML}
    ${p.showHeroProcurement === false ? `<p class="pd-moq"><strong>${translateUi('MOQ')}:</strong> ${translateUi(productMoq)}</p>` : ''}
    <div class="pd-actions">
      <a href="contact.html?p=${encodeURIComponent(p.slug)}" class="btn btn-primary btn-arrow">${translateUi('Request Quote')}</a>
      <a href="https://wa.me/8613129581959?text=${encodeURIComponent(`Hi, I would like a quote for ${p.name}.`)}" class="btn btn-outline" target="_blank" rel="noopener">WhatsApp</a>
    </div>
    ${heroSummaryHTML}`;
  const productGalleryHTML = renderProductGallery(p, galleryState);
  const productGridContentHTML = usesRightColumnTechnicalSpecs
    ? `<div class="pd-info pd-info-intro">${productIntroHTML}</div>
       ${productGalleryHTML}
       <div class="pd-info pd-info-actions">${productActionsHTML}${technicalSpecificationsHTML}</div>`
    : `${productGalleryHTML}<div class="pd-info">${productIntroHTML}${productActionsHTML}</div>`;

  wrap.innerHTML = `
    <div class="container">
      <div class="pd-grid ${productGridClass} ${usesRightColumnTechnicalSpecs ? 'is-glass-dome-layout' : ''}">
        ${productGridContentHTML}
      </div>
      ${projectStandardsHTML}
      ${detailBelowHTML}
    </div>
    ${featuresHTML ? `<section class="pd-section"><div class="container"><h2>${p.buyerBenefitsTitle || (SITE_LANGUAGE === 'es' ? 'Por qué este producto funciona para sus compradores' : 'Why this product works for your buyers')}</h2><div class="pd-feature-grid">${featuresHTML}</div></div></section>` : ''}
  `;

  setupProductGallery(wrap, galleryState, p.name);
  syncProductPageCta(p, family);
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
      submitButton.textContent = translateUi('SENDING...');
    }
    if (success) {
      success.style.display = 'block';
      success.className = 'form-success';
      success.textContent = translateUi('Sending your project brief...');
    }

    const controller = new AbortController();
    const requestTimeout = window.setTimeout(() => controller.abort(), 20000);
    try {
      const formData = new FormData(form);
      formData.set('source_language', SITE_LANGUAGE);
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
        signal: controller.signal
      });
      let result = {};
      try {
        result = await response.json();
      } catch {
        throw new Error('The inquiry service returned an invalid response.');
      }
      if (!response.ok || result.success !== true) throw new Error(result.message || `Submission failed with HTTP ${response.status}.`);
      form.reset();
      const fileName = document.getElementById('qfFileName');
      if (fileName) fileName.textContent = translateUi('No file selected');
      if (success) {
        success.className = 'form-success show';
        success.innerHTML = SITE_LANGUAGE === 'es'
          ? '<strong>Gracias: los datos de su proyecto se han enviado.</strong><br>Nuestro equipo revisará los requisitos y responderá por correo electrónico.'
          : '<strong>Thank you — your project brief has been sent.</strong><br>Our team will review your requirements and reply by email.';
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      if (typeof gtag === 'function') gtag('event', 'inquiry_form_submit');
    } catch (error) {
      if (success) {
        success.className = 'form-success show form-error';
        success.innerHTML = error.name === 'AbortError'
          ? (SITE_LANGUAGE === 'es'
            ? '<strong>La solicitud ha agotado el tiempo de espera.</strong><br>Compruebe su conexión e inténtelo de nuevo, o contáctenos por correo electrónico o WhatsApp.'
            : '<strong>The request timed out.</strong><br>Please check your connection and try again, or contact us by email or WhatsApp.')
          : (SITE_LANGUAGE === 'es'
            ? '<strong>No se ha podido enviar el formulario.</strong><br>El servidor no confirmó la entrega. Inténtelo de nuevo, escriba a <a href="mailto:sales08@flexiblemagnetchina.com">sales08@flexiblemagnetchina.com</a> o contáctenos por WhatsApp.'
            : '<strong>We could not send the form.</strong><br>The server did not confirm delivery. Please try again, email <a href="mailto:sales08@flexiblemagnetchina.com">sales08@flexiblemagnetchina.com</a>, or contact us on WhatsApp.');
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } finally {
      window.clearTimeout(requestTimeout);
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = submitButton.dataset.originalText || translateUi('SEND PROJECT BRIEF');
      }
    }
  });
}

function setupExhibitionLightbox() {
  const lightbox = document.getElementById('exhibitionLightbox');
  if (!lightbox) return;
  const preview = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('.exhibition-lightbox-close');
  let lastTrigger = null;
  const close = () => {
    if (!lightbox.classList.contains('is-open')) return;
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
  };
  document.querySelectorAll('.exhibition-image-button, .document-image-button, .document-view-button').forEach((button) => {
    button.addEventListener('click', () => {
      lastTrigger = button;
      preview.src = button.dataset.image;
      preview.alt = button.dataset.alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      if (closeButton) closeButton.focus();
    });
  });
  if (closeButton) closeButton.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => { if (event.target === lightbox) close(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && lightbox.classList.contains('is-open')) close();
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
  setupPrimaryNavigation();
  setupHomepageMedia();
  if (document.getElementById('productGrid')) renderProductsPage();
  if (document.getElementById('pdWrap')) renderProductDetail();
  if (document.getElementById('inquiryForm')) setupInquiryForm();
  setupAnalyticsEvents();
  setupExhibitionLightbox();
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
  const rootPrefix = location.pathname.includes('/industries/') ? '../' : '';
  a.href = `${rootPrefix}contact.html`;
  a.setAttribute('aria-label', 'Request a Quote');
  a.innerHTML = `<span class="quote-fab-icon" aria-hidden="true"></span><span class="quote-fab-text">Request a Quote</span>`;
  document.body.appendChild(a);
}

document.addEventListener('DOMContentLoaded', () => {
  injectWhatsAppFAB();
  injectQuoteFAB();
});
