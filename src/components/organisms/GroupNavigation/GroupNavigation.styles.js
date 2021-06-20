import styled from "styled-components";
import { Button } from "components/atoms/Button/Button.styles";
import { NavLink } from "react-router-dom";

export const GroupNavWrapper = styled.header`
	font-family: "Roboto";
	color: ${({ theme }) => theme.colors.darkGrey};
	max-width: 50%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 25px;
`;

export const ToggleGroups = styled(Button)`
	cursor: pointer;
	//border: 1px solid red;
	margin: 0;
	height: 2rem;
`;

export const GroupLink = styled(NavLink)`
	display: block;
	font-weight: bold;
	text-decoration: none;
	color: ${({ theme }) => theme.colors.darkGrey};
	text-align: center;
	width: 100%;
	margin: 15px 20px 15px auto;

	&:hover {
		background-color: white;
	}
`;

export const StyledSelect = styled.div`
	font-family: "Roboto";
	font-weight: 700;
	color: ${({ theme }) => theme.colors.darkGrey};
	background-color: #eceff6;
	/* padding: 10px 30px;
	border: none; */
	border-radius: 15px;
	max-height: ${({ isExpanded }) => (isExpanded ? "100%" : "2rem")};
	overflow: hidden;
	//border: 1px solid blue;
	margin-left: 25px;

	&:focus,
	&:hover {
		cursor: pointer;
		outline: none;
		box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
	}
`;
