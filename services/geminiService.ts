
import { GoogleGenAI, Type } from "@google/genai";
import { DeepReview, Comparison, Deal, BuyerGuide } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateProductDeepDive = async (productName: string): Promise<DeepReview> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Conduct a rigorous, independent analysis of: ${productName}. 
    Focus on long-term reliability, value for money, and technical superiority compared to competitors. 
    Use search grounding to find recent expert reviews.`,
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          pros: { type: Type.ARRAY, items: { type: Type.STRING } },
          cons: { type: Type.ARRAY, items: { type: Type.STRING } },
          verdict: { type: Type.STRING },
          technicalSpecs: { type: Type.OBJECT },
          whoIsItFor: { type: Type.STRING },
          whoIsItNotFor: { type: Type.STRING }
        },
        required: ["title", "summary", "pros", "cons", "verdict", "whoIsItFor"]
      }
    }
  });

  const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  const sources = chunks.map((c: any) => ({
    title: c.web?.title || 'Source',
    uri: c.web?.uri || ''
  })).filter((s: any) => s.uri !== '');

  return { ...JSON.parse(response.text), groundingSources: sources };
};

export const generateComparison = async (prodA: string, prodB: string): Promise<Comparison> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Compare ${prodA} vs ${prodB}. Provide a detailed side-by-side technical comparison and a clear winner for specific use cases.`,
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          productA: { type: Type.STRING },
          productB: { type: Type.STRING },
          winner: { type: Type.STRING },
          keyDifferences: { type: Type.ARRAY, items: { type: Type.STRING } },
          comparisonTable: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                feature: { type: Type.STRING },
                valA: { type: Type.STRING },
                valB: { type: Type.STRING }
              }
            }
          },
          summary: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text);
};

export const fetchTrendingDeals = async (): Promise<Deal[]> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find 4 currently trending high-value technology deals on Amazon. Provide realistic price comparisons and 'unique expert insight' on why the deal is valuable right now. Ensure URLs are direct Amazon product links.",
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            title: { type: Type.STRING },
            category: { type: Type.STRING },
            originalPrice: { type: Type.STRING },
            dealPrice: { type: Type.STRING },
            discountPercentage: { type: Type.STRING },
            description: { type: Type.STRING },
            insight: { type: Type.STRING, description: 'Expert analysis on why this specific price point is a good deal compared to history.' },
            amazonUrl: { type: Type.STRING }
          },
          required: ["id", "title", "dealPrice", "amazonUrl", "insight"]
        }
      }
    }
  });
  return JSON.parse(response.text);
};

export const generateBuyingGuide = async (category: string): Promise<BuyerGuide> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Write an expert buying guide for the category: ${category}. Explain what technical specs actually matter for a customer.`,
    config: {
      tools: [{ googleSearch: {} }],
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          category: { type: Type.STRING },
          title: { type: Type.STRING },
          intro: { type: Type.STRING },
          buyingFactors: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                factor: { type: Type.STRING },
                description: { type: Type.STRING }
              }
            }
          },
          commonMistakes: { type: Type.ARRAY, items: { type: Type.STRING } },
          conclusion: { type: Type.STRING }
        }
      }
    }
  });
  return JSON.parse(response.text);
};
