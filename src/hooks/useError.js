import React, { useCallback, useContext, useState } from "react";

const ErrorContext = React.createContext({
	error: "",
	dispatchError: () => {},
});

export const ErrorProvider = ({ children }) => {
	const [error, setError] = useState(null);

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
