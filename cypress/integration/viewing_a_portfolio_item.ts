describe('viewing a portfolio item', () => {
  it('displays six projects from github', () => {
    cy.visit('http://localhost:3000/portfolio');

    // Ensures that four items are displayed
    cy.get('[data-test="item-3"]');

    // Ensures that languages are being displayed for projects
    // (by selecting the first language of the last project)
    cy.get('[data-test="item-3__lang-0"]');

    // Ensures that a link is preset to the github repo for each project
    cy.get('[data-test="item-3__repo-link"]');
  });
});
