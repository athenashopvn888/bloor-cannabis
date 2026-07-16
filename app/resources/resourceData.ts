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
  "Cigarette packs and styles",
  "Nicotine pouches",
  "Grabba and grabba shakers",
  "Backwoods and rolling options",
  "Papers, lighters, and related accessories",
];

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    slug: "",
    title: "Bloor Cannabis Dispensary Resources",
    seoTitle: "Bloor Cannabis Dispensary Resources | Bloorcourt Cannabis Guides",
    description:
      "Bloor Cannabis Dispensary resource hub for Bloor Street West, Dufferin, Bloorcourt, Bloordale Village, Christie Pits, menu categories, flower tiers, and visit planning.",
    eyebrow: "Bloorcourt Resource Hub",
    intro:
      "Bloor Cannabis Dispensary sits in the Bloorcourt and Dufferin corridor near Bloordale Village, Christie Pits, Dovercourt, Ossington, and Koreatown. Use these resources to plan a visit, choose a menu category, compare flower tiers, and find the right current store page without opening every section at once.",
    banner: "/banners/welcome_banner.webp",
    cards: [
      {
        title: "Bloorcourt Visit Guide",
        href: "/resources/bloorcourt-visit-guide",
        text: "The main local guide for 993 Bloor St W, Dufferin Station, Bloorcourt, Bloordale, and Christie Pits.",
      },
      {
        title: "Evening And Weekend Guide",
        href: "/resources/weekend-late-night-guide",
        text: "A practical route for checking current hours, quick-stop categories, and visit details before heading to Bloor Street West.",
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
        title: "Cigarette And Grabba Guide",
        href: "/resources/cigarette-brand-prices",
        text: "Find the cigarette, pouch, grabba, Backwoods, and accessory menu paths in one place.",
      },
    ],
    sections: [
      {
        heading: "Built Around The Bloorcourt Visit",
        body:
          "These guides stay close to the way people move through Bloor Street West: arrive from Dufferin or a nearby neighbourhood, choose a category, compare the relevant menu page, and confirm visit details before leaving.",
        bullets: [
          "Use the Toronto store page for current directions and contact details.",
          "Use the menu guide when you know the format but not the category page.",
          "Use the flower guide when shelf level is the first decision.",
        ],
      },
      {
        heading: "Each Guide Has A Clear Job",
        body:
          "The hub separates visit planning, menu-category routing, flower-tier comparison, local transit context, and cigarette or grabba browsing. Each guide leads back to a current store page instead of repeating the entire menu.",
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
        text: "Use the Toronto store page for current directions, contact options, and visit details.",
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
        heading: "Confirm Timing Before Leaving",
        body:
          "Schedules can shape an evening or weekend stop. Check the current store page before leaving, then keep the relevant menu category open so the in-store comparison starts in the right place.",
        bullets: [
          "Check the current store page for listed hours.",
          "Open directions before travelling through the Bloor and Dufferin corridor.",
          "Use Contact if a timing detail needs confirmation.",
        ],
      },
    ],
  },
  {
    slug: "weekend-late-night-guide",
    title: "Evening And Weekend Bloor Guide",
    seoTitle: "Bloor Evening And Weekend Visit Guide | Bloor Cannabis",
    description:
      "Plan an evening or weekend visit to Bloor Cannabis Dispensary near Bloorcourt, Dufferin, Bloordale, and Christie Pits.",
    eyebrow: "Late-Night Guide",
    intro:
      "Evening and weekend trips around Bloorcourt can involve transit, food, errands, and a cannabis stop in the same stretch. Use this guide to confirm timing and open a focused category before heading out.",
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
        heading: "Keep The Evening Stop Practical",
        body:
          "Confirm the store page, open the right category, and avoid wandering through every product page when the stop is time-sensitive.",
      },
      {
        heading: "Quick-Stop Menu Lanes",
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
          "Use these guides for the path, then use the current category pages for menu names and package details before visiting.",
      },
    ],
  },
  {
    slug: "flower-tier-guide",
    title: "Bloor Cannabis Flower Tier Guide",
    seoTitle: "Bloor Cannabis Flower Tier Guide | Exotic Premium AAA AA Budget",
    description:
      "Compare Bloor Cannabis Dispensary flower tiers including Exotic, Premium, AAA+, AA, and Budget menu lanes.",
    eyebrow: "Flower Guide",
    intro:
      "Bloor Cannabis Dispensary flower shopping is easier when you use the shelf map first. Open the tier that matches the visit, then compare strains inside that lane.",
    banner: "/banners/premium_banner.webp",
    cards: [
      {
        title: "Exotic",
        href: "/exotic",
        text: "Start here for the Exotic shelf and its current strain cards.",
      },
      {
        title: "Premium",
        href: "/premium",
        text: "Open the Premium shelf for a separate set of current strain cards.",
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
        heading: "Compare Inside One Shelf At A Time",
        body:
          "Once a shelf fits the visit, compare the current cards inside that tier. This keeps Exotic, Premium, AAA+, AA, and Budget from turning into one long mixed list.",
        bullets: [
          "Exotic and Premium stay in separate high-shelf lanes.",
          "AAA+ provides a middle menu lane.",
          "AA and Budget keep value-first browsing separate.",
          "Use the current tier cards for the details shown today.",
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
        text: "Use the Toronto store page for current directions and visit details.",
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
    title: "Bloor Cannabis Cigarette And Grabba Guide",
    seoTitle: "Bloor Cannabis Cigarette And Grabba Menu Guide | Toronto",
    description:
      "Find the Bloor Cannabis Dispensary menu paths for cigarettes, nicotine pouches, grabba, Backwoods, and related accessories.",
    eyebrow: "Cigarette Prices",
    intro:
      "If cigarettes or grabba are part of the Bloor Street stop, handle that lane separately. Start with the current cigarette category, then check accessories if papers, lighters, or another add-on are also needed.",
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
        heading: "Choose The Right Menu Path",
        body:
          "The cigarette category is the current menu source for cigarette, pouch, grabba, and Backwoods browsing. These format groups help you start in the right place without implying live stock.",
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
