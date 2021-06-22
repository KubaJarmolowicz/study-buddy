import {render, screen, fireEvent} from "test-utils";
import {setupServer} from "msw/node";
import { handlers } from "mocks/handlers";
import { SearchBar } from "./SearchBar";
import { waitForElementToBeRemoved } from "@testing-library/react";

const server = setupServer(...handlers);

describe('Searchbar test suite',()=>{

    beforeAll(()=> server.listen());
    afterEach(()=> server.resetHandlers());
    afterAll(()=> server.close())


    it('Renders the component', ()=>{
        render(<SearchBar/>)
        screen.getByText("Teacher");
        screen.getByPlaceholderText("Search");
    })

    it('Displays users when searchphrase is matching', async ()=>{
        render(<SearchBar/>)

        const input = screen.getByPlaceholderText("Search");

        fireEvent.change(input, {target: {value: "ad"}});

        const adam = await screen.findByText("Adam Romański");
        
        const krysia = screen.queryByText("Krysia");

        expect(adam).toBeInTheDocument()
        expect(krysia).not.toBeInTheDocument()
       
    })

    
    it('Hides the list when searchphrase is removed', async ()=>{
        render(<SearchBar/>)

        const input = screen.getByPlaceholderText("Search");

        const searchResults = screen.queryByTestId("search-results");

        fireEvent.change(input, {target: {value: "ad"}});

        expect(searchResults).toBeInTheDocument()

        const adam = await screen.findByText("Adam Romański");

        expect(adam).toBeInTheDocument()

       fireEvent.change(input, {target: {value: ""}});

       const unwantedAdam = screen.queryByText("Adam Romański");

       // eslint-disable-next-line jest/valid-expect-in-promise
       waitForElementToBeRemoved(unwantedAdam).then(()=>{
            expect(searchResults).not.toBeInTheDocument()
       });

       
    })
})