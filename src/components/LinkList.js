import React, { Component } from 'react';
import Link from './Link';

const mockLinks = [
	{
		"description": "Graphql",
		"url": "https://graphcool.com",
		id: '1',
	},
	{
		"description": "highly performant graphQL",
		"url": "https://facebook.github.io/relay",
		id: '2',
	},
]
export default class LinkList extends Component {
  render() {
		return(
			<div>
				{
					mockLinks.map((link) => {
						return <Link link={link} key={link.id}/>
					})
				}
			</div>
		)
	}
}