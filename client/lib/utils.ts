import { MEAL_TYPES } from "@/config/validators/options";
import { Utensils } from "lucide-react-native";

export const getDaysRemaining = (dateString:string) => {
    if (!dateString) return null;
    
    const today = new Date() as any;
    const expDate = new Date(dateString) as any;
    const diffTime = expDate - today ;
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  export const formatDate = (dateString:string) => {
    if (!dateString) return 'N/A';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      day: '2-digit', 
      month: 'long', 
      year: 'numeric'
    });
  };
  

  export const getMealIcon = (mealTypeId: any) => {
    const mealType = MEAL_TYPES.find((type) => type.id === mealTypeId);
    return mealType ? mealType.icon : Utensils;
  };

  type Difficulty = "Fácil" | "Media" | string;
  export function difficultyColor(difficultyType: Difficulty) {
    if (difficultyType === "Fácil") {
      return "bg-green-50 border-green-300";
    } else if (difficultyType === "Media") {
      return "bg-yellow-50 border-yellow-200";
    } else {
      return "bg-red-50 border-red-200";
    }
  }