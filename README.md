# Testes E2E - Kanban

Este repositório contém **testes automatizados end-to-end** utilizando [Cypress](https://www.cypress.io/) para validar as funcionalidades principais do site:

🔗 **https://kanban-dusky-five.vercel.app/**

O objetivo é verificar o funcionamento correto de fluxos essenciais do quadro Kanban, como criação, movimentação e exclusão de tarefas, além da adição de tags.


---

##  Funcionalidades Testadas

- ✅ **Adicionar um novo card** em uma coluna
- ✅ **Mover um card** entre colunas
- ✅ **Adicionar tag** a um car

---
##  Estrutura do Projeto

kanban-tests/
├── cypress/
│ ├── e2e/
│ │ └── kanban.cy.js # Arquivo principal com os testes
│ ├── fixtures/
│ │ └── testData.json # Dados estáticos para os testes
│ ├── support/
│ │ ├── commands.js # Comandos customizados (futuro)
│ │ └── e2e.js # Configuração global do Cypress
├── cypress.config.js # Configuração do Cypress
├── package.json # Dependências e scripts
├── README.md # Documentação do projeto

##  Pré-requisitos

Antes de rodar os testes, você precisa ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) (vem junto com o Node.js)

---

##  Instalação

Clone o repositório e instale as dependências:

git clone https:(https://github.com/Joaok25/Teste-Vaga-Tester-)

cd kanban-tests

npm install


## Executar Testes

npm run cy:open

## Tecnologias Utilizadas
Cypress → framework de testes E2E

JavaScript → linguagem dos testes

Node.js & npm → gerenciamento de pacotes
