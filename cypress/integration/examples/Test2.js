/// <reference types="Cypress"/>

describe('TestCase-2', function () {


    it('Second Test Case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('productLocator') 
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    
            const vegText = $el.find('h4.product-name').text()
            if (vegText.includes('Cashews')) {
                cy.wrap($el).find('button').click()
    
            }
        })
        cy.get('.cart').find('a.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


      
    })



})