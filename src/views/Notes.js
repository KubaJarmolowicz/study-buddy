import React from "react";
import { Button } from "components/atoms/Button/Button";
import Note from "components/molecules/Note/Note";
import { useDispatch, useSelector } from "react-redux";
import {
	FormWrapper,
	NotesWrapper,
	StyledFormField,
	Wrapper,
} from "views/Notes.styles";

const Notes = () => {
	return (
		<Wrapper>
			<FormWrapper>
				<StyledFormField label="Title" name="title" id="title" />
				<StyledFormField
					isTextarea
					label="Content"
					name="content"
					id="content"
				/>
				<Button>Add</Button>
			</FormWrapper>
			<NotesWrapper></NotesWrapper>
		</Wrapper>
	);
};

export default Notes;
