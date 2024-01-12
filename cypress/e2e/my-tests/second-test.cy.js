describe("using github actions", () => {
  it("h2 contains GitHub Actions", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h2").contains("GitHub Actions");
  });
});
