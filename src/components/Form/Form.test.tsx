import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockInitialStore } from "../../mocks/storeMock";
import Form from "./Form";
const mockSubmit = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => {
  return () => ({
    login: mockSubmit,
  });
});
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

describe("Given Form component", () => {
  describe("When  its render Form", () => {
    test("Then its should a return a 1 input con texto, one input and  one link", () => {
      const nameInput = "Nombre";
      render(
        <BrowserRouter>
          <Provider store={mockInitialStore}>
            <Form />
          </Provider>
        </BrowserRouter>
      );

      const expectedInput = screen.getByRole("textbox", {
        name: nameInput,
      });
      const expectPasswordInput = screen.getByRole("button");
      const expectLink = screen.getByRole("link");

      expect(expectedInput).toBeInTheDocument();

      expect(expectPasswordInput).toBeInTheDocument();
      expect(expectLink).toBeInTheDocument();
    });

    describe("When it's rendered button it's clicked ,inside the form", () => {
      test("Then the form should be submited", async () => {
        render(
          <BrowserRouter>
            <Provider store={mockInitialStore}>
              <Form />
            </Provider>
          </BrowserRouter>
        );

        const buttonCreate = screen.getByRole("button");

        await userEvent.click(buttonCreate);

        expect(mockSubmit).toHaveBeenCalled();
      });
    });
  });
});
