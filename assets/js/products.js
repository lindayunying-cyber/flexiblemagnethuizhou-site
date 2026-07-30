/* ============================================
   Flexible Magnet (Huizhou).com — Product & Category Data
   Product taxonomy: material and manufacturing-process series
   ============================================ */

// ============ PRODUCT SERIES ============
const CATEGORIES = [
  {
    slug: 'epoxy-crystal-magnets',
    name: 'Epoxy & Crystal Magnets',
    tier: 'Premium Finish',
    desc: 'Crystal-clear epoxy and dome-finish magnetic products developed for premium souvenir, gift and branded retail collections.',
    count: 4,
    color: 'c-orange'
  },
  {
    slug: 'flat-printed-magnets',
    name: 'Flat & Printed Magnets',
    tier: 'Flexible Format',
    desc: 'Custom printed magnetic products for promotions, business identity, signage and high-volume retail programs.',
    count: 3,
    color: 'c-coffee'
  },
  {
    slug: 'acrylic-magnets',
    name: 'Acrylic Magnets',
    tier: 'Premium Finish',
    desc: 'High-definition printed and CNC-finished acrylic magnets for premium souvenir and branded retail collections.',
    count: 4,
    color: 'c-soft'
  },
  {
    slug: '3d-resin-tinplate-magnets',
    name: '3D Resin & Tinplate Magnets',
    tier: 'Dimensional Craft',
    desc: 'Dimensional magnetic figures and sculptural designs for collectible, souvenir and character-led merchandise.',
    count: 2,
    color: 'c-cream'
  },
  {
    slug: 'magnetic-stationery-educational-products',
    name: 'Magnetic Stationery & Educational Products',
    tier: 'Learning & Planning',
    desc: 'Magnetic planners, learning aids and stationery products designed for education, organization and private-label programs.',
    count: 3,
    color: 'c-coffee'
  },
  {
    slug: 'all',
    name: 'All Products',
    desc: 'Explore custom magnetic products across five material and manufacturing-process series.',
    count: 16,
    color: 'c-cream'
  }
];

// ============ REFINED PRODUCT DATABASE (V4.4 - VISUAL POLISH VERSION) ============
const PRODUCTS = [
  {
    slug: 'mag-006-printable-magnetic-sheet',
    sku: 'MAG-006',
    name: 'Custom Paper Laminated Fridge Magnets',
    category: 'flat-printed-magnets',
    badge: 'BEST SELLER',
    app_badge: 'Promotion',
    tagline: 'Cost-effective magnets for brand marketing and retail giveaways, ensuring consistent brand visibility across domestic environments.',
    price_from: 0.08,
    moq: 1000,
    specs: {
      'MOQ': '1,000+ Pcs',
      'Lead Time': '10-14 Days',
      'Customization': 'Custom Printing'
    },
    features: [
      { title: 'NEW', desc: '' },
      { title: 'Laminated', desc: '' },
      { title: 'Waterproof', desc: '' }
    ]
  },
  {
    slug: 'mag-012-vehicle-magnetic-signage',
    sku: 'MAG-012',
    name: 'Industrial Magnetic Vehicle Signage',
    category: 'flat-printed-magnets',
    badge: 'NEW',
    app_badge: 'Advertising',
    tagline: 'Industrial-grade magnetic vinyl with superior wind-resistance for commercial vehicle branding and professional mobile advertising.',
    price_from: 0.35,
    moq: 500,
    specs: {
      'MOQ': '500+ Pcs',
      'Lead Time': '12 Days',
      'Customization': 'Custom Size'
    },
    features: [
      { title: 'FLEXIBLE', desc: '' },
      { title: 'REMOVABLE', desc: '' },
      { title: 'UV STABLE', desc: '' }
    ]
  },
  {
    slug: 'mag-009-promotional-business-magnet',
    sku: 'MAG-009',
    name: 'Custom Magnetic Business Cards',
    category: 'flat-printed-magnets',
    badge: 'OEM',
    app_badge: 'Retail',
    tagline: 'Durable magnetic business cards providing permanent brand presence on metal surfaces for high-impact professional networking.',
    price_from: 0.06,
    moq: 1000,
    specs: {
      'MOQ': '1,000+ Pcs',
      'Lead Time': '7 Days',
      'Customization': 'Custom Layout'
    },
    features: [
      { title: 'PREMIUM', desc: '' },
      { title: 'PAPER', desc: '' },
      { title: 'SLIM', desc: '' }
    ]
  },
  {
    slug: 'mag-008-magnetic-planning-board',
    sku: 'MAG-008',
    name: 'Magnetic Dry-Erase Monthly Planners',
    category: 'magnetic-stationery-educational-products',
    badge: 'HOT',
    app_badge: 'Office',
    tagline: 'Reusable dry-erase magnetic planners for efficient workplace organization, project scheduling and agile task management.',
    price_from: 0.85,
    moq: 200,
    specs: {
      'MOQ': '200+ Pcs',
      'Lead Time': '15 Days',
      'Customization': 'Custom Artwork'
    },
    features: [
      { title: 'HOT', desc: '' },
      { title: 'DRY ERASE', desc: '' },
      { title: 'REUSABLE', desc: '' }
    ]
  },
  {
    slug: 'mag-011-magnetic-calendar-planner',
    sku: 'MAG-011',
    name: 'Magnetic Dry-Erase Annual Planners',
    category: 'magnetic-stationery-educational-products',
    badge: 'CUSTOM',
    app_badge: 'Corporate',
    tagline: 'High-visibility annual magnetic planners designed for corporate tracking, branding and seasonal promotional gift visibility.',
    price_from: 0.65,
    moq: 500,
    specs: {
      'MOQ': '500+ Pcs',
      'Lead Time': '18 Days',
      'Customization': 'Custom Graphics'
    },
    features: [
      { title: 'ECO-FRIENDLY', desc: '' },
      { title: 'WRITABLE', desc: '' },
      { title: 'OEM', desc: '' }
    ]
  },
  {
    slug: 'mag-002-acrylic-art-magnet',
    sku: 'MAG-002',
    name: 'Premium Acrylic Souvenir Magnets',
    category: 'acrylic-magnets',
    badge: 'PREMIUM',
    app_badge: 'Museum',
    tagline: 'Gallery-grade cast acrylic magnets with high-resolution UV printing and polished edges for premium souvenir retail.',
    price_from: 0.22,
    moq: 300,
    specs: {
      'MOQ': '300+ Pcs',
      'Lead Time': '18 Days',
      'Customization': 'Custom Shape'
    },
    features: [
      { title: 'ACRYLIC', desc: '' },
      { title: 'POLISHED', desc: '' },
      { title: 'UV PRINT', desc: '' }
    ]
  },
  {
    slug: 'mag-014-hand-painted-resin-mini',
    sku: 'MAG-014',
    name: 'Hand-Painted Resin 3D Magnets',
    category: '3d-resin-tinplate-magnets',
    badge: 'NEW',
    app_badge: 'Souvenir',
    tagline: 'Artisanal polyresin magnets featuring detailed relief work and high-strength magnets for premium souvenir gift markets.',
    price_from: 0.60,
    moq: 300,
    specs: {
      'MOQ': '300+ Pcs',
      'Lead Time': '25 Days',
      'Customization': 'Custom Mold'
    },
    features: [
      { title: 'RESIN', desc: '' },
      { title: 'HANDMADE', desc: '' },
      { title: 'PREMIUM', desc: '' }
    ]
  },
  {
    slug: 'mag-101-alphabet-magnetic-aid',
    sku: 'MAG-101',
    name: 'Magnetic Alphabet Learning Aids',
    category: 'magnetic-stationery-educational-products',
    badge: 'KID SAFE',
    app_badge: 'Education',
    tagline: 'Safety-certified magnetic learning aids designed for early childhood literacy and educational STEM development programs.',
    price_from: 1.20,
    moq: 300,
    specs: {
      'MOQ': '300+ Pcs',
      'Lead Time': '15 Days',
      'Customization': 'Custom Packaging'
    },
    features: [
      { title: 'EN71-3', desc: '' },
      { title: 'EVA FOAM', desc: '' },
      { title: 'NON-TOXIC', desc: '' }
    ]
  },
  {
    slug: 'mag-001-custom-pvc-mascot-magnet',
    sku: 'MAG-001',
    name: 'Custom 3D Soft PVC Magnets',
    category: '3d-resin-tinplate-magnets',
    badge: 'BEST SELLER',
    app_badge: 'Mascot',
    tagline: 'Precision-molded 3D relief magnets designed to accurately replicate brand mascots and architectural landmarks for promotion.',
    price_from: 0.18,
    moq: 500,
    specs: {
      'MOQ': '500+ Pcs',
      'Lead Time': '30 Days',
      'Customization': 'Custom 3D Design'
    },
    features: [
      { title: 'SOFT PVC', desc: '' },
      { title: '3D RELIEF', desc: '' },
      { title: 'CUSTOM', desc: '' }
    ]
  },
  // ---------- EPOXY & CRYSTAL SERIES (SET COLLECTIONS) ----------
  {
    slug: 'ecm-01-mini-box-epoxy-set',
    sku: 'ECM-01',
    name: 'Mini Series Crystal Epoxy Magnet Set',
    category: 'epoxy-crystal-magnets',
    badge: 'NEW',
    app_badge: 'Souvenir',
    tagline: 'Compact mini souvenir sets with premium epoxy finish, perfect for boutique museum gift shops and niche retail branding.',
    price_from: 0.45,
    moq: 500,
    specs: {
      'MOQ': '500+ Sets',
      'Lead Time': '15 Days',
      'Customization': 'Custom Layout'
    },
    features: [
      { title: '70x66MM', desc: '' },
      { title: 'STEEL MOLD', desc: '' },
      { title: '3-4 PCS/SET', desc: '' }
    ]
  },
  {
    slug: 'ecm-02-slim-box-epoxy-set',
    sku: 'ECM-02',
    name: 'Slim Series Crystal Epoxy Magnet Set',
    category: 'epoxy-crystal-magnets',
    badge: 'HOT',
    app_badge: 'Museum',
    tagline: 'Elegant slim-profile magnetic souvenir collections featuring high-definition printing and gallery-grade resin for professional retail displays.',
    price_from: 0.85,
    moq: 300,
    specs: {
      'MOQ': '300+ Sets',
      'Lead Time': '18 Days',
      'Customization': 'Custom Artwork'
    },
    features: [
      { title: '94x71MM', desc: '' },
      { title: 'ULTRA SLIM', desc: '' },
      { title: '6-12 PCS/SET', desc: '' }
    ]
  },
  {
    slug: 'ecm-03-thick-box-epoxy-set',
    sku: 'ECM-03',
    name: 'Premium Thick Box Epoxy Magnet Set',
    category: 'epoxy-crystal-magnets',
    badge: 'PREMIUM',
    app_badge: 'Retail',
    tagline: 'Robust magnetic collections in protective deep-well boxes, designed for multi-piece souvenir series and premium retail merchandise.',
    price_from: 1.15,
    moq: 300,
    specs: {
      'MOQ': '300+ Sets',
      'Lead Time': '18 Days',
      'Customization': 'Custom Assembly'
    },
    features: [
      { title: '93x70MM', desc: '' },
      { title: 'DEEP BOX', desc: '' },
      { title: 'SHORE 85', desc: '' }
    ]
  },
  {
    slug: 'ecm-04-giant-box-epoxy-set',
    sku: 'ECM-04',
    name: 'Giant Series Crystal Epoxy Collection',
    category: 'epoxy-crystal-magnets',
    badge: 'BEST SELLER',
    app_badge: 'Tourism',
    tagline: 'Large-format magnetic story-telling sets with up to 30 pieces, ideal for comprehensive city landmark and exhibition collections.',
    price_from: 2.45,
    moq: 200,
    specs: {
      'MOQ': '200+ Sets',
      'Lead Time': '22 Days',
      'Customization': 'Custom 30-pc Set'
    },
    features: [
      { title: '138x116MM', desc: '' },
      { title: 'GIANT SIZE', desc: '' },
      { title: 'MAX 30 PCS', desc: '' }
    ]
  },
  {
    slug: 'am-01-standard-3mm-acrylic-magnet',
    sku: 'AM-01',
    name: 'Standard 3mm Acrylic Magnets',
    category: 'acrylic-magnets',
    badge: 'OEM',
    app_badge: 'Promotion',
    tagline: 'Cost-effective laser-cut magnets for high-volume advertising and brand identification campaigns.',
    price_from: 0.22,
    moq: 1000,
    specs: {
      'MOQ': '1,000+ Pcs',
      'Lead Time': '12 Days',
      'Customization': 'Custom Shape'
    },
    features: [
      { title: 'LASER CUT', desc: '' },
      { title: '3MM', desc: '' },
      { title: 'PVC', desc: '' }
    ]
  },
  {
    slug: 'am-02-premium-5mm-polished-magnet',
    sku: 'AM-02',
    name: 'Premium 5mm Polished Magnets',
    category: 'acrylic-magnets',
    badge: 'PREMIUM',
    app_badge: 'Museum',
    tagline: 'Gallery-grade acrylic with diamond-polished edges for luxury museum souvenir and premium retail collections.',
    price_from: 0.35,
    moq: 300,
    specs: {
      'MOQ': '300+ Pcs',
      'Lead Time': '18 Days',
      'Customization': 'Custom Artwork'
    },
    features: [
      { title: 'POLISHED', desc: '' },
      { title: '5MM', desc: '' },
      { title: 'PREMIUM', desc: '' }
    ]
  },
  {
    slug: 'am-03-cnc-engraved-6mm-magnet',
    sku: 'AM-03',
    name: 'CNC Engraved 6mm Magnets',
    category: 'acrylic-magnets',
    badge: 'NEW',
    app_badge: 'Retail',
    tagline: 'CNC-machined waterproof magnets featuring synthetic paper and industrial-grade durability for character merchandise.',
    price_from: 0.55,
    moq: 300,
    specs: {
      'MOQ': '300+ Pcs',
      'Lead Time': '20 Days',
      'Customization': 'Custom Contour'
    },
    features: [
      { title: 'WATERPROOF', desc: '' },
      { title: '6MM', desc: '' },
      { title: 'CNC', desc: '' }
    ]
  }
];




// Helper functions
function getProduct(slug) { return PRODUCTS.find(p => p.slug === slug); }
function getProductsByCategory(cat) {
  if (!cat || cat === 'all') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === cat);
}
function getCategory(slug) { return CATEGORIES.find(c => c.slug === slug); }
