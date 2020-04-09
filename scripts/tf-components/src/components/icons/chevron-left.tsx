import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-icon-chevron-left',
  styleUrl: 'icons.scss',
  shadow: true
})
export class SVGIcon {
	render(){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path 
					fill="currentColor" 
					d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"
				/>
			</svg>
		)
	}
}