import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'tf-lms-delegate-node',
  styleUrl: 'lms-delegate-node.scss',
  shadow: true
})
export class LMSDelegateNode {

	@Prop({ reflect: true }) delegateId: string = "-";
	@Prop({ reflect: true }) delegateStatus: string = "none";
	@Prop({ reflect: true }) delegateName: string = "-";
	@Prop({ reflect: true }) delegateDob: string = "-";
	@Prop({ reflect: true }) courseTitle: string = "-";
	@Prop({ reflect: true }) courseCode: string = "-";
	@Prop({ reflect: true }) delegateCoursesCount: number;
	@State() isMobileViewOpen: boolean = false;

	onMenuClicked(){
		this.isMobileViewOpen = !this.isMobileViewOpen;
	}

	render(){
		// LMS specific logic to set the bookend
		const statusColour = this.delegateStatus == "complete" ? 'green' 
			: this.delegateStatus == "incomplete" ? 'red' 
			: this.delegateStatus == "inprogress" ? 'amber'
			: 'none'
		return(
			<div id={`delegate-${this.delegateId}`} class="delegate-node">
				<tf-node>
					
					<div id="status">
						<tf-node-status-bookend 
							color={statusColour}
						/>
					</div>

					<div 
						id="delegate-details-container"
						class={ this.isMobileViewOpen ? 'show' : 'hide'}
					>
						<div id="delegate-details">
							<div id="delegate-name">{this.delegateName}</div>
							<div id="delegate-dob">{this.delegateDob}</div>
						</div>
						<div 
							id="course-details" 
							class={ this.isMobileViewOpen ? 'show' : 'hide'}
						>
							<div id="detail-title">Course:</div>
							<div id="course-title">{this.courseTitle}</div>
							<div id="course-code">{this.courseCode}</div>
						</div>
						<div 
							id="delegate-courses-count"
							class={ this.isMobileViewOpen ? 'show' : 'hide'}
						>
							<div id="detail-title">Number of Courses:</div>
							<div id="course-count">{this.delegateCoursesCount}</div>
							
						</div> 
					</div>
					

					<div id="delegate-action">
						<tf-node-select-menu />
						<button 
							onClick={this.onMenuClicked.bind(this)} 
							id="toggle-oppen-close-delegate"
						>
							<span>X</span>
						</button>
					</div>
					
				</tf-node>

				<div 
					id="mobile-node-actions"
					class={ this.isMobileViewOpen ? 'show' : 'hide'}
				>
					<button class="dropdown-item-btn" id="">
						<span id="title">View</span>
					</button>
					<button class="dropdown-item-btn" id="">
						<span id="title">Assign to Course</span>
					</button>
					<button class="dropdown-item-btn" id="">
						<span id="title">Assign to Cattegory</span>
					</button>
					<button class="dropdown-item-btn" id="">
						<span id="title">Remove</span>
					</button>
				</div>
			</div>
		)
	}
}