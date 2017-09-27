import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import NavList from './NavList';
import logo from '../assets/code-bacon.png';

class Header extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = { showNav: false };
	}
	render() {
		return this.state.showNav ? (
			<div className="header-wrapper">
				<Link className="left logo-wrapper" to={'/'}>
					<img className="logo" src={logo} alt="code-bacon logo" />
				</Link>
				<div className="right header-nav" onClick={this.handleClick}>
					<Nav />
				</div>
				<NavList showNav={this.state.showNav} />
			</div>
		) : (
			<div className="header-wrapper">
				<Link className="left logo-wrapper" to={'/'}>
					<img className="logo" src={logo} alt="code-bacon logo" />
				</Link>
				<div className="right header-nav" onClick={this.handleClick}>
					<Nav />
				</div>
			</div>
		);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({
			showNav: !this.state.showNav
		});
	}
}

export default Header;
