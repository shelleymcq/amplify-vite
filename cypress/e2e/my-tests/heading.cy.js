describe("heading correct", () => {
  it("heading reads Vite + React + Amplify + Cypress", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h1").contains("Vite + React + Amplify + Cypress");
  });
});
