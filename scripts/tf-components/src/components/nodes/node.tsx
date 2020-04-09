import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-node',
  styleUrl: 'node.scss',
  shadow: true
})
export class Node {

	render(){
		return(
			<div id="node-container">
				<slot />
			</div>
		)
	}
}