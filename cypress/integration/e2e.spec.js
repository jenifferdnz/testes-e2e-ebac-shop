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

    it.only('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        cy.addPedido(3, 'L', 'Blue', 2)
        cy.addPedido(3, 'M', 'Green', 2)
        cy.checkout('Jeniffer', 'Diniz','Fractal', 'Brasil', 'Av. Argemiro de Figereido', 'João Pessoa', 'Paraíba', '58037030', '83999375869', 'jenifferdiniz02@gmail.com')

        //cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
        //cy.get('.woocommerce-message').should('contain', 2 + ' × “Ingrid Running Jacket” foram adicionados no seu carrinho.')
        
    });

    it('Deve realizar o checkout para finalizar compra', () => {
        
    });


})