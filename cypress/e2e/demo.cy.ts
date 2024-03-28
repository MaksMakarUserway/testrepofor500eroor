it('should have the right text in the headline', () => {
  cy.visit('/');

  cy.get('.slider-area').contains('property Searching Just Got So Easy');
});
