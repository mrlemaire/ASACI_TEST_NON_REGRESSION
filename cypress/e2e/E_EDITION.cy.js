/// <reference types="cypress" />

describe('EDITION PAR FORMULAIRE', () => {
    beforeEach(() => {
      //lancement du lien de l'application
      cy.visit('http://asacitest.ldfgroupe.com:8090/asaciMetier/#/app');

      
    });
    
    it('EDITION', () => {
        cy.login('courtier-dev@yopmail.com','@Azerty@007');
        //cy.get('#formly_8_wl-button_btn_5').click();
        cy.get('.d-flex').should('exist');
        cy.wait(10000);

        cy.get(':nth-child(3) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        cy.get(':nth-child(4) > span').click()
        cy.get('.ant-select-selection-search').click()
        cy.wait(10000)
        cy.get('.ant-select-item-option-content').click()
        cy.get('#formly_7_wl-input_access_key_2').type('107189')
        cy.get('#formly_9_wl-button__0').click()
        cy.wait(5000)



        // Chargement du fichier excel
         const fileName = 'EDITION PREPROD_-1.xlsx';        

        cy.fixture(fileName, 'binary')
          .then(Cypress.Blob.binaryStringToBlob)
          .then(fileContent => {
            cy.get('#filechargement').attachFile({
              fileContent,
              fileName,
              mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
              encoding:'utf8',
              lastModified: new Date().getTime()
            });
          });

          cy.wait(10000)

          cy.get('#formly_22_wl-button__0').click()
          cy.wait(10000)
          cy.get('.ant-modal-confirm-body-wrapper').should('contain','Votre demande est en cours de traitement, un courriel vous sera envoyé par la suite.')
          cy.get('[class="ant-btn ng-tns-c102-29 ant-btn-primary ng-star-inserted"]').click()


  });

})
