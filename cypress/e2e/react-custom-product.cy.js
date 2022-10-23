/// <reference types="cypress" />

describe("react-custom-product", function() {
  it("can find seven images in the demo", function() {
    cy.visit("demo/dist/index.html");

    cy.contains("react-custom-product");
    cy.contains("#1 with alt, small, medium and large props");
  });

});
