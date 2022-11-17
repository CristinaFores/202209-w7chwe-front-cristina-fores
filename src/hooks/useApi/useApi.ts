import { useCallback } from "react";
import { useAppDispatch } from "../../redux/hooks";
import axios from "axios";
import { loadUserListActionCreator } from "../../redux/features/loadUsers/userLoad";
import { UsersApi } from "../../redux/features/loadUsers/types";

const useApi = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;
  const token = localStorage.getItem("token");

  const loadUsers = useCallback(async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`, {
        headers: {
          "Content-type": "text/plain",
          Authorization: "Bearer " + token,
        },
      });

      const apiResponse: UsersApi = await response.data;

      dispatch(loadUserListActionCreator(apiResponse.users));
    } catch (error: unknown) {
      throw new Error(`There was an error: ${(error as Error).message}`);
    }
  }, [apiUrl, token, dispatch]);

  return { loadUsers };
};

export default useApi;
