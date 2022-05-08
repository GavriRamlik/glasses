describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    /* ==== Generated with Cypress Studio ==== */
    cy.get("#startscreen").should("have.id", "startscreen");
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".btn").click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "1/10");
    cy.get(":nth-child(1) > .answer-card").should(
      "have.text",
      "Women's Styles"
    );
    cy.get(":nth-child(2) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "2/10");

    cy.get(":nth-child(2) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "3/10");
    cy.get(":nth-child(1) > .answer-card").click();
    cy.get(":nth-child(3) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "4/10");
    cy.get(".text-base").click();
    cy.get(".question-title").should(
      "have.text",
      "How wide would you say your face is?"
    );
    cy.get(":nth-child(3) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "5/10");
    cy.get(":nth-child(3) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "6/10");
    cy.get(":nth-child(3) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "7/10");
    cy.get(":nth-child(3) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "8/10");
    cy.get(".btn").should("be.disabled");
    cy.get(":nth-child(9) > .relative > img").click();
    cy.get(":nth-child(10) > .relative").click();
    cy.get(".btn").should("be.enabled");
    cy.get(".btn").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "9/10");
    cy.get(":nth-child(1) > .answer-card").click();
    cy.get(".px-\\[23px\\] > .font-open").should("have.text", "10/10");
    cy.get(":nth-child(1) > img").click();
    cy.get(":nth-child(2) > .answer-card").click();
    cy.get(".btn").should("have.text", "Send");
    /* ==== End Cypress Studio ==== */
  });
});
