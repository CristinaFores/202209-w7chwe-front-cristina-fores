import { renderHook } from "@testing-library/react";
import mockLoadUsersResponse from "../../mocks/listUserMock";
import ProviderWrapper from "../../mocks/ProviderWrapper";
import { loadUserListActionCreator } from "../../redux/features/loadUsers/userLoad";
import { useAppDispatch } from "../../redux/hooks";

import useApi from "./useApi";

jest.mock("../../redux/hooks", () => {
  const mockDispatch = jest.fn();
  return {
    useAppDispatch: () => mockDispatch,
  };
});

describe("Given the useApi custom hook", () => {
  describe("when its method loadUsers is invoked", () => {
    test("Then its should  call the dispatch , and to show a users recieves", async () => {
      const {
        result: {
          current: { loadUsers },
        },
      } = renderHook(() => useApi(), {
        wrapper: ProviderWrapper,
      });

      const dispatch = useAppDispatch();
      await loadUsers();

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(dispatch).toHaveBeenCalledWith(
        loadUserListActionCreator(mockLoadUsersResponse)
      );
    });
  });
});
