import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-table-head-cell',
})
export class TableHeadCell {
	render(){
		return(
			<slot />
		)
	}
}