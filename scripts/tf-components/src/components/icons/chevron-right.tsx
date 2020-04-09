import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-icon-chevron-right',
  styleUrl: 'icons.scss',
  shadow: true
})
export class SVGIcon {
	render(){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path 
					fill="currentColor" 
					d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"
				/>
			</svg>
		)
	}
}