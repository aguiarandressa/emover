# Melhorias técnicas recomendadas (sem alterar design/funcionalidade)

Este documento lista melhorias de **código, estrutura e práticas** para evoluir o projeto com segurança, sem mudar o visual nem o comportamento atual das páginas.

## Diagnóstico atual

- Estrutura multipágina está correta para evolução incremental (`index`, `ambientes`, `especialidades`, etc.).
- Tema Tailwind agora está organizado por base + variações por página, reduzindo duplicação e mantendo consistência.
- Há scripts com dados globais (`tabsData`) que funcionam, mas podem ganhar tipagem/validação leve.
- Não há padronização automatizada de formatação e lint.

## Melhorias priorizadas

### 1) Padronização de formatação (alto impacto, baixo risco)

**Objetivo:** reduzir divergência de estilo e facilitar manutenção em equipe.

Implementado neste projeto:

- `.editorconfig`
- `prettier` com scripts no `package.json`

Comandos:

```bash
npm install
npm run format:check
npm run format
```

### 2) Padronização de HTML (alto impacto, baixo risco)

**Objetivo:** evitar erros estruturais (tags, atributos, acessibilidade básica).

Implementado neste projeto:

- `htmlhint` com script `npm run lint:html` (validador local)

### 3) Organização de tema Tailwind por página (médio impacto, baixo risco)

**Status: executado nesta etapa.**

- base compartilhada em `assets/js/tailwind-base.js`;
- variações por página em `assets/js/tailwind-config.home.js` e `assets/js/tailwind-config.ambientes.js`;
- arquivo `assets/js/tailwind-config.js` mantido por compatibilidade.

### 4) Acessibilidade técnica incremental (médio impacto, baixo risco)

Sem alterar design:

- revisar `aria-label` em botões somente-ícone;
- garantir ordem de headings (`h1 -> h2 -> h3`);
- validar contraste automaticamente com ferramenta dedicada (`python tools/check_contrast.py`).

### 5) Qualidade de JavaScript (médio impacto, baixo risco)

- adicionar ESLint para JS de `assets/js` (executado nesta etapa);
- manter comportamento atual, mas com regras de consistência e segurança (sem mudar UX).
- configuração em `eslint.config.mjs` e script `npm run lint:js`.

## Roadmap sugerido (2 semanas)

### Semana 1

- Aplicar lint/format em todo o projeto.
- Corrigir avisos de HTMLHint sem mudar interface.

### Semana 2

- Adicionar ESLint para `assets/js`.
- Consolidar configs Tailwind por contexto (compartilhado + variações).

## Critério de aceitação (sem regressão visual)

- Mesmas páginas e navegação.
- Mesma aparência visual.
- Mesmos fluxos de interação (abas, links, botões).
- Repositório com validação automática (`lint` e `format:check`).
