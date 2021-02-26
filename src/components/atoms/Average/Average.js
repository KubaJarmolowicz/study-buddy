import React from "react";
import { Wrapper } from "./Average.styles";

const pickBgColor = (average, theme) => {
	if (average < 3) {
		return theme.colors.error;
	}
	if (average < 4) {
		return theme.colors.warning;
	}

	return theme.colors.success;
};

const Average = ({ average }) => (
	<Wrapper pickBgColor={pickBgColor} average={average}>
		{average}
	</Wrapper>
);

export default Average;
