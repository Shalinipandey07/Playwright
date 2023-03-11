describe('Tutorialspoint Test', function () {
    // test case
    it('Test Case5', function (){
       // launch the application
       cy.visit("https://www.amazon.com/");
       // to display hidden element with invoke() with show
       cy.get('#nav-flyout-ya-signin').invoke('show');
       //click on the hidden element
       cy.contains('Sign').click({force: true});
       //assert to verify the url
       cy.url().should('include','signin');
    });
 });