import React, { ReactChild } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../hooks/useAuth";
import { ErrorProvider } from "../hooks/useError";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Provider } from "react-redux";
import { store } from "store";

interface IProviders {
	children: ReactChild;
}

const AppProviders = ({ children }: IProviders) => {
	return (
		<Provider store={store}>
			<Router>
				<ThemeProvider theme={theme}>
					<GlobalStyle />
					<ErrorProvider>
						<AuthProvider>{children}</AuthProvider>
					</ErrorProvider>
				</ThemeProvider>
			</Router>
		</Provider>
	);
};

export default AppProviders;
