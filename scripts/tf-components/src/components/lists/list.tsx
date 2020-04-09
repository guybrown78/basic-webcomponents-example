import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-list',
  styleUrl: 'list.scss',
  shadow: true
})
export class List {

	render(){
		return(
			<div class="list-container">
				<ul>
					<slot />
				</ul>
			</div>
		)
	}
}