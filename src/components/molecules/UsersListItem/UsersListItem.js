import React from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { StyledNameAttendance, Wrapper } from "./UsersListItem.styles";
import Average from "components/atoms/Average/Average";
import { UserShape } from "types";

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
		<DeleteButton
			onClick={() => {
				deleteUser(name);
			}}
		/>
	</Wrapper>
);

UsersListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
	deleteUser: PropTypes.func.isRequired,
};

export default UsersListItem;
