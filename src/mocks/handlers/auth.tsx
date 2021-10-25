import { rest } from "msw";
import { db } from "mocks/db";
import { authenticateRequest } from "mocks/helpers";

interface IUser {
	id: string;
	name: string;
	login: string;
	password: string;
}

const sanitizeUser = (user: IUser) => {
	const { password, ...rest } = user;
	return rest;
};

export interface LoginBody {
	login: string;
	password: string;
}
interface LoginResponseWithNewToken {
	id: string;
	login: string;
	name: string;
	token: string;
}

type AuthorizedLoginResponse = Omit<LoginResponseWithNewToken, "token">;

export const auth = [
	rest.post<LoginBody, LoginResponseWithNewToken>("/login", (req, res, ctx) => {
		const user = db.teacher.findFirst({
			where: {
				login: {
					equals: req.body.login,
				},
			},
		});
		if (user && user.password === req.body.password) {
			const token = btoa(user.login);
			localStorage.setItem("__be_token__", token);
			return res(ctx.status(200), ctx.json({ ...sanitizeUser(user), token }));
		}
		return res(ctx.status(403));
	}),

	rest.get<LoginBody, AuthorizedLoginResponse>("/me", (req, res, ctx) => {
		if (authenticateRequest(req)) {
			const user = db.teacher.getAll()[0];
			return res(ctx.status(200), ctx.json({ ...sanitizeUser(user) }));
		}
		return res(ctx.status(401));
	}),
];

export type AuthHandlersType = typeof auth;
