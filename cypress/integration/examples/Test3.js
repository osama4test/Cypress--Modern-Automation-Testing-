/// <reference types="Cypress"/>

describe('TestCase-2', function () {


    it('Second Test Case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//Checkboxes handled

       cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
       cy.get('#checkBoxOption1').uncheck().should('not.be.checked')   // for checking onyl single checkbox

       //tagname[attribute=value] 
       //input[type='search'] if placed in the upper format
       cy.get("input[type='checkbox']").check(['option2','option3']) //adding values in an array


//Static dropdwon
       
        cy.get('select').select('option2').should('have.value','option2')

//Dynamic dropdown

        cy.get("#autocomplete").type('pa')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            
            if($el.text()==="Pakistan"){

                cy.wrap($el).click()


            }


        })
        cy.get("#autocomplete").should('have.value','Pakistan')


//Handling visible and ivisible items
//if we are checking behaviour we will use be.visible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')


//Radio Button

        cy.get("input[value='radio1']").check().should('be.checked')
    })



})