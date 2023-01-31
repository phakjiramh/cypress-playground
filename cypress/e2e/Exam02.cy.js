describe("Example02 ", () => {
  beforeEach(() => {
    cy.visit("../../ex02.html");
  });
  it("input Username", () => {
    cy.randomStringFunction(5).then((randomUsername) => {
      cy.get('div[v="username"]').find("input").type(randomUsername);
    });
  });
  it("input Password", () => {
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get('div[v="password"]').find("input").type(randomPassword);
    });
  });
  it("input UsernameAndPassword", () => {
    cy.randomStringFunction(5).then((randomUsername) => {
      cy.get('div[v="username"]').find("input").type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get('div[v="password"]').find("input").type(randomPassword);
    });
  });
});
