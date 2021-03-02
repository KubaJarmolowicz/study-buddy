import React from "react";
import { Wrapper } from "./Average.styles";
import PropTypes from "prop-types";

const pickBgColor = (average, theme) => {
	const averageAsNumber = parseFloat(average);
	if (averageAsNumber < 3) {
		return theme.colors.error;
	}
	if (averageAsNumber < 4) {
		return theme.colors.warning;
	}

	return theme.colors.success;
};

const Average = ({ average }) => (
	<Wrapper pickBgColor={pickBgColor} average={average}>
		{average}
	</Wrapper>
);

Average.propTypes = {
	average: PropTypes.string.isRequired,
};

export default Average;
