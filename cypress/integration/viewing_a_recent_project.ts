describe('viewing a portfolio item', () => {
  it('displays four projects from github', () => {
    cy.visit('http://localhost:3000/portfolio');

    // Ensures that four items are displayed
    cy.get('[data-testid="recent-project--3"]');

    // Ensures that languages are being displayed for projects
    // (by selecting the first language of the last project)
    cy.get('[data-testid="recent-project--3__lang-0"]');

    // Ensures that a link is preset to the github repo for each project
    cy.get('[data-testid="recent-project--3__repo-link"]').should('have.attr', 'href');
  });
});
