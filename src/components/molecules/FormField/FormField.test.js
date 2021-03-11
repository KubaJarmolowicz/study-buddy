import React from "react";
import { renderWithProviders } from "helpers/renderWithProviders";
import FormField from "./FormField";

describe("Testing InputWithButton", () => {
	it("Checks if component renders", () => {
		renderWithProviders(<FormField label="name" name="name" id="name" />);
	});
});
