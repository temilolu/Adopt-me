import React, { Component } from 'react';

import Header from '../component/Header';
import Search from '../component/Search';
import Item from '../component/Item';

import styled from 'styled-components';

const Hero = styled.div`
	width: 100%;
	min-height: 30em;
	background-color: rgb(255, 255, 255);
	background-image: url(https://res.cloudinary.com/temity/image/upload/v1560134560/smiling-man-woman-pug.jpg);
	background-size: cover;
	color: #000;
	background-position: center center;
`;

class Home extends Component {
	render() {
		return (
			<div>
				<Header />

				<Hero className="">
					<div className="container">
						<div className="row">
							<div className="col-5">
								<div className="card my-5">
									<div className="card-body">
										<h1 className="card-title">
											Discover amazing pets for adoption
										</h1>

										<Search />
									</div>
								</div>
							</div>

							<div className="col-7" />
						</div>
					</div>
				</Hero>

				<div className="album py-5 bg-white">
					<div className="container">
						<div>
							<h3>Places to stay around the world</h3>
						</div>
						<div className="row">
							<Item />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
