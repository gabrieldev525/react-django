import React, { Component } from 'react';
import {
	Container,
	Button,
	Icon
} from 'semantic-ui-react';

export class App extends Component {
	constructor(props) {
		super(props);
	}

	openUrl = (url, target) => {
		window.open(url, target);
	}

	render() {
		return (
			<Container className='content'>
				<h1>Some text</h1>
				<p>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<Button
					className='github-button'
					onClick={() => this.openUrl('https://github.com/gabrieldev525/react-django', '_blank')}>
					Project Github
				</Button>
				<div className='contact'>
					<Icon 
						name='github'
						onClick={() => this.openUrl('https://github.com/gabrieldev525', '_blank')}/>
					<Icon
						name='globe'
						onClick={() => this.openUrl('https://gabrieldev525.github.io', '_blank')}/>
					<Icon
						name='whatsapp'
						onClick={() => this.openUrl('https://api.whatsapp.com/send?phone=5585987144112', '_blank')}/>
				</div>
			</Container>
		)
	}
}

export default App;