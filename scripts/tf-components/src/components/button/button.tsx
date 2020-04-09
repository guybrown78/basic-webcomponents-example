import { Component, h, Prop } from '@stencil/core';


// const enum SizeEnums {
//   xs = 'extra-small',
// 	s = 'small',
// 	m = 'medium',
// 	l = 'large',
// 	xl = 'extra-large',
// 	default = 'default'
// };

// const enum ColourEnums {
//   blue = 'blue',
// 	darkBlue = 'dark-blue',
// 	aqua = 'aqua',
// 	grey = 'grey',
// 	default = 'default'
// }

// const enum PositionEnums {
//   left = 'left',
// 	right = 'right',
// 	default = 'default'
// }
@Component({
  tag: 'tf-button',
  styleUrl: './button.scss',
  shadow: true
})

export class Button {

	@Prop( {reflect: true}) size = 'default';//SizeEnums.default;
	@Prop( {reflect: true}) colour = 'default';//ColourEnums.default;
	@Prop( {reflect: true}) icon = null;
	@Prop( {reflect: true}) iconPosition = 'default';//PositionEnums.default;
  render() {
		let icon = null;
		if(this.icon){
			const IconTag = `tf-icon-${this.icon}`
			icon = <IconTag class={`icon-${this.size}-${this.iconPosition === 'right' ? 'r' : 'l'}`}></IconTag>;
		}
    return (
			<span>
				<button 
					class={`tw-btn size-${this.size} colour-${this.colour}`} 
					type="button"
				>
					{ 
						(icon && (this.iconPosition == 'left' || this.iconPosition == 'default')) &&
							icon
					}
					<slot />
					{ 
						(icon && this.iconPosition == 'right') &&
							icon
					}
				</button>
			</span>
		);
  }
}



 