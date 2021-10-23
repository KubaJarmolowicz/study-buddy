describe("Study buddy app", () => {
	it("Renders unauthenticated app", () => {
		cy.visit("/");
		cy.findByText(/login/i).should("exist");
	});

	it("Allows user to authenticate", () => {
		cy.visit("/");
		cy.findByText(/login/i).should("exist");
		cy.findByText(/login/i).click().type("a@a.com");

		cy.findByText(/password/i).should("exist");
		cy.findByText(/password/i)
			.click()
			.type("123");

		cy.findByText(/sign in/i).click();

		cy.findByText(/logout/i).should("exist");
	});
});
