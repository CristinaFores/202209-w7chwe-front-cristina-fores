import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";
const mockSubmit = jest.fn();

jest.mock("../../hooks/useUser", () => {
  return () => ({
    login: mockSubmit,
  });
});

describe("Given Form component", () => {
  describe("When  its render", () => {
    test("Then its should a return a 1 input con texto, one input and  one link", () => {
      const nameInput = "Nombre";

      render(<Form />);

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
        render(<Form />);

        const buttonCreate = screen.getByRole("button");

        await userEvent.click(buttonCreate);

        expect(mockSubmit).toHaveBeenCalled();
      });
    });
  });
});
