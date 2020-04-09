import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-icon-chevron-up',
  styleUrl: 'icons.scss',
  shadow: true
})
export class ChevronUp {
	render(){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path fill="currentColor" d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"/>
			</svg>
		)
		// return(
		// 	<svg 
		// 		aria-hidden="true" 
		// 		focusable="false" 
		// 		class="svg-inline chevron-up w-14" 
		// 		role="img" 
		// 		xmlns="http://www.w3.org/2000/svg" 
		// 		viewBox="0 0 448 512">
		// 			<path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path>
		// 	</svg>
		// )
	}
}