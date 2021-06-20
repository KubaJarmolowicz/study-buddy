import styled from "styled-components";

export const StyledResultList = styled.ul`
	//font-weightborder: 1px solid red;
	display: ${({ items }) => (items.length > 0 ? "block" : "none")};
	max-width: 700px;
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
