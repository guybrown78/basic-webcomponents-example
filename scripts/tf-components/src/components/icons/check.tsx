import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-icon-check',
  styleUrl: 'icons.scss',
  shadow: true
})
export class SVGIcon {
	render(){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path 
					fill="currentColor" 
					d="M0 11l2-2 5 5L18 3l2 2L7 18z"
				/>
			</svg>
		)
	}
}