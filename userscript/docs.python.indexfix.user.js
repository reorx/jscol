// ==UserScript==
//
// @name           Docs.Python.Index.Fix
//
// @description    just for my pour eyes
//
//URI (preferably your own site, so browser can avert naming collisions
// @namespace      http://docs.python.org
//
// @author         reorx
//
// @license        GNU GPL v3 (http://www.gnu.org/copyleft/gpl.html) 
//
// @homepage       http://docs.python.org/*
//
// @version        1.0
//
// Urls process this user script on
// @include        http://docs.python.org/*
//
// Add any library dependencies here, so they are loaded before your script is loaded.
//
// ==/UserScript==


(function () {
    // define functions
    var dom = document;
    var _class = function (className) {
        return dom.getElementsByClassName(className);
    }
    // get elements
    var sidebar = _class('sphinxsidebarwrapper')[0]
    var topbar = _class('related')[0]
    var mainbody = _class('bodywrapper')[0]
    // set styles
    sidebar.style.position = 'fixed';
    sidebar.style.top = '30px';
    sidebar.style.left = '5px';
    topbar.style.position = 'fixed';
    topbar.style.zIndex = '9999';
    mainbody.style.marginTop = '25px';
    // bind event
    window.onscroll = function () {
    }
})();
