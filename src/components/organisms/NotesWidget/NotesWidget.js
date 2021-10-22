import React, { useState } from "react";
import Note from "components/molecules/Note/Note";
import { useSelector } from "react-redux";
import {
	NotesWrapper,
	WidgetHandler,
	Wrapper,
} from "components/organisms/NotesWidget/NotesWidget.styles";

const NotesWidget = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleToggleWidget = () => setIsOpen(prevState => !prevState);

	const notes = useSelector(state => state.notes);

	return (
		<Wrapper isOpen={isOpen}>
			<WidgetHandler onClick={handleToggleWidget}>notes</WidgetHandler>
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

export default NotesWidget;
