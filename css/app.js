import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "overflowX": "hidden"
    },
    "wrapper": {
        "paddingLeft": 0,
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease",
        "transition": "all 0.5s ease"
    },
    "wrappertoggled": {
        "paddingLeft": 250
    },
    "sidebar-wrapper": {
        "zIndex": 1000,
        "position": "fixed",
        "left": 250,
        "width": 0,
        "height": "100%",
        "marginLeft": -250,
        "overflowY": "auto",
        "background": "#000",
        "WebkitTransition": "all 0.5s ease",
        "MozTransition": "all 0.5s ease",
        "OTransition": "all 0.5s ease",
        "transition": "all 0.5s ease"
    },
    "wrappertoggled sidebar-wrapper": {
        "width": 250
    },
    "page-content-wrapper": {
        "width": "100%",
        "position": "absolute",
        "paddingTop": 15,
        "paddingRight": 15,
        "paddingBottom": 15,
        "paddingLeft": 15
    },
    "wrappertoggled page-content-wrapper": {
        "position": "absolute",
        "marginRight": -250
    },
    "sidebar-nav": {
        "position": "absolute",
        "top": 0,
        "width": 250,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "listStyle": "none"
    },
    "sidebar-nav li": {
        "textIndent": 20,
        "lineHeight": 40
    },
    "sidebar-nav li a": {
        "display": "block",
        "textDecoration": "none",
        "color": "#999999"
    },
    "sidebar-nav li a:hover": {
        "textDecoration": "none",
        "color": "#fff",
        "background": "rgba(255,255,255,0.2)"
    },
    "sidebar-nav li a:active": {
        "textDecoration": "none"
    },
    "sidebar-nav li a:focus": {
        "textDecoration": "none"
    },
    "sidebar-nav > sidebar-brand": {
        "height": 65,
        "fontSize": 18,
        "lineHeight": 60
    },
    "sidebar-nav > sidebar-brand a": {
        "color": "#999999"
    },
    "sidebar-nav > sidebar-brand a:hover": {
        "color": "#fff",
        "background": "none"
    }
});