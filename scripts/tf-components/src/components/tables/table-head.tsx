import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-table-head',
})
export class TableHead {
	render(){
		return(
			<slot />
		)
	}
}