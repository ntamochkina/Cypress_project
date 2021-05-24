export class BasePage {
    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }
    typeDebitCard(numberDebit, Sourse, Cvv)
    {
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(numberDebit)
            .get('[data-qa-node="expiredebitSource"]')
            .type(Sourse)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(Cvv)
    }
    typeClickSubmit(){
        cy.get('button[type="submit"]')
        .click()
    }
}

export const basePage = new BasePage() //экземпляр объекта на странице