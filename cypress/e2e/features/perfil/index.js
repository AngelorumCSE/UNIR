import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"

const randomUser = () => ({
  username: `pepito`,
  email: `pepito@pepito.com`,
  password: 'pepito'
});

let user;
user = randomUser();

Given('el usuario navega a la página de login', () => {
  cy.visit('/login');
});

When('completa el formulario de login con credenciales válidas', () => {
  cy.get('input[name="email"]').type(user.email);
  cy.get('input[name="password"]').type(user.password);
});

When('envía el formulario de login', () => {
  cy.get('form').submit();
});

Then('ve un mensaje de bienvenida', () => {
  cy.contains(/bienvenido|login correcto/i, { timeout: 5000 }).should('exist');
});

Then('el usuario navega a la página de perfil', () => {
  cy.visit('/perfil');
});

Then('Contiene su nombre de usuario y una hora', () => {
  cy.contains('Datos del perfil '+user.username).should('be.visible');
  cy.contains(/Último login: \d{1,2}\/\d{1,2}\/\d{4}, \d{2}:\d{2}:\d{2}/ ).should('be.visible')
});
