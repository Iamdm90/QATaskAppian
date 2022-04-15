/// <reference types="Cypress" />

class SearchResultPage{

    getToolsButton(){
        return cy.get('div').contains('Tools')
    }

    getMoreButton(){
        return cy.get('div').contains('More')
    }

    getMapsButton(){
        return cy.get('div.MUFPAc>div:nth-child(2)>a')
    }

    getImagesButton(){
        return cy.get('div.MUFPAc>div:nth-child(3)>a')
    }

    getNewsButton(){
        return cy.get('div.MUFPAc>div:nth-child(4)>a')
    }

    getVideosButton(){
        return cy.get('div.MUFPAc>div:nth-child(5)>a')
    }

    getNoResultErrorParagraph(){
        return cy.get('.card-section>p').first()
    }

    getAnytimeOptionsButton(optionText){
        return cy.get('div.KTBKoe').contains(optionText)
    }

    getAllResultsButton(){
        return cy.get('div.KTBKoe').contains('All results')
    }

    getAnyTimeMenu(){
        return cy.get('#lb>div>g-menu>g-menu-item>div>a')
    }

}
export default SearchResultPage