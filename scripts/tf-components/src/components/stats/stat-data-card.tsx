import { Component, h, Prop} from '@stencil/core';

@Component({
  tag: 'tf-stat-data-card',
  styleUrl: 'stat-data-card.scss',
  shadow: true
})
export class StatDataCard {
	@Prop( {reflect: true}) colour = 'default';
	render(){
		return(
			<div class="stat-card-container">
				<div class="stat-card">
					<dl>
						<dt class={`colour-${this.colour}`}>
							<slot name="title" />
						</dt>
						<dd class={`colour-${this.colour}`}>
							<slot name="data" />
						</dd>
					</dl>
				</div>
			</div>
		)
	}
}