import React from 'react';
import headshot from '../assets/headshot.PNG';

function Home() {
	return (
		<div className="home-wrapper">
			<h1 className="main-heading">Cameron Bacon</h1>
			<div className="sub-header-container">
				<img className="headshot" src={headshot} alt="headshot" />
				<h2 className="sub-heading">Full Stack Software Developer</h2>
			</div>
		</div>
	);
}

export default Home;
