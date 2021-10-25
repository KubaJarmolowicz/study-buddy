import { RequestParams, RestRequest } from "msw";
import { LoginBody } from "./handlers/auth";

export const authenticateRequest = (
	req: RestRequest<LoginBody, RequestParams>
) => {
	const token = localStorage.getItem("__be_token__") || null;
	const userToken = req.headers.get("Authorization")?.replace("Bearer ", "");

	return token === userToken;
};
