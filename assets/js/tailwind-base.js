/**
 * Base de configuração do Tailwind para o projeto.
 * Não aplica tema sozinho; as variantes por página complementam esta base.
 */
window.buildTailwindConfig = function buildTailwindConfig(pageExtend = {}) {
  const baseExtend = {
    fontFamily: {
      display: ['Public Sans', 'sans-serif'],
    },
  };

  return {
    darkMode: 'class',
    theme: {
      extend: {
        ...baseExtend,
        ...pageExtend,
        colors: {
          ...(baseExtend.colors || {}),
          ...(pageExtend.colors || {}),
        },
        fontFamily: {
          ...(baseExtend.fontFamily || {}),
          ...(pageExtend.fontFamily || {}),
        },
        borderRadius: {
          ...(baseExtend.borderRadius || {}),
          ...(pageExtend.borderRadius || {}),
        },
      },
    },
  };
};
