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
const mockUser = {
  username: "habersimesaleya",
  password: "1234567890",
};

jest.mock("jwt-decode", () => {
  return () => ({ username: mockUser.username } as JwtPayloadCustom);
});

describe("Given the useUser custom hook", () => {
  describe("when its method login is invoked", () => {
    test("Then its should  call the dispatch", async () => {
      const {
        result: {
          current: { login },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const dispatch = useAppDispatch();
      await login(mockUser);

      expect(dispatch).toHaveBeenCalledTimes(1);
    });
  });
});
