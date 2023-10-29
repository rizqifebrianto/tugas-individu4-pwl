import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render the title", () => {
    render(<App />);
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should render the login form", () => {
    render(<App />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("should redirect to the home page after login", () => {
    const email = "emirssyah13@gmail.com";
    const password = "emirss1234";

    render(<App />);
    const loginButton = screen.getByText("Login");
    loginButton.click();

    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("should not redirect to the home page after login with invalid credentials", () => {
    const email = "invalid@example.com";
    const password = "invalid";

    render(<App />);
    const loginButton = screen.getByText("Login");
    loginButton.click();

    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});
