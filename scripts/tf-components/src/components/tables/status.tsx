import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-status',
  styleUrl: 'status.scss',
  shadow: true
})
export class Status {
	@Prop( {reflect: true}) trafficLightColour = 'none';
	render(){
		return(
			<span class={`colour-${this.trafficLightColour}`} >
				<slot />
			</span>
		)
	}
}