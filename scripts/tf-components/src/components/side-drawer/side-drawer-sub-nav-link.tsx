import { Component, h, Prop } from '@stencil/core';

@Component({
	tag:'tf-side-drawer-sub-nav-link',
	styleUrl:'./side-drawer-sub-nav-link.scss',
	shadow: true,
})

export class SideDrawerSubNavLink {

	@Prop({ reflect: true }) hrefLink: string;
	@Prop({ reflect: true }) hrefTitle: string; 

	render(){
		return(
			<a 
				href={ this.hrefLink } 
				title={ !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle}
				class="tailwind-sub-nav">
				<span class="tailwind-sub-nav-title">
					<slot />
				</span>
			</a>
		)
	}
}