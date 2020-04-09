import { Component, h } from '@stencil/core';

@Component({
  tag: 'tf-user',
  styleUrl: 'user.scss',
  shadow: true
})
export class User {

	render(){
		return(
			<div class="flex-row">
				<div class="avater-container">
					<img class="avatar" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
				</div>
				<div class="details">
					<tf-value-pair>
						<span slot="dark">Bernard Lane</span>
						<span slot="light">bernardlane@example.com</span>
					</tf-value-pair>
				</div>
			</div>
		)
	}
}