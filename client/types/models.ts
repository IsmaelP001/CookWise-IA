export interface PantryItem{
  ingredientName: string;
  isRecurrent: boolean;
  category: string;
  image?:string;
  expirationDate?: Date;
  brand?: string;
  transactionType?: "add" | "remove" | "update";
  recipeId?: string;
  measurementType: string;
  measurementValue: number;
  lowValueAlert?: number;
}

  export type PantryMeasurementTransactionType = 'add' | 'remove' | 'update' | 'purchase'

  export interface PantryIngredientMeasurement {
    pantryId: string;
    transactionType: PantryMeasurementTransactionType;
    recipeName?:string;
    measurementType: string;
    measurementValue: number;
    lowValueAlert?: number;
  }
