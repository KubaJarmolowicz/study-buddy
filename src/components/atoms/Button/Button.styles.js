import styled from "styled-components";

export const StyledButton = styled.button`
	width: 2rem;
	height: 2rem;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: flex-start;

	svg {
		height: 100%;
		width: 100%;
	}

	&:hover {
		cursor: pointer;
	}
`;
