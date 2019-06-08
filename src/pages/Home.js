import React, { Component } from 'react';

import Header from '../component/Header';

class Home extends Component {
	render() {
		return (
			<div>
				<Header />

				<section className="jumbotron text-center">
					<div className="container">
						<div className="row">
							<div className="col-4">
								<div className="card">
									<div className="card-body">
										<h1 className="card-title">
											Discover Unique Places to stay
										</h1>
										<p className="card-text">
											From cosy country homes to funky city flats
										</p>
										<div>
											<input
												type="text"
												className="form-control"
												placeholder="where"
											/>
										</div>
										<a href="/" className="btn btn-primary">
											Search
										</a>
									</div>
								</div>
							</div>
							<div className="col-8" />
						</div>
					</div>
				</section>

				<div className="album py-5 bg-light">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<div className="card mb-4 shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
										role="img"
										aria-label="Placeholder: Thumbnail">
										<title>Placeholder</title>
										<rect width="100%" height="100%" fill="#55595c" />
										<text x="50%" y="50%" fill="#eceeef" dy=".3em">
											Thumbnail
										</text>
									</svg>
									<div className="card-body">
										<p className="card-text">
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</p>
										<div className="d-flex justify-content-between align-items-center">
											<div className="btn-group">
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary">
													View
												</button>
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary">
													Edit
												</button>
											</div>
											<small className="text-muted">9 mins</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
