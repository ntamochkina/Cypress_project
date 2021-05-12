/// <reference types="Cypress"/>

/*it ('By ID', () => {
    cy.visit('https://facebook.com/')
    cy.get('#email')
})


it ('By Class', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('.DocSearch-Button-Placeholder')
})


it ('By Tag', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('nav')
})

it ('By Tag value', () => {
    cy.visit('https://facebook.com/')
    cy.get('[name="pass"]')
})


it ('By Different Tag value', () => {
    cy.visit('https://facebook.com/')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
})


it('By Different Types', () => {
    cy.visit('https://docs.cypress.io/api/commands/get.html#Syntax')
    cy.get('button[type="button"][title="close banner"]')
})



it.only ('By Contains Name', () => {
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
})
*/
//Comment

it ('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
})

it.only ('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq.html#Syntax')
    cy.get('aside').find('div').find('ol').find('li').find('a').eq(0)
});