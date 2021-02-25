import styled from "styled-components";

export const Wrapper = styled.div`
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	max-width: 50rem;
	padding: 3rem;
	border-radius: 25px;
	box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StyledList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
`;
