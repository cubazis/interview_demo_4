import React, {Component} from 'react';
import {Navbar, Grid} from 'react-bootstrap';

import './Header.css';

class Header extends Component {
	render() {
		return (
			<Navbar inverse fixedTop>
				<Grid>
					<Navbar.Header>
						<Navbar.Brand>
							<div>{this.props.name}</div>
						</Navbar.Brand>
						<Navbar.Toggle/>
					</Navbar.Header>
				</Grid>
			</Navbar>
		);
	}
}

export default Header;