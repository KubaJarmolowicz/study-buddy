import React, { useContext } from "react";
import PropTypes from "prop-types";
import DeleteButton from "components/atoms/DeleteButton/DeleteButton";
import { StyledNameAttendance, Wrapper } from "./UsersListItem.styles";
import Average from "components/atoms/Average/Average";
import { UserShape } from "types";
import { UsersContext } from "providers/UsersProvider";

const UsersListItem = ({ userData: { name, average, attendance = "0%" } }) => {
	const { deleteUser } = useContext(UsersContext);

	return (
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
};

UsersListItem.propTypes = {
	userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
