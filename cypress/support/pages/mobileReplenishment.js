export class MobilePhoneReplenishment {

    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
        .type(phoneNumber)
    }

   

    

    typeCard(){
        cy.get('[data-qa-node="card"]')
            .should('have.text', '4552 **** **** 8217')
    }

    CheckDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    CheckDebitAmount(Damount){
        cy.get('[data-qa-node="amount"]')
            .should('have.text', Damount)
    }

    CheckCurrently(currency){
        cy.get('[data-qa-node="currency"]')
            .eq(0)
            .should('contain.text', currency)
    }
    typefirstNamedebitSource(firstName){
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
    }
    typelastNamedebitSource(lastNamedebitSource){
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(lastNamedebitSource)
    }

  
           
}

export const mobileReplenishment = new MobilePhoneReplenishment ()