import React, { ReactNode, useCallback, useContext, useState } from "react";

interface IErrorContext {
	error: string | undefined;
	dispatchError: (message?: string) => void;
}

const ErrorContext = React.createContext<IErrorContext>({
	error: "",
	dispatchError: () => {},
});

interface ErrorProviderProps {
	children: ReactNode;
}

export const ErrorProvider = ({ children }: ErrorProviderProps) => {
	const [error, setError] = useState<string | undefined>(undefined);

	const dispatchError = useCallback(message => {
		setError(message);
		setTimeout(() => {
			setError("");
		}, 7000);
	}, []);

	return (
		<ErrorContext.Provider value={{ error, dispatchError }}>
			{children}
		</ErrorContext.Provider>
	);
};

export const useError = () => {
	const errorCtx = useContext(ErrorContext);

	if (!errorCtx) {
		throw Error("useError must be used within ErrorProvider");
	}

	return errorCtx;
};
