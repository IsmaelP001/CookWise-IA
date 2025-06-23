import gluestackPlugin from '@gluestack-ui/nativewind-utils/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["app/**/*.{tsx,jsx,ts,js}", "components/**/*.{tsx,jsx,ts,js}"],
  presets: [require('nativewind/preset')],
  safelist: [
    {
      pattern:
        /(bg|border|text|stroke|fill)-(primary|secondary|tertiary|error|success|warning|info|typography|outline|background|indicator)-(0|50|100|200|300|400|500|600|700|800|900|950|white|gray|black|error|warning|muted|success|info|light|dark|primary)/,
    },
  ],
// Paleta de colores para app de recetas y despensa
// Inspirada en alimentos frescos y vibrantes

theme: {
  extend: {
    colors: {
      // NARANJA MANDARINA - Color primario (energético, apetitoso)
      primary: {
        0: 'rgb(255 251 235 / <alpha-value>)',     // Crema muy suave
        50: 'rgb(255 247 217 / <alpha-value>)',    // Crema mandarina
        100: 'rgb(254 235 162 / <alpha-value>)',   // Naranja muy suave
        200: 'rgb(253 186 116 / <alpha-value>)',   // Naranja suave
        300: 'rgb(251 146 60 / <alpha-value>)',    // Naranja medio
        400: 'rgb(249 115 22 / <alpha-value>)',    // Naranja vibrante
        500: 'rgb(234 88 12 / <alpha-value>)',     // Naranja mandarina principal
        600: 'rgb(194 65 12 / <alpha-value>)',     // Naranja oscuro
        700: 'rgb(154 52 18 / <alpha-value>)',     // Naranja muy oscuro
        800: 'rgb(124 45 18 / <alpha-value>)',     // Marrón naranja
        900: 'rgb(103 41 20 / <alpha-value>)',     // Marrón oscuro
        950: 'rgb(67 20 7 / <alpha-value>)',       // Chocolate oscuro
      },
      
      // VERDE AGUACATE - Color secundario (fresco, natural)
      secondary: {
        0: 'rgb(240 253 244 / <alpha-value>)',     // Verde muy claro
        50: 'rgb(220 252 231 / <alpha-value>)',    // Verde menta
        100: 'rgb(187 247 208 / <alpha-value>)',   // Verde suave
        200: 'rgb(134 239 172 / <alpha-value>)',   // Verde claro
        300: 'rgb(74 222 128 / <alpha-value>)',    // Verde medio
        400: 'rgb(34 197 94 / <alpha-value>)',     // Verde vibrante
        500: 'rgb(22 163 74 / <alpha-value>)',     // Verde aguacate principal
        600: 'rgb(21 128 61 / <alpha-value>)',     // Verde oscuro
        700: 'rgb(22 101 52 / <alpha-value>)',     // Verde bosque
        800: 'rgb(22 78 42 / <alpha-value>)',      // Verde muy oscuro
        900: 'rgb(20 83 45 / <alpha-value>)',      // Verde profundo
        950: 'rgb(5 46 22 / <alpha-value>)',       // Verde casi negro
      },
      
      // AMARILLO LIMÓN - Color terciario (alegre, cítrico)
      tertiary: {
        50: 'rgb(254 252 232 / <alpha-value>)',    // Amarillo muy claro
        100: 'rgb(254 249 195 / <alpha-value>)',   // Amarillo crema
        200: 'rgb(254 240 138 / <alpha-value>)',   // Amarillo suave
        300: 'rgb(253 224 71 / <alpha-value>)',    // Amarillo medio
        400: 'rgb(250 204 21 / <alpha-value>)',    // Amarillo vibrante
        500: 'rgb(234 179 8 / <alpha-value>)',     // Amarillo limón principal
        600: 'rgb(202 138 4 / <alpha-value>)',     // Amarillo dorado
        700: 'rgb(161 98 7 / <alpha-value>)',      // Dorado oscuro
        800: 'rgb(133 77 14 / <alpha-value>)',     // Mostaza
        900: 'rgb(113 63 18 / <alpha-value>)',     // Mostaza oscura
        950: 'rgb(66 32 6 / <alpha-value>)',       // Marrón mostaza
      },
      
      // ROJO TOMATE - Para errores (urgente pero relacionado con comida)
      error: {
        0: 'rgb(254 242 242 / <alpha-value>)',     // Rosa muy claro
        50: 'rgb(254 226 226 / <alpha-value>)',    // Rosa claro
        100: 'rgb(254 202 202 / <alpha-value>)',   // Rosa medio
        200: 'rgb(252 165 165 / <alpha-value>)',   // Rosa coral
        300: 'rgb(248 113 113 / <alpha-value>)',   // Rojo suave
        400: 'rgb(239 68 68 / <alpha-value>)',     // Rojo medio
        500: 'rgb(220 38 38 / <alpha-value>)',     // Rojo tomate principal
        600: 'rgb(185 28 28 / <alpha-value>)',     // Rojo oscuro
        700: 'rgb(153 27 27 / <alpha-value>)',     // Rojo muy oscuro
        800: 'rgb(127 29 29 / <alpha-value>)',     // Rojo profundo
        900: 'rgb(127 29 29 / <alpha-value>)',     // Rojo intenso
        950: 'rgb(69 10 10 / <alpha-value>)',      // Rojo casi negro
      },
      
      // VERDE BRÓCOLI - Para éxito (fresco, saludable)
      success: {
        0: 'rgb(236 253 245 / <alpha-value>)',     // Verde muy claro
        50: 'rgb(209 250 229 / <alpha-value>)',    // Verde menta
        100: 'rgb(167 243 208 / <alpha-value>)',   // Verde claro
        200: 'rgb(110 231 183 / <alpha-value>)',   // Verde medio
        300: 'rgb(52 211 153 / <alpha-value>)',    // Verde esmeralda
        400: 'rgb(16 185 129 / <alpha-value>)',    // Verde vibrante
        500: 'rgb(5 150 105 / <alpha-value>)',     // Verde brócoli principal
        600: 'rgb(4 120 87 / <alpha-value>)',      // Verde oscuro
        700: 'rgb(6 95 70 / <alpha-value>)',       // Verde bosque
        800: 'rgb(6 78 59 / <alpha-value>)',       // Verde profundo
        900: 'rgb(6 78 59 / <alpha-value>)',       // Verde intenso
        950: 'rgb(2 44 34 / <alpha-value>)',       // Verde casi negro
      },
      
      // NARANJA ZANAHORIA - Para advertencias (llamativo pero cálido)
      warning: {
        0: 'rgb(255 251 235 / <alpha-value>)',     // Crema muy claro
        50: 'rgb(254 243 199 / <alpha-value>)',    // Crema naranja
        100: 'rgb(253 230 138 / <alpha-value>)',   // Amarillo naranja claro
        200: 'rgb(252 211 77 / <alpha-value>)',    // Amarillo naranja
        300: 'rgb(251 191 36 / <alpha-value>)',    // Naranja dorado
        400: 'rgb(245 158 11 / <alpha-value>)',    // Naranja medio
        500: 'rgb(217 119 6 / <alpha-value>)',     // Naranja zanahoria principal
        600: 'rgb(180 83 9 / <alpha-value>)',      // Naranja oscuro
        700: 'rgb(146 64 14 / <alpha-value>)',     // Naranja profundo
        800: 'rgb(120 53 15 / <alpha-value>)',     // Marrón naranja
        900: 'rgb(102 44 15 / <alpha-value>)',     // Marrón oscuro
        950: 'rgb(54 21 6 / <alpha-value>)',       // Chocolate
      },
      
      // AZUL ARÁNDANO - Para información (fresco, confiable)
      info: {
        0: 'rgb(239 246 255 / <alpha-value>)',     // Azul muy claro
        50: 'rgb(219 234 254 / <alpha-value>)',    // Azul claro
        100: 'rgb(191 219 254 / <alpha-value>)',   // Azul suave
        200: 'rgb(147 197 253 / <alpha-value>)',   // Azul medio claro
        300: 'rgb(96 165 250 / <alpha-value>)',    // Azul medio
        400: 'rgb(59 130 246 / <alpha-value>)',    // Azul vibrante
        500: 'rgb(37 99 235 / <alpha-value>)',     // Azul arándano principal
        600: 'rgb(29 78 216 / <alpha-value>)',     // Azul oscuro
        700: 'rgb(29 65 182 / <alpha-value>)',     // Azul profundo
        800: 'rgb(30 58 138 / <alpha-value>)',     // Azul muy oscuro
        900: 'rgb(30 58 138 / <alpha-value>)',     // Azul intenso
        950: 'rgb(23 37 84 / <alpha-value>)',      // Azul casi negro
      },
      
      // GRIS CARBÓN - Para tipografía (neutral, legible)
      typography: {
        0: 'rgb(255 255 255 / <alpha-value>)',     // Blanco puro
        50: 'rgb(250 250 250 / <alpha-value>)',    // Blanco roto
        100: 'rgb(245 245 245 / <alpha-value>)',   // Gris muy claro
        200: 'rgb(229 229 229 / <alpha-value>)',   // Gris claro
        300: 'rgb(212 212 212 / <alpha-value>)',   // Gris medio claro
        400: 'rgb(163 163 163 / <alpha-value>)',   // Gris medio
        500: 'rgb(115 115 115 / <alpha-value>)',   // Gris principal
        600: 'rgb(82 82 82 / <alpha-value>)',      // Gris oscuro
        700: 'rgb(64 64 64 / <alpha-value>)',      // Gris muy oscuro
        800: 'rgb(38 38 38 / <alpha-value>)',      // Carbón
        900: 'rgb(23 23 23 / <alpha-value>)',      // Carbón oscuro
        950: 'rgb(10 10 10 / <alpha-value>)',      // Negro carbón
        white: '#FFFFFF',
        gray: '#D4D4D4',
        black: '#171717',
      },
      
      // GRIS PIEDRA - Para bordes y contornos
      outline: {
        0: 'rgb(250 250 250 / <alpha-value>)',     // Casi blanco
        50: 'rgb(248 250 252 / <alpha-value>)',    // Gris muy claro
        100: 'rgb(241 245 249 / <alpha-value>)',   // Gris claro
        200: 'rgb(226 232 240 / <alpha-value>)',   // Gris medio claro
        300: 'rgb(203 213 225 / <alpha-value>)',   // Gris medio
        400: 'rgb(148 163 184 / <alpha-value>)',   // Gris
        500: 'rgb(100 116 139 / <alpha-value>)',   // Gris piedra principal
        600: 'rgb(71 85 105 / <alpha-value>)',     // Gris oscuro
        700: 'rgb(51 65 85 / <alpha-value>)',      // Gris muy oscuro
        800: 'rgb(30 41 59 / <alpha-value>)',      // Pizarra
        900: 'rgb(15 23 42 / <alpha-value>)',      // Pizarra oscura
        950: 'rgb(2 6 23 / <alpha-value>)',        // Casi negro
      },
      
      // CREMAS Y NEUTROS - Para fondos
      background: {
        0: 'rgb(255 255 255 / <alpha-value>)',     // Blanco puro
        50: 'rgb(254 252 248 / <alpha-value>)',    // Crema muy claro
        100: 'rgb(253 248 240 / <alpha-value>)',   // Crema claro
        200: 'rgb(251 241 229 / <alpha-value>)',   // Crema medio
        300: 'rgb(247 230 208 / <alpha-value>)',   // Beige claro
        400: 'rgb(240 210 179 / <alpha-value>)',   // Beige medio
        500: 'rgb(231 186 143 / <alpha-value>)',   // Beige principal
        600: 'rgb(217 155 103 / <alpha-value>)',   // Beige oscuro
        700: 'rgb(180 118 74 / <alpha-value>)',    // Canela
        800: 'rgb(146 90 56 / <alpha-value>)',     // Canela oscura
        900: 'rgb(120 75 48 / <alpha-value>)',     // Marrón canela
        950: 'rgb(69 39 25 / <alpha-value>)',      // Chocolate oscuro
        
        // Fondos especiales
        error: 'rgb(254 242 242 / <alpha-value>)',     // Fondo error suave
        warning: 'rgb(255 251 235 / <alpha-value>)',   // Fondo warning suave
        muted: 'rgb(248 250 252 / <alpha-value>)',     // Fondo silenciado
        success: 'rgb(236 253 245 / <alpha-value>)',   // Fondo éxito suave
        info: 'rgb(239 246 255 / <alpha-value>)',      // Fondo info suave
        
        light: '#FEFCF8',  // Crema muy claro para modo claro
        dark: '#1A1611',   // Chocolate muy oscuro para modo oscuro
      },
      
      // INDICADORES ESPECIALES
      indicator: {
        primary: 'rgb(234 88 12 / <alpha-value>)',     // Naranja mandarina
        info: 'rgb(37 99 235 / <alpha-value>)',        // Azul arándano
        error: 'rgb(220 38 38 / <alpha-value>)',       // Rojo tomate
      },
    },
    
    // Resto de tu configuración...
    fontFamily: {
      heading: undefined,
      body: undefined,
      mono: undefined,
      roboto: ['Roboto', 'sans-serif'],
    },
    fontWeight: {
      extrablack: '950',
    },
    fontSize: {
      '2xs': '10px',
    },
    boxShadow: {
      'hard-1': '-2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
      'hard-2': '0px 3px 10px 0px rgba(38, 38, 38, 0.20)',
      'hard-3': '2px 2px 8px 0px rgba(38, 38, 38, 0.20)',
      'hard-4': '0px -3px 10px 0px rgba(38, 38, 38, 0.20)',
      'hard-5': '0px 2px 10px 0px rgba(38, 38, 38, 0.10)',
      'soft-1': '0px 0px 10px rgba(38, 38, 38, 0.1)',
      'soft-2': '0px 0px 20px rgba(38, 38, 38, 0.2)',
      'soft-3': '0px 0px 30px rgba(38, 38, 38, 0.1)',
      'soft-4': '0px 0px 40px rgba(38, 38, 38, 0.1)',
    },
  },
},
  plugins: [gluestackPlugin],
};
