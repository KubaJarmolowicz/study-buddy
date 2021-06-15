import React from "react";
import { screen } from "@testing-library/react";
import { renderWithProviders } from "helpers/renderWithProviders";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import NewsSection from "./NewsSection";
import { query, URL } from "./NewsSection";

const mock = new MockAdapter(axios);

describe("News Section tests", () => {
	afterEach(() => {
		mock.reset();
	});

	it("Displays the error message when articles are not loaded", async () => {
		mock.onPost(URL, { query }).reply(500);

		renderWithProviders(<NewsSection />);

		await screen.findByText(/Sorry/);
	});

	it("Loads the articles", async () => {
		mock.onPost(URL, { query }).reply(200, {
			data: { allArticles: [{ id: "1", title: "Test", content: "Test" }] },
		});

		renderWithProviders(<NewsSection />);

		await screen.findAllByText(/Test/);
	});

	it("Displays Loading message", () => {
		mock.onPost(URL, { query }).reply(200, {
			data: { allArticles: [{ id: "1", title: "Test", content: "Test" }] },
		});

		renderWithProviders(<NewsSection />);

		screen.getByText(/Loading/);
	});

	it("Displays loading message and then error message if server does not respond", async () => {
		mock.onPost(URL, { query }).reply(500);

		renderWithProviders(<NewsSection />);

		const loadingMsg = screen.queryByText(/Loading/);

		expect(loadingMsg).toBeInTheDocument();

		await screen.findByText(/Sorry/);

		expect(loadingMsg).not.toBeInTheDocument();
	});
});
