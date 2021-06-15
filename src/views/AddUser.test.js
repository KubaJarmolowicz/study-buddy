import React from "react";
import { renderWithProviders } from "helpers/renderWithProviders";
import { screen, fireEvent } from "@testing-library/react";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";

describe("Testing InputWithButton", () => {
	it("Adds new user to the list", () => {
		renderWithProviders(
			<>
				<AddUser />
				<Dashboard />
			</>
		);

		fireEvent.change(screen.getByTestId("Name"), {
			target: { value: "Bruh Bruhowski" },
		});
		fireEvent.change(screen.getByTestId("Attendance"), {
			target: { value: "69%" },
		});
		fireEvent.change(screen.getByTestId("Average"), {
			target: { value: "2.9" },
		});

		fireEvent.click(screen.getByText("Consent"));
		fireEvent.click(screen.getByText("Add"));

		screen.getByText("Bruh Bruhowski");
	});

	it("Prevents adding new user without their consent", () => {
		renderWithProviders(
			<>
				<AddUser />
				<Dashboard />
			</>
		);

		fireEvent.change(screen.getByTestId("Name"), {
			target: { value: "Bruh Bruhowski" },
		});
		fireEvent.change(screen.getByTestId("Attendance"), {
			target: { value: "69%" },
		});
		fireEvent.change(screen.getByTestId("Average"), {
			target: { value: "2.9" },
		});

		fireEvent.click(screen.getByText("Add"));

		const unwantedUser = screen.queryByText("Bruh Bruhowski");
		expect(unwantedUser).not.toBeInTheDocument();
	});
});
