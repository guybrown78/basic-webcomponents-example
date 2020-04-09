import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'tf-list-wrapping-cell',
	styles:`
		div{
			@apply flex-shrink-0;
		}
		.wrap{
			@apply mt-4;
		}
		@screen sm {
			div{
				@apply mt-0;
			}
		}
	`,
  shadow: true
})
export class ListWrappingCell {
	@Prop( {reflect: true}) contentAlign = 'left';
	@Prop( {reflect: true}) order:number;
	render(){
		return(
			<div class={ this.order ? 'wrap' : ''}>
				<slot />
			</div>
		)
	}
}