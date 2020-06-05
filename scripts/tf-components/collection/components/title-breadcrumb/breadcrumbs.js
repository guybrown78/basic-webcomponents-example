import { Component, Prop, h, Element } from '@stencil/core';
export class Breadcrumbs {
    constructor() {
        this.showBackButton = false;
        this.backButtonColour = "white";
    }
    // @Event({ bubbles:true, composed:true }) tfBackButtonClicked: EventEmitter<any>;
    // items:any [] = [];
    // onBackButtonClicked(){
    // 	this.tfBackButtonClicked.emit();
    // }
    // componentWillLoad(){
    // 	const items:HTMLCollection = this.slotElement.getElementsByTagName('tf-breadcrumb');
    // 	Array.from(items).forEach(bc => {
    // 		const link = bc.getAttribute('href-link');
    // 		const linkTitle = bc.getAttribute('href-title');
    // 		const routerLink = bc.getAttribute('router-link');
    // 		this.items.push(
    // 			{
    // 				link,
    // 				linkTitle,
    // 				routerLink,
    // 				body:bc.innerHTML
    // 			}
    // 		);
    // 	});
    // }
    render() {
        // const bcs = this.items.map(item => {
        // 	return (
        // 		<div class="breadcrumb-wrapper">
        // 			<tf-breadcrumb 
        // 				href-link={item.link}
        // 				href-title={item.linkTitle}
        // 				router-link={item.router}
        // 			>
        // 				{ item.body }
        // 			</tf-breadcrumb>
        // 			<div class="breadcrumb-space">
        // 				<tf-icon-chevron-right class="chevron-right"/>
        // 			</div>
        // 		</div>
        // 	)
        // });
        return (h("div", { class: "breadcrumbs-container" },
            h("slot", null)));
    }
    static get is() { return "tf-breadcrumbs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["breadcrumbs.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["breadcrumbs.css"]
    }; }
    static get properties() { return {
        "showBackButton": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "show-back-button",
            "reflect": true,
            "defaultValue": "false"
        },
        "backButtonColour": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "back-button-colour",
            "reflect": true,
            "defaultValue": "\"white\""
        }
    }; }
    static get elementRef() { return "slotElement"; }
}
