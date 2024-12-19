# <p align="center"> Validador de Bandeira de Cartão de Crédito </p>


## Descrição do Projeto

Este projeto tem como objetivo desenvolver uma função de validação de bandeiras de cartões de crédito com base no número do cartão fornecido pelo usuário. A partir do número inserido, o sistema identifica e retorna a bandeira correspondente, como **Visa**, **Mastercard**, **Elo**, ou **Hypercard**. O algoritmo implementado pode ser integrado a sistemas de pagamento e e-commerce, facilitando a personalização de ofertas e processos conforme a bandeira do cartão.

## Funcionalidades

- **Identificação de Bandeira de Cartão**: Valida qual a bandeira de um cartão a partir do número fornecido.
- **Apoio a E-commerce**: Ajuda a personalizar ofertas e bônus baseados na bandeira do cartão (exemplo: cashback, pontos bônus).
- **Fácil Integração**: O algoritmo pode ser facilmente integrado a outros sistemas que lidam com pagamentos ou checkout.

## Testes

O sistema foi testado utilizando um conjunto de números de cartão de crédito com as bandeiras **Visa**, **Mastercard**, **Elo**, e **Hypercard**. A validação foi realizada verificando os prefixos dos números dos cartões e o resultado foi verificado em tempo real.

### Exemplo de Teste:

1. Cartão Visa: `4111111111111111` - Resultado esperado: **Visa**
2. Cartão Mastercard: `5105105105105100` - Resultado esperado: **Mastercard**
3. Cartão Elo: `4011789012345678` - Resultado esperado: **Elo**
4. Cartão Hypercard: `6062112345678901` - Resultado esperado: **Hypercard**

## Resultado dos Testes

- O sistema validou corretamente todos os números de cartão de acordo com suas bandeiras.
- A função identificou e retornou a bandeira esperada para cada cartão.


## ⌨️ Prompts GitHub Copilot ⌨️

Aqui estão alguns **prompts úteis** para ajudar você a aproveitar o GitHub Copilot ao máximo durante o desenvolvimento deste projeto:

### 1. Exploração de Funcionalidades
- **Prompt**: "Use o GitHub Copilot para sugerir funções que validam bandeiras de cartão. Tente digitar 'função para validar número de cartão' e veja as sugestões!"

### 2. Refatoração de Código
- **Prompt**: "Digite 'refatorar função de validação de bandeira de cartão' para que o GitHub Copilot sugira uma versão mais otimizada."

### 3. Criar Funções Específicas
- **Prompt**: "Tarefa: Use o GitHub Copilot para criar uma função que receba o número de um cartão de crédito e retorne a bandeira. Comece com 'function detectarBandeira(cartao)'!"

### 4. Documentação Automática
- **Prompt**: "Digite 'comentar código que verifica a bandeira do cartão' e veja como o GitHub Copilot pode sugerir explicações para o código da função."

### 5. Escrever Testes
- **Prompt**: "Use o GitHub Copilot para criar testes unitários para a função de identificar bandeira de cartão. Digite 'testar função identificarBandeira para números de cartão Visa, Mastercard e Hypercard'."

### 6. Melhorias no Código
- **Prompt**: "Tente otimizar a função que valida a bandeira do cartão. Digite 'otimizar função de identificação de bandeira' e veja se o GitHub Copilot sugere uma abordagem mais eficiente."

### 7. Automatização do Processo
- **Prompt**: "Explore o uso de GitHub Copilot para automatizar o processo de validação de bandeira de cartão no seu projeto. Digite 'automatizar validação de bandeira ao inserir número do cartão'."

### 8. Exemplos de Código
- **Prompt**: "Digite 'exemplo de código para validar bandeira de cartão Visa, Mastercard ou Hypercard' e veja como o GitHub Copilot pode gerar um exemplo para você!"

## Tecnologias Utilizadas

![JavaScript](https://img.shields.io/badge/JavaScript-blue?style=for-the-badge&logo=javascript)
![Node.js](https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![GitLab](https://img.shields.io/badge/GitLab-FC6D26?style=for-the-badge&logo=gitlab&logoColor=white)
![VS Code](https://img.shields.io/badge/VS_Code-0078D4?style=for-the-badge&logo=visualstudiocode&logoColor=white)
![GitHub Copilot](https://img.shields.io/badge/GitHub_Copilot-000000?style=for-the-badge&logo=github&logoColor=white)

---
<p align="right">
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" height="30" alt="windows8 logo" />
</p>

