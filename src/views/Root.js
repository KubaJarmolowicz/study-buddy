import UsersList from "components/organisms/UsersList/UsersList";
import React, { useState } from "react";
import { users as addedUsers } from "data/users";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import { theme } from "assets/styles/theme";
import { Wrapper } from "./Root.styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "components/organisms/Form/Form";

const initialFormState = {
	name: "",
	attendance: "",
	average: "",
};

const Root = () => {
	const [users, setUsers] = useState([...addedUsers]);

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
				<Wrapper>
					<nav>
						<Link to="/">Home</Link>
						<Link to="/add-user">Add user</Link>
					</nav>
					<Switch>
						<Route path="/" exact>
							<UsersList deleteUser={deleteUser} users={users} />
						</Route>
						<Route path="/add-user" exact>
							<Form
								formValues={formValues}
								handleAddUser={handleAddUser}
								handleInputChange={handleInputChange}
							/>
						</Route>
					</Switch>
				</Wrapper>
			</ThemeProvider>
		</Router>
	);
};

export default Root;
