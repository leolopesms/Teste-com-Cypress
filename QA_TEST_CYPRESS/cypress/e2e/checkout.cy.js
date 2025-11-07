describe('Funcionalidade: LOGIN', () => {

    beforeEach(() => {
        const username = `standard_user`;
        const password = "secret_sauce";

        cy.visit('https://www.saucedemo.com/')
        cy.get('.form_group input[name="user-name"]').type(username, {force: true});
        cy.get('.form_group input[name="password"]').type(password, {force: true});
        cy.get("#login-button").contains("Login").click()
        cy.get('.pricebar').contains("Add to cart").click()
        cy.get('.pricebar').contains("Add to cart").click()
        cy.get('.shopping_cart_link').click()
        cy.get('.cart_footer').contains("Checkout").click()
    })

    it('TESTE 1 - Preencher dados válidos > Avança para a página e revisão', () => {
        const firstName = "Leonardo";
        const lastName = "Lopes";
        const postalCode = 17522630;

        cy.get('.checkout_info input[name="firstName"]').type(firstName, {force: true});
        cy.get('.checkout_info input[name="lastName"]').type(lastName, {force: true});
        cy.get('.checkout_info input[name="postalCode"]').type(postalCode, {force: true});
        cy.get('.checkout_buttons').contains("Continue").click()
    })

    it('TESTE 2 - Campos vazios no checkout > Exibir aviso e preenchimento obrigatório', () => {
        cy.get('.checkout_buttons').contains("Continue").click()
        cy.get('.checkout_info').contains("Error")
    })

    it('TESTE 3 - Finalizar compra > Exibir mensagem "Thank you for your order!"', () => {
        const firstName = "Leonardo";
        const lastName = "Lopes";
        const postalCode = 17522630;

        cy.get('.checkout_info input[name="firstName"]').type(firstName);
        cy.get('.checkout_info input[name="lastName"]').type(lastName);
        cy.get('.checkout_info input[name="postalCode"]').type(postalCode);
        cy.get('.checkout_buttons').contains("Continue").click();
        cy.get('.cart_footer').contains("Finish").click();
        cy.get('.checkout_complete_container').contains("Thank you for your order!");
    })

    it('TESTE 3 - Finalizar compra > Exibir mensagem "Thank you for your order!"', () => {
        const firstName = "Leonardo";
        const lastName = "Lopes";
        const postalCode = 17522630;

        cy.get('.checkout_info input[name="firstName"]').type(firstName);
        cy.get('.checkout_info input[name="lastName"]').type(lastName);
        cy.get('.checkout_info input[name="postalCode"]').type(postalCode);
        cy.get('.checkout_buttons').contains("Continue").click();
        cy.get('.cart_footer').contains("Cancel").click();
        cy.get('.inventory_item').should('be.visible');
    })
})