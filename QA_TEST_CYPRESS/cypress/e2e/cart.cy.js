describe('Funcionalidade: LOGIN', () => {

    beforeEach(() => {
        const username = `standard_user`;
        const password = "secret_sauce";

        cy.visit('https://www.saucedemo.com/');
        cy.get('.form_group input[name="user-name"]').type(username, {force: true});
        cy.get('.form_group input[name="password"]').type(password, {force: true});
        cy.get("#login-button").contains("Login").click();
    })

    it('TESTE 1 - Adicionar 1 produto ao carrinho > Contador no carrinho = 1', () => {
        cy.get('.pricebar').contains("Add to cart").click();
        cy.get('.shopping_cart_link').contains(1);
    })

    it('TESTE 2 - Adicionar 2 produto ao carrinho > Contador no carrinho = 2', () => {
        cy.get('.pricebar').contains("Add to cart").click();
        cy.get('.pricebar').contains("Add to cart").click();
        cy.get('.shopping_cart_link').contains(2);
    })

    it('TESTE 3 - Remover produto do carrinho > Carrinho atualiza corretamente', () => {
        cy.get('.pricebar').contains("Add to cart").click();
        cy.get('.pricebar').contains("Add to cart").click();
        cy.get('.shopping_cart_link').contains(2);
        cy.get('.pricebar').contains("Remove").click();
        cy.get('.shopping_cart_link').contains(1);
    })

    it('TESTE 4 - Visualizar carrinho > Itens adicionados são exibidos', () => {
        cy.get('.pricebar').contains("Add to cart").click();
        cy.get('.shopping_cart_link').click();
    })
})