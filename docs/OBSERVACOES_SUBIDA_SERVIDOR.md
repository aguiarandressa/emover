# Observações e correções ao subir para servidor

Este guia ajuda a identificar problemas comuns depois do upload e como corrigir rapidamente.

## 1) Página abre sem estilo (layout "quebrado")

### Possíveis causas

- Arquivos de `assets/` não foram enviados.
- Caminhos relativos foram alterados no servidor.
- CDN do Tailwind/Google Fonts bloqueado por firewall/proxy.

### Como verificar

- Abra o DevTools (F12) > aba **Network** e confira se há erros 404.
- Teste as URLs dos arquivos:
  - `/assets/css/styles.css`
  - `/assets/js/tailwind-base.js`
  - `/assets/js/tailwind-config.home.js` ou `/assets/js/tailwind-config.ambientes.js`

### Correção

- Reenviar pasta `assets/` completa.
- Manter estrutura de pastas igual ao projeto local.
- Se CDN bloqueado, considerar versão local dos arquivos (etapa futura).

## 2) Erro de JavaScript no console

### Possíveis causas

- Ordem incorreta dos scripts Tailwind (base/variante).
- `tabs-data.js` não carregou antes de `tabs-ui.js`.

### Como verificar

- Console do navegador com mensagem `ReferenceError` ou `undefined`.

### Correção

- Em `ambientes.html`, manter ordem:
  1. `tailwind-base.js`
  2. `tailwind-config.ambientes.js`
  3. `tabs-data.js`
  4. `tabs-ui.js`

## 3) Página inicial abre, mas links internos retornam 404

### Possíveis causas

- Nome do arquivo diferente no servidor (maiúsculas/minúsculas).
- Upload parcial de páginas.

### Correção

- Conferir exatamente estes arquivos na raiz:
  - `index.html`
  - `ambientes.html`
  - `especialidades.html`
  - `terapia-adultos-adolescentes.html`
  - `equipe.html`
  - `sobre.html`
  - `contato.html`

## 4) Imagens externas não carregam

### Possíveis causas

- Bloqueio de domínio externo no servidor/rede.
- Política de segurança (CSP) muito restrita.

### Correção

- Liberar domínios usados no HTML (Googleusercontent/Google Fonts).
- Se necessário, migrar imagens para hospedagem própria.

## 5) "npm run lint:html" não funciona no servidor

### Causa

- Dependências de desenvolvimento não instaladas (`htmlhint`).

### Correção

- Rodar localmente no projeto:

```bash
npm install
npm run lint:html
```

> Em ambiente com bloqueio de rede, a instalação pode falhar com 403. Nesse caso, execute no seu computador com acesso ao registry npm.

## Checklist rápido antes de publicar

- [ ] Todas as páginas HTML foram enviadas.
- [ ] Pasta `assets/` completa enviada.
- [ ] Console sem erros críticos de JS.
- [ ] Navegação interna funcionando.
- [ ] CSS e fontes carregando.

## 6) Contraste visual e acessibilidade (WCAG)

Foi incluída uma verificação automática em:

```bash
python tools/check_contrast.py
```

### Resultado atual esperado

Algumas combinações de cor podem ficar abaixo de 4.5:1 (texto normal), por exemplo:

- texto branco em botão `primary`;
- texto `secondary` sobre fundo branco.

### Como corrigir sem quebrar layout

- ajustar apenas tonalidade das cores (mesmos componentes/tamanhos/estrutura);
- ou aplicar contraste maior somente em estados de texto pequeno.

> Observação: neste momento não alteramos design automaticamente; o script serve para orientar a correção com segurança.
