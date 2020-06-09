'use strict';

// CLASSNAMES
function getColourClassname(colour) {
    let className = colour === "white" ? "colour-white"
        : colour === "blue" ? "colour-blue"
            : colour === "aqua" ? "colour-aqua"
                : colour === "grey" ? "colour-grey"
                    : colour === "navy" ? "colour-navy"
                        : "colour-default";
    return className;
}
function getSVGColourClassname(colour) {
    let className = colour === "white" ? "svg-colour-white"
        : colour === "blue" ? "svg-colour-blue"
            : colour === "aqua" ? "svg-colour-aqua"
                : colour === "grey" ? "svg-colour-grey"
                    : colour === "navy" ? "svg-colour-navy"
                        : "svg-colour-default";
    return className;
}
function getTrafficLightColourClassname(colour) {
    let className = colour === "red" ? "colour-red"
        : colour === "orange" || colour === "amber" ? "colour-amber"
            : colour === "green" ? "colour-green"
                : colour === "grey" || colour === "none" ? "colour-none"
                    : "colour-default";
    return className;
}
function getTextAlignClassname(textAlign) {
    let className = textAlign === "right" ? "text-align-right"
        : textAlign === "center" ? "text-align-center"
            : textAlign === "justify" ? "text-align-justify"
                : textAlign === "left" ? "text-align-left"
                    : "text-align-left";
    return className;
}
function getSizeClassname(size) {
    let className = size === "xl" || size === "extra-large" ? "size-xl"
        : size === "l" || size === "large" ? "size-l"
            : size === "m" || size === "medium" ? "size-m"
                : size === "s" || size === "small" ? "size-s"
                    : size === "xs" || size === "extra-small" ? "size-xs"
                        : "size-default";
    return className;
}
function getIconSizeClassname(size) {
    let className = size === "xl" || size === "extra-large" ? "icon-size-xl"
        : size === "l" || size === "large" ? "icon-size-l"
            : size === "m" || size === "medium" ? "icon-size-m"
                : size === "s" || size === "small" ? "icon-size-s"
                    : size === "xs" || size === "extra-small" ? "icon-size-xs"
                        : "icon-size-default";
    return className;
}
function getIconBtnSizeClassname(size) {
    let className = size === "xl" || size === "extra-large" ? "icon-btn-size-xl"
        : size === "l" || size === "large" ? "icon-btn-size-l"
            : size === "m" || size === "medium" ? "icon-btn-size-m"
                : size === "s" || size === "small" ? "icon-btn-size-s"
                    : size === "xs" || size === "extra-small" ? "icon-btn-size-xs"
                        : "icon-btn-size-default";
    return className;
}
function getGridCountClassname(count) {
    let className = count === 1 ? "grid-1"
        : count === 2 ? "grid-2"
            : count === 3 ? "grid-3"
                : count === 4 ? "grid-4"
                    : count === 5 ? "grid-5"
                        : count === 6 ? "grid-6"
                            : "grid-3";
    return className;
}
function getPaddingClassname(padding) {
    let className = padding === "none" ? "padding-none"
        : "padding-default";
    return className;
}
// colour
//dd-link-
//dd-panel-

exports.getColourClassname = getColourClassname;
exports.getGridCountClassname = getGridCountClassname;
exports.getIconBtnSizeClassname = getIconBtnSizeClassname;
exports.getIconSizeClassname = getIconSizeClassname;
exports.getPaddingClassname = getPaddingClassname;
exports.getSVGColourClassname = getSVGColourClassname;
exports.getSizeClassname = getSizeClassname;
exports.getTextAlignClassname = getTextAlignClassname;
exports.getTrafficLightColourClassname = getTrafficLightColourClassname;
