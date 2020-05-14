// ==UserScript==
// @name         Autopod
// @namespace    http://tampermonkey.net/
// @version      1.00
// @description  Various non-standard utilities for gitpod.io and gitpod-staging.com
// @author       hoh
// @match        https://gitpod.io/*
// @license      GPLv3
// ==/UserScript==
(function(){
"use strict";
const scriptInfo = {
	"version" : "1.00",
	"name" : "Automail",
	"link" : "https://greasyfork.org/en/scripts/fixme-automail",
	"repo" : "https://github.com/gitpod-io/autopod",
	"firefox" : "https://addons.mozilla.org/en-US/firefox/addon/FIXME/",
	"chrome" : "FIXME",
	"author" : "hoh, Jacob 'Kreyren' Hrbek",
	// FIXME: Find a way to credit hoh
	"authorLink" : "https://github.com/kreyren",
	"license" : "GPLv3"
};
// A collection of non-standard utilities for gitpod.io

/* GENERAL STRUCTURE:
 1. Settings
 2. CSS
 3. tools and helper functions
 4. The modules, as individual callable functions
 5. The URL matcher, for making the modules run at the right sites
 6. Module descriptions
*/


//a shared style node for all the modules. Most custom classes are prefixed by "hoh" to avoid collisions with native Anilist classes
let style = document.createElement("style");
style.id = "aniscripts-styles";
style.type = "text/css";

//The default colour is rgb(var(--color-blue)) provided by Anilist, but rgb(var(--color-green)) is preferred for things related to manga
style.textContent = `

`;
let documentHead = document.querySelector("head");
if(documentHead){
	documentHead.appendChild(style)
}
else{
	return//xml documents or something. At least it's not a place where the script can run
}









})()
