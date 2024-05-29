describe('Test Girleek', () => {
  beforeEach(() =>{
    cy.visit('https://girleek.tech');
    // Ignorer le popup
    // cy.get('#popup').invoke('hide');
  });
  
  it('Visits the about Page', () => {
    cy.get('a[href="https://girleek.tech/a-propos/"]').should('exist');
    cy.get('a[href="https://girleek.tech/a-propos/"]').first().click();
    cy.url().should('include', 'https://girleek.tech/a-propos/');
  });

  it('Visits the partenaire Page', () => {
    cy.get('a[href="https://girleek.tech/partenaire/"]').should('exist');
    cy.get('a[href="https://girleek.tech/partenaire/"]').first().click();
    cy.url().should('include', 'https://girleek.tech/partenaire/');
  });

  // it('Visits the location Page dropdown menu', () => {
    // cy.get('.dropdown-toggle').should('exist');
    // cy.get('.dropdown-toggle').first().click()
  // });

  it('Visits the contact Page', () => {
    cy.get('a[href="https://girleek.tech/contactez-nous/"]').should('exist');
    cy.get('a[href="https://girleek.tech/contactez-nous/"]').first().click();
    cy.url().should('include', 'https://girleek.tech/contactez-nous/');
  });
})