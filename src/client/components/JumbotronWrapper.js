import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const JumbotronWrapper = (props) => {
	return (
		<Container>
			<Jumbotron style={{ marginTop: '50px' }}>
				<h1>{props.title}</h1>
				<div>{props.children}</div>
				<p>{props.description}</p>
			</Jumbotron>
		</Container>
	);
};




export default JumbotronWrapper;
