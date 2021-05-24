export class Transfers {
    
    typefirstNamedebitSource(firstName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
    }
    typelastNamedebitSource(lastNamedebitSource){
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(lastNamedebitSource)
    }
    typeCardTo(numberreceiver){s
        cy.get('[data-qa-node="numberreceiver"]')
            .type(numberreceiver)
    }

    typefirstNamereceiver(firstNamereceiver){
        cy.get('[data-qa-node="firstNamereceiver"]')
            .type(firstNamereceiver)
    }
    typelastNamereceiver(lastNamedebitSource){
        cy.get('[data-qa-node="lastNamereceiver"]')
            .type(lastNamedebitSource)
    }

   

    typeTogleComment(){
        cy.get('[data-qa-node="toggle-comment"]')
            .click()
    }

    typeComment(comment){
        cy.get('[data-qa-node="comment"]')
            .type(comment)
    }

   
    checkDebitAndReceiverCards(debitCard,reciverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', reciverCard)
    }

    checkDebitAmountAndTotalAmount(demitAmount, totalAmount){
        cy.get('[data-qa-node="payer-amount"]')
            .should('have.text', demitAmount)
            .get('[data-qa-node="total"]')
            .find('span')
            .should('contain.text', totalAmount)
    }

    checkdebitCommision(commision){
        cy.get('[data-qa-node="payer-currency"]')
            .should('have.text', commision)
    }

    checkTotalCarrency(currency){
        cy.get('[data-qa-node="total"]')
        .find('small')
        .should('contain.text', currency)
    }



}
export const transfer = new Transfers()