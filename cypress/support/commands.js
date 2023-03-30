// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//     const LOGIN = 'admin-asaci-dev@yopmail.com';
//     const PASS_WORD = '@Azerty@007';

// Cypress.Commands.add('login', (email, password) => { 
//         cy.get('#formly_6_wl-input_login_1').type(`${LOGIN}`);
//         cy.get('#formly_6_wl-input_password_2').type(`${PASS_WORD}`);
//         cy.get('#formly_8_wl-button_btn_5').click();
//         cy.get('.d-flex').should('exist');
//  });


 Cypress.Commands.add('login', (LOGIN , PASS_WORD) => { 
  cy.get('#formly_6_wl-input_login_1').type(LOGIN );
  cy.get('#formly_6_wl-input_password_2').type(PASS_WORD);
  cy.get('#formly_8_wl-button_btn_5').click();
  cy.get('.d-flex').should('exist');
});



//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';


function generateRandomNumber() {
    // Génère un nombre aléatoire de 5 chiffres entre 0 et 99999
    let randomNumber = Math.floor(Math.random() * 100000);
    // Si le nombre est inférieur à 10000, ajoute des zéros à gauche pour atteindre 5 chiffres
    if (randomNumber < 10000) {
      randomNumber = "0" + randomNumber;
    }
    // Affiche le nombre généré
    return(randomNumber);
  }

  let user_nom = setInterval(generateRandomNumber, 180000);