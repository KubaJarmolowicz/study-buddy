import React, { useState, useEffect } from "react";
import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper } from "./UsersList.styles";

const mockAPI = success => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (success) {
				resolve([...users]);
			} else {
				reject("Error: Message");
			}
		}, 2000);
	});
};

const UsersList = ({ title }) => {
	const [addedUsers, setAddedUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setIsLoading(true);
				const data = await mockAPI(true);
				setIsLoading(false);
				setAddedUsers(data);
			} catch (err) {
				throw new Error(err);
			}
		})();
	}, []);

	const deleteUser = name => {
		const filteredUsers = addedUsers.filter(user => user.name !== name);
		setAddedUsers(filteredUsers);
	};

	// try {
	// 	this.setState({ isLoading: true });
	// 	const data = await mockAPI(true);
	// 	this.setState({ isLoading: false });
	// 	this.setState({ addedUsers: data });
	// } catch (err) {
	// 	throw new Error(err);
	// }

	return (
		<Wrapper>
			<h1>{isLoading ? "Loading..." : title}</h1>
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
