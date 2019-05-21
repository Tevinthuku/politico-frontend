/* eslint-disable no-undef */
describe("View parties", () => {
  it("should render list of parties when they load", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/v2/parties",
      response: {
        data: [
          {
            hqAddress: "Kitui",
            id: 7,
            logoUrl: "",
            name: "Wiper"
          },
          {
            hqAddress: "Nairobi",
            id: 7,
            logoUrl: "",
            name: "TangaTanga"
          }
        ]
      }
    });
    cy.visit("/listparties");
    cy.get(".listitem-container").should("have.length", 2);
  });
});
