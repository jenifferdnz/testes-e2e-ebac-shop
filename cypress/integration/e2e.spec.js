///<reference types= "cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {

    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    
        beforeEach(() => {
            cy.visit('produtos')
        });    

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addPedido(3, 'L', 'Blue', 2)
        cy.addPedido(3, 'M', 'Black', 2)
        cy.checkout('Maria', 'Fernandes','Ebac', 'Brasil', 'Av. Argemiro de Figereido', 'João Pessoa', 'Paraíba', '58037030', '83999375869', 'jmariaf@gmail.com')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

               
    });

})