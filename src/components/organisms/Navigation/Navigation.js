import React from "react";
import {
	Logo,
	StyledLink,
	Wrapper,
} from "components/organisms/Navigation/Navigation.styles";
import { useAuth } from "../../../hooks/useAuth";

const Navigation = () => {
	const { signOut } = useAuth();

	return (
		<Wrapper>
			<Logo>
				<h1>
					Study
					<br />
					Buddy
				</h1>
			</Logo>
			<StyledLink to="/group">Dashboard</StyledLink>
			<StyledLink to="/notes">Notes</StyledLink>
			<StyledLink as="a" onClick={signOut}>
				Logout
			</StyledLink>
		</Wrapper>
	);
};

export default Navigation;
