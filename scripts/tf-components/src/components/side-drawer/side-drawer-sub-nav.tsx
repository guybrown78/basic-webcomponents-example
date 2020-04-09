import { Component, h } from '@stencil/core';

@Component({
	tag:'tf-side-drawer-sub-nav',
	styleUrl:'./side-drawer-sub-nav.scss',
	shadow: true,
})

export class SideDrawerSubNav {
	render(){
		return(
			<div class="sub-nav-content opened">
				<slot></slot>
			</div>
		)
	}
}