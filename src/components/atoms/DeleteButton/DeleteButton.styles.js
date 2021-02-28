import styled from "styled-components";

export const StyledDeleteButton = styled.button`
	width: 1.5rem;
	height: 1.5rem;
	color: ${({ theme }) => theme.colors.white};
	border: none;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	align-self: flex-start;

	svg {
		height: 100%;
		width: 100%;
	}

	&:hover {
		cursor: pointer;
	}
`;
