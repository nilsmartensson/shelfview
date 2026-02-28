// TODO: Replace with API call to GET /api/v1/findings
export const mockFindings = [
  {
    id: 'FND-001',
    product: {
      name: 'Apex Pro Running Shoe',
      sku: 'APX-RUN-001',
      thumbnail: 'https://picsum.photos/seed/shoe1/48/48',
    },
    reseller: {
      name: 'Runners Planet',
      domain: 'runnersplanet.com',
      url: 'https://runnersplanet.com/products/apex-pro',
    },
    confidence: 'High',
    dateDetected: '2026-02-24',
    screenshotUrl: 'https://picsum.photos/seed/screen1/800/480',
    status: 'New',
  },
  {
    id: 'FND-002',
    product: {
      name: 'TrailBlazer Backpack 30L',
      sku: 'TBP-030-GRN',
      thumbnail: 'https://picsum.photos/seed/pack1/48/48',
    },
    reseller: {
      name: 'OutdoorHub UK',
      domain: 'outdoorhub.co.uk',
      url: 'https://outdoorhub.co.uk/gear/trailblazer-30l',
    },
    confidence: 'High',
    dateDetected: '2026-02-23',
    screenshotUrl: 'https://picsum.photos/seed/screen2/800/480',
    status: 'Contacted',
  },
  {
    id: 'FND-003',
    product: {
      name: 'HydraFlow Water Bottle 750ml',
      sku: 'HFB-750-BLU',
      thumbnail: 'https://picsum.photos/seed/bottle1/48/48',
    },
    reseller: {
      name: 'ActiveGear Store',
      domain: 'activegear.store',
      url: 'https://activegear.store/hydra-flow-750',
    },
    confidence: 'Medium',
    dateDetected: '2026-02-22',
    screenshotUrl: 'https://picsum.photos/seed/screen3/800/480',
    status: 'New',
  },
  {
    id: 'FND-004',
    product: {
      name: 'Apex Pro Running Shoe',
      sku: 'APX-RUN-001',
      thumbnail: 'https://picsum.photos/seed/shoe1/48/48',
    },
    reseller: {
      name: 'SportsDirect Online',
      domain: 'sportsdirect-online.net',
      url: 'https://sportsdirect-online.net/footwear/apex-pro',
    },
    confidence: 'Medium',
    dateDetected: '2026-02-21',
    screenshotUrl: 'https://picsum.photos/seed/screen4/800/480',
    status: 'Resolved',
  },
  {
    id: 'FND-005',
    product: {
      name: 'CoreFlex Resistance Band Set',
      sku: 'CFR-SET-5PK',
      thumbnail: 'https://picsum.photos/seed/bands1/48/48',
    },
    reseller: {
      name: 'FitnessPro Depot',
      domain: 'fitnessprodepot.com',
      url: 'https://fitnessprodepot.com/resistance/coreflex-set',
    },
    confidence: 'Low',
    dateDetected: '2026-02-20',
    screenshotUrl: 'https://picsum.photos/seed/screen5/800/480',
    status: 'New',
  },
  {
    id: 'FND-006',
    product: {
      name: 'TrailBlazer Backpack 30L',
      sku: 'TBP-030-GRN',
      thumbnail: 'https://picsum.photos/seed/pack1/48/48',
    },
    reseller: {
      name: 'CampingWorld Express',
      domain: 'campingworldexpress.de',
      url: 'https://campingworldexpress.de/rucksack/trailblazer',
    },
    confidence: 'High',
    dateDetected: '2026-02-19',
    screenshotUrl: 'https://picsum.photos/seed/screen6/800/480',
    status: 'Contacted',
  },
  {
    id: 'FND-007',
    product: {
      name: 'PolarShield Insulated Jacket',
      sku: 'PSJ-M-BLK',
      thumbnail: 'https://picsum.photos/seed/jacket1/48/48',
    },
    reseller: {
      name: 'MountainWear Shop',
      domain: 'mountainwear.shop',
      url: 'https://mountainwear.shop/jackets/polarshield',
    },
    confidence: 'Medium',
    dateDetected: '2026-02-18',
    screenshotUrl: 'https://picsum.photos/seed/screen7/800/480',
    status: 'New',
  },
  {
    id: 'FND-008',
    product: {
      name: 'HydraFlow Water Bottle 750ml',
      sku: 'HFB-750-BLU',
      thumbnail: 'https://picsum.photos/seed/bottle1/48/48',
    },
    reseller: {
      name: 'EcoSports Market',
      domain: 'ecosportsmarket.eu',
      url: 'https://ecosportsmarket.eu/hydration/hydraflow',
    },
    confidence: 'Low',
    dateDetected: '2026-02-17',
    screenshotUrl: 'https://picsum.photos/seed/screen8/800/480',
    status: 'Resolved',
  },
]
