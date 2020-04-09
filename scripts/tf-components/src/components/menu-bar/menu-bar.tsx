import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-menu-bar',
  styleUrl: 'menu-bar.scss',
  shadow: true
})
export class MenuBar {

	render(){
		return(
			<section>
				<div id="lozenge-container">
					<slot />
				</div>
			</section>
		)
	}
}