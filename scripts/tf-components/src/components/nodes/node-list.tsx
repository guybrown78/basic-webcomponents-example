import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-node-list',
  styleUrl: 'node-list.scss',
  shadow: true
})
export class NodeList {

	render(){
		return(
			<ul id="node-list">
				<slot />
			</ul>
		)
	}
}