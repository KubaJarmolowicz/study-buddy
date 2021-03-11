import React from "react";
import { render } from "@testing-library/react";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import UsersProvider from "providers/UsersProvider";

export const renderWithProviders = children => {
	return render(
		<ThemeProvider theme={theme}>
			<UsersProvider>{children}</UsersProvider>
		</ThemeProvider>
	);
};
