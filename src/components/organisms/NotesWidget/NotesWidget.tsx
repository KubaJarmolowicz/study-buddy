import React, { useState } from "react";
import Note from "components/molecules/Note/Note";
import {
	NotesWrapper,
	WidgetHandler,
	Wrapper,
} from "components/organisms/NotesWidget/NotesWidget.styles";
import { useGetNotesQuery } from "store/api/notes";

export interface IWidgetWrapper {
	isOpen: boolean;
}

const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	const { data, isLoading } = useGetNotesQuery({});

	return (
		<Wrapper isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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

export default NotesWidget;
