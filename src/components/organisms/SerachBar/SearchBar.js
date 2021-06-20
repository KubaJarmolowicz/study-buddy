import React, { useState, useEffect } from "react";
import {
	SearchbarWrapper,
	StatusInfo,
	ActionAreaWrapper,
} from "./SearchBar.styles";
import { Input } from "components/atoms/Input/Input.styles";
import ResultList from "./ResultList";
import axios from "axios";
import _ from "lodash";

const SearchBar = () => {
	const [researchedStudent, setResearchedStudent] = useState("");
	const [matchingStudents, setMatchingStudents] = useState([]);

	const onChangeHandler = event => {
		setResearchedStudent(event.target.value);
	};

	const debouncedOnChangeHandler = _.debounce(onChangeHandler, 300);

	useEffect(() => {
		if (researchedStudent) {
			axios
				.post("/students", { researchedStudent })
				.then(({ data: { data } }) => {
					const names = data.map(student => student.name);
					setMatchingStudents(names);
				})
				.catch(err => console.log(err));
		} else {
			setMatchingStudents([]);
		}
	}, [researchedStudent]);

	return (
		<SearchbarWrapper>
			<StatusInfo>
				<p>Logged as:</p>
				<p>
					<strong>Teacher</strong>
				</p>
			</StatusInfo>
			<ActionAreaWrapper>
				<Input onChange={debouncedOnChangeHandler} />
				<ResultList items={matchingStudents} />
			</ActionAreaWrapper>
		</SearchbarWrapper>
	);
};

export default SearchBar;
