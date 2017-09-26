import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

class Header extends Component {
	constructor(props) {
		super(props);
		this.handleMouseEnter = this.handleMouseEnter.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.state = { showNav: false };
	}
	render() {
		console.log(this.state.showNav);
		return (
			<div className="header-wrapper">
				<Link className="left" to={'/'}>
					code bacon
				</Link>
				<div
					className="right"
					onMouseEnter={this.handleMouseEnter}
					onMouseLeave={this.handleMouseLeave}
				>
					<Nav showNav={this.state.showNav} />
				</div>
			</div>
		);
	}

	handleMouseEnter(e) {
		e.preventDefault();
		this.setState({
			showNav: !this.state.showNav
		});
	}

	handleMouseLeave(e) {
		e.preventDefault();
		this.setState({
			showNav: !this.state.showNav
		});
	}
}

export default Header;
