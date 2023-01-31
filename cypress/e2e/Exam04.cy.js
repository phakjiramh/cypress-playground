describe("Example04", () => {
  beforeEach(() => {
    cy.visit("../../ex04.html");
  });
  it("input UserName", () => {
    cy.randomStringFunction(5).then((randomUserName) => {
      cy.get('div>span[c="Username"]')
        .next("input[type='text']")
        .type(randomUserName);
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
    cy.randomStringFunction(5).then((randomUserName) => {
      cy.get('div>span[c="Username"]')
        .next("input[type='text']")
        .type(randomUserName);
    });
    cy.randomStringAndNumber(8).then((randomPassWord) => {
      cy.get('div>span[c="Password"]')
        .next("input[type='text']")
        .type(randomPassWord);
    });
  });
});
