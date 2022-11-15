import { rest } from "msw";

const url = process.env.REACT_APP_API_URL;

export const handlers = [
  rest.post(`${url}/users/login`, async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ token: "kitten" }));
  }),
  rest.post(`${url}/users/register`, async (req, res, ctx) => {
    return res(ctx.status(201), ctx.json({}));
  }),
];
