import React from "react";
import { shallow } from "enzyme";
import Routes, { Home, Login, Listusers, Nomatch, Listparties } from "./routes";
import { Route } from "react-router-dom";

let pathMap = {};
describe("routes using array of routers", () => {
  beforeAll(() => {
    const component = shallow(<Routes />);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
  });
  test("should show Home component for / router (getting array of routes)", () => {
    expect(pathMap["/"]).toBe(Home);
  });
  test("should show No match component for route not defined", () => {
    expect(pathMap["undefined"]).toBe(Nomatch);
  });
  test("should render login component for the /login route", () => {
    expect(pathMap["/login"]).toBe(Login);
  });

  test("should render listofusers page for the /listusers route", () => {
    expect(pathMap["/listusers"]).toBe(Listusers);
  });

  test("should render listofparties page for the /listparties route", () => {
    expect(pathMap["/listparties"]).toBe(Listparties);
  });
});
