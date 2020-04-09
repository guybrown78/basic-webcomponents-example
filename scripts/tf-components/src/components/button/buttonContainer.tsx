import { Component, h, Prop } from '@stencil/core';


// const enum SizeEnums {
//   xs = 'extra-small',
// 	s = 'small',
// 	m = 'medium',
// 	l = 'large',
// 	xl = 'extra-large',
// 	default = 'default'
// }

@Component({
  tag: 'tf-button-container',
  styleUrl: './buttonContainer.scss',
  shadow: true
})
export class Button {

	@Prop( {reflect: true}) size = 'default';//SizeEnums.default;
  render() {
    return (
			<span>
				<slot />
			</span>
		);
  }
}



 