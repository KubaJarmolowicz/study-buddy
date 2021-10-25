import React, { FC, ReactChild } from "react";
import Navigation from "components/organisms/Navigation/Navigation";
import { Wrapper } from "components/templates/MainTemplate/MainTemplate.styles";
import { SearchBar } from "components/organisms/SerachBar/SearchBar";
import NewsSection from "../NewsSection/NewsSection";
import NotesWidget from "components/organisms/NotesWidget/NotesWidget";

const MainTemplate: FC<ReactChild> = ({ children }) => {
	return (
		<Wrapper>
			<Navigation />
			<SearchBar />
			{children}
			<NewsSection />
			<NotesWidget />
		</Wrapper>
	);
};

export default MainTemplate;
