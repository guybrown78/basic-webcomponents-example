import { Component, h, State, Listen } from '@stencil/core';
export class Alerts {
    constructor() {
        this.list = [];
        this.increment = 0;
    }
    onHandleShowAlert(event) {
        event.preventDefault();
        event.stopPropagation();
        const alertObj = Object.assign({ index: this.increment, alertId: `${this.increment}-${String(Math.floor(Math.random() * 99999))}`, hasBeen: false }, event.detail);
        this.list = [...this.list, alertObj];
        this.increment++;
    }
    onHandleCloseDropdown(event) {
        event.preventDefault();
        event.stopPropagation();
        const updatedList = this.list.filter(item => item.alertId !== event.detail.alertId);
        this.list = [...updatedList];
    }
    getAlert(alert) {
        return (h("tf-alert", { message: alert.message, "show-duration": alert.showDuration, "show-button": alert.showButton, colour: alert.colour, icon: alert.icon, "auto-open": "true", "alert-id": alert.alertId, id: alert.alertId, key: alert.alertId }));
    }
    render() {
        return (h("div", { class: "alerts-container" }, this.list.map(alert => {
            return this.getAlert(alert);
        })));
    }
    static get is() { return "tf-alerts"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./alert.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["alert.css"]
    }; }
    static get states() { return {
        "list": {}
    }; }
    static get listeners() { return [{
            "name": "tfShowAlert",
            "method": "onHandleShowAlert",
            "target": "body",
            "capture": true,
            "passive": false
        }, {
            "name": "tfAlertTransitionedOut",
            "method": "onHandleCloseDropdown",
            "target": "parent",
            "capture": true,
            "passive": false
        }]; }
}
