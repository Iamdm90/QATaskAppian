/// <reference types="Cypress" />

class SearchHomePage{

    getSearchBox(){
        return cy.get('input[name="q"]')
    }

    getAcceptCookies(){
        return cy.get('#L2AGLb > .QS5gu')
    }

    getSuggestionListItem(index){
        return cy.get(`li[role="presentation"]:nth-child(${index})`)
    }

    getClearButton(){
        return cy.get('span[role="button"] svg')
    }


}
export default SearchHomePage