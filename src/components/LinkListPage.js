import React, { Component } from 'react';
import Link from './Link';
import {
	QueryRenderer,
	graphql
} from 'react-relay';

import LinkList from './LinkList';
import environment from '../Environment';

const LinkListPageQuery = graphql`
	query LinkListPageQuery {
		viewer {
			...LinkList_viewer
		}
	}
`
//Configuration to the store 
export default class LinkListPage extends Component {
	render() {
		return (
			<QueryRenderer
			  environment={environment} //equivalent to store in redux
				query={LinkListPageQuery} //
				render={({err, props}) => {
          if (err) {
            return <div>{err.message}</div>
					} else if (props) {
            return <LinkList viewer={props.viewer}/>
					}
					return <div>Loading</div>
				}}
			/>
		)
	}
}