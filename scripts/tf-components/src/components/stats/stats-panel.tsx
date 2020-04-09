import { Component, h, State, Element } from '@stencil/core';

@Component({
  tag: 'tf-stats-panel',
  styleUrl: 'stats-panel.scss',
  shadow: true
})
export class StatsPanel {
	@State() cardCount: number = 3;
	@Element() slotElement: HTMLSlotElement
	maxCardCount:number = 6;
	componentWillLoad(){
		this.cardCount = this.slotElement.children.length > this.maxCardCount ? this.maxCardCount : this.slotElement.children.length;
	}

	render(){

		return(
			<tf-card colour="navy">
				<div class={`stats-grid grid-${this.cardCount}`}>
					<slot />
				</div>
			</tf-card>
			
		)
	}
}