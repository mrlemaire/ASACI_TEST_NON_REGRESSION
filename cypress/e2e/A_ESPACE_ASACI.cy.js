 /// <reference types="cypress" />


describe('ADMINISTRATION', () => {
    beforeEach(() => {
      //lancement du lien de l'application
      cy.visit('http://asacitest.ldfgroupe.com:8090/asaciMetier/#/app');
    });

    //login
    

    //entite
    let entite_code = Date.now()
    let enttite_nom = `${entite_code}_CYPRESS-_COMPAGNIE0`
    let entite_email =`${entite_code}cypress@yopmail.com`
    let entite_conatct =' 0101010101'
    


    // utilisateur
    //let enttite_nom = '__CYPRESS-_COMPAGNIE0'
    let user_nom = setInterval(generateRandomNumber, 60000);
    let user_prenom = `CYPRESS${user_nom}`
    //let entite_email ='__0-cypress@yopmail.com'


//     //=============================================================

    function generateRandomNumber() {
      // Génère un nombre aléatoire de 0 à 999
        let randomNumber = Math.floor(Math.random() * 1000);
        // Convertit le nombre en une chaîne de caractères
        let randomString = randomNumber.toString();
        // Ajoute des zéros à gauche pour atteindre 3 chiffres
        while (randomString.length < 3) {
          randomString = "0" + randomString;
        }
        // Ajoute deux chiffres aléatoires à la fin de la chaîne de caractères
        for (let i = 0; i < 2; i++) {
          randomString += Math.floor(Math.random() * 10);
        }
        // Affiche le nombre généré
        return(randomString);
    }
  
    //let user_nom = setInterval(generateRandomNumber, 180000);

    //==================================================================
  

      it('AFFICHAGE DE L\'ECRAN DE CONNEXION', () => {
        cy.wait(10000);
        cy.get('body')
        cy.contains("Panel d'administration de la plateforme de gestion des attestations automobiles en Côte d'Ivoire ASACI")
        cy.contains('Connexion')
        cy.get('#formly_6_wl-input_login_1').should('exist');
        cy.get('#formly_6_wl-input_password_2').should('exist');
        cy.get('#formly_8_wl-button_btn_5').should('exist');
        cy.get('.h-100px').should('exist');
        cy.contains('SE CONNECTER');
      });


 

      it('AUTHENTIFICATION AVEC UN IDENTIFIANT ET UN MAOT DE PASSE INVALIDE', () => {
        cy.get('#formly_6_wl-input_login_1').type('testcypress@gmail.com');
        cy.get('#formly_6_wl-input_password_2').type('@Azerty@007cypress');
        cy.get('#formly_8_wl-button_btn_5').click();
        cy.get('.ant-alert').should('exist');
        
        cy.contains('Identifiant ou mot de passe incorrect');

      });

        it("AUTHENTIFICATION, AFFICHAGE DE LA PAGE D'ACCEUIL", () => {
          cy.login('admin-asaci-dev@yopmail.com','@Azerty@007')
          cy.wait(10000);
          cy.get(':nth-child(1) > .card > .card-body').should('exist');
          cy.get(':nth-child(1) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
          cy.get(':nth-child(2) > .card > .card-body').should('exist');
          cy.get(':nth-child(2) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
          cy.get(':nth-child(3) > .card > .card-body').should('exist');
          cy.get(':nth-child(3) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
          cy.get(':nth-child(4) > .card > .card-body').should('exist');
          cy.get(':nth-child(4) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
          cy.get(':nth-child(5) > .card > .card-body').should('exist');
          cy.get(':nth-child(5) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
          cy.get(':nth-child(6) > .card > .card-body').should('exist');
          cy.get(':nth-child(6) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
          cy.get(':nth-child(7) > .card > .card-body').should('exist');
          cy.get(':nth-child(7) > .card > .card-body > [style="float: right; font-size: 4rem;"] > .ant-spin-nested-loading > .ant-spin-container').should('exist');
      });


      it('DECONNEXION ', () => {
        cy.login('admin-asaci-dev@yopmail.com','@Azerty@007')
        cy.get('.d-flex').should('exist');
        cy.wait(5000);
        cy.get('avatar > div.ng-star-inserted').click();
        cy.get('.ant-dropdown-menu > :nth-child(3)').click();
        cy.wait(1000);
        cy.get('.w-lg-500px').should('exist');
      });


        it('AUTHENTIFICATION AVEC UN IDENTIFIANT ET UN MOT DE PASSE VALIDE', () => {
          cy.login('admin-asaci-dev@yopmail.com','@Azerty@007')
          cy.get('.d-flex').should('exist');
      });
  

     it("CREATION D\'UNE ENTITE", () => {
      //saisir les informations pour se connecter a l'application
      cy.login('admin-asaci-dev@yopmail.com','@Azerty@007')
        cy.get('.d-flex').should('exist');
        //attendre 10 seconde pour que la page charge correctement toutes les informations 
        cy.wait(10000);

        // aller dans le menu de creation d'une Entité(type compagnie)
        cy.get(':nth-child(2) > [style="padding-left: 24px;"]').click();
        cy.get('.ng-tns-c33-5 > :nth-child(1) > :nth-child(1) > :nth-child(1) > span').click();

        // renseigner les informations de l'Entité que l'on souhaite créer
        cy.get('#formly_16_wl-input_code_1').type(`${entite_code}`);
        cy.get('#formly_16_wl-input_name_2').type(`${enttite_nom}`);
        cy.get('.ant-select-selection-item').click();
        cy.get('.ant-select-item-option-selected > .ant-select-item-option-content').click();
        cy.get('#formly_16_wl-input_email_4').type(`${entite_email}`);
        cy.get('#formly_16_wl-input_phone_5').type(`${entite_conatct}`);
        cy.get('#formly_16_wl-input_address_6').type('PLATEAU');
        
        //cliquer sur le bouton  enregistrer
        cy.get('#formly_18_wl-button__0').click();

        cy.get('.ant-message-notice-content').contains('Entité créée avec success !').should('exist');

        cy.wait(10000);
       
        //vérifier que le tableau contient les informations de l'utilisateur créé
        cy.get('[class="p-datatable-wrapper"]').contains(`${entite_code}`).should('exist');
        cy.get('[class="p-datatable-wrapper"]').contains(`${enttite_nom}`).should('exist');
        cy.get('[class="p-datatable-wrapper"]').contains('ASACI').should('exist');
        cy.get('[class="p-datatable-wrapper"]').contains(`${entite_email}`).should('exist');
       
      });


// //      //=====================================================================================================================================

      it("CREATION D\'UTILISATEUR", () => {
        cy.login('admin-asaci-dev@yopmail.com','@Azerty@007')
        cy.get('.d-flex').should('exist');
        //attendre 10 seconde pour que la page charge correctement toutes les informations 
        cy.wait(1000);

         // aller dans le menu de creation d'un utilisateur
        cy.get(':nth-child(2) > [style="padding-left: 24px;"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > .ant-menu-submenu > .ant-menu-submenu-title > span.ng-star-inserted').click();
        cy.get('.ng-tns-c33-4 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(2) > span').click();
        cy.wait(10000);

        // renseigner les informations de l'utilisateur que l'on souhaite créer
        cy.get('.ant-select-selector').click().type('CYPRESS0_COMPAGNIE').click();
        cy.get('.ant-select-item').click();
        cy.get('#formly_14_wl-input_first_name_2').type(`${entite_code}ACC${user_nom}`);
        cy.get('#formly_14_wl-input_last_name_3').type(`${entite_code}AACC${user_prenom}`);
        cy.get('#formly_14_wl-input_email_4').type(`${entite_code}AACC${user_nom}cypress@yopmail.com`);
        cy.get('#formly_14_wl-input_phone_5').type('0101010101');
        cy.get('#formly_16_wl-button_submit_0').click();

        //Reception d'une notification qui justifié que l'utilisateur a été crée avec succes
        cy.get('.ant-message-notice-content').contains('Utilisateur créé avec succes !').should('exist');

        cy.wait(5000);

        //vérifier que le tableau contient les informations de l'utilisateur créé
        cy.get('.ng-tns-c33-4 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(1) > span').click();

        cy.wait(5000);
        cy.get('list.ng-star-inserted').contains(`${user_nom}`).should('be.visible');
        cy.get('list.ng-star-inserted').contains(`${user_prenom}`).should('be.visible');
        //cy.get('list.ng-star-inserted').contains('CYPRESS0_COMPAGNIE').should('be.visible');
        cy.get('list.ng-star-inserted').contains(`${user_nom}cypress@yopmail.com`).should('be.visible');
        cy.wait(10000);

        // cy.get('.ng-tns-c33-4 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(1) > span')

        // cy.get('.ng-tns-c33-4 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(3) > span').click();


            
      });



      it("AUTORISER L'UTILISATION D'UN PROFIL", () => {
        cy.login('admin-asaci-dev@yopmail.com','@Azerty@007')
        cy.get('.d-flex').should('exist');
        //attendre 10 seconde pour que la page charge correctement toutes les informations 
        cy.wait(5000);

        cy.get(':nth-child(2) > [style="padding-left: 24px;"]').click();
        cy.get(':nth-child(1) > :nth-child(1) > .ant-menu-submenu > .ant-menu-submenu-title > span.ng-star-inserted').click();

        cy.get('.ant-menu-item-selected > span').click()
        cy.get('.ng-tns-c33-4 > ul.ng-star-inserted > menu-item.ng-star-inserted > :nth-child(3) > span').click()

        cy.get('#formly_7_list-box_user_id_1 > .p-listbox > .p-listbox-header > .p-listbox-filter-container > .p-listbox-filter').type(`AAAA${user_nom}cypress@yopmail.com`)
        cy.get('#formly_7_list-box_user_id_1 > .p-listbox > .p-listbox-list-wrapper > .p-listbox-list > .p-ripple > .ng-star-inserted').click()

        cy.get('#formly_7_list-box_profil_id_2 > .p-listbox > .p-listbox-header > .p-listbox-filter-container > .p-listbox-filter').type('COURTIER DEV')
        // cy.get('#formly_9_wl-button__0').click()
        cy.get('#formly_7_list-box_profil_id_2 > .p-listbox > .p-listbox-list-wrapper > .p-listbox-list > .p-ripple').click()
       
        cy.get('#formly_9_wl-button__0').click()

        cy.get('.ant-message-notice-content').should('have.text','Profil Utilisateur créée !')

        // cy.wait(5000)
        // cy.get('.ant-alert').should('contain',"Cannot read property 'length' of undefined").and('be.visible')
            
    });

  });