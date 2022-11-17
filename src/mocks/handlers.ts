import { rest } from "msw";
import mockLoadUsersResponse from "./listUserMock";

const url = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}/users/login`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "kitten" }));
  }),
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}));
  }),
  rest.get(`${url}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockLoadUsersResponse));
  }),
];
