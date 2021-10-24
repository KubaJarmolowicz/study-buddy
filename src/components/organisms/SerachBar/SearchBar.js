import { Input } from "components/atoms/Input/Input";
import React, { useState } from "react";
import debounce from "lodash/debounce";
import { useCombobox } from "downshift";
import {
	SearchBarWrapper,
	SearchResults,
	SearchWrapper,
	StatusInfo,
	SearchResultsItem,
} from "components/organisms/SerachBar/SearchBar.styles";
import { useFindStudentsQuery } from "store/api/students";

export const SearchBar = () => {
	const [searchPhrase, setSearchPhrase] = useState("");
	const { data, isLoading } = useFindStudentsQuery({ searchPhrase });

	const getMatchingStudents = debounce(({ inputValue }) => {
		setSearchPhrase(inputValue);
	}, 500);

	const {
		isOpen,
		selectedItem,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox({
		items: data?.students ?? [],
		onInputValueChange: getMatchingStudents,
	});

	return (
		<SearchBarWrapper {...getComboboxProps()}>
			<StatusInfo>
				<p>Logged as:</p>
				<p>
					<strong>Teacher</strong>
				</p>
			</StatusInfo>
			<SearchWrapper>
				<Input
					name="Search"
					id="Search"
					{...getInputProps()}
					placeholder="Search"
				/>
				<SearchResults
					isVisible={!isLoading && isOpen && data?.students.length > 0}
					{...getMenuProps()}
					data-testid="search-results"
				>
					{isOpen &&
						data?.students.map((item, index) => (
							<SearchResultsItem
								isHighlighted={highlightedIndex === index}
								{...getItemProps({ item, index })}
								key={item.id}
							>
								{item.name}
							</SearchResultsItem>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
