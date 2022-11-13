import { User } from "../redux/features/userSlice/types";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../redux/hooks";
import decodeToken, { JwtPayloadCustom } from "../utils/decodeToken";

export interface UserCredencials {
  password: string;
  username: string;
}

const useUser = () => {
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const login = async (userData: UserCredencials) => {
    const response = await fetch(`${apiUrl}/users/login`, {
      method: "POST",
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { token } = await response.json();

    const userLogger: JwtPayloadCustom = decodeToken(token);
    dispatch(loginUserActionCreator({ ...userLogger, token }));
    localStorage.setItem("token", token);
  };
  return {
    login,
  };
};

export default useUser;
