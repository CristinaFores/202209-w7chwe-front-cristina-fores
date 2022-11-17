export interface UserStructure {
  username: string;
}

export interface UserListState {
  list: UserStructure[];
}

export interface UsersApi {
  users: UserStructure[];
}
