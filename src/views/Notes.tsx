import React from "react";
import { Button } from "components/atoms/Button/Button";
import Note from "components/molecules/Note/Note";
import {
	FormWrapper,
	NotesWrapper,
	StyledFormField,
	Wrapper,
} from "views/Notes.styles";
import { useForm } from "react-hook-form";
import { useGetNotesQuery, useAddNoteMutation } from "store/api/notes";
import { INote } from "components/molecules/Note/Note";
import { IFormFieldProps } from "components/molecules/FormField/FormField";

type NewNote = Omit<INote, "id">;

export interface NotesTextArea extends IFormFieldProps {
	isTextArea?: boolean;
}

const Notes = () => {
	const handleAddNote = ({ title, content }: NewNote) => {
		addNote({ title, content });
		reset();
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const { data, isLoading } = useGetNotesQuery();
	const [addNote, addRest] = useAddNoteMutation();

	return (
		<Wrapper>
			<FormWrapper>
				<form onSubmit={handleSubmit(handleAddNote)}>
					<StyledFormField
						label="Title"
						id="title"
						{...register("title", { required: true })}
					/>
					{errors.title && <div>Title is required.</div>}
					<StyledFormField
						isTextArea
						label="Content"
						id="content"
						{...register("content", { required: true })}
					/>
					{errors.content && <div>Content is required.</div>}
					<Button type="submit">Add</Button>
				</form>
			</FormWrapper>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<NotesWrapper>
					{data?.notes.length ? (
						data?.notes.map(({ title, content, id }) => (
							<Note id={id} key={id} title={title} content={content} />
						))
					) : (
						<p>Create your first note</p>
					)}
				</NotesWrapper>
			)}
		</Wrapper>
	);
};

export default Notes;
