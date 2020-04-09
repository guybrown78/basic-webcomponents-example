import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-leading-icon-label',
	styles:`
		div{
			@apply flex items-center text-sm leading-5 text-gray-500;
		}
		::slotted([slot=icon]){
			@apply mr-2 h-5 w-5;
		}
	`,
  shadow: true
})
export class ListWrappingCell {
	@Prop( {reflect: true}) contentAlign = 'left';
	@Prop( {reflect: true}) order:number;
	render(){
		return(
			<div class="">
				<slot name="icon" />
				<span>
					<slot />
				</span>
			</div>
		)
	}
}