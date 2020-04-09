import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'tf-table',
  styleUrl: 'table.scss',
  shadow: true
})
export class Table {
	@Element() slotElement: HTMLSlotElement

	headerCellData:string[] = [];
	rowData:any[] = [];
	//
	componentWillLoad(){
		// parse table header element
		const headerItem = this.slotElement.querySelector('[slot="table-head"]') as HTMLElement;
		//
		const headerCells: HTMLCollectionOf<HTMLElement> = headerItem.getElementsByTagName('tf-table-head-cell');
		//
		Array.from(headerCells).forEach(cell => {
			this.headerCellData.push(String((cell as HTMLElement).innerHTML).replace('<!---->',''));
		}); 
		// parse table rows
		const rows:HTMLCollectionOf<HTMLTfTableRowElement> = this.slotElement.getElementsByTagName('tf-table-row');
		//
		Array.from(rows).forEach(row=> {
			let rowCellData = [];
			const cells:HTMLCollection = (row as HTMLTfTableRowElement).getElementsByTagName('tf-table-cell');
			Array.from(cells).forEach(cell => {
				rowCellData.push({
					textAlign:cell.getAttribute('text-align'),
					body:cell.innerHTML
				})
			});
			this.rowData.push(rowCellData);
		}); 
	}

	render(){

		return[
			<div class="div-1">
  			<div class="div-2">
    			<div class="div-3">
      			<table>
							<thead>
								{ this.headerCellData.map(cell => <th>{ cell }</th>) }
							</thead>

							<tbody>
							{ 
								this.rowData.map(row => {
									return (
										<tr>
											{ row.map(cell => 
												<td 
													class={`bottom-border ${cell.textAlign == 'right' ? 'text-right' : ''}`} 
													innerHTML={cell.body}></td>
											)}
										</tr>
									)
								})
							}
							</tbody>
						</table>
					</div>
				</div>
			</div>,
			<div class="hide-slot">
				<slot name="table-head" />
			</div>
		]
	}
}