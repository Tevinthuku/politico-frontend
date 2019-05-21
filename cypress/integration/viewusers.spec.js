/* eslint-disable no-undef */
describe("View users", () => {
  it("should render list of users when they load", () => {
    cy.server();
    cy.route({
      method: "GET",
      url: "/api/v2/users",
      response: {
        data: [
          {
            email: "ggg@gmail.com",
            id: 12,
            isAdmin: false,
            username: "teeeee"
          },
          {
            email: "gyy@gmail.com",
            id: 12,
            isAdmin: false,
            username: "teeeee"
          }
        ],
        status: 200
      }
    });
    cy.visit("/listusers");
    cy.get("[data-test=each-user]").should("have.length", 2);
  });
});
