describe("Example06", () => {
  beforeEach(() => {
    cy.visit("../../ex06.html");
  });
  it("input UsernameAndPassWordAndNickname", () => {
    cy.randomStringOfLength().then((randomUsername) => {
      cy.get("div")
        .contains("User:")
        .find('input[type="text"]')
        .type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("div")
        .contains("Password:")
        .find('input[type="text"]')
        .type(randomPassword);
    });
    cy.randomStringOfLength().then((randomNickname) => {
      cy.get("div")
        .contains("Nickname:")
        .find('input[type="text"]')
        .type(randomNickname);
    });
  });
});
