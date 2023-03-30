/// <reference types="cypress" />

describe('ATTRIBUTION DE PLAGE', () => {
    beforeEach(() => {
      //lancement du lien de l'application
      cy.visit('http://asacitest.ldfgroupe.com:8090/asaciMetier/#/app');

      
    });
    
    it('ATTRIBUTION', () => {
        cy.login('admin-compagnie@yopmail.com','@Azerty@007');
        //cy.get('#formly_8_wl-button_btn_5').click();
        cy.get('.d-flex').should('exist');
        cy.wait(10000);

         //Affichage de message de Bienvenu
        cy.get('.flex-grow-1 > .fw-bolder').should('contain','Bienvenue !')
        //cy.get('.text-muted').should('contain.value','Bonjour ADMIN COMAPAGNIE DEV, nous vous souhaitons la bienvenue sur votre interface de travail')
        cy.wait(5000);

        cy.get('.ant-menu-root > :nth-child(3) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        cy.get('.ng-tns-c33-6 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(2) > span').click()
        cy.wait(10000)
        cy.get('[style="text-align: center;"] > .ant-btn').click()
        cy.wait(5000)
        cy.get('.ant-tabs-nav-list > :nth-child(2)').click()
        cy.get('div > ._btn_primary').click()
        cy.get('#formly_48_wl-select_id_couleur_nature_0 > .ant-select-selector').click()
        cy.get('[title="CIMA - Jaune"]').click()
        cy.get('#formly_48_wl-input_plage_1').type('5')
        cy.get('#formly_48_wl-select_type_ajout_2 > .ant-select-selector').click()
        cy.get('.ant-select-item-option-active').click()
        cy.get('[style="margin: 30px 0;"] > ._btn_primary').click()
        cy.get('#formly_56_wl-select_id_couleur_nature_0 > .ant-select-selector').click()
        cy.get('[title="CIMA - Bleu MATCA"]').click()
        cy.get('#formly_56_wl-input_plage_1').type('5')
        cy.get('#formly_56_wl-select_type_ajout_2 > .ant-select-selector').click()
        cy.get('.ant-select-item-option-active').click()
        cy.get('[style="margin: 30px 0;"] > ._btn_primary').click()
        cy.get('#formly_68_wl-select_id_couleur_nature_0 > .ant-select-selector').click()
        cy.get('[title="CIMA - Verte"]').click()
        cy.get('#formly_68_wl-input_plage_1').type('5')
        cy.get('#formly_68_wl-select_type_ajout_2 > .ant-select-selector').click()
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
        cy.get('#formly_20_wl-button__0').click()
        cy.get('span.ng-tns-c134-56').should('contain.text','Quota de l\'intermediaire mis a jour')
        cy.wait(5000)
        


    });

})
