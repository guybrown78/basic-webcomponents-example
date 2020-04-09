import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';


@Component({
  tag: 'tf-app-header',
  styleUrl: 'app-header.scss',
  shadow: true
})
export class AppHeader {

	@Prop({ reflect: true }) appTitle: string;
	@Prop({ reflect: true }) appInitials: string;
	@Prop({ reflect: true }) clientLogoSource: string;

	@Event({ bubbles:true, composed:true }) tfAppLogoClicked: EventEmitter<string>;

	onButtonClickHandler(event){
		event.preventDefault();
		this.tfAppLogoClicked.emit();
	}

	render(){
		return(
			<header>
				<div id="app-logo-container">
					<div id="app-logo">
						<tf-hexagon-button 
							color="gradient" 
							id="app-logo-icon"
							onClick={this.onButtonClickHandler.bind(this)}
						>
							<div id="app-logo-initials">
								{ this.appInitials }
							</div>
						</tf-hexagon-button>
						<h1 id="app-logo-title">{ this.appTitle }</h1>
					</div>
				</div>
				<div id="central-contailer">
					<div id="app-logo">
						<tf-hexagon-button 
							color="accent" 
							id="app-logo-icon"
						>
							<div id="quick-link-icon">+</div>
						</tf-hexagon-button>
					</div>
				</div>
				<div id="client-logo-container">
					<div id="client-logo">
						<img src={this.clientLogoSource}></img>
					</div>
					<div id="account-navigation-container">
						<tf-hexagon-button color="grey"></tf-hexagon-button>
					</div>
				</div>
			</header>
		);
	}
}