import styled from "styled-components";

export const StyledButton = styled.button`
	width: 2.5rem;
	height: 2.5rem;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		height: 100%;
		width: 100%;
	}

	&:hover {
		cursor: pointer;
	}
`;
