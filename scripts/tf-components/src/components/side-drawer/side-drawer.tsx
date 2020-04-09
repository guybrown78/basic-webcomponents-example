import { Component, h, Prop, State, Method, Listen, Watch } from '@stencil/core';

@Component({
	tag:'tf-side-drawer',
	styleUrl:'./side-drawer.scss',
	shadow: true,
})

export class SideDrawer {
	@State() showContactInfo: boolean = false;
	@Prop({ reflect: true }) displayTitle: string;
	@Prop({ reflect: true, mutable: true }) opened: boolean;

	@Method()
	async open(){
		this.opened = true;
	}

	@Listen('tfAppLogoClicked', { target: 'body' })
	onAppLogoClicked(){ //event: CustomEvent) {
		this.open();
	}

	@Watch('opened')
	stockSymbolChanged(newValue:boolean, oldValue:boolean){
		if(newValue !== oldValue){
			// can do something here, set timers etc
		}
	}

	onCloseDraw(){
		this.opened = false;
	}

	onContentChange(content: string){
		this.showContactInfo = content === 'contact';
	}

	render(){
		let mainContent = <slot />;
		return [
			<div 
				onClick={this.onCloseDraw.bind(this)}
				class="backdrop"
			></div>,
			<aside>
				<header>
					<div id="app-logo-container">
						<div id="app-logo">
							<tf-hexagon-button 
								onClick={this.onCloseDraw.bind(this)}
								color="white" 
								id="app-logo-icon"
							>
								<div id="app-logo-initials">
									X
								</div>
							</tf-hexagon-button>
						</div>
					</div>
				</header>
		
				<main>
					{ mainContent }
				</main>
			</aside>
		];
	}
}