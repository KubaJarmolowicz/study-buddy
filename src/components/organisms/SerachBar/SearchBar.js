import { Input } from 'components/atoms/Input/Input';
import React, { useState } from 'react';
import debounce from 'lodash/debounce';
import { useCombobox } from 'downshift';
import { SearchBarWrapper, SearchResults, SearchWrapper, StatusInfo, SearchResultsItem } from 'components/organisms/SerachBar/SearchBar.styles';
import { useStudents } from 'hooks/useStudents';

export const SearchBar = () => {
  const [matchingStudents, setMatchingStudents] = useState([]);
  const { findStudents } = useStudents();

   const getMatchingStudents = debounce(async ({inputValue}) => {
    const { students } = await findStudents(inputValue);
    setMatchingStudents(students);
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
    items: matchingStudents,
    onInputValueChange: getMatchingStudents,
  })

  return (
    <SearchBarWrapper {...getComboboxProps()}>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <SearchWrapper>
        <Input name="Search" id="Search" {...getInputProps()} placeholder="Search" />
          <SearchResults isVisible={isOpen && matchingStudents.length > 0} {...getMenuProps()} data-testid="search-results">
            {isOpen && matchingStudents.map((item, index) => (
              <SearchResultsItem isHighlighted={highlightedIndex === index}  {...getItemProps({item, index})} key={item.id}>{item.name}</SearchResultsItem>
            ))}
          </SearchResults>
      </SearchWrapper>
    </SearchBarWrapper>
  );
};