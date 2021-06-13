import styled from "styled-components";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";

export const Wrapper = styled.div`
	grid-row: 1 / 3;
	grid-column: 3 / 3;
	border-left: 1px solid ${({ theme }) => theme.colors.darkPurple};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding: 50px;
	overflow-y: scroll;
`;

export const NewsSectionHeader = styled.h2`
	margin-right: auto;
	color: ${({ theme }) => theme.colors.darkPurple};
`;

export const ArticleWrapper = styled(ViewWrapper)`
	margin: 30px 0;
	width: 100%;
	max-width: unset;
	border-radius: 12px;
	color: ${({ theme }) => theme.colors.darkGrey};

	p {
		line-height: 1.6;
	}
`;

export const TitleWrapper = styled.div`
	h3 {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSize.xl};
	}

	p {
		margin: 0;
		font-size: ${({ theme }) => theme.fontSize.m};
	}
`;

export const ContentWrapper = styled.div`
	display: flow-root;
	img {
		display: block;
		max-width: 170px;
		max-height: 170px;
		float: right;
		margin-left: 5px;
		margin-bottom: 3px;
		margin-top: 20px;
		object-fit: cover;
	}
`;
