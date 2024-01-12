describe("what happens when a test fails", () => {
  it("h3 contains test fails", () => {
    cy.visit("http://localhost:5173/");
    cy.get("h3").contains("test fails");
  });
});
