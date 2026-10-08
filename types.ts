
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  priceEstimate: string;
  imageUrl: string;
  amazonUrl: string;
}

export interface DeepReview {
  title: string;
  summary: string;
  pros: string[];
  cons: string[];
  verdict: string;
  technicalSpecs: Record<string, string>;
  whoIsItFor: string;
  whoIsItNotFor: string;
  groundingSources: Array<{
    title: string;
    uri: string;
  }>;
}

export interface Comparison {
  productA: string;
  productB: string;
  winner: string;
  keyDifferences: string[];
  comparisonTable: Array<{
    feature: string;
    valA: string;
    valB: string;
  }>;
  summary: string;
}

export interface Deal {
  id: string;
  title: string;
  category: string;
  originalPrice: string;
  dealPrice: string;
  discountPercentage: string;
  description: string;
  insight: string;
  amazonUrl: string;
}

export interface BuyerGuide {
  category: string;
  title: string;
  intro: string;
  buyingFactors: Array<{
    factor: string;
    description: string;
  }>;
  commonMistakes: string[];
  conclusion: string;
}

/** A pre-written, editorially reviewed article. Static — never generated at runtime. */
export interface StaticReview {
  slug: string;
  productName: string;
  category: string;
  /** Page <title> and H1. */
  title: string;
  /** Meta description, ~155 chars. */
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  priceAtReview: string;
  imageUrl: string;
  imageCredit?: string;
  amazonUrl: string;
  /** One-paragraph answer for readers who only read the top. */
  bottomLine: string;
  /** Body sections, rendered in order. */
  sections: Array<{ heading: string; paragraphs: string[] }>;
  specs: Array<{ label: string; value: string }>;
  pros: string[];
  cons: string[];
  whoIsItFor: string;
  whoIsItNotFor: string;
  /** Real, checkable sources. Empty array is not acceptable for a published review. */
  sources: Array<{ title: string; uri: string }>;
}

export interface StaticGuide {
  slug: string;
  title: string;
  metaDescription: string;
  publishedAt: string;
  updatedAt: string;
  author: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  mistakes: string[];
  sources: Array<{ title: string; uri: string }>;
}
