describe("Example04", () => {
  beforeEach(() => {
    cy.visit("../../ex04.html");
  });
  it("input UserName", () => {
    cy.randomStringFunction(5).then((randomUserName) => {
      cy.get("div.span").contains("User").find("input").click(cs);
    });
  });
});
