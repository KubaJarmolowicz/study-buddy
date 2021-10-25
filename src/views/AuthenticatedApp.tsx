import MainTemplate from "components/templates/MainTemplate/MainTemplate";
import { Wrapper } from "./Root.styles";
import { Redirect, Route, Switch } from "react-router";
import Dashboard from "./Dashboard";
import Notes from "./Notes";

const AuthenticatedApp = () => {
	return (
		<MainTemplate>
			<Wrapper>
				<Switch>
					<Route path="/" exact>
						<Redirect to="/group" />
					</Route>
					<Route path="/group/:id?">
						<Dashboard />
					</Route>
					<Route path="/notes">
						<Notes />
					</Route>
				</Switch>
			</Wrapper>
		</MainTemplate>
	);
};

export default AuthenticatedApp;
