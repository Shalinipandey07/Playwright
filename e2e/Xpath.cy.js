/// <reference types="cypress" />


describe('cypress-xpath Usage', () => {
  it('Identify element using X-path', () => {
    cy.visit('https://www.google.com/')
    cy.xpath("//a[text()='Images']").click()
  });

  it('Identify element using X-path', () => {
    cy.visit('https://www.google.com/')
    cy.xpath("//a[text()='Gmail']").click()
  });

});