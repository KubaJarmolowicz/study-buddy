import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	color: ${({ theme }) => theme.colors.darkGrey};
	margin-right: 1.5rem;

	p {
		padding: 0;
		margin: 0;
	}

	p:first-child {
		font-size: ${({ theme }) => theme.fontSize.l};
		font-weight: bold;
	}

	p:last-child {
		font-size: ${({ theme }) => theme.fontSize.s};
	}
`;
