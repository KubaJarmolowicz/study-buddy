import React from "react";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList } from "./UsersList.styles";
import PropTypes from "prop-types";
import { UserShape } from "types";
import { Title } from "components/atoms/Title/Title";

const UsersList = ({ users, deleteUser }) => {
	return (
		<>
			<Title>Students List</Title>
			<StyledList>
				{users.map(userData => (
					<UsersListItem
						key={userData.name}
						userData={userData}
						deleteUser={deleteUser}
					/>
				))}
			</StyledList>
		</>
	);
};

UsersList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape(UserShape)),
	deleteUser: PropTypes.func.isRequired,
};

export default UsersList;
