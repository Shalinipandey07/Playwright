/// <reference types="Cypress" />

class Login

{
    visit()
    {
        cy.visit("https://admin-demo.nopcommerce.com/login")
    }

    fillemail(value)
    {
        const field=cy.get('[id="Email"]')
        field.clear()
        field.type(value)
        return this
    }

    fillPassword(value)
    {
        const field=cy.get('[id="Password"]')
        field.clear()
        field.type(value)
        return this
    }

    submit()
    {
        const button=cy.get('[type="submit"]')
        button.click()
    }
}

export default Login