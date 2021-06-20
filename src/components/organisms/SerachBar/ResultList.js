import React from "react";
import PropTypes from "prop-types";
import { StyledResultList } from "./ResultList.styles";

const ResultList = ({ items = [] }) => {
	return (
		<StyledResultList items={items}>
			{items.map(item => (
				<li key={item}>{item}</li>
			))}
		</StyledResultList>
	);
};

ResultList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.string),
};

export default ResultList;
