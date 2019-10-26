import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import history from '../util/history';

const Navigation = (props) => {
	const handleLogout = () => {
		localStorage.removeItem('roles');
		history.push('/');
	};
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>
				<Link to="/app" style={{ color: '#fff' }}>
					Fika safe
				</Link>
			</Navbar.Brand>
			<Nav className="mr-auto">
				{props.routes.map((route) => (
					<Link
						key={route.url}
						className="nav-link"
						to={`${props.path}${route.url}`}
					>
						{route.title}
					</Link>
				))}
			</Nav>
			<Button onClick={handleLogout}>Logout</Button>
		</Navbar>
	);
};

Navigation.propTypes = {
	routes: PropTypes.arrayOf(
		PropTypes.shape({
			url: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired
		})
	).isRequired,
	path: PropTypes.string.isRequired
};

export default Navigation;
