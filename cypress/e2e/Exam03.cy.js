describe("Exam03", () => {
  beforeEach(() => {
    cy.visit("../../ex03.html");
  });
  it("input Username", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get("div")
        .contains("Username")
        .find('input[type="text"]')
        .type(randomUsername);
    });
  });
  it("input Password", () => {
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("div")
        .contains("Password")
        .find('input[type="text"]')
        .type(randomPassword);
    });
  });
  it("input UsernameAndPassword", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get("div")
        .contains("Username")
        .find('input[type="text"]')
        .type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("div")
        .contains("Password")
        .find('input[type="text"]')
        .type(randomPassword);
    });
  });
});
