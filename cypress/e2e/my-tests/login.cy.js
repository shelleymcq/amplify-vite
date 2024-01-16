describe("successfully log in and display homepage", () => {
  it("successfully enters username and password", () => {
    cy.visit("http://localhost:5173");
    cy.get('input[name="username"]').type(Cypress.env("username"));
    cy.get('input[name="password"]').type(Cypress.env("password"));
    cy.get('button[type="submit"]').click();
    cy.get("h1").contains("Vite + React + Amplify + Cypress");
  });
});
