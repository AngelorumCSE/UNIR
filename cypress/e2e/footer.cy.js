/// <reference types="Cypress" />
// Prueba de que el footer contiene el nombre de los miembros del grupo

describe("Mostrar nombres de equipo en el footer", () => {
  it("Debe mostrar los nombres de todos los miembros del equipo", () => {
    cy.visit("/");
    cy.contains("Abel Ángel Gonzalez Durán");
    cy.contains("Álvaro de Diego Gómez");
    cy.contains("Ángel Carlos Soler Encinas");
  });
});
