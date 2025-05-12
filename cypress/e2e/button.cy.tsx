describe("Botão na aplicação", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("exibe o botão primário e reage ao clique", () => {
    cy.contains("button", /entrar/i)
      .should("have.class", "bg-primary")
      .click();

    cy.get("#mensagem").should("contain.text", "Você clicou!");
  });
});
