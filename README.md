# 💳 Serviço de Pagamento

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)
![Mocha](https://img.shields.io/badge/Mocha-8D6748?style=for-the-badge\&logo=mocha\&logoColor=white)
![Mochawesome](https://img.shields.io/badge/Mochawesome-FF6B35?style=for-the-badge\&logo=mocha\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)

**Trabalho de Conclusão da Disciplina - Programação para Automação de Testes**

</div>

---

## 📋 Sobre o Projeto

Este projeto implementa uma classe responsável pelo gerenciamento de pagamentos de empresas.

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

## 🧠 Regras de Negócio

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

## 🧪 Cenários de Teste

Os testes foram desenvolvidos utilizando **Mocha** e **Node Assert**.

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

## 🚀 Como Executar

### Pré-requisitos

* Node.js instalado (versão 14 ou superior)

### Instalação

```bash
npm install
```

### Executar os Testes

```bash
npm test
```

---

## 📊 Relatório de Testes

O projeto utiliza o **Mochawesome** para geração de relatórios HTML dos testes.

Após executar:

```bash
npm test
```

um relatório será gerado automaticamente em ambiente local.

O relatório apresenta:

* ✅ Quantidade de testes executados
* ✅ Testes aprovados
* ❌ Testes com falha
* ⏱️ Tempo de execução
* 📋 Detalhamento de cada cenário testado

> Observação: os relatórios gerados não são versionados no repositório.

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia             | Função                        |
| ---------------------- | ----------------------------- |
| JavaScript (ESModules) | Linguagem principal           |
| Node.js                | Ambiente de execução          |
| Mocha                  | Framework de testes unitários |
| Node Assert            | Biblioteca de asserções       |
| Mochawesome            | Relatórios HTML               |

---

## 📚 Conceitos Aplicados

* Programação Orientada a Objetos (POO)
* Encapsulamento com atributos privados
* Tratamento de exceções com `throw new Error()`
* Testes Unitários
* Padrão AAA (Arrange, Act, Assert)
* ESModules (`import` e `export`)
* Relatórios automatizados com Mochawesome

---

## 👩‍💻 Autora

**Juliana Malveira**

---

<div align="center">

*Trabalho desenvolvido para a disciplina Programação para Automação de Testes.*

</div>

