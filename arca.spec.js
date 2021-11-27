/// <reference types="cypress"/>

// Criando um cenário de teste que realiza login e cria um anúncio
describe('DemoDirectory', () => {
    it('Inserindo um Anúncio utilizando Cypress', () => {

        // Acessando domínio do web site  
        cy.visit('https://demodirectory.com.br/');
        cy.get(':nth-child(2) > .nav-item-label > span').click();
        cy.get('[href="/sitemgr"]').click();

        // Preenchendo o formulário novamente com os valores
        cy.get('[name="username"]').clear();
        cy.get('[name="username"]').type('sitemgr@demodirectory.com');
        cy.get('[name="password"]').clear();
        cy.get('[name="password"]').type('abc123{enter}');

        // Acessando o menu Conteúdo e adicionando um anúncio  
        cy.get('[data-cy="tour-content"]').click();
        cy.get('[data-cy="listing-item"]').click();
        cy.get('[data-cy="add-listing"]').click();

        // Escolhendo o modelo de anúncio do tipo Empresa
        cy.get('[data-cy="listingTemplate-select"]').select('Empresa');

        // Inserindo nome do anúncio e selecionando pelo menos uma categoria
        cy.get('[data-cy="listing-title"]').type('Desafio 1 #arcachallenge');
        cy.get('[id="browse-categories"]').click();
        cy.get(':nth-child(1) > .categories-block > .addCategory').click();

        // Salvando alterações realizadas
        cy.get('[data-cy=listing-save-footer]').click();
        

    });
});

