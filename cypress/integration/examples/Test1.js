/// <reference types="Cypress"/>

describe('TestCase-1', function () {


    it('First Test Case', function () {


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //parent child
        cy.get('.products').as('productLocator') //aliasing - now I will have to use productLocator instead of using .products each and every where, so if
                                                 //the locator changes I will only have to have to change this lines locator instead of going to everyline 
                                                 //if I had used .products instead of productLocator
        cy.get('@productLocator').find('.product').should('have.length', 4)

        //clicking the 2nd item 
        //below line will directly get the any item present in 1st index of array that is if this script was written in 2020 for getting vegetable cabbage which was 
        //on 1st index, now in 2022 more items have been added and cabbage has moved from index 1st to 3rd and now vegetable capsicom is at 1st index, it will get 
        //that vegetable
        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click().then(function(){

            console.log("Printing ")
        })

        //for more accuracy we have initated a loop in which the products will be searched by there name istead of picking 1st index of an array.
        //now it will search for that particular vegetable only no matter whereever it lies it will search it in whole array by iterating loop
        //and then passsing the test
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
    
            const vegText = $el.find('h4.product-name').text()
            if (vegText.includes('Cashews')) {
                cy.wrap($el).find('button').click()
    
            }
        })


        //For the below code which is not recognized by cypress an0other code is written using then 
       
        // const logo = cy.get('.brand')
        //cy.get('.brand').text()

        //this is the code below
        cy.get('.brand').then(function(logoElement){


            cy.log(logoElement.text())

        })
        cy.get('.brand').should('have.text','GREENKART')

    })



})