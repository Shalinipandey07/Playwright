describe('Sign Up', () => {

    beforeEach(() => {
        cy.visit("https://gotasker-revamp-lkzzf1ssw-aashishdhawan.vercel.app/organization_sign_up")
    })

    it.skip('Signup into the application with valid cred', () => {
        cy.get("#user_organization_name").type("IT SERVICE")
        cy.get("#user_first_name").type("Shalini")
        cy.get("#user_last_name").type("Pandey")
        cy.get("#user_email").type("shalini1@yopmail.com")
        cy.get("#user_password").type("password123")
        cy.get("#user_password_confirmation").type("password123")
        cy.get("#terms").check()
        cy.get('[type=submit]').click()
        cy.wait(2000)
    })

it('Check the field validations', () => {
    cy.get("#user_organization_name").type("Crownstack") //Check Duplicate Org name validation
    cy.wait(3000)
    cy.contains('Organization name Already taken.')
    cy.wait(3000)
    cy.get("#user_organization_name").clear()// Check the blank field validation
    cy.get("#user_first_name").click()
    cy.wait(3000)
    cy.contains('Please enter organization name')
    cy.get("#user_first_name").type("Shalini").clear() //Check mandatory field validation
    cy.get("#user_last_name").click()
    cy.wait(2000)
    cy.contains('Please enter first name')

    cy.get("#user_last_name").type("Pandey") //Check Non Mandatory field validation 
    cy.get("#user_email").type("shalini1@yopmail") // Check invalid email validation 
    cy.contains('Invalid email address').clear()
    cy.get("#user_password")
    cy.contains('Please enter email')
    cy.get("#user_password").type("password123")
    cy.get("#user_password_confirmation").type("password1234")// Check Password mismatch validation
    cy.contains('Password mismatched')
})
})