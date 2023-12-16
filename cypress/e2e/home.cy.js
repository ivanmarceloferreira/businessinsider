describe('Abrir a home do Business Insider spec', () => {
  it('Checar o componente header da página', () => {
    cy.visit('/');

    // aguarda o carregamento da página 
    cy.wait(500);

    // verificando o hamburger menu
    cy.get('[data-e2e-name="hamburgerBtn"]').click();

    // fechando o menu
    cy.get('.close-icon-clickable-area').click();

    // verificando o link da Newsletter
    cy.get('[data-analytics-product-area="newsletters"]')
      .should('have.attr', 'href', 'https://businessinsider.com/subscription/newsletter')
      .contains('Newsletters');

    // verificando o botão de login
    cy.get('.account-text-not-logged-in')
      .contains('Log in');

    // verificando o botão de subscribe
    cy.get('[data-e2e-name="subscribeBtn"]')
      .should('have.attr', 'href', 'https://www.businessinsider.com/subscription?r-&IR=C')
      .should('have.class', 'subscribe-btn')
      .contains('Subscribe');

  })

  it('Checar o componente newsletter', () => {
    cy.visit('/');
    // verificando o input de newsletter
    cy.get('.newsletter-signup').scrollIntoView({ offset: { top: -150, left: 0 } });
    cy.get('#newsletter-module-input')
      .should('be.visible')
      .type('ivan.marcelo.ferreira@gmail.com');
    cy.get('.homepage-newsletter-form > .rounded-button')
      .should('be.visible')
      .should('have.class', 'dark-button')
      .contains('Sign up');
  })
})