import React from "react";
import { Button } from "components/atoms/Button/Button";
import Note from "components/molecules/Note/Note";
import {
	FormWrapper,
	NotesWrapper,
	StyledFormField,
	Wrapper,
} from "views/Notes.styles";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "store";
import { v4 as uuid } from "uuid";
import { useForm } from "react-hook-form";

const Notes = () => {
	const notes = useSelector(state => state.notes);

	const dispatch = useDispatch();

	const handleAddNote = ({ title, content }) => {
		dispatch(addNote({ id: uuid(), title, content }));
		reset();
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	return (
		<Wrapper>
			<FormWrapper>
				<form onSubmit={handleSubmit(handleAddNote)}>
					<StyledFormField
						label="Title"
						name="title"
						id="title"
						{...register("title", { required: true })}
					/>
					{errors.title && <div>Title is required.</div>}
					<StyledFormField
						isTextarea
						label="Content"
						name="content"
						id="content"
						{...register("content", { required: true })}
					/>
					{errors.content && <div>Content is required.</div>}
					<Button type="submit">Add</Button>
				</form>
			</FormWrapper>
			<NotesWrapper>
				{notes.length ? (
					notes.map(({ title, content, id }) => (
						<Note id={id} key={id} title={title} content={content} />
					))
				) : (
					<p>Create your first note</p>
				)}
			</NotesWrapper>
		</Wrapper>
	);
};

export default Notes;
