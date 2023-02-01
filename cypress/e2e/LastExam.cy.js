describe("LastExam", () => {
  beforeEach(() => {
    cy.visit("../../ep01_small_excercise.html");
  });
  it("UsernameAndPassWordAndNickname", () => {
    cy.randomStringOfLength().then((randomUsername) => {
      cy.get('input[id="username-box"]').type(randomUsername);
    });
    cy.randomStringAndNumber(8).then((randomPassword) => {
      cy.get("div")
        .contains("Password:")
        .find("input[type='text']")
        .type(randomPassword);
    });
    cy.randomStringOfLength().then((randomNickname) => {
      cy.get("div")
        .contains("Nickname:")
        .find('input[doppio="nickname"]')
        .type(randomNickname);
    });
  });

  it("Selected Dropdown", () => {
    const dropDownList = ["pioffdoo", "offpido", "dopioff", "doppio"]; //ในarrey เป็น value
    dropDownList.forEach((dropDownList) => {
      cy.get("#company").select(dropDownList);
    });
  });

  it("selectCheckBox", () => {
    const checkBox = ["easy", "hard", "fine"]; //ในarrey เป็น value
    checkBox.forEach((checkBox) => {
      cy.get("input[type='checkbox']").check(checkBox);
    });
  });
  it("clickButton", () => {
    cy.get("button").contains("Click ME to Finish !!").click();
    //cy.get("#use-me").click();
  });
});
