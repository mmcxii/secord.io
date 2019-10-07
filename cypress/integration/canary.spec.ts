describe('canary', () => {
    it('makes sure the default CRA page loades', () => {
        cy.visit('http://localhost:3000')
            .contains('Nich\'s portfolio');
    });
});