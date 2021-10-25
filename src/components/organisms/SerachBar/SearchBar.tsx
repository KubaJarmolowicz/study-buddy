import { Input } from "components/atoms/Input/Input";
import React, { useState } from "react";
import debounce from "lodash/debounce";
import { useCombobox, UseComboboxStateChange } from "downshift";
import {
	SearchBarWrapper,
	SearchResults,
	SearchWrapper,
	StatusInfo,
	SearchResultsItem,
} from "components/organisms/SerachBar/SearchBar.styles";
import { useFindStudentsQuery } from "store/api/students";
import { IStudent } from "components/molecules/StudentDetails/Student.Details";

export interface ISerachResults {
	isVisible: boolean;
}

export interface ISearchResultItem {
	isHighlighted: boolean;
}

export const SearchBar = () => {
	const [searchPhrase, setSearchPhrase] = useState("");
	const { data, isLoading } = useFindStudentsQuery({ searchPhrase });

	const [selectedStudentName, setSelectedStudentName] = useState<
		string | null | undefined
	>(null);

	const handleSelectedItemChange = ({
		selectedItem,
	}: UseComboboxStateChange<string>) => setSelectedStudentName(selectedItem);

	const getMatchingStudents = debounce(({ inputValue }) => {
		setSearchPhrase(inputValue);
	}, 500);

	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox({
		items: data?.students.map((student: IStudent) => student.name) ?? [],
		selectedItem: selectedStudentName,
		onSelectedItemChange: handleSelectedItemChange,
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
					isVisible={!isLoading && isOpen}
					{...getMenuProps()}
					data-testid="search-results"
				>
					{isOpen &&
						data?.students.map((item: IStudent, index: number) => (
							<SearchResultsItem
								isHighlighted={highlightedIndex === index}
								{...getItemProps({ item: item.name, index })}
								key={item.id}
							>
								{console.log(item)}
								{item.name}
							</SearchResultsItem>
						))}
				</SearchResults>
			</SearchWrapper>
		</SearchBarWrapper>
	);
};
