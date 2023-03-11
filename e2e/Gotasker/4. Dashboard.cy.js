describe('Dashboard Elements Verification', () => {

    beforeEach(() => {
        cy.visit("https://gotasker-revamp-lkzzf1ssw-aashishdhawan.vercel.app/sign_in")
        cy.login('aas@yopmail.com','password')
    })

    it('Calendar', () => {
        cy.wait(2000)
        cy.get('#calender').click()
        cy.wait(2000)
       // cy.get(':nth-child(3) > .rbc-row-bg > :nth-child(6)').click()
       // cy.get('.close').click()
    })
    
    it('Add New Service', () => {
        cy.get('#actionButton').click()
        cy.contains("Add New Service").click({force: true})
        cy.wait(2000)
        cy.get('#serviceDropdown')
        cy.contains('Aman Shukla').click({force: true})
        cy.get('#serviceName').type('Shalini is testing the Add New Service functionality using Cypress')
        cy.get('.container > input').check()
        cy.get('.Button').click()
        cy.wait(2000)
        cy.get('.Timeline active')// Timeline tab should be visible
       
    })
})