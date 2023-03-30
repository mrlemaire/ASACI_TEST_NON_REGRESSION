/// <reference types="cypress" />

describe('DEMANDE_VALIDATION_RECEPTION D\'UNE DEMANDE D\'ATTESTATION', () => {
    beforeEach(() => {
      //lancement du lien de l'application
      cy.visit('http://asacitest.ldfgroupe.com:8090/asaciMetier/#/app');

      
    });
    
    it('CONNEXION D\'UNE COMPAGNIE POUR INITIER UNE DEMANDE ', () => {
        cy.login('admin-compagnie@yopmail.com','@Azerty@007');
        //cy.get('#formly_8_wl-button_btn_5').click();
        cy.get('.d-flex').should('exist');
        cy.wait(10000);

        // //Affichage de message de Bienvenu
        cy.get('.flex-grow-1 > .fw-bolder').should('contain','Bienvenue !')
        cy.wait(5000)
        //cy.contains('Bonsoir ADMIN COMAPAGNIE DEV, nous vous souhaitons la bienvenue sur votre interface de travail')
        //cy.get('.text-muted').should('contains','Bonjour ADMIN COMAPAGNIE DEV, nous vous souhaitons la bienvenue sur votre interface de travail')

        cy.wait(10000);
        //Affichage des informations du tableau de Bord
        cy.get(':nth-child(1) > .card > .card-body').should('exist')
        cy.get(':nth-child(1) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(2) > .card > .card-body').should('exist')
        cy.get(':nth-child(2) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(3) > .card > .card-body').should('exist')
        cy.get(':nth-child(3) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(4) > .card > .card-body').should('exist')
        cy.get(':nth-child(4) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(5) > .card > .card-body').should('exist')
        cy.get(':nth-child(5) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(6) > .card > .card-body').should('exist')
        cy.get(':nth-child(6) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(7) > .card > .card-body').should('exist')
        cy.get(':nth-child(7) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(8) > .card > .card-body').should('exist')
        cy.get(':nth-child(8) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')
        cy.get(':nth-child(9) > .card > .card-body').should('exist')
        cy.get(':nth-child(9) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist')


    });

    it('DEMANDE D\'ATTESTATION PAR UNE COMPAGNIE',()=>{
        cy.login('admin-compagnie@yopmail.com','@Azerty@007');
        //cy.get('#formly_8_wl-button_btn_5').click();
        cy.get('.d-flex').should('exist');
        cy.wait(10000);

        cy.get(':nth-child(4) > [style="padding-left: 24px;"] > span.ng-star-inserted').click()
        cy.get(':nth-child(1) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        cy.get('.ng-tns-c33-7 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(1) > span').click()
        cy.wait(10000)
        cy.get('.ant-select-selection-search').click()
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
        cy.get('#formly_12_wl-input_quantite_1').type('5')
        cy.get('[style="margin: 30px 0;"] > ._btn_primary').click()
        cy.get('#formly_30_wl-select_id_nature_0 > .ant-select-selector > .ant-select-selection-search').click()
        cy.get('#formly_30_wl-select_id_nature_0 > .ant-select-selector > .ant-select-selection-search').click()
        cy.get('.ant-select-item-option-active > .ant-select-item-option-content').click()
        cy.get('#formly_30_wl-input_quantite_1').type('5')
        cy.get('[style="margin: 30px 0;"] > ._btn_primary').click()
        cy.get('#formly_39_wl-select_id_nature_0 > .ant-select-selector > .ant-select-selection-search').click()
        cy.get('[title="CIMA - Verte"]').click()
        cy.get('#formly_39_wl-input_quantite_1').type('5')
        cy.get('#formly_9_wl-button_submit_0').click()
        cy.get('.ant-message-notice-content').should('contain','Demande bien enregistré')
        cy.wait(30000)
    })



    it('VALIDATION D\'UNE DEMANDE D\'ATTESTATION PAR UNE COMPAGNIE',()=>{
        cy.login('admin-compagnie@yopmail.com','@Azerty@007');
        cy.wait(10000);

        cy.get(':nth-child(4) > [style="padding-left: 24px;"] > span.ng-star-inserted').click()
        cy.get(':nth-child(1) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        
        cy.get('.ng-tns-c33-10 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        cy.get('.ng-tns-c33-8 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(1) > span').click()
        cy.wait(10000)

        cy.get(':nth-child(1) > [style="text-align: center;"]').click()
        cy.wait(10000)
        cy.get('.ant-btn-primary').click()
        cy.wait(30000)

    })


    it('VALIDATION D\'UNE DEMANDE D\'ATTESTATION PAR L\'ASACI (LIVRAISON)',()=>{
        cy.login('admin-asaci-dev@yopmail.com','@Azerty@007');
        cy.wait(10000);

        cy.get(':nth-child(7) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        cy.get('.ng-tns-c33-10 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(1) > span').click()

        //cy.get(':nth-child(6) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        //cy.get('.ng-tns-c33-9 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(1) > span').click()
        cy.wait(10000);
        //cy.get(':nth-child(1) > [style="text-align: center;"] > .ant-btn')
        cy.get(':nth-child(1) > [style="text-align: center;"] > .ant-btn').click()
        cy.wait(5000);
        cy.get('.ant-btn-primary').click()
        cy.wait(30000);
    })



    it('RECEPTION D\'UNE DEMANDE D\'ATTESTATION PAR PAR LA COMPAGNIE(RECEPTION DE LA LIVRAISON)',()=>{
        cy.login('admin-compagnie@yopmail.com','@Azerty@007');
        cy.wait(30000);
        cy.get(':nth-child(4) > [style="padding-left: 24px;"] > span.ng-star-inserted').click()
        cy.get('.ng-tns-c33-10 > :nth-child(1) > :nth-child(1) > :nth-child(2) > .ant-menu-submenu-title > span.ng-star-inserted').click()
        cy.get('.ng-tns-c33-8 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(2) > span').click()
        cy.wait(30000);
        cy.get(':nth-child(1) > [style="text-align: center;"] > :nth-child(1)').click()
        cy.get('.ant-btn-primary').click()
        cy.wait(3000);
        //cy.get('.ant-message-notice-content').should('contain','Demande réceptionnée avec succès')
        cy.get('.ant-message-notice-content').should('contain','Demande réceptionnée avec succès')

        

        
    })


});
