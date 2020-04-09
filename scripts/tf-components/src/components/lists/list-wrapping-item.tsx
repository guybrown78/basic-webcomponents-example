import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'tf-list-wrapping-item',
	styleUrl: 'list-wrapping-item.scss',
  shadow: true
})
export class ListWrappingItem {
	@Element() slotElement: HTMLSlotElement;

	itemData:any[] = [];

	componentWillLoad(){
		// parse items
		//tf-list-wrapping-cell
		const items:HTMLCollection = this.slotElement.getElementsByTagName('tf-list-wrapping-cell');
		Array.from(items).forEach(cell => {
			this.itemData.push(
				{
					contentAlign:cell.getAttribute('content-align'),
					body:cell.innerHTML
				}
			);
		});
	}

	getCellStyle(contentAlign){
		// let style = {
		// 	display: 'flex',
		// }
		//
		return {
			display: 'flex',
			flex:'1',
			justifyContent:contentAlign,
		}
	}
	render(){

		return(
			<li>
				<a href="#">
					<div class="list-item-container">
						<div class="list-item">
							{
								this.itemData.map((item, i) => (
									<tf-list-wrapping-cell 
										order={i}
										style={this.getCellStyle(item.contentAlign)} 
										innerHTML={item.body} 
									/>
								))
							}
						</div>
						<div class="chevron-container">
							<svg class="chevron-svg" fill="currentColor" viewBox="0 0 20 20">
								<path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
							</svg>
						</div>
					</div>
				</a>
			</li>
		)
	}
}