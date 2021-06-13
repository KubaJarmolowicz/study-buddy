import React from "react";
import { SearchbarWrapper, StatusInfo } from "./SearchBar.styles";
import { Input } from "components/atoms/Input/Input.styles";

const SearchBar = () => {
	return (
		<SearchbarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<p>
					<strong>Teacher</strong>
				</p>
			</StatusInfo>
			<Input />
		</SearchbarWrapper>
	);
};

export default SearchBar;
