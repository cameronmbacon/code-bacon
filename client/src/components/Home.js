import React from 'react';
import headshot from '../assets/headshot.PNG';

function Home() {
	return (
		<div className="home-wrapper">
			<h1>Cameron Bacon</h1>
			<h2>Full Stack Software Developer</h2>
			<img className="headshot" src={headshot} alt="headshot" />
		</div>
	);
}

export default Home;
