/**
 * Tema padrão das páginas internas (ambientes, especialidades, contato, etc.).
 */
tailwind.config = window.buildTailwindConfig({
  colors: {
    primary: '#ec5b13',
    secondary: '#2d9da6',
    'background-light': '#f8f6f6',
    'background-dark': '#221610',
    'accent-soft': '#fff5f0',
  },
  borderRadius: {
    DEFAULT: '0.25rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
});
