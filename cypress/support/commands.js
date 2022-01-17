// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, {log: false})
    cy.get('.woocommerce-form > .button').click()
});

Cypress.Commands.add('addpedido', (quantidade1, quantidade2, quantidadetotal) => {
    var quantidade1 = 2
    var quantidade2 = 2
    var quantidadetotal = 4

    cy.get('[class="product-block grid"]').eq(3).click()
    cy.get('.button-variable-item-L').click()
    cy.get('.button-variable-item-Orange').click()
    cy.get('.input-text').clear().type(quantidade1)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade1)
    cy.get('.woocommerce-message').should('contain', quantidade1 + ' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')

    cy.get('#primary-menu > .menu-item-629 > a').click() 

    cy.get('[class="product-block grid"]').eq(4).click()
    cy.get('.button-variable-item-32').click()
    cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
    cy.get('.input-text').clear().type(quantidade2)
    cy.get('.single_add_to_cart_button').click()

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidadetotal)
    cy.get('.woocommerce-message').should('contain', quantidade2 + ' × “Apollo Running Short” foram adicionados no seu carrinho.')
    cy.get('.woocommerce-message > .button').click()
    cy.get('.checkout-button').click()

   
})

Cypress.Commands.add('checkout', (nome, sobrenome, empresa, pais, endereço, cidade, estado, cep, celular, email) => {

    cy.get('#billing_first_name').type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#billing_company').clear().type(empresa)
    cy.get('#select2-billing_country-container').click().type(pais).get('[aria-selected="true"]').click()
    cy.get('#billing_address_1').type(endereço)
    cy.get('#billing_city').type(cidade)
    cy.get('#select2-billing_state-container').click().type(estado + '{enter}')
    cy.get('#billing_postcode').type(cep)
    cy.get('#billing_phone').type(celular)
    cy.get('#billing_email').type(email)
    cy.get('#terms').click()
    cy.get('#place_order').click()


})