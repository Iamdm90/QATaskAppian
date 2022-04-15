/// <reference types="Cypress" />

import SearchHomePage from '../support/pages/searchHome.page';
import SearchResultPage from '../support/pages/searchResult.page';

const searchHomepage = new SearchHomePage()
const searchResultPage = new SearchResultPage()

describe('Search Results Page Test', function(){

    it('Videos, Maps, Images, News, More, Tools buttons are visible', function(){
        cy.visit(Cypress.env('url'))
        searchHomepage.getAcceptCookies().click()
        searchHomepage.getSearchBox().type(this.data.searchItem1).type('{enter}')
        searchResultPage.getToolsButton().should('be.visible')
        searchResultPage.getMoreButton().should('be.visible')
        searchResultPage.getMapsButton().should('be.visible').and('have.text', 'Maps')
        searchResultPage.getImagesButton().should('be.visible').and('have.text', 'Images')
        searchResultPage.getNewsButton().should('be.visible').and('have.text', 'News')
        searchResultPage.getVideosButton().should('be.visible').and('have.text', 'Videos')
    })

    it('Test for searching with invalid text', function(){
        cy.visit(Cypress.env('url'))
        searchHomepage.getAcceptCookies().click()
        searchHomepage.getSearchBox().type(this.data.invalidSearchText).type('{enter}')
        searchResultPage.getNoResultErrorParagraph().should('contain.text', `Your search - ${this.data.invalidSearchText} - did not match any documents.`)
    })

    it('Test for availability of Sorting options', function(){
        cy.visit(Cypress.env('url'))
        searchHomepage.getAcceptCookies().click()
        searchHomepage.getSearchBox().type(this.data.searchItem1).type('{enter}')
        searchResultPage.getToolsButton().click()
        searchResultPage.getAnytimeOptionsButton('Any time').should('be.visible')
        searchResultPage.getAllResultsButton().should('be.visible')
        searchResultPage.getAnytimeOptionsButton('Any time').click()
        searchResultPage.getAnyTimeMenu().then(($els) => {
            return (
              Cypress.$.makeArray($els)
                // and extract inner text from each
                .map((el) => el.innerText)
            )
        })
          .should('deep.equal', this.data.filterOptions)
    })
})