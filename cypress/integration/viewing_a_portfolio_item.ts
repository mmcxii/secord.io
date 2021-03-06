describe('viewing a main portfolio item', () => {
  it('renders three portfolio items', () => {
    cy.visit('http://localhost:3000');

    // Clicks the portfolio link in the navbar
    cy.get('[data-testid="portfolio-link"]').click();

    // Ensures that four items are displayed
    cy.get('[data-testid="portfolio-item--3"]');

    // Ensures that all items have a link to a live site
    cy.get('[data-testid="portfolio-item--3__site-link"]').should('have.attr', 'href');

    // Ensures that all items have a link to github repository
    cy.get('[data-testid="portfolio-item--3__repo-link"]').should('have.attr', 'href');

    // Ensures that all items have a screenshot with alt text
    cy.get('[data-testid="portfolio-item--3__screenshot"]').should('have.attr', 'alt');

    // Ensures that clicking an item opens a detail page for that project
    cy.get('[data-testid="portfolio-item--3__detail-link"]')
      .click({ force: true })
      .url()
      .should('include', '/portfolio/roshambo-the-gathering');

    // Ensures the correct detail page is opened
    cy.get('[data-testid="project-title"]').should('contain.text', 'roshambo: the gathering');
  });
});
