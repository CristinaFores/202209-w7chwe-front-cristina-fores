export interface UserCredencials {
  password: string;
  username: string;
}

export interface JwtPayloadCustom {
  id: string;
  username: string;
}
