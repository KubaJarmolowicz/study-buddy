import React from "react";
import {
	SearchbarWrapper,
	StatusInfo,
	ActionAreaWrapper,
} from "./SearchBar.styles";
import { Input } from "components/atoms/Input/Input.styles";
import ResultList from "./ResultList";

const SearchBar = () => {
	return (
		<SearchbarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<p>
					<strong>Teacher</strong>
				</p>
			</StatusInfo>
			<ActionAreaWrapper>
				<Input />
				<ResultList />
			</ActionAreaWrapper>
		</SearchbarWrapper>
	);
};

export default SearchBar;
