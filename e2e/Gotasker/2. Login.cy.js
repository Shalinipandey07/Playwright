describe('Login', () => {

    beforeEach(() => {
        cy.visit("https://gotasker-revamp-lkzzf1ssw-aashishdhawan.vercel.app/sign_in")
    })

    it('Log in to the application with valid cred', () => {
        cy.get("#session_email").type("aas@yopmail.com")
        cy.get("#session_password").type("password")
        cy.get('[type=submit]').click()
        cy.wait(2000)
    })

    it('Log in to the application with invalid cred', () => {
        cy.get("#session_email").type("aashish@yopmail.com")
        cy.get("#session_password").type("password")
        cy.get('[type=submit]').click()
    })

})
