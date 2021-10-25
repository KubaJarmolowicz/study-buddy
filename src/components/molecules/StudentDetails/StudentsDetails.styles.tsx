import styled from "styled-components";

export const DetailsHeader = styled.header`
	display: flex;
	justify-content: center;
	min-width: 100%;

	& > * {
		margin-right: auto;
	}
`;

export const StyledDetails = styled.div`
	width: 100%;
	text-align: left;
	color: ${({ theme }) => theme.colors.darkGrey};
	padding-left: 2rem;

	h4 {
		margin-bottom: 10px;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;

		& > * + * {
			margin-top: 1rem;
		}
	}

	li {
		display: flex;
		justify-content: space-between;
		max-width: 50%;

		span {
			font-size: ${({ theme }) => theme.fontSize.l};
		}
	}
`;

export const CourseName = styled.div`
	font-size: ${({ theme }) => theme.fontSize.xl};
`;
