import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Wrapper, NewsSectionHeader } from "./NewsSection.styles";
import {
	ArticleWrapper,
	TitleWrapper,
	ContentWrapper,
} from "./NewsSection.styles";
import { Button } from "components/atoms/Button/Button.styles";
import axios from "axios";

export const URL = "https://graphql.datocms.com/";

export const query = `{
  allArticles {
    id
    title
    category
    content
    image {
      url
      alt
    }
  }
}`;

const NewsSection = () => {
	const [articles, setArticles] = useState([]);
	const [error, setError] = useState("");

	useEffect(() => {
		axios
			.post(
				URL,
				{
					query,
				},
				{
					headers: {
						authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
					},
				}
			)
			.then(({ data: { data } }) => data)
			.then(({ allArticles }) => {
				setArticles(allArticles);
			})
			.catch(() => setError("Sorry, we couldn't load the articles for you :("));
	}, []);

	return (
		<Wrapper>
			<NewsSectionHeader>University news feed</NewsSectionHeader>
			{articles.length > 0 ? (
				articles.map(({ id, title, category, content, image = null }) => {
					return (
						<ArticleWrapper key={id}>
							<TitleWrapper>
								<h3>{title}</h3>
								<p>{category}</p>
							</TitleWrapper>
							<ContentWrapper>
								{image ? <img src={image.url} alt={image.alt} /> : null}
								<p>{content}</p>
							</ContentWrapper>
							<Button isBig>Read more</Button>
						</ArticleWrapper>
					);
				})
			) : error ? (
				<NewsSectionHeader>{error}</NewsSectionHeader>
			) : (
				<TitleWrapper>
					<h3>Loading...</h3>
				</TitleWrapper>
			)}
		</Wrapper>
	);
};

NewsSection.propTypes = {};

export default NewsSection;
