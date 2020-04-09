import { Component, h } from '@stencil/core';

@Component({
	tag:'tf-side-drawer-nav',
	styleUrl:'./side-drawer-nav.scss',
	shadow: true,
})

export class SideDrawerNav {
	render(){
		return(
			<nav id="side-nav" class="side-nav">
				<div>
					<slot></slot>
				</div>
			</nav>
		)
	}
}