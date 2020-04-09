
import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-main-content',
  styleUrl: 'main-content.scss',
  shadow: true
})
export class MainContent {

	render(){
		return(
			<main>
				<slot />
			</main>
		)
	}
}