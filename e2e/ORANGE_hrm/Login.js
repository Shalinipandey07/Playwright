/// <reference types="cypress" />

describe('Login Into the Application', () => {

    beforeEach(() => {
        // executes before each test within it block
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })
    
   /* afterEach(() => {
        // executes post each test within it block
        cy.log("AfterEac hook")
     })*/

    it('Login using valid credentials i.e valid username & valid password', () => {
      cy.Login('Admin','admin123')
      });
  
    it('Login using valid credentials i.e valid username & invalid password', () => {
        cy.Login('Admin','admin1234')
        cy.get(".oxd-text oxd-text--p oxd-alert-content-text").should('contain','Invalid Credentials')
    });

    it('Login using valid credentials i.e invalid username & valid password', () => {
        cy.Login('adminshalini','admin123')
        cy.get(".oxd-text oxd-text--p oxd-alert-content-text").should('contain','Invalid Credentials')
      });

      it('Login using valid credentials i.e invalid username & invalid password', () => {
        cy.Login('adminshalini','admin1234')
        cy.get(".oxd-text oxd-text--p oxd-alert-content-text").should('contain','Invalid Credentials')
      });
  
  });