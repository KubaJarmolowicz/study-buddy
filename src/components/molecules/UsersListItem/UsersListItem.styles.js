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

export const StyledNameAttendance = styled.div`
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
