describe('Funcionalidade: LOGIN', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    })

    it('TESTE 1 - Login com credenciais válidas > Redirecionar para página de produtos', () => {
        const username = `standard_user`;
        const password = "secret_sauce";

        cy.get('.form_group input[name="user-name"]').type(username, {force: true});
        cy.get('.form_group input[name="password"]').type(password, {force: true});
        cy.get("#login-button").contains("Login").click();
    })

    it('TESTE 2 - Login com senha inválida > Exibir mensagem de erro', () => {
        const UsuarioCorreto = `standard_user`;
        const SenhaErrada = "Teste@123";

        cy.get('.form_group input[name="user-name"]').type(UsuarioCorreto, {force: true});
        cy.get('.form_group input[name="password"]').type(SenhaErrada, {force: true});
        cy.get("#login-button").contains("Login").click();
        cy.contains("Epic sadface: Username and password do not match any user in this service").should("be.visible");
    })

    it('TESTE 3 - Login com usuário bloqueado > Exibir mensagem "user has been locked out"', () => {
        const UsuarioBloqueado = `locked_out_user`;
        const SenhaCorreta = "secret_sauce";

        cy.get('.form_group input[name="user-name"]').type(UsuarioBloqueado, {force: true});
        cy.get('.form_group input[name="password"]').type(SenhaCorreta, {force: true});
        cy.get("#login-button").contains("Login").click();
        cy.contains("user has been locked out").should("be.visible");
    })

    it('TESTE 4 - Login com campos vazios > Impedir login e exibir alerta', () => {
        cy.get("#login-button").contains("Login").click();
        cy.contains("Epic sadface").should("be.visible");
    })
})