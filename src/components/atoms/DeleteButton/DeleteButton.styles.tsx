import styled from "styled-components";

export const StyledButton = styled.button`
	cursor: pointer;
	width: 22px;
	height: 22px;
	margin: 0 10px;
	background-color: ${({ theme }) => theme.colors.grey};
	border-radius: 50px;
	border: none;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 100%;
		height: 100%;
	}
`;
