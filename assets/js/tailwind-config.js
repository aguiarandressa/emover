/**
 * Configuração visual do Tailwind para a página Nossos Ambientes.
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ec5b13",
        secondary: "#2d9da6",
        "background-light": "#f8f6f6",
        "background-dark": "#221610",
        "accent-soft": "#fff5f0",
      },
      fontFamily: {
        display: ["Public Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
