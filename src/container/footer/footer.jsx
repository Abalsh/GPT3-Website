import React from 'react';
import './footer.css';

const footer = () => {
	return (
		<div className="gpt3__footer section__padding">
			<div className="gpt3__footer-heading">
				<h1 className="gradient__text">Do you want to step in to the future before others</h1>
				<button>Request Early Access</button>
			</div>
			<div className="gpt3__footer-content">
				<div className="gpt3__footer-content_logo">
					<h2>GPT-3</h2>
					<p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
				</div>
				<div className="gpt3__footer-content_links">
					<p>Links</p>
					<ul>
						<li>Overons</li>
						<li>Social Media</li>
						<li>Counters</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="gpt3__footer-content_company">
					<p>Conmpany</p>
					<ul>
						<li>Terms & Conditions</li>
						<li>Privacy Policy</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="gpt3__footer-content_git">
					<p>Get in touch</p>
					<ul>
						<li>Crechterwoord K12 182 DK Alknjkcb</li>
						<li>085-132567</li>
						<li>info@payme.net</li>
					</ul>
				</div>
			</div>
			<div className="gpt3__footer-rights">
				<p>© 2021 GPT-3. All rights reserved.</p>
			</div>
		</div>
	);
};

export default footer;
