import { Component, h, Prop } from '@stencil/core';

@Component({
	tag:'tf-modal',
	styleUrl:'./modal.scss',
	shadow: true,
})

export class Modal {
	@Prop({ reflect: true }) displayTitle: string;
	render(){
		return[
			<div id="backdrop"></div>,
			<div id="modal">
				<header>
				<slot name="title">{ this.displayTitle }</slot>
				</header>
				<section id="main">
					<slot></slot>
				</section>
				<section id="actions">
					<button id="cancel-btn">Cancel</button>
					<button id="confirm-btn">OK</button>
				</section>
			</div>
		]
	}
}