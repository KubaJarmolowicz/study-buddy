import axios from "axios";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { useError } from "./useError";

interface IUser {
	id: string;
	name: string;
	login: string;
	token: string;
}

interface IAuthContext {
	user: IUser | undefined;
	signIn: (params: signInParams) => Promise<void>;
	signOut: () => void;
}

export const AuthContext = React.createContext<IAuthContext>({
	user: undefined,
	signIn: (params: signInParams) => Promise.reject(),
	signOut: () => {},
});

interface IAuthProviderProps {
	children: ReactNode;
}

interface signInParams {
	login: string;
	password: string;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
	const [user, setUser] = useState<IUser | undefined>(undefined);

	const { dispatchError } = useError();

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (token) {
			(async () => {
				try {
					const me = await axios.get("/me", {
						headers: {
							authorization: `Bearer ${token}`,
						},
					});
					setUser(me.data);
				} catch (e) {
					dispatchError();
				}
			})();
		}
	}, []);

	const signIn = async ({ login, password }: signInParams) => {
		try {
			const response = await axios.post("/login", {
				login,
				password,
			});

			setUser(response.data);
			localStorage.setItem("token", response.data.token);
		} catch (e) {
			dispatchError("Please provide a valid username and password");
		}
	};

	const signOut = () => {
		setUser(undefined);
		localStorage.removeItem("token");
	};
	return (
		<AuthContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const auth = useContext(AuthContext);
	if (!auth) {
		throw Error("useAuth needs to be used within AuthContext");
	}

	return auth;
};
