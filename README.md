# Espaço Emover - Estrutura Multipágina

Projeto convertido para modelo multipágina, evitando sobrescrita de layouts anteriores.

## Páginas disponíveis

- `index.html` (home completa de serviços)
- `ambientes.html` (layout completo de Nossos Ambientes)
- `especialidades.html` (índice de especialidades)
- `terapia-adultos-adolescentes.html` (página de terapia para adultos e adolescentes)
- `equipe.html` (placeholder)
- `sobre.html` (placeholder)
- `contato.html` (placeholder)

## Assets compartilhados

- `assets/css/styles.css`
- `assets/js/tailwind-base.js` (base comum do tema)
- `assets/js/tailwind-config.home.js` (variação da home)
- `assets/js/tailwind-config.ambientes.js` (variação das páginas internas)
- `assets/js/tailwind-config.js` (compatibilidade)
- `assets/js/tabs-data.js` (usado em `ambientes.html`)
- `assets/js/tabs-ui.js` (usado em `ambientes.html`)

## Como evoluir

Envie o próximo código e diga em qual página aplicar. Exemplo:

- “aplicar na `especialidades.html`”
- “aplicar na `contato.html`”

## Qualidade de código

- Guia de melhorias técnicas e roadmap em `docs/MELHORIAS_TECNICAS.md`.
- Padronização local com `.editorconfig`, `prettier` e `htmlhint` via `package.json`.

- Regras de lint HTML centralizadas em `.htmlhintrc` (estrutura e acessibilidade básica).

## Observações de subida no servidor

- Checklist e troubleshooting em `docs/OBSERVACOES_SUBIDA_SERVIDOR.md`.

- Validação automática de contraste com `python tools/check_contrast.py`.

- ESLint para JS de `assets/js` com configuração em `eslint.config.mjs` (`npm run lint:js`).

- Se o `htmlhint` estiver instalado, use também `npm run lint:htmlhint`.
