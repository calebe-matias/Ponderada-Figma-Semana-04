# Exercício de UX/UI com Figma e React – Semana 04

### **Pergunta:**

Em duplas, projetar um componente de interface para app mobile no Figma e desenvolvê-lo utilizando React Native ou simulação via HTML/CSS. O design deve utilizar Auto Layout e Dev Mode para guiar a implementação com base nas medidas, estilos e estrutura de código gerada.

### **Autores:**

Calebe Matias
*(O projeto foi desenvolvido individualmente.)*

### **Link do Repositório:**

[https://github.com/calebe-matias/Ponderada-Figma-Semana-04](https://github.com/calebe-matias/Ponderada-Figma-Semana-04)

### **Link do Figma:**

[Projeto Figma – Ponderada de UX - Semana 04](https://www.figma.com/design/2igQeO6Hh3BE105QIdLBIA/Ponderada-de-UX---Semana-04?node-id=0-1&t=uNrPbbOCHCny8Z84-1)

---

### **Relato (Processo, Dificuldades e Resultados):**

O objetivo da ponderada era criar um componente de interface mobile no Figma e desenvolvê-lo utilizando React Native ou simulação via HTML/CSS. Conversei com a professora Bruna, que permitiu o uso de React caso tivesse dificuldade com a feature de Figma to Code.
Uma descrição do componente que pensei e criei no Figma é uma página que exibe categorias favor de ativos favoritos inspiradas no app BTG Investimentos. O componente mostra apenas os nomes das categorias e uma opção para desfavoritar categorias, mas a ideia é que ao clicar em uma delas, o usuário seja direcionado para uma tela com os ativos daquela categoria. O componente foi projetado para ser responsivo, adaptando-se a diferentes tamanhos de tela, mas foquei principalmente no design Mobile.

Usei o Figma para prototipar o componente, aplicando Auto Layout e organizando cuidadosamente as camadas e estilos, garantindo que todas as layers fossem nomeadas adequadamente e os estilos salvos fossem reutilizáveis.

Embora o Figma tenha facilitado bastante a etapa de prototipagem, tive algumas dificuldades quando passei para a fase de codificação utilizando o Dev Mode / Figma to Code. Percebi que o Dev Mode é  útil pra verificar medidas e extrair estilos visuais como cores e espaçamentos, mas infelizmente o código gerado não era muito fiel ao design que construí no Figma. Por isso, decidi usar React e JavaScript, escolhendo a biblioteca Ant Design para facilitar a implementação dos componentes.

Além do componente específico solicitado, aproveitei para implementar outras telas adicionais para dar mais contexto ao projeto, como a página de categorias de ativos e uma tela de detalhes específica para cada ativo. Embora essas telas adicionais não tenham recebido a mesma atenção visual detalhada, elas funcionam corretamente e demonstram claramente a ideia do fluxo do aplicativo.

---

### **Instruções para Executar o Projeto:**

Para executar o projeto localmente, basta seguir os passos abaixo (necessário ter Node.js instalado):

**1. Clone o repositório:**

```bash
git clone https://github.com/calebe-matias/Ponderada-Figma-Semana-04
cd Ponderada-Figma-Semana-04
```

**2. Instale as dependências:**

```bash
cd projeto-figma
npm install
```

**3. Inicie o servidor:**

```bash
npm run dev
```
