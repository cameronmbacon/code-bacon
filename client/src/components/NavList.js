import React from 'react';
import { Link } from 'react-router-dom';

function NavList() {
	return (
		<div className="nav-list-wrapper">
			<ul className="nav-list">
				<li className="nav-list-item">
					<Link className="nav-link" to={'/'}>
						Home
					</Link>
				</li>
				<li className="nav-list-item">
					<Link className="nav-link" to={'/about'}>
						About
					</Link>
				</li>
				<li className="nav-list-item">
					<Link className="nav-link" to={'/work'}>
						Work
					</Link>
				</li>
				<li className="nav-list-item">
					<Link className="nav-link" to={'/contact'}>
						Blog
					</Link>
				</li>
				<li className="nav-list-item">
					<Link className="nav-link" to={'/contact'}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default NavList;
