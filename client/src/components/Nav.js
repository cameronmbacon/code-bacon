import React from 'react';
import NavList from './NavList';

function Nav(props) {
	return props.showNav ? (
		<div className="nav-wrapper">
			<i className="fa fa-bars right" />
			<NavList />
		</div>
	) : (
		<div className="nav-wrapper">
			<i className="fa fa-bars right" />
		</div>
	);
}

export default Nav;
