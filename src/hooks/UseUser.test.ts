import { renderHook } from "@testing-library/react";
import ProviderWrapper from "../mocks/ProviderWrapper";
import { useAppDispatch } from "../redux/hooks";
import { JwtPayloadCustom } from "../utils/decodeToken";
import useUser from "./useUser";

jest.mock(".././redux/hooks", () => {
  const mockDispatch = jest.fn();
  return {
    useAppDispatch: () => mockDispatch,
  };
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => jest.fn(),
}));

const mockUser = {
  username: "habersimesaleya",
  password: "1234567890",
};

jest.mock("jwt-decode", () => {
  return () => ({ username: mockUser.username } as JwtPayloadCustom);
});

describe("Given the useUser custom hook login", () => {
  describe("when its method login is invoked", () => {
    test("Then its should  call the dispatch", async () => {
      const {
        result: {
          current: { login },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const mockUser = {
        username: "habersimesaleya",
        password: "1234567890",
      };

      const dispatch = useAppDispatch();
      await login(mockUser);

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
describe("Given the useUser custom hooks register", () => {
  describe("when its method register is invoked", () => {
    test.only("Then its should  call the dispatch", async () => {
      const {
        result: {
          current: { register },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user = {
        username: "habersimesaleya",
        password: "1234567890",
      };
      const registerOk = true;

      global.fetch = jest.fn(async () =>
        Promise.resolve({
          json: async () => Promise.resolve({ user }),
        })
      ) as jest.Mock;

      const response = await register(user);

      expect(response).toBe(registerOk);
    });
  });
});
