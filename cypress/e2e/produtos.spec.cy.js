///<reference types="cypress" />

describe('Funcionalidade Página de produtos ', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('[class="product-block grid"]')
            //first()
            //.eq(4)
            .contains('Ajax Full-Zip Sweatshirt')
            .click()

    });

    it.only('deve adicionar um produto no carrinho ', () => {
        var quantidade = 1

        cy.get('[class="product-block grid"]')
            .contains('Abominable Hoodie').click()
        cy.get('.button-variable-item-S').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        
            


    });
})