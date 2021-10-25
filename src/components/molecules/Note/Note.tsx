import React from "react";
import { Title } from "components/atoms/Title/Title";
import {
	NoteWrapper,
	StyledDeleteButton,
} from "components/molecules/Note/Note.styles";
import { useRemoveNoteMutation } from "store/api/notes";

interface INoteProps {
	id: string;
	title?: string;
	content?: string;
}

const Note = ({
	title = "Untitled",
	content = "No content",
	id,
}: INoteProps) => {
	const [removeNote, removeRest] = useRemoveNoteMutation();

	const handleRemoveNote = () => removeNote({ id });

	return (
		<NoteWrapper>
			<Title>{title}</Title>
			<p>{content}</p>
			<StyledDeleteButton aria-label="Delete" onClick={handleRemoveNote} />
		</NoteWrapper>
	);
};

export default Note;
