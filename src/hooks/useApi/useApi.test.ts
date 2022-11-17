import { renderHook } from "@testing-library/react";
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

      const list = [
        { id: "ohlya4yvyt", token: "8onmp9qs7z", username: "Ahmad.Wuckert57" },
        { id: "n8g1hsospy", token: "pzy5c8v02l", username: "Khalil88" },
        { id: "ck1y2an4zg", token: "1algbx44qe", username: "Brooke_Pagac" },
        { id: "xux9uslw9c", token: "b5dhl8o34w", username: "Dandre.Tromp90" },
        { id: "9jjd1l2bfn", token: "70h8yh8p8p", username: "Erling_Nader" },
      ];

      const expectList = {
        payload: [
          {
            id: "ohlya4yvyt",
            token: "8onmp9qs7z",
            username: "Ahmad.Wuckert57",
          },
          { id: "n8g1hsospy", token: "pzy5c8v02l", username: "Khalil88" },
          { id: "ck1y2an4zg", token: "1algbx44qe", username: "Brooke_Pagac" },
          { id: "xux9uslw9c", token: "b5dhl8o34w", username: "Dandre.Tromp90" },
          { id: "9jjd1l2bfn", token: "70h8yh8p8p", username: "Erling_Nader" },
        ],
        type: "userList/loadUserList",
      };

      const dispatch = useAppDispatch();
      await loadUsers();

      expect(dispatch).toHaveBeenCalledTimes(1);
      expect(expectList).toEqual(loadUserListActionCreator(list));
    });
  });
});
