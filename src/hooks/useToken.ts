import { useCallback } from "react";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";

import { useAppDispatch } from "../redux/hooks";
import decodeToken from "../utils/decodeToken";

const useToken = () => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const user = decodeToken(token);
      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  return { getToken };
};

export default useToken;
