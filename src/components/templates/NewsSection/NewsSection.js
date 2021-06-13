import React from "react";
import PropTypes from "prop-types";
import { Wrapper, NewsSectionHeader } from "./NewsSection.styles";
import { ArticleWrapper, TitleWrapper } from "./NewsSection.styles";
import { Button } from "components/atoms/Button/Button.styles";

const data = [
	{
		title: "New computers at school",
		category: "Tech news",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
	{
		title: "New computers at school 2",
		category: "Tech news",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
		img: "https://unsplash.it/500/400",
	},
	{
		title: "New computers at school 3",
		category: "Tech news",
		content:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
	},
];

const NewsSection = () => {
	return (
		<Wrapper>
			<NewsSectionHeader>University news feed</NewsSectionHeader>
			{data.map(({ title, category, content, img = null }) => {
				return (
					<ArticleWrapper key={title}>
						<TitleWrapper>
							<h3>{title}</h3>
							<p>{category}</p>
						</TitleWrapper>
						<p>{content}</p>
						{img ? <img src={img} alt={"twoja stara"} /> : null}
						<Button isBig>Read more</Button>
					</ArticleWrapper>
				);
			})}
		</Wrapper>
	);
};

NewsSection.propTypes = {};

export default NewsSection;
