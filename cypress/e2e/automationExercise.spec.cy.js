describe('Fluxo AutomationExercise - Buscar, adicionar e remover produto do carrinho', () => {

  it('Deve buscar um produto, adicionar ao carrinho e remover', () => {

    // 1. Acessar home
    cy.visit('/');

    // 2. Clicar no menu "Products"
    cy.contains('Products').click();

    // 3. Buscar produto no campo de busca
    cy.get('#search_product').type('tshirt');
    cy.get('#submit_search').click();

    // 4. Verificar resultados
    cy.contains('Searched Products').should('be.visible');

    // 5. Clicar em "Add to cart" do primeiro item
    cy.get('.add-to-cart').first().click();

    // 6. Modal → Clicar em "View Cart"
    cy.contains('View Cart').click();

    // 7. Verificar se o carrinho contém item
    cy.get('.cart_description').should('be.visible');

    // 8. Remover item (clicar no X)
    cy.get('.cart_quantity_delete').click();

    // 9. Validar carrinho vazio
    cy.contains('Cart is empty').should('be.visible');
  });

});


