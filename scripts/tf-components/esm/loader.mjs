import { a as patchEsm, b as bootstrapLazy } from './index-0c8d3d54.js';

const defineCustomElements = (win, options) => patchEsm().then(() => {
  return bootstrapLazy([["tf-a-tag_70",[[1,"tf-lms-delegate-node",{"delegateId":[513,"delegate-id"],"delegateStatus":[513,"delegate-status"],"delegateName":[513,"delegate-name"],"delegateDob":[513,"delegate-dob"],"courseTitle":[513,"course-title"],"courseCode":[513,"course-code"],"delegateCoursesCount":[514,"delegate-courses-count"],"isMobileViewOpen":[32]}],[0,"tf-login-form",{"forgottenUrl":[513,"forgotten-url"],"apiEndpoint":[513,"api-endpoint"],"apiMethod":[513,"api-method"],"apiHeaders":[520,"api-headers"],"bodyPropEmail":[513,"body-prop-email"],"bodyPropPassword":[513,"body-prop-password"],"error":[32],"loading":[32],"formValid":[32],"values":[32]}],[1,"tf-dropdown",{"displayTitle":[1537,"display-title"],"dropdownId":[520,"dropdown-id"],"size":[513],"colour":[513],"disabled":[516],"position":[513],"isOpen":[32]},[[10,"click","handleClick"],[32,"tfCloseDropdown","onHandleCloseDropdown"],[32,"tfDropdownOptionClicked","onHandleOptionClicked"]]],[1,"tf-modal",{"displayTitle":[513,"display-title"],"headerStyle":[513,"header-style"],"opened":[1540],"showCancel":[1540,"show-cancel"],"showConfirm":[1540,"show-confirm"],"showClose":[1540,"show-close"],"cancelText":[1537,"cancel-text"],"confirmText":[1537,"confirm-text"],"cancelColour":[1537,"cancel-colour"],"confirmColour":[1537,"confirm-colour"],"isOpen":[32],"open":[64]}],[1,"tf-side-drawer",{"displayTitle":[513,"display-title"],"opened":[1540],"showContactInfo":[32],"open":[64]},[[32,"tfAppLogoClicked","onAppLogoClicked"],[32,"tfCloseSideDrawer","onHandleCloseSideDrawer"],[32,"tfCloseSideDrawer","onHandleCloseSideDrawer"]]],[1,"tf-side-drawer-nav-link",{"hrefLink":[513,"href-link"],"hrefTitle":[513,"href-title"],"routerLink":[513,"router-link"],"isSubOpen":[32]}],[1,"tf-app-base-header",{"appTitle":[513,"app-title"],"appInitials":[513,"app-initials"],"showAppLogo":[516,"show-app-logo"],"showClientLogo":[516,"show-client-logo"],"clientLogoSource":[513,"client-logo-source"]}],[1,"tf-list-wrapping-item"],[1,"tf-stats-panel",{"cardCount":[32]}],[1,"tf-user"],[1,"tf-card-container",{"colour":[513]}],[1,"tf-card-content"],[1,"tf-card-title",{"colour":[513]}],[1,"tf-checkbox",{"name":[513],"label":[513],"hint":[513],"value":[1025],"checked":[1540],"required":[1540],"errorMessage":[1,"error-message"],"error":[1540],"hideLabel":[1540,"hide-label"],"showHint":[32],"showError":[32],"showLabel":[32],"showErrorIcon":[32],"getChecked":[64],"getValue":[64],"getItemRef":[64]}],[1,"tf-contained-card",{"colour":[513]}],[1,"tf-divider"],[1,"tf-dropdown-link",{"hrefLink":[513,"href-link"],"hrefTitle":[513,"href-title"],"hrefTarget":[513,"href-target"],"colour":[513],"routerLink":[513,"router-link"]}],[4,"tf-dropdown-option"],[1,"tf-icon-check"],[1,"tf-icon-chevron-left"],[1,"tf-icon-chevron-right"],[1,"tf-icon-envelope"],[1,"tf-icon-notification"],[1,"tf-icon-search"],[1,"tf-icon-user"],[1,"tf-leading-icon-label",{"contentAlign":[513,"content-align"],"order":[514]}],[1,"tf-list"],[1,"tf-list-item"],[1,"tf-main-content"],[1,"tf-node-flex"],[1,"tf-node-flex-fxr",{"rWidth":[1537,"r-width"]}],[1,"tf-node-fxl-flex",{"lWidth":[1537,"l-width"]}],[1,"tf-node-fxl-flex-fxr",{"rWidth":[1537,"r-width"],"lWidth":[1537,"l-width"]}],[1,"tf-node-header"],[1,"tf-node-header-title",{"justify":[513]}],[1,"tf-node-list"],[1,"tf-node-text",{"justify":[513]}],[4,"tf-p-tag",{"url":[513],"tagTitle":[513,"tag-title"],"textAlign":[513,"text-align"]}],[1,"tf-radio",{"name":[513],"label":[513],"hint":[513],"value":[1025],"groupName":[513,"group-name"],"checked":[1540],"required":[1540],"errorMessage":[1,"error-message"],"error":[1540],"hideLabel":[1540,"hide-label"],"showHint":[32],"showError":[32],"showLabel":[32],"showErrorIcon":[32],"getChecked":[64],"getValue":[64],"getItemRef":[64]}],[1,"tf-radio-group",{"name":[513],"label":[513],"hint":[513],"description":[513],"value":[1025],"groupName":[513,"group-name"],"required":[1540],"errorMessage":[1,"error-message"],"error":[1540],"hideLabel":[1540,"hide-label"],"showHint":[32],"showError":[32],"showLabel":[32],"showErrorIcon":[32],"selectedItem":[32],"getValue":[64],"getItemRef":[64]},[[32,"tfOnRadioSelected","onHandleRadioSelected"]]],[1,"tf-select",{"name":[513],"label":[513],"value":[1025],"hint":[513],"placeholder":[1537],"required":[1540],"errorMessage":[1,"error-message"],"error":[1540],"hideLabel":[1540,"hide-label"],"icon":[513],"iconPosition":[513,"icon-position"],"showHint":[32],"showError":[32],"showLabel":[32],"showErrorIcon":[32],"getValue":[64],"getItemRef":[64]}],[1,"tf-select-option"],[1,"tf-side-drawer-nav"],[1,"tf-side-drawer-sub-nav"],[1,"tf-side-drawer-sub-nav-link",{"hrefLink":[513,"href-link"],"hrefTitle":[513,"href-title"],"routerLink":[513,"router-link"]}],[1,"tf-stat-data-card",{"colour":[513]}],[1,"tf-status",{"trafficLightColour":[513,"traffic-light-colour"]}],[1,"tf-table"],[4,"tf-table-cell",{"textAlign":[513,"text-align"]}],[4,"tf-table-head"],[4,"tf-table-head-cell"],[4,"tf-table-row"],[1,"tf-textarea",{"name":[513],"label":[513],"value":[1025],"hint":[513],"placeholder":[1537],"required":[1540],"autoComplete":[1537,"auto-complete"],"rowCount":[1538,"row-count"],"errorMessage":[1,"error-message"],"error":[1540],"hideLabel":[1540,"hide-label"],"icon":[513],"iconPosition":[513,"icon-position"],"showHint":[32],"showError":[32],"showLabel":[32],"showErrorIcon":[32],"getValue":[64],"getItemRef":[64]}],[1,"tf-input",{"name":[513],"label":[513],"value":[1025],"hint":[513],"placeholder":[1537],"required":[1540],"autoComplete":[1537,"auto-complete"],"inputType":[1537,"input-type"],"errorMessage":[1,"error-message"],"error":[1540],"hideLabel":[1540,"hide-label"],"icon":[513],"iconPosition":[513,"icon-position"],"showHint":[32],"showError":[32],"showLabel":[32],"showLeadingIcon":[32],"showTrailingIcon":[32],"showErrorIcon":[32],"getValue":[64],"getItemRef":[64]}],[1,"tf-node-select-menu",{"isOpen":[32],"isOpenDelayed":[32]},[[10,"click","handleClick"]]],[4,"tf-a-tag",{"url":[513],"tagTitle":[513,"tag-title"]}],[1,"tf-button-container",{"size":[513]}],[1,"tf-card",{"colour":[513]}],[1,"tf-dropdown-rendered-option",{"colour":[513],"elementTitle":[1537,"element-title"],"value":[1537],"parent":[1537]}],[0,"tf-icon-button",{"buttonId":[513,"button-id"],"size":[513],"colour":[513],"icon":[520],"buttonType":[513,"button-type"],"disabled":[516]}],[1,"tf-icon-chevron-up"],[1,"tf-icon-close"],[1,"tf-list-wrapping-cell",{"contentAlign":[513,"content-align"],"order":[514]}],[1,"tf-node"],[1,"tf-node-status-bookend",{"color":[513],"showTooltip":[516,"show-tooltip"]}],[1,"tf-value-pair"],[1,"tf-icon-exclamation"],[4,"tf-button",{"size":[513],"colour":[513],"icon":[520],"iconPosition":[513,"icon-position"],"buttonId":[513,"button-id"],"buttonType":[513,"button-type"],"disabled":[516]}],[1,"tf-hexagon-button",{"color":[513],"buttonId":[513,"button-id"],"buttonType":[513,"button-type"],"disabled":[516]}],[1,"tf-icon-chevron-down"]]],["tf-app-header",[[1,"tf-app-header",{"appTitle":[513,"app-title"],"appInitials":[513,"app-initials"],"clientLogoSource":[513,"client-logo-source"]}]]],["tf-dropdown-options",[[4,"tf-dropdown-options"]]],["tf-flex",[[4,"tf-flex",{"layout":[513],"layoutAlign":[513,"layout-align"],"fillHeight":[516,"fill-height"],"fillWidth":[516,"fill-width"]}]]],["tf-hexagon",[[1,"tf-hexagon",{"color":[513],"asButton":[516,"as-button"]}]]],["tf-hexagon-svg",[[1,"tf-hexagon-svg",{"color":[513],"width":[514],"height":[514],"size":[513]}]]],["tf-menu-bar",[[1,"tf-menu-bar"]]],["tf-modal-2",[[1,"tf-modal-2",{"displayTitle":[513,"display-title"]}]]],["tf-spinner",[[1,"tf-spinner"]]]], options);
});

export { defineCustomElements };
