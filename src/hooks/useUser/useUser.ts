import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { JwtPayloadCustom, UserCredencials } from "../../types/types";
import decodeToken from "../../utils/decodeToken";

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
    dispatch(
      loginUserActionCreator({
        ...userLogger,
        username: userData.username,
        token: token,
      })
    );
    window.localStorage.setItem("token", token);
  };

  const register = async (userData: UserCredencials) => {
    const responseData = await fetch(`${apiUrl}/users/register`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json",
      },
    });

    const { token } = await responseData.json();
    window.localStorage.setItem("token", token);

    return true;
  };
  return {
    login,
    register,
  };
};

export default useUser;
