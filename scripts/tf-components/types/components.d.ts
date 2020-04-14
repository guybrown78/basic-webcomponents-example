/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface TfATag {
    'tagTitle': string;
    'url': string;
  }
  interface TfAppHeader {
    'appInitials': string;
    'appTitle': string;
    'clientLogoSource': string;
  }
  interface TfButton {
    'buttonType': string;
    'colour': string;
    'disabled': boolean;
    'icon': any;
    'iconPosition': string;
    'size': string;
  }
  interface TfButtonContainer {
    'size': string;
  }
  interface TfCard {
    'colour': string;
  }
  interface TfHexagon {
    'asButton': boolean;
    'color': string;
  }
  interface TfHexagonButton {
    'color': string;
  }
  interface TfHexagonSvg {
    'color': string;
    'height': number;
    'size': string;
    'width': number;
  }
  interface TfIconCheck {}
  interface TfIconChevronDown {}
  interface TfIconChevronLeft {}
  interface TfIconChevronRight {}
  interface TfIconChevronUp {}
  interface TfIconClose {}
  interface TfIconEnvelope {}
  interface TfIconExclamation {}
  interface TfIconNotification {}
  interface TfIconSearch {}
  interface TfIconUser {}
  interface TfInput {
    'error': boolean;
    'getInputRef': () => Promise<HTMLInputElement>;
    'getValue': () => Promise<string>;
    'hideLabel': boolean;
    'icon': string;
    'iconPosition': string;
    'inputAutoComplete': string;
    'inputError': string;
    'inputHint': string;
    'inputRequired': boolean;
    'inputType': string;
    'label': string;
    'name': string;
    'placeholder': string;
    'value': string;
  }
  interface TfLeadingIconLabel {
    'contentAlign': string;
    'order': number;
  }
  interface TfList {}
  interface TfListWrappingCell {
    'contentAlign': string;
    'order': number;
  }
  interface TfListWrappingItem {}
  interface TfLmsDelegateNode {
    'courseCode': string;
    'courseTitle': string;
    'delegateCoursesCount': number;
    'delegateDob': string;
    'delegateId': string;
    'delegateName': string;
    'delegateStatus': string;
  }
  interface TfLoginForm {
    'apiEndpoint': string;
    'apiHeaders': any;
    'apiMethod': string;
    'bodyPropEmail': string;
    'bodyPropPassword': string;
    'forgottenUrl': string;
  }
  interface TfMainContent {}
  interface TfMenuBar {}
  interface TfModal {
    'displayTitle': string;
  }
  interface TfNode {}
  interface TfNodeList {}
  interface TfNodeSelectMenu {}
  interface TfNodeStatusBookend {
    'color': string;
    'showTooltip': boolean;
  }
  interface TfSideDrawer {
    'displayTitle': string;
    'open': () => Promise<void>;
    'opened': boolean;
  }
  interface TfSideDrawerNav {}
  interface TfSideDrawerNavLink {
    'hrefLink': string;
    'hrefTitle': string;
  }
  interface TfSideDrawerSubNav {}
  interface TfSideDrawerSubNavLink {
    'hrefLink': string;
    'hrefTitle': string;
  }
  interface TfSpinner {}
  interface TfStatDataCard {
    'colour': string;
  }
  interface TfStatsPanel {}
  interface TfStatus {
    'trafficLightColour': string;
  }
  interface TfTable {}
  interface TfTableCell {
    'textAlign': string;
  }
  interface TfTableHead {}
  interface TfTableHeadCell {}
  interface TfTableRow {}
  interface TfUser {}
  interface TfValuePair {}
}

declare global {


  interface HTMLTfATagElement extends Components.TfATag, HTMLStencilElement {}
  var HTMLTfATagElement: {
    prototype: HTMLTfATagElement;
    new (): HTMLTfATagElement;
  };

  interface HTMLTfAppHeaderElement extends Components.TfAppHeader, HTMLStencilElement {}
  var HTMLTfAppHeaderElement: {
    prototype: HTMLTfAppHeaderElement;
    new (): HTMLTfAppHeaderElement;
  };

  interface HTMLTfButtonElement extends Components.TfButton, HTMLStencilElement {}
  var HTMLTfButtonElement: {
    prototype: HTMLTfButtonElement;
    new (): HTMLTfButtonElement;
  };

  interface HTMLTfButtonContainerElement extends Components.TfButtonContainer, HTMLStencilElement {}
  var HTMLTfButtonContainerElement: {
    prototype: HTMLTfButtonContainerElement;
    new (): HTMLTfButtonContainerElement;
  };

  interface HTMLTfCardElement extends Components.TfCard, HTMLStencilElement {}
  var HTMLTfCardElement: {
    prototype: HTMLTfCardElement;
    new (): HTMLTfCardElement;
  };

  interface HTMLTfHexagonElement extends Components.TfHexagon, HTMLStencilElement {}
  var HTMLTfHexagonElement: {
    prototype: HTMLTfHexagonElement;
    new (): HTMLTfHexagonElement;
  };

  interface HTMLTfHexagonButtonElement extends Components.TfHexagonButton, HTMLStencilElement {}
  var HTMLTfHexagonButtonElement: {
    prototype: HTMLTfHexagonButtonElement;
    new (): HTMLTfHexagonButtonElement;
  };

  interface HTMLTfHexagonSvgElement extends Components.TfHexagonSvg, HTMLStencilElement {}
  var HTMLTfHexagonSvgElement: {
    prototype: HTMLTfHexagonSvgElement;
    new (): HTMLTfHexagonSvgElement;
  };

  interface HTMLTfIconCheckElement extends Components.TfIconCheck, HTMLStencilElement {}
  var HTMLTfIconCheckElement: {
    prototype: HTMLTfIconCheckElement;
    new (): HTMLTfIconCheckElement;
  };

  interface HTMLTfIconChevronDownElement extends Components.TfIconChevronDown, HTMLStencilElement {}
  var HTMLTfIconChevronDownElement: {
    prototype: HTMLTfIconChevronDownElement;
    new (): HTMLTfIconChevronDownElement;
  };

  interface HTMLTfIconChevronLeftElement extends Components.TfIconChevronLeft, HTMLStencilElement {}
  var HTMLTfIconChevronLeftElement: {
    prototype: HTMLTfIconChevronLeftElement;
    new (): HTMLTfIconChevronLeftElement;
  };

  interface HTMLTfIconChevronRightElement extends Components.TfIconChevronRight, HTMLStencilElement {}
  var HTMLTfIconChevronRightElement: {
    prototype: HTMLTfIconChevronRightElement;
    new (): HTMLTfIconChevronRightElement;
  };

  interface HTMLTfIconChevronUpElement extends Components.TfIconChevronUp, HTMLStencilElement {}
  var HTMLTfIconChevronUpElement: {
    prototype: HTMLTfIconChevronUpElement;
    new (): HTMLTfIconChevronUpElement;
  };

  interface HTMLTfIconCloseElement extends Components.TfIconClose, HTMLStencilElement {}
  var HTMLTfIconCloseElement: {
    prototype: HTMLTfIconCloseElement;
    new (): HTMLTfIconCloseElement;
  };

  interface HTMLTfIconEnvelopeElement extends Components.TfIconEnvelope, HTMLStencilElement {}
  var HTMLTfIconEnvelopeElement: {
    prototype: HTMLTfIconEnvelopeElement;
    new (): HTMLTfIconEnvelopeElement;
  };

  interface HTMLTfIconExclamationElement extends Components.TfIconExclamation, HTMLStencilElement {}
  var HTMLTfIconExclamationElement: {
    prototype: HTMLTfIconExclamationElement;
    new (): HTMLTfIconExclamationElement;
  };

  interface HTMLTfIconNotificationElement extends Components.TfIconNotification, HTMLStencilElement {}
  var HTMLTfIconNotificationElement: {
    prototype: HTMLTfIconNotificationElement;
    new (): HTMLTfIconNotificationElement;
  };

  interface HTMLTfIconSearchElement extends Components.TfIconSearch, HTMLStencilElement {}
  var HTMLTfIconSearchElement: {
    prototype: HTMLTfIconSearchElement;
    new (): HTMLTfIconSearchElement;
  };

  interface HTMLTfIconUserElement extends Components.TfIconUser, HTMLStencilElement {}
  var HTMLTfIconUserElement: {
    prototype: HTMLTfIconUserElement;
    new (): HTMLTfIconUserElement;
  };

  interface HTMLTfInputElement extends Components.TfInput, HTMLStencilElement {}
  var HTMLTfInputElement: {
    prototype: HTMLTfInputElement;
    new (): HTMLTfInputElement;
  };

  interface HTMLTfLeadingIconLabelElement extends Components.TfLeadingIconLabel, HTMLStencilElement {}
  var HTMLTfLeadingIconLabelElement: {
    prototype: HTMLTfLeadingIconLabelElement;
    new (): HTMLTfLeadingIconLabelElement;
  };

  interface HTMLTfListElement extends Components.TfList, HTMLStencilElement {}
  var HTMLTfListElement: {
    prototype: HTMLTfListElement;
    new (): HTMLTfListElement;
  };

  interface HTMLTfListWrappingCellElement extends Components.TfListWrappingCell, HTMLStencilElement {}
  var HTMLTfListWrappingCellElement: {
    prototype: HTMLTfListWrappingCellElement;
    new (): HTMLTfListWrappingCellElement;
  };

  interface HTMLTfListWrappingItemElement extends Components.TfListWrappingItem, HTMLStencilElement {}
  var HTMLTfListWrappingItemElement: {
    prototype: HTMLTfListWrappingItemElement;
    new (): HTMLTfListWrappingItemElement;
  };

  interface HTMLTfLmsDelegateNodeElement extends Components.TfLmsDelegateNode, HTMLStencilElement {}
  var HTMLTfLmsDelegateNodeElement: {
    prototype: HTMLTfLmsDelegateNodeElement;
    new (): HTMLTfLmsDelegateNodeElement;
  };

  interface HTMLTfLoginFormElement extends Components.TfLoginForm, HTMLStencilElement {}
  var HTMLTfLoginFormElement: {
    prototype: HTMLTfLoginFormElement;
    new (): HTMLTfLoginFormElement;
  };

  interface HTMLTfMainContentElement extends Components.TfMainContent, HTMLStencilElement {}
  var HTMLTfMainContentElement: {
    prototype: HTMLTfMainContentElement;
    new (): HTMLTfMainContentElement;
  };

  interface HTMLTfMenuBarElement extends Components.TfMenuBar, HTMLStencilElement {}
  var HTMLTfMenuBarElement: {
    prototype: HTMLTfMenuBarElement;
    new (): HTMLTfMenuBarElement;
  };

  interface HTMLTfModalElement extends Components.TfModal, HTMLStencilElement {}
  var HTMLTfModalElement: {
    prototype: HTMLTfModalElement;
    new (): HTMLTfModalElement;
  };

  interface HTMLTfNodeElement extends Components.TfNode, HTMLStencilElement {}
  var HTMLTfNodeElement: {
    prototype: HTMLTfNodeElement;
    new (): HTMLTfNodeElement;
  };

  interface HTMLTfNodeListElement extends Components.TfNodeList, HTMLStencilElement {}
  var HTMLTfNodeListElement: {
    prototype: HTMLTfNodeListElement;
    new (): HTMLTfNodeListElement;
  };

  interface HTMLTfNodeSelectMenuElement extends Components.TfNodeSelectMenu, HTMLStencilElement {}
  var HTMLTfNodeSelectMenuElement: {
    prototype: HTMLTfNodeSelectMenuElement;
    new (): HTMLTfNodeSelectMenuElement;
  };

  interface HTMLTfNodeStatusBookendElement extends Components.TfNodeStatusBookend, HTMLStencilElement {}
  var HTMLTfNodeStatusBookendElement: {
    prototype: HTMLTfNodeStatusBookendElement;
    new (): HTMLTfNodeStatusBookendElement;
  };

  interface HTMLTfSideDrawerElement extends Components.TfSideDrawer, HTMLStencilElement {}
  var HTMLTfSideDrawerElement: {
    prototype: HTMLTfSideDrawerElement;
    new (): HTMLTfSideDrawerElement;
  };

  interface HTMLTfSideDrawerNavElement extends Components.TfSideDrawerNav, HTMLStencilElement {}
  var HTMLTfSideDrawerNavElement: {
    prototype: HTMLTfSideDrawerNavElement;
    new (): HTMLTfSideDrawerNavElement;
  };

  interface HTMLTfSideDrawerNavLinkElement extends Components.TfSideDrawerNavLink, HTMLStencilElement {}
  var HTMLTfSideDrawerNavLinkElement: {
    prototype: HTMLTfSideDrawerNavLinkElement;
    new (): HTMLTfSideDrawerNavLinkElement;
  };

  interface HTMLTfSideDrawerSubNavElement extends Components.TfSideDrawerSubNav, HTMLStencilElement {}
  var HTMLTfSideDrawerSubNavElement: {
    prototype: HTMLTfSideDrawerSubNavElement;
    new (): HTMLTfSideDrawerSubNavElement;
  };

  interface HTMLTfSideDrawerSubNavLinkElement extends Components.TfSideDrawerSubNavLink, HTMLStencilElement {}
  var HTMLTfSideDrawerSubNavLinkElement: {
    prototype: HTMLTfSideDrawerSubNavLinkElement;
    new (): HTMLTfSideDrawerSubNavLinkElement;
  };

  interface HTMLTfSpinnerElement extends Components.TfSpinner, HTMLStencilElement {}
  var HTMLTfSpinnerElement: {
    prototype: HTMLTfSpinnerElement;
    new (): HTMLTfSpinnerElement;
  };

  interface HTMLTfStatDataCardElement extends Components.TfStatDataCard, HTMLStencilElement {}
  var HTMLTfStatDataCardElement: {
    prototype: HTMLTfStatDataCardElement;
    new (): HTMLTfStatDataCardElement;
  };

  interface HTMLTfStatsPanelElement extends Components.TfStatsPanel, HTMLStencilElement {}
  var HTMLTfStatsPanelElement: {
    prototype: HTMLTfStatsPanelElement;
    new (): HTMLTfStatsPanelElement;
  };

  interface HTMLTfStatusElement extends Components.TfStatus, HTMLStencilElement {}
  var HTMLTfStatusElement: {
    prototype: HTMLTfStatusElement;
    new (): HTMLTfStatusElement;
  };

  interface HTMLTfTableElement extends Components.TfTable, HTMLStencilElement {}
  var HTMLTfTableElement: {
    prototype: HTMLTfTableElement;
    new (): HTMLTfTableElement;
  };

  interface HTMLTfTableCellElement extends Components.TfTableCell, HTMLStencilElement {}
  var HTMLTfTableCellElement: {
    prototype: HTMLTfTableCellElement;
    new (): HTMLTfTableCellElement;
  };

  interface HTMLTfTableHeadElement extends Components.TfTableHead, HTMLStencilElement {}
  var HTMLTfTableHeadElement: {
    prototype: HTMLTfTableHeadElement;
    new (): HTMLTfTableHeadElement;
  };

  interface HTMLTfTableHeadCellElement extends Components.TfTableHeadCell, HTMLStencilElement {}
  var HTMLTfTableHeadCellElement: {
    prototype: HTMLTfTableHeadCellElement;
    new (): HTMLTfTableHeadCellElement;
  };

  interface HTMLTfTableRowElement extends Components.TfTableRow, HTMLStencilElement {}
  var HTMLTfTableRowElement: {
    prototype: HTMLTfTableRowElement;
    new (): HTMLTfTableRowElement;
  };

  interface HTMLTfUserElement extends Components.TfUser, HTMLStencilElement {}
  var HTMLTfUserElement: {
    prototype: HTMLTfUserElement;
    new (): HTMLTfUserElement;
  };

  interface HTMLTfValuePairElement extends Components.TfValuePair, HTMLStencilElement {}
  var HTMLTfValuePairElement: {
    prototype: HTMLTfValuePairElement;
    new (): HTMLTfValuePairElement;
  };
  interface HTMLElementTagNameMap {
    'tf-a-tag': HTMLTfATagElement;
    'tf-app-header': HTMLTfAppHeaderElement;
    'tf-button': HTMLTfButtonElement;
    'tf-button-container': HTMLTfButtonContainerElement;
    'tf-card': HTMLTfCardElement;
    'tf-hexagon': HTMLTfHexagonElement;
    'tf-hexagon-button': HTMLTfHexagonButtonElement;
    'tf-hexagon-svg': HTMLTfHexagonSvgElement;
    'tf-icon-check': HTMLTfIconCheckElement;
    'tf-icon-chevron-down': HTMLTfIconChevronDownElement;
    'tf-icon-chevron-left': HTMLTfIconChevronLeftElement;
    'tf-icon-chevron-right': HTMLTfIconChevronRightElement;
    'tf-icon-chevron-up': HTMLTfIconChevronUpElement;
    'tf-icon-close': HTMLTfIconCloseElement;
    'tf-icon-envelope': HTMLTfIconEnvelopeElement;
    'tf-icon-exclamation': HTMLTfIconExclamationElement;
    'tf-icon-notification': HTMLTfIconNotificationElement;
    'tf-icon-search': HTMLTfIconSearchElement;
    'tf-icon-user': HTMLTfIconUserElement;
    'tf-input': HTMLTfInputElement;
    'tf-leading-icon-label': HTMLTfLeadingIconLabelElement;
    'tf-list': HTMLTfListElement;
    'tf-list-wrapping-cell': HTMLTfListWrappingCellElement;
    'tf-list-wrapping-item': HTMLTfListWrappingItemElement;
    'tf-lms-delegate-node': HTMLTfLmsDelegateNodeElement;
    'tf-login-form': HTMLTfLoginFormElement;
    'tf-main-content': HTMLTfMainContentElement;
    'tf-menu-bar': HTMLTfMenuBarElement;
    'tf-modal': HTMLTfModalElement;
    'tf-node': HTMLTfNodeElement;
    'tf-node-list': HTMLTfNodeListElement;
    'tf-node-select-menu': HTMLTfNodeSelectMenuElement;
    'tf-node-status-bookend': HTMLTfNodeStatusBookendElement;
    'tf-side-drawer': HTMLTfSideDrawerElement;
    'tf-side-drawer-nav': HTMLTfSideDrawerNavElement;
    'tf-side-drawer-nav-link': HTMLTfSideDrawerNavLinkElement;
    'tf-side-drawer-sub-nav': HTMLTfSideDrawerSubNavElement;
    'tf-side-drawer-sub-nav-link': HTMLTfSideDrawerSubNavLinkElement;
    'tf-spinner': HTMLTfSpinnerElement;
    'tf-stat-data-card': HTMLTfStatDataCardElement;
    'tf-stats-panel': HTMLTfStatsPanelElement;
    'tf-status': HTMLTfStatusElement;
    'tf-table': HTMLTfTableElement;
    'tf-table-cell': HTMLTfTableCellElement;
    'tf-table-head': HTMLTfTableHeadElement;
    'tf-table-head-cell': HTMLTfTableHeadCellElement;
    'tf-table-row': HTMLTfTableRowElement;
    'tf-user': HTMLTfUserElement;
    'tf-value-pair': HTMLTfValuePairElement;
  }
}

declare namespace LocalJSX {
  interface TfATag {
    'tagTitle'?: string;
    'url'?: string;
  }
  interface TfAppHeader {
    'appInitials'?: string;
    'appTitle'?: string;
    'clientLogoSource'?: string;
    'onTfAppLogoClicked'?: (event: CustomEvent<string>) => void;
  }
  interface TfButton {
    'buttonType'?: string;
    'colour'?: string;
    'disabled'?: boolean;
    'icon'?: any;
    'iconPosition'?: string;
    'size'?: string;
  }
  interface TfButtonContainer {
    'size'?: string;
  }
  interface TfCard {
    'colour'?: string;
  }
  interface TfHexagon {
    'asButton'?: boolean;
    'color'?: string;
  }
  interface TfHexagonButton {
    'color'?: string;
  }
  interface TfHexagonSvg {
    'color'?: string;
    'height'?: number;
    'size'?: string;
    'width'?: number;
  }
  interface TfIconCheck {}
  interface TfIconChevronDown {}
  interface TfIconChevronLeft {}
  interface TfIconChevronRight {}
  interface TfIconChevronUp {}
  interface TfIconClose {}
  interface TfIconEnvelope {}
  interface TfIconExclamation {}
  interface TfIconNotification {}
  interface TfIconSearch {}
  interface TfIconUser {}
  interface TfInput {
    'error'?: boolean;
    'hideLabel'?: boolean;
    'icon'?: string;
    'iconPosition'?: string;
    'inputAutoComplete'?: string;
    'inputError'?: string;
    'inputHint'?: string;
    'inputRequired'?: boolean;
    'inputType'?: string;
    'label'?: string;
    'name'?: string;
    'placeholder'?: string;
    'value'?: string;
  }
  interface TfLeadingIconLabel {
    'contentAlign'?: string;
    'order'?: number;
  }
  interface TfList {}
  interface TfListWrappingCell {
    'contentAlign'?: string;
    'order'?: number;
  }
  interface TfListWrappingItem {}
  interface TfLmsDelegateNode {
    'courseCode'?: string;
    'courseTitle'?: string;
    'delegateCoursesCount'?: number;
    'delegateDob'?: string;
    'delegateId'?: string;
    'delegateName'?: string;
    'delegateStatus'?: string;
  }
  interface TfLoginForm {
    'apiEndpoint'?: string;
    'apiHeaders'?: any;
    'apiMethod'?: string;
    'bodyPropEmail'?: string;
    'bodyPropPassword'?: string;
    'forgottenUrl'?: string;
    'onTfLoginSuccess'?: (event: CustomEvent<any>) => void;
  }
  interface TfMainContent {}
  interface TfMenuBar {}
  interface TfModal {
    'displayTitle'?: string;
  }
  interface TfNode {}
  interface TfNodeList {}
  interface TfNodeSelectMenu {}
  interface TfNodeStatusBookend {
    'color'?: string;
    'showTooltip'?: boolean;
  }
  interface TfSideDrawer {
    'displayTitle'?: string;
    'opened'?: boolean;
  }
  interface TfSideDrawerNav {}
  interface TfSideDrawerNavLink {
    'hrefLink'?: string;
    'hrefTitle'?: string;
  }
  interface TfSideDrawerSubNav {}
  interface TfSideDrawerSubNavLink {
    'hrefLink'?: string;
    'hrefTitle'?: string;
  }
  interface TfSpinner {}
  interface TfStatDataCard {
    'colour'?: string;
  }
  interface TfStatsPanel {}
  interface TfStatus {
    'trafficLightColour'?: string;
  }
  interface TfTable {}
  interface TfTableCell {
    'textAlign'?: string;
  }
  interface TfTableHead {}
  interface TfTableHeadCell {}
  interface TfTableRow {}
  interface TfUser {}
  interface TfValuePair {}

  interface IntrinsicElements {
    'tf-a-tag': TfATag;
    'tf-app-header': TfAppHeader;
    'tf-button': TfButton;
    'tf-button-container': TfButtonContainer;
    'tf-card': TfCard;
    'tf-hexagon': TfHexagon;
    'tf-hexagon-button': TfHexagonButton;
    'tf-hexagon-svg': TfHexagonSvg;
    'tf-icon-check': TfIconCheck;
    'tf-icon-chevron-down': TfIconChevronDown;
    'tf-icon-chevron-left': TfIconChevronLeft;
    'tf-icon-chevron-right': TfIconChevronRight;
    'tf-icon-chevron-up': TfIconChevronUp;
    'tf-icon-close': TfIconClose;
    'tf-icon-envelope': TfIconEnvelope;
    'tf-icon-exclamation': TfIconExclamation;
    'tf-icon-notification': TfIconNotification;
    'tf-icon-search': TfIconSearch;
    'tf-icon-user': TfIconUser;
    'tf-input': TfInput;
    'tf-leading-icon-label': TfLeadingIconLabel;
    'tf-list': TfList;
    'tf-list-wrapping-cell': TfListWrappingCell;
    'tf-list-wrapping-item': TfListWrappingItem;
    'tf-lms-delegate-node': TfLmsDelegateNode;
    'tf-login-form': TfLoginForm;
    'tf-main-content': TfMainContent;
    'tf-menu-bar': TfMenuBar;
    'tf-modal': TfModal;
    'tf-node': TfNode;
    'tf-node-list': TfNodeList;
    'tf-node-select-menu': TfNodeSelectMenu;
    'tf-node-status-bookend': TfNodeStatusBookend;
    'tf-side-drawer': TfSideDrawer;
    'tf-side-drawer-nav': TfSideDrawerNav;
    'tf-side-drawer-nav-link': TfSideDrawerNavLink;
    'tf-side-drawer-sub-nav': TfSideDrawerSubNav;
    'tf-side-drawer-sub-nav-link': TfSideDrawerSubNavLink;
    'tf-spinner': TfSpinner;
    'tf-stat-data-card': TfStatDataCard;
    'tf-stats-panel': TfStatsPanel;
    'tf-status': TfStatus;
    'tf-table': TfTable;
    'tf-table-cell': TfTableCell;
    'tf-table-head': TfTableHead;
    'tf-table-head-cell': TfTableHeadCell;
    'tf-table-row': TfTableRow;
    'tf-user': TfUser;
    'tf-value-pair': TfValuePair;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'tf-a-tag': LocalJSX.TfATag & JSXBase.HTMLAttributes<HTMLTfATagElement>;
      'tf-app-header': LocalJSX.TfAppHeader & JSXBase.HTMLAttributes<HTMLTfAppHeaderElement>;
      'tf-button': LocalJSX.TfButton & JSXBase.HTMLAttributes<HTMLTfButtonElement>;
      'tf-button-container': LocalJSX.TfButtonContainer & JSXBase.HTMLAttributes<HTMLTfButtonContainerElement>;
      'tf-card': LocalJSX.TfCard & JSXBase.HTMLAttributes<HTMLTfCardElement>;
      'tf-hexagon': LocalJSX.TfHexagon & JSXBase.HTMLAttributes<HTMLTfHexagonElement>;
      'tf-hexagon-button': LocalJSX.TfHexagonButton & JSXBase.HTMLAttributes<HTMLTfHexagonButtonElement>;
      'tf-hexagon-svg': LocalJSX.TfHexagonSvg & JSXBase.HTMLAttributes<HTMLTfHexagonSvgElement>;
      'tf-icon-check': LocalJSX.TfIconCheck & JSXBase.HTMLAttributes<HTMLTfIconCheckElement>;
      'tf-icon-chevron-down': LocalJSX.TfIconChevronDown & JSXBase.HTMLAttributes<HTMLTfIconChevronDownElement>;
      'tf-icon-chevron-left': LocalJSX.TfIconChevronLeft & JSXBase.HTMLAttributes<HTMLTfIconChevronLeftElement>;
      'tf-icon-chevron-right': LocalJSX.TfIconChevronRight & JSXBase.HTMLAttributes<HTMLTfIconChevronRightElement>;
      'tf-icon-chevron-up': LocalJSX.TfIconChevronUp & JSXBase.HTMLAttributes<HTMLTfIconChevronUpElement>;
      'tf-icon-close': LocalJSX.TfIconClose & JSXBase.HTMLAttributes<HTMLTfIconCloseElement>;
      'tf-icon-envelope': LocalJSX.TfIconEnvelope & JSXBase.HTMLAttributes<HTMLTfIconEnvelopeElement>;
      'tf-icon-exclamation': LocalJSX.TfIconExclamation & JSXBase.HTMLAttributes<HTMLTfIconExclamationElement>;
      'tf-icon-notification': LocalJSX.TfIconNotification & JSXBase.HTMLAttributes<HTMLTfIconNotificationElement>;
      'tf-icon-search': LocalJSX.TfIconSearch & JSXBase.HTMLAttributes<HTMLTfIconSearchElement>;
      'tf-icon-user': LocalJSX.TfIconUser & JSXBase.HTMLAttributes<HTMLTfIconUserElement>;
      'tf-input': LocalJSX.TfInput & JSXBase.HTMLAttributes<HTMLTfInputElement>;
      'tf-leading-icon-label': LocalJSX.TfLeadingIconLabel & JSXBase.HTMLAttributes<HTMLTfLeadingIconLabelElement>;
      'tf-list': LocalJSX.TfList & JSXBase.HTMLAttributes<HTMLTfListElement>;
      'tf-list-wrapping-cell': LocalJSX.TfListWrappingCell & JSXBase.HTMLAttributes<HTMLTfListWrappingCellElement>;
      'tf-list-wrapping-item': LocalJSX.TfListWrappingItem & JSXBase.HTMLAttributes<HTMLTfListWrappingItemElement>;
      'tf-lms-delegate-node': LocalJSX.TfLmsDelegateNode & JSXBase.HTMLAttributes<HTMLTfLmsDelegateNodeElement>;
      'tf-login-form': LocalJSX.TfLoginForm & JSXBase.HTMLAttributes<HTMLTfLoginFormElement>;
      'tf-main-content': LocalJSX.TfMainContent & JSXBase.HTMLAttributes<HTMLTfMainContentElement>;
      'tf-menu-bar': LocalJSX.TfMenuBar & JSXBase.HTMLAttributes<HTMLTfMenuBarElement>;
      'tf-modal': LocalJSX.TfModal & JSXBase.HTMLAttributes<HTMLTfModalElement>;
      'tf-node': LocalJSX.TfNode & JSXBase.HTMLAttributes<HTMLTfNodeElement>;
      'tf-node-list': LocalJSX.TfNodeList & JSXBase.HTMLAttributes<HTMLTfNodeListElement>;
      'tf-node-select-menu': LocalJSX.TfNodeSelectMenu & JSXBase.HTMLAttributes<HTMLTfNodeSelectMenuElement>;
      'tf-node-status-bookend': LocalJSX.TfNodeStatusBookend & JSXBase.HTMLAttributes<HTMLTfNodeStatusBookendElement>;
      'tf-side-drawer': LocalJSX.TfSideDrawer & JSXBase.HTMLAttributes<HTMLTfSideDrawerElement>;
      'tf-side-drawer-nav': LocalJSX.TfSideDrawerNav & JSXBase.HTMLAttributes<HTMLTfSideDrawerNavElement>;
      'tf-side-drawer-nav-link': LocalJSX.TfSideDrawerNavLink & JSXBase.HTMLAttributes<HTMLTfSideDrawerNavLinkElement>;
      'tf-side-drawer-sub-nav': LocalJSX.TfSideDrawerSubNav & JSXBase.HTMLAttributes<HTMLTfSideDrawerSubNavElement>;
      'tf-side-drawer-sub-nav-link': LocalJSX.TfSideDrawerSubNavLink & JSXBase.HTMLAttributes<HTMLTfSideDrawerSubNavLinkElement>;
      'tf-spinner': LocalJSX.TfSpinner & JSXBase.HTMLAttributes<HTMLTfSpinnerElement>;
      'tf-stat-data-card': LocalJSX.TfStatDataCard & JSXBase.HTMLAttributes<HTMLTfStatDataCardElement>;
      'tf-stats-panel': LocalJSX.TfStatsPanel & JSXBase.HTMLAttributes<HTMLTfStatsPanelElement>;
      'tf-status': LocalJSX.TfStatus & JSXBase.HTMLAttributes<HTMLTfStatusElement>;
      'tf-table': LocalJSX.TfTable & JSXBase.HTMLAttributes<HTMLTfTableElement>;
      'tf-table-cell': LocalJSX.TfTableCell & JSXBase.HTMLAttributes<HTMLTfTableCellElement>;
      'tf-table-head': LocalJSX.TfTableHead & JSXBase.HTMLAttributes<HTMLTfTableHeadElement>;
      'tf-table-head-cell': LocalJSX.TfTableHeadCell & JSXBase.HTMLAttributes<HTMLTfTableHeadCellElement>;
      'tf-table-row': LocalJSX.TfTableRow & JSXBase.HTMLAttributes<HTMLTfTableRowElement>;
      'tf-user': LocalJSX.TfUser & JSXBase.HTMLAttributes<HTMLTfUserElement>;
      'tf-value-pair': LocalJSX.TfValuePair & JSXBase.HTMLAttributes<HTMLTfValuePairElement>;
    }
  }
}


