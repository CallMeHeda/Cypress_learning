// describe('Test Home Page', () => {
//   it('Visits the Home Page', () => {
//     cy.visit('/')
//     cy.get('router-link').click()
//     cy.url().should('include', '/aboutMe')

//     // cy.contains('aboutMe').should('have.attr', 'href')
//     // cy.contains('aboutMe').click()
//     // cy.url().should('include', '/aboutMe')
//     // cy.contains('type').should('have.attr', 'href')
//     // cy.url().should('include', '/aboutMe')

//     // cy.get('.action-email').type('fake@email.com').should('have.value', 'fake@email.com')
//   })
// })

// describe('Test Home Page', () => {
//   it('Visits the Home Page', () => {
//     cy.visit('/')
//     cy.get('.scroll .router-link').click()
//     cy.url().should('include', '/aboutMe')
//   })
// })

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