import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-node-status-bookend',
  styleUrl: 'node-status-bookend.scss',
  shadow: true
})
export class NodeStatusBookend {

	@Prop({ reflect: true }) color: string = "grey";
	@Prop({ reflect: true }) showTooltip: boolean;

	render(){
		return(
			<div 
				id="delegate-status"
				class={ `
					${this.color} 
					${this.showTooltip ? 'show-tooltip' : ''}
				`}
			>

			</div>
		)
	}
}