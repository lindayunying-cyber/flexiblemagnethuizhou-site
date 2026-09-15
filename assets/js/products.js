/* ============================================
   Flexible Magnet (Huizhou).com - Product & Category Data
   Product taxonomy: 20 public product-grid items + series overviews + internal-review products
   ============================================ */

const PRODUCT_FAMILIES = [
  {
    slug: 'custom-fridge-magnets',
    name: 'Custom Fridge Magnets',
    desc: 'Printed paper, acrylic, soft PVC and resin fridge magnets for souvenir, retail and promotional programs.',
    seoTitle: 'Custom Fridge Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore custom printed paper, acrylic, soft PVC and resin fridge magnets for souvenir, retail and promotional programs.',
    seoH1: 'Custom Fridge Magnets',
    productSlugs: [
      'mag-006-custom-printed-paper-fridge-magnets',
      'epoxy-domed-fridge-magnets',
      'laminated-tinplate-fridge-magnets',
      'glass-dome-fridge-magnets',
      'premium-acrylic-souvenir-magnets',
      'standard-3mm-acrylic-magnets',
      'premium-5mm-polished-acrylic-magnets',
      'cnc-engraved-6mm-acrylic-magnets',
      'mag-001-custom-soft-pvc-fridge-magnets',
      'mag-014-custom-resin-fridge-magnets'
    ]
  },
  {
    slug: 'magnetic-stationery',
    name: 'Magnetic Stationery',
    desc: 'Custom magnetic bookmarks, notepads, calendars and planners for stationery brands, publishing and promotional use.',
    seoTitle: 'Custom Magnetic Stationery | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore custom magnetic bookmarks, notepads, calendars and planners for stationery brands, publishing and promotional use.',
    seoH1: 'Magnetic Stationery',
    productSlugs: ['magnetic-bookmarks', 'magnetic-notepads', 'magnetic-monthly-planner', 'magnetic-photo-frames']
  },
  {
    slug: 'magnetic-educational-products',
    name: 'Magnetic Educational Products',
    desc: 'Custom magnetic letters and numbers developed for education brands and learning programs.',
    seoTitle: 'Custom Magnetic Educational Products | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore custom magnetic letters and numbers for education brands and learning programs.',
    seoH1: 'Magnetic Educational Products',
    productSlugs: ['mag-101-magnetic-letters-numbers']
  },
  {
    slug: 'gift-sets-retail-packaging',
    name: 'Gift Sets & Retail Packaging',
    desc: 'Boxed epoxy magnet sets and multi-design souvenir collections prepared for retail presentation.',
    seoTitle: 'Magnet Gift Sets & Retail Packaging | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore boxed epoxy magnet sets and multi-design souvenir collections prepared for retail presentation.',
    seoH1: 'Gift Sets & Retail Packaging',
    productSlugs: [
      'boxed-epoxy-magnet-sets',
      'mini-boxed-epoxy-magnet-set',
      'slim-boxed-epoxy-magnet-set',
      'premium-thick-box-epoxy-magnet-set',
      'giant-boxed-epoxy-magnet-set',
      'souvenir-sets'
    ]
  }
];

const SUBCATEGORY_FILTERS = [
  { slug: 'printed-paper', name: 'Printed Paper', family: 'custom-fridge-magnets' },
  { slug: 'epoxy-domed', name: 'Epoxy-Domed', family: 'custom-fridge-magnets' },
  {
    slug: 'acrylic',
    name: 'Acrylic',
    family: 'custom-fridge-magnets',
    seoH1: 'Custom Acrylic Fridge Magnets',
    seoTitle: 'Custom Acrylic Fridge Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore four custom acrylic fridge magnet products for souvenir, museum, tourism, retail and premium merchandise programs.'
  },
  { slug: 'soft-pvc', name: 'Soft PVC', family: 'custom-fridge-magnets' },
  { slug: 'resin', name: 'Resin', family: 'custom-fridge-magnets' },
  { slug: 'bookmarks', name: 'Bookmarks', family: 'magnetic-stationery' },
  { slug: 'notepads', name: 'Notepads', family: 'magnetic-stationery' },
  {
    slug: 'calendars-planners',
    name: 'Calendars & Planners',
    family: 'magnetic-stationery',
    seoH1: 'Calendars & Planners',
    seoTitle: 'Magnetic Calendars & Planners | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore the A3 magnetic weekly and monthly planner with a reusable writing surface, flexible magnetic backing and custom layouts for stationery, office and household programs.'
  },
  { slug: 'photo-frames', name: 'Photo Frames', family: 'magnetic-stationery' },
  { slug: 'letters-numbers', name: 'Letters & Numbers', family: 'magnetic-educational-products' },
  { slug: 'boxed-epoxy-sets', name: 'Boxed Epoxy Sets', family: 'gift-sets-retail-packaging' },
  { slug: 'souvenir-sets', name: 'Souvenir Sets', family: 'gift-sets-retail-packaging' }
];

const CATEGORIES = [
  ...PRODUCT_FAMILIES.map((family) => ({
    slug: family.slug,
    name: family.name,
    desc: family.desc,
    seoTitle: family.seoTitle,
    seoDescription: family.seoDescription,
    seoH1: family.seoH1,
    count: family.productSlugs.length,
    color: 'c-cream'
  })),
  {
    slug: 'all',
    name: 'All Products',
    desc: 'Explore custom fridge magnets, magnetic stationery, educational magnetic products, gift sets and retail packaging for OEM, private-label and multi-design programs.',
    seoTitle: 'Custom Magnetic Products Manufacturer | Flexible Magnet (Huizhou)',
    ogTitle: 'Custom Magnetic Products | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore custom fridge magnets, magnetic stationery, educational magnetic products, gift sets and retail packaging for OEM, private-label and multi-design programs.',
    seoH1: 'Custom Magnetic Products',
    count: PRODUCT_FAMILIES.reduce((total, family) => total + family.productSlugs.length, 0),
    color: 'c-cream'
  }
];

const STANDARD_SPECS = {
  'MOQ': '200 pcs/sets total',
  'Physical Sampling': '7–10 calendar days',
  'Bulk Production': '15–20 calendar days',
  'Designs': 'Multi-design supported'
};
const EDUCATIONAL_DRAFT_SPECS = {
  ...STANDARD_SPECS,
  'Physical Sampling': '7–10 calendar days'
};
const GIFT_SET_DRAFT_SPECS = {
  ...STANDARD_SPECS,
  'Physical Sampling': '7–10 calendar days'
};

const PROJECT_SIZE_NOTE = 'Custom dimensions and thicknesses are available subject to project review.';
const COMPLIANCE_NOTE = 'Applicable testing and documentation are confirmed according to product construction, materials, intended use, age group and destination market.';
const BOXED_EPOXY_CONFIGURATION_NOTE = 'Magnet dimensions, artwork allocation, insert layout and final box configuration are confirmed according to the selected set format and project.';
const PLANNER_CONFIGURATION_NOTE = 'Planner dimensions, writing surface, magnetic backing, printing, packaging and accessory configuration are confirmed according to the selected format and project.';

function createBoxedEpoxySeries({
  slug,
  legacySlug,
  sku,
  name,
  imageFolder,
  externalBoxSize,
  setCapacity,
  tagline,
  positioning,
  seoTitle,
  seoDescription,
  specOverrides = {}
}) {
  return {
    slug,
    aliases: [legacySlug, sku, sku.toLowerCase()],
    public: true,
    publicInProductGrid: true,
    pageType: 'product-detail',
    boxedEpoxySeries: true,
    sku,
    imageSku: imageFolder,
    name,
    category: 'gift-sets-retail-packaging',
    subcategory: 'Boxed Epoxy Sets',
    subcategorySlug: 'boxed-epoxy-sets',
    badge: 'BOXED SERIES',
    app_badge: 'Gift Set',
    tagline,
    price_from: 0.45,
    moq: 200,
    specs: { ...GIFT_SET_DRAFT_SPECS, ...specOverrides, 'Customization': 'Custom Boxed Set' },
    seriesSpecifications: {
      'External Box Size': externalBoxSize,
      'Set Capacity': setCapacity
    },
    seriesConfigurationNote: BOXED_EPOXY_CONFIGURATION_NOTE,
    materials: [
      { value: 'Clear epoxy dome', status: 'project-specific', source: 'Confirmed common boxed epoxy construction direction' },
      { value: 'Printed coated paper', status: 'project-specific', source: 'Confirmed common boxed epoxy construction direction' },
      { value: 'Flexible magnetic backing', status: 'project-specific', source: 'Confirmed common boxed epoxy construction direction' }
    ],
    construction: [
      { value: 'Clear epoxy dome + printed coated paper + flexible magnetic backing', status: 'project-specific', source: 'Confirmed common boxed epoxy construction direction' }
    ],
    commonSizes: [],
    thickness: [],
    printingOptions: [
      { value: 'Full-color printed coated paper artwork', status: 'project-specific', source: 'Confirmed common boxed epoxy artwork direction' }
    ],
    finishOptions: [
      { value: 'Clear epoxy dome finish', status: 'project-specific', source: 'Confirmed common boxed epoxy finish direction' }
    ],
    packagingOptions: [
      { value: 'Clear display box', status: 'project-specific', source: 'Confirmed common boxed epoxy packaging direction' },
      { value: 'Custom insert subject to project review', status: 'project-specific', source: 'Confirmed conditional boxed epoxy packaging direction' }
    ],
    quoteRequirements: [
      { value: 'Selected boxed series and target retail presentation', status: 'confirmed', source: 'Confirmed series data' },
      { value: 'Artwork versions, assortment plan and quantity allocation', status: 'confirmed', source: 'SSOT multi-design rule' },
      { value: 'Insert, barcode, private-label packaging and destination-market requirements', status: 'confirmed', source: 'SSOT packaging and compliance rule' }
    ],
    options: {
      'Material / Construction': 'Epoxy magnet set construction is confirmed according to the selected series and project.',
      'Size & Shape': BOXED_EPOXY_CONFIGURATION_NOTE,
      'Surface Finish': 'Clear epoxy dome finish is confirmed according to project requirements.',
      'Printing': 'Artwork decoration and allocation are confirmed according to the selected set format.',
      'Magnetic Backing': 'Flexible magnetic backing is confirmed according to the final magnet format and use.',
      'Packaging': 'Clear display box and custom insert details are confirmed according to the selected series and project.'
    },
    features: [
      { title: 'Confirmed Box Format', desc: `${positioning}. External box size: ${externalBoxSize}.` },
      { title: 'Set Capacity', desc: `${setCapacity} per set.` },
      { title: 'Project Configuration', desc: BOXED_EPOXY_CONFIGURATION_NOTE }
    ],
    gallery: [
      { type: 'main', label: 'Main Product Photo', src: `assets/img/products/${imageFolder}/main.png`, alt: `${name} overall boxed set view` }
    ],
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `${name} shown as a complete retail boxed set` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: 'Epoxy Dome Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `Close-up of the clear epoxy dome and printed artwork for the ${name}` },
      { type: 'structure', src: `assets/img/products/${imageFolder}/structure-01.webp`, label: 'Box / Insert Structure', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `Box and insert structure required for the ${name}` },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: 'Retail Presentation', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `Retail presentation scene required for the ${name}` }
    ],
    seoTitle,
    seoDescription
  };
}

function createPlannerProduct({
  slug,
  aliases,
  sku,
  name,
  imageFolder,
  tagline,
  layoutLabel,
  layoutDescription,
  usageDescription,
  seoTitle,
  seoDescription
}) {
  return {
    slug,
    aliases: [...aliases, sku, sku.toLowerCase()],
    public: true,
    publicInProductGrid: true,
    pageType: 'product-detail',
    plannerSeries: true,
    sku,
    imageSku: imageFolder,
    name,
    category: 'magnetic-stationery',
    subcategory: 'Calendars & Planners',
    subcategorySlug: 'calendars-planners',
    badge: 'PLANNER',
    app_badge: 'Stationery',
    tagline,
    price_from: 0.65,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Planner Layout' },
    plannerConfigurationNote: PLANNER_CONFIGURATION_NOTE,
    materials: [
      { value: `Writing surface and magnetic backing for the ${layoutLabel.toLowerCase()} are confirmed by project.`, status: 'project-specific', source: 'Existing planner data and SSOT project-specific specification rule' }
    ],
    construction: [
      { value: `${layoutLabel} construction is confirmed according to the selected writing surface, magnetic backing and intended use.`, status: 'project-specific', source: 'Existing planner data and SSOT project review workflow' }
    ],
    commonSizes: [
      { value: PLANNER_CONFIGURATION_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: 'Planner thickness is confirmed according to the selected construction and project.', status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    printingOptions: [
      { value: `${layoutLabel} artwork and planning layout are confirmed according to the project.`, status: 'project-specific', source: 'Existing product data' }
    ],
    finishOptions: [
      { value: 'Writable surface finish is confirmed according to the selected planner format.', status: 'project-specific', source: 'Existing planner data; requires project confirmation' }
    ],
    packagingOptions: [
      { value: 'Packaging and accessory configuration are confirmed according to the selected planner format and project.', status: 'project-specific', source: 'SSOT packaging review rule' }
    ],
    quoteRequirements: [
      { value: `${layoutLabel}, artwork and writing-surface requirement`, status: 'confirmed', source: 'Existing product data' },
      { value: 'Target dimensions, quantity and layout versions', status: 'confirmed', source: 'SSOT MOQ and project review rule' },
      { value: 'Packaging, accessories, destination market and documentation needs', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: `${layoutLabel} image and product reference are confirmed from the existing product object; construction remains project-specific.`,
    features: [
      { title: layoutLabel, desc: layoutDescription },
      { title: 'Planning Use', desc: usageDescription },
      { title: 'Project Configuration', desc: PLANNER_CONFIGURATION_NOTE }
    ],
    gallery: [
      { type: 'main', label: 'Main Product Photo', src: `assets/img/products/${imageFolder}/main.png`, alt: `${name} shown in use on a magnetic surface` }
    ],
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `${name} shown as a complete magnetic planning product` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: `${layoutLabel} Surface Detail`, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `Close-up required to show the writing surface and printed layout of the ${name}` },
      { type: 'structure', src: `assets/img/products/${imageFolder}/structure-01.webp`, label: 'Side or Magnetic Back', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `Side or back view required to show the structure and magnetic backing of the ${name}` },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: `${layoutLabel} Use Scene`, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `Practical office or household planning scene required for the ${name}` }
    ],
    seoTitle,
    seoDescription
  };
}

function createAcrylicProduct({
  slug,
  legacySlug,
  sku,
  name,
  imageFolder,
  nominalThickness,
  positioning,
  tagline,
  detailLabel,
  detailAlt,
  structureAlt,
  structureFile = 'structure-01.webp',
  applicationAlt,
  seoTitle,
  seoDescription
}) {
  return {
    slug,
    aliases: [legacySlug, sku, sku.toLowerCase()],
    public: true,
    publicInProductGrid: true,
    pageType: 'product-detail',
    acrylicProduct: true,
    sku,
    imageSku: imageFolder,
    name,
    category: 'custom-fridge-magnets',
    subcategory: 'Acrylic',
    subcategorySlug: 'acrylic',
    badge: 'ACRYLIC',
    app_badge: 'Souvenir',
    tagline,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Acrylic Series': nominalThickness, 'Customization': 'Custom Artwork & Shape' },
    materials: [
      { value: nominalThickness, status: 'confirmed', source: 'Linda-confirmed acrylic product classification' },
      { value: 'Printed or engraved artwork according to the selected product', status: 'project-specific', source: 'Linda-confirmed acrylic product positioning' },
      { value: 'Magnetic backing component', status: 'project-specific', source: 'SSOT project-specific construction rule' }
    ],
    construction: [
      { value: `${nominalThickness} acrylic series + artwork decoration + magnetic backing`, status: 'project-specific', source: 'Final construction confirmed according to artwork and project requirements' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: nominalThickness, status: 'confirmed', source: 'Linda-confirmed acrylic series classification' }
    ],
    printingOptions: [
      { value: 'Artwork decoration is confirmed according to the selected acrylic product and design.', status: 'project-specific', source: 'Linda-confirmed product positioning' }
    ],
    finishOptions: [
      { value: positioning, status: 'confirmed', source: 'Linda-confirmed acrylic product positioning' }
    ],
    packagingOptions: [
      { value: 'Backing cards, individual bags and retail packaging options are reviewed by project.', status: 'project-specific', source: 'SSOT packaging review rule' }
    ],
    quoteRequirements: [
      { value: 'Artwork file, target shape and dimensions', status: 'confirmed', source: 'SSOT project review workflow' },
      { value: 'Quantity, magnetic backing and edge / finish expectation', status: 'confirmed', source: 'Linda-confirmed acrylic procurement focus' },
      { value: 'Packaging, destination market and documentation requirements', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: `${nominalThickness} acrylic series and positioning are confirmed; final artwork, dimensions, backing and packaging remain project-specific.`,
    options: {
      'Material / Construction': `${nominalThickness} acrylic product construction confirmed by project.`,
      'Size & Shape': 'Custom options available subject to project review.',
      'Surface Finish': positioning,
      'Printing': 'Artwork decoration confirmed according to the selected product.',
      'Magnetic Backing': 'Magnetic backing confirmed according to product size and use.',
      'Packaging': 'Retail packaging options are available according to the project.'
    },
    features: [
      { title: nominalThickness, desc: positioning },
      { title: 'Artwork-Led Customization', desc: 'Shape, artwork treatment and edge presentation are reviewed for the selected product.' },
      { title: 'Retail Project Planning', desc: 'Magnetic backing, packaging and destination-market requirements are confirmed by project.' }
    ],
    gallery: [
      { type: 'main', label: 'Main Product Photo', src: `assets/img/products/${imageFolder}/main.png`, alt: `${name} product view` }
    ],
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: `${name} shown as a complete acrylic magnet product` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: detailLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: detailAlt },
      { type: 'structure', src: `assets/img/products/${imageFolder}/${structureFile}`, label: `${nominalThickness} Side or Magnetic Back`, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: structureAlt },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: 'Souvenir / Retail Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: applicationAlt }
    ],
    seoTitle,
    seoDescription
  };
}

function createFridgeMagnetDraft({
  slug,
  name,
  subcategory,
  subcategorySlug,
  imageFolder,
  tagline,
  construction,
  procurementFocus,
  appBadge,
  mainGuidance,
  detailGuidance,
  structureGuidance,
  applicationGuidance,
  summaryPanels,
  seoDescription
}) {
  return {
    slug,
    aliases: [],
    public: false,
    publicInProductGrid: false,
    publicationStatus: 'draft',
    noIndex: true,
    pageType: 'product-detail',
    name,
    category: 'custom-fridge-magnets',
    subcategory,
    subcategorySlug,
    badge: 'DRAFT',
    app_badge: appBadge,
    tagline,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Project-Specific Custom Development' },
    materials: [
      { value: construction, status: 'project-specific', source: 'SSOT product naming and project-specific construction rules' }
    ],
    construction: [
      { value: construction, status: 'project-specific', source: 'SSOT product naming and project-specific construction rules' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    packagingOptions: [
      { value: 'Retail and protective packaging options are confirmed according to the product construction and project.', status: 'project-specific', source: 'SSOT packaging review rule' }
    ],
    quoteRequirements: [
      { value: 'Artwork, target shape and dimensions', status: 'confirmed', source: 'SSOT project review workflow' },
      { value: 'Quantity, design allocation and intended retail use', status: 'confirmed', source: 'SSOT MOQ and multi-design rules' },
      { value: 'Packaging, destination market and documentation requirements', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: 'Local development draft. Product reference, final construction and required main product photography await Linda confirmation before publication.',
    options: {
      'Material / Construction': construction,
      'Size & Shape': 'Custom options are available subject to project review.',
      'Surface Finish': 'Surface treatment is confirmed according to the selected construction and artwork.',
      'Magnetic Backing': 'Magnetic backing is confirmed according to product format, size and intended use.',
      'Packaging': 'Retail and protective packaging options are reviewed by project.'
    },
    features: procurementFocus.map(([title, desc]) => ({ title, desc })),
    summaryPanels,
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: mainGuidance, alt: `${name} overall product photo required before publication` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: 'Surface & Edge Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: detailGuidance, alt: `${name} surface, artwork and edge detail photo required` },
      { type: 'structure', src: `assets/img/products/${imageFolder}/structure-01.webp`, label: 'Side & Magnetic Back', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: structureGuidance, alt: `${name} side and magnetic backing structure photo required` },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: 'Retail Application Scene', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: applicationGuidance, alt: `${name} retail application scene photo required` }
    ],
    seoTitle: `${name} | Flexible Magnet (Huizhou)`,
    seoDescription
  };
}

function createMagneticStationeryDraft({ slug, sku, name, subcategory, imageFolder, tagline }) {
  const projectSpecificConstruction = 'Material, surface finish, edge treatment, magnetic backing and packaging are confirmed according to the selected format and project.';
  return {
    slug,
    aliases: [sku, sku.toLowerCase()],
    public: false,
    publicInProductGrid: false,
    publicationStatus: 'draft',
    noIndex: true,
    pageType: 'product-detail',
    sku,
    imageSku: imageFolder,
    name,
    category: 'magnetic-stationery',
    subcategory,
    subcategorySlug: slug.replace('magnetic-', ''),
    badge: 'DRAFT',
    app_badge: 'Stationery',
    tagline,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Project-Specific Custom Development' },
    materials: [
      { value: projectSpecificConstruction, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    construction: [
      { value: projectSpecificConstruction, status: 'project-specific', source: 'SSOT project review workflow' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    packagingOptions: [
      { value: 'Retail and protective packaging options are confirmed according to the selected format and project.', status: 'project-specific', source: 'SSOT packaging review rule' }
    ],
    quoteRequirements: [
      { value: 'Artwork, target dimensions and intended use', status: 'confirmed', source: 'SSOT project review workflow' },
      { value: 'Quantity, design allocation and selected product format', status: 'confirmed', source: 'SSOT MOQ and multi-design rules' },
      { value: 'Packaging, destination market and documentation requirements', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: 'Local development draft. Product reference, final specifications and required product photography await Linda confirmation before publication.',
    options: {
      'Material / Construction': projectSpecificConstruction,
      'Size & Shape': PROJECT_SIZE_NOTE,
      'Surface Finish': 'Surface treatment is confirmed according to the selected construction and artwork.',
      'Magnetic Backing': 'Magnetic backing is confirmed according to product format, size and intended use.',
      'Packaging': 'Retail and protective packaging options are reviewed by project.'
    },
    features: [],
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: `Show the complete ${name.toLowerCase()} product clearly.`, alt: `${name} overall product photo required before publication` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: 'Material / Surface / Edge Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show material, printed surface, finish and edge quality in close-up.', alt: `${name} material, surface and edge detail photo required` },
      { type: 'structure', src: `assets/img/products/${imageFolder}/structure-01.webp`, label: 'Back / Side / Construction', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the back, side profile, layers or magnetic construction.', alt: `${name} back, side and construction photo required` },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: 'Retail / Usage Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the product in an appropriate retail or end-use setting.', alt: `${name} retail or usage application photo required` }
    ],
    seoTitle: `${name} | Flexible Magnet (Huizhou)`,
    seoDescription: `Local development draft for ${name}. Final construction, imagery and product reference require confirmation before publication.`
  };
}

function createMagneticEducationalDraft({
  slug,
  aliases = [],
  sku = '',
  name,
  subcategory,
  subcategorySlug,
  imageFolder,
  detailLabel,
  structureLabel,
  applicationLabel,
  detailGuidance,
  structureGuidance,
  applicationGuidance
}) {
  const draftNote = 'Product reference awaiting confirmation. Local development draft. Final product specifications and real product images require confirmation before publication.';
  return {
    slug,
    aliases,
    public: false,
    publicInProductGrid: false,
    publicationStatus: 'draft',
    noIndex: true,
    noFollow: true,
    pageType: 'product-detail',
    ...(sku ? { sku, imageSku: imageFolder } : { imageSku: imageFolder }),
    name,
    category: 'magnetic-educational-products',
    subcategory,
    subcategorySlug,
    badge: 'DRAFT',
    app_badge: 'Education',
    tagline: draftNote,
    moq: 200,
    specs: { ...EDUCATIONAL_DRAFT_SPECS, 'Customization': 'Project-Specific Custom Development' },
    materials: [
      { value: 'NOT VERIFIED', status: 'needs-review', source: 'Awaiting Linda confirmation' }
    ],
    construction: [
      { value: 'NOT VERIFIED', status: 'needs-review', source: 'Awaiting Linda confirmation' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    packagingOptions: [
      { value: 'NOT VERIFIED', status: 'needs-review', source: 'Awaiting Linda confirmation' }
    ],
    quoteRequirements: [
      { value: 'Artwork, learning content and language versions', status: 'confirmed', source: 'Draft product intake requirement' },
      { value: 'Quantity, set composition and design allocation', status: 'confirmed', source: 'SSOT MOQ and multi-design rules' },
      { value: 'Intended use, destination market and required documentation', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: draftNote,
    options: {
      'Product Reference': 'Product reference awaiting confirmation.',
      'Specifications': 'Final product specifications require confirmation before publication.',
      'Images': 'Real product images require confirmation before publication.'
    },
    features: [],
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Overall Product Photo', alt: `${name} overall product photo required before publication` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: detailLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: detailGuidance, alt: `${name} detail product photo required before publication` },
      { type: 'structure', src: `assets/img/products/${imageFolder}/structure-01.webp`, label: structureLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: structureGuidance, alt: `${name} construction photo required before publication` },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: applicationLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: applicationGuidance, alt: `${name} application photo required before publication` }
    ],
    seoTitle: `${name} | Flexible Magnet (Huizhou)`,
    seoDescription: `Local development draft for ${name}. Final product specifications and real product images require confirmation before publication.`
  };
}

function createGiftSetDraft({
  slug,
  aliases = [],
  sku = '',
  name,
  subcategory,
  subcategorySlug,
  imageFolder,
  detailLabel,
  structureLabel,
  applicationLabel,
  detailGuidance,
  structureGuidance,
  applicationGuidance
}) {
  const draftNote = 'Product reference awaiting confirmation. Local development draft. Final product specifications and real product images require confirmation before publication.';
  return {
    slug,
    aliases,
    public: false,
    publicInProductGrid: false,
    publicationStatus: 'draft',
    noIndex: true,
    noFollow: true,
    pageType: 'product-detail',
    ...(sku ? { sku, imageSku: imageFolder } : { imageSku: imageFolder }),
    name,
    category: 'gift-sets-retail-packaging',
    subcategory,
    subcategorySlug,
    badge: 'DRAFT',
    app_badge: 'Gift Set',
    tagline: draftNote,
    moq: 200,
    specs: { ...GIFT_SET_DRAFT_SPECS, 'Customization': 'Project-Specific Custom Development' },
    materials: [
      { value: 'NOT VERIFIED', status: 'needs-review', source: 'Awaiting Linda confirmation' }
    ],
    construction: [
      { value: 'NOT VERIFIED', status: 'needs-review', source: 'Awaiting Linda confirmation' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    packagingOptions: [
      { value: 'NOT VERIFIED', status: 'needs-review', source: 'Awaiting Linda confirmation' }
    ],
    quoteRequirements: [
      { value: 'Artwork, collection theme and target retail use', status: 'confirmed', source: 'Draft product intake requirement' },
      { value: 'Quantity, set composition and design allocation', status: 'confirmed', source: 'SSOT MOQ and multi-design rules' },
      { value: 'Packaging, destination market and required documentation', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: draftNote,
    options: {
      'Product Reference': 'Product reference awaiting confirmation.',
      'Specifications': 'Final product specifications require confirmation before publication.',
      'Images': 'Real product images require confirmation before publication.'
    },
    features: [],
    imageSlots: [
      { type: 'main', src: `assets/img/products/${imageFolder}/main.png`, label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Overall Product Photo', alt: `${name} overall product photo required before publication` },
      { type: 'detail', src: `assets/img/products/${imageFolder}/detail-01.webp`, label: detailLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: detailGuidance, alt: `${name} product or collection detail photo required before publication` },
      { type: 'structure', src: `assets/img/products/${imageFolder}/structure-01.webp`, label: structureLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: structureGuidance, alt: `${name} set or packaging structure photo required before publication` },
      { type: 'application', src: `assets/img/products/${imageFolder}/application-01.webp`, label: applicationLabel, required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: applicationGuidance, alt: `${name} retail or gift application photo required before publication` }
    ],
    seoTitle: `${name} | Flexible Magnet (Huizhou)`,
    seoDescription: `Local development draft for ${name}. Final product specifications and real product images require confirmation before publication.`
  };
}

const PRODUCTS = [
  {
    slug: 'mag-006-custom-printed-paper-fridge-magnets',
    aliases: ['mag-006-printable-magnetic-sheet'],
    public: true,
    sku: 'MAG-006',
    name: 'Custom Printed Paper Fridge Magnets',
    category: 'custom-fridge-magnets',
    subcategory: 'Printed Paper',
    subcategorySlug: 'printed-paper',
    badge: 'BEST SELLER',
    app_badge: 'Promotion',
    tagline: 'Lightweight, full-color fridge magnets developed for promotional campaigns, tourism programs, retail giveaways and multi-design souvenir collections.',
    price_from: 0.08,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Printing' },
    materials: [
      { value: 'Protective PP film', status: 'project-specific', source: 'Report excerpt; final material stack confirmed by project' },
      { value: 'Full-color printed coated paper', status: 'project-specific', source: 'Report excerpt; final paper/artwork specification confirmed by project' },
      { value: 'Flexible magnetic rubber', status: 'project-specific', source: 'Report excerpt and SSOT product scope' }
    ],
    construction: [
      { value: 'Protective PP film + full-color printed coated paper + flexible magnetic rubber', status: 'project-specific', source: 'Report excerpt; final structure confirmed by artwork, size, thickness and use' }
    ],
    commonSizes: [
      { value: '30 x 30 mm', status: 'example', source: 'Report excerpt; common size example only' },
      { value: '40 x 40 mm', status: 'example', source: 'Report excerpt; common size example only' },
      { value: '100 x 65 mm', status: 'example', source: 'Report excerpt; common size example only' },
      { value: '115 x 82 mm', status: 'example', source: 'Report excerpt; common size example only' }
    ],
    thickness: [
      { value: '0.5 mm or 1.0 mm', status: 'example', source: 'Report excerpt; common option only' },
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    printingOptions: [
      { value: 'Full-color printed artwork', status: 'project-specific', source: 'Current product data and report excerpt' },
      { value: 'Printing layout is reviewed according to artwork, size, shape and multi-design allocation.', status: 'project-specific', source: 'SSOT MOQ and layout rule' }
    ],
    finishOptions: [
      { value: 'Protective PP film / laminated surface finish', status: 'project-specific', source: 'Report excerpt and current product data' }
    ],
    packagingOptions: [
      { value: 'Backing cards', status: 'project-specific', source: 'Current product data' },
      { value: 'Individual bags', status: 'project-specific', source: 'Current product data' },
      { value: 'Private-label packaging subject to project review', status: 'project-specific', source: 'Current product data and SSOT conditional wording' }
    ],
    quoteRequirements: [
      { value: 'Artwork files and intended size / shape', status: 'confirmed', source: 'SSOT project review workflow' },
      { value: 'Target thickness, quantity and design split', status: 'confirmed', source: 'SSOT MOQ and multi-design rule' },
      { value: 'Packaging requirements, destination market and testing needs', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: 'Material stack and common size/thickness examples added from report excerpt; final construction remains project-specific under SSOT.',
    options: {
      'Material / Construction': 'Printed paper laminated fridge magnet construction',
      'Size & Shape': 'Custom options available subject to project review.',
      'Surface Finish': 'Laminated surface finish',
      'Printing': 'Full-color printing',
      'Magnetic Backing': 'Magnetic backing confirmed according to product size and use.',
      'Packaging': 'Backing cards, individual bags and private-label packaging are available according to the project.'
    },
    bestSuitedFor: [
      ['Tourism & Souvenirs', 'industries/tourism-souvenirs.html'],
      ['Promotional Gifts', 'industries/promotional-gifts.html'],
      ['Museums & Gift Shops', 'industries/museums-gift-shops.html']
    ],
    features: [
      { title: 'Full-Color Printing', desc: 'Suitable for detailed artwork and coordinated multi-design collections.' },
      { title: 'Lightweight Construction', desc: 'Designed for promotional, souvenir and retail distribution programs.' },
      { title: 'Retail Packaging Options', desc: 'Backing cards, individual bags and private-label packaging are available according to the project.' }
    ],
    gallery: [
      { type: 'main', src: 'assets/img/products/mag-006/main.png', alt: 'Custom printed paper fridge magnets overall product view' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-006/main.png', label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom printed paper fridge magnets shown as a complete product collection' },
      { type: 'detail', src: 'assets/img/products/mag-006/detail-01.webp', label: 'Print & Edge Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Close-up of the print quality, lamination and cut edge of a custom printed paper fridge magnet' },
      { type: 'structure', src: 'assets/img/products/mag-006/Structure-01.webp', label: 'Magnetic Back', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Back view showing the flexible magnetic backing of a printed paper fridge magnet' },
      { type: 'application', src: 'assets/img/products/mag-006/application-01.webp', label: 'Fridge / Retail Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom printed paper fridge magnets displayed on a refrigerator or in a retail setting' }
    ],
    seoTitle: 'Custom Printed Paper Fridge Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Request custom printed paper fridge magnets with laminated finish, flexible magnetic backing review, retail packaging options and project-based MOQ planning.'
  },
  {
    slug: 'premium-acrylic-souvenir-magnets',
    aliases: [
      'acrylic-fridge-magnets',
      'mag-002-acrylic-art-magnet',
      'mag-002-acrylic-printed',
      'MAG-002',
      'mag-002'
    ],
    public: true,
    publicInProductGrid: true,
    pageType: 'product-detail',
    acrylicProduct: true,
    sku: 'MAG-002',
    imageSku: 'mag-002',
    name: 'Premium Acrylic Souvenir Magnets',
    category: 'custom-fridge-magnets',
    subcategory: 'Acrylic',
    subcategorySlug: 'acrylic',
    badge: 'PREMIUM',
    app_badge: 'Museum',
    tagline: 'Custom-shaped acrylic souvenir magnets for museums, tourism retail, artwork-led merchandise and premium gift programs.',
    price_from: 0.22,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Shape' },
    materials: [
      { value: 'Clear acrylic', status: 'project-specific', source: 'Report excerpt; selected acrylic format confirmed by project' },
      { value: 'Printed artwork or insert', status: 'project-specific', source: 'Report excerpt; decoration method confirmed by selected format' },
      { value: 'Magnetic backing component', status: 'project-specific', source: 'Report excerpt and current product data' }
    ],
    construction: [
      { value: 'Clear acrylic + printed artwork or insert + magnetic backing component', status: 'project-specific', source: 'Report excerpt; final series confirmed by project review' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT; 3 mm / 5 mm / 6 mm remain series references, not universal standards' }
    ],
    printingOptions: [
      { value: 'Printed artwork or insert decoration', status: 'project-specific', source: 'Report excerpt and current product data' },
      { value: 'Artwork decoration is confirmed according to the selected acrylic format.', status: 'project-specific', source: 'Current product data' }
    ],
    finishOptions: [
      { value: 'Clear acrylic presentation', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Polished or specialty finish options are confirmed according to the selected series.', status: 'project-specific', source: 'Current product data' }
    ],
    packagingOptions: [
      { value: 'Backing cards', status: 'project-specific', source: 'Current product data' },
      { value: 'Individual bags', status: 'project-specific', source: 'Current product data' },
      { value: 'Private-label packaging subject to project review', status: 'project-specific', source: 'Current product data and SSOT conditional wording' }
    ],
    quoteRequirements: [
      { value: 'Artwork file and selected acrylic series', status: 'confirmed', source: 'Current product engineering data' },
      { value: 'Target dimensions, edge/finish expectation and magnetic backing use', status: 'confirmed', source: 'SSOT project review workflow' },
      { value: 'Packaging format, quantity and destination market', status: 'confirmed', source: 'SSOT MOQ and compliance rule' }
    ],
    dataStatus: 'MAG-002 is a confirmed independent premium acrylic souvenir magnet product; construction, dimensions and thickness remain project-specific.',
    options: {
      'Material / Construction': 'Acrylic fridge magnet construction confirmed by project.',
      'Size & Shape': 'Custom options available subject to project review.',
      'Surface Finish': 'Polished or specialty finish options are confirmed according to the selected series.',
      'Printing': 'Artwork decoration is confirmed according to the selected acrylic format.',
      'Magnetic Backing': 'Magnetic backing confirmed according to product size and use.',
      'Packaging': 'Backing cards, individual bags and private-label packaging are available according to the project.'
    },
    gallery: [
      { type: 'main', label: 'Main Product Photo', src: 'assets/img/products/mag-002/main.png', alt: 'Premium Acrylic Souvenir Magnets product view' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-002/main.png', label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Premium Acrylic Souvenir Magnets shown as custom-shaped artwork-led merchandise' },
      { type: 'detail', src: 'assets/img/products/mag-002/detail-01.webp', label: 'Clear Edge / Artwork Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Close-up required to show the transparent edge, printed artwork, custom cut edge or surface of Premium Acrylic Souvenir Magnets' },
      { type: 'structure', src: 'assets/img/products/mag-002/structure-01.webp', label: 'Acrylic Structure / Magnetic Back', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Side, acrylic structure or magnetic backing view required for Premium Acrylic Souvenir Magnets' },
      { type: 'application', src: 'assets/img/products/mag-002/application-01.webp', label: 'Museum / Tourism Retail Scene', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Museum shop, tourism souvenir, gift retail or display scene required for Premium Acrylic Souvenir Magnets' }
    ],
    features: [
      { title: 'Custom-Shaped Souvenirs', desc: 'Developed for artwork-led museum, tourism and branded merchandise programs.' },
      { title: 'Premium Retail Presentation', desc: 'Magnetic backing and retail packaging options are reviewed for the selected project.' },
      { title: 'Project-Specific Construction', desc: 'Acrylic construction, thickness, shape and finish are confirmed by project rather than assigned a fixed 5 mm specification.' }
    ],
    seoTitle: 'Premium Acrylic Souvenir Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Request custom-shaped Premium Acrylic Souvenir Magnets for museums, tourism retail, artwork-led merchandise and premium gift programs.'
  },
  createAcrylicProduct({
    slug: 'standard-3mm-acrylic-magnets',
    legacySlug: 'am-01-standard-3mm-acrylic-magnet',
    sku: 'AM-01',
    name: 'Standard 3mm Acrylic Magnets',
    imageFolder: 'am-01',
    nominalThickness: 'Nominal 3mm acrylic series',
    positioning: 'Standard clear acrylic presentation with artwork and edge treatment confirmed by project.',
    tagline: 'Standard 3mm acrylic magnets for custom artwork, souvenir retail and branded merchandise programs requiring a clear, lightweight presentation.',
    detailLabel: 'Clear Edge / Print Detail',
    detailAlt: 'Close-up required to show the transparent edge, printing or surface detail of Standard 3mm Acrylic Magnets',
    structureAlt: 'Side or magnetic backing view required to show the nominal 3 mm structure of Standard 3mm Acrylic Magnets',
    applicationAlt: 'Fridge, retail or souvenir application scene required for Standard 3mm Acrylic Magnets',
    seoTitle: 'Standard 3mm Acrylic Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Request Standard 3mm Acrylic Magnets for custom artwork, souvenir retail and branded merchandise projects.'
  }),
  createAcrylicProduct({
    slug: 'premium-5mm-polished-acrylic-magnets',
    legacySlug: 'am-02-premium-5mm-polished-magnet',
    sku: 'AM-02',
    name: 'Premium 5mm Polished Acrylic Magnets',
    imageFolder: 'am-02',
    nominalThickness: 'Nominal 5mm acrylic series',
    positioning: 'Polished-edge positioning for a premium visual presentation.',
    tagline: 'Premium 5mm polished acrylic magnets for museum, gift retail and display programs requiring substantial clear edges and elevated presentation.',
    detailLabel: 'Transparency / Polished Edge Detail',
    detailAlt: 'Close-up required to show transparency, polished edges or surface detail of Premium 5mm Polished Acrylic Magnets',
    structureAlt: 'Side or magnetic backing view required to show the nominal 5 mm structure of Premium 5mm Polished Acrylic Magnets',
    structureFile: 'Structure-01.webp',
    applicationAlt: 'Museum, gift retail or display application scene required for Premium 5mm Polished Acrylic Magnets',
    seoTitle: 'Premium 5mm Polished Acrylic Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Request Premium 5mm Polished Acrylic Magnets with polished-edge positioning for museum, gift retail and premium display programs.'
  }),
  createAcrylicProduct({
    slug: 'cnc-engraved-6mm-acrylic-magnets',
    legacySlug: 'am-03-cnc-engraved-6mm-magnet',
    sku: 'AM-03',
    name: 'CNC Engraved 6mm Acrylic Magnets',
    imageFolder: 'am-03',
    nominalThickness: 'Nominal 6mm acrylic series',
    positioning: 'CNC-engraved acrylic positioning for dimensional artwork and premium presentation.',
    tagline: 'CNC Engraved 6mm acrylic magnets for branded, souvenir and retail programs requiring dimensional engraving and a substantial acrylic presentation.',
    detailLabel: 'CNC Engraving / Edge Detail',
    detailAlt: 'Close-up required to show CNC engraving, transparent edges or processing detail of CNC Engraved 6mm Acrylic Magnets',
    structureAlt: 'Side or magnetic backing view required to show the nominal 6 mm structure of CNC Engraved 6mm Acrylic Magnets',
    applicationAlt: 'Brand, souvenir or retail application scene required for CNC Engraved 6mm Acrylic Magnets',
    seoTitle: 'CNC Engraved 6mm Acrylic Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Request CNC Engraved 6mm Acrylic Magnets for branded, souvenir and premium retail merchandise programs.'
  }),
  Object.assign(createFridgeMagnetDraft({
    slug: 'epoxy-domed-fridge-magnets',
    name: 'Custom Epoxy-Domed Fridge Magnets',
    subcategory: 'Epoxy-Domed',
    subcategorySlug: 'epoxy-domed',
    imageFolder: 'epoxy-domed',
    tagline: 'Custom epoxy-domed fridge magnets combine full-color printed artwork with a high-clarity epoxy resin dome and a flexible magnetic backing. Available in square, rectangular, round and custom die-cut formats, they are developed for museum merchandise, destination souvenirs, promotional campaigns, licensed collections and multi-design retail programs.',
    construction: 'The standard construction combines a high-clarity epoxy resin dome, a 0.1 mm printed synthetic-paper artwork layer and a 1.0 mm isotropic flexible magnetic backing. The finished product is approximately 3 mm thick. Flexible or rigid epoxy resin formulations can be selected according to the required product construction and application.',
    procurementFocus: [
      ['Clear Domed Surface', 'Surface clarity, artwork presentation and edge expectations are confirmed during project review.'],
      ['Custom Artwork & Shapes', 'Full-color artwork, shape and multi-design allocation are planned according to the selected format.'],
      ['Retail Project Planning', 'Backing and retail packaging options are confirmed before sampling and bulk production.']
    ],
    appBadge: 'Souvenir',
    mainGuidance: 'Photograph multiple finished epoxy-domed fridge magnets together as a complete product group.',
    detailGuidance: 'Show the clear epoxy surface, printed artwork and edge finish in close-up.',
    structureGuidance: 'Show the side layer construction or flexible magnetic backing.',
    applicationGuidance: 'Show a souvenir, promotional or retail application scene.',
    seoDescription: 'Custom epoxy-domed fridge magnets with high-clarity resin, full-color printing and flexible magnetic backing. Square, round, rectangular and custom shapes for OEM retail projects.'
  }), {
    aliases: [],
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    sku: 'MAG-EPO-01',
    imageSku: 'epoxy-domed',
    badge: 'CUSTOM',
    specs: {
      'MOQ': '200 pcs/sets total',
      'Multi-design': 'Multiple designs may be combined, subject to project review.',
      'Physical Sampling': '7–10 calendar days',
      'Bulk Production': '15–20 calendar days',
      'Payment': 'Payment terms are confirmed according to order value and project requirements.'
    },
    showHeroProcurement: true,
    showProjectStandards: true,
    showOrderInformation: false,
    summaryPlacement: 'hero',
    featureTags: ['OEM / ODM', 'Full-Color Printing', 'Custom Shapes', 'Multi-Design Programs'],
    listingTags: ['Full-Color Printing', 'Custom Shapes', 'Multi-Design Programs'],
    materials: [
      { value: 'High-clarity epoxy resin dome', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 construction' },
      { value: '0.1 mm printed synthetic-paper artwork layer', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 construction' },
      { value: '1.0 mm isotropic flexible magnetic backing', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 construction' }
    ],
    construction: [
      { value: 'Approximately 3 mm finished thickness', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 construction' },
      { value: 'Flexible or rigid epoxy resin formulation', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 resin options' }
    ],
    commonSizes: [
      { value: '30 × 30 mm', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 sizes' },
      { value: '50 × 50 mm', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 sizes' },
      { value: '70 × 70 mm', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 sizes' },
      { value: '90 × 90 mm', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 sizes' },
      { value: '78 × 53 mm', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 sizes' },
      { value: 'Ø53 mm', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 sizes' }
    ],
    printingOptions: [
      { value: 'CMYK four-color offset printing', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 printing' },
      { value: 'UV digital printing', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 printing' },
      { value: 'Pantone or CMYK color matching', status: 'project-specific', source: 'Linda-confirmed MAG-EPO-01 color-matching rule' }
    ],
    packagingOptions: [
      { value: 'Individual OPP Bag', status: 'confirmed', source: 'Linda-confirmed MAG-EPO-01 standard packing' },
      { value: 'Backing Card', status: 'project-specific', source: 'Linda-confirmed MAG-EPO-01 packaging options' },
      { value: 'Blister Packaging', status: 'project-specific', source: 'Linda-confirmed MAG-EPO-01 packaging options' },
      { value: 'Display Box', status: 'project-specific', source: 'Linda-confirmed MAG-EPO-01 packaging options' },
      { value: 'Gift Box', status: 'project-specific', source: 'Linda-confirmed MAG-EPO-01 packaging options' }
    ],
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: [],
        items: [
          'Domed material: high-clarity epoxy resin',
          'Printed layer: 0.1 mm printed synthetic-paper artwork',
          'Magnetic backing: 1.0 mm isotropic flexible magnet',
          'Approximately 3 mm finished thickness',
          'Flexible or rigid epoxy resin formulation, selected per project'
        ]
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: [],
        items: [
          'Common sizes: 30 × 30 mm, 50 × 50 mm, 70 × 70 mm, 90 × 90 mm, 78 × 53 mm and Ø53 mm',
          'Shapes: square, rectangle, round and custom die-cut',
          'Printing: CMYK four-color offset or UV digital printing, with Pantone or CMYK color matching',
          'Packaging: individual OPP bag, backing card, blister packaging, display box or gift box'
        ]
      }
    ],
    projectStandards: {
      'MOQ': '200 pcs/sets total per product construction and manufacturing process',
      'Multi-design options': 'Multiple designs may be combined, subject to project review',
      'Physical Sampling': '7–10 calendar days',
      'Bulk Production': '15–20 calendar days',
      'Testing & Documentation': 'EN 71-3, REACH, RoHS 2.0 and California Proposition 65 documentation can be provided. Applicable scope is confirmed according to the final construction, intended use, age group and destination market.'
    },
    imageSlots: [
      { type: 'main', src: 'assets/img/products/epoxy-domed/main.png', label: 'Epoxy-Domed Magnet Collection', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom square, rectangular and round epoxy-domed fridge magnets' },
      { type: 'detail', src: 'assets/img/products/epoxy-domed/detail-01.webp', label: 'High-Clarity Epoxy Dome Detail', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Close-up of the high-clarity epoxy dome and printed artwork' },
      { type: 'structure', src: 'assets/img/products/epoxy-domed/structure-01.webp', label: 'Flexible Magnetic Backing', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Front, back and side views of an epoxy-domed fridge magnet' },
      { type: 'application', src: 'assets/img/products/epoxy-domed/application-01.webp', label: 'Fridge Application', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom epoxy-domed souvenir magnets displayed on a refrigerator' }
    ],
    features: [
      { title: 'High-Clarity Domed Finish', desc: 'The transparent epoxy resin dome creates a glossy, dimensional surface that enhances the color, detail and visual depth of the printed artwork.' },
      { title: 'Flexible Format Selection', desc: 'Square, rectangular, round and custom die-cut formats support souvenir collections, promotional programs and coordinated multi-design retail ranges.' },
      { title: 'Retail-Ready Project Support', desc: 'Multiple printing processes, color-matching options and retail packaging formats can be coordinated from sampling through bulk production.' }
    ],
    buyerBenefitsTitle: 'Why This Product Works for Your Buyers',
    cta: {
      eyebrow: 'READY TO SAMPLE?',
      heading: 'Validate your epoxy magnet before bulk production.',
      description: 'Confirm the artwork, dimensions, resin formulation, magnetic backing, color matching and packaging through physical sampling before bulk production.',
      sampleLabel: 'Request a Sample'
    },
    seoTitle: 'Custom Epoxy-Domed Fridge Magnets Manufacturer | Flexible Magnet',
    seoDescription: 'Custom epoxy-domed fridge magnets with high-clarity resin, full-color printing and flexible magnetic backing. Square, round, rectangular and custom shapes for OEM retail projects.',
    ogTitle: 'Custom Epoxy-Domed Fridge Magnets | MAG-EPO-01',
    ogDescription: 'OEM epoxy-domed fridge magnets with custom artwork, multiple shapes, retail packaging and multi-design production support.'
  }),
  Object.assign(createFridgeMagnetDraft({
    slug: 'laminated-tinplate-fridge-magnets',
    name: 'Laminated Tinplate Fridge Magnets',
    subcategory: 'Laminated Tinplate',
    subcategorySlug: 'tinplate',
    imageFolder: 'laminated-tinplate',
    tagline: 'Custom laminated tinplate fridge magnets developed for tourism souvenirs, museum retail, destination merchandise and promotional programs. Full-color artwork can be adapted across coordinated multi-design collections, with format, construction and packaging reviewed according to each project.',
    construction: 'Layered tinplate construction with a printed paper face, greyboard core and flexible magnetic backing.',
    procurementFocus: [
      ['Laminated Tinplate Presentation', 'Protective surface finish, edge presentation and backing construction are confirmed during project review.'],
      ['Full-Color Custom Artwork', 'Photographic, illustrated and destination-themed artwork can be planned across coordinated multi-design collections.'],
      ['Retail Project Planning', 'Packaging, labeling and presentation are confirmed according to the selected construction and destination market.']
    ],
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: [
          'Laminated tinplate construction combines full-color printed artwork with a protective finished surface and magnetic backing. The format is suitable for photographic, illustrated and destination-themed artwork where clean reproduction and a durable retail presentation are required. Final material layers, backing construction and surface treatment are confirmed during project review.'
        ],
        items: [
          'Laminated tinplate presentation',
          'Full-color custom printed artwork',
          'Magnetic backing configuration subject to project review'
        ]
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: [
          'Custom sizes, shapes and artwork layouts are developed around the selected tinplate construction and end-market requirements. Round and rectangular souvenir formats, photographic destination artwork and coordinated multi-design collections can be reviewed as part of the project.',
          'Retail packaging may be coordinated for museum shops, tourism retail, promotional distribution and gift programs. Packaging format, labeling and presentation are confirmed according to the selected product construction and destination-market requirements.'
        ],
        items: [
          'Custom round and rectangular formats',
          'Full-color photographic or illustrated artwork',
          'Multi-design souvenir collections',
          'Retail packaging subject to project review'
        ]
      }
    ],
    appBadge: 'Tourism',
    mainGuidance: 'Photograph multiple finished laminated tinplate fridge magnets together as a complete product group.',
    detailGuidance: 'Show the printed surface, wrapped edge or protective surface layer in close-up.',
    structureGuidance: 'Show the side profile and magnetic backing without implying a fixed construction.',
    applicationGuidance: 'Show a tourism souvenir or gift-shop retail scene.',
    seoDescription: 'Laminated tinplate fridge magnets with layered coated art paper, galvanized steel, greyboard and flexible magnetic construction in standard or custom sizes.'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    imageSku: 'laminated-tinplate',
    badge: 'CUSTOM',
    showHeroProcurement: false,
    showProjectStandards: false,
    summaryPanels: [],
    materials: [],
    construction: [],
    commonSizes: [],
    thickness: [],
    packagingOptions: [],
    quoteRequirements: [],
    dataStatus: 'Linda-confirmed product details and dedicated product images are complete.',
    technicalSpecifications: {
      'Material': 'Coated art paper + galvanized steel + greyboard + flexible magnet',
      'Construction': 'Layered tinplate structure with flexible magnetic backing',
      'Finished Thickness': 'Approx. 4 mm',
      'Standard Sizes': '64 × 64 / 79 × 54 / 90 × 65 / 76 × 76 mm',
      'Available Size': 'Custom',
      'Assembly': 'Semi-automatic assembly with manual handling and finishing.',
      'Packaging': 'Each piece individually bagged and packed in cartons.'
    }
  }),
  Object.assign(createFridgeMagnetDraft({
    slug: 'glass-dome-fridge-magnets',
    name: 'Glass Dome Fridge Magnets',
    subcategory: 'Glass Dome',
    subcategorySlug: 'glass-dome',
    imageFolder: 'glass-dome',
    tagline: 'Custom glass dome fridge magnets for artwork-led souvenirs, museum shops, cultural merchandise and premium retail programs.',
    construction: 'A glass dome is combined with printed artwork and a magnetic backing component. Final glass format, artwork insert, backing, edge treatment and packaging are confirmed according to the project.',
    procurementFocus: [
      ['Clear Glass Dome', 'Glass format, artwork presentation and edge treatment are confirmed according to the project.'],
      ['Artwork-Led Merchandise', 'Developed for museum, cultural and souvenir retail programs requiring clear artwork presentation.'],
      ['Protective Packaging', 'Backing and packaging are reviewed around the selected glass construction and delivery requirements.']
    ],
    appBadge: 'Museum',
    mainGuidance: 'Photograph finished glass dome fridge magnets as a clear overall product group.',
    detailGuidance: 'Show the glass surface, printed artwork and edge treatment in close-up.',
    structureGuidance: 'Show the side profile and magnetic backing component.',
    applicationGuidance: 'Show a museum, artwork-led souvenir or premium retail application scene.',
    seoDescription: 'Crystal glass round dome fridge magnets in eight confirmed diameters for decorative and souvenir use with custom artwork.'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    imageSku: 'glass-dome',
    badge: 'CUSTOM',
    showHeroProcurement: false,
    showProjectStandards: false,
    summaryPanels: [],
    materials: [],
    construction: [],
    commonSizes: [],
    thickness: [],
    packagingOptions: [],
    quoteRequirements: [],
    dataStatus: 'Linda-confirmed product details and dedicated product images are complete.',
    technicalSpecifications: {
      'Material': 'Crystal Glass',
      'Available Diameters': 'Ø20 / Ø25 / Ø30 / Ø35 / Ø37 / Ø40 / Ø50 / Ø60 mm',
      'Color': 'Based on custom artwork',
      'Shape': 'Round',
      'Application': 'Decorative and souvenir use',
      'Packaging': '1 pc per OPP bag or individually bubble-wrapped'
    }
  }),
  {
    slug: 'mag-001-custom-soft-pvc-fridge-magnets',
    aliases: ['mag-001-custom-pvc-mascot-magnet', 'mag-001-soft-pvc-3d-souvenir'],
    public: true,
    sku: 'MAG-001',
    name: 'Custom Soft PVC Fridge Magnets',
    category: 'custom-fridge-magnets',
    subcategory: 'Soft PVC',
    subcategorySlug: 'soft-pvc',
    badge: 'BEST SELLER',
    app_badge: 'Mascot',
    tagline: 'Precision-molded soft PVC fridge magnets for mascots, landmarks, character merchandise and promotional souvenir programs.',
    price_from: 0.18,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom 3D Design' },
    materials: [
      { value: 'Molded soft PVC relief', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Flat magnetic backing', status: 'project-specific', source: 'Report excerpt' }
    ],
    construction: [
      { value: 'Molded soft PVC relief + flat magnetic backing', status: 'project-specific', source: 'Report excerpt; final mold and backing confirmed by project' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    printingOptions: [
      { value: 'Color and relief layout are confirmed from artwork and mold requirements.', status: 'project-specific', source: 'Current product positioning and SSOT project review workflow' }
    ],
    finishOptions: [
      { value: 'Dimensional soft PVC relief finish', status: 'project-specific', source: 'Report excerpt and current product positioning' }
    ],
    packagingOptions: [
      { value: 'Backing cards, individual bags or private-label packaging can be reviewed by project.', status: 'project-specific', source: 'SSOT packaging review rule' }
    ],
    quoteRequirements: [
      { value: 'Character, mascot or landmark artwork', status: 'confirmed', source: 'Current product positioning' },
      { value: 'Target size, relief depth expectation and quantity / design split', status: 'confirmed', source: 'SSOT project and MOQ rule' },
      { value: 'Packaging, destination market and testing needs', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: 'Soft PVC construction added from report excerpt; fixed dimensions and thickness remain unconfirmed.',
    features: [
      { title: 'Soft PVC', desc: '' },
      { title: '3D Relief', desc: '' },
      { title: 'Custom', desc: '' }
    ],
    gallery: [
      { type: 'main', src: 'assets/img/products/mag-001/main.png', alt: 'Custom soft PVC fridge magnet overall product view' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-001/main.png', label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom soft PVC fridge magnets shown as complete molded products' },
      { type: 'detail', src: 'assets/img/products/mag-001/detail-01.webp', label: 'Molded Relief Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Close-up of the molded relief, color separation and surface detail of a soft PVC fridge magnet' },
      { type: 'structure', src: 'assets/img/products/mag-001/structure-01.webp', label: 'Back or Side Structure', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Back or side view showing the thickness and magnetic structure of a soft PVC fridge magnet' },
      { type: 'application', src: 'assets/img/products/mag-001/application-01.webp', label: 'Retail / Fridge Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom soft PVC fridge magnets displayed on a refrigerator or in retail packaging' }
    ],
    seoTitle: 'Custom Soft PVC Fridge Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Request custom soft PVC fridge magnets for mascots, landmarks and character-led souvenir programs with project-based sampling and production review.'
  },
  {
    slug: 'mag-014-custom-resin-fridge-magnets',
    aliases: ['mag-014-hand-painted-resin-mini'],
    public: true,
    sku: 'MAG-014',
    name: 'Custom Resin Fridge Magnets',
    category: 'custom-fridge-magnets',
    subcategory: 'Resin',
    subcategorySlug: 'resin',
    badge: 'NEW',
    app_badge: 'Souvenir',
    tagline: 'Custom resin fridge magnets for dimensional souvenir retail, attraction gift shops and premium collectible merchandise.',
    price_from: 0.60,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Mold' },
    materials: [
      { value: 'Molded resin relief', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Flat magnetic backing', status: 'project-specific', source: 'Report excerpt' }
    ],
    construction: [
      { value: 'Molded resin relief + flat magnetic backing', status: 'project-specific', source: 'Report excerpt; final mold, finish and backing confirmed by project' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT project-specific specification rule' }
    ],
    printingOptions: [
      { value: 'Color decoration and surface detail are confirmed by artwork and mold review.', status: 'project-specific', source: 'Current product positioning and SSOT project review workflow' }
    ],
    finishOptions: [
      { value: 'Dimensional molded resin finish', status: 'project-specific', source: 'Report excerpt and current product positioning' }
    ],
    packagingOptions: [
      { value: 'Individual packaging, retail presentation or private-label packaging can be reviewed by project.', status: 'project-specific', source: 'SSOT packaging review rule' }
    ],
    quoteRequirements: [
      { value: 'Reference artwork or 3D souvenir concept', status: 'confirmed', source: 'Current product positioning' },
      { value: 'Target size, finish expectation and quantity / design split', status: 'confirmed', source: 'SSOT project and MOQ rule' },
      { value: 'Packaging, destination market and testing needs', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: 'Resin construction added from report excerpt; fixed size, thickness and decoration method require project confirmation.',
    features: [
      { title: 'Resin', desc: '' },
      { title: 'Dimensional', desc: '' },
      { title: 'Premium', desc: '' }
    ],
    gallery: [
      { type: 'main', src: 'assets/img/products/mag-014/main.png', alt: 'Custom resin fridge magnets overall product view' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-014/main.png', label: 'Main Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom resin fridge magnets shown as complete dimensional souvenir products' },
      { type: 'detail', src: 'assets/img/products/mag-014/detail-01.webp', label: 'Sculpted Surface Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Close-up of the sculpted relief, painted surface and fine detail of a resin fridge magnet' },
      { type: 'structure', src: 'assets/img/products/mag-014/structure-01.webp', label: 'Back or Side Structure', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Back or side view showing the thickness and magnetic structure of a resin fridge magnet' },
      { type: 'application', src: 'assets/img/products/mag-014/application-01.webp', label: 'Souvenir or Packaging Scene', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Custom resin fridge magnets presented in a souvenir shop or retail packaging scene' }
    ],
    seoTitle: 'Custom Resin Fridge Magnets | Flexible Magnet (Huizhou)',
    seoDescription: 'Source custom resin fridge magnets for souvenir retail and collectible merchandise with project-based mold, finish and packaging review.'
  },
  Object.assign(createMagneticStationeryDraft({
    slug: 'magnetic-bookmarks',
    sku: 'MAG-201',
    name: 'Magnetic Bookmarks',
    subcategory: 'Bookmarks',
    imageFolder: 'mag-201',
    tagline: 'Custom magnetic bookmarks for stationery, publishing, museum retail, promotional and branded merchandise projects.'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    badge: 'CUSTOM',
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: [
          'Flexible magnetic sheet + synthetic paper + PP.'
        ]
      },
      {
        title: 'Common Sizes, Customization & Packaging',
        paragraphs: [
          'Common sizes: 80 × 30 × 0.5 mm and 178 × 44.5 × 0.7 mm.',
          'Standard packaging: pieces stacked and packed in cartons.',
          'Custom sizes and packaging are available according to project requirements.'
        ]
      }
    ],
    dataStatus: 'MAG-201 product reference and dedicated product imagery are confirmed; final dimensions, finish, magnetic construction and packaging remain project-specific.',
    features: [
      { title: 'Custom Printed Artwork', desc: 'Artwork, color and surface presentation are reviewed for stationery, museum retail and branded merchandise programs.' },
      { title: 'Fold-Over Magnetic Format', desc: 'The front, back and fold-over construction are shown in the dedicated MAG-201 product image set.' },
      { title: 'Retail Project Planning', desc: 'Dimensions, finish, magnetic construction and packaging are confirmed for the selected project.' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-201/main.png', label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the complete magnetic bookmarks clearly.', alt: 'Custom magnetic bookmarks shown as a coordinated printed product collection' },
      { type: 'detail', src: 'assets/img/products/mag-201/detail-01.webp', label: 'Material / Surface / Edge Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show material, printed surface, finish and edge quality in close-up.', alt: 'Close-up of a custom magnetic bookmark with printed artwork and finished edges' },
      { type: 'structure', src: 'assets/img/products/mag-201/structure-01.webp', label: 'Back / Side / Construction', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the back, side profile, fold and magnetic construction.', alt: 'Front, back and folded views showing magnetic bookmark construction' },
      { type: 'application', src: 'assets/img/products/mag-201/application-01.webp', label: 'Retail / Usage Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the product used with books or in an appropriate retail setting.', alt: 'Custom magnetic bookmarks displayed in use with books' }
    ],
    seoTitle: 'Custom Magnetic Bookmarks | Flexible Magnet (Huizhou)',
    seoDescription: 'Source custom magnetic bookmarks with printed artwork, fold-over magnetic construction and project-specific retail packaging for stationery, museum and promotional programs.'
  }),
  Object.assign(createMagneticStationeryDraft({
    slug: 'magnetic-notepads',
    sku: 'MAG-202',
    name: 'Magnetic Notepads',
    subcategory: 'Notepads',
    imageFolder: 'mag-202',
    tagline: 'Custom magnetic notepads combine practical tear-off paper formats with custom printed layouts for household, stationery, promotional and private-label programs. Page format, artwork, magnetic backing and packaging are confirmed according to the selected product construction and project requirements.'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    badge: 'CUSTOM',
    specs: {
      ...STANDARD_SPECS,
      'Physical Sampling': '7–10 calendar days'
    },
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: [
          'Tear-off paper notepad construction combines custom printed pages with a backing structure and magnetic attachment for refrigerator or metal-surface use.'
        ],
        items: [
          'Tear-off paper notepad',
          'Custom printed page layout',
          'Magnetic backing configuration subject to project review'
        ]
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: [
          'Custom dimensions and page formats are available subject to project review. Lined, checklist and custom printed layouts can be developed for stationery, promotional and private-label programs.',
          'Retail and protective packaging options can be reviewed according to product format and destination-market requirements.'
        ],
        items: [
          'Vertical memo formats',
          'Lined or checklist layouts',
          'Custom artwork and private-label graphics',
          'Packaging subject to project review'
        ]
      }
    ],
    dataStatus: 'MAG-202 product reference, tear-off notepad construction and dedicated product imagery are confirmed; final dimensions, page count, magnetic backing and packaging remain project-specific.',
    features: [
      { title: 'Custom Printed Pages', desc: 'Lined, checklist and branded page layouts can be developed for stationery and private-label programs.' },
      { title: 'Magnetic Backing', desc: 'The dedicated MAG-202 image set shows the notepad format and magnetic back for compatible metal surfaces.' },
      { title: 'Retail Project Planning', desc: 'Dimensions, page count, backing configuration and packaging are confirmed for the selected project.' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-202/main.png', label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the complete magnetic notepad product clearly.', alt: 'Custom magnetic notepads shown as coordinated printed tear-off memo products' },
      { type: 'detail', src: 'assets/img/products/mag-202/detail-01.webp', label: 'Material / Surface / Edge Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the printed pages, writing layout and edge quality in close-up.', alt: 'Custom magnetic notepads with printed writing and checklist layouts' },
      { type: 'structure', src: 'assets/img/products/mag-202/structure-01.webp', label: 'Back / Side / Construction', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the tear-off paper stack, side profile and magnetic backing.', alt: 'Front, back and side views showing magnetic notepad construction' },
      { type: 'application', src: 'assets/img/products/mag-202/application-01.webp', label: 'Retail / Usage Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the magnetic notepad used on a refrigerator or compatible metal surface.', alt: 'Custom magnetic notepad displayed on a refrigerator with a matching memo pad in use' }
    ],
    seoTitle: 'Custom Magnetic Notepads | Flexible Magnet (Huizhou)',
    seoDescription: 'Source custom magnetic notepads with printed tear-off pages, magnetic backing and project-specific retail packaging for stationery, household and promotional programs.'
  }),
  {
    slug: 'magnetic-calendars-planners',
    aliases: ['MAG-203', 'mag-203'],
    public: false,
    publicInProductGrid: false,
    publicationStatus: 'draft',
    noIndex: true,
    pageType: 'series-overview',
    seriesOverviewType: 'planner-formats',
    sku: 'MAG-203',
    imageSku: 'mag-203',
    name: 'Magnetic Calendars & Planners',
    category: 'magnetic-stationery',
    subcategory: 'Calendars & Planners',
    subcategorySlug: 'calendars-planners',
    badge: 'HOT',
    app_badge: 'Stationery',
    tagline: 'Reusable A3 weekly and monthly planning formats for stationery, office and household programs.',
    price_from: 0.65,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Artwork' },
    materials: [],
    construction: [],
    commonSizes: [],
    thickness: [],
    printingOptions: [],
    finishOptions: [],
    packagingOptions: [],
    quoteRequirements: [
      { value: 'Calendar or planner format, artwork and writing-surface requirement', status: 'confirmed', source: 'Current product data' },
      { value: 'Target size, quantity and design or layout versions', status: 'confirmed', source: 'SSOT MOQ and project review rule' },
      { value: 'Packaging, destination market and documentation needs', status: 'confirmed', source: 'SSOT compliance rule' }
    ],
    dataStatus: 'Local development draft. The series overview image set requires Linda confirmation; the A3 weekly and monthly planner remains on its separate product object.',
    variantLabel: 'Choose a Planner Format',
    variants: [
      { id: 'MAG-008', name: 'A3 Magnetic Weekly & Monthly Planner', image: 'assets/img/products/mag-008/main.png', href: 'product.html?p=magnetic-monthly-planner', description: 'Reusable weekly and monthly planning formats for offices, households, stationery programs and branded planning tools.', useCase: 'Recurring weekly and monthly schedules and reusable planning.', ctaLabel: 'View A3 Planner' }
    ],
    comparisonRows: [
      ['A3 Weekly & Monthly Planner', 'Recurring weekly and monthly schedules and flexible short-term planning.']
    ],
    gallery: [],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/mag-203/main.png', label: 'Overall Product Photo', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the magnetic calendars and planners series as a complete product group.', alt: 'Magnetic Calendars & Planners overall product photo required before publication' },
      { type: 'detail', src: 'assets/img/products/mag-203/detail-01.webp', label: 'Material / Surface / Edge Detail', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the writing surface, printed detail, finish and edge quality.', alt: 'Magnetic Calendars & Planners material, writing surface and edge detail photo required' },
      { type: 'structure', src: 'assets/img/products/mag-203/structure-01.webp', label: 'Back / Side / Construction', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the magnetic back, side profile and product construction.', alt: 'Magnetic Calendars & Planners back, side and construction photo required' },
      { type: 'application', src: 'assets/img/products/mag-203/application-01.webp', label: 'Retail / Usage Application', required: false, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', guidance: 'Show the product in an office, household, stationery retail or planning application.', alt: 'Magnetic Calendars & Planners retail or usage application photo required' }
    ],
    features: [],
    seoTitle: 'Magnetic Calendars & Planners | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore the custom A3 magnetic weekly and monthly planner for stationery, office and promotional programs.'
  },
  Object.assign(createMagneticStationeryDraft({
    slug: 'magnetic-photo-frames',
    sku: 'MAG-204',
    name: 'Magnetic Photo Frames',
    subcategory: 'Photo Frames',
    imageFolder: 'mag-204',
    tagline: 'Custom magnetic photo frames for souvenir, stationery, promotional, household and branded retail programs.'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    badge: 'CUSTOM',
    specs: { ...STANDARD_SPECS, 'Physical Sampling': '7–10 calendar days', 'Customization': 'Custom Logo and Design' },
    materials: [],
    construction: [],
    commonSizes: [],
    thickness: [],
    printingOptions: [],
    finishOptions: [],
    packagingOptions: [],
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: [
          'Magnetic photo frame construction combines magnet and paper with a central photo-display window for attachment to suitable metal surfaces.'
        ],
        items: [
          'Magnet + paper',
          'Central photo-display window',
          'Magnetic backing geometry: NOT VERIFIED'
        ]
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: [
          'Custom dimensions, frame proportions and photo-display formats can be reviewed according to project requirements. Portrait and landscape configurations are suitable for household, souvenir, promotional and private-label programs.',
          'Frame colors, printed graphics and inserted photo presentations can be coordinated with the selected project concept.'
        ],
        items: [
          'Frame thickness: NOT VERIFIED',
          'Magnetic strength: NOT VERIFIED',
          'Overall dimensions: NOT VERIFIED',
          'Photo / insert size and photo-window size: NOT VERIFIED',
          'Custom logo and design',
          'Packaging: OPP bag, custom required'
        ]
      }
    ],
    dataStatus: 'Magnet-and-paper photo frame construction with a central display window and OPP bag packaging for souvenir, promotional and retail programs.',
    seoDescription: 'Custom magnetic photo frames with magnet-and-paper construction and a central photo-display window for souvenir, stationery, promotional and branded retail programs.'
  }),
  Object.assign(createPlannerProduct({
    slug: 'magnetic-monthly-planner',
    aliases: ['mag-008-magnetic-planning-board', 'mag-008-writing-board-memo'],
    sku: 'MAG-008',
    name: 'A3 Magnetic Weekly & Monthly Planner',
    imageFolder: 'mag-008',
    tagline: 'Reusable A3 magnetic weekly and monthly planners designed for refrigerators, metal cabinets and other compatible magnetic surfaces. The flexible planner combines a writable PET surface with PVC and a soft magnetic backing, allowing schedules, appointments, household tasks and weekly or monthly plans to be written, erased and updated repeatedly. Weekly and monthly layouts, printed graphics and project configurations can be customized for stationery, household organization, promotional and private-label programs.',
    layoutLabel: 'Monthly Planner',
    layoutDescription: 'Calendar-style monthly overview for appointments, events, household schedules and recurring plans.',
    usageDescription: 'Suitable for calendars, appointments, meal plans, chores, reminders and work schedules.',
    seoTitle: 'A3 Magnetic Weekly & Monthly Planner | Flexible Magnet (Huizhou)',
    seoDescription: 'Source reusable A3 magnetic weekly and monthly planners with PET writing surface, PVC layer, soft magnetic backing and custom stationery configurations.'
  }), {
    shortDescription: 'Reusable A3 magnetic weekly and monthly planner for refrigerators, offices and household scheduling, with a writable PET surface and flexible magnetic backing.',
    listingCustomization: 'Custom Layout',
    showProjectStandards: false,
    specs: {
      ...STANDARD_SPECS,
      'MOQ': '200 pcs/sets total',
      'Physical Sampling': '7–10 calendar days',
      'Bulk Production': '15–20 calendar days',
      'Product Size': '43 × 30 cm',
      'Format': 'Approx. A3',
      'Surface': 'PET writable surface',
      'Intermediate Layer': 'PVC',
      'Backing': 'Soft magnetic layer',
      'Writing': 'Reusable / erasable',
      'Flexibility': 'Flexible / rollable',
      'Surface Feature': 'Wipe-clean / water-resistant PET writing surface',
      'Application': 'Compatible refrigerators, cabinets and metal surfaces',
      'Planner Weight': 'Approx. 211 g',
      'Marker': 'Included — Approx. 30 g',
      'Eraser': 'Included — Approx. 7.6 g',
      'Presentation Backing Card': 'Approx. 127 g',
      'Complete Set Weight': 'Approx. 400 g',
      'Customization': 'Custom weekly and monthly layouts, printed graphics and project configurations'
    },
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: ['A multilayer flexible construction combines a PET writing surface, PVC layer and soft magnetic backing. The smooth writable surface supports repeated writing and erasing, while the flexible magnetic base allows the planner to attach directly to compatible refrigerators, cabinets and other metal surfaces.'],
        items: ['PET writable surface', 'PVC intermediate layer', 'Flexible soft magnetic backing', 'Reusable write-and-wipe construction']
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: ['The confirmed planner measures 43 × 30 cm, providing an approximately A3-format planning surface for weekly and monthly scheduling.', 'Each standard set includes one magnetic planner, marker and eraser, with an approximate complete-set weight of 400 g.', 'Standard carton packing: 30 sets / carton. Outer carton: 45 × 32 × 53 cm. Gross weight: approx. 14 kg / carton.', 'Weekly and monthly layouts, printed graphics and project configurations can be customized according to project requirements.'],
        items: ['43 × 30 cm — Approx. A3 format', 'Planner + marker + eraser — Standard set', 'Approx. 400 g — Per set', '30 sets — Per carton', '45 × 32 × 53 cm — Outer carton', 'Approx. 14 kg — Gross / carton']
      }
    ],
    technicalSpecifications: {
      'Product': 'A3 Magnetic Weekly & Monthly Planner',
      'Product Size': '43 × 30 cm',
      'Format': 'Approx. A3',
      'Surface': 'PET writable surface',
      'Intermediate Layer': 'PVC',
      'Backing': 'Soft magnetic layer',
      'Writing': 'Reusable / erasable',
      'Flexibility': 'Flexible / rollable',
      'Surface Feature': 'Wipe-clean / water-resistant PET writing surface',
      'Application': 'Compatible refrigerators, cabinets and metal surfaces',
      'Planner Weight': 'Approx. 211 g',
      'Marker': 'Included — Approx. 30 g',
      'Eraser': 'Included — Approx. 7.6 g',
      'Presentation Backing Card': 'Approx. 127 g',
      'Complete Set Weight': 'Approx. 400 g'
    },
    packagingDetails: {
      'Set Includes': '1 × Magnetic Planner; 1 × Marker; 1 × Eraser; Presentation Backing Card',
      'Packing Quantity': '30 sets / carton',
      'Outer Carton': '45 × 32 × 53 cm',
      'Carton Gross Weight': 'Approx. 14 kg'
    },
    featureLimit: 5,
    features: [
      { title: 'Reusable Writing Surface', desc: 'The PET writing surface supports repeated writing, erasing and schedule updates.' },
      { title: 'Flexible & Rollable', desc: 'The flexible magnetic construction can be rolled for handling and storage.' },
      { title: 'Magnetic Attachment', desc: 'The soft magnetic backing allows the planner to attach directly to compatible refrigerators, cabinets and metal surfaces.' },
      { title: 'Wipe-Clean Surface', desc: 'The PET writing surface can be wiped clean for repeated use.' },
      { title: 'Household & Office Planning', desc: 'Suitable for calendars, appointments, meal plans, chores, reminders and work schedules.' }
    ]
  }),
  Object.assign(createMagneticEducationalDraft({
    slug: 'mag-101-magnetic-letters-numbers',
    aliases: ['mag-101-magnetic-alphabet-magnetic-aid', 'letters-numbers'],
    sku: 'MAG-101',
    name: 'Magnetic Letters & Numbers',
    subcategory: 'Letters & Numbers',
    subcategorySlug: 'letters-numbers',
    imageFolder: 'letters-numbers',
    detailLabel: 'Print / Shape Detail',
    structureLabel: 'Magnetic Back / Construction',
    applicationLabel: 'Learning / Classroom Application',
    detailGuidance: 'Print / Shape Detail',
    structureGuidance: 'Magnetic Back / Construction',
    applicationGuidance: 'Learning / Classroom Application'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    noFollow: false,
    badge: 'CUSTOM',
    shortDescription: 'Custom magnetic EVA letters and numbers for early learning, classroom activities and home education, with soft EVA foam and flexible magnetic backing.',
    listingCustomization: 'Custom Characters & Colors',
    listingTags: ['Hands-On Learning', 'Soft EVA Construction', 'Magnetic Attachment'],
    tagline: 'Custom magnetic EVA letters and numbers developed for early-learning, classroom, home-learning and educational merchandise programs. Soft dimensional EVA pieces with magnetic backing can be arranged on compatible magnetic surfaces for alphabet recognition, spelling, word building, number recognition, counting and interactive learning activities. Multi-color character assortments, storage-box configurations and supporting learning accessories can be reviewed according to project requirements.',
    specs: {
      ...EDUCATIONAL_DRAFT_SPECS,
      'MOQ': '200 pcs/sets total',
      'Physical Sampling': '7–10 calendar days',
      'Bulk Production': '15–20 calendar days',
      'Material': 'Rubber magnet + EVA foam',
      'Reference Size': '45 × 45 mm',
      'Magnetic Layer': '0.5 mm',
      'EVA Foam': '6 mm',
      'Confirmed Colors': 'Red / Yellow / Blue / Green / Purple / Orange',
      'Alphabet Set': '208 pcs',
      'Uppercase': '52 pcs',
      'Lowercase': '156 pcs',
      'Packaging': 'Plastic compartment storage case',
      'Compliance': 'REACH / RoHS / EN71 Parts 1–3 / Non-Phthalate',
      'Customization': 'OEM / Custom Character & Color Assortments'
    },
    materials: [
      { value: 'Rubber magnet + EVA foam', status: 'confirmed' },
      { value: '0.5 mm magnetic layer', status: 'confirmed' },
      { value: '6 mm EVA foam', status: 'confirmed' },
      { value: 'Soft, flexible and bendable EVA construction', status: 'confirmed' }
    ],
    construction: [
      { value: 'Dimensional EVA foam letters and numbers combined with rubber magnetic material for compatible magnetic learning surfaces.', status: 'confirmed' }
    ],
    commonSizes: [
      { value: '45 × 45 mm reference piece size', status: 'confirmed' },
      { value: 'Custom dimensions can be reviewed according to project requirements.', status: 'confirmed' }
    ],
    thickness: [
      { value: '0.5 mm magnetic layer + 6 mm EVA foam', status: 'confirmed' }
    ],
    packagingOptions: [
      { value: '208 pcs / plastic case', status: 'confirmed' },
      { value: 'Plastic compartment storage case', status: 'confirmed' }
    ],
    features: [
      { title: 'Hands-On Learning', desc: 'Magnetic letters and numbers support alphabet recognition, spelling, word building, counting and interactive learning activities.' },
      { title: 'Soft & Flexible EVA Construction', desc: 'The 6 mm EVA foam provides a soft, lightweight and dimensional learning format.' },
      { title: 'Magnetic Attachment', desc: 'Rubber magnetic backing allows the pieces to attach to compatible magnetic learning surfaces.' },
      { title: 'Organized Storage', desc: 'The compartment plastic case helps organize the multi-piece alphabet set.' },
      { title: 'Complete Learning Set', desc: 'The confirmed configuration combines magnetic EVA letters, storage case, dry-erase magnetic board, marker and eraser.' },
      { title: 'Multi-Color Presentation', desc: 'Red, yellow, blue, green, purple and orange pieces provide clear visual differentiation across the learning set.' }
    ],
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: ['Dimensional EVA foam letters and numbers are combined with rubber magnetic material to create soft, lightweight and flexible educational pieces for use on compatible magnetic learning surfaces.'],
        items: ['Rubber magnet + EVA foam', '0.5 mm magnetic layer + 6 mm EVA foam', 'Soft, flexible and bendable construction']
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: ['Confirmed configuration includes 45 × 45 mm magnetic EVA pieces using a 0.5 mm rubber magnetic layer with 6 mm EVA foam. The standard confirmed color assortment includes red, yellow, blue, green, purple and orange.', 'A 208-piece alphabet configuration is available with 52 uppercase letters and 156 lowercase letters, organized in a plastic compartment storage case. The complete learning-set presentation can include a dry-erase magnetic board, marker and eraser.', 'Custom character assortments, colors and project configurations can be reviewed according to order requirements.'],
        items: ['45 × 45 mm reference size', '0.5 mm magnet + 6 mm EVA foam', '208-piece alphabet set', '6 confirmed colors', 'Storage case + learning-board accessories']
      },
      {
        title: 'Package Includes',
        paragraphs: ['Complete learning-set configuration with magnetic EVA letters, compartment storage box, dry-erase magnetic board, marker and eraser.'],
        items: ['208 magnetic EVA letters', 'Plastic compartment storage case', 'Dry-erase magnetic learning board', 'Marker', 'Eraser']
      },
      {
        title: 'Applications',
        items: ['Alphabet Recognition', 'Spelling & Word Building', 'Uppercase & Lowercase Practice', 'Number Recognition', 'Early Counting Activities', 'Classroom Learning', 'Home Learning', 'Interactive Educational Activities', 'Educational Gift Sets', 'Private-Label Learning Programs']
      },
      {
        title: 'Buyer Types',
        items: ['Educational Brands', 'Publishers', 'School-Supply Distributors', 'Educational Toy & Learning Product Buyers', 'Museum & Educational Retail Buyers', 'Private-Label Retailers', 'Promotional Merchandise Distributors', 'Learning Program Developers']
      },
      {
        title: 'Testing & Compliance',
        paragraphs: ['The confirmed product configuration can be supplied in line with REACH, RoHS, EN71 Parts 1–3 and Non-Phthalate requirements.'],
        items: ['REACH', 'RoHS', 'EN71 Part 1, 2 and 3', 'Non-Phthalate requirements']
      }
    ],
    dataStatus: 'Linda-confirmed product specifications, dedicated imagery and publication approval are complete.',
    seoTitle: 'Custom Magnetic Letters & Numbers | Flexible Magnet (Huizhou)',
    seoDescription: 'Source custom magnetic EVA letters and numbers with rubber magnetic backing, multi-color character assortments and storage-case configurations for early-learning and classroom programs.'
  }),
  {
    slug: 'boxed-epoxy-magnet-sets',
    aliases: [],
    public: true,
    publicInProductGrid: false,
    pageType: 'series-overview',
    sku: 'ECM-SET',
    imageSku: 'ecm-03',
    name: 'Boxed Epoxy Magnet Sets',
    category: 'gift-sets-retail-packaging',
    subcategory: 'Boxed Epoxy Sets',
    subcategorySlug: 'boxed-epoxy-sets',
    badge: 'RETAIL SET',
    app_badge: 'Gift Set',
    tagline: 'Boxed epoxy magnet sets for museum shops, tourism programs, licensed collections and retail-ready multi-design souvenir assortments.',
    price_from: 0.45,
    moq: 200,
    specs: { ...GIFT_SET_DRAFT_SPECS, 'Customization': 'Custom Layout' },
    materials: [
      { value: 'Clear epoxy dome', status: 'project-specific', source: 'Report excerpt; final dome structure confirmed by selected series' },
      { value: 'Printed coated paper', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Flexible magnetic backing', status: 'project-specific', source: 'Report excerpt' }
    ],
    construction: [
      { value: 'Clear epoxy dome + printed coated paper + flexible magnetic backing', status: 'project-specific', source: 'Report excerpt; final construction confirmed by selected box format' }
    ],
    commonSizes: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT; no single box size applied to all series' }
    ],
    thickness: [
      { value: PROJECT_SIZE_NOTE, status: 'project-specific', source: 'SSOT; 2 mm epoxy + 3 mm magnetic rubber not applied without product-specific confirmation' }
    ],
    printingOptions: [
      { value: 'Full-color printed coated paper artwork', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Multi-design assortment artwork is reviewed before production.', status: 'project-specific', source: 'Current product data and SSOT multi-design rule' }
    ],
    finishOptions: [
      { value: 'Clear epoxy dome finish', status: 'project-specific', source: 'Report excerpt' }
    ],
    packagingOptions: [
      { value: 'Clear display box', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Custom insert', status: 'project-specific', source: 'Report excerpt' },
      { value: 'Multi-design assortment', status: 'project-specific', source: 'Report excerpt and current product data' },
      { value: 'Private-label packaging subject to project review', status: 'project-specific', source: 'Report excerpt and SSOT conditional wording' }
    ],
    quoteRequirements: [
      { value: 'Selected box series and target retail presentation', status: 'confirmed', source: 'Current product engineering data' },
      { value: 'Artwork versions, assortment plan and quantity allocation', status: 'confirmed', source: 'SSOT multi-design rule' },
      { value: 'Private-label packaging, barcode or insert requirements and destination market', status: 'confirmed', source: 'SSOT packaging and compliance rule' }
    ],
    dataStatus: 'Epoxy set construction and packaging options added from report excerpt; exact thickness and box dimensions remain series/project-specific.',
    options: {
      'Material / Construction': 'Epoxy magnet set construction confirmed according to the selected box format and project.',
      'Size & Shape': 'Specifications available subject to project review.',
      'Surface Finish': 'Epoxy finish options are confirmed according to project requirements.',
      'Printing': 'Artwork decoration is confirmed according to the selected series.',
      'Magnetic Backing': 'Magnetic backing confirmed according to product size and use.',
      'Packaging': 'Box format, private-label packaging and retail presentation are confirmed according to the project.'
    },
    variantLabel: 'Choose a Boxed Epoxy Series',
    showVariantIds: false,
    variants: [
      { id: 'ECM-01', name: 'Mini Boxed Epoxy Magnet Set', image: 'assets/img/products/ecm-01/main.png', externalBoxSize: '70 × 66 × 11 mm', setCapacity: '3 or 4 magnets', href: 'product.html?p=mini-boxed-epoxy-magnet-set' },
      { id: 'ECM-02', name: 'Slim Boxed Epoxy Magnet Set', image: 'assets/img/products/ecm-02/main.png', externalBoxSize: '94 × 71 × 9 mm', setCapacity: '6, 7, 9 or 12 magnets', href: 'product.html?p=slim-boxed-epoxy-magnet-set' },
      { id: 'ECM-03', name: 'Premium Thick Box Epoxy Magnet Set', image: 'assets/img/products/ecm-03/main.png', externalBoxSize: '93 × 70 × 18 mm', setCapacity: '6, 7, 9 or 12 magnets', href: 'product.html?p=premium-thick-box-epoxy-magnet-set' },
      { id: 'ECM-04', name: 'Giant Boxed Epoxy Magnet Set', image: 'assets/img/products/ecm-04/main.png', externalBoxSize: '138 × 116 × 9 mm', setCapacity: '12, 18 or 30 magnets', href: 'product.html?p=giant-boxed-epoxy-magnet-set' }
    ],
    gallery: [
      { type: 'main', label: 'Series overview image', src: 'assets/img/products/ecm-03/main.png', alt: 'Representative image for the boxed epoxy magnet set series overview' }
    ],
    imageSlots: [
      { type: 'main', src: 'assets/img/products/ecm-03/main.png', label: 'Series overview image', required: true, recommendedSize: '1200 × 1200 px', recommendedRatio: '1:1', alt: 'Representative image for the boxed epoxy magnet set series overview' }
    ],
    features: [
      { title: 'Boxed Series Options', desc: 'Mini, slim, premium thick box and giant series formats can be reviewed by project.' },
      { title: 'Retail Presentation', desc: 'Set structure and packaging are planned for shelf-ready souvenir and gift programs.' },
      { title: 'Multi-Design Planning', desc: 'Assortment logic, artwork versions and quantity allocation are reviewed before production.' }
    ],
    seoTitle: 'Boxed Epoxy Magnet Sets | Flexible Magnet (Huizhou)',
    seoDescription: 'Explore boxed epoxy magnet sets with mini, slim, premium thick box and giant series options for retail-ready souvenir collections.'
  },
  Object.assign(createGiftSetDraft({
    slug: 'souvenir-sets',
    aliases: ['multi-design-souvenir-sets'],
    name: 'Souvenir Sets',
    subcategory: 'Souvenir Sets',
    subcategorySlug: 'souvenir-sets',
    imageFolder: 'souvenir-sets',
    detailLabel: 'Product / Collection Detail',
    structureLabel: 'Set / Packaging Structure',
    applicationLabel: 'Tourism / Retail Application',
    detailGuidance: 'Product / Collection Detail',
    structureGuidance: 'Set / Packaging Structure',
    applicationGuidance: 'Tourism / Retail Application'
  }), {
    public: true,
    publicInProductGrid: true,
    publicationStatus: 'public',
    noIndex: false,
    noFollow: false,
    badge: 'CUSTOM',
    tagline: 'Custom magnetic souvenir sets for museum shops, tourism retail, cultural merchandise and promotional gift programs. Mixed shapes and coordinated artwork can be combined into retail-ready gift-box collections.',
    specs: {
      'MOQ': '200 pcs/sets total',
      'Physical Sampling': '7–10 calendar days',
      'Bulk Production': '15–20 calendar days',
      'Material': 'Rubber Magnet + Coated Paper',
      'Surface': 'Printed Coated Paper',
      'Backing': 'Flexible Rubber Magnetic Backing',
      'Round': 'Ø25 mm',
      'Square': '25 × 25 mm',
      'Rectangle': '50 × 25 mm',
      'Other Shapes': 'Custom',
      'Packaging': 'Gift Box',
      'Set Configuration': 'Multi-design set / Custom',
      'Optional Inserts': 'Thank You Card / Care Card — optional by project'
    },
    materials: [
      { value: 'Rubber Magnet + Coated Paper', status: 'confirmed', source: 'Linda-confirmed product structure' },
      { value: 'Printed coated-paper surface', status: 'confirmed', source: 'Linda-confirmed product surface' },
      { value: 'Flexible rubber magnetic backing', status: 'confirmed', source: 'Linda-confirmed product backing' }
    ],
    construction: [
      { value: 'Flat lightweight construction', status: 'confirmed', source: 'Linda-confirmed product construction' }
    ],
    commonSizes: [
      { value: 'Ø25 mm round', status: 'confirmed', source: 'Linda-confirmed reference size' },
      { value: '25 × 25 mm square', status: 'confirmed', source: 'Linda-confirmed reference size' },
      { value: '50 × 25 mm rectangle', status: 'confirmed', source: 'Linda-confirmed reference size' },
      { value: 'Custom shapes and sizes available', status: 'confirmed', source: 'Linda-confirmed customization rule' }
    ],
    thickness: [],
    printingOptions: [
      { value: 'Custom artwork & shapes', status: 'confirmed', source: 'Linda-confirmed customization rule' }
    ],
    finishOptions: [],
    packagingOptions: [
      { value: 'Gift Box', status: 'confirmed', source: 'Linda-confirmed packaging' },
      { value: 'Thank You Card / Care Card — optional by project', status: 'project-specific', source: 'Linda-confirmed optional insert rule' }
    ],
    draftStatusNote: 'Confirmed copy, specifications and product images are under final publication review.',
    dataStatus: 'Linda-confirmed material, reference sizes, gift-box packaging, dedicated imagery and publication approval are complete.',
    options: {
      'Material': 'Rubber Magnet + Coated Paper',
      'Surface': 'Printed Coated Paper',
      'Backing': 'Flexible Rubber Magnetic Backing',
      'Packaging': 'Gift Box',
      'Set Configuration': 'Multi-design set / Custom'
    },
    summaryPanels: [
      {
        title: 'Materials & Construction',
        paragraphs: ['Printed coated-paper artwork with flexible rubber magnetic backing.'],
        items: ['Coated paper print', 'Flexible rubber magnetic backing', 'Flat lightweight construction', 'Custom artwork & shapes']
      },
      {
        title: 'Common Size, Customization & Packaging',
        paragraphs: ['Reference sizes:', 'Custom shapes and sizes available.', 'Gift-box packaging available for coordinated multi-design sets.'],
        items: ['Ø25 mm round', '25 × 25 mm square', '50 × 25 mm rectangle']
      }
    ],
    technicalSpecifications: {
      'Material': 'Rubber Magnet + Coated Paper',
      'Surface': 'Printed Coated Paper',
      'Backing': 'Flexible Rubber Magnetic Backing',
      'Round': 'Ø25 mm',
      'Square': '25 × 25 mm',
      'Rectangle': '50 × 25 mm',
      'Other Shapes': 'Custom'
    },
    packagingDetails: {
      'Packaging': 'Gift Box',
      'Set Configuration': 'Multi-design set / Custom',
      'Optional Inserts': 'Thank You Card / Care Card — optional by project'
    },
    featureLimit: 4,
    features: [
      { title: 'Mixed-Shape Collection', desc: 'Round, square, rectangular and custom-shaped magnets can be combined in one coordinated set.' },
      { title: 'Custom Artwork', desc: 'Destination, cultural and promotional artwork can be developed for different retail programs.' },
      { title: 'Flexible Magnetic Backing', desc: 'Flat rubber magnetic backing supports refrigerator and compatible metal-surface use.' },
      { title: 'Gift-Ready Presentation', desc: 'Boxed presentation supports museum, tourism, promotional and private-label gift programs.' }
    ],
    bestSuitedForTitle: 'Applications',
    bestSuitedFor: [
      ['Museum Gift Shops', 'industries/museums-gift-shops.html'],
      ['Tourism Souvenirs', 'industries/tourism-souvenirs.html'],
      ['Destination Retail', 'industries/tourism-souvenirs.html'],
      ['Cultural Merchandise', 'industries/licensed-merchandise.html'],
      ['Promotional Gifts', 'industries/promotional-gifts.html'],
      ['Private-Label Gift Programs', 'industries/promotional-gifts.html']
    ],
    seoTitle: 'Custom Souvenir Magnet Sets | Flexible Magnet (Huizhou)',
    seoDescription: 'Source custom rubber magnet and coated-paper souvenir sets with mixed shapes, coordinated artwork and gift-box packaging for museum, tourism and promotional programs.'
  }),
  createBoxedEpoxySeries({
    slug: 'mini-boxed-epoxy-magnet-set',
    legacySlug: 'ecm-01-mini-box-epoxy-set',
    sku: 'ECM-01',
    name: 'Mini Boxed Epoxy Magnet Set',
    imageFolder: 'ecm-01',
    externalBoxSize: '70 × 66 × 11 mm',
    setCapacity: '3 or 4 magnets',
    tagline: 'Compact boxed epoxy magnet set for three- or four-piece souvenir assortments and small-format retail presentation.',
    positioning: 'Compact retail set format',
    seoTitle: 'Mini Boxed Epoxy Magnet Set | Flexible Magnet (Huizhou)',
    seoDescription: 'Request a custom Mini Boxed Epoxy Magnet Set with a 70 × 66 × 11 mm external box for three- or four-magnet retail assortments.',
    specOverrides: { 'MOQ': '200 pcs/sets total' }
  }),
  createBoxedEpoxySeries({
    slug: 'slim-boxed-epoxy-magnet-set',
    legacySlug: 'ecm-02-slim-box-epoxy-set',
    sku: 'ECM-02',
    name: 'Slim Boxed Epoxy Magnet Set',
    imageFolder: 'ecm-02',
    externalBoxSize: '94 × 71 × 9 mm',
    setCapacity: '6, 7, 9 or 12 magnets',
    tagline: 'Slim boxed epoxy magnet set for multi-design souvenir assortments in a low-profile retail presentation format.',
    positioning: 'Slim retail presentation format',
    seoTitle: 'Slim Boxed Epoxy Magnet Set | Flexible Magnet (Huizhou)',
    seoDescription: 'Request a custom Slim Boxed Epoxy Magnet Set with a 94 × 71 × 9 mm external box for 6, 7, 9 or 12-magnet assortments.'
  }),
  createBoxedEpoxySeries({
    slug: 'premium-thick-box-epoxy-magnet-set',
    legacySlug: 'ecm-03-thick-box-epoxy-set',
    sku: 'ECM-03',
    name: 'Premium Thick Box Epoxy Magnet Set',
    imageFolder: 'ecm-03',
    externalBoxSize: '93 × 70 × 18 mm',
    setCapacity: '6, 7, 9 or 12 magnets',
    tagline: 'Premium thick-box epoxy magnet set for deeper retail presentation and multi-design souvenir collections.',
    positioning: 'Deeper premium box format',
    seoTitle: 'Premium Thick Box Epoxy Magnet Set | Flexible Magnet (Huizhou)',
    seoDescription: 'Request a Premium Thick Box Epoxy Magnet Set with a 93 × 70 × 18 mm external box for 6, 7, 9 or 12-magnet retail assortments.'
  }),
  createBoxedEpoxySeries({
    slug: 'giant-boxed-epoxy-magnet-set',
    legacySlug: 'ecm-04-giant-box-epoxy-set',
    sku: 'ECM-04',
    name: 'Giant Boxed Epoxy Magnet Set',
    imageFolder: 'ecm-04',
    externalBoxSize: '138 × 116 × 9 mm',
    setCapacity: '12, 18 or 30 magnets',
    tagline: 'Large-format boxed epoxy magnet set for twelve-, eighteen- or thirty-piece retail and souvenir assortments.',
    positioning: 'Large assortment presentation format',
    seoTitle: 'Giant Boxed Epoxy Magnet Set | Flexible Magnet (Huizhou)',
    seoDescription: 'Request a custom Giant Boxed Epoxy Magnet Set with a 138 × 116 × 9 mm external box for 12, 18 or 30-magnet assortments.'
  }),
  {
    slug: 'mag-012-vehicle-magnetic-signage',
    public: false,
    status: 'internal-review',
    noIndex: true,
    sku: 'MAG-012',
    name: 'Industrial Magnetic Vehicle Signage',
    category: 'internal-review',
    badge: 'INTERNAL',
    app_badge: 'Advertising',
    tagline: 'Industrial-grade magnetic vinyl with superior wind-resistance for commercial vehicle branding and professional mobile advertising.',
    price_from: 0.35,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Size' },
    features: [
      { title: 'Flexible', desc: '' },
      { title: 'Removable', desc: '' },
      { title: 'UV Stable', desc: '' }
    ]
  },
  {
    slug: 'mag-009-promotional-business-magnet',
    public: false,
    status: 'internal-review',
    noIndex: true,
    sku: 'MAG-009',
    name: 'Custom Magnetic Business Cards',
    category: 'internal-review',
    badge: 'INTERNAL',
    app_badge: 'Retail',
    tagline: 'Durable magnetic business cards providing permanent brand presence on metal surfaces for high-impact professional networking.',
    price_from: 0.06,
    moq: 200,
    specs: { ...STANDARD_SPECS, 'Customization': 'Custom Layout' },
    features: [
      { title: 'Premium', desc: '' },
      { title: 'Paper', desc: '' },
      { title: 'Slim', desc: '' }
    ]
  }
];

function isPublicProduct(product) {
  return product && product.public !== false && product.publicInProductGrid !== false;
}

function getPublicProducts() {
  return PRODUCTS.filter(isPublicProduct);
}

function getProduct(slug) {
  return PRODUCTS.find(p => p.slug === slug || (p.aliases || []).includes(slug));
}

function isProductVisibleInGrid(product, includeDrafts = false) {
  return isPublicProduct(product)
    || (includeDrafts && product && product.publicationStatus === 'draft' && product.publicInProductGrid === true);
}

function getProductsByCategory(cat, options = {}) {
  const includeDrafts = options.includeDrafts === true;
  const gridProducts = PRODUCTS.filter(product => isProductVisibleInGrid(product, includeDrafts));
  if (!cat || cat === 'all') return gridProducts;
  const family = PRODUCT_FAMILIES.find(item => item.slug === cat);
  if (family) return family.productSlugs.map(getProduct).filter(product => isProductVisibleInGrid(product, includeDrafts));
  return gridProducts.filter(p => p.category === cat);
}

function getProductsBySubcategory(cat, sub, options = {}) {
  const products = getProductsByCategory(cat, options);
  if (!sub) return products;
  return products.filter(p => p.subcategorySlug === sub);
}

function getCategory(slug) {
  return CATEGORIES.find(c => c.slug === slug) || PRODUCT_FAMILIES.find(f => f.slug === slug);
}

function getSubcategory(slug) {
  return SUBCATEGORY_FILTERS.find(item => item.slug === slug);
}
