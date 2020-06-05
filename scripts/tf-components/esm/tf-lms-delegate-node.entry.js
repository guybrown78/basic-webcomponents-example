import { r as registerInstance, h } from './index-67a2bf30.js';

const lmsDelegateNodeCss = "@media only screen and (max-width: 640px){.delegate-node{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden;border-radius:0.4375rem}}tf-node{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;z-index:2}#status{width:5%}@media only screen and (max-width: 640px){#status{width:45px;height:100%}}tf-node-status-bookend{width:22px;height:42px}@media only screen and (max-width: 640px){tf-node-status-bookend{height:100%}}#delegate-details-container{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center}@media only screen and (max-width: 640px){#delegate-details-container{-ms-flex-direction:column;flex-direction:column;overflow:hidden}#delegate-details-container.show{height:174px;-webkit-transition:height 0.2s ease-out;transition:height 0.2s ease-out}#delegate-details-container.hide{height:48px;-webkit-transition:height 0.4s ease-out;transition:height 0.4s ease-out}}#delegate-details,#course-details,#delegate-courses-count{width:33.3%;line-height:1.2;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center}@media only screen and (max-width: 640px){#delegate-details,#course-details,#delegate-courses-count{width:100%;padding-top:0.4375rem;padding-bottom:0.4375rem}}@media only screen and (max-width: 640px){#course-details,#delegate-courses-count{-webkit-transition:all 0.4s ease-out;transition:all 0.4s ease-out}#course-details.show,#delegate-courses-count.show{opacity:1;pointer-events:all}#course-details.hide,#delegate-courses-count.hide{opacity:0;pointer-events:none}}@media only screen and (max-width: 640px){#course-details{border-top:solid 1px #d0dfe3;border-bottom:solid 1px #d0dfe3}}#delegate-dob,#course-code{font-size:0.75rem;color:#68657e}#detail-title{display:none;text-transform:uppercase;font-size:0.5625rem;color:#68657e;line-height:1.25rem}@media only screen and (max-width: 640px){#detail-title{display:block}}#delegate-action{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}@media only screen and (max-width: 640px){#delegate-action{width:27px;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:center;justify-content:center;-ms-flex-item-align:start;align-self:flex-start;margin-top:0.875rem}}@media only screen and (max-width: 640px){tf-node-select-menu{display:none}}#toggle-oppen-close-delegate{display:none;background-color:#d0dfe3;color:#363154;font-size:0.625rem;line-height:0.625rem;border:none;cursor:pointer;padding:0;margin:0;text-align:center;width:1.25rem;height:1.25rem;border-radius:0.625rem;-ms-flex-pack:center;justify-content:center;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;}#toggle-oppen-close-delegate:hover{background:#4b4474;background-color:#4b4474;color:#ffffff}#toggle-oppen-close-delegate:active{background:#7a72ac;background-color:#7a72ac;color:#ffffff}#toggle-oppen-close-delegate:focus{background:#363154;background-color:#363154;color:#ffffff}@media only screen and (max-width: 640px){#toggle-oppen-close-delegate{display:-ms-flexbox;display:flex}}#mobile-node-actions{background-color:#363154;padding:2.5rem 1.563rem 1.563rem;border-radius:0 0 0.4375rem 0.4375rem;margin-bottom:0.3125rem;-webkit-box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);box-shadow:0 0.1875rem 0.375rem 0 rgba(0, 0, 0, 0.16);min-height:50px;display:none;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:justify;justify-content:space-between;z-index:1}@media only screen and (max-width: 640px){#mobile-node-actions{display:-ms-flexbox;display:flex}#mobile-node-actions.show{-webkit-transition:all 0.4s 0.4s ease-out;transition:all 0.4s 0.4s ease-out;opacity:1;pointer-events:all;margin-top:-20px}#mobile-node-actions.hide{-webkit-transition:all 0.2s ease-out;transition:all 0.2s ease-out;opacity:0;pointer-events:none;margin-top:-172px}}.dropdown-item-btn{display:-ms-flexbox;display:flex;background-color:#d0dfe3;color:#363154;font-size:0.75rem;border:none;cursor:pointer;padding:0;margin:0;text-align:center;border-radius:0.1875rem;text-transform:uppercase;cursor:pointer;outline:none;-webkit-transition:all 0.4s;transition:all 0.4s;width:48%;-ms-flex-pack:center;justify-content:center;margin-bottom:0.3125rem}.dropdown-item-btn:hover{background:#19326b;background-color:#19326b;color:#ffffff}.dropdown-item-btn:active{background:#3b69d2;background-color:#3b69d2;color:#ffffff}.dropdown-item-btn:focus{background:#224595;background-color:#224595;color:#ffffff}.dropdown-item-btn span{padding:0.9375rem;display:-ms-flexbox;display:flex}";

const LMSDelegateNode = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.delegateId = "-";
        this.delegateStatus = "none";
        this.delegateName = "-";
        this.delegateDob = "-";
        this.courseTitle = "-";
        this.courseCode = "-";
        this.isMobileViewOpen = false;
    }
    onMenuClicked() {
        this.isMobileViewOpen = !this.isMobileViewOpen;
    }
    render() {
        // LMS specific logic to set the bookend
        const statusColour = this.delegateStatus == "complete" ? 'green'
            : this.delegateStatus == "incomplete" ? 'red'
                : this.delegateStatus == "inprogress" ? 'amber'
                    : 'none';
        return (h("div", { id: `delegate-${this.delegateId}`, class: "delegate-node" }, h("tf-node", null, h("div", { id: "status" }, h("tf-node-status-bookend", { color: statusColour })), h("div", { id: "delegate-details-container", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("div", { id: "delegate-details" }, h("div", { id: "delegate-name" }, this.delegateName), h("div", { id: "delegate-dob" }, this.delegateDob)), h("div", { id: "course-details", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("div", { id: "detail-title" }, "Course:"), h("div", { id: "course-title" }, this.courseTitle), h("div", { id: "course-code" }, this.courseCode)), h("div", { id: "delegate-courses-count", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("div", { id: "detail-title" }, "Number of Courses:"), h("div", { id: "course-count" }, this.delegateCoursesCount))), h("div", { id: "delegate-action" }, h("tf-node-select-menu", null), h("button", { onClick: this.onMenuClicked.bind(this), id: "toggle-oppen-close-delegate" }, h("span", null, "X")))), h("div", { id: "mobile-node-actions", class: this.isMobileViewOpen ? 'show' : 'hide' }, h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "View")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Course")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Assign to Cattegory")), h("button", { class: "dropdown-item-btn", id: "" }, h("span", { id: "title" }, "Remove")))));
    }
};
LMSDelegateNode.style = lmsDelegateNodeCss;

export { LMSDelegateNode as tf_lms_delegate_node };
