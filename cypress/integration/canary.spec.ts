describe('canary', () => {
    it('makes sure the default CRA page loades', () => {
        //@ts-ignore
        cy.visit('http://localhost:3000')
            .contains('testing cypress')
    })
})