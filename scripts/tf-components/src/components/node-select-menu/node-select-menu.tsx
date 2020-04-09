import { Component, h, State, Listen } from '@stencil/core';

@Component({
  tag: 'tf-node-select-menu',
  styleUrl: 'node-select-menu.scss',
  shadow: true
})
export class NodeSelectMenu {

	// @Element() el: HTMLElement;

	@State() isOpen: boolean = false;
	@State() isOpenDelayed: boolean = false;

	@Listen('click', { target: 'window', capture: true })
	handleClick(event) {
		if(this.isOpen){
			const target = event.composedPath()[0] as HTMLElement;
			if (!target.matches('.dropdown-item-btn') && !target.matches('#dropdown-content')) {
				this.isOpen = this.isOpenDelayed = false;
			}
		}
	}
	/*
131 856
581 913
*/
	onMenuClicked(){
		if(this.isOpen){
			this.isOpen = this.isOpenDelayed = false;
		}else{
			this.isOpen = true;
			setTimeout(() => {
				this.isOpenDelayed = true;
			}, 400)
		}
		
	}
	
	render(){
		return(
			<div id="dropdown">
				<button 
					onClick={this.onMenuClicked.bind(this)} 
					id="dropdown-btn"
					tabindex="0"
					class={ this.isOpenDelayed ? 'active' : ''}
				>
					<span id="title">Actions</span>
					<span id="icon">
						<tf-icon-chevron-down class="svg-icon"></tf-icon-chevron-down>
					</span>
				</button>
				<div 
					id="dropdown-content" 
					class={ this.isOpen ? 'show' : ''}
				>
					<button class="dropdown-item-btn" id=""><span id="title">View</span></button>
					<button class="dropdown-item-btn" id=""><span id="title">Assign to Course</span></button>
					<button class="dropdown-item-btn" id=""><span id="title">Assign to Cattegory</span></button>
					<button class="dropdown-item-btn" id=""><span id="title">Remove</span></button>
				</div>
			</div>
		)
	}
}