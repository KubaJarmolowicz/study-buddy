import React from "react";
import PropTypes from "prop-types";
import Button from "components/atoms/Button/Button";
import { StyledNameAttendance, Wrapper } from "./UsersListItem.styles";
import Average from "components/atoms/Average/Average";

const UsersListItem = ({
	deleteUser,
	userData: { name, average, attendance = "0%" },
}) => (
	<Wrapper key={name}>
		<Average average={average} />
		<StyledNameAttendance>
			<p>{name}</p>
			<p>attendance: {attendance}</p>
		</StyledNameAttendance>
		<Button
			onClick={() => {
				deleteUser(name);
			}}
		/>
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
