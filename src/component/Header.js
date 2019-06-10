import React from 'react';

const Header = () => (
	<header>
		<div className="navbar navbar-dark bg-dark shadow-sm">
			<div className="container d-flex justify-content-between">
				<a href="/" className="navbar-brand d-flex align-items-center">
					<strong>Pet Finder</strong>
				</a>
				<button
					className="navbar-toggler collapsed"
					type="button"
					data-toggle="collapse"
					data-target="#navbarHeader"
					aria-controls="navbarHeader"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
			</div>
		</div>
	</header>
);

export default Header;
