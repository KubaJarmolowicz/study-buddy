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

const initialFormState = {
	name: "",
	attendance: "",
	average: "",
};

const Root = () => {
	const [users, setUsers] = useState([...usersData]);

	const [formValues, setFormValues] = useState(initialFormState);

	const deleteUser = name => {
		const filteredUsers = users.filter(user => user.name !== name);
		setUsers(filteredUsers);
	};

	const handleAddUser = e => {
		e.preventDefault();

		const newUser = {
			name: formValues.name,
			attendance: formValues.attendance,
			average: formValues.average,
		};

		setUsers([newUser, ...users]);
		setFormValues(initialFormState);
	};

	const handleInputChange = e => {
		setFormValues({
			...formValues,
			[e.target.name]: e.target.value,
		});
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				<MainTemplate>
					<Wrapper>
						<Switch>
							<Route path="/" exact>
								<Dashboard deleteUser={deleteUser} users={users} />
							</Route>
							<Route path="/add-user" exact>
								<AddUser
									formValues={formValues}
									handleAddUser={handleAddUser}
									handleInputChange={handleInputChange}
								/>
							</Route>
						</Switch>
					</Wrapper>
				</MainTemplate>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
