describe("Notes View", () => {
	beforeEach(() => {
		cy.visit("/");
		cy.findByText(/login/i).should("exist");
		cy.findByText(/login/i).click().type("a@a.com");

		cy.findByText(/password/i).should("exist");
		cy.findByText(/password/i)
			.click()
			.type("123");

		cy.findByText(/sign in/i).click();
	});

	it("Allows to create a new note and delete it", () => {
		cy.visit("/notes");

		cy.findByText(/title/i).click().type("Morda nomalnie legancki tyt00l");
		cy.findByText(/content/i)
			.click()
			.type("Notateczka jak sie patrzy cnie");

		cy.findByText(/add/i).click();

		cy.findAllByText(/morda/i).should("exist");

		//cy.findAllByLabelText(/delete/i).should("exist");

		cy.findAllByText(/morda/i)
			.first()
			.parent()
			.findByLabelText(/delete/i)
			.click();

		cy.findByText(/morda/i).should("not.exist");
	});
});
