# 💳 Serviço de Pagamento

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![C8](https://img.shields.io/badge/Coverage-C8-yellow?style=for-the-badge)
![Mochawesome](https://img.shields.io/badge/Mochawesome-FF6B35?style=for-the-badge)
![JUnit Report](https://img.shields.io/badge/JUnit-Reporter-orange?style=for-the-badge)

</div>

---

## 📌 Visão Geral

Projeto em JavaScript que implementa um serviço de pagamentos com regras de negócio, integrado com testes automatizados, cobertura de testes e uma pipeline de Integração Contínua (CI) no GitHub Actions.

O fluxo completo valida código, executa testes, gera relatórios (HTML e XML) e mede cobertura automaticamente a cada alteração no repositório.

---

## ✨ Funcionalidades

- 💰 Cadastro de pagamentos
- ✅ Validação de dados obrigatórios
- 🏷️ Classificação automática por categoria
- 🔎 Consulta do último pagamento realizado
- 🧪 Testes automatizados com Mocha
- 📊 Geração de relatórios (HTML e XML)
- 📈 Cobertura de testes com C8
- 🚀 Pipeline CI automatizada com GitHub Actions

---

## 📋 Regras de Negócio

### Método `pagar`

Recebe os dados de um pagamento:

```javascript
pagar(codigoBarras, empresa, valor)
```

Valida os dados recebidos e registra o pagamento.

Caso algum dado obrigatório não seja informado:

```javascript
throw new Error('Todos os dados devem ser enviados');
```

### 🏷️ Classificação automática

| Valor | Categoria |
| ----- | --------- |
| > 100 | cara      |
| ≤ 100 | padrão    |


### 🔎 Método `consultarUltimoPagamento`

Retorna o último pagamento registrado.

---

## 🛠️ Tecnologias
- JavaScript (ES Modules)
- Node.js
- Mocha
- C8 (Coverage)
- Mochawesome
- Mocha JUnit Reporter
- GitHub Actions
- Git

## 📁 Estrutura do Projeto

```text
servico-de-pagamento/
├── .github/workflows/ci.yml
├── src/servicoDePagamento.js
├── test/servicoDePagamento.test.js
├── coverage/
├── mochawesome-report/
├── reports/
├── package.json
└── README.md
```

## ▶️ Execução Local

### 📦 Instalar dependências
npm install

### 🧪 Executar testes
npm test

### 📈 Executar cobertura de testes
npm run coverage 


## 📊 Cobertura de Testes

Ferramenta utilizada: C8

Execução:
npm run coverage

Métricas
Statements
Branches
Functions
Lines

Relatório gerado:
coverage/

## 🧪 Casos de Teste

| # | Cenário | Resultado Esperado |
|---|----------|-------------------|
| 01 | Salvar pagamento válido | Pagamento armazenado corretamente |
| 02 | Campo obrigatório não informado | Erro lançado |
| 03 | Pagamento inválido | Não deve ser armazenado |
| 04 | Valor maior que 100 | Categoria "cara" |
| 05 | Valor menor ou igual a 100 | Categoria "padrão" |
| 06 | Consultar último pagamento | Retorna apenas o último registro |
| 07 | Consultar sem pagamentos | Retorna `undefined` |


## 🚀 Pipeline de Integração Contínua (CI)

### 🔗 Evidências de execução

Você pode visualizar as execuções da pipeline aqui:  
https://github.com/JulianaMalveira/Servico-de-Pagamento/actions


### 🎯 Objetivo
Automatizar validação de código, execução de testes e geração de relatórios.

## 🔄 Fluxo da Pipeline

Execução sequencial da pipeline:

1. Checkout do código-fonte
2. Instalação de dependências
3. Execução do ESLint (qualidade de código)
4. Execução da cobertura de testes (C8)
5. Execução dos testes automatizados (Mocha)
6. Geração de relatórios (Mochawesome + JUnit)
7. Upload de artefatos para o GitHub Actions

---

## 🔄 Formas de Execução

### Execução por Push

A pipeline é executada automaticamente sempre que um commit é enviado para o repositório.

```yaml
on:
  push:
```

### Execução Manual

A pipeline pode ser executada manualmente através do botão **Run workflow** disponível na aba **Actions** do GitHub.

```yaml
on:
  workflow_dispatch:
```

### Execução Agendada

Foi configurada uma execução automática utilizando agendamento (schedule).

```yaml
schedule:
  - cron: "*/5 * * * *"
```

> Essa configuração foi utilizada para demonstrar o funcionamento do recurso de agendamento exigido pela atividade.

---

## 📑 Relatórios de Testes

### 📊 Mochawesome (HTML)
Relatório visual detalhado da execução dos testes com interface amigável.

Arquivo gerado:
mochawesome-report/mochawesome.html

---

### 📄 JUnit (XML)
Relatório técnico utilizado por ferramentas de CI/CD para leitura automática dos resultados dos testes.

Arquivo gerado:
reports/test-results.xml

---

## 📦 Artefatos gerados
coverage/
mochawesome-report/
reports/

---

## 🎯 Aprendizados

- 🧪 Testes automatizados com Mocha  
- 🚀 Integração Contínua com GitHub Actions  
- 📊 Cobertura de testes com C8  
- 📑 Geração de relatórios HTML e XML  
- 🧱 Boas práticas de qualidade de software  
- ⚙️ Automação de pipelines CI/CD  

---

## 👩‍💻 Autora

```
Juliana Malveira
Analista de Testes com foco em Qualidade de Software e Automação de Testes
```