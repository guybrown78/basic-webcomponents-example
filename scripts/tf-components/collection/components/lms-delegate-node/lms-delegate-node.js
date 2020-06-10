import { Component, h, Prop, State } from '@stencil/core';
export class LMSDelegateNode {
    constructor() {
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
        return (h("div", { id: `delegate-${this.delegateId}`, class: "delegate-node" },
            h("tf-node", null,
                h("div", { id: "status" },
                    h("tf-node-status-bookend", { color: statusColour })),
                h("div", { id: "delegate-details-container", class: this.isMobileViewOpen ? 'show' : 'hide' },
                    h("div", { id: "delegate-details" },
                        h("div", { id: "delegate-name" }, this.delegateName),
                        h("div", { id: "delegate-dob" }, this.delegateDob)),
                    h("div", { id: "course-details", class: this.isMobileViewOpen ? 'show' : 'hide' },
                        h("div", { id: "detail-title" }, "Course:"),
                        h("div", { id: "course-title" }, this.courseTitle),
                        h("div", { id: "course-code" }, this.courseCode)),
                    h("div", { id: "delegate-courses-count", class: this.isMobileViewOpen ? 'show' : 'hide' },
                        h("div", { id: "detail-title" }, "Number of Courses:"),
                        h("div", { id: "course-count" }, this.delegateCoursesCount))),
                h("div", { id: "delegate-action" },
                    h("tf-node-select-menu", null),
                    h("button", { onClick: this.onMenuClicked.bind(this), id: "toggle-oppen-close-delegate" },
                        h("span", null, "X")))),
            h("div", { id: "mobile-node-actions", class: this.isMobileViewOpen ? 'show' : 'hide' },
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "View")),
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "Assign to Course")),
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "Assign to Cattegory")),
                h("button", { class: "dropdown-item-btn", id: "" },
                    h("span", { id: "title" }, "Remove")))));
    }
    static get is() { return "tf-lms-delegate-node"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["lms-delegate-node.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["lms-delegate-node.css"]
    }; }
    static get properties() { return {
        "delegateId": {
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
            "attribute": "delegate-id",
            "reflect": true,
            "defaultValue": "\"-\""
        },
        "delegateStatus": {
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
            "attribute": "delegate-status",
            "reflect": true,
            "defaultValue": "\"none\""
        },
        "delegateName": {
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
            "attribute": "delegate-name",
            "reflect": true,
            "defaultValue": "\"-\""
        },
        "delegateDob": {
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
            "attribute": "delegate-dob",
            "reflect": true,
            "defaultValue": "\"-\""
        },
        "courseTitle": {
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
            "attribute": "course-title",
            "reflect": true,
            "defaultValue": "\"-\""
        },
        "courseCode": {
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
            "attribute": "course-code",
            "reflect": true,
            "defaultValue": "\"-\""
        },
        "delegateCoursesCount": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "delegate-courses-count",
            "reflect": true
        }
    }; }
    static get states() { return {
        "isMobileViewOpen": {}
    }; }
}
