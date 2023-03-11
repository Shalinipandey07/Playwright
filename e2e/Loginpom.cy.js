/// <reference types="Cypress" />

import Login from '../PageObjects/LoginPage';

describe('Login using POM', () => {

    it('Valid Login Test', function (){
       
        const lp = new Login()
        lp.visit()
        lp.fillemail('admin@yourstore.com')
        lp.fillPassword('admin')
        lp.submit()
        cy.title().should('be.equal','https://admin-demo.nopcommerce.com/admin/')
    })
 })