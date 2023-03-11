describe('Logout', () => {

    beforeEach(() => {
        cy.visit("https://gotasker-revamp-lkzzf1ssw-aashishdhawan.vercel.app/sign_in")
    })

    it('LogOut', () => {
        cy.login('aas@yopmail.com','password')
        cy.wait(2000)
        cy.get(':nth-child(3) > .fa').click()
        cy.contains('Logout').click({force: true})

        

    })
})