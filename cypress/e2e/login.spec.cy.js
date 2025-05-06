///<reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')

});

afterEach(() => {
    cy.screenshot()
});



context('fucionalidade Login', () => {
    it('Deve fazer um login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    })

    it('Deve fazer um login com sucesso- Usando arquivo de dados ', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')

    });

    it.only('Deve fazer login com sucesso -Usando fixture ', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario)
            cy.get('#password').type(dados.senha,{log:false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    });

    it('Deve exibir uma messagem de erro ao inserir usario inválidos', () => {
        cy.get('#username').type('ebac@teste.com')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido')

    })

    it('Deve exibir uma messagem de erro ao inserir senha inválidos', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain', 'A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')

    })

})