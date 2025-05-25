describe("Check Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Check home page has header", () => {
    cy.get("header").should("exist");
  });

  it("Check if search input title works", () => {
    cy.get('input[name="title"]').type("Dziady");
    cy.get(".product-box").should("have.length", 2);
  });

  it("Check if search select ", () => {
    cy.get('select[name="genre"]').select("Horror");
    cy.get(".product-box").should("have.length", 3);
  });
});
