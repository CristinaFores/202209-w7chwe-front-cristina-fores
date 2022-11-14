import { User } from "../redux/features/userSlice/types";

import { mockInitialStore } from "../mocks/storeMock";
import ProviderWrapper from "../mocks/ProviderWrapper";
import { renderHook } from "@testing-library/react";
import useToken from "./useToken";
import { JwtPayloadCustom } from "../utils/decodeToken";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockUser: User = {
  username: "habersimesaleya",
  id: "1234",
  token: "kitten",
};

jest.mock("jwt-decode", () => {
  return () =>
    ({ id: mockUser.id, username: mockUser.username } as JwtPayloadCustom);
});

const mockLocalStorage = (() => {
  let store = {} as Storage;

  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {} as Storage;
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("token", "kitten");
});

afterAll(() => {
  mockLocalStorage.clear();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given the useToken custom hook", () => {
  describe("When its method getToken is invoked", () => {
    test("Then its should  call the dispatch", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });
});
