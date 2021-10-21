import React from "react";

import { Wrapper } from "./Root.styles";
import { Switch, Route, Redirect } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Dashboard from "./Dashboard";
import FormField from "../components/molecules/FormField/FormField";
import { Button } from "../components/atoms/Button/Button";
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import ErrorMessage from "../components/molecules/ErrorMessage/ErrorMessage";
import { useError } from "../hooks/useError";
import Notes from "./Notes";

const AuthenticatedApp = () => {
	return (
		<MainTemplate>
			<Wrapper>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/group" />
					</Route>
					<Route path="/group/:id?">
						<Dashboard />
					</Route>
					<Route path="/notes">
						<Notes />
					</Route>
				</Switch>
			</Wrapper>
		</MainTemplate>
	);
};

const UnauthenticatedApp = () => {
	const { signIn } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<form
			onSubmit={handleSubmit(signIn)}
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}
		>
			<FormField label="login" name="login" id="login" {...register("login")} />
			{errors.login && <span>Login is required.</span>}
			<FormField
				label="password"
				name="password"
				id="password"
				type="password"
				{...register("password")}
			/>
			{errors.password && <span>Password is required.</span>}
			<Button type="submit">Sign in</Button>
		</form>
	);
};

const Root = () => {
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
