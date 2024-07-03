import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserLoginForm from "@/app/components/user-login-form";

describe("User login form", () => {
  it("renders a form", () => {
    render(<UserLoginForm />);

    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();

    expect(
      screen.getByRole("textbox", { name: /password/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
