import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("el usuario accede a cualquier página del sitio", () => {
  cy.visit("/");
});

Then(
  "el footer debería mostrar los nombres de todos los miembros del equipo",
  () => {
    cy.contains("Abel Ángel Gonzalez Durán").should("be.visible");
    cy.contains("Álvaro de Diego Gómez").should("be.visible");
    cy.contains("Ángel Carlos Soler Encinas").should("be.visible");
  }
);
