import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {

	@Prop( {reflect: true}) colour = 'default';

	render(){
		return(
			<section class={this.colour}>
				<slot />
			</section>
		)
	}
}