import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-value-pair',
  styleUrl: 'value-pair.scss',
  shadow: true
})
export class ValuePair {

	render(){
		return(
			<div class="value-pair">
				<div class='dark'><slot name="dark"/></div>
				<div class='light'><slot name="light"/></div>
			</div>
		)
	}
}