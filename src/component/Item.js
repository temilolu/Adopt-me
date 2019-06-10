import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-md-3">
					<div className="card mb-4 shadow-sm">
						<img
							src="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?cs=srgb&dl=apartment-architecture-carpet-584399.jpg&fm=jpg"
							className="bd-placeholder-img card-img-top"
							width="100%"
							height="200"
							alt="item img"
						/>

						<div className="card-body">
							<h3 className="card-text">Name + Location</h3>
							<span className="card-text">Pricing</span>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
