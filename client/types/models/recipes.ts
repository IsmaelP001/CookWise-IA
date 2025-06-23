import { Instruction } from "@/hooks/useCreateRecipe";

interface instructions {
  step: string;
}

export interface RecipeIngredient {
  id: string;
  pantryId?: string;
  recipeId: string;
  category: string;
  ingredientName: string;
  measurementType: string;
  measurementValue: number;
  notes?: string;
}


export interface RecipeItem{
  id: string;
  userId: string;
  name: string;
  description: string | null;
  prepTime: number;
  cookTime: number;
  isSharedCommunity: boolean;
  servings: number;
  dificulty: string | null;
  mealTypes: ('breakfast' | 'lunch' | 'dinner' | 'dessert' | string)[];
  instructions: Instruction[];
  rating?:number
  notes: string;
  image: string | null;
  createdAt: string;
  author:string;
}


export interface SearchRecipe {
  ingredientName?: string;
  recipeName?: string;
  cookTime?: number;
  mealType?: string;
  onlyCommunityRecipes?: boolean;
  userId?: string;
  ingredientCount?: number;
}

export interface RecipeIngredientCheck {
  id: string;
  recipeId: string;
  pantryId: string;
  category: string;
  ingredientName: string;
  quantity: number;
  measurementType:
    | "grams"
    | "kilograms"
    | "milliliters"
    | "liters"
    | "pounds"
    | "ounces"
    | "units"
    | "tablespoons"
    | "teaspoons"
    | string;
}

export interface RecipeIngredientAnalysis {
  id: string;
  recipeId: string;
  pantryId: string;
  ingredientName: string;
  category: string;
  measurementType: string;
  quantity: number;
  availableQuantity: number;
  missingAmount: number;
}


export interface RecommendedRecipe {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  mealTypes: ("breakfast" | "lunch" | "dinner" | "dessert" | string)[];
  prepTime: number;
  cookTime: number;
  dificulty: string | null;
  totalIngredients: number;
  missingIngredients: number;
  ingredients:RecipeIngredientAnalysis[];
  totalInPantryIngredients: number;
  sufficientIngredients: RecipeIngredientCheck[];
  insufficientIngredients: RecipeIngredientCheck[];
}


