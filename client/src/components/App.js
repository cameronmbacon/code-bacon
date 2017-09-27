import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
const About = () => <h2>About Component</h2>;
const Work = () => <h2>Work Component</h2>;
const Blog = () => <h2>Blog Component</h2>;

const App = () => {
	return (
		<div className="container">
			<BrowserRouter>
				<div>
					<Header />
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/work" component={Work} />
					<Route exact path="/blog" component={Blog} />
				</div>
			</BrowserRouter>
		</div>
	);
};

export default App;
