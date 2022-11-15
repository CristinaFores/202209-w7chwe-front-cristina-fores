import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { mockInitialStore } from "../../mocks/storeMock";
import RegisterForm from "./RegisterForm";

jest.mock("../../hooks/useUser", () => {
  const register = jest.fn();
  return () => ({ register });
});

describe("Given Form component", () => {
  describe("When  its render Form", () => {
    test("Then its should a return a 1 input con texto, one input and  one link", () => {
      const nameInput = "Nombre";
      render(
        <BrowserRouter>
          <Provider store={mockInitialStore}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const expectedInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const expectPasswordInput = screen.getByRole("button");

      expect(expectedInput).toBeInTheDocument();

      expect(expectPasswordInput).toBeInTheDocument();
    });

    describe("When it's rendered button it's clicked ,inside the RegisterForm button", () => {
      test("Then the form should be submited a call a register function", async () => {
        const { register } = useUser();
        render(
          <BrowserRouter>
            <Provider store={mockInitialStore}>
              <RegisterForm />
            </Provider>
          </BrowserRouter>
        );

        const buttonCreate = screen.getByRole("button");

        await userEvent.click(buttonCreate);

        expect(register).toHaveBeenCalled();
      });
    });
  });
});
