import React from "react";
import { render, screen } from "test-utils";
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

		render(<NewsSection />);

		await screen.findByText(/Sorry/);
	});

	it("Loads the articles", async () => {
		mock.onPost(URL, { query }).reply(200, {
			data: { allArticles: [{ id: "1", title: "Test", content: "Test" }] },
		});

		render(<NewsSection />);

		await screen.findAllByText(/Test/);
	});

	it("Displays Loading message", () => {
		mock.onPost(URL, { query }).reply(200, {
			data: { allArticles: [{ id: "1", title: "Test", content: "Test" }] },
		});

		render(<NewsSection />);

		screen.getByText(/Loading/);
	});

	it("Displays loading message and then error message if server does not respond", async () => {
		mock.onPost(URL, { query }).reply(500);

		render(<NewsSection />);

		const loadingMsg = screen.queryByText(/Loading/);

		expect(loadingMsg).toBeInTheDocument();

		await screen.findByText(/Sorry/);

		expect(loadingMsg).not.toBeInTheDocument();
	});
});
