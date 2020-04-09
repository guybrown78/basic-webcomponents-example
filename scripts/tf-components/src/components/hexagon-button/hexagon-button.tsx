import { Component, Prop, h, Element } from '@stencil/core';


@Component({
  tag: 'tf-hexagon-button',
  styleUrl: 'hexagon-button.scss',
  shadow: true
})
export class HexagonButton {
	@Element() el: HTMLElement;
	@Prop({ reflect: true }) color: string = "accent";

	onButtonClickHandler(event){
		// pauses the native event from being dispatched to allow the 'click' effect on the button
		event.preventDefault();
		event.stopPropagation();
		setTimeout(() => {
			this.el.dispatchEvent(event);
		}, 500);
	}
	render(){
		return(
			<button 
				tabindex="0" 
				role="button"
				aria-pressed="false"
				class={ `sass-hex ${this.color}` }
				onClick={this.onButtonClickHandler.bind(this)}
			>
				<slot />
			</button>
		);
	}
}