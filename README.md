# 💳 Serviço de Pagamento

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge\&logo=mocha\&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-FF6B35?style=for-the-badge\&logo=mocha\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)

**Trabalho de Conclusão das Disciplinas - Programação para Automação de Testes e Integração Contínua**

</div>

---

## Informações sobre o desafio

Este projeto implementa uma classe com dois métodos: um para realizar pagamento e outro para consultar o último pagamento.

Cada pagamento possui as seguintes propriedades:

* Código de Barras
* Empresa
* Valor
* Categoria

A categoria é definida automaticamente conforme o valor informado:

* Valor maior que R$100,00 → **cara**
* Valor menor ou igual a R$100,00 → **padrão**

Além disso, a classe permite consultar o último pagamento realizado.

---

## Regras de Negócio

### Método `pagar`

Recebe os dados do pagamento:

```javascript
pagar(codigoBarras, empresa, valor)
```

Valida as informações recebidas e registra o pagamento na lista interna.

Caso algum dado obrigatório não seja informado, uma exceção é lançada:

```javascript
throw new Error('Todos os dados devem ser enviados');
```

### Definição da Categoria

```text
Valor > 100     → categoria = "cara"
Valor <= 100    → categoria = "padrão"
```

### Método `consultarUltimoPagamento`

Retorna o último pagamento registrado.

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

## 🗂️ Estrutura do Projeto

```text
servico-de-pagamento/
├── src/
│   └── servicoDePagamento.js
├── test/
│   └── servicoDePagamento.test.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

---

## Pré-requisitos

* Node.js instalado

### Instalação

```bash
npm install
```

---

# 🚀 Pipeline de Integração Contínua (CI)

## Objetivo

Foi implementada uma pipeline de Integração Contínua utilizando GitHub Actions para automatizar a execução dos testes e a geração de relatórios.

A pipeline garante que toda alteração enviada ao repositório seja validada automaticamente, contribuindo para a qualidade e confiabilidade do software.

---

## GitHub Actions

O workflow foi configurado no arquivo:

```text
.github/workflows/ci.yml
```

A pipeline executa as seguintes etapas:

1. Checkout do código-fonte.
2. Configuração do ambiente Node.js.
3. Instalação das dependências do projeto.
4. Execução dos testes automatizados.
5. Geração dos relatórios de testes.
6. Publicação dos relatórios como artefatos da execução.

---

## Formas de Execução

### Execução por Push

A pipeline é executada automaticamente sempre que um commit é enviado para o repositório.

```yaml
on:
  push:
```

### Execução Manual

A pipeline também pode ser executada manualmente através do botão **Run workflow** disponível na aba Actions do GitHub.

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

---

## Relatórios Gerados

A pipeline gera dois tipos de relatório:

### Mochawesome

Relatório visual em formato HTML contendo:

* Quantidade de testes executados;
* Testes aprovados;
* Testes com falha;
* Tempo de execução;
* Detalhamento dos cenários.

### JUnit XML

Relatório técnico utilizado por ferramentas de CI/CD para processamento automático dos resultados dos testes.

---

## Publicação dos Relatórios

Os relatórios gerados são armazenados como artefatos da execução utilizando a action:

```yaml
actions/upload-artifact@v4
```

Artefatos publicados:

* mochawesome-report
* junit-report

---

## 👩‍💻 Desenvolvido por:

**Juliana Malveira**

---

<div align="center">

*Trabalho desenvolvido para as disciplinas Programação para Automação de Testes e Integração Contínua.*

</div>

