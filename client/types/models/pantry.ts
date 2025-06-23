export interface PantryItem {
  ingredientName: string;
  isRecurrent: boolean;
  category: string;
  image?: string;
  expirationDate?: Date;
  brand?: string;
  transactionType?: "add" | "remove" | "update";
  recipeId?: string;
  measurementType: string;
  measurementValue: number;
  lowValueAlert?: number;
}

export type PantryMeasurementTransactionType =
  | "add"
  | "remove"
  | "update"
  | "purchase";

export interface PantryIngredientMeasurement {
  pantryId: string;
  transactionType: PantryMeasurementTransactionType;
  recipeName?: string;
  measurementType: string;
  measurementValue: number;
  lowValueAlert?: number;
}

export interface Transaction {
  id: string;
  transactionType:
    | "add"
    | "use"
    | "update"
    | "pendingForPurchase"
    | "purchased";
  recipeName?: string;
  measurementType: string;
  measurementValue: number;
  createdAt: string;
}

interface MostUsedRecipe {
  recipeName: string;
  usageCount: number;
}

export interface PantryItemDetail {
  id: string;
  ingredientName: string;
  image: string;
  currentAmount: number;
  category: string;
  isRecurrent: boolean;
  expirationDate?: string;
  brand?: string;
  lowValueAlert: number;
  updatedAt: string;
  measurementType: string;
  measurementValue: number;
  transactions: Transaction[];
  monthlyConsumption?: number;
  weeklyConsumption?: number;
  mostUsedRecipe?: MostUsedRecipe;
}
