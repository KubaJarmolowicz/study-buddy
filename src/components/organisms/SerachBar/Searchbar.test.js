import { render, screen, fireEvent } from "test-utils";
import { SearchBar } from "./SearchBar";
import { waitForElementToBeRemoved } from "@testing-library/react";

describe("Searchbar test suite", () => {
	it("Renders the component", () => {
		render(<SearchBar />);
		screen.getByText("Teacher");
		screen.getByPlaceholderText("Search");
	});

	it("Displays users when searchphrase is matching", async () => {
		render(<SearchBar />);

		const input = screen.getByPlaceholderText("Search");

		fireEvent.change(input, { target: { value: "Lo" } });

		const adam = await screen.findByText(/Lowell/);

		const krysia = screen.queryByText("Krysia");

		expect(adam).toBeInTheDocument();
		expect(krysia).not.toBeInTheDocument();
	});

	it("Hides the list when searchphrase is removed", async () => {
		render(<SearchBar />);

		const input = screen.getByPlaceholderText("Search");

		const searchResults = screen.queryByTestId("search-results");

		fireEvent.change(input, { target: { value: "Lo" } });

		expect(searchResults).toBeInTheDocument();

		const adam = await screen.findByText(/Lowell/);

		expect(adam).toBeInTheDocument();

		fireEvent.change(input, { target: { value: "" } });

		const unwantedAdam = screen.queryByText("Adam Romański");

		// eslint-disable-next-line jest/valid-expect-in-promise
		waitForElementToBeRemoved(unwantedAdam).then(() => {
			expect(searchResults).not.toBeInTheDocument();
		});
	});
});
