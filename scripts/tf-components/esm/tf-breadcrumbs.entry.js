import { r as registerInstance, h, g as getElement } from './index-67a2bf30.js';

const breadcrumbsCss = ".breadcrumbs-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:start;justify-content:flex-start;width:auto}.breadcrumb-wrapper{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}.breadcrumb-space{display:-ms-flexbox;display:flex;color:#224595;padding-left:0.25rem;padding-right:0.25rem;padding-top:0;padding-bottom:0}.chevron-right{width:20px;height:20px}.breadcrumb-link{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding-left:0.25rem;padding-right:0.25rem;padding-top:0;padding-bottom:0;font-size:1rem;font-family:\"Roboto Condensed\", sans-serif;line-height:1.25rem;font-weight:500;text-decoration:none;cursor:pointer;color:#224595;background-color:#ffffff;-webkit-transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, -webkit-box-shadow, -webkit-transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, -webkit-box-shadow, -webkit-transform;-webkit-transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transition-duration:150ms;transition-duration:150ms}.breadcrumb-link:hover{color:#7A8FBF}.breadcrumb-link:focus{outline:0;color:#173068}.breadcrumb-link-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"Roboto Condensed\", sans-serif;-ms-flex:1 1 0%;flex:1 1 0%}.page-title{margin:0;padding-top:0;padding-bottom:0;padding-left:0.25rem;padding-right:0.25rem;font-size:1rem;font-family:\"Roboto Condensed\", sans-serif;line-height:1.25rem;font-weight:700;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"Roboto Condensed\", sans-serif}.page-message{margin:0;padding-top:0;padding-bottom:0;font-size:1rem;font-family:\"Roboto Condensed\", sans-serif;line-height:1.25rem;font-weight:500;text-decoration:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:\"Roboto Condensed\", sans-serif}";

const Breadcrumbs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("div", { class: "breadcrumbs-container" }, h("slot", null)));
    }
    get slotElement() { return getElement(this); }
};
Breadcrumbs.style = breadcrumbsCss;

export { Breadcrumbs as tf_breadcrumbs };
