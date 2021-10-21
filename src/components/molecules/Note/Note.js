import React from "react";
import { Title } from "components/atoms/Title/Title";
import { useDispatch } from "react-redux";
import {
	NoteWrapper,
	StyledDeleteButton,
} from "components/molecules/Note/Note.styles";

const Note = ({ title = "Untitled", content = "No content", id }) => {
	return (
		<NoteWrapper>
			<Title>{title}</Title>
			<p>{content}</p>
			<StyledDeleteButton />
		</NoteWrapper>
	);
};

export default Note;
