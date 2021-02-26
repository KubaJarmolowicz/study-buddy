import { users } from "data/users";
import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { StyledList, Wrapper } from "./UsersList.styles";

const UsersList = () => (
	<Wrapper>
		<StyledList>
			{users.map(userData => (
				<UsersListItem userData={userData} />
			))}
		</StyledList>
	</Wrapper>
);

export default UsersList;
