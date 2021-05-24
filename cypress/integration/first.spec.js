/// <reference types="Cypress"/>
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfer } from "../support/pages/transfer";
import { basePage } from "../support/pages/basePage";

beforeEach('setup success response with stub', ()=> {
        cy.intercept('https://next.privat24.ua/api/p24/pub/confirm/check',
         {fixture: 'cypress/fixtures/confirmResponce/success.json'})
})

it('Replenishment of Ukraine mobile phone number', ()=> {
    cy.visit('https://next.privat24.ua/mobile?lang=en');
    mobileReplenishment.typePhoneNumber('686979712');
    basePage.typeAmount("20");
    basePage.typeDebitCard('4552331448138217', '0524', '111');
    cy.wait(3000);
    basePage.typeClickSubmit();
    cy.wait(5000);
    mobileReplenishment.typefirstNamedebitSource('Shayne');
    mobileReplenishment.typelastNamedebitSource('McConnell');
    basePage.typeClickSubmit();
    cy.wait(5000);
    mobileReplenishment.CheckDebitCard('4552 **** **** 8217');
    mobileReplenishment.CheckDebitAmount('20');
    mobileReplenishment.CheckCurrently('UAH');
   

});
it.skip('Replenishment of Ukraine mobile phone number', ()=> {
    cy.visit('https://next.privat24.ua/money-transfer/card')
            basePage.typeDebitCard('4552331448138217', '0524', '111'); 
            transfer.typefirstNamedebitSource('Shayne');
            transfer.typelastNamedebitSource('McConnell');
            transfer.typeCardTo('5309233034765085');
            transfer.typefirstNamereceiver('Juliana');
            transfer.typelastNamereceiver('Janssen');
            basePage.typeAmount('300');
            transfer.typeTogleComment();
            transfer.typeComment('Cypress test');
            cy.wait(3000);
            basePage.typeClickSubmit();
            cy.wait(5000);
            transfer.checkDebitAndReceiverCards('* 8217','* 5085');
            transfer.checkDebitAmountAndTotalAmount('300 UAH', '387.27');
            transfer.checkdebitCommision('87.27 UAH');
            transfer.checkTotalCarrency('UAH');
            cy.contains('Confirm')
                .click();
            
            
            });
            //get запрос в cypress 
            it.skip('Example sending the Get request', ()=> { 
                cy.request('https://next.privat24.ua')
                    .then((response)=> {
                        console.log(response)
                    })
                    });

             //post запрос в cypress expect
             it.skip('Example sending the Post request', ()=> { 
                 //json файл 
                const requestBody= {
                    action:"info",
                    phone:"+380686979712",
                    amount:50,
                    currency: "UAH",
                    cardCvv:"111",
                    card:"4552331448138217",
                    cardExp:"0526",
                    xref:"5b33e7d285b8f3e9a5472303ed523b97",
                    _:1621416027795,};
                //список из ключей и значений (cookie)
                const headersData = {
                    cookie: '_ga=GA1.2.155030426.1621318188; _gid=GA1.2.133136452.1621318188; theme=dark; pubkey=4dba210b676cf8f4cc6e9a0186063f8c; fp=17; lfp=5/18/2021, 9:09:58 AM; pa=1621415870387.54030.6642546371577327next.privat24.ua0.3765429557096869+2',
                    };
                cy.request({
                    method: "POST",
                    url: "https://next.privat24.ua/api/p24/pub/mobipay",
                    body: requestBody,
                    headers: headersData,
                    })
                    .then((response)=> {
                        expect(response).to.have.property('status').to.equal(200)
                        expect(response.body).to.have.property('status').to.equal('success')
                        expect(response.body.data).to.have.property('amount').to.equal('50.0')
                        console.log(response)});
                });
                    //post запрос в cypress should 
                it.skip('Example sending the Post request', ()=> { 
                    //json файл 
                   const requestBody= {
                       action:"info",
                       phone:"+380686979712",
                       amount:50,
                       currency: "UAH",
                       cardCvv:"111",
                       card:"4552331448138217",
                       cardExp:"0524",
                       xref:"076af7ed73c5aa3102f4713d8f086f65",
                       _:1621416027795,};
                   //список из ключей и значений (cookie)

                   const headersData = {
                       cookie: '_ga=GA1.2.155030426.1621318188; _gid=GA1.2.133136452.1621318188; theme=dark; pubkey=0437cb6e9c4abd3bca196fdb71022bd0; fp=18; lfp=5/18/2021, 9:09:58 AM; pa=1621491491966.2710.34330184857321next.privat24.ua0.015878926346997835+1',
                       };
                   cy.request({
                       method: "POST",
                       url: "https://next.privat24.ua/api/p24/pub/mobipay",
                       body: requestBody,
                       headers: headersData,
                       }).its('body').should('contain', {
                           status: 'success'
                       }).its('data').should('contain', {
                        status: 'ok'
                       })
                   });


          

           

           













