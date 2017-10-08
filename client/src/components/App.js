import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Contact from './Contact';

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/blog" component={Blog} />
					<Route exact path="/contact" component={Contact} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
