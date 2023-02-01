describe("Example 00", () => {
  beforeEach(() => {
    cy.visit("../../ex00.html");
  });

  it("verify Navigate To Web", () => {
    cy.get("h1").contains("Example 00 normal case").should("be.visible");
    //cy.contains("Example 00 normal case").should("be.visible");//ได้เหมือนกันแต่ไม่ดี
  });

  //เราอยาก random ตัวอักษร ก็ไปสร้างฟังชั่นใน commands ก่อน
  it("input Username", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get("#username-box").type(randomUsername);
    });
  });

  it("input Password", () => {
    // const randomPassword = await cy.randomStringAndNumber(8)
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("#password-box").type(randomPassword);
    });
  });

  it("input UsernameAndPassword", () => {
    cy.randomStringOfLength(5).then((randomUsername) => {
      cy.get("#username-box").type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("#password-box").type(randomPassword);
    });
  });
});
