import React, { useState } from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper, StyledTitle } from "./UsersList.styles";

const UsersList = () => {
	const [addedUsers, setAddedUsers] = useState([...users]);

	const deleteUser = name => {
		const filteredUsers = addedUsers.filter(user => user.name !== name);
		setAddedUsers(filteredUsers);
	};

	return (
		<Wrapper>
			<StyledTitle>Students List</StyledTitle>
			<StyledList>
				{addedUsers.map(userData => (
					<UsersListItem
						key={userData.name}
						userData={userData}
						deleteUser={deleteUser}
					/>
				))}
			</StyledList>
		</Wrapper>
	);
};

export default UsersList;
