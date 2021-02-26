import styled from "styled-components";

export const Wrapper = styled.li`
	padding: 2rem 1rem;
	display: flex;
	align-items: center;
	position: relative;

	&:not(:last-child)::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.grey};
		bottom: 0;
	}
`;
