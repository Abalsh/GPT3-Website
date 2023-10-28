import React from 'react';
import { Header, Footer, Blog, Possibility, Features, WhatGPT3 } from './container';
import { Cta, Brand, Navigation } from './components';
import './App.css';

const App = () => {
	return (
		<div className="App">
			<div className="gradient__bg">
				<Navigation />
				<Header />
			</div>
			<Brand />
			<WhatGPT3 />
			<Features />
			<Possibility />
			<Cta />
			<Blog />
			<Footer />
		</div>
	);
};

export default App;
