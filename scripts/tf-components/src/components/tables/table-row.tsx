import { Component, h } from '@stencil/core';

@Component({
	tag: 'tf-table-row',
})
export class TableHead {
	render(){
		return(
			<slot />
		)
	}
}