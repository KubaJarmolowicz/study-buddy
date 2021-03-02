import React, { useState } from "react";
import { users as usersData } from "data/users";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import Dashboard from "./Dashboard";
import AddUser from "./AddUser";

export const UsersContext = React.createContext({
	users: [],
	deleteUser: () => {},
	handleAddUser: () => {},
});

const Root = () => {
	const [users, setUsers] = useState([...usersData]);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	const handleAddUser = formValues => {
		const newUser = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};

		setUsers([newUser, ...users]);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<UsersContext.Provider value={{ users, deleteUser, handleAddUser }}>
						<Wrapper>
							<Switch>
								<Route path="/" exact>
									<Dashboard deleteUser={deleteUser} users={users} />
								</Route>
								<Route path="/add-user">
									<AddUser />
								</Route>
							</Switch>
						</Wrapper>
					</UsersContext.Provider>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
