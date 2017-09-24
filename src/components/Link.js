import React, { Component } from 'react';
import {
	createFragmentContainer,
	graphql,
} from 'react-relay';

class Link extends Component {
	render () {
		console.log(this.props.link)
		const {description, url, cursor} = this.props.link;
		return (
			<div>
			  <div>{cursor} ({url})</div>
			</div>
		)
	}
}

export default createFragmentContainer(Link, graphql`
	fragment Link_link on Link {
		id
		description
		url
	}
`)