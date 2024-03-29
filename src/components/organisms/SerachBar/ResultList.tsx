import React from "react";
import PropTypes from "prop-types";
import { StyledResultList } from "./ResultList.styles";

export interface IResultList {
	items: string[];
}

const ResultList = ({ items = [] }: IResultList) => {
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
