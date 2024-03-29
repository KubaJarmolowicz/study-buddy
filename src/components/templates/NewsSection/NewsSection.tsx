import React, { useState, useEffect } from "react";
import { Wrapper, NewsSectionHeader } from "./NewsSection.styles";
import {
	ArticleWrapper,
	TitleWrapper,
	ContentWrapper,
} from "./NewsSection.styles";
import { Button } from "components/atoms/Button/Button";
import axios from "axios";
import { useError } from "../../../hooks/useError";

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

interface IArticle {
	id: string;
	title: string;
	category: string;
	content: string;
	image: {
		url: string;
		alt: string;
	};
}

const NewsSection = () => {
	const [articles, setArticles] = useState<IArticle[]>([]);
	const { error, dispatchError } = useError();

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
			.catch(() =>
				dispatchError("Sorry, we couldn't load the articles for you :(")
			);
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
