import { users } from "data/users";
import PropTypes from "prop-types";

const UsersList = () => (
	<div>
		<ul>
			{users.map(({ name, average, attendance }) => (
				<li key={name}>
					<div>{average}</div>
					<div>
						<p>{name}</p>
						<p>{attendance}</p>
					</div>
					<button>X</button>
				</li>
			))}
		</ul>
	</div>
);

UsersList.propTypes = {};

export default UsersList;
