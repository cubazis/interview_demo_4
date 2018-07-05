import React from 'react';
import { Grid, Nav, NavItem} from 'react-bootstrap';
import './Footer.css';



function Footer() {
	return (
		<footer>
			<Grid>
				<Nav justified>
					<NavItem href="mailto:grebenkin@phystech.edu"
						eventKey={1}>
						e-mail me
					</NavItem>
					<NavItem href="https://t.me/cubazis"
						eventKey={2}>
						telegram me
					</NavItem>
					<NavItem href="callto: 8-926-875-46-22"
						eventKey={3}>
						call me
					</NavItem>
				</Nav>
			</Grid>
		</footer>
	);
}

export default Footer;