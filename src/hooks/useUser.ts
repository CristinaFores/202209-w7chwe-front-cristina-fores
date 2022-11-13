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

    const { accessToken } = await response.json();

    const userLogger: JwtPayloadCustom = decodeToken(accessToken);

    dispatch(
      loginUserActionCreator({
        ...userLogger,
        username: userData.username,
        token: accessToken,
      })
    );
    window.localStorage.setItem("token", accessToken);
  };
  return {
    login,
  };
};

export default useUser;
