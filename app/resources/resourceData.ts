export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  bullets?: string[];
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  eyebrow: string;
  intro: string;
  banner: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

const cigaretteLines = [
  "Canadian Lights - $25",
  "Canadian Full - $25",
  "Putters - $25",
  "Canadian Goose Full - $25",
  "Canadian Goose Lights - $25",
  "Canadian Menthol - $25",
  "Canadian Classics Original - $25",
  "Canadian Classics Silver - $25",
  "Rolled Gold Lights - $25",
  "Nexus Full - $25",
  "Nexus Lights - $25",
  "Time Full - $25",
  "Nicotine pouches: Velo, Pablo, Killa - $20",
  "Grabba - $5",
  "Grabba Shaker: RedRose / Red Herring - $19",
  "Backwoods assorted flavors - $20-$25",
  "10 x Premium Mix Cigarettes - $3",
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Bloor Cannabis Dispensary Resources",
    seoTitle: "Bloor Cannabis Dispensary Resources | Bloorcourt Cannabis Guides",
    description:
      "Bloor Cannabis Dispensary resource hub for Bloor Street West, Dufferin, Bloorcourt, Bloordale Village, Christie Pits, weekend late-night visits, flower tiers, and cigarette prices.",
    eyebrow: "Bloorcourt Resource Hub",
    intro:
      "Bloor Cannabis Dispensary lives at 993 Bloor St W, right in the Bloorcourt and Dufferin rhythm near Bloordale Village, Christie Pits, Dovercourt, Ossington, and Koreatown. Use these resources to plan the visit, choose the menu lane, compare flower tiers, and handle cigarette brand and price checks without turning the page into clutter.",
    banner: "/banners/welcome_banner.webp",
    cards: [
      {
        title: "Bloorcourt Visit Guide",
        href: "/resources/bloorcourt-visit-guide",
        text: "The main local guide for 993 Bloor St W, Dufferin Station, Bloorcourt, Bloordale, and Christie Pits.",
      },
      {
        title: "Weekend Late-Night Guide",
        href: "/resources/weekend-late-night-guide",
        text: "Use this when Friday and Saturday 3 AM hours are the reason for the stop.",
      },
      {
        title: "Bloor Street Menu Guide",
        href: "/resources/bloor-street-menu-guide",
        text: "Choose between flower, pre-rolls, vapes, edibles, concentrates, accessories, and cigarettes.",
      },
      {
        title: "Flower Tier Guide",
        href: "/resources/flower-tier-guide",
        text: "Compare Exotic, Premium, AAA+, AA, and Budget before picking a strain.",
      },
      {
        title: "Dufferin Transit Guide",
        href: "/resources/dufferin-transit-guide",
        text: "Plan around Dufferin Station, Bloor Street West, side streets, and nearby walking areas.",
      },
      {
        title: "Cigarette Brand Prices",
        href: "/resources/cigarette-brand-prices",
        text: "Brand and price notes for Canadian, Canadian Goose, Nexus, Putters, Grabba, Backwoods, and pouches.",
      },
    ],
    sections: [
      {
        heading: "Give Bloor Its Own Job In Pod 3",
        body:
          "Bloor Cannabis Dispensary should own the Bloor Street West, Dufferin, Bloorcourt, Bloordale, Christie Pits, Dovercourt, Ossington, and Koreatown lane. That makes it distinct from Kensington Green even though both stores sit in the west Toronto pod.",
        bullets: [
          "Locked local landing page: /weed-dispensary-toronto.",
          "Store address: 993 Bloor St W, Toronto, ON M6H 1M1.",
          "Store data hours: Mon-Thu and Sun 11 AM to 11 PM; Fri-Sat 11 AM to 3 AM.",
        ],
      },
      {
        heading: "Useful Pages Beat Recycled Blog Copy",
        body:
          "These pages are built as shop paths: visit planning, late-night timing, menu category routing, flower tier comparison, local transit, and cigarette price details. Each page has a clear purpose and points back to existing slugs.",
      },
    ],
  },
  {
    slug: "bloorcourt-visit-guide",
    title: "Bloorcourt Visit Guide",
    seoTitle: "Bloorcourt Cannabis Visit Guide | Bloor Cannabis Dispensary",
    description:
      "Plan a visit to Bloor Cannabis Dispensary at 993 Bloor St W near Dufferin, Bloorcourt, Bloordale Village, Christie Pits, Dovercourt, and Ossington.",
    eyebrow: "Visit Guide",
    intro:
      "This guide is for shoppers planning the 993 Bloor St W stop. It keeps the Bloorcourt, Dufferin, Bloordale, Christie Pits, Dovercourt, Ossington, and Koreatown context close to the actual menu pages.",
    banner: "/banners/homepage_hero.webp",
    cards: [
      {
        title: "Local Landing Page",
        href: "/weed-dispensary-toronto",
        text: "Use the protected Toronto landing page for locked store details and local SEO context.",
      },
      {
        title: "Bloor Street Menu Guide",
        href: "/resources/bloor-street-menu-guide",
        text: "Pick the category lane before opening item pages.",
      },
      {
        title: "Dufferin Transit Guide",
        href: "/resources/dufferin-transit-guide",
        text: "Plan around Dufferin Station, Bloor Street, and nearby side streets.",
      },
    ],
    sections: [
      {
        heading: "Start With 993 Bloor St W",
        body:
          "Bloor Cannabis Dispensary is listed at 993 Bloor St W, Toronto, ON M6H 1M1. The location naturally supports Bloorcourt, Dufferin, Bloordale Village, Christie Pits, Dovercourt, Ossington, and Koreatown shoppers.",
      },
      {
        heading: "Match The Visit To The Hours",
        body:
          "The store data shows regular 11 AM to 11 PM hours on Sunday through Thursday and later Friday-Saturday hours until 3 AM. Use the current store page if timing is the main reason for the trip.",
        bullets: [
          "Mon-Thu: 11:00 AM to 11:00 PM.",
          "Fri-Sat: 11:00 AM to 03:00 AM.",
          "Sun: 11:00 AM to 11:00 PM.",
        ],
      },
    ],
  },
  {
    slug: "weekend-late-night-guide",
    title: "Weekend Late-Night Bloor Guide",
    seoTitle: "Weekend Late-Night Cannabis Guide | Bloor Cannabis Dispensary",
    description:
      "A Bloor Cannabis Dispensary late-night guide for Friday and Saturday 3 AM hours near Bloorcourt, Dufferin, Bloordale, and Christie Pits.",
    eyebrow: "Late-Night Guide",
    intro:
      "Bloor Cannabis Dispensary has a different weekend role than most generic store pages: Friday and Saturday hours are listed until 3 AM. Use this guide when timing is the main reason for the Bloor Street stop.",
    banner: "/banners/10_Games.webp",
    cards: [
      {
        title: "Bloorcourt Visit Guide",
        href: "/resources/bloorcourt-visit-guide",
        text: "Check the address and local context before heading out.",
      },
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "A direct quick-stop lane for ready-to-smoke products.",
      },
      {
        title: "Vapes",
        href: "/items/vape-disposables",
        text: "A format-first lane when the visit is fast and discreet.",
      },
      {
        title: "Accessories",
        href: "/items/add-ons",
        text: "Check essentials before arriving late.",
      },
    ],
    sections: [
      {
        heading: "Late-Night Pages Should Stay Practical",
        body:
          "A late-night resource is useful when it helps shoppers move quickly: confirm the store page, open the right category, and avoid wandering through every product page when the stop is time-sensitive.",
      },
      {
        heading: "Good Late-Night Lanes",
        body:
          "Pre-rolls, vapes, accessories, and cigarettes are common quick-stop lanes. Flower shoppers should still use the tier guide first so they do not make every strain compete at once.",
      },
    ],
  },
  {
    slug: "bloor-street-menu-guide",
    title: "Bloor Street Menu Guide",
    seoTitle: "Bloor Cannabis Dispensary Menu Guide | Bloor Street West",
    description:
      "A Bloor Cannabis Dispensary menu guide for flower, pre-rolls, THC vapes, nicotine vapes, edibles, concentrates, accessories, cigarettes, and value shopping.",
    eyebrow: "Menu Guide",
    intro:
      "The Bloor Street menu works best when you start with intent. Flower tier, quick pre-roll, edible, THC vape, nicotine vape, concentrate, accessory, cigarette, or value shopping: each one deserves its own lane.",
    banner: "/banners/edibles_prerolls_more_banner.webp",
    cards: [
      {
        title: "Flower Tier Guide",
        href: "/resources/flower-tier-guide",
        text: "Compare shelf lanes before choosing individual flower.",
      },
      {
        title: "Pre-Rolls",
        href: "/items/prerolls",
        text: "Use this for singles, packs, and ready-to-smoke browsing.",
      },
      {
        title: "Concentrates",
        href: "/items/concentrates",
        text: "Keep stronger-format products in a separate lane.",
      },
      {
        title: "Cigarette Brand Prices",
        href: "/resources/cigarette-brand-prices",
        text: "Use the brand and price guide before opening cigarettes.",
      },
    ],
    sections: [
      {
        heading: "One Intent Per Page",
        body:
          "Bloorcourt shoppers are often moving quickly between transit, errands, food, nightlife, and home. The resource hub keeps the decision organized: category first, product second, visit details last.",
        bullets: [
          "Flower: compare Exotic, Premium, AAA+, AA, and Budget.",
          "Quick stop: pre-rolls, vapes, accessories, or cigarettes.",
          "Format-first: edibles, concentrates, THC vape, and nicotine vape.",
          "Value-first: Budget, AA, and bundle-aware flower tiers.",
        ],
      },
      {
        heading: "The Menu Carries The Moving Details",
        body:
          "Resource pages should not pretend every item is fixed. Use these guides for the path, then use the current category pages for product names, prices, strengths, package sizes, and availability.",
      },
    ],
  },
  {
    slug: "flower-tier-guide",
    title: "Bloor Cannabis Flower Tier Guide",
    seoTitle: "Bloor Cannabis Flower Tier Guide | Exotic Premium AAA AA Budget",
    description:
      "Compare Bloor Cannabis Dispensary flower tiers including Exotic, Premium, AAA+, AA, Budget, value lanes, and 6g bundle math.",
    eyebrow: "Flower Guide",
    intro:
      "Bloor Cannabis Dispensary flower shopping is easier when you use the shelf map first. Open the tier that matches the visit, then compare strains inside that lane.",
    banner: "/banners/premium_banner.webp",
    cards: [
      {
        title: "Exotic",
        href: "/exotic",
        text: "The highest shelf lane with 6g bundle math shown in the tier data.",
      },
      {
        title: "Premium",
        href: "/premium",
        text: "A quality-forward lane with a stronger value case when bundled.",
      },
      {
        title: "AAA+",
        href: "/aaa",
        text: "A practical middle shelf before AA and Budget.",
      },
      {
        title: "AA",
        href: "/aa",
        text: "A daily-driver lane for simpler value decisions.",
      },
      {
        title: "Budget",
        href: "/budget",
        text: "Use this when the Bloor Street stop is price-first.",
      },
    ],
    sections: [
      {
        heading: "Use The Tier As The Filter",
        body:
          "A strain name can be tempting, but the shelf lane does the first pass. Exotic and Premium aim higher, AAA+ sits in the middle, and AA plus Budget keep the value side clean.",
      },
      {
        heading: "6g Math Can Change The Decision",
        body:
          "The store tier data shows 6g bundle paths for Exotic, Premium, and AAA+. That can make the effective per-gram price lower than the single-gram headline, so flower shoppers should check the tier page before deciding.",
        bullets: [
          "Exotic 6g bundle: $60 shown in the tier data.",
          "Premium 6g bundle: $45 shown in the tier data.",
          "AAA+ 6g bundle: $30 shown in the tier data.",
          "AA and Budget remain direct value lanes.",
        ],
      },
    ],
  },
  {
    slug: "dufferin-transit-guide",
    title: "Dufferin Transit And Street Guide",
    seoTitle: "Bloor Cannabis Dufferin Transit Guide | 993 Bloor St W",
    description:
      "Plan a Bloor Cannabis Dispensary visit near Dufferin Station, Bloor Street West, Bloorcourt, Bloordale Village, Christie Pits, and Dovercourt.",
    eyebrow: "Route Guide",
    intro:
      "The 993 Bloor St W location is useful because it sits close to Dufferin Station and a lot of west-end walking traffic. Use this page to plan the route before choosing the menu lane.",
    banner: "/banners/08_Contact_Us.webp",
    cards: [
      {
        title: "Bloorcourt Visit Guide",
        href: "/resources/bloorcourt-visit-guide",
        text: "Return to the main local visit planner.",
      },
      {
        title: "Local Landing Page",
        href: "/weed-dispensary-toronto",
        text: "Use the protected landing page for locked address details.",
      },
      {
        title: "Contact",
        href: "/contact",
        text: "Use contact details if the route or timing needs confirmation.",
      },
    ],
    sections: [
      {
        heading: "Transit Context",
        body:
          "The store data places Bloor Cannabis Dispensary steps from Dufferin Station and local TTC routes. That makes the page useful for Bloorcourt, Bloordale Village, Christie Pits, Dovercourt, Ossington, and Koreatown shoppers.",
      },
      {
        heading: "Street Parking Context",
        body:
          "The store data notes street parking along Bloor Street West and surrounding side streets. Availability changes by day, time, and signage, so use this as context and follow posted rules when you arrive.",
      },
    ],
  },
  {
    slug: "cigarette-brand-prices",
    title: "Bloor Cannabis Cigarette Brand Prices",
    seoTitle: "Bloor Cannabis Cigarette Prices | Native Smokes Brands Toronto",
    description:
      "Bloor Cannabis Dispensary cigarette resource with listed brands and prices including Canadian, Canadian Goose, Canadian Classics, Nexus, Putters, Grabba, Backwoods, and nicotine pouches.",
    eyebrow: "Cigarette Prices",
    intro:
      "If cigarettes are part of the Bloor Street stop, handle that lane separately. The current store source lists Canadian, Canadian Goose, Canadian Classics, Putters, Nexus, Time, Grabba, Backwoods, and nicotine pouch lines with prices.",
    banner: "/banners/06_Cigarettes.webp",
    cards: [
      {
        title: "Cigarette Category",
        href: "/items/cigarettes",
        text: "Open the current cigarette category before visiting.",
      },
      {
        title: "Weekend Late-Night Guide",
        href: "/resources/weekend-late-night-guide",
        text: "Useful when cigarettes are part of a Friday or Saturday late stop.",
      },
      {
        title: "Accessories",
        href: "/items/add-ons",
        text: "Check papers, lighters, and add-ons separately.",
      },
    ],
    sections: [
      {
        heading: "Listed Brands And Prices",
        body:
          "The Bloor Cannabis Dispensary item source currently lists these cigarette, pouch, grabba, and Backwoods lines. Use this as a guide, then confirm current stock from the category page or in store.",
        bullets: cigaretteLines,
      },
      {
        heading: "Keep It Separate From Flower",
        body:
          "A cigarette stop should not bury the cannabis menu. Finish the tobacco decision in this lane, then move to flower, pre-rolls, vapes, edibles, concentrates, or accessories if needed.",
      },
    ],
  },
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
