import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'tf-input',
	styleUrl: 'input.scss',
  shadow: true
})
export class List {
	@State() showHint: boolean = false;
	@State() showError: boolean = false;
	@State() showLabel: boolean = true;
	@State() showLeadingIcon: boolean = false;
	@State() showTrailingIcon: boolean = false;
	@State() showErrorIcon: boolean = false;
	//
	@Prop( {reflect: true}) name: string = null;
	@Prop( {reflect: true}) label: string = null;
	@Prop( {reflect: true}) placeholder: string = '';
	@Prop( {reflect: true}) inputHint:string = null;
	@Prop() inputError:string = null;
	@Prop( {reflect: true, mutable: true}) error:boolean = false;
	@Prop( {reflect: true, mutable: true}) hideLabel:boolean = false;
	@Prop( {reflect: true}) icon: string = null;
	@Prop( {reflect: true}) iconPosition: string = null;

	@Watch('error')
	errorChanged(newValue:boolean, oldValue:boolean){
		if(newValue !== oldValue){
			this.error = newValue;
			this.setError();
		}
	}
	componentWillLoad(){
		if(this.inputHint){
			this.showHint = true;
		}
		this.setError();
		if(this.hideLabel){
			this.showLabel = false;
		}
		if(this.icon && this.iconPosition){
			if(this.iconPosition == 'left' || this.iconPosition == 'leading'){
				this.showLeadingIcon = true;
			}
			if(this.iconPosition == 'right' || this.iconPosition == 'trailing'){
				this.showTrailingIcon = true;
			}
		}
	}
	// componentDidLoad() {
	// 	//
	// }

	setError(){
		if(!this.inputError){
			this.inputError = 'Error with the input field'
		}
		this.showErrorIcon = this.showError = this.error;
	}
	render(){
		let bottomText = null;
		if(this.showHint){
			bottomText = <p class="hint">{ this.inputHint}</p>
		}
		if(this.showError){
			bottomText = <p class="error">{ this.inputError}</p>
		}
		//

		let leadingSVG = null;
		let trailingSVG = null;
		let IconTag = null;
		//
		if(this.showLeadingIcon || this.showTrailingIcon){
			IconTag = `tf-icon-${this.icon}`
		}
		if(this.showLeadingIcon){
			leadingSVG = (
				<div class="svg-container svg-leading">
					<IconTag class="svg-icon"></IconTag>
				</div>);
		}
		//
		if(this.showTrailingIcon){
			trailingSVG = (
				<div class="svg-container svg-trailing">
					<IconTag class="svg-icon"></IconTag>
				</div>);
		}else if(this.showErrorIcon){
			trailingSVG = (
				<div class="svg-container svg-trailing">
					<tf-icon-exclamation class="svg-error-icon"></tf-icon-exclamation>
				</div>);
		}
		//
		return(
			<div class="label-input-container">
				<label 
					class={
						`${ this.showLabel ? 'form-label' : 'form-label-sr-only'}`
					}
					htmlFor={this.name}
				>
					{ this.label }
				</label>
				<div class="input-container">
					{ leadingSVG }
					<input 
						id={this.name} 
						class={`
							form-input 
							form-input-styled 
							${ this.showError ? 'form-input-error' : ''} 
							${ this.showLeadingIcon ? 'form-input-leading-icon' : ''} 
							${ this.showTrailingIcon || this.showErrorIcon ? 'form-input-trailing-icon' : ''}
						`}
						placeholder={this.placeholder} 
					/>
					{ trailingSVG }
				</div>
				{ bottomText }
			</div>
		)
	}
}