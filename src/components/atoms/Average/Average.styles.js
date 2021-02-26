import styled from "styled-components";

export const Wrapper = styled.div`
	height: 2.2rem;
	width: 2.2rem;
	border-radius: 50%;
	background-color: ${({ pickBgColor, average, theme }) =>
		pickBgColor(average, theme)};
	margin-right: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${({ theme }) => theme.colors.white};
	font-size: ${({ theme }) => theme.fontSize.m};
	font-weight: bold;
`;
