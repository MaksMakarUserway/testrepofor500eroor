it('should have the right text in the headline', () => {
  cy.visit('/property-1.html');
  cy.userwayAnalysis();
  cy.visit('/property-2.html');
  cy.userwayAnalysis();
  cy.visit('/property-3.html');
  cy.userwayAnalysis();
  cy.visit('/properties-2.html');
  cy.userwayAnalysis();
  cy.visit('/properties-3.html');
  cy.userwayAnalysis();
});
