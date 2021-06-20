import React from "react";
import PropTypes from "prop-types";
import { StyledResultList } from "./ResultList.styles";

const ResultList = ({
	items = [
		"Kuba Jarmołowicz",
		"Kuba Jarmołowicz",
		"Kuba Jarmołowicz",
		"Kuba Jarmołowicz",
		"Kuba Jarmołowicz",
	],
}) => {
	return (
		<StyledResultList items={items}>
			{items.map(item => (
				<li key={item}>{item}</li>
			))}
		</StyledResultList>
	);
};

ResultList.propTypes = {
	items: PropTypes.array,
};

export default ResultList;
