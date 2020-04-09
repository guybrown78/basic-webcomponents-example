import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-icon-envelope',
  styleUrl: 'icons.scss',
  shadow: true
})
export class Envelope {
	render(){
		return (
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
				<path 
					fill="currentColor" 
					// d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z"
					fill-rule="evenodd" 
					d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" clip-rule="evenodd"
				/>
			</svg>
		)
	}
}