# 💳 Serviço de Pagamento

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge\&logo=mocha\&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-FF6B35?style=for-the-badge\&logo=mocha\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-Automated-blue)
![Tests](https://img.shields.io/badge/Tests-Automated-success)

</div>

Projeto desenvolvido em JavaScript para demonstrar testes automatizados com Mocha e uma pipeline de Integração Contínua utilizando GitHub Actions.

## Principais Funcionalidades

* Cadastro de pagamentos
* Validação de dados obrigatórios
* Classificação automática por categoria
* Consulta do último pagamento realizado
* Testes automatizados com Mocha
* Relatórios de execução em HTML e XML
* Pipeline CI automatizada com GitHub Actions

---

## Regras de Negócio

### Método `pagar`

Recebe os dados de um pagamento:

```javascript
pagar(codigoBarras, empresa, valor)
```

Caso algum dado obrigatório não seja informado:

```javascript
throw new Error('Todos os dados devem ser enviados');
```

### Classificação Automática

| Valor      | Categoria |
| ---------- | --------- |
| > R$100,00 | cara      |
| ≤ R$100,00 | padrão    |

### Método `consultarUltimoPagamento`

Retorna o último pagamento registrado.

---

## Tecnologias

* JavaScript (ES Modules)
* Node.js
* Mocha
* Mochawesome
* Mocha JUnit Reporter
* GitHub Actions
* Git

---

## Estrutura do Projeto

```text
servico-de-pagamento/
├── .github/
│   └── workflows/
│       └── ci.yml
├── src/
│   └── servicoDePagamento.js
├── test/
│   └── servicoDePagamento.test.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

> Os diretórios `mochawesome-report/` e `reports/` são gerados automaticamente durante a execução dos testes e da pipeline.

---

## Executando Localmente

Instalar dependências:

```bash
npm install
```

Executar testes:

```bash
npm test
```

Gerar relatório HTML:

```bash
npm run test:report
```

Gerar relatório XML:

```bash
npm run test:junit
```

---

## Casos de Teste

| #  | Cenário                       | Resultado Esperado                |
| -- | ----------------------------- | --------------------------------- |
| 01 | Salvar pagamento válido       | Pagamento armazenado corretamente |
| 02 | Propriedade obrigatória vazia | Erro lançado                      |
| 03 | Pagamento inválido            | Não deve ser armazenado           |
| 04 | Valor maior que 100           | Categoria "cara"                  |
| 05 | Valor menor ou igual a 100    | Categoria "padrão"                |
| 06 | Consultar último pagamento    | Retorna apenas o último registro  |
| 07 | Consultar sem pagamentos      | Retorna `undefined`               |


---

# 🚀 Pipeline de Integração Contínua (CI)

## Objetivo

Foi implementada uma pipeline de Integração Contínua utilizando GitHub Actions para automatizar a execução dos testes e a geração de relatórios.

A pipeline garante que toda alteração enviada ao repositório seja validada automaticamente, contribuindo para a qualidade e confiabilidade do software.

---

## Workflow

O workflow foi configurado no arquivo:

```text
.github/workflows/ci.yml
```

A pipeline executa as seguintes etapas:

1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências.
4. Execução dos testes automatizados.
5. Geração dos relatórios de testes.
6. Publicação dos relatórios como artefatos.

---

## Formas de Execução

### Execução por Push

A pipeline é executada automaticamente sempre que um commit é enviado para o repositório.

```yaml
on:
  push:
```

### Execução Manual

A pipeline pode ser executada manualmente através do botão **Run workflow** disponível na aba Actions do GitHub.

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

Essa configuração foi utilizada para demonstrar o funcionamento do recurso de agendamento.

---

## Relatórios Gerados

A pipeline gera dois formatos de relatório.

### Mochawesome

Relatório visual em HTML contendo:

* Quantidade de testes executados
* Testes aprovados
* Testes com falha
* Tempo de execução
* Detalhamento dos cenários testados

### JUnit XML

Relatório técnico utilizado por ferramentas de CI/CD para processamento automático dos resultados dos testes.

---

## Publicação dos Relatórios

Os relatórios são armazenados como artefatos da execução utilizando:

```yaml
actions/upload-artifact@v4
```

Artefatos publicados:

* mochawesome-report
* junit-report

---

## Aprendizados

Este projeto foi utilizado para praticar:

* Testes automatizados com Mocha
* Estruturação de casos de teste
* Integração Contínua (CI)
* GitHub Actions
* Geração de relatórios HTML e XML
* Publicação de artefatos
* Automação de validações em pipelines

---

## 👩‍💻 Autora

**Juliana Malveira**
Analista de Testes com foco em Qualidade de Software e Automação de Testes



</div>

