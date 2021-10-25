import { render, screen, fireEvent } from "test-utils";
import { SearchBar } from "./SearchBar";

describe("Searchbar test suite", () => {
	it("Renders the component", () => {
		render(<SearchBar />);
		screen.getByText("Teacher");
		screen.getByPlaceholderText("Search");
	});

	it("Displays users when searchphrase is matching", async () => {
		render(<SearchBar />);

		const input = screen.getByPlaceholderText("Search");

		fireEvent.change(input, { target: { value: "Ho" } });

		const expectedUser = await screen.findByText(/Hosea/);

		const krysia = screen.queryByText("Krysia");

		expect(expectedUser).toBeInTheDocument();
		expect(krysia).not.toBeInTheDocument();
	});
});
