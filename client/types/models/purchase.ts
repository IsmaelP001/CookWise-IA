export type PurchaseStatus = "pending" | "compleated";

export interface Purchase {
  purchaseItems: PurchaseItem[];
}

export interface PurchaseItem {
  pantryId?: string;
  ingredientName: string;
  category: string;
  expirationDate?: string;
  recommendedAmountToBuy: number;
  measurementType: string;
  measurementValue: number;
}

export interface ConfirmPurchaseItem {
  orderId: string;
  purchaseItemId?: string;
  measurementValue: number;
  measurementType: string;
}


 export interface RecommendedPurchaseItem {
  id: string;
  ingredientName: string;
  isRecurrent: boolean;
  category: string; 
  recurrentAmount: number;
  measurementValue: number;
  measurementType: string;
  pendingPurchaseQuantity: number;
  lowValueAlert: number;
  recommendedAmountToBuy: number;
  amountToBuyMeasurementType: string;
  recipeDetails: any[]; 
  amountToBuy:number
}
