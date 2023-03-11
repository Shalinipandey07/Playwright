describe("Post Method", function(){
    it("Scenario 3", function(){
       cy.request('https://jsonplaceholder.cypress.io/users?_limit=1')
       .its('body.0') // yields the first element of the returned list
       // make a new post on behalf of the user
       cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
          title: 'Cypress',
          body: 'Automation Tool',
       })
    })
 });