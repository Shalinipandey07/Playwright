describe('How to handle file uplaod', () => {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/upload")
    })

    it('File Upload using cypress-file-upload npm package', () => {
        const filepath = 'Shalini.png'
        cy.get('input[type="file"]').attachFile('Shalini.png')
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('Shalini.png')
    })

})