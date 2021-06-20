import React, { useState } from "react";
import PropTypes from "prop-types";
import { GroupNavWrapper, StyledSelect } from "./GroupNavigation.styles";
import { ToggleGroups } from "./GroupNavigation.styles";
import { GroupLink } from "./GroupNavigation.styles";

const GroupNavigation = ({ groups, children, currentGroup }) => {
	const [isToggleExpanded, setisToggleExpanded] = useState(false);

	return (
		<>
			<GroupNavWrapper>
				<h1>Group {currentGroup}</h1>
				<StyledSelect isExpanded={isToggleExpanded}>
					<ToggleGroups
						onClick={() => {
							setisToggleExpanded(prevState => !prevState);
						}}
					>
						change group
					</ToggleGroups>
					{groups.map(group => (
						<GroupLink
							to={`/group/${group}`}
							key={group}
							value={group}
							onClick={() => setisToggleExpanded(prevState => !prevState)}
						>
							{group}
						</GroupLink>
					))}
				</StyledSelect>
			</GroupNavWrapper>
			{children}
		</>
	);
};

GroupNavigation.propTypes = {
	groups: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GroupNavigation;
