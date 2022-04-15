/// <reference types="Cypress" />

import SearchHomePage from '../support/pages/searchHome.page';

const searchHomepage = new SearchHomePage()

describe('Test for Search Home page', function(){

    it('Test Search functionality and gets the first search result', function(){
        cy.visit(Cypress.env('url'))
        searchHomepage.getAcceptCookies().click()
        searchHomepage.getSearchBox().type(this.data.searchItem1).type('{enter}')
        cy.get('#search a').invoke('attr', 'href')
        .then((href) => cy.log(href));
    })

    it('Test Auto Suggestion while typing in the search box', function(){
        cy.visit(Cypress.env('url'))
        searchHomepage.getAcceptCookies().click()
        searchHomepage.getSearchBox().type(this.data.searchItem2)
        //selecting the first item from the suggestion list
        searchHomepage.getSuggestionListItem(1).click({force:true})
    })

    it('Test Clear Button in the search box', function(){
        cy.visit(Cypress.env('url'))
        searchHomepage.getAcceptCookies().click()
        searchHomepage.getSearchBox().type(this.data.searchItem1)
        searchHomepage.getClearButton().should('be.visible')
        searchHomepage.getClearButton().click()
        searchHomepage.getClearButton().should('not.be.visible')
    })
})