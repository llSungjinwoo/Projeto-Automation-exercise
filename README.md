🧪 Projeto de Automação de Testes com Cypress

🇧🇷

📘 Descrição do Projeto

Este projeto foi desenvolvido com o objetivo de automatizar um fluxo completo de compra utilizando o site Automation Exercise, focando na simulação do comportamento real de um usuário.

Foram implementados três cenários principais, cobrindo passos essenciais de um e-commerce:

✔️ 1. Buscar um produto

O teste automatiza a pesquisa por um item específico na barra de busca e valida se os resultados retornados são compatíveis com o termo pesquisado.

✔️ 2. Adicionar o produto ao carrinho

Após encontrar o produto, o teste o adiciona ao carrinho e verifica se as informações exibidas estão corretas, garantindo confiabilidade no fluxo de compra.

✔️ 3. Remover o produto do carrinho

Por fim, o teste valida o processo de remoção do item do carrinho, garantindo que o sistema reflita corretamente a operação e atualize a visualização.

⚙️ Tecnologias Utilizadas

Cypress (v15.4.0)

Node.js

JavaScript (ES6+)

🧭 Estrutura do Projeto
cypress/
 └── e2e/
     └── automationExercise.spec.cy.js


O arquivo automationExercise.cy.js contém todo o fluxo automatizado:

Busca de produto

Adição ao carrinho

Validação das informações

Remoção do item do carrinho

🧩 Observações Importantes

⚠️ O site AutomationExercise.com é estável, porém algumas animações e pop-ups podem gerar pequenos atrasos no carregamento dos elementos.
Por isso, foram usadas boas práticas como:

should('be.visible')

Pequenas esperas baseadas em elementos (não wait fixo)

Seletores resilientes para evitar flakiness

Essas práticas deixam o teste mais confiável e adequado para rodar em qualquer máquina, desde que o ambiente tenha:

Node instalado

Cypress instalado

Dependências do projeto instaladas                    

FIM.

🧪 Test Automation Project with Cypress

🇺🇸

📘 Project Description

This project was developed to automate an end-to-end test flow on the Automation Exercise website, using Cypress, one of the most powerful tools for modern UI test automation.

The automated scenario covers the complete user journey of:

🔍 Product Search

The script searches for a product using the website's search bar and validates the search results.

🛒 Add to Cart

It adds the first product returned by the search to the shopping cart and validates that the item was added successfully.

❌ Remove from Cart

Finally, it removes the item from the cart and confirms that the cart is empty.

This flow represents a real e-commerce interaction and ensures that the main shopping functionalities are working as expected.

⚙️ Technologies Used

Cypress (v13+)

Node.js

JavaScript (ES6+)

🧭 Project Structure
cypress/
 └── e2e/
      └── automationExercise.spec.cy.js


The automationExercise.cy.js file contains the entire automated flow:
searching for a product → adding to cart → removing from cart.

📌 Important Notes

⚠️ The AutomationExercise website can sometimes experience instability.
If any step fails due to slow loading or unexpected behavior, simply rerun the test.

👨‍💻 Author

Phelipe Almeida

📅 Date: December 2025

END.
