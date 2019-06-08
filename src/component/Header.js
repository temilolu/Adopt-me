import React from 'react';

const Header = () => (
	<header>
		<div className="navbar navbar-dark bg-dark shadow-sm">
			<div className="container d-flex justify-content-between">
				<a href="/" className="navbar-brand d-flex align-items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						aria-hidden="true"
						class="mr-2"
						viewBox="0 0 24 24"
						focusable="false">
						<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
						<circle cx="12" cy="13" r="4" />
					</svg>
					<strong>Onebnb</strong>
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
