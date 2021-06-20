import styled from "styled-components";
import { Input } from "components/atoms/Input/Input.styles";

export const SearchbarWrapper = styled.div`
	grid-row: 1 / 2;
	grid-column: 2 / 3;
	border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 40px;

	${Input} {
		font-size: ${({ theme }) => theme.fontSize.xl};
		padding: 10px 20px;
		color: ${({ theme }) => theme.colors.darkGrey};
		width: 100%;
		max-width: 600px;
		border: 2px solid ${({ theme }) => theme.colors.lightPurple};

		box-shadow: ${({ items }) =>
			items.length > 0 ? "none" : "-2px 4px 10px rgba(115, 124, 142, 0.09)"};

		&:focus {
			box-shadow: ${({ items }) =>
				items.length > 0 ? "none" : "-2px 4px 10px rgba(115, 124, 142, 0.3)"};
		}
	}
`;

export const ActionAreaWrapper = styled.div`
	position: relative;
	width: 100%;
`;

export const StatusInfo = styled.div`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSize.l};
	margin-right: 40px;
	min-width: 100px;
	p {
		width: 100%;
		margin: 5px;
	}
`;
