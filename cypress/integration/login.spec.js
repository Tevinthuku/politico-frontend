/* eslint-disable no-undef */

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Input elements are rendered", () => {
    cy.get('[data-test="email"]').should("have.length", 1);
    cy.get('[data-test="password"]').should("have.length", 1);
    cy.get('[data-test="submit"]').should("have.length", 1);
  });
  it("should update input fields", () => {
    const typedEmail = "newemail@gmail.com";
    const typedPassword = "pass123";
    cy.get("[data-test=email]")
      .type(typedEmail)
      .should("have.value", typedEmail);

    cy.get("[data-test=password]")
      .type(typedPassword)
      .should("have.value", typedPassword);
  });
  it("should display error when user enters wrong credentials", () => {
    const typedEmail = "newemail@gmail.com";
    const typedPassword = "pass123";

    cy.server();
    cy.route({
      method: "POST",
      url: "/api/v2/auth/signin",
      status: 404,
      response: {
        status: 404,
        error: "User not found"
      }
    });
    cy.get("[data-test=email]")
      .type(typedEmail)
      .should("have.value", typedEmail);

    cy.get("[data-test=password]")
      .type(typedPassword)
      .should("have.value", typedPassword);

    cy.get("[data-test=submit]").click();
    cy.get("[data-test=snack-message]").contains("User not found");
  });
  it("should redirect to home page if user logs in successfully", () => {
    Cypress.LocalStorage.clear = function(keys, ls, rs) {};
    const response = {
      data: {
        message: "Logged in successfully",
        token:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRldmlua3VAZ21haWwuY29tIiwiaXNBZG1pbiI6ZmFsc2V9.L-KVDPJUOu-uy3DiMc_P1u40yvDr5EIC6aY0bQgVCuA",
        user: {
          id: 2,
          username: "Tevyn"
        }
      },
      status: 200
    };

    const typedEmail = "tevyn@gmail.com";
    const typedPassword = "pass123";

    cy.server();
    cy.route({
      method: "POST",
      url: "/api/v2/auth/signin",
      status: 200,
      response
    });
    cy.get("[data-test=email]")
      .type(typedEmail)
      .should("have.value", typedEmail);

    cy.get("[data-test=password]")
      .type(typedPassword)
      .should("have.value", typedPassword);

    cy.get("[data-test=submit]").click();
    cy.window().then(window => {
      expect(window.localStorage.getItem("__REDUX__STORE__")).to.eq(
        JSON.stringify({
          user: response
        })
      );
    });
    cy.url().should("eq", "http://localhost:9000/");
  });
});
