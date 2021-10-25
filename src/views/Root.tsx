import React, { FC } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";

import { useAuth } from "../hooks/useAuth";
import ErrorMessage from "../components/molecules/ErrorMessage/ErrorMessage";
import { useError } from "../hooks/useError";

const Root: FC = () => {
	const { user } = useAuth();
	const { error } = useError();

	return (
		<>
			{error && <ErrorMessage message={error} />}
			{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
		</>
	);
};

export default Root;
