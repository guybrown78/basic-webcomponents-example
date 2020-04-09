import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'tf-table-cell',
})
export class TableCell {
	@Prop( {reflect: true}) textAlign = 'centre';
	render(){
		return(
			<slot />
		)
	}
}