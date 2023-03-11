describe('Example to demonstrate the handling of Shadow Dom in Cypress', () => {
   /* beforeEach(() => {
        cy.visit('https://books-pwakit.appspot.com/')
    })*/

    it('Input a text in the input box and after search validate the URL with includeShadowDom flag set to true', () => {
        cy.visit('https://books-pwakit.appspot.com/')
        cy.get('book-app')
          .find('#input')
          .type('Science', { force: true })
          .click()
          .url('include', 'explore?q=Science')
      })
})