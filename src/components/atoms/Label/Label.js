import styled from "styled-components";
import "assets/fonts/fonts.css";

export const Label = styled.label`
	font-family: "Montserrat", "sans-serif";
	color: ${({ theme }) => theme.colors.darkGrey};
	font-weight: bold;
	font-size: ${({ theme }) => theme.fontSize.m};
`;
