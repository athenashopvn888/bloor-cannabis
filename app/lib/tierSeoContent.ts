/* Store-specific, non-volatile copy for the five Weed flower collections. */

export interface TierSeoData {
  seoTitle: string;
  seoIntro: string;
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

function tierCopy(name: string): TierSeoData {
  return {
    seoTitle: `${name} & Cannabis Flower Toronto | Bloor Cannabis Dispensary`,
    seoIntro: `Bloor Cannabis Dispensary brings ${name} together as one of its Cannabis Flower collections for shoppers exploring flower in Toronto. Browse the products presented in this collection and compare it with the other Bloor Cannabis Dispensary flower collections that interest you.`,
    sections: [
      {
        heading: `Browse ${name} in Toronto`,
        body: `${name} is one of five Weed flower collections at Bloor Cannabis Dispensary. Compare the selections presented here with Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed.`,
      },
      {
        heading: "Choose from the current menu",
        body: "Each product card presents the details available for that selection. Open a product to review the information shown before visiting the store.",
      },
    ],
    faqs: [
      {
        q: `What is the ${name} collection?`,
        a: `${name} is one of the five Weed flower collections used to organize the Bloor Cannabis Dispensary menu. Browse the collection for the details shown with each selection.`,
      },
      {
        q: `Where can I compare ${name} with other Weed tiers?`,
        a: "Use the Bloor Cannabis Dispensary Weed & Flower Guide to move between all five flower collections.",
      },
    ],
  };
}

export const TIER_SEO: Record<string, TierSeoData> = {
  EXOTIC: tierCopy("Exotic Weed"),
  PREMIUM: tierCopy("Premium Weed"),
  "AAA+": tierCopy("AAA+ Weed"),
  AA: tierCopy("AA Weed"),
  BUDGET: tierCopy("Budget Weed"),
};
