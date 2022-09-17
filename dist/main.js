/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n:root{\n    --headerColor: rgb(87, 12, 87);\n    --headerTextColor: white;\n    --sidebarColor: rgb(88, 10, 88);\n    --sidebarTextColor: white;\n    --containerBackground: rgb(141, 114, 156);\n    --popupBackground: rgb(206, 187, 216);\n\n    --doBoxColor: rgb(220, 200, 220);\n    --doBoxHoverColor: rgb(255, 235, 255);\n    --doBoxTextColor: black;\n\n    --highPriority: rgb(255, 0, 50);\n    --midPriority: rgb(255, 205, 0);\n    --lowPriority: rgb(0, 235, 50);\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    font-family: Helvetica, sans-serif;\n    box-sizing: border-box;\n}\n\nbutton {\n\tbackground: none;\n\tcolor: var(--doBoxTextColor);\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n.doDate{\n    color: var(--doBoxTextColor);\n}\n\n#addToDo, #projectadder{\n    color:var(--sidebarTextColor);\n}\n\n#addToDo{\n    font-size: 1.6rem;\n    margin-top: auto;\n    margin-bottom: 10px;\n    font-weight: bold;\n}\n\n#topcontainer{\n    display: grid;\n    grid-template-columns: 250px minmax(500px, 1fr);\n    grid-template-rows: 1fr;\n    min-height: 100vh;\n    gap: 0px;\n}\n\n\n#logoContainer{\n    background-color: var(--sidebarColor);\n    color: var(--sidebarTextColor);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#leftSidebar img{\n   width: 100%;\n}\n\n\n#taskcontainer{\n    padding: 10px 5px;\n    background-color: var(--containerBackground);\n    grid-column: 2 / 4;\n    grid-row: 1 / 4;\n}\n\n.doBox{\n\n    background-color: var(--doBoxColor);\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n    box-sizing: border-box;\n    padding: 10px 20px 10px 20px;\n    border-left: 7px solid var(--highPriority);\n    border-radius: 2px;\n    margin: 5px 15px 10px 10px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n    transition: box-shadow 0.5s;\n    transition: background-color 0.2s;\n\n}\n\n.doBox:hover{\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n    background-color: var(--doBoxHoverColor);\n}\n\n.priority2{\n    border-color: var(--midPriority);\n}\n\n.priority1{\n    border-color: var(--lowPriority);\n}\n\n.doBox .toDoName {\n    margin-right: auto;\n\n}\n\n#leftSidebar{\n    color: var(--sidebarTextColor);\n    background-color: var(--sidebarColor);\n    color: var(--sidebarTextColor);\n    grid-column: 1 / 2;\n    grid-row: 1 / 4;\n    box-sizing: border-box;\n    padding: 25px;\n    text-align: center;\n    z-index: 2;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: space-between;\n}\n\n#leftSidebar button{\n    color: var(--sidebarTextColor);\n}\n\n#projectHeader{\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n#projectList{\n    margin: 10px 10px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n\n.projectBox{\n    padding: 0px 6px;\n    display: flex;\n    color: var(--sidebarTextColor);\n    justify-content: start;\n    gap: 10px;\n}\n\n#projectadder{\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 5px;\n}\n\n.projectName{\n    margin-right: auto;\n}\n\n.projectBox:hover{\n    border-left: 2px solid var(--sidebarTextColor);\n    padding-left: 4px;\n}\n\n.activeProjectBox{\n    border-left: 2px solid var(--sidebarTextColor);\n    padding-left: 4px;\n}\n\n.projectBox::before{\n    width: 15px;\n    border-radius: 15px;\n    background-color: var(--sidebarTextColor);\n}\n\n#popUpBox{\n    background-color: var( --popupBackground);\n    color: var(--doBoxTextColor)\n}\n\n#popUpHeader{\n    background-color: var(--headerColor);\n    color: var(--headerTextColor);\n}\n\n#popUpClose{\n    color: var(--headerTextColor);\n}\n\n#todaySelect, #weekSelect{\n    opacity: 0%;\n    cursor: pointer;\n}\n\n#timeselector{\n    margin: 5px 0px 15px 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 10px;\n}\n\n\n\nlabel{\n    cursor: pointer;\n}\n\n#leftSidebar label{\n    font-weight: bold;\n    margin-left: 22px;\n    font-size: 1.2rem;\n\n}\n\ninput[type=\"checkbox\"] + label{\n    padding-left: 8px;\n}\n\ninput[type=\"checkbox\"]:checked + label{\n    border-left: 3px solid var(--sidebarTextColor);\n    padding-left: 5px;\n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":";AACA;IACI,8BAA8B;IAC9B,wBAAwB;IACxB,+BAA+B;IAC/B,yBAAyB;IACzB,yCAAyC;IACzC,qCAAqC;;IAErC,gCAAgC;IAChC,qCAAqC;IACrC,uBAAuB;;IAEvB,+BAA+B;IAC/B,+BAA+B;IAC/B,8BAA8B;AAClC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,sBAAsB;AAC1B;;AAEA;CACC,gBAAgB;CAChB,4BAA4B;CAC5B,YAAY;CACZ,UAAU;CACV,aAAa;CACb,eAAe;CACf,gBAAgB;AACjB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C,uBAAuB;IACvB,iBAAiB;IACjB,QAAQ;AACZ;;;AAGA;IACI,qCAAqC;IACrC,8BAA8B;IAC9B,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;GACG,WAAW;AACd;;;AAGA;IACI,iBAAiB;IACjB,4CAA4C;IAC5C,kBAAkB;IAClB,eAAe;AACnB;;AAEA;;IAEI,mCAAmC;IACnC,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,4BAA4B;IAC5B,0CAA0C;IAC1C,kBAAkB;IAClB,0BAA0B;IAC1B,0CAA0C;IAC1C,2BAA2B;IAC3B,iCAAiC;;AAErC;;AAEA;IACI,0CAA0C;IAC1C,wCAAwC;AAC5C;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,gCAAgC;AACpC;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,8BAA8B;IAC9B,qCAAqC;IACrC,8BAA8B;IAC9B,kBAAkB;IAClB,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,kBAAkB;IAClB,UAAU;IACV,0CAA0C;IAC1C,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,8BAA8B;AAClC;;AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,8BAA8B;IAC9B,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,8CAA8C;IAC9C,iBAAiB;AACrB;;AAEA;IACI,8CAA8C;IAC9C,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,yCAAyC;AAC7C;;AAEA;IACI,yCAAyC;IACzC;AACJ;;AAEA;IACI,oCAAoC;IACpC,6BAA6B;AACjC;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,eAAe;AACnB;;AAEA;IACI,wBAAwB;IACxB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,SAAS;AACb;;;;AAIA;IACI,eAAe;AACnB;;AAEA;IACI,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,8CAA8C;IAC9C,iBAAiB;AACrB","sourcesContent":["\n:root{\n    --headerColor: rgb(87, 12, 87);\n    --headerTextColor: white;\n    --sidebarColor: rgb(88, 10, 88);\n    --sidebarTextColor: white;\n    --containerBackground: rgb(141, 114, 156);\n    --popupBackground: rgb(206, 187, 216);\n\n    --doBoxColor: rgb(220, 200, 220);\n    --doBoxHoverColor: rgb(255, 235, 255);\n    --doBoxTextColor: black;\n\n    --highPriority: rgb(255, 0, 50);\n    --midPriority: rgb(255, 205, 0);\n    --lowPriority: rgb(0, 235, 50);\n}\n\n* {\n    margin: 0px;\n    padding: 0px;\n    font-family: Helvetica, sans-serif;\n    box-sizing: border-box;\n}\n\nbutton {\n\tbackground: none;\n\tcolor: var(--doBoxTextColor);\n\tborder: none;\n\tpadding: 0;\n\tfont: inherit;\n\tcursor: pointer;\n\toutline: inherit;\n}\n\n.doDate{\n    color: var(--doBoxTextColor);\n}\n\n#addToDo, #projectadder{\n    color:var(--sidebarTextColor);\n}\n\n#addToDo{\n    font-size: 1.6rem;\n    margin-top: auto;\n    margin-bottom: 10px;\n    font-weight: bold;\n}\n\n#topcontainer{\n    display: grid;\n    grid-template-columns: 250px minmax(500px, 1fr);\n    grid-template-rows: 1fr;\n    min-height: 100vh;\n    gap: 0px;\n}\n\n\n#logoContainer{\n    background-color: var(--sidebarColor);\n    color: var(--sidebarTextColor);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#leftSidebar img{\n   width: 100%;\n}\n\n\n#taskcontainer{\n    padding: 10px 5px;\n    background-color: var(--containerBackground);\n    grid-column: 2 / 4;\n    grid-row: 1 / 4;\n}\n\n.doBox{\n\n    background-color: var(--doBoxColor);\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    gap: 10px;\n    box-sizing: border-box;\n    padding: 10px 20px 10px 20px;\n    border-left: 7px solid var(--highPriority);\n    border-radius: 2px;\n    margin: 5px 15px 10px 10px;\n    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);\n    transition: box-shadow 0.5s;\n    transition: background-color 0.2s;\n\n}\n\n.doBox:hover{\n    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);\n    background-color: var(--doBoxHoverColor);\n}\n\n.priority2{\n    border-color: var(--midPriority);\n}\n\n.priority1{\n    border-color: var(--lowPriority);\n}\n\n.doBox .toDoName {\n    margin-right: auto;\n\n}\n\n#leftSidebar{\n    color: var(--sidebarTextColor);\n    background-color: var(--sidebarColor);\n    color: var(--sidebarTextColor);\n    grid-column: 1 / 2;\n    grid-row: 1 / 4;\n    box-sizing: border-box;\n    padding: 25px;\n    text-align: center;\n    z-index: 2;\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: space-between;\n}\n\n#leftSidebar button{\n    color: var(--sidebarTextColor);\n}\n\n#projectHeader{\n    font-weight: bold;\n    font-size: 1.3rem;\n}\n\n#projectList{\n    margin: 10px 10px;\n    display: flex;\n    flex-direction: column;\n    row-gap: 5px;\n}\n\n.projectBox{\n    padding: 0px 6px;\n    display: flex;\n    color: var(--sidebarTextColor);\n    justify-content: start;\n    gap: 10px;\n}\n\n#projectadder{\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-top: 5px;\n}\n\n.projectName{\n    margin-right: auto;\n}\n\n.projectBox:hover{\n    border-left: 2px solid var(--sidebarTextColor);\n    padding-left: 4px;\n}\n\n.activeProjectBox{\n    border-left: 2px solid var(--sidebarTextColor);\n    padding-left: 4px;\n}\n\n.projectBox::before{\n    width: 15px;\n    border-radius: 15px;\n    background-color: var(--sidebarTextColor);\n}\n\n#popUpBox{\n    background-color: var( --popupBackground);\n    color: var(--doBoxTextColor)\n}\n\n#popUpHeader{\n    background-color: var(--headerColor);\n    color: var(--headerTextColor);\n}\n\n#popUpClose{\n    color: var(--headerTextColor);\n}\n\n#todaySelect, #weekSelect{\n    opacity: 0%;\n    cursor: pointer;\n}\n\n#timeselector{\n    margin: 5px 0px 15px 0px;\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    gap: 10px;\n}\n\n\n\nlabel{\n    cursor: pointer;\n}\n\n#leftSidebar label{\n    font-weight: bold;\n    margin-left: 22px;\n    font-size: 1.2rem;\n\n}\n\ninput[type=\"checkbox\"] + label{\n    padding-left: 8px;\n}\n\ninput[type=\"checkbox\"]:checked + label{\n    border-left: 3px solid var(--sidebarTextColor);\n    padding-left: 5px;\n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closePupUp": () => (/* binding */ closePupUp),
/* harmony export */   "makePopUp": () => (/* binding */ makePopUp)
/* harmony export */ });
/* harmony import */ var _screenblock_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screenblock.js */ "./src/screenblock.js");


function makePopUp(title, blockIndex = 100){
    (0,_screenblock_js__WEBPACK_IMPORTED_MODULE_0__.blockScreen)(blockIndex);
    let popBox = document.createElement('div');
    popBox.setAttribute("id", "popUpBox");
    popBox.style.minWidth = "600px";
    popBox.style.minHeight = "400px";
    popBox.style.display = "flex";
    popBox.style.flexDirection = "column";
    popBox.style.width = "50%";
    popBox.style.height = "60%";
    popBox.style.zIndex = `${blockIndex+1}`;
    
    popBox.style.top = "50%";
    popBox.style.left = "50%";
    popBox.style.marginTop = "min(-200px, -30vh)";
    popBox.style.marginLeft = "min(-300px, -25vw)";
    popBox.style.position = "fixed";
    popBox.style.borderRadius = "6px";
    popBox.style.boxShadow = "5px 5px 5px rgba(0, 0, 0, 0.2), 5px -1px 5px rgba(0, 0, 0, 0.2)";
    popBox.style.boxSizing = "border-box";
    let popUpHeader = makeBoxHeader(title);
    let popUpcontent = document.createElement('div');
    popUpcontent.style.height = "90%";
    popUpcontent.style.padding = "8px 15px 5px 15px";
    popBox.appendChild(popUpHeader);
    popBox.appendChild(popUpcontent);
    return {popBox, popUpHeader, popUpcontent};
}

function makeBoxHeader(headTitle){
    let boxHeader = document.createElement('div');

    boxHeader.setAttribute("id", "popUpHeader");
    boxHeader.style.height = "10%";
    boxHeader.style.display = "flex";
    boxHeader.style.justifyContent = "space-between";
    boxHeader.style.padding = "0px 12px 0px 12px";
    boxHeader.style.borderRadius = "6px 6px 0px 0px";
    boxHeader.style.fontWeight = "bold";
    boxHeader.style.lineHeight = "max(6vh, 40px)";
    boxHeader.style.fontSize = "max(4vh, 30px)";

    let headerText = document.createElement('div');
    headerText.textContent = headTitle;
    headerText.marginRight = "auto";

    let closeButton = document.createElement('button');
    closeButton.setAttribute("id", "popUpClose");
    closeButton.textContent = "X";
    closeButton.addEventListener('click', () => closePupUp());
 
    boxHeader.appendChild(headerText);
    boxHeader.appendChild(closeButton);
    return boxHeader;
}

function closePupUp(){
    let popUpBox = document.getElementById("popUpBox");
    popUpBox.remove();
    (0,_screenblock_js__WEBPACK_IMPORTED_MODULE_0__.unBlockScreen)();
}

/***/ }),

/***/ "./src/screenblock.js":
/*!****************************!*\
  !*** ./src/screenblock.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blockScreen": () => (/* binding */ blockScreen),
/* harmony export */   "unBlockScreen": () => (/* binding */ unBlockScreen)
/* harmony export */ });
function blockScreen(zIndex){
    let k = document.createElement('div');
    k.setAttribute("id", "blocker");
    k.style.width = "100vw";
    k.style.height = "100vh";
    k.style.position = "fixed";
    k.style.top = "0";
    k.style.left = "0";
    k.style.zIndex = ""+zIndex;
    document.body.appendChild(k);
    k.style.transition = "backdrop-filter 0.2s"
    k.style.transition = "background-color 0.2s"
    setTimeout(function(){ k.style.backgroundColor = "rgba(0, 0, 0, 0.4)"; k.style.backdropFilter = "blur(2px)";}, 0);
}

function unBlockScreen(){
    let k = document.getElementById("blocker");
    k.style.transition = "backdrop-filter 0.2s"
    k.style.transition = "background-color 0.2s"
    setTimeout(function(){ k.style.backgroundColor = "rgba(0, 0, 0, 0.0)"; k.style.backdropFilter = "blur(0px)";}, 0);
    setTimeout(function(){k.remove();}, 200);
}



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "addToDo": () => (/* binding */ addToDo),
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "deleteToDo": () => (/* binding */ deleteToDo),
/* harmony export */   "loadStorage": () => (/* binding */ loadStorage),
/* harmony export */   "projectFactory": () => (/* binding */ projectFactory),
/* harmony export */   "projectList": () => (/* binding */ projectList),
/* harmony export */   "toDoList": () => (/* binding */ toDoList),
/* harmony export */   "todoFactory": () => (/* binding */ todoFactory)
/* harmony export */ });
let idSeed = 0;

let toDoList = [];
let projectList = [];

function todoFactory(doName, doProject = null, doDate, doDescrip, completed = false, doPriority = 0){
    
    let id = idSeed++;
    return {doName, doProject, doDate, doPriority, doDescrip, id, completed};
};

function projectFactory(projectName, projectDescription){
    let id = idSeed++;
    return {projectName, projectDescription, id};
}

function deleteToDo(doId){
    let index;
    for (index = 0; index < toDoList.length; index++){
        if (toDoList[index].id == doId){
            toDoList.splice(index, 1);
            break;
        }
    }
}

function deleteProject(projectId){
    let index;
    for (index = 0; index < projectList.length; index++){
        if (projectList[index].id == projectId){
            projectList.splice(index, 1);
            break;
        }
    }
}

function addToDo(toDo){
    toDoList.push(toDo);   

}

function addProject(project){
    projectList.push(project);
}

function loadStorage(){
    let projectStore = JSON.parse(localStorage.getItem('projectList'));
    let todoStore = JSON.parse(localStorage.getItem('toDoList'));
    if (projectStore != null) projectList = projectStore;
    if (todoStore != null) toDoList = todoStore;
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup */ "./src/popup.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





let activeProject = null;
let defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("NONE", "default project");
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(defaultProject);
refreshProjects();

const doContainer = document.getElementById("taskcontainer");
const projectContainer = document.getElementById("projectList");
const todaySelect = document.getElementById("todaySelect");
const weekSelect = document.getElementById("weekSelect");

const addToDoButton = document.getElementById("addToDo");
const addProjectButton = document.getElementById("projectadder");

function refreshToDos(){
    const today = new Date();
    let week = new Date();
    week.setDate(today.getDate() + 7);
    _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.sort((a, b) => {
        let a2 = new Date(a.doDate);
        let b2 = new Date(b.doDate);
        if (a2 > b2) return 1;
        if (b2 > a2) return -1;
        if (a.doName > b.doName) return 1;
        return -1;
    });
    document.querySelectorAll(".doBox").forEach(elem => elem.remove());
    function checkDate(toDo){
        let toDoDate = new Date(toDo.doDate).getDate();
        if (!todaySelect.checked && !weekSelect.checked) displayToDo(toDo);
        else if (todaySelect.checked && toDoDate == today.getDate()) displayToDo(toDo);
        else if (weekSelect.checked && toDoDate <= week.getDate()) displayToDo(toDo);

    }
    if (activeProject == null) _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.forEach(toDo => checkDate(toDo)); 
    else _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.filter(toDo => toDo.doProject.id == activeProject).forEach(toDo => checkDate(toDo));
    localStorage.setItem('toDoList', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.toDoList));
}

todaySelect.addEventListener('change', () => {
    if (todaySelect.checked) weekSelect.checked = false;
    refreshToDos();
});
weekSelect.addEventListener('change', () => {
    if (weekSelect.checked) todaySelect.checked = false;
    refreshToDos();
});


function refreshProjects(){
    document.querySelectorAll(".projectBox").forEach(elem => elem.remove());
    for (let i = 1; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
        displayProject(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);
    }
    localStorage.setItem('projectList', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList));
}

function displayToDo(toDo){
    const doBox = document.createElement('div');
    doBox.id = "toDo" + toDo.doName;
    doBox.classList.add("doBox");
    doBox.classList.add("priority" + toDo.doPriority);
    let doNameDiv = document.createElement('button');
    doNameDiv.textContent = toDo.doName;
    doNameDiv.classList.add("toDoName");
    doNameDiv.addEventListener('click', () => showToDoDetails(toDo));
    let doDateDiv = document.createElement('div');
    doDateDiv.classList.add("doDate");
    doDateDiv.textContent = new Date(toDo.doDate).toDateString();
    if (toDo.completed) doNameDiv.style.textDecoration = "line-through";
    else doNameDiv.style.textDecoration = "none";
    
    //delete todo
    let deleteButton = document.createElement('button');
    deleteButton.classList.add("toDoDelete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener('click', () => {
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.deleteToDo)(toDo.id);
        refreshToDos();
    });

    //edit todo
    let editButton = document.createElement(`button`);
    editButton.classList.add("toDoEdit");
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        //display stuff
        editToDoDetails(toDo);
    });
    //complete todo
    let completeButton = document.createElement(`button`);
    completeButton.classList.add("toDoComplete");
    completeButton.textContent = toDo.completed ? "Undo" : "Complete";
    completeButton.style.marginRight =  toDo.completed ? "35px" : "5px";
    completeButton.addEventListener('click', () => {
        toDo.completed = !toDo.completed;
        if (toDo.completed){
            doNameDiv.style.textDecoration = "line-through";
            completeButton.textContent = "Undo";
        }
        else{
            doNameDiv.style.textDecoration = "none";
            completeButton.textContent = "Complete";
        }
        refreshToDos();
    });

    doBox.appendChild(doNameDiv);
    doBox.appendChild(doDateDiv);
    doBox.appendChild(completeButton);

    doBox.appendChild(editButton);
    doBox.appendChild(deleteButton);
    doContainer.appendChild(doBox);
}


addToDoButton.addEventListener('click', () => {
    let newToDoBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)("New ToDo...");
    let formBox = newToDoBox.popUpcontent;
    formBox.style.display = "grid";
    formBox.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
    formBox.style.gridTemplateRows = "15px 20px 15px 1fr 40px";
    formBox.style.fontSize = "1.1rem";
    formBox.style.gap = "5px";

    let newTitle = document.createElement("input");
    newTitle.type = "text";
    let newDescription = document.createElement("textarea");
    newDescription.style.resize = "none";
    newDescription.style.width = "100%";
    newDescription.style.height = "100%";
    newDescription.style.gridRow = "4/5";
    newDescription.style.gridColumn = "1/5"
    let addToDoButton = document.createElement("button");
    addToDoButton.style.gridRow = "5/6";
    addToDoButton.style.gridColumn = "1/2";
    addToDoButton.style.justifySelf = "start";
    addToDoButton.innerHTML = "Add ToDo";
    addToDoButton.style.fontSize = "1.3rem";

    let projectSelect = document.createElement("select");

    for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
        let pOption = document.createElement("option");
        pOption.value = ""+i;
        pOption.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i].projectName;
        projectSelect.appendChild(pOption);
    }
    let dateSelect = document.createElement("input");
    dateSelect.type = "date";
    dateSelect.valueAsDate = new Date();
    let prioritySelect = document.createElement("select");
    let lowP = document.createElement("option");
    lowP.value = "1";
    lowP.textContent = "Low";
    let medP = document.createElement("option");
    medP.value = "2";
    medP.textContent = "Medium";
    let highP = document.createElement("option");
    highP.value = "3";
    highP.textContent = "High";
    
    prioritySelect.appendChild(lowP);
    prioritySelect.appendChild(medP);
    prioritySelect.appendChild(highP);

    let titleLabel = document.createElement("p");
    titleLabel.textContent = "Name";
    let projectLabel = document.createElement("p");
    projectLabel.textContent = "Project";
    let dateLabel = document.createElement("p");
    dateLabel.textContent = "Date";
    let prioLabel = document.createElement("p");
    prioLabel.textContent = "Priority";
    let descLabel = document.createElement("p");
    descLabel.textContent = "Description";

    formBox.appendChild(titleLabel);
    formBox.appendChild(projectLabel);
    formBox.appendChild(dateLabel);
    formBox.appendChild(prioLabel);
    formBox.appendChild(newTitle);
    formBox.appendChild(projectSelect);
    formBox.appendChild(dateSelect);
    formBox.appendChild(prioritySelect);
    formBox.appendChild(descLabel);
    formBox.appendChild(newDescription);
    formBox.appendChild(addToDoButton);

    document.body.appendChild(newToDoBox.popBox);

    addToDoButton.addEventListener('click', ()=> {
        if (newTitle.value == null || newTitle.value == "") return;
        let m1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(newTitle.value, _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[projectSelect.value], dateSelect.valueAsDate, newDescription.value, false, prioritySelect.value);
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(m1);
        refreshToDos();
        (0,_popup__WEBPACK_IMPORTED_MODULE_1__.closePupUp)();
    });
});

function displayProject(project){
    const projectBox = document.createElement('div');
    projectBox.id = "project" + project.projectName;
    projectBox.classList.add("projectBox");
    let projectFocus = document.createElement('button');
    projectFocus.textContent = project.projectName;
    projectFocus.classList.add("projectName");

    projectFocus.addEventListener('click', ()=>{
        if (activeProject == project.id){
            activeProject = null;
            projectBox.classList.remove("activeProjectBox");
        }
        else{
            if (activeProject != null){
                let old = document.getElementsByClassName("activeProjectBox")[0];
                old.classList.remove("activeProjectBox");
            }
            activeProject = project.id;
            projectBox.classList.add("activeProjectBox");
        }
        refreshToDos();
    });

    let deleteButton = document.createElement('button');
    deleteButton.classList.add("projectDelete");
    
    deleteButton.textContent = "X";
    deleteButton.addEventListener('click', () => {
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id);
        refreshProjects();
    });
    
    let descriptionButton = document.createElement(`button`);
    
    descriptionButton.classList.add("projectDescription");
    descriptionButton.textContent = "?";
    descriptionButton.addEventListener('click', () => {
        let descriptionBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)(project.projectName);
        let descriptionContent = descriptionBox.popUpcontent;
        descriptionContent.textContent = project.projectDescription;
        document.body.appendChild(descriptionBox.popBox);
    });

    projectBox.appendChild(projectFocus);
    projectBox.appendChild(deleteButton);
    projectBox.appendChild(descriptionButton);
    projectContainer.appendChild(projectBox);
}



addProjectButton.addEventListener('click', () =>{
    let newProjectBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)("New Project...");
    let formBox = newProjectBox.popUpcontent;

    formBox.style.fontSize = "1.3rem";
    formBox.style.gap = "10px";
    formBox.style.display = "flex";
    formBox.style.flexDirection = "column";
 
    let titleLabel = document.createElement("p");
    titleLabel.style.fontSize = "1.1rem";
    titleLabel.textContent = "Project Title: ";
    let newTitle = document.createElement("input");
    newTitle.type = "text";
    let titleContainer = document.createElement("div");
    titleContainer.style.display = "flex";
    titleContainer.style.gap = "5px";
    let descLabel = document.createElement("p");
    descLabel.style.fontSize = "1.1rem";
    descLabel.textContent = "Project Description:";
    let newDescription = document.createElement("textarea");
    newDescription.style.resize = "none";
    newDescription.style.width = "100%";
    newDescription.style.height = "75%";
    newDescription.style.marginTop = "-5px"
    let addProjectButton = document.createElement("button");

    addProjectButton.style.alignSelf = "start";
    addProjectButton.innerHTML = "Add Project";


    titleContainer.appendChild(titleLabel);
    titleContainer.appendChild(newTitle);
    formBox.appendChild(titleContainer);
    formBox.appendChild(descLabel);
    formBox.appendChild(newDescription);
    formBox.appendChild(addProjectButton);
    document.body.appendChild(newProjectBox.popBox);
    

    addProjectButton.addEventListener('click', ()=> {
        if (newTitle.value == null || newTitle.value == "") return;
        let m1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(newTitle.value, newDescription.value);
        (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(m1);
        refreshProjects();
        (0,_popup__WEBPACK_IMPORTED_MODULE_1__.closePupUp)();
    });
});

function editToDoDetails(toDo){
    let editToDoBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)("Edit: " + toDo.doName);
    let formBox = editToDoBox.popUpcontent;
    formBox.style.display = "grid";
    formBox.style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
    formBox.style.gridTemplateRows = "15px 20px 15px 1fr 40px";
    formBox.style.fontSize = "1.1rem";
    formBox.style.gap = "5px";

    let newTitle = document.createElement("input");
    newTitle.type = "text";
    newTitle.value = toDo.doName;
    let newDescription = document.createElement("textarea");
    newDescription.value = toDo.doDescrip;
    newDescription.style.resize = "none";
    newDescription.style.width = "100%";
    newDescription.style.height = "100%";
    newDescription.style.gridRow = "4/5";
    newDescription.style.gridColumn = "1/5"
    let editToDoButton = document.createElement("button");
    editToDoButton.style.gridRow = "5/6";
    editToDoButton.style.gridColumn = "1/2";
    editToDoButton.style.justifySelf = "start";
    editToDoButton.innerHTML = "Save Changes";
    editToDoButton.style.fontSize = "1.3rem";

    let projectSelect = document.createElement("select");

    for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
        let pOption = document.createElement("option");
        pOption.value = ""+i;
        pOption.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i].projectName;
        projectSelect.appendChild(pOption);
    }
    let dateSelect = document.createElement("input");
    dateSelect.type = "date";
    dateSelect.valueAsDate = new Date(toDo.doDate);
    let prioritySelect = document.createElement("select");
    let oldP = document.createElement("option");
    oldP.value = toDo.doPriority;
    oldP.textContent = "     ";
    let lowP = document.createElement("option");
    lowP.value = "1";
    lowP.textContent = "Low";
    let medP = document.createElement("option");
    medP.value = "2";
    medP.textContent = "Medium";
    let highP = document.createElement("option");
    highP.value = "3";
    highP.textContent = "High";
    
    prioritySelect.appendChild(oldP);
    prioritySelect.appendChild(lowP);
    prioritySelect.appendChild(medP);
    prioritySelect.appendChild(highP);

    let titleLabel = document.createElement("p");
    titleLabel.textContent = "Name";
    let projectLabel = document.createElement("p");
    projectLabel.textContent = "Project";
    let dateLabel = document.createElement("p");
    dateLabel.textContent = "Date";
    let prioLabel = document.createElement("p");
    prioLabel.textContent = "Priority";
    let descLabel = document.createElement("p");
    descLabel.textContent = "Description";

    formBox.appendChild(titleLabel);
    formBox.appendChild(projectLabel);
    formBox.appendChild(dateLabel);
    formBox.appendChild(prioLabel);
    formBox.appendChild(newTitle);
    formBox.appendChild(projectSelect);
    formBox.appendChild(dateSelect);
    formBox.appendChild(prioritySelect);
    formBox.appendChild(descLabel);
    formBox.appendChild(newDescription);
    formBox.appendChild(editToDoButton);

    document.body.appendChild(editToDoBox.popBox);

    editToDoButton.addEventListener('click', ()=> {
        if (newTitle.value == null || newTitle.value == "") return;
        toDo.doName = newTitle.value;
        toDo.doProject = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[projectSelect.value];
        toDo.doDate = dateSelect.valueAsDate;
        toDo.doDescrip = newDescription.value;
        toDo.doPriority = prioritySelect.value;
        refreshToDos();
        (0,_popup__WEBPACK_IMPORTED_MODULE_1__.closePupUp)();
    });
}

function showToDoDetails(toDo){
    let detailsBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)(toDo.doName);
    let infoBox = detailsBox.popUpcontent;
    infoBox.style.fontSize = "1.2rem";
    infoBox.style.lineHeight = "1.2rem";
    let projectName = toDo.doProject.projectName == 'NONE' ? "" : "Project: " + toDo.doProject.projectName;
    let showDate =new Date(toDo.doDate);
    infoBox.innerHTML = `<p>${projectName}</p>
    <p>Priority: ${toDo.doPriority}</p>
    <p>Due Date: ${showDate.toDateString()}</p>
    <br>
    <p>Description: ${toDo.doDescrip}</p>`;

    document.body.appendChild(detailsBox.popBox);
}



(0,_todo__WEBPACK_IMPORTED_MODULE_0__.loadStorage)();
refreshProjects();
refreshToDos();

if (_todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length == 1 && _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.length == 0) populate();

function populate(){
    let pro1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("Programming", "trying to learn to program");
    let pro2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("Web Design", "cant really call this programming");
    let pro3 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)("Algorithms", "ordo notation and stuff");
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(pro1);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(pro2);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(pro3);
    refreshProjects();
    let p = new Date();
    let k = new Date();
    k.setDate(p.getDate() +4)

    let m = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)("testing1", pro1, p, "do stuff", false, 3);
    let s = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)("testing2", pro2, k, "do stuffasfddsdsfsd  sdfgsdfg sdgf gs dgf fgdsfgdsgs  g gg dfs gdfsg fdsg fsd gfd g gfdfg sdg dfs fgds gfdsg fsd gfdsg fdsg fds gfdsg sg fdsg fdsg f gdfs gfds gdfs gdsf gfdsgdfsfadsfa", false, 1);
    let o = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)("testing3", pro3, p, "do stuff", false, 2);

    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(m);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(s);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(o);
    refreshToDos();
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCLEtBQUs7QUFDTDs7QUFFQTtBQUNBLHFCQUFxQixpREFBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFlBQVk7QUFDMUMsbUJBQW1CLGdCQUFnQjtBQUNuQyxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0Esc0JBQXNCLGVBQWU7O0FBRXJDO0FBQ0E7Ozs7QUFJQSxrREFBVztBQUNYO0FBQ0E7O0FBRUEsSUFBSSxxREFBa0IsU0FBUyxrREFBZTs7QUFFOUM7QUFDQSxlQUFlLHFEQUFjO0FBQzdCLGVBQWUscURBQWM7QUFDN0IsZUFBZSxxREFBYztBQUM3QixJQUFJLGlEQUFVO0FBQ2QsSUFBSSxpREFBVTtBQUNkLElBQUksaURBQVU7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtEQUFXO0FBQ3ZCLFlBQVksa0RBQVc7QUFDdkIsWUFBWSxrREFBVzs7QUFFdkIsSUFBSSw4Q0FBTztBQUNYLElBQUksOENBQU87QUFDWCxJQUFJLDhDQUFPO0FBQ1g7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wb3B1cC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3NjcmVlbmJsb2NrLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kby5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuOnJvb3R7XFxuICAgIC0taGVhZGVyQ29sb3I6IHJnYig4NywgMTIsIDg3KTtcXG4gICAgLS1oZWFkZXJUZXh0Q29sb3I6IHdoaXRlO1xcbiAgICAtLXNpZGViYXJDb2xvcjogcmdiKDg4LCAxMCwgODgpO1xcbiAgICAtLXNpZGViYXJUZXh0Q29sb3I6IHdoaXRlO1xcbiAgICAtLWNvbnRhaW5lckJhY2tncm91bmQ6IHJnYigxNDEsIDExNCwgMTU2KTtcXG4gICAgLS1wb3B1cEJhY2tncm91bmQ6IHJnYigyMDYsIDE4NywgMjE2KTtcXG5cXG4gICAgLS1kb0JveENvbG9yOiByZ2IoMjIwLCAyMDAsIDIyMCk7XFxuICAgIC0tZG9Cb3hIb3ZlckNvbG9yOiByZ2IoMjU1LCAyMzUsIDI1NSk7XFxuICAgIC0tZG9Cb3hUZXh0Q29sb3I6IGJsYWNrO1xcblxcbiAgICAtLWhpZ2hQcmlvcml0eTogcmdiKDI1NSwgMCwgNTApO1xcbiAgICAtLW1pZFByaW9yaXR5OiByZ2IoMjU1LCAyMDUsIDApO1xcbiAgICAtLWxvd1ByaW9yaXR5OiByZ2IoMCwgMjM1LCA1MCk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4uZG9EYXRle1xcbiAgICBjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpO1xcbn1cXG5cXG4jYWRkVG9EbywgI3Byb2plY3RhZGRlcntcXG4gICAgY29sb3I6dmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxufVxcblxcbiNhZGRUb0Rve1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN0b3Bjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggbWlubWF4KDUwMHB4LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdhcDogMHB4O1xcbn1cXG5cXG5cXG4jbG9nb0NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGltZ3tcXG4gICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuI3Rhc2tjb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXJCYWNrZ3JvdW5kKTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxufVxcblxcbi5kb0JveHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9Cb3hDb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB2YXIoLS1oaWdoUHJpb3JpdHkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1hcmdpbjogNXB4IDE1cHggMTBweCAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcblxcbn1cXG5cXG4uZG9Cb3g6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9Cb3hIb3ZlckNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5MntcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1taWRQcmlvcml0eSk7XFxufVxcblxcbi5wcmlvcml0eTF7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG93UHJpb3JpdHkpO1xcbn1cXG5cXG4uZG9Cb3ggLnRvRG9OYW1lIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcbn1cXG5cXG4jbGVmdFNpZGViYXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgYnV0dG9ue1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxufVxcblxcbiNwcm9qZWN0SGVhZGVye1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNwcm9qZWN0TGlzdHtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3RCb3h7XFxuICAgIHBhZGRpbmc6IDBweCA2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdGFkZGVye1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnByb2plY3ROYW1le1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0Qm94OmhvdmVye1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3RCb3h7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4ucHJvamVjdEJveDo6YmVmb3Jle1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxufVxcblxcbiNwb3BVcEJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLXBvcHVwQmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcilcXG59XFxuXFxuI3BvcFVwSGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jcG9wVXBDbG9zZXtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHRDb2xvcik7XFxufVxcblxcbiN0b2RheVNlbGVjdCwgI3dlZWtTZWxlY3R7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0aW1lc2VsZWN0b3J7XFxuICAgIG1hcmdpbjogNXB4IDBweCAxNXB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcblxcbmxhYmVse1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNsZWZ0U2lkZWJhciBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVse1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWx7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLDhCQUE4QjtJQUM5Qix3QkFBd0I7SUFDeEIsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6Qix5Q0FBeUM7SUFDekMscUNBQXFDOztJQUVyQyxnQ0FBZ0M7SUFDaEMscUNBQXFDO0lBQ3JDLHVCQUF1Qjs7SUFFdkIsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxzQkFBc0I7QUFDMUI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsNEJBQTRCO0NBQzVCLFlBQVk7Q0FDWixVQUFVO0NBQ1YsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsUUFBUTtBQUNaOzs7QUFHQTtJQUNJLHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7R0FDRyxXQUFXO0FBQ2Q7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1QyxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsMENBQTBDO0lBQzFDLDJCQUEyQjtJQUMzQixpQ0FBaUM7O0FBRXJDOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHdDQUF3QztBQUM1Qzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFVBQVU7SUFDViwwQ0FBMEM7SUFDMUMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLHlDQUF5QztBQUM3Qzs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QztBQUNKOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYjs7OztBQUlBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuOnJvb3R7XFxuICAgIC0taGVhZGVyQ29sb3I6IHJnYig4NywgMTIsIDg3KTtcXG4gICAgLS1oZWFkZXJUZXh0Q29sb3I6IHdoaXRlO1xcbiAgICAtLXNpZGViYXJDb2xvcjogcmdiKDg4LCAxMCwgODgpO1xcbiAgICAtLXNpZGViYXJUZXh0Q29sb3I6IHdoaXRlO1xcbiAgICAtLWNvbnRhaW5lckJhY2tncm91bmQ6IHJnYigxNDEsIDExNCwgMTU2KTtcXG4gICAgLS1wb3B1cEJhY2tncm91bmQ6IHJnYigyMDYsIDE4NywgMjE2KTtcXG5cXG4gICAgLS1kb0JveENvbG9yOiByZ2IoMjIwLCAyMDAsIDIyMCk7XFxuICAgIC0tZG9Cb3hIb3ZlckNvbG9yOiByZ2IoMjU1LCAyMzUsIDI1NSk7XFxuICAgIC0tZG9Cb3hUZXh0Q29sb3I6IGJsYWNrO1xcblxcbiAgICAtLWhpZ2hQcmlvcml0eTogcmdiKDI1NSwgMCwgNTApO1xcbiAgICAtLW1pZFByaW9yaXR5OiByZ2IoMjU1LCAyMDUsIDApO1xcbiAgICAtLWxvd1ByaW9yaXR5OiByZ2IoMCwgMjM1LCA1MCk7XFxufVxcblxcbioge1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5idXR0b24ge1xcblxcdGJhY2tncm91bmQ6IG5vbmU7XFxuXFx0Y29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKTtcXG5cXHRib3JkZXI6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRvdXRsaW5lOiBpbmhlcml0O1xcbn1cXG5cXG4uZG9EYXRle1xcbiAgICBjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpO1xcbn1cXG5cXG4jYWRkVG9EbywgI3Byb2plY3RhZGRlcntcXG4gICAgY29sb3I6dmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxufVxcblxcbiNhZGRUb0Rve1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiN0b3Bjb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggbWlubWF4KDUwMHB4LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGdhcDogMHB4O1xcbn1cXG5cXG5cXG4jbG9nb0NvbnRhaW5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGltZ3tcXG4gICB3aWR0aDogMTAwJTtcXG59XFxuXFxuXFxuI3Rhc2tjb250YWluZXJ7XFxuICAgIHBhZGRpbmc6IDEwcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWluZXJCYWNrZ3JvdW5kKTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxufVxcblxcbi5kb0JveHtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9Cb3hDb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDdweCBzb2xpZCB2YXIoLS1oaWdoUHJpb3JpdHkpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1hcmdpbjogNXB4IDE1cHggMTBweCAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cztcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcblxcbn1cXG5cXG4uZG9Cb3g6aG92ZXJ7XFxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZG9Cb3hIb3ZlckNvbG9yKTtcXG59XFxuXFxuLnByaW9yaXR5MntcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1taWRQcmlvcml0eSk7XFxufVxcblxcbi5wcmlvcml0eTF7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbG93UHJpb3JpdHkpO1xcbn1cXG5cXG4uZG9Cb3ggLnRvRG9OYW1lIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcbn1cXG5cXG4jbGVmdFNpZGViYXJ7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMjVweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgYnV0dG9ue1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxufVxcblxcbiNwcm9qZWN0SGVhZGVye1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbiNwcm9qZWN0TGlzdHtcXG4gICAgbWFyZ2luOiAxMHB4IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDVweDtcXG59XFxuXFxuLnByb2plY3RCb3h7XFxuICAgIHBhZGRpbmc6IDBweCA2cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdGFkZGVye1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuLnByb2plY3ROYW1le1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5wcm9qZWN0Qm94OmhvdmVye1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuLmFjdGl2ZVByb2plY3RCb3h7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4ucHJvamVjdEJveDo6YmVmb3Jle1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxufVxcblxcbiNwb3BVcEJveHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKCAtLXBvcHVwQmFja2dyb3VuZCk7XFxuICAgIGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcilcXG59XFxuXFxuI3BvcFVwSGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oZWFkZXJDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jcG9wVXBDbG9zZXtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHRDb2xvcik7XFxufVxcblxcbiN0b2RheVNlbGVjdCwgI3dlZWtTZWxlY3R7XFxuICAgIG9wYWNpdHk6IDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0aW1lc2VsZWN0b3J7XFxuICAgIG1hcmdpbjogNXB4IDBweCAxNXB4IDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcblxcbmxhYmVse1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNsZWZ0U2lkZWJhciBsYWJlbHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG5cXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIGxhYmVse1xcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgbGFiZWx7XFxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbn1cXG5cXG5cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7YmxvY2tTY3JlZW4sIHVuQmxvY2tTY3JlZW59IGZyb20gJy4vc2NyZWVuYmxvY2suanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBvcFVwKHRpdGxlLCBibG9ja0luZGV4ID0gMTAwKXtcbiAgICBibG9ja1NjcmVlbihibG9ja0luZGV4KTtcbiAgICBsZXQgcG9wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wQm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wVXBCb3hcIik7XG4gICAgcG9wQm94LnN0eWxlLm1pbldpZHRoID0gXCI2MDBweFwiO1xuICAgIHBvcEJveC5zdHlsZS5taW5IZWlnaHQgPSBcIjQwMHB4XCI7XG4gICAgcG9wQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBwb3BCb3guc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgcG9wQm94LnN0eWxlLndpZHRoID0gXCI1MCVcIjtcbiAgICBwb3BCb3guc3R5bGUuaGVpZ2h0ID0gXCI2MCVcIjtcbiAgICBwb3BCb3guc3R5bGUuekluZGV4ID0gYCR7YmxvY2tJbmRleCsxfWA7XG4gICAgXG4gICAgcG9wQm94LnN0eWxlLnRvcCA9IFwiNTAlXCI7XG4gICAgcG9wQm94LnN0eWxlLmxlZnQgPSBcIjUwJVwiO1xuICAgIHBvcEJveC5zdHlsZS5tYXJnaW5Ub3AgPSBcIm1pbigtMjAwcHgsIC0zMHZoKVwiO1xuICAgIHBvcEJveC5zdHlsZS5tYXJnaW5MZWZ0ID0gXCJtaW4oLTMwMHB4LCAtMjV2dylcIjtcbiAgICBwb3BCb3guc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgcG9wQm94LnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNnB4XCI7XG4gICAgcG9wQm94LnN0eWxlLmJveFNoYWRvdyA9IFwiNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpLCA1cHggLTFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgcG9wQm94LnN0eWxlLmJveFNpemluZyA9IFwiYm9yZGVyLWJveFwiO1xuICAgIGxldCBwb3BVcEhlYWRlciA9IG1ha2VCb3hIZWFkZXIodGl0bGUpO1xuICAgIGxldCBwb3BVcGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BVcGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCI5MCVcIjtcbiAgICBwb3BVcGNvbnRlbnQuc3R5bGUucGFkZGluZyA9IFwiOHB4IDE1cHggNXB4IDE1cHhcIjtcbiAgICBwb3BCb3guYXBwZW5kQ2hpbGQocG9wVXBIZWFkZXIpO1xuICAgIHBvcEJveC5hcHBlbmRDaGlsZChwb3BVcGNvbnRlbnQpO1xuICAgIHJldHVybiB7cG9wQm94LCBwb3BVcEhlYWRlciwgcG9wVXBjb250ZW50fTtcbn1cblxuZnVuY3Rpb24gbWFrZUJveEhlYWRlcihoZWFkVGl0bGUpe1xuICAgIGxldCBib3hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGJveEhlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcFVwSGVhZGVyXCIpO1xuICAgIGJveEhlYWRlci5zdHlsZS5oZWlnaHQgPSBcIjEwJVwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1iZXR3ZWVuXCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLnBhZGRpbmcgPSBcIjBweCAxMnB4IDBweCAxMnB4XCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNnB4IDZweCAwcHggMHB4XCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSBcImJvbGRcIjtcbiAgICBib3hIZWFkZXIuc3R5bGUubGluZUhlaWdodCA9IFwibWF4KDZ2aCwgNDBweClcIjtcbiAgICBib3hIZWFkZXIuc3R5bGUuZm9udFNpemUgPSBcIm1heCg0dmgsIDMwcHgpXCI7XG5cbiAgICBsZXQgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBoZWFkVGl0bGU7XG4gICAgaGVhZGVyVGV4dC5tYXJnaW5SaWdodCA9IFwiYXV0b1wiO1xuXG4gICAgbGV0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3BVcENsb3NlXCIpO1xuICAgIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjbG9zZVB1cFVwKCkpO1xuIFxuICAgIGJveEhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbiAgICBib3hIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgIHJldHVybiBib3hIZWFkZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZVB1cFVwKCl7XG4gICAgbGV0IHBvcFVwQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcEJveFwiKTtcbiAgICBwb3BVcEJveC5yZW1vdmUoKTtcbiAgICB1bkJsb2NrU2NyZWVuKCk7XG59IiwiZnVuY3Rpb24gYmxvY2tTY3JlZW4oekluZGV4KXtcbiAgICBsZXQgayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGsuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9ja2VyXCIpO1xuICAgIGsuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgay5zdHlsZS5oZWlnaHQgPSBcIjEwMHZoXCI7XG4gICAgay5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBrLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgIGsuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgIGsuc3R5bGUuekluZGV4ID0gXCJcIit6SW5kZXg7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrKTtcbiAgICBrLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tkcm9wLWZpbHRlciAwLjJzXCJcbiAgICBrLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tncm91bmQtY29sb3IgMC4yc1wiXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjQpXCI7IGsuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoMnB4KVwiO30sIDApO1xufVxuXG5mdW5jdGlvbiB1bkJsb2NrU2NyZWVuKCl7XG4gICAgbGV0IGsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJsb2NrZXJcIik7XG4gICAgay5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZHJvcC1maWx0ZXIgMC4yc1wiXG4gICAgay5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kLWNvbG9yIDAuMnNcIlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4wKVwiOyBrLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDBweClcIjt9LCAwKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7ay5yZW1vdmUoKTt9LCAyMDApO1xufVxuXG5leHBvcnQge2Jsb2NrU2NyZWVuLCB1bkJsb2NrU2NyZWVufTsiLCJsZXQgaWRTZWVkID0gMDtcblxuZXhwb3J0IGxldCB0b0RvTGlzdCA9IFtdO1xuZXhwb3J0IGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkoZG9OYW1lLCBkb1Byb2plY3QgPSBudWxsLCBkb0RhdGUsIGRvRGVzY3JpcCwgY29tcGxldGVkID0gZmFsc2UsIGRvUHJpb3JpdHkgPSAwKXtcbiAgICBcbiAgICBsZXQgaWQgPSBpZFNlZWQrKztcbiAgICByZXR1cm4ge2RvTmFtZSwgZG9Qcm9qZWN0LCBkb0RhdGUsIGRvUHJpb3JpdHksIGRvRGVzY3JpcCwgaWQsIGNvbXBsZXRlZH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbil7XG4gICAgbGV0IGlkID0gaWRTZWVkKys7XG4gICAgcmV0dXJuIHtwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBpZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb0RvKGRvSWQpe1xuICAgIGxldCBpbmRleDtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0b0RvTGlzdC5sZW5ndGg7IGluZGV4Kyspe1xuICAgICAgICBpZiAodG9Eb0xpc3RbaW5kZXhdLmlkID09IGRvSWQpe1xuICAgICAgICAgICAgdG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpe1xuICAgIGxldCBpbmRleDtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGluZGV4Kyspe1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaW5kZXhdLmlkID09IHByb2plY3RJZCl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKHRvRG8pe1xuICAgIHRvRG9MaXN0LnB1c2godG9Ebyk7ICAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdG9yYWdlKCl7XG4gICAgbGV0IHByb2plY3RTdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIGxldCB0b2RvU3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBpZiAocHJvamVjdFN0b3JlICE9IG51bGwpIHByb2plY3RMaXN0ID0gcHJvamVjdFN0b3JlO1xuICAgIGlmICh0b2RvU3RvcmUgIT0gbnVsbCkgdG9Eb0xpc3QgPSB0b2RvU3RvcmU7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHt0b2RvRmFjdG9yeSwgcHJvamVjdEZhY3RvcnksIHRvRG9MaXN0LCBwcm9qZWN0TGlzdCwgZGVsZXRlVG9EbywgZGVsZXRlUHJvamVjdCwgYWRkVG9EbywgYWRkUHJvamVjdCwgbG9hZFN0b3JhZ2V9IGZyb20gJy4vdG9kbyc7XG5pbXBvcnQge21ha2VQb3BVcCwgY2xvc2VQdXBVcH0gZnJvbSAnLi9wb3B1cCc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5sZXQgZGVmYXVsdFByb2plY3QgPSBwcm9qZWN0RmFjdG9yeShcIk5PTkVcIiwgXCJkZWZhdWx0IHByb2plY3RcIik7XG5hZGRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KTtcbnJlZnJlc2hQcm9qZWN0cygpO1xuXG5jb25zdCBkb0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza2NvbnRhaW5lclwiKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RMaXN0XCIpO1xuY29uc3QgdG9kYXlTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZGF5U2VsZWN0XCIpO1xuY29uc3Qgd2Vla1NlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2Vla1NlbGVjdFwiKTtcblxuY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVG9Eb1wiKTtcbmNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RhZGRlclwiKTtcblxuZnVuY3Rpb24gcmVmcmVzaFRvRG9zKCl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB3ZWVrID0gbmV3IERhdGUoKTtcbiAgICB3ZWVrLnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpICsgNyk7XG4gICAgdG9Eb0xpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgICAgICBsZXQgYTIgPSBuZXcgRGF0ZShhLmRvRGF0ZSk7XG4gICAgICAgIGxldCBiMiA9IG5ldyBEYXRlKGIuZG9EYXRlKTtcbiAgICAgICAgaWYgKGEyID4gYjIpIHJldHVybiAxO1xuICAgICAgICBpZiAoYjIgPiBhMikgcmV0dXJuIC0xO1xuICAgICAgICBpZiAoYS5kb05hbWUgPiBiLmRvTmFtZSkgcmV0dXJuIDE7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRvQm94XCIpLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgICBmdW5jdGlvbiBjaGVja0RhdGUodG9Ebyl7XG4gICAgICAgIGxldCB0b0RvRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZG9EYXRlKS5nZXREYXRlKCk7XG4gICAgICAgIGlmICghdG9kYXlTZWxlY3QuY2hlY2tlZCAmJiAhd2Vla1NlbGVjdC5jaGVja2VkKSBkaXNwbGF5VG9Ebyh0b0RvKTtcbiAgICAgICAgZWxzZSBpZiAodG9kYXlTZWxlY3QuY2hlY2tlZCAmJiB0b0RvRGF0ZSA9PSB0b2RheS5nZXREYXRlKCkpIGRpc3BsYXlUb0RvKHRvRG8pO1xuICAgICAgICBlbHNlIGlmICh3ZWVrU2VsZWN0LmNoZWNrZWQgJiYgdG9Eb0RhdGUgPD0gd2Vlay5nZXREYXRlKCkpIGRpc3BsYXlUb0RvKHRvRG8pO1xuXG4gICAgfVxuICAgIGlmIChhY3RpdmVQcm9qZWN0ID09IG51bGwpIHRvRG9MaXN0LmZvckVhY2godG9EbyA9PiBjaGVja0RhdGUodG9EbykpOyBcbiAgICBlbHNlIHRvRG9MaXN0LmZpbHRlcih0b0RvID0+IHRvRG8uZG9Qcm9qZWN0LmlkID09IGFjdGl2ZVByb2plY3QpLmZvckVhY2godG9EbyA9PiBjaGVja0RhdGUodG9EbykpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b0RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KHRvRG9MaXN0KSk7XG59XG5cbnRvZGF5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAodG9kYXlTZWxlY3QuY2hlY2tlZCkgd2Vla1NlbGVjdC5jaGVja2VkID0gZmFsc2U7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG59KTtcbndlZWtTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICh3ZWVrU2VsZWN0LmNoZWNrZWQpIHRvZGF5U2VsZWN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0cygpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEJveFwiKS5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRG8odG9Ebyl7XG4gICAgY29uc3QgZG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb0JveC5pZCA9IFwidG9Eb1wiICsgdG9Eby5kb05hbWU7XG4gICAgZG9Cb3guY2xhc3NMaXN0LmFkZChcImRvQm94XCIpO1xuICAgIGRvQm94LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiICsgdG9Eby5kb1ByaW9yaXR5KTtcbiAgICBsZXQgZG9OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZG9OYW1lRGl2LnRleHRDb250ZW50ID0gdG9Eby5kb05hbWU7XG4gICAgZG9OYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b0RvTmFtZVwiKTtcbiAgICBkb05hbWVEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93VG9Eb0RldGFpbHModG9EbykpO1xuICAgIGxldCBkb0RhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkb0RhdGVEaXYuY2xhc3NMaXN0LmFkZChcImRvRGF0ZVwiKTtcbiAgICBkb0RhdGVEaXYudGV4dENvbnRlbnQgPSBuZXcgRGF0ZSh0b0RvLmRvRGF0ZSkudG9EYXRlU3RyaW5nKCk7XG4gICAgaWYgKHRvRG8uY29tcGxldGVkKSBkb05hbWVEaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgIGVsc2UgZG9OYW1lRGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgXG4gICAgLy9kZWxldGUgdG9kb1xuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvRG9EZWxldGVcIik7XG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVRvRG8odG9Eby5pZCk7XG4gICAgICAgIHJlZnJlc2hUb0RvcygpO1xuICAgIH0pO1xuXG4gICAgLy9lZGl0IHRvZG9cbiAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvRG9FZGl0XCIpO1xuICAgIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL2Rpc3BsYXkgc3R1ZmZcbiAgICAgICAgZWRpdFRvRG9EZXRhaWxzKHRvRG8pO1xuICAgIH0pO1xuICAgIC8vY29tcGxldGUgdG9kb1xuICAgIGxldCBjb21wbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIGNvbXBsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ29tcGxldGVcIik7XG4gICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSB0b0RvLmNvbXBsZXRlZCA/IFwiVW5kb1wiIDogXCJDb21wbGV0ZVwiO1xuICAgIGNvbXBsZXRlQnV0dG9uLnN0eWxlLm1hcmdpblJpZ2h0ID0gIHRvRG8uY29tcGxldGVkID8gXCIzNXB4XCIgOiBcIjVweFwiO1xuICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b0RvLmNvbXBsZXRlZCA9ICF0b0RvLmNvbXBsZXRlZDtcbiAgICAgICAgaWYgKHRvRG8uY29tcGxldGVkKXtcbiAgICAgICAgICAgIGRvTmFtZURpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiVW5kb1wiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBkb05hbWVEaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hUb0RvcygpO1xuICAgIH0pO1xuXG4gICAgZG9Cb3guYXBwZW5kQ2hpbGQoZG9OYW1lRGl2KTtcbiAgICBkb0JveC5hcHBlbmRDaGlsZChkb0RhdGVEaXYpO1xuICAgIGRvQm94LmFwcGVuZENoaWxkKGNvbXBsZXRlQnV0dG9uKTtcblxuICAgIGRvQm94LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICAgIGRvQm94LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgZG9Db250YWluZXIuYXBwZW5kQ2hpbGQoZG9Cb3gpO1xufVxuXG5cbmFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbGV0IG5ld1RvRG9Cb3ggPSBtYWtlUG9wVXAoXCJOZXcgVG9Eby4uLlwiKTtcbiAgICBsZXQgZm9ybUJveCA9IG5ld1RvRG9Cb3gucG9wVXBjb250ZW50O1xuICAgIGZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiMWZyIDFmciAxZnIgMWZyXCJcbiAgICBmb3JtQm94LnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIjE1cHggMjBweCAxNXB4IDFmciA0MHB4XCI7XG4gICAgZm9ybUJveC5zdHlsZS5mb250U2l6ZSA9IFwiMS4xcmVtXCI7XG4gICAgZm9ybUJveC5zdHlsZS5nYXAgPSBcIjVweFwiO1xuXG4gICAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1RpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUucmVzaXplID0gXCJub25lXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5ncmlkUm93ID0gXCI0LzVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzVcIlxuICAgIGxldCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGRUb0RvQnV0dG9uLnN0eWxlLmdyaWRSb3cgPSBcIjUvNlwiO1xuICAgIGFkZFRvRG9CdXR0b24uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS8yXCI7XG4gICAgYWRkVG9Eb0J1dHRvbi5zdHlsZS5qdXN0aWZ5U2VsZiA9IFwic3RhcnRcIjtcbiAgICBhZGRUb0RvQnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFRvRG9cIjtcbiAgICBhZGRUb0RvQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxLjNyZW1cIjtcblxuICAgIGxldCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgcE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHBPcHRpb24udmFsdWUgPSBcIlwiK2k7XG4gICAgICAgIHBPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICB9XG4gICAgbGV0IGRhdGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZVNlbGVjdC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZVNlbGVjdC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBsZXQgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93UC52YWx1ZSA9IFwiMVwiO1xuICAgIGxvd1AudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIGxldCBtZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBtZWRQLnZhbHVlID0gXCIyXCI7XG4gICAgbWVkUC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgbGV0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoUC52YWx1ZSA9IFwiM1wiO1xuICAgIGhpZ2hQLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobG93UCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobWVkUCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaFApO1xuXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgIGxldCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBsZXQgcHJpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb0xhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgIGxldCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcmlvTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkYXRlU2VsZWN0KTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChhZGRUb0RvQnV0dG9uKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3VG9Eb0JveC5wb3BCb3gpO1xuXG4gICAgYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBpZiAobmV3VGl0bGUudmFsdWUgPT0gbnVsbCB8fCBuZXdUaXRsZS52YWx1ZSA9PSBcIlwiKSByZXR1cm47XG4gICAgICAgIGxldCBtMSA9IHRvZG9GYWN0b3J5KG5ld1RpdGxlLnZhbHVlLCBwcm9qZWN0TGlzdFtwcm9qZWN0U2VsZWN0LnZhbHVlXSwgZGF0ZVNlbGVjdC52YWx1ZUFzRGF0ZSwgbmV3RGVzY3JpcHRpb24udmFsdWUsIGZhbHNlLCBwcmlvcml0eVNlbGVjdC52YWx1ZSk7XG4gICAgICAgIGFkZFRvRG8obTEpO1xuICAgICAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICAgICAgY2xvc2VQdXBVcCgpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3Qpe1xuICAgIGNvbnN0IHByb2plY3RCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Qm94LmlkID0gXCJwcm9qZWN0XCIgKyBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChcInByb2plY3RCb3hcIik7XG4gICAgbGV0IHByb2plY3RGb2N1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3RGb2N1cy50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgcHJvamVjdEZvY3VzLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0TmFtZVwiKTtcblxuICAgIHByb2plY3RGb2N1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIGlmIChhY3RpdmVQcm9qZWN0ID09IHByb2plY3QuaWQpe1xuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IG51bGw7XG4gICAgICAgICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0Qm94XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICBsZXQgb2xkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImFjdGl2ZVByb2plY3RCb3hcIilbMF07XG4gICAgICAgICAgICAgICAgb2xkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVQcm9qZWN0Qm94XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3QuaWQ7XG4gICAgICAgICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVQcm9qZWN0Qm94XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlZnJlc2hUb0RvcygpO1xuICAgIH0pO1xuXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlbGV0ZVwiKTtcbiAgICBcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVByb2plY3QocHJvamVjdC5pZCk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIH0pO1xuICAgIFxuICAgIGxldCBkZXNjcmlwdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGJ1dHRvbmApO1xuICAgIFxuICAgIGRlc2NyaXB0aW9uQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25CdXR0b24udGV4dENvbnRlbnQgPSBcIj9cIjtcbiAgICBkZXNjcmlwdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQm94ID0gbWFrZVBvcFVwKHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25Db250ZW50ID0gZGVzY3JpcHRpb25Cb3gucG9wVXBjb250ZW50O1xuICAgICAgICBkZXNjcmlwdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJveC5wb3BCb3gpO1xuICAgIH0pO1xuXG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9jdXMpO1xuICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQnV0dG9uKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RCb3gpO1xufVxuXG5cblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgIGxldCBuZXdQcm9qZWN0Qm94ID0gbWFrZVBvcFVwKFwiTmV3IFByb2plY3QuLi5cIik7XG4gICAgbGV0IGZvcm1Cb3ggPSBuZXdQcm9qZWN0Qm94LnBvcFVwY29udGVudDtcblxuICAgIGZvcm1Cb3guc3R5bGUuZm9udFNpemUgPSBcIjEuM3JlbVwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZ2FwID0gXCIxMHB4XCI7XG4gICAgZm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgZm9ybUJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiBcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlTGFiZWwuc3R5bGUuZm9udFNpemUgPSBcIjEuMXJlbVwiO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgVGl0bGU6IFwiO1xuICAgIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbGV0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgdGl0bGVDb250YWluZXIuc3R5bGUuZ2FwID0gXCI1cHhcIjtcbiAgICBsZXQgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY0xhYmVsLnN0eWxlLmZvbnRTaXplID0gXCIxLjFyZW1cIjtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgRGVzY3JpcHRpb246XCI7XG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLnJlc2l6ZSA9IFwibm9uZVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gXCI3NSVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5tYXJnaW5Ub3AgPSBcIi01cHhcIlxuICAgIGxldCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIGFkZFByb2plY3RCdXR0b24uc3R5bGUuYWxpZ25TZWxmID0gXCJzdGFydFwiO1xuICAgIGFkZFByb2plY3RCdXR0b24uaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuXG5cbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZCh0aXRsZUNvbnRhaW5lcik7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ1dHRvbik7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Qm94LnBvcEJveCk7XG4gICAgXG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGlmIChuZXdUaXRsZS52YWx1ZSA9PSBudWxsIHx8IG5ld1RpdGxlLnZhbHVlID09IFwiXCIpIHJldHVybjtcbiAgICAgICAgbGV0IG0xID0gcHJvamVjdEZhY3RvcnkobmV3VGl0bGUudmFsdWUsIG5ld0Rlc2NyaXB0aW9uLnZhbHVlKTtcbiAgICAgICAgYWRkUHJvamVjdChtMSk7XG4gICAgICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgICAgICBjbG9zZVB1cFVwKCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gZWRpdFRvRG9EZXRhaWxzKHRvRG8pe1xuICAgIGxldCBlZGl0VG9Eb0JveCA9IG1ha2VQb3BVcChcIkVkaXQ6IFwiICsgdG9Eby5kb05hbWUpO1xuICAgIGxldCBmb3JtQm94ID0gZWRpdFRvRG9Cb3gucG9wVXBjb250ZW50O1xuICAgIGZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiMWZyIDFmciAxZnIgMWZyXCJcbiAgICBmb3JtQm94LnN0eWxlLmdyaWRUZW1wbGF0ZVJvd3MgPSBcIjE1cHggMjBweCAxNXB4IDFmciA0MHB4XCI7XG4gICAgZm9ybUJveC5zdHlsZS5mb250U2l6ZSA9IFwiMS4xcmVtXCI7XG4gICAgZm9ybUJveC5zdHlsZS5nYXAgPSBcIjVweFwiO1xuXG4gICAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1RpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBuZXdUaXRsZS52YWx1ZSA9IHRvRG8uZG9OYW1lO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi52YWx1ZSA9IHRvRG8uZG9EZXNjcmlwO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLnJlc2l6ZSA9IFwibm9uZVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZ3JpZFJvdyA9IFwiNC81XCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS81XCJcbiAgICBsZXQgZWRpdFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRUb0RvQnV0dG9uLnN0eWxlLmdyaWRSb3cgPSBcIjUvNlwiO1xuICAgIGVkaXRUb0RvQnV0dG9uLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvMlwiO1xuICAgIGVkaXRUb0RvQnV0dG9uLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJzdGFydFwiO1xuICAgIGVkaXRUb0RvQnV0dG9uLmlubmVySFRNTCA9IFwiU2F2ZSBDaGFuZ2VzXCI7XG4gICAgZWRpdFRvRG9CdXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjEuM3JlbVwiO1xuXG4gICAgbGV0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBwT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcE9wdGlvbi52YWx1ZSA9IFwiXCIraTtcbiAgICAgICAgcE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0W2ldLnByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHBPcHRpb24pO1xuICAgIH1cbiAgICBsZXQgZGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlU2VsZWN0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlU2VsZWN0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUodG9Eby5kb0RhdGUpO1xuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGV0IG9sZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9sZFAudmFsdWUgPSB0b0RvLmRvUHJpb3JpdHk7XG4gICAgb2xkUC50ZXh0Q29udGVudCA9IFwiICAgICBcIjtcbiAgICBsZXQgbG93UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbG93UC52YWx1ZSA9IFwiMVwiO1xuICAgIGxvd1AudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xuICAgIGxldCBtZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBtZWRQLnZhbHVlID0gXCIyXCI7XG4gICAgbWVkUC50ZXh0Q29udGVudCA9IFwiTWVkaXVtXCI7XG4gICAgbGV0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoUC52YWx1ZSA9IFwiM1wiO1xuICAgIGhpZ2hQLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG4gICAgXG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQob2xkUCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobG93UCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobWVkUCk7XG4gICAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaFApO1xuXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgbGV0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByb2plY3RMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdFwiO1xuICAgIGxldCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBsZXQgcHJpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJpb0xhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eVwiO1xuICAgIGxldCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uXCI7XG5cbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvamVjdExhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcmlvTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkYXRlU2VsZWN0KTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByaW9yaXR5U2VsZWN0KTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChlZGl0VG9Eb0J1dHRvbik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVkaXRUb0RvQm94LnBvcEJveCk7XG5cbiAgICBlZGl0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBpZiAobmV3VGl0bGUudmFsdWUgPT0gbnVsbCB8fCBuZXdUaXRsZS52YWx1ZSA9PSBcIlwiKSByZXR1cm47XG4gICAgICAgIHRvRG8uZG9OYW1lID0gbmV3VGl0bGUudmFsdWU7XG4gICAgICAgIHRvRG8uZG9Qcm9qZWN0ID0gcHJvamVjdExpc3RbcHJvamVjdFNlbGVjdC52YWx1ZV07XG4gICAgICAgIHRvRG8uZG9EYXRlID0gZGF0ZVNlbGVjdC52YWx1ZUFzRGF0ZTtcbiAgICAgICAgdG9Eby5kb0Rlc2NyaXAgPSBuZXdEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICAgICAgdG9Eby5kb1ByaW9yaXR5ID0gcHJpb3JpdHlTZWxlY3QudmFsdWU7XG4gICAgICAgIHJlZnJlc2hUb0RvcygpO1xuICAgICAgICBjbG9zZVB1cFVwKCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNob3dUb0RvRGV0YWlscyh0b0RvKXtcbiAgICBsZXQgZGV0YWlsc0JveCA9IG1ha2VQb3BVcCh0b0RvLmRvTmFtZSk7XG4gICAgbGV0IGluZm9Cb3ggPSBkZXRhaWxzQm94LnBvcFVwY29udGVudDtcbiAgICBpbmZvQm94LnN0eWxlLmZvbnRTaXplID0gXCIxLjJyZW1cIjtcbiAgICBpbmZvQm94LnN0eWxlLmxpbmVIZWlnaHQgPSBcIjEuMnJlbVwiO1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHRvRG8uZG9Qcm9qZWN0LnByb2plY3ROYW1lID09ICdOT05FJyA/IFwiXCIgOiBcIlByb2plY3Q6IFwiICsgdG9Eby5kb1Byb2plY3QucHJvamVjdE5hbWU7XG4gICAgbGV0IHNob3dEYXRlID1uZXcgRGF0ZSh0b0RvLmRvRGF0ZSk7XG4gICAgaW5mb0JveC5pbm5lckhUTUwgPSBgPHA+JHtwcm9qZWN0TmFtZX08L3A+XG4gICAgPHA+UHJpb3JpdHk6ICR7dG9Eby5kb1ByaW9yaXR5fTwvcD5cbiAgICA8cD5EdWUgRGF0ZTogJHtzaG93RGF0ZS50b0RhdGVTdHJpbmcoKX08L3A+XG4gICAgPGJyPlxuICAgIDxwPkRlc2NyaXB0aW9uOiAke3RvRG8uZG9EZXNjcmlwfTwvcD5gO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxzQm94LnBvcEJveCk7XG59XG5cblxuXG5sb2FkU3RvcmFnZSgpO1xucmVmcmVzaFByb2plY3RzKCk7XG5yZWZyZXNoVG9Eb3MoKTtcblxuaWYgKHByb2plY3RMaXN0Lmxlbmd0aCA9PSAxICYmIHRvRG9MaXN0Lmxlbmd0aCA9PSAwKSBwb3B1bGF0ZSgpO1xuXG5mdW5jdGlvbiBwb3B1bGF0ZSgpe1xuICAgIGxldCBwcm8xID0gcHJvamVjdEZhY3RvcnkoXCJQcm9ncmFtbWluZ1wiLCBcInRyeWluZyB0byBsZWFybiB0byBwcm9ncmFtXCIpO1xuICAgIGxldCBwcm8yID0gcHJvamVjdEZhY3RvcnkoXCJXZWIgRGVzaWduXCIsIFwiY2FudCByZWFsbHkgY2FsbCB0aGlzIHByb2dyYW1taW5nXCIpO1xuICAgIGxldCBwcm8zID0gcHJvamVjdEZhY3RvcnkoXCJBbGdvcml0aG1zXCIsIFwib3JkbyBub3RhdGlvbiBhbmQgc3R1ZmZcIik7XG4gICAgYWRkUHJvamVjdChwcm8xKTtcbiAgICBhZGRQcm9qZWN0KHBybzIpO1xuICAgIGFkZFByb2plY3QocHJvMyk7XG4gICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgbGV0IHAgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBrID0gbmV3IERhdGUoKTtcbiAgICBrLnNldERhdGUocC5nZXREYXRlKCkgKzQpXG5cbiAgICBsZXQgbSA9IHRvZG9GYWN0b3J5KFwidGVzdGluZzFcIiwgcHJvMSwgcCwgXCJkbyBzdHVmZlwiLCBmYWxzZSwgMyk7XG4gICAgbGV0IHMgPSB0b2RvRmFjdG9yeShcInRlc3RpbmcyXCIsIHBybzIsIGssIFwiZG8gc3R1ZmZhc2ZkZHNkc2ZzZCAgc2RmZ3NkZmcgc2RnZiBncyBkZ2YgZmdkc2ZnZHNncyAgZyBnZyBkZnMgZ2Rmc2cgZmRzZyBmc2QgZ2ZkIGcgZ2ZkZmcgc2RnIGRmcyBmZ2RzIGdmZHNnIGZzZCBnZmRzZyBmZHNnIGZkcyBnZmRzZyBzZyBmZHNnIGZkc2cgZiBnZGZzIGdmZHMgZ2RmcyBnZHNmIGdmZHNnZGZzZmFkc2ZhXCIsIGZhbHNlLCAxKTtcbiAgICBsZXQgbyA9IHRvZG9GYWN0b3J5KFwidGVzdGluZzNcIiwgcHJvMywgcCwgXCJkbyBzdHVmZlwiLCBmYWxzZSwgMik7XG5cbiAgICBhZGRUb0RvKG0pO1xuICAgIGFkZFRvRG8ocyk7XG4gICAgYWRkVG9EbyhvKTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9