
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
