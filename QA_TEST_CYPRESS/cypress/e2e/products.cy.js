describe('Funcionalidade: PRODUTOS', () => {
    
    beforeEach(() => {
        const username = `standard_user`;
        const password = "secret_sauce";

        cy.visit('https://www.saucedemo.com/');
        cy.get('.form_group input[name="user-name"]').type(username, {force: true});
        cy.get('.form_group input[name="password"]').type(password, {force: true});
        cy.get("#login-button").contains("Login").click();
    })

    it('TESTE 1 - Validar exibição da lista de produtos > Todos os produtos aparecem após login', () => {
        cy.get('.inventory_item').should('be.visible');
        cy.log('Itens validados');
    })

    it('TESTE 2 - Ordenação de A -> Z > Produtos em ordem alfabética crescente', () => {
        cy.get('.product_sort_container').should('be.visible').select('Name (A to Z)');
    })

    it('TESTE 3 - Ordenação de Z -> A > Produtos em ordem alfabética decrescente', () => {
        cy.get('.product_sort_container').should('be.visible').select('Name (Z to A)');
    })
})