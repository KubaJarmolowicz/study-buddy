import React from "react";
import { render, screen, fireEvent, waitFor } from "test-utils";
import Root from "./Root";

describe("Root component", () => {
	it("Renders the Root component as an unauthenticated user", () => {
		render(<Root />);
		const loginLabel = screen.queryByText("login");
		expect(loginLabel).toBeInTheDocument();
	});

	it("Displays the error message upon providing invalid credentials", async () => {
		render(<Root />);
		const login = screen.getByLabelText("login");
		const password = screen.getByLabelText("password");

		fireEvent.change(login, { target: { value: "a@b.com" } });
		fireEvent.change(password, { target: { value: "1234" } });

		fireEvent.click(screen.queryByText("Sign in"));

		await waitFor(() => screen.getByText(/Oops!/));
	});

	it("Displays authenticated app after user logs in", async () => {
		render(<Root />);
		const login = screen.getByLabelText("login");
		const password = screen.getByLabelText("password");

		fireEvent.change(login, { target: { value: "a@a.com" } });
		fireEvent.change(password, { target: { value: "123" } });

		fireEvent.click(screen.queryByText("Sign in"));

		await waitFor(() => screen.getByText(/Logout/));
	});

	it("Logs the user in, then out and deletes the token", async () => {
		render(<Root />);
		const login = screen.getByLabelText("login");
		const password = screen.getByLabelText("password");

		fireEvent.change(login, { target: { value: "a@a.com" } });
		fireEvent.change(password, { target: { value: "123" } });

		fireEvent.click(screen.queryByText("Sign in"));

		await waitFor(() => screen.getByText(/Logout/));

		fireEvent.click(screen.getByText(/Logout/));

		await waitFor(() => screen.getByLabelText("login"));

		const token = window.localStorage.getItem("token");

		expect(token).toBeNull();
	});
});
