/* eslint-disable no-undef */
describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Shorten Link works', () => {
    cy.get('[data-cy=url-input]').type('https://google.com/test-longer-url');
    cy.get('[data-cy=shorten-button]').click();
    cy.wait(4000);
    cy.get('[data-cy=shortened-url]').should('have.length.at.least', 1);
  });

  it('Error Handling works', () => {
    cy.get('[data-cy=shorten-button]').click();
    cy.get('[data-cy=error-text]').should('have.length', 1);
  });
});
