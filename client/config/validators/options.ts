import {
  Apple,
  Cake,
  Coffee,
  Cookie,
  CupSoda,
  Moon,
  Utensils,
} from "lucide-react-native";

export type UnitType =
  | "gramos"
  | "kilogramos"
  | "mililitros"
  | "litros"
  | "unidades"
  | "cucharadas"
  | "cucharaditas"
  | "tazas"
  | "pizcas"
  | "pellizcos"
  | "rebanadas"
  | "dientes"
  | "ramas"
  | "hojas"
  | "latas"
  | "paquetes";

export const unitOptions: UnitType[] = [
  "gramos",
  "kilogramos",
  "mililitros",
  "litros",
  "unidades",
  "cucharadas",
  "cucharaditas",
  "tazas",
  "pizcas",
  "pellizcos",
  "rebanadas",
  "dientes",
  "ramas",
  "hojas",
  "latas",
  "paquetes",
];

export const mealTypesOptions: MealType[] = [
  "Desayuno",
  "Almuerzo",
  "Cena",
  "Merienda",
  "Postre",
  "Brunch",
  "Aperitivo",
  "Bebida",
];

export type MealType =
  | "Desayuno"
  | "Almuerzo"
  | "Cena"
  | "Merienda"
  | "Postre"
  | "Brunch"
  | "Aperitivo"
  | "Bebida"
  | "Todas"
  |'Todas'

export const CATEGORY_COLORS: Record<
  string,
  { bg: string; light: string; text: string; border: string; icon: string }
> = {
  pasta: {
    bg: "bg-amber-500",
    light: "bg-amber-100",
    text: "text-amber-900",
    border: "border-amber-300",
    icon: "🍝",
  },
  fruits: {
    bg: "bg-green-500",
    light: "bg-green-50",
    text: "text-green-700",
    border: "border-green-300",
    icon: "🍎",
  },
  vegetables: {
    bg: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-700",
    border: "border-emerald-300",
    icon: "🥦",
  },
  meat: {
    bg: "bg-red-500",
    light: "bg-red-100",
    text: "text-red-800",
    border: "border-red-300",
    icon: "🥩",
  },
  dairy: {
    bg: "bg-blue-500",
    light: "bg-blue-100",
    text: "text-blue-800",
    border: "border-blue-300",
    icon: "🧀",
  },
  bakery: {
    bg: "bg-yellow-500",
    light: "bg-yellow-100",
    text: "text-yellow-800",
    border: "border-yellow-300",
    icon: "🍞",
  },
  frozen: {
    bg: "bg-cyan-500",
    light: "bg-cyan-100",
    text: "text-cyan-800",
    border: "border-cyan-300",
    icon: "❄️",
  },
  canned: {
    bg: "bg-orange-500",
    light: "bg-orange-100",
    text: "text-orange-800",
    border: "border-orange-300",
    icon: "🥫",
  },
  beverages: {
    bg: "bg-purple-500",
    light: "bg-purple-100",
    text: "text-purple-800",
    border: "border-purple-300",
    icon: "🥤",
  },
  snacks: {
    bg: "bg-pink-500",
    light: "bg-pink-100",
    text: "text-pink-800",
    border: "border-pink-300",
    icon: "🍪",
  },
  others: {
    bg: "bg-gray-500",
    light: "bg-gray-100",
    text: "text-gray-800",
    border: "border-gray-300",
    icon: "📦",
  },
  fish: {
    bg: "bg-sky-500",
    light: "bg-sky-100",
    text: "text-sky-800",
    border: "border-sky-300",
    icon: "🐟",
  },
  pantry: {
    bg: "bg-amber-500",
    light: "bg-amber-100",
    text: "text-amber-800",
    border: "border-amber-300",
    icon: "🧂",
  },
  spices: {
    bg: "bg-lime-500",
    light: "bg-lime-100",
    text: "text-lime-800",
    border: "border-lime-300",
    icon: "🌶️",
  },

  // NUEVAS CATEGORÍAS
  grains: {
    bg: "bg-yellow-600",
    light: "bg-yellow-100",
    text: "text-yellow-900",
    border: "border-yellow-400",
    icon: "🌾",
  },
  legumes: {
    bg: "bg-purple-600",
    light: "bg-purple-100",
    text: "text-purple-900",
    border: "border-purple-400",
    icon: "🫘",
  },
  condiments: {
    bg: "bg-pink-600",
    light: "bg-pink-100",
    text: "text-pink-900",
    border: "border-pink-400",
    icon: "🧂",
  },
  sauces: {
    bg: "bg-orange-600",
    light: "bg-orange-100",
    text: "text-orange-900",
    border: "border-orange-400",
    icon: "🍅",
  },
  oils: {
    bg: "bg-amber-600",
    light: "bg-amber-100",
    text: "text-amber-900",
    border: "border-amber-400",
    icon: "🛢️",
  },
  nuts: {
    bg: "bg-stone-500",
    light: "bg-stone-100",
    text: "text-stone-800",
    border: "border-stone-300",
    icon: "🥜",
  },
  sweets: {
    bg: "bg-rose-500",
    light: "bg-rose-100",
    text: "text-rose-800",
    border: "border-rose-300",
    icon: "🍬",
  },
  eggs: {
    bg: "bg-yellow-400",
    light: "bg-yellow-100",
    text: "text-yellow-900",
    border: "border-yellow-300",
    icon: "🥚",
  },
};





export type MealTypeEn =
  | "breakfast"
  | "lunch"
  | "dinner"
  | "dessert"
  | "snack"
  | "drink"
  |'all'

export interface MealTypes {
  id: MealType;
  label: string;
  icon?: any;
  value: MealTypeEn;
}

export const MEAL_TYPES: MealTypes[] = [
  { id: "Desayuno", label: "Desayuno", icon: Coffee, value: "breakfast" },
  { id: "Almuerzo", label: "Almuerzo", icon: Utensils, value: "lunch" },
  { id: "Cena", label: "Cena", icon: Moon, value: "dinner" },
  { id: "Postre", label: "Postre", icon: Cake, value: "dessert" },
  { id: "Merienda", label: "Merienda", icon: Apple, value: "snack" },
  { id: "Bebida", label: "Bebida", icon: CupSoda, value: "drink" },
];


export const PANTRY_CATEGORIES = [
  {
    label: "Carnes",
    value: "meats",
    color: {
      light: "bg-red-50",
      text: "text-red-800",
      border: "border-red-300",
      icon: "🥩",
    },
  },
  {
    label: "Pescados y Mariscos",
    value: "seafood",
    color: {
      light: "bg-sky-50",
      text: "text-sky-800",
      border: "border-sky-300",
      icon: "🐟",
    },
  },
  {
    label: "Lácteos",
    value: "dairy",
    color: {
      light: "bg-blue-50",
      text: "text-blue-800",
      border: "border-blue-300",
      icon: "🧀",
    },
  },
  {
    label: "Granos, Arroces y Pastas",
    value: "grains",
    color: {
      light: "bg-yellow-50",
      text: "text-yellow-900",
      border: "border-yellow-400",
      icon: "🌾",
    },
  },
  {
    label: "Legumbres",
    value: "legumes",
    color: {
      light: "bg-purple-50",
      text: "text-purple-900",
      border: "border-purple-400",
      icon: "🫘",
    },
  },
  {
    label: "Harinas y Azúcares",
    value: "flours_and_sugars",
    color: {
      light: "bg-orange-50",
      text: "text-orange-800",
      border: "border-orange-300",
      icon: "🍯",
    },
  },
  {
    label: "Especias",
    value: "spices",
    color: {
      light: "bg-lime-50",
      text: "text-lime-800",
      border: "border-lime-300",
      icon: "🌶️",
    },
  },
  {
    label: "Hierbas",
    value: "herbs",
    color: {
      light: "bg-green-50",
      text: "text-green-800",
      border: "border-green-300",
      icon: "🌿",
    },
  },
  {
    label: "Condimentos y Salsas",
    value: "condiments_and_sauces",
    color: {
      light: "bg-rose-50",
      text: "text-rose-800",
      border: "border-rose-300",
      icon: "🧂",
    },
  },
  {
    label: "Verduras",
    value: "vegetables",
    color: {
      light: "bg-emerald-50",
      text: "text-emerald-800",
      border: "border-emerald-300",
      icon: "🥦",
    },
  },
  {
    label: "Frutas",
    value: "fruits",
    color: {
      light: "bg-green-50",
      text: "text-green-700",
      border: "border-green-300",
      icon: "🍎",
    },
  },
  {
    label: "Frutos Secos y Semillas",
    value: "nuts_and_seeds",
    color: {
      light: "bg-stone-50",
      text: "text-stone-800",
      border: "border-stone-300",
      icon: "🥜",
    },
  },
  {
    label: "Productos de Panadería y Repostería",
    value: "bakery_and_pastry",
    color: {
      light: "bg-yellow-100",
      text: "text-yellow-800",
      border: "border-yellow-300",
      icon: "🍞",
    },
  },
  {
    label: "Huevos y Derivados",
    value: "eggs_and_derivatives",
    color: {
      light: "bg-yellow-50",
      text: "text-yellow-900",
      border: "border-yellow-300",
      icon: "🥚",
    },
  },
  {
    label: "Aceites y Grasas",
    value: "oils_and_fats",
    color: {
      light: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-400",
      icon: "🛢️",
    },
  },
  {
    label: "Bebidas No Alcohólicas",
    value: "beverages_non_alcoholic",
    color: {
      light: "bg-indigo-50",
      text: "text-indigo-800",
      border: "border-indigo-300",
      icon: "🥤",
    },
  },
  {
    label: "Bebidas Alcohólicas",
    value: "beverages_alcoholic",
    color: {
      light: "bg-purple-50",
      text: "text-purple-800",
      border: "border-purple-300",
      icon: "🍺",
    },
  },
  {
    label: "Suplementos y Vitaminas",
    value: "supplements_and_vitamins",
    color: {
      light: "bg-teal-50",
      text: "text-teal-800",
      border: "border-teal-300",
      icon: "💊",
    },
  },
  {
    label: "Postres y Dulces",
    value: "desserts_and_sweets",
    color: {
      light: "bg-rose-50",
      text: "text-rose-800",
      border: "border-rose-300",
      icon: "🍬",
    },
  },
  {
    label: "Alimentos Congelados",
    value: "frozen_foods",
    color: {
      light: "bg-cyan-50",
      text: "text-cyan-800",
      border: "border-cyan-300",
      icon: "❄️",
    },
  },
  {
    label: "Enlatados",
    value: "canned_goods",
    color: {
      light: "bg-orange-50",
      text: "text-orange-800",
      border: "border-orange-300",
      icon: "🥫",
    },
  },
  {
    label: "Comidas Preparadas",
    value: "ready_to_eat",
    color: {
      light: "bg-gray-50",
      text: "text-gray-800",
      border: "border-gray-300",
      icon: "🍱",
    },
  },
    {
    label: "Sin registrar",
    value: "unregistered",
    color: {
      light: "bg-gray-50",
      text: "text-gray-800",
      border: "border-gray-300",
      icon: "❓",
    },
  },
];



export type PantryCategoryValue = typeof PANTRY_CATEGORIES[number]['value'];


export type FoodUnit = {
  label: string;
  value: string;
};

export type FoodUnitCategory = {
  label: string;
  value: FoodUnitCategoryKey;
  units: FoodUnit[];
};

export type FoodUnitCategoryKey = keyof typeof FOOD_UNIT_CATEGORIES;


export const FOOD_UNIT_CATEGORIES:Record<string,FoodUnitCategory> = {
  meats: {
    label: 'Carnes',
    value: 'meats',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' },
      { label: 'onzas', value: 'ounces' }
    ]
  },
  seafood: {
    label: 'Pescados y Mariscos',
    value: 'seafood',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'onzas', value: 'ounces' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  dairy: {
    label: 'Lácteos',
    value: 'dairy',
    units: [
      { label: 'mililitros', value: 'milliliters' },
      { label: 'litros', value: 'liters' },
      { label: 'tazas', value: 'cups' },
      { label: 'pintas', value: 'pints' },
      { label: 'cuartos', value: 'quarts' },
      { label: 'centilitros', value: 'centiliters' }
    ]
  },
  grains: {
    label: 'Granos',
    value: 'grains',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  legumes: {
    label: 'Legumbres',
    value: 'legumes',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  flours_and_sugars: {
    label: 'Harinas y Azúcares',
    value: 'flours_and_sugars',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  spices: {
    label: 'Especias',
    value: 'spices',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'cucharaditas', value: 'teaspoons' },
      { label: 'cucharadas', value: 'tablespoons' },
      { label: 'gotas', value: 'drops' }
    ]
  },
  herbs: {
    label: 'Hierbas',
    value: 'herbs',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'cucharaditas', value: 'teaspoons' },
      { label: 'cucharadas', value: 'tablespoons' }
    ]
  },
  condiments_and_sauces: {
    label: 'Condimentos y Salsas',
    value: 'condiments_and_sauces',
    units: [
      { label: 'mililitros', value: 'milliliters' },
      { label: 'litros', value: 'liters' },
      { label: 'cucharadas', value: 'tablespoons' },
      { label: 'cucharaditas', value: 'teaspoons' }
    ]
  },
  vegetables: {
    label: 'Verduras',
    value: 'vegetables',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' },
      { label: 'onzas', value: 'ounces' }
    ]
  },
  fruits: {
    label: 'Frutas',
    value: 'fruits',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' },
      { label: 'onzas', value: 'ounces' }
    ]
  },
  nuts_and_seeds: {
    label: 'Frutos Secos y Semillas',
    value: 'nuts_and_seeds',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'onzas', value: 'ounces' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  bakery_and_pastry: {
    label: 'Productos de Panadería y Repostería',
    value: 'bakery_and_pastry',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' },
      { label: 'onzas', value: 'ounces' }
    ]
  },
  eggs_and_derivatives: {
    label: 'Huevos y Derivados',
    value: 'eggs_and_derivatives',
    units: [
      { label: 'piezas', value: 'pieces' },
      { label: 'docenas', value: 'dozens' }
    ]
  },
  oils_and_fats: {
    label: 'Aceites y Grasas',
    value: 'oils_and_fats',
    units: [
      { label: 'mililitros', value: 'milliliters' },
      { label: 'litros', value: 'liters' },
      { label: 'cucharadas', value: 'tablespoons' },
      { label: 'tazas', value: 'cups' },
      { label: 'galones', value: 'gallons' }
    ]
  },
  beverages_non_alcoholic: {
    label: 'Bebidas No Alcohólicas',
    value: 'beverages_non_alcoholic',
    units: [
      { label: 'mililitros', value: 'milliliters' },
      { label: 'litros', value: 'liters' },
      { label: 'tazas', value: 'cups' },
      { label: 'pintas', value: 'pints' },
      { label: 'cuartos', value: 'quarts' },
      { label: 'galones', value: 'gallons' },
      { label: 'centilitros', value: 'centiliters' },
      { label: 'decilitros', value: 'deciliters' }
    ]
  },
  beverages_alcoholic: {
    label: 'Bebidas Alcohólicas',
    value: 'beverages_alcoholic',
    units: [
      { label: 'mililitros', value: 'milliliters' },
      { label: 'litros', value: 'liters' },
      { label: 'tazas', value: 'cups' },
      { label: 'pintas', value: 'pints' },
      { label: 'cuartos', value: 'quarts' },
      { label: 'galones', value: 'gallons' },
      { label: 'jiggers', value: 'jiggers' },
      { label: 'shots', value: 'shots' },
      { label: 'copas de vino', value: 'wine_glasses' }
    ]
  },
  supplements_and_vitamins: {
    label: 'Suplementos y Vitaminas',
    value: 'supplements_and_vitamins',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'miligramos', value: 'milligrams' }
    ]
  },
  desserts_and_sweets: {
    label: 'Postres y Dulces',
    value: 'desserts_and_sweets',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'onzas', value: 'ounces' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  frozen_foods: {
    label: 'Alimentos Congelados',
    value: 'frozen_foods',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' },
      { label: 'onzas', value: 'ounces' }
    ]
  },
  canned_goods: {
    label: 'Enlatados',
    value: 'canned_goods',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'onzas', value: 'ounces' },
      { label: 'libras', value: 'pounds' }
    ]
  },
  ready_to_eat: {
    label: 'Comidas Preparadas',
    value: 'ready_to_eat',
    units: [
      { label: 'gramos', value: 'grams' },
      { label: 'kilogramos', value: 'kilograms' },
      { label: 'libras', value: 'pounds' },
      { label: 'onzas', value: 'ounces' }
    ]
  }
};

