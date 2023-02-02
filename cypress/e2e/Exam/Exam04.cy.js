describe("Example04", () => {
  beforeEach(() => {
    cy.visit("../../ex04.html");
  });
  it("input UserName", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get('div>span[c="Username"]')
        .next("input[type='text']")
        .type(randomUsername);
    });
  });
  it("input PassWord", () => {
    cy.randomStringAndNumber(8).then((randomPassWord) => {
      cy.get('div>span[c="Password"]')
        .next("input[type='text']")
        .type(randomPassWord);
    });
  });
  it("input UserNameAndPassWord", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get('div>span[c="Username"]')
        .next("input[type='text']")
        .type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassWord) => {
      cy.get('div>span[c="Password"]')
        .next("input[type='text']")
        .type(randomPassWord);
    });
  });
});
