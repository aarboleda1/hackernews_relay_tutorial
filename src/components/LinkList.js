import React, { Component } from 'react';
import Link from './Link';
import {
	createFragmentContainer,
	graphql,
} from 'react-relay';

class LinkList extends Component {
  render() {
		console.log(this.props.viewer, 'are viewer')
		return(
			<div>
				{this.props.viewer.allLinks.edges.map(({node}) => {
						return <Link link={ node } key={node.__id}/>
					})
				}
			</div>
		)
	}
}
export default createFragmentContainer(LinkList, graphql`
	fragment LinkList_viewer on Viewer {
		allLinks(last: 100, orderBy: createdAt_DESC) @connection(key: "LinkList_allLinks", filters: []) {
			edges {
				node {
					...Link_link
				}
			}
		}
	}
`)