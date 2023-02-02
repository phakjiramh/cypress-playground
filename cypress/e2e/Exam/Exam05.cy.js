describe("Example05", () => {
  beforeEach(() => {
    cy.visit("../../ex05.html");
  });

  it("input UsernameAndPassword", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get("span")
        .contains("User:")
        .next('input[type="text"]')
        .type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("span")
        .contains("Pass:")
        .next('input[type="text"]')
        .type(randomPassword);
    });
  });
});
