import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button/Button";
import { Wrapper } from "./UsersListItem.styles";
import NameAttendance from "components/atoms/NameAverage/NameAttendance";
import Average from "components/atoms/Average/Average";

const UsersListItem = ({ userData: { name, average, attendance = "0%" } }) => (
	<Wrapper key={name}>
		<Average average={average} />
		<NameAttendance name={name} attendance={attendance} />
		<Button />
	</Wrapper>
);

UsersListItem.propTypes = {
	userData: PropTypes.shape({
		average: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		attendance: PropTypes.string,
	}),
};

export default UsersListItem;
