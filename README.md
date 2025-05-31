# React + Vite

Ejecutar la aplicación

`npm run dev`

Pruebas, abrir cypress

`npx cypress open`

Para que funcionen las pruebas con usuarios hay que tener ejecutando el servidor:

https://github.com/luispedraza/buscasofa-server 

# Cucumber + cypress básico

Los archivos con pruebas estan bajo la carpeta cypress/
Bajo la carpeta features estan:
  - archivos.feature, que describe escenarios de prueba entendibles para humanos
  - por cada archivo.feature hay una carpeta que contiene un js que tiene la logica de cada paso.

Cucumber se encarga de traducir los pasos escritos en Gherkin, es decir, los .feature, y los traduce a js.
En los archivos bajo eypress/components hay unos archivos .cy.jsx que son los test de componentes ( no cucumber).

Si hacemos `npx cypress open` tenemos dos opciones: E2E testing y Components testing.
  - E2E testing ejecuta los test .cy.js, como fuel_prices.cy.js, header.cy.js y home.cy.js
    También ejecuta las features Gherkin, como header.feature, notfound.feature y users.feature
  - Component testing hace pruebas de componentes individuales, como About.cy.jsx y Header.cy.jsx.

Cuando entremos en E2E testing, las pruebas relevates para nosotros son las que estan bajo features ademas de fuel_prices, header y home

Recursos útiles
===============

Documentación de vite: https://vite.dev/guide/ 
Documentación de cypress: https://www.cypress.io/ 
cypress-cucumber-preprocessor: https://github.com/badeball/cypress-cucumber-preprocessor?tab=readme-ov-file 

Otros: 

Tutorial Cypress + React: https://www.youtube.com/watch?v=6BkcHAEWeTU
Explica cómo instalar cypress en una aplicación react y escribir un test para probar una aplicación sencilla 

Tutorial cypress + cucumber --> react https://www.youtube.com/playlist?list=PLyWVU-yS4Fb7UcKP8ElLsZklMO86vLdHQ 

Mocking en cypress https://kailash-pathak.medium.com/mocking-api-response-in-cypress-a73dea514cfd 

