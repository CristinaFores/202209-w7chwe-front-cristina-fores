import jwtDecode from "jwt-decode";

export interface JwtPayloadCustom {
  id: string;
  username: string;
}

const decodeToken = (token: string) => {
  const jwtPayload: JwtPayloadCustom = jwtDecode(token);

  return {
    token,
    id: jwtPayload.id,
    username: jwtPayload.username,
  };
};

export default decodeToken;
