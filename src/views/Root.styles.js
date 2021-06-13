import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 3rem 0;
	display: flex;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;
