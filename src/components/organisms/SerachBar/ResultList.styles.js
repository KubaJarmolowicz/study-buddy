import styled from "styled-components";

export const StyledResultList = styled.ul`
	display: ${({ items }) => (items.length > 0 ? "block" : "none")};
	max-width: 600px;
	width: 100%;
	position: absolute;
	left: 0;
	bottom: ${({ items }) => `${-100 * items.lenght}px`};
	transform: translateY(-17px);
	padding: 0;
	border-bottom-left-radius: 15px;
	border-bottom-right-radius: 15px;
	background-color: white;
	padding: 1rem;
	z-index: 10;

	&::before {
		content: "";
		width: 20px;
		height: 80px;
		background-color: white;
		position: absolute;
		top: -40px;
		left: 0;
		border-radius: 10px;
	}

	&::after {
		content: "";
		width: 20px;
		height: 80px;
		background-color: white;
		position: absolute;
		top: -40px;
		right: 1px;
		border-radius: 10px;
	}

	li {
		list-style: none;
		font-size: ${({ theme }) => theme.fontSize.xl};
		font-weight: 700;
		color: ${({ theme }) => theme.colors.darkGrey};
		padding: 20px 16px;
		width: 100%;
		border-bottom: 1px solid ${({ theme }) => theme.colors.darkGrey};
	}

	li:last-child {
		border-bottom-left-radius: 15px;
		border-bottom-right-radius: 15px;
		border-bottom: none;
	}
`;
