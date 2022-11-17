import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { UserStructure } from "../redux/features/loadUsers/types";

const userFactory = Factory.define<UserStructure>(() => ({
  id: faker.random.alphaNumeric(10),
  username: faker.internet.userName(),
  token: faker.random.alphaNumeric(10),
}));

export const getRandomUser = () => userFactory.build();

export const getRandomUserList = (number: number) =>
  userFactory.buildList(number);
