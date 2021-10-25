import { Button } from "components/atoms/Button/Button";
import FormField from "components/molecules/FormField/FormField";
import { useAuth } from "hooks/useAuth";
import React from "react";
import { useForm } from "react-hook-form";
import { FormWrapper } from "./UnauthenticatedApp.styles";

const UnauthenticatedApp = () => {
	const { signIn } = useAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<FormWrapper onSubmit={handleSubmit(signIn)}>
			<FormField
				label="login"
				//name="login"
				id="login"
				{...register("login")}
			/>
			{errors.login && <span>Login is required.</span>}
			<FormField
				label="password"
				//name="password"
				id="password"
				type="password"
				{...register("password")}
			/>
			{errors.password && <span>Password is required.</span>}
			<Button type="submit">Sign in</Button>
		</FormWrapper>
	);
};

export default UnauthenticatedApp;
