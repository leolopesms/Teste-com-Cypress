# Automação Web com Cypress – SauceDemo

Projeto de testes end-to-end usando [Cypress](https://www.cypress.io/) no site de demonstração **SauceDemo**: https://www.saucedemo.com/

> **Objetivo:** validar fluxos essenciais de Login, Produtos, Carrinho e Checkout, com organização simples e comandos prontos para rodar localmente ou no CI.

---

## Sumário
- [Pré-requisitos](#pré-requisitos)
- [Instalação e execução](#instalação-e-execução)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Cenários automatizados](#cenários-automatizados)
  - [Login](#login)
  - [Produtos](#produtos)
  - [Carrinho](#carrinho)
  - [Checkout](#checkout)
- [Boas práticas usadas](#boas-práticas-usadas)
- [Dados de teste](#dados-de-teste)
- [Checklist de entrega](#checklist-de-entrega)
- [Notas](#notas)
  
---

## Pré-requisitos
- **Node.js** 16+ (recomendado 18 LTS ou superior)
- **npm** 8+ (ou **pnpm**/**yarn**, se preferir)

Verifique versões:
```bash
node -v
npm -v
```

## Instalação e execução
1. **Instale dependências**:
   ```bash
   npm install
   ```
2. **Abra a UI do Cypress** (modo interativo):
   ```bash
   npx cypress open
   ```

## Estrutura do projeto
Estrutura simples, organizada por funcionalidades:

```
QA_TEST_CYPRESS/
  cypress/
    e2e/
      login.cy.js
      products.cy.js
      cart.cy.js
      checkout.cy.js
    fixtures/
      example.json
    support/
      commands.js
      e2e.js
  cypress.config.js
  package.json
README.md
```

## Cenários automatizados
Abaixo, os cenários essenciais cobertos pelos testes.

### Login
- [ ] **Credenciais válidas** → redireciona para a página de produtos
- [ ] **Senha inválida** → exibe mensagem de erro
- [ ] **Usuário bloqueado** → exibe mensagem "user has been locked out"
- [ ] **Campos vazios** → impede login e exibe alerta

### Produtos
- [ ] **Exibição da lista** → todos os produtos aparecem após o login
- [ ] **Ordenação A → Z** → ordem alfabética crescente
- [ ] **Ordenação Z → A** → ordem alfabética decrescente

### Carrinho
- [ ] **Adicionar 1 produto** → contador do carrinho = 1
- [ ] **Adicionar 2 produtos** → contador do carrinho = 2
- [ ] **Remover produto** → carrinho atualiza corretamente
- [ ] **Visualizar carrinho** → itens adicionados são exibidos

### Checkout
- [ ] **Preencher dados válidos** → avança para página de revisão
- [ ] **Campos vazios** → exibe aviso de preenchimento obrigatório
- [ ] **Finalizar compra** → mensagem "Thank you for your order!"
- [ ] **Cancelar checkout** → retorna para lista de produtos

## Boas práticas usadas
- **Asserts claros**: `should`, `contain`, etc.
- **`beforeEach`** para login/estado comum entre testes.
- **Dados em variáveis/fixtures** (usuário, senha, nomes de itens).
- **Isolamento de testes**: cada caso prepara seu próprio estado.

## Dados de teste
Credenciais padrão do SauceDemo (públicas no site):
- **Usuário válido:** `standard_user` / `secret_sauce`
- **Usuário bloqueado:** `locked_out_user` / `secret_sauce`

## Checklist de entrega
- [ ] Testes cobrindo **Login / Produtos / Carrinho / Checkout**
- [ ] `beforeEach` configurado quando apropriado
- [ ] Asserts claros e descritivos
- [ ] Dados parametrizados (variáveis/fixtures/env)
- [ ] Instruções de execução no README
- [ ] Organização de arquivos conforme estrutura proposta

## Notas
Este repositório foi desenvolvido como **atividade avaliativa individual (3 pts)** de Automação Web com Cypress.
Entrega prevista em **projeto no GitHub** (ou **arquivo zipado**), cobrindo os cenários listados acima.
