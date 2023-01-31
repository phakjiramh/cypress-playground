describe("Example 01", () => {
  beforeEach(() => {
    cy.visit("../../ex01.html");
  });

  it("input Username", () => {
    cy.randomStringFunction(5).then((randomeUsername) => {
      cy.get("input[v='user']").type(randomeUsername);
    });
  });
  it("input Password", () => {
    cy.randomStringAndNumber(8).then((randomePassword) => {
      cy.get('input[v="password"]').type(randomePassword);
    });
  });
  it("input UsernameAndPassword", () => {
    cy.randomStringFunction(5).then((randomeUsername) => {
      cy.get("input[v='user']").type(randomeUsername);
    });
    cy.randomStringAndNumber(8).then((randomePassword) => {
      cy.get('input[v="password"]').type(randomePassword);
    });
  });
});
