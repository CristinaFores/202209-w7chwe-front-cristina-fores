import { loadUserListActionCreator, userListReducer } from "./userLoad";

export const userListInitialState = {
  list: [],
};

export const expectList = [
  {
    username: "cris",
    password: "12345",
  },
  {
    username: "cristina",
    password: "123456",
  },
  {
    username: "nala",
    password: "123456",
  },
  {
    username: "lluna",
    password: "123456",
  },
];
describe("Given userListReducer", () => {
  describe("When it recieves an empty initial state and 'loadUserList' action", () => {
    test("Then it should return a new state with the users received", () => {
      const loadUserListAction = loadUserListActionCreator(expectList);

      const currentUserListState = {
        list: [],
      };
      const expectedUserListState = {
        list: expectList,
      };

      const newUserListState = userListReducer(
        currentUserListState,
        loadUserListAction
      );

      expect(newUserListState).toStrictEqual(expectedUserListState);
    });
  });
});
