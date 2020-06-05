'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4c4fbc3a.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy(JSON.parse("[[\"tf-ph-overview-button.cjs\",[[1,\"tf-ph-overview-button\",{\"cardTitle\":[1,\"card-title\"],\"productCode\":[513,\"product-code\"],\"productInitials\":[513,\"product-initials\"],\"productTitle\":[513,\"product-title\"],\"productDescription\":[513,\"product-description\"],\"productCta\":[1,\"product-cta\"],\"productId\":[1,\"product-id\"],\"isActive\":[516,\"is-active\"],\"marketingCtaAsButton\":[516,\"marketing-cta-as-button\"]}]]],[\"tf-lms-delegate-node.cjs\",[[1,\"tf-lms-delegate-node\",{\"delegateId\":[513,\"delegate-id\"],\"delegateStatus\":[513,\"delegate-status\"],\"delegateName\":[513,\"delegate-name\"],\"delegateDob\":[513,\"delegate-dob\"],\"courseTitle\":[513,\"course-title\"],\"courseCode\":[513,\"course-code\"],\"delegateCoursesCount\":[514,\"delegate-courses-count\"],\"isMobileViewOpen\":[32]}]]],[\"tf-dropdown.cjs\",[[1,\"tf-dropdown\",{\"displayTitle\":[1537,\"display-title\"],\"dropdownId\":[520,\"dropdown-id\"],\"size\":[513],\"colour\":[513],\"disabled\":[516],\"position\":[513],\"isOpen\":[32]},[[10,\"click\",\"handleClick\"],[32,\"tfCloseDropdown\",\"onHandleCloseDropdown\"],[32,\"tfDropdownOptionClicked\",\"onHandleOptionClicked\"]]]]],[\"tf-alerts.cjs\",[[1,\"tf-alerts\",{\"list\":[32]},[[34,\"tfShowAlert\",\"onHandleShowAlert\"],[18,\"tfAlertTransitionedOut\",\"onHandleCloseDropdown\"]]]]],[\"tf-app-client-logo.cjs\",[[1,\"tf-app-client-logo\",{\"clientLogoSource\":[513,\"client-logo-source\"],\"showUserAccount\":[516,\"show-user-account\"],\"isOpen\":[32],\"dropdownItems\":[32]},[[10,\"click\",\"handleClick\"],[32,\"tfDropdownOptionClicked\",\"onHandleOptionClicked\"]]]]],[\"tf-modal.cjs\",[[1,\"tf-modal\",{\"displayTitle\":[513,\"display-title\"],\"headerStyle\":[513,\"header-style\"],\"opened\":[1540],\"showCancel\":[1540,\"show-cancel\"],\"showConfirm\":[1540,\"show-confirm\"],\"showClose\":[1540,\"show-close\"],\"cancelText\":[1537,\"cancel-text\"],\"confirmText\":[1537,\"confirm-text\"],\"cancelColour\":[1537,\"cancel-colour\"],\"confirmColour\":[1537,\"confirm-colour\"],\"isOpen\":[32],\"open\":[64]}]]],[\"tf-quick-links.cjs\",[[1,\"tf-quick-links\",{\"dropdownId\":[520,\"dropdown-id\"],\"disabled\":[516],\"isOpen\":[32]},[[10,\"click\",\"handleClick\"],[32,\"tfCloseDropdown\",\"onHandleCloseDropdown\"],[32,\"tfDropdownOptionClicked\",\"onHandleOptionClicked\"]]]]],[\"tf-side-drawer-nav-link.cjs\",[[1,\"tf-side-drawer-nav-link\",{\"hrefLink\":[513,\"href-link\"],\"hrefTitle\":[513,\"href-title\"],\"routerLink\":[513,\"router-link\"],\"isSubOpen\":[32]}]]],[\"tf-app-header.cjs\",[[1,\"tf-app-header\",{\"appTitle\":[513,\"app-title\"],\"appInitials\":[513,\"app-initials\"],\"clientLogoSource\":[513,\"client-logo-source\"]}]]],[\"tf-breadcrumb.cjs\",[[1,\"tf-breadcrumb\",{\"hrefLink\":[513,\"href-link\"],\"hrefTitle\":[513,\"href-title\"],\"routerLink\":[513,\"router-link\"],\"showChevron\":[516,\"show-chevron\"]}]]],[\"tf-card-panel.cjs\",[[1,\"tf-card-panel\",{\"colour\":[513],\"padding\":[513],\"shouldWrap\":[516,\"should-wrap\"],\"cardCount\":[32]}]]],[\"tf-icon-product-outline.cjs\",[[1,\"tf-icon-product-outline\",{\"colour\":[513],\"size\":[513],\"initials\":[520]}]]],[\"tf-info-panel.cjs\",[[1,\"tf-info-panel\",{\"colour\":[513],\"padding\":[513]}]]],[\"tf-list-wrapping-item.cjs\",[[1,\"tf-list-wrapping-item\"]]],[\"tf-page-title-breadcrumbs.cjs\",[[1,\"tf-page-title-breadcrumbs\",{\"showBackButton\":[516,\"show-back-button\"],\"backButtonColour\":[513,\"back-button-colour\"],\"isOpen\":[32]}]]],[\"tf-side-drawer.cjs\",[[1,\"tf-side-drawer\",{\"displayTitle\":[513,\"display-title\"],\"opened\":[1540],\"showContactInfo\":[32],\"open\":[64]},[[32,\"tfAppLogoClicked\",\"onAppLogoClicked\"],[32,\"tfCloseSideDrawer\",\"onHandleCloseSideDrawer\"],[32,\"tfCloseSideDrawer\",\"onHandleCloseSideDrawer\"]]]]],[\"tf-stats-panel.cjs\",[[1,\"tf-stats-panel\",{\"cardCount\":[32]}]]],[\"tf-user.cjs\",[[1,\"tf-user\"]]],[\"tf-breadcrumbs.cjs\",[[1,\"tf-breadcrumbs\",{\"showBackButton\":[516,\"show-back-button\"],\"backButtonColour\":[513,\"back-button-colour\"]}]]],[\"tf-card-container.cjs\",[[1,\"tf-card-container\",{\"colour\":[513]}]]],[\"tf-card-content.cjs\",[[1,\"tf-card-content\"]]],[\"tf-card-title.cjs\",[[1,\"tf-card-title\",{\"colour\":[513]}]]],[\"tf-checkbox.cjs\",[[1,\"tf-checkbox\",{\"name\":[513],\"label\":[513],\"hint\":[513],\"value\":[1025],\"checked\":[1540],\"required\":[1540],\"errorMessage\":[1,\"error-message\"],\"error\":[1540],\"hideLabel\":[1540,\"hide-label\"],\"showHint\":[32],\"showError\":[32],\"showLabel\":[32],\"showErrorIcon\":[32],\"getChecked\":[64],\"getValue\":[64],\"getItemRef\":[64]}]]],[\"tf-contained-card.cjs\",[[1,\"tf-contained-card\",{\"colour\":[513]}]]],[\"tf-divider.cjs\",[[1,\"tf-divider\"]]],[\"tf-dropdown-link.cjs\",[[1,\"tf-dropdown-link\",{\"hrefLink\":[513,\"href-link\"],\"hrefTitle\":[513,\"href-title\"],\"hrefTarget\":[513,\"href-target\"],\"colour\":[513],\"routerLink\":[513,\"router-link\"]}]]],[\"tf-dropdown-option.cjs\",[[4,\"tf-dropdown-option\"]]],[\"tf-dropdown-options.cjs\",[[4,\"tf-dropdown-options\"]]],[\"tf-flex.cjs\",[[4,\"tf-flex\",{\"layout\":[513],\"fx\":[513],\"layoutAlign\":[513,\"layout-align\"],\"fillHeight\":[516,\"fill-height\"],\"fillWidth\":[516,\"fill-width\"]}]]],[\"tf-hexagon.cjs\",[[1,\"tf-hexagon\",{\"color\":[513],\"asButton\":[516,\"as-button\"]}]]],[\"tf-hexagon-svg.cjs\",[[1,\"tf-hexagon-svg\",{\"color\":[513],\"width\":[514],\"height\":[514],\"size\":[513]}]]],[\"tf-icon-add.cjs\",[[1,\"tf-icon-add\"]]],[\"tf-icon-arrow-down.cjs\",[[1,\"tf-icon-arrow-down\"]]],[\"tf-icon-arrow-left.cjs\",[[1,\"tf-icon-arrow-left\"]]],[\"tf-icon-arrow-right.cjs\",[[1,\"tf-icon-arrow-right\"]]],[\"tf-icon-arrow-up.cjs\",[[1,\"tf-icon-arrow-up\"]]],[\"tf-icon-calendar.cjs\",[[1,\"tf-icon-calendar\"]]],[\"tf-icon-check.cjs\",[[1,\"tf-icon-check\"]]],[\"tf-icon-chevron-left.cjs\",[[1,\"tf-icon-chevron-left\"]]],[\"tf-icon-close.cjs\",[[1,\"tf-icon-close\"]]],[\"tf-icon-envelope.cjs\",[[1,\"tf-icon-envelope\"]]],[\"tf-icon-folder.cjs\",[[1,\"tf-icon-folder\"]]],[\"tf-icon-locked.cjs\",[[1,\"tf-icon-locked\"]]],[\"tf-icon-minus.cjs\",[[1,\"tf-icon-minus\"]]],[\"tf-icon-notification.cjs\",[[1,\"tf-icon-notification\"]]],[\"tf-icon-search.cjs\",[[1,\"tf-icon-search\"]]],[\"tf-icon-settings.cjs\",[[1,\"tf-icon-settings\"]]],[\"tf-icon-tag.cjs\",[[1,\"tf-icon-tag\"]]],[\"tf-icon-unlocked.cjs\",[[1,\"tf-icon-unlocked\"]]],[\"tf-icon-user.cjs\",[[1,\"tf-icon-user\"]]],[\"tf-info-card.cjs\",[[1,\"tf-info-card\",{\"tabColour\":[513,\"tab-colour\"],\"colour\":[513],\"showFooter\":[516,\"show-footer\"],\"footerBorder\":[513,\"footer-border\"]}]]],[\"tf-leading-icon-label.cjs\",[[1,\"tf-leading-icon-label\",{\"contentAlign\":[513,\"content-align\"],\"order\":[514]}]]],[\"tf-list.cjs\",[[1,\"tf-list\"]]],[\"tf-list-item.cjs\",[[1,\"tf-list-item\"]]],[\"tf-menu-bar.cjs\",[[1,\"tf-menu-bar\"]]],[\"tf-modal-2.cjs\",[[1,\"tf-modal-2\",{\"displayTitle\":[513,\"display-title\"]}]]],[\"tf-node-flex.cjs\",[[1,\"tf-node-flex\"]]],[\"tf-node-fxl-flex.cjs\",[[1,\"tf-node-fxl-flex\",{\"lWidth\":[1537,\"l-width\"]}]]],[\"tf-node-fxl-flex-fxr.cjs\",[[1,\"tf-node-fxl-flex-fxr\",{\"rWidth\":[1537,\"r-width\"],\"lWidth\":[1537,\"l-width\"]}]]],[\"tf-node-header.cjs\",[[1,\"tf-node-header\"]]],[\"tf-node-header-title.cjs\",[[1,\"tf-node-header-title\",{\"justify\":[513]}]]],[\"tf-node-list.cjs\",[[1,\"tf-node-list\"]]],[\"tf-node-row.cjs\",[[1,\"tf-node-row\",{\"mobileWrap\":[1540,\"mobile-wrap\"],\"isMobile\":[32]},[[11,\"resize\",\"onPageResize\"]]]]],[\"tf-node-row-cell.cjs\",[[1,\"tf-node-row-cell\",{\"cWidth\":[1537,\"c-width\"],\"layoutAlign\":[513,\"layout-align\"]}]]],[\"tf-node-row-cell-h5.cjs\",[[1,\"tf-node-row-cell-h5\"]]],[\"tf-node-row-header.cjs\",[[1,\"tf-node-row-header\",{\"mobileHide\":[1540,\"mobile-hide\"]}]]],[\"tf-node-text.cjs\",[[1,\"tf-node-text\",{\"justify\":[513]}]]],[\"tf-p-tag.cjs\",[[4,\"tf-p-tag\",{\"url\":[513],\"tagTitle\":[513,\"tag-title\"],\"textAlign\":[513,\"text-align\"]}]]],[\"tf-page-message.cjs\",[[1,\"tf-page-message\"]]],[\"tf-page-title.cjs\",[[1,\"tf-page-title\"]]],[\"tf-radio.cjs\",[[1,\"tf-radio\",{\"name\":[513],\"label\":[513],\"hint\":[513],\"value\":[1025],\"groupName\":[513,\"group-name\"],\"checked\":[1540],\"required\":[1540],\"errorMessage\":[1,\"error-message\"],\"error\":[1540],\"hideLabel\":[1540,\"hide-label\"],\"showHint\":[32],\"showError\":[32],\"showLabel\":[32],\"showErrorIcon\":[32],\"getChecked\":[64],\"getValue\":[64],\"getItemRef\":[64]}]]],[\"tf-radio-group.cjs\",[[1,\"tf-radio-group\",{\"name\":[513],\"label\":[513],\"hint\":[513],\"description\":[513],\"value\":[1025],\"groupName\":[513,\"group-name\"],\"required\":[1540],\"errorMessage\":[1,\"error-message\"],\"error\":[1540],\"hideLabel\":[1540,\"hide-label\"],\"showHint\":[32],\"showError\":[32],\"showLabel\":[32],\"showErrorIcon\":[32],\"selectedItem\":[32],\"getValue\":[64],\"getItemRef\":[64]},[[32,\"tfOnRadioSelected\",\"onHandleRadioSelected\"]]]]],[\"tf-select.cjs\",[[1,\"tf-select\",{\"name\":[513],\"label\":[513],\"value\":[1025],\"hint\":[513],\"placeholder\":[1537],\"required\":[1540],\"errorMessage\":[1,\"error-message\"],\"error\":[1540],\"hideLabel\":[1540,\"hide-label\"],\"icon\":[513],\"iconPosition\":[513,\"icon-position\"],\"showHint\":[32],\"showError\":[32],\"showLabel\":[32],\"showErrorIcon\":[32],\"getValue\":[64],\"getItemRef\":[64]}]]],[\"tf-select-option.cjs\",[[1,\"tf-select-option\"]]],[\"tf-side-drawer-nav.cjs\",[[1,\"tf-side-drawer-nav\"]]],[\"tf-side-drawer-sub-nav.cjs\",[[1,\"tf-side-drawer-sub-nav\"]]],[\"tf-side-drawer-sub-nav-link.cjs\",[[1,\"tf-side-drawer-sub-nav-link\",{\"hrefLink\":[513,\"href-link\"],\"hrefTitle\":[513,\"href-title\"],\"routerLink\":[513,\"router-link\"]}]]],[\"tf-spinner.cjs\",[[1,\"tf-spinner\"]]],[\"tf-stat-data-card.cjs\",[[1,\"tf-stat-data-card\",{\"colour\":[513]}]]],[\"tf-status.cjs\",[[1,\"tf-status\",{\"trafficLightColour\":[513,\"traffic-light-colour\"]}]]],[\"tf-table.cjs\",[[1,\"tf-table\"]]],[\"tf-table-cell.cjs\",[[4,\"tf-table-cell\",{\"textAlign\":[513,\"text-align\"]}]]],[\"tf-table-head.cjs\",[[4,\"tf-table-head\"]]],[\"tf-table-head-cell.cjs\",[[4,\"tf-table-head-cell\"]]],[\"tf-table-row.cjs\",[[4,\"tf-table-row\"]]],[\"tf-table-scrolling-container.cjs\",[[1,\"tf-table-scrolling-container\"]]],[\"tf-test.cjs\",[[1,\"tf-test\"]]],[\"tf-textarea.cjs\",[[1,\"tf-textarea\",{\"name\":[513],\"label\":[513],\"value\":[1025],\"hint\":[513],\"placeholder\":[1537],\"required\":[1540],\"autoComplete\":[1537,\"auto-complete\"],\"rowCount\":[1538,\"row-count\"],\"errorMessage\":[1,\"error-message\"],\"error\":[1540],\"hideLabel\":[1540,\"hide-label\"],\"icon\":[513],\"iconPosition\":[513,\"icon-position\"],\"showHint\":[32],\"showError\":[32],\"showLabel\":[32],\"showErrorIcon\":[32],\"getValue\":[64],\"getItemRef\":[64]}]]],[\"tf-alert.cjs\",[[1,\"tf-alert\",{\"autoOpen\":[4,\"auto-open\"],\"autoOpenDelay\":[2,\"auto-open-delay\"],\"opened\":[1540],\"showDuration\":[1538,\"show-duration\"],\"alertId\":[513,\"alert-id\"],\"icon\":[513],\"colour\":[513],\"message\":[513],\"showButton\":[516,\"show-button\"],\"buttonTitle\":[1,\"button-title\"],\"buttonColour\":[1,\"button-colour\"],\"buttonSize\":[1,\"button-size\"],\"isOpen\":[32],\"hasShownOnce\":[32],\"open\":[64]}]]],[\"tf-button-container.cjs\",[[1,\"tf-button-container\",{\"size\":[513]}]]],[\"tf-hexagon-button.cjs\",[[1,\"tf-hexagon-button\",{\"color\":[513],\"buttonId\":[513,\"button-id\"],\"buttonType\":[513,\"button-type\"],\"disabled\":[516]}]]],[\"tf-icon-chevron-right.cjs\",[[1,\"tf-icon-chevron-right\"]]],[\"tf-icon-chevron-up.cjs\",[[1,\"tf-icon-chevron-up\"]]],[\"tf-icon-hexagon-outline.cjs\",[[1,\"tf-icon-hexagon-outline\"]]],[\"tf-list-wrapping-cell.cjs\",[[1,\"tf-list-wrapping-cell\",{\"contentAlign\":[513,\"content-align\"],\"order\":[514]}]]],[\"tf-value-pair.cjs\",[[1,\"tf-value-pair\"]]],[\"tf-node_3.cjs\",[[1,\"tf-node-select-menu\",{\"isOpen\":[32],\"isOpenDelayed\":[32]},[[10,\"click\",\"handleClick\"]]],[1,\"tf-node\"],[1,\"tf-node-status-bookend\",{\"color\":[513],\"showTooltip\":[516,\"show-tooltip\"]}]]],[\"tf-span-description_3.cjs\",[[1,\"tf-span-description\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-span-title\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-status-beacon\",{\"trafficLightColour\":[513,\"traffic-light-colour\"]}]]],[\"tf-card.cjs\",[[1,\"tf-card\",{\"colour\":[513],\"padding\":[513]}]]],[\"tf-icon-chevron-down.cjs\",[[1,\"tf-icon-chevron-down\"]]],[\"tf-a_23.cjs\",[[0,\"tf-login-form\",{\"forgottenUrl\":[513,\"forgotten-url\"],\"apiEndpoint\":[513,\"api-endpoint\"],\"apiMethod\":[513,\"api-method\"],\"apiHeaders\":[520,\"api-headers\"],\"bodyPropEmail\":[513,\"body-prop-email\"],\"bodyPropPassword\":[513,\"body-prop-password\"],\"error\":[32],\"loading\":[32],\"formValid\":[32],\"values\":[32]}],[1,\"tf-app-base-header\",{\"appTitle\":[513,\"app-title\"],\"appInitials\":[513,\"app-initials\"],\"showAppLogo\":[516,\"show-app-logo\"],\"isLogoClickable\":[516,\"is-logo-clickable\"],\"showClientLogo\":[516,\"show-client-logo\"],\"showUserAccount\":[516,\"show-user-account\"],\"clientLogoSource\":[513,\"client-logo-source\"],\"userAccountMenuItems\":[8,\"user-account-menu-items\"]}],[1,\"tf-a\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513],\"underlined\":[516],\"url\":[513],\"tagTitle\":[513,\"tag-title\"],\"target\":[513]}],[1,\"tf-h2\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-main-content\"],[1,\"tf-p\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-span-bold\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-span-italic\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-span-italic-bold\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-span-normal\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-client-logo\",{\"showClientLogo\":[516,\"show-client-logo\"],\"clientLogoSource\":[513,\"client-logo-source\"],\"showUserAccount\":[516,\"show-user-account\"],\"userAccountMenuItems\":[8,\"user-account-menu-items\"],\"isOpen\":[32],\"dropdownItems\":[32]},[[10,\"click\",\"handleClick\"],[32,\"tfDropdownOptionClicked\",\"onHandleOptionClicked\"]]],[1,\"tf-input\",{\"name\":[513],\"label\":[513],\"value\":[1025],\"hint\":[513],\"placeholder\":[1537],\"required\":[1540],\"autoComplete\":[1537,\"auto-complete\"],\"inputType\":[1537,\"input-type\"],\"errorMessage\":[1,\"error-message\"],\"error\":[1540],\"hideLabel\":[1540,\"hide-label\"],\"icon\":[513],\"iconPosition\":[513,\"icon-position\"],\"showHint\":[32],\"showError\":[32],\"showLabel\":[32],\"showLeadingIcon\":[32],\"showTrailingIcon\":[32],\"showErrorIcon\":[32],\"getValue\":[64],\"getItemRef\":[64]}],[4,\"tf-a-tag\",{\"url\":[513],\"tagTitle\":[513,\"tag-title\"]}],[1,\"tf-form-card\",{\"colour\":[1]}],[1,\"tf-form-title\"],[1,\"tf-form-wrapper\"],[1,\"tf-h1\",{\"textAlign\":[513,\"text-align\"],\"colour\":[513]}],[1,\"tf-node-flex-fxr\",{\"rWidth\":[1537,\"r-width\"]}],[1,\"tf-icon-exclamation\"],[1,\"tf-product-logo\",{\"colour\":[513],\"size\":[513],\"code\":[513],\"initials\":[513],\"initialsColour\":[1025,\"initials-colour\"],\"asOutline\":[4,\"as-outline\"]}],[1,\"tf-dropdown-rendered-option\",{\"colour\":[513],\"elementTitle\":[1537,\"element-title\"],\"value\":[1537],\"parent\":[1537]}],[4,\"tf-button\",{\"size\":[513],\"colour\":[513],\"icon\":[520],\"iconPosition\":[513,\"icon-position\"],\"buttonId\":[513,\"button-id\"],\"buttonType\":[513,\"button-type\"],\"disabled\":[516]}],[0,\"tf-icon-button\",{\"buttonId\":[513,\"button-id\"],\"size\":[513],\"colour\":[513],\"outlineColour\":[520,\"outline-colour\"],\"icon\":[520],\"buttonType\":[513,\"button-type\"],\"disabled\":[516]}]]]]"), options);
});

exports.defineCustomElements = defineCustomElements;
