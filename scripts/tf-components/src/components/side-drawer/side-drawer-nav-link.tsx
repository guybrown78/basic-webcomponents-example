import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
	tag:'tf-side-drawer-nav-link',
	styleUrl:'./side-drawer-nav-link.scss',
	shadow: true,
})

export class SideDrawerNavLink {

	@State() isSubOpen: boolean = false;

	@Prop({ reflect: true }) hrefLink: string;
	@Prop({ reflect: true }) hrefTitle: string; 

	@Element() slotElement: HTMLSlotElement
	hasSubMenu:boolean = false;
	//
	onLinkClicked(){
		this.isSubOpen = !this.isSubOpen;
	}
	//
	componentWillLoad(){
		this.hasSubMenu = !!this.slotElement.querySelector('[slot="sub"]')
	}


	render(){
		let sub = null;
		let linkButton = (
			<a 
				href={ this.hrefLink } 
				title={ !this.hrefTitle ? `Link to ${this.hrefLink}` : this.hrefTitle}
				class="tailwind-side-nav">
				<span class="tailwind-side-nav-title">
					<slot />
				</span>
			</a>
		);
		if(this.hasSubMenu){
			sub = (
				<div class={`sub-nav-content ${this.isSubOpen ? 'show' : 'hide'}`}>
					<slot name="sub" />
				</div>
			)
			const icon = this.isSubOpen ? <tf-icon-chevron-up /> : <tf-icon-chevron-down />;
			linkButton = (
				<div 
					class={`tailwind-side-nav ${this.isSubOpen ? 'opened' : ''}`}
					onClick={this.onLinkClicked.bind(this)} 
				>
					<span class="tailwind-side-nav-title">
						<slot />
					</span>
					<span 
						class="tailwind-toggle-icon"
					>
						{ icon }
					</span>
				</div>
			);
		}
		return[linkButton, sub]
	}
}