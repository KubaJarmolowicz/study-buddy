import React from "react";
import { renderWithProviders } from "helpers/renderWithProviders";
import { screen, fireEvent } from "@testing-library/react";
import AddUser from "./AddUser";
import Dashboard from "./Dashboard";

describe("Testing InputWithButton", () => {
	it("Checks if component renders", () => {
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

		screen.getByText("Bruh Bruhowski");
	});
});
