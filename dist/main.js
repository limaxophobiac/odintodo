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


function makePopUp(title, blockIndex = 100) {
  (0,_screenblock_js__WEBPACK_IMPORTED_MODULE_0__.blockScreen)(blockIndex);
  const popBox = document.createElement('div');
  popBox.setAttribute('id', 'popUpBox');
  popBox.style.display = 'flex';
  popBox.style.flexDirection = 'column';
  popBox.style.width = '50%';
  popBox.style.height = '60%';
  popBox.style.zIndex = `${blockIndex + 1}`;

  popBox.style.top = '50%';
  popBox.style.left = '50%';
  popBox.style.marginTop = '-30vh';
  popBox.style.marginLeft = '-25vw';
  popBox.style.position = 'fixed';
  popBox.style.borderRadius = '6px';
  popBox.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.2), 5px -1px 5px rgba(0, 0, 0, 0.2)';
  popBox.style.boxSizing = 'border-box';
  const popUpHeader = makeBoxHeader(title);
  const popUpcontent = document.createElement('div');
  popUpcontent.style.height = '90%';
  popUpcontent.style.padding = '8px 15px 5px 15px';
  popBox.appendChild(popUpHeader);
  popBox.appendChild(popUpcontent);
  return { popBox, popUpHeader, popUpcontent };
}

function makeBoxHeader(headTitle) {
  const boxHeader = document.createElement('div');

  boxHeader.setAttribute('id', 'popUpHeader');
  boxHeader.style.height = '10%';
  boxHeader.style.display = 'flex';
  boxHeader.style.justifyContent = 'space-between';
  boxHeader.style.padding = '0px 12px 0px 12px';
  boxHeader.style.borderRadius = '6px 6px 0px 0px';
  boxHeader.style.fontWeight = 'bold';
  boxHeader.style.lineHeight = 'max(6vh, 40px)';
  boxHeader.style.fontSize = 'max(4vh, 30px)';

  const headerText = document.createElement('div');
  headerText.textContent = headTitle;
  headerText.marginRight = 'auto';

  const closeButton = document.createElement('button');
  closeButton.setAttribute('id', 'popUpClose');
  closeButton.textContent = 'X';
  closeButton.addEventListener('click', () => closePupUp());

  boxHeader.appendChild(headerText);
  boxHeader.appendChild(closeButton);
  return boxHeader;
}

function closePupUp() {
  const popUpBox = document.getElementById('popUpBox');
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
/* harmony export */   "idSeed": () => (/* binding */ idSeed),
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
    let idStorage = JSON.parse(localStorage.getItem('idSeed'));
    if (projectStore != null) projectList = projectStore;
    if (todoStore != null) toDoList = todoStore;
    if (idStorage != null) idSeed = idStorage;
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
const defaultProject = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)('NONE', 'default project');
(0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(defaultProject);

const doContainer = document.getElementById('taskcontainer');
const projectContainer = document.getElementById('projectList');
const todaySelect = document.getElementById('todaySelect');
const weekSelect = document.getElementById('weekSelect');

const addToDoButton = document.getElementById('addToDo');
const addProjectButton = document.getElementById('projectadder');

function refreshToDos() {
  const today = new Date();
  const week = new Date();
  week.setDate(today.getDate() + 7);
  _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.sort((a, b) => {
    const a2 = new Date(a.doDate);
    const b2 = new Date(b.doDate);
    if (a2 > b2) return 1;
    if (b2 > a2) return -1;
    if (a.doName > b.doName) return 1;
    return -1;
  });
  document.querySelectorAll('.doBox').forEach((elem) => elem.remove());
  function checkDate(toDo) {
    const toDoDate = new Date(toDo.doDate).getDate();
    if (!todaySelect.checked && !weekSelect.checked) displayToDo(toDo);
    else if (todaySelect.checked && toDoDate == today.getDate()) { displayToDo(toDo); } else if (weekSelect.checked && toDoDate <= week.getDate()) { displayToDo(toDo); }
  }
  if (activeProject == null) _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.forEach((toDo) => checkDate(toDo));
  else {
    _todo__WEBPACK_IMPORTED_MODULE_0__.toDoList.filter((toDo) => toDo.doProject.id == activeProject)
      .forEach((toDo) => checkDate(toDo));
  }
  localStorage.setItem('toDoList', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.toDoList));
  localStorage.setItem('idSeed', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.idSeed));
}

todaySelect.addEventListener('change', () => {
  if (todaySelect.checked) weekSelect.checked = false;
  refreshToDos();
});
weekSelect.addEventListener('change', () => {
  if (weekSelect.checked) todaySelect.checked = false;
  refreshToDos();
});

function refreshProjects() {
  document.querySelectorAll('.projectBox').forEach((elem) => elem.remove());
  for (let i = 1; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {
    displayProject(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);
  }
  localStorage.setItem('projectList', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList));
  localStorage.setItem('idSeed', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.idSeed));
}

function displayToDo(toDo) {
  const doBox = document.createElement('div');
  doBox.id = `toDo${toDo.doName}`;
  doBox.classList.add('doBox');
  doBox.classList.add(`priority${toDo.doPriority}`);
  const doNameDiv = document.createElement('button');
  doNameDiv.textContent = toDo.doName;
  doNameDiv.classList.add('toDoName');
  doNameDiv.addEventListener('click', () => showToDoDetails(toDo));
  const doDateDiv = document.createElement('div');
  doDateDiv.classList.add('doDate');
  doDateDiv.textContent = new Date(toDo.doDate).toDateString();
  if (toDo.completed) doNameDiv.style.textDecoration = 'line-through';
  else doNameDiv.style.textDecoration = 'none';

  // delete todo
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('toDoDelete');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.deleteToDo)(toDo.id);
    refreshToDos();
  });

  // edit todo
  const editButton = document.createElement('button');
  editButton.classList.add('toDoEdit');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => {
    // display stuff
    editToDoDetails(toDo);
  });
  // complete todo
  const completeButton = document.createElement('button');
  completeButton.classList.add('toDoComplete');
  completeButton.textContent = toDo.completed ? 'Undo' : 'Complete';
  completeButton.style.marginRight = toDo.completed ? '35px' : '5px';
  completeButton.addEventListener('click', () => {
    toDo.completed = !toDo.completed;
    if (toDo.completed) {
      doNameDiv.style.textDecoration = 'line-through';
      completeButton.textContent = 'Undo';
    } else {
      doNameDiv.style.textDecoration = 'none';
      completeButton.textContent = 'Complete';
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
  const newToDoBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)('New ToDo...');
  const formBox = newToDoBox.popUpcontent;
  formBox.style.display = 'grid';
  formBox.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  formBox.style.gridTemplateRows = '15px 20px 15px 1fr 40px';
  formBox.style.fontSize = '1.1rem';
  formBox.style.gap = '5px';

  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  const newDescription = document.createElement('textarea');
  newDescription.style.resize = 'none';
  newDescription.style.width = '100%';
  newDescription.style.height = '100%';
  newDescription.style.gridRow = '4/5';
  newDescription.style.gridColumn = '1/5';
  const addToDoButton = document.createElement('button');
  addToDoButton.style.gridRow = '5/6';
  addToDoButton.style.gridColumn = '1/2';
  addToDoButton.style.justifySelf = 'start';
  addToDoButton.innerHTML = 'Add ToDo';
  addToDoButton.style.fontSize = '1.3rem';

  const projectSelect = document.createElement('select');

  for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {
    const pOption = document.createElement('option');
    pOption.value = `${i}`;
    pOption.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i].projectName;
    projectSelect.appendChild(pOption);
  }
  const dateSelect = document.createElement('input');
  dateSelect.type = 'date';
  dateSelect.valueAsDate = new Date();
  const prioritySelect = document.createElement('select');
  const lowP = document.createElement('option');
  lowP.value = '1';
  lowP.textContent = 'Low';
  const medP = document.createElement('option');
  medP.value = '2';
  medP.textContent = 'Medium';
  const highP = document.createElement('option');
  highP.value = '3';
  highP.textContent = 'High';

  prioritySelect.appendChild(lowP);
  prioritySelect.appendChild(medP);
  prioritySelect.appendChild(highP);

  const titleLabel = document.createElement('p');
  titleLabel.textContent = 'Name';
  const projectLabel = document.createElement('p');
  projectLabel.textContent = 'Project';
  const dateLabel = document.createElement('p');
  dateLabel.textContent = 'Date';
  const prioLabel = document.createElement('p');
  prioLabel.textContent = 'Priority';
  const descLabel = document.createElement('p');
  descLabel.textContent = 'Description';

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

  addToDoButton.addEventListener('click', () => {
    if (newTitle.value == null || newTitle.value == '') return;
    const m1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(
      newTitle.value,
      _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[projectSelect.value],
      dateSelect.valueAsDate,
      newDescription.value,
      false,
      prioritySelect.value,
    );
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(m1);
    refreshToDos();
    (0,_popup__WEBPACK_IMPORTED_MODULE_1__.closePupUp)();
  });
});

function displayProject(project) {
  const projectBox = document.createElement('div');
  projectBox.id = `project${project.projectName}`;
  projectBox.classList.add('projectBox');
  const projectFocus = document.createElement('button');
  projectFocus.textContent = project.projectName;
  projectFocus.classList.add('projectName');

  projectFocus.addEventListener('click', () => {
    if (activeProject == project.id) {
      activeProject = null;
      projectBox.classList.remove('activeProjectBox');
    } else {
      if (activeProject != null) {
        const old = document.getElementsByClassName('activeProjectBox')[0];
        old.classList.remove('activeProjectBox');
      }
      activeProject = project.id;
      projectBox.classList.add('activeProjectBox');
    }
    refreshToDos();
  });

  const deleteButton = document.createElement('button');
  deleteButton.classList.add('projectDelete');

  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(project.id);
    refreshProjects();
  });

  const descriptionButton = document.createElement('button');

  descriptionButton.classList.add('projectDescription');
  descriptionButton.textContent = '?';
  descriptionButton.addEventListener('click', () => {
    const descriptionBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)(project.projectName);
    const descriptionContent = descriptionBox.popUpcontent;
    descriptionContent.textContent = project.projectDescription;
    document.body.appendChild(descriptionBox.popBox);
  });

  projectBox.appendChild(projectFocus);
  projectBox.appendChild(deleteButton);
  projectBox.appendChild(descriptionButton);
  projectContainer.appendChild(projectBox);
}

addProjectButton.addEventListener('click', () => {
  const newProjectBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)('New Project...');
  const formBox = newProjectBox.popUpcontent;

  formBox.style.fontSize = '1.3rem';
  formBox.style.gap = '10px';
  formBox.style.display = 'flex';
  formBox.style.flexDirection = 'column';

  const titleLabel = document.createElement('p');
  titleLabel.style.fontSize = '1.1rem';
  titleLabel.textContent = 'Project Title: ';
  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  const titleContainer = document.createElement('div');
  titleContainer.style.display = 'flex';
  titleContainer.style.gap = '5px';
  const descLabel = document.createElement('p');
  descLabel.style.fontSize = '1.1rem';
  descLabel.textContent = 'Project Description:';
  const newDescription = document.createElement('textarea');
  newDescription.style.resize = 'none';
  newDescription.style.width = '100%';
  newDescription.style.height = '75%';
  newDescription.style.marginTop = '-5px';
  const addProjectButton = document.createElement('button');

  addProjectButton.style.alignSelf = 'start';
  addProjectButton.innerHTML = 'Add Project';

  titleContainer.appendChild(titleLabel);
  titleContainer.appendChild(newTitle);
  formBox.appendChild(titleContainer);
  formBox.appendChild(descLabel);
  formBox.appendChild(newDescription);
  formBox.appendChild(addProjectButton);
  document.body.appendChild(newProjectBox.popBox);

  addProjectButton.addEventListener('click', () => {
    if (newTitle.value == null || newTitle.value == '') return;
    const m1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(newTitle.value, newDescription.value);
    (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(m1);
    refreshProjects();
    (0,_popup__WEBPACK_IMPORTED_MODULE_1__.closePupUp)();
  });
});

function editToDoDetails(toDo) {
  const editToDoBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)(`Edit: ${toDo.doName}`);
  const formBox = editToDoBox.popUpcontent;
  formBox.style.display = 'grid';
  formBox.style.gridTemplateColumns = '1fr 1fr 1fr 1fr';
  formBox.style.gridTemplateRows = '15px 20px 15px 1fr 40px';
  formBox.style.fontSize = '1.1rem';
  formBox.style.gap = '5px';

  const newTitle = document.createElement('input');
  newTitle.type = 'text';
  newTitle.value = toDo.doName;
  const newDescription = document.createElement('textarea');
  newDescription.value = toDo.doDescrip;
  newDescription.style.resize = 'none';
  newDescription.style.width = '100%';
  newDescription.style.height = '100%';
  newDescription.style.gridRow = '4/5';
  newDescription.style.gridColumn = '1/5';
  const editToDoButton = document.createElement('button');
  editToDoButton.style.gridRow = '5/6';
  editToDoButton.style.gridColumn = '1/2';
  editToDoButton.style.justifySelf = 'start';
  editToDoButton.innerHTML = 'Save Changes';
  editToDoButton.style.fontSize = '1.3rem';

  const projectSelect = document.createElement('select');

  for (let i = 0; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++) {
    const pOption = document.createElement('option');
    pOption.value = `${i}`;
    pOption.textContent = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i].projectName;
    projectSelect.appendChild(pOption);
  }
  const dateSelect = document.createElement('input');
  dateSelect.type = 'date';
  dateSelect.valueAsDate = new Date(toDo.doDate);
  const prioritySelect = document.createElement('select');
  const oldP = document.createElement('option');
  oldP.value = toDo.doPriority;
  oldP.textContent = '     ';
  const lowP = document.createElement('option');
  lowP.value = '1';
  lowP.textContent = 'Low';
  const medP = document.createElement('option');
  medP.value = '2';
  medP.textContent = 'Medium';
  const highP = document.createElement('option');
  highP.value = '3';
  highP.textContent = 'High';

  prioritySelect.appendChild(oldP);
  prioritySelect.appendChild(lowP);
  prioritySelect.appendChild(medP);
  prioritySelect.appendChild(highP);

  const titleLabel = document.createElement('p');
  titleLabel.textContent = 'Name';
  const projectLabel = document.createElement('p');
  projectLabel.textContent = 'Project';
  const dateLabel = document.createElement('p');
  dateLabel.textContent = 'Date';
  const prioLabel = document.createElement('p');
  prioLabel.textContent = 'Priority';
  const descLabel = document.createElement('p');
  descLabel.textContent = 'Description';

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

  editToDoButton.addEventListener('click', () => {
    if (newTitle.value == null || newTitle.value == '') return;
    toDo.doName = newTitle.value;
    toDo.doProject = _todo__WEBPACK_IMPORTED_MODULE_0__.projectList[projectSelect.value];
    toDo.doDate = dateSelect.valueAsDate;
    toDo.doDescrip = newDescription.value;
    toDo.doPriority = prioritySelect.value;
    refreshToDos();
    (0,_popup__WEBPACK_IMPORTED_MODULE_1__.closePupUp)();
  });
}

function showToDoDetails(toDo) {
  const detailsBox = (0,_popup__WEBPACK_IMPORTED_MODULE_1__.makePopUp)(toDo.doName);
  const infoBox = detailsBox.popUpcontent;
  infoBox.style.fontSize = '1.2rem';
  infoBox.style.lineHeight = '1.2rem';
  const projectName = toDo.doProject.projectName == 'NONE'
    ? ''
    : `Project: ${toDo.doProject.projectName}`;
  const showDate = new Date(toDo.doDate);
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

function populate() {
  const pro1 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)('Programming', 'trying to learn to program');
  const pro2 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)(
    'Web Design',
    'cant really call this programming',
  );
  const pro3 = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.projectFactory)('Algorithms', 'ordo notation and stuff');
  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(pro1);
  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(pro2);
  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addProject)(pro3);
  refreshProjects();
  const p = new Date();
  const k = new Date();
  k.setDate(p.getDate() + 4);

  const m = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)('testing1', pro1, p, 'do stuff', false, 3);
  const s = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)(
    'testing2',
    pro2,
    k,
    'do stuffasfddsdsfsd  sdfgsdfg sdgf gs dgf fgdsfgdsgs  g gg dfs gdfsg fdsg fsd gfd g gfdfg sdg dfs fgds gfdsg fsd gfdsg fdsg fds gfdsg sg fdsg fdsg f gdfs gfds gdfs gdsf gfdsgdfsfadsfa',
    false,
    1,
  );
  const o = (0,_todo__WEBPACK_IMPORTED_MODULE_0__.todoFactory)('testing3', pro3, p, 'do stuff', false, 2);

  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(m);
  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(s);
  (0,_todo__WEBPACK_IMPORTED_MODULE_0__.addToDo)(o);
  refreshToDos();
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHFDQUFxQywrQkFBK0Isc0NBQXNDLGdDQUFnQyxnREFBZ0QsNENBQTRDLHlDQUF5Qyw0Q0FBNEMsOEJBQThCLHdDQUF3QyxzQ0FBc0MscUNBQXFDLEdBQUcsT0FBTyxrQkFBa0IsbUJBQW1CLHlDQUF5Qyw2QkFBNkIsR0FBRyxZQUFZLHFCQUFxQixpQ0FBaUMsaUJBQWlCLGVBQWUsa0JBQWtCLG9CQUFvQixxQkFBcUIsR0FBRyxZQUFZLG1DQUFtQyxHQUFHLDRCQUE0QixvQ0FBb0MsR0FBRyxhQUFhLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHdCQUF3QixHQUFHLGtCQUFrQixvQkFBb0Isc0RBQXNELDhCQUE4Qix3QkFBd0IsZUFBZSxHQUFHLHFCQUFxQiw0Q0FBNEMscUNBQXFDLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcscUJBQXFCLGlCQUFpQixHQUFHLHFCQUFxQix3QkFBd0IsbURBQW1ELHlCQUF5QixzQkFBc0IsR0FBRyxXQUFXLDRDQUE0QyxvQkFBb0IsZ0NBQWdDLDBCQUEwQixnQkFBZ0IsNkJBQTZCLG1DQUFtQyxpREFBaUQseUJBQXlCLGlDQUFpQyxpREFBaUQsa0NBQWtDLHdDQUF3QyxLQUFLLGlCQUFpQixpREFBaUQsK0NBQStDLEdBQUcsZUFBZSx1Q0FBdUMsR0FBRyxlQUFlLHVDQUF1QyxHQUFHLHNCQUFzQix5QkFBeUIsS0FBSyxpQkFBaUIscUNBQXFDLDRDQUE0QyxxQ0FBcUMseUJBQXlCLHNCQUFzQiw2QkFBNkIsb0JBQW9CLHlCQUF5QixpQkFBaUIsaURBQWlELG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHFDQUFxQyxHQUFHLHdCQUF3QixxQ0FBcUMsR0FBRyxtQkFBbUIsd0JBQXdCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQixxQ0FBcUMsNkJBQTZCLGdCQUFnQixHQUFHLGtCQUFrQix3QkFBd0Isd0JBQXdCLHNCQUFzQixHQUFHLGlCQUFpQix5QkFBeUIsR0FBRyxzQkFBc0IscURBQXFELHdCQUF3QixHQUFHLHNCQUFzQixxREFBcUQsd0JBQXdCLEdBQUcsd0JBQXdCLGtCQUFrQiwwQkFBMEIsZ0RBQWdELEdBQUcsY0FBYyxnREFBZ0QscUNBQXFDLGlCQUFpQiwyQ0FBMkMsb0NBQW9DLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLDhCQUE4QixrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLCtCQUErQixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsR0FBRyxjQUFjLHNCQUFzQixHQUFHLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixLQUFLLHFDQUFxQyx3QkFBd0IsR0FBRyw2Q0FBNkMscURBQXFELHdCQUF3QixHQUFHLGlCQUFpQiw0RUFBNEUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGtDQUFrQyxxQ0FBcUMsK0JBQStCLHNDQUFzQyxnQ0FBZ0MsZ0RBQWdELDRDQUE0Qyx5Q0FBeUMsNENBQTRDLDhCQUE4Qix3Q0FBd0Msc0NBQXNDLHFDQUFxQyxHQUFHLE9BQU8sa0JBQWtCLG1CQUFtQix5Q0FBeUMsNkJBQTZCLEdBQUcsWUFBWSxxQkFBcUIsaUNBQWlDLGlCQUFpQixlQUFlLGtCQUFrQixvQkFBb0IscUJBQXFCLEdBQUcsWUFBWSxtQ0FBbUMsR0FBRyw0QkFBNEIsb0NBQW9DLEdBQUcsYUFBYSx3QkFBd0IsdUJBQXVCLDBCQUEwQix3QkFBd0IsR0FBRyxrQkFBa0Isb0JBQW9CLHNEQUFzRCw4QkFBOEIsd0JBQXdCLGVBQWUsR0FBRyxxQkFBcUIsNENBQTRDLHFDQUFxQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyxxQkFBcUIsd0JBQXdCLG1EQUFtRCx5QkFBeUIsc0JBQXNCLEdBQUcsV0FBVyw0Q0FBNEMsb0JBQW9CLGdDQUFnQywwQkFBMEIsZ0JBQWdCLDZCQUE2QixtQ0FBbUMsaURBQWlELHlCQUF5QixpQ0FBaUMsaURBQWlELGtDQUFrQyx3Q0FBd0MsS0FBSyxpQkFBaUIsaURBQWlELCtDQUErQyxHQUFHLGVBQWUsdUNBQXVDLEdBQUcsZUFBZSx1Q0FBdUMsR0FBRyxzQkFBc0IseUJBQXlCLEtBQUssaUJBQWlCLHFDQUFxQyw0Q0FBNEMscUNBQXFDLHlCQUF5QixzQkFBc0IsNkJBQTZCLG9CQUFvQix5QkFBeUIsaUJBQWlCLGlEQUFpRCxvQkFBb0IsNkJBQTZCLGdCQUFnQixxQ0FBcUMsR0FBRyx3QkFBd0IscUNBQXFDLEdBQUcsbUJBQW1CLHdCQUF3Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEdBQUcsZ0JBQWdCLHVCQUF1QixvQkFBb0IscUNBQXFDLDZCQUE2QixnQkFBZ0IsR0FBRyxrQkFBa0Isd0JBQXdCLHdCQUF3QixzQkFBc0IsR0FBRyxpQkFBaUIseUJBQXlCLEdBQUcsc0JBQXNCLHFEQUFxRCx3QkFBd0IsR0FBRyxzQkFBc0IscURBQXFELHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0IsMEJBQTBCLGdEQUFnRCxHQUFHLGNBQWMsZ0RBQWdELHFDQUFxQyxpQkFBaUIsMkNBQTJDLG9DQUFvQyxHQUFHLGdCQUFnQixvQ0FBb0MsR0FBRyw4QkFBOEIsa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQiwrQkFBK0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsS0FBSyxxQ0FBcUMsd0JBQXdCLEdBQUcsNkNBQTZDLHFEQUFxRCx3QkFBd0IsR0FBRyw2QkFBNkI7QUFDMzRVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmOEQ7O0FBRXZEO0FBQ1AsRUFBRSw0REFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixlQUFlOztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxFQUFFLDhEQUFhO0FBQ2Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFnRCxzQ0FBc0M7QUFDakg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQWdELHNDQUFzQztBQUNqSCwwQkFBMEIsWUFBWTtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTzs7QUFFQTtBQUNBOztBQUVBO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0EsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDcERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ1dnQjtBQUNnQzs7QUFFM0I7O0FBRXJCO0FBQ0EsdUJBQXVCLHFEQUFjO0FBQ3JDLGlEQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFhO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLHFCQUFxQiw2REFBNkQ7QUFDcko7QUFDQSw2QkFBNkIsbURBQWdCO0FBQzdDO0FBQ0EsSUFBSSxrREFDUztBQUNiO0FBQ0E7QUFDQSxrREFBa0QsMkNBQVE7QUFDMUQsZ0RBQWdELHlDQUFNO0FBQ3REOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxrQkFBa0IsSUFBSSxxREFBa0IsRUFBRTtBQUMxQyxtQkFBbUIsOENBQVc7QUFDOUI7QUFDQSxxREFBcUQsOENBQVc7QUFDaEUsZ0RBQWdELHlDQUFNO0FBQ3REOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQztBQUNBLGlDQUFpQyxnQkFBZ0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFVO0FBQ2Q7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsaURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLElBQUkscURBQWtCLEVBQUU7QUFDMUM7QUFDQSx1QkFBdUIsRUFBRTtBQUN6QiwwQkFBMEIsOENBQVc7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLGtEQUFXO0FBQzFCO0FBQ0EsTUFBTSw4Q0FBVztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBTztBQUNYO0FBQ0EsSUFBSSxrREFBVTtBQUNkLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakI7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpREFBUztBQUNwQztBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsaURBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHFEQUFjO0FBQzdCLElBQUksaURBQVU7QUFDZDtBQUNBLElBQUksa0RBQVU7QUFDZCxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBLHNCQUFzQixpREFBUyxVQUFVLFlBQVk7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixJQUFJLHFEQUFrQixFQUFFO0FBQzFDO0FBQ0EsdUJBQXVCLEVBQUU7QUFDekIsMEJBQTBCLDhDQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4Q0FBVztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVU7QUFDZCxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxxQkFBcUIsaURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQSw0QkFBNEIsWUFBWTtBQUN4QyxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQSxzQkFBc0IsZUFBZTs7QUFFckM7QUFDQTs7QUFFQSxrREFBVztBQUNYO0FBQ0E7O0FBRUEsSUFBSSxxREFBa0IsU0FBUyxrREFBZTs7QUFFOUM7QUFDQSxlQUFlLHFEQUFjO0FBQzdCLGVBQWUscURBQWM7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsZUFBZSxxREFBYztBQUM3QixFQUFFLGlEQUFVO0FBQ1osRUFBRSxpREFBVTtBQUNaLEVBQUUsaURBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLGtEQUFXO0FBQ3ZCLFlBQVksa0RBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGtEQUFXOztBQUV2QixFQUFFLDhDQUFPO0FBQ1QsRUFBRSw4Q0FBTztBQUNULEVBQUUsOENBQU87QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2NyZWVuYmxvY2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG46cm9vdHtcXG4gICAgLS1oZWFkZXJDb2xvcjogcmdiKDg3LCAxMiwgODcpO1xcbiAgICAtLWhlYWRlclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tc2lkZWJhckNvbG9yOiByZ2IoODgsIDEwLCA4OCk7XFxuICAgIC0tc2lkZWJhclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tY29udGFpbmVyQmFja2dyb3VuZDogcmdiKDE0MSwgMTE0LCAxNTYpO1xcbiAgICAtLXBvcHVwQmFja2dyb3VuZDogcmdiKDIwNiwgMTg3LCAyMTYpO1xcblxcbiAgICAtLWRvQm94Q29sb3I6IHJnYigyMjAsIDIwMCwgMjIwKTtcXG4gICAgLS1kb0JveEhvdmVyQ29sb3I6IHJnYigyNTUsIDIzNSwgMjU1KTtcXG4gICAgLS1kb0JveFRleHRDb2xvcjogYmxhY2s7XFxuXFxuICAgIC0taGlnaFByaW9yaXR5OiByZ2IoMjU1LCAwLCA1MCk7XFxuICAgIC0tbWlkUHJpb3JpdHk6IHJnYigyNTUsIDIwNSwgMCk7XFxuICAgIC0tbG93UHJpb3JpdHk6IHJnYigwLCAyMzUsIDUwKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi5kb0RhdGV7XFxuICAgIGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcik7XFxufVxcblxcbiNhZGRUb0RvLCAjcHJvamVjdGFkZGVye1xcbiAgICBjb2xvcjp2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI2FkZFRvRG97XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvcGNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBtaW5tYXgoNTAwcHgsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiAwcHg7XFxufVxcblxcblxcbiNsb2dvQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4jdGFza2NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lckJhY2tncm91bmQpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG59XFxuXFxuLmRvQm94e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveENvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHZhcigtLWhpZ2hQcmlvcml0eSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiA1cHggMTVweCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxufVxcblxcbi5kb0JveDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveEhvdmVyQ29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHkye1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1pZFByaW9yaXR5KTtcXG59XFxuXFxuLnByaW9yaXR5MXtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi5kb0JveCAudG9Eb05hbWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxufVxcblxcbiNsZWZ0U2lkZWJhcntcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsZWZ0U2lkZWJhciBidXR0b257XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3Byb2plY3RIZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEJveHtcXG4gICAgcGFkZGluZzogMHB4IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0YWRkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdE5hbWV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3RCb3g6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdEJveHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5wcm9qZWN0Qm94OjpiZWZvcmV7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3BvcFVwQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tcG9wdXBCYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKVxcbn1cXG5cXG4jcG9wVXBIZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHRDb2xvcik7XFxufVxcblxcbiNwb3BVcENsb3Nle1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXG59XFxuXFxuI3RvZGF5U2VsZWN0LCAjd2Vla1NlbGVjdHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RpbWVzZWxlY3RvcntcXG4gICAgbWFyZ2luOiA1cHggMHB4IDE1cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxubGFiZWx7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWx7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6QyxxQ0FBcUM7O0lBRXJDLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsdUJBQXVCOztJQUV2QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7OztBQUdBO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtHQUNHLFdBQVc7QUFDZDs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOzs7O0FBSUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG46cm9vdHtcXG4gICAgLS1oZWFkZXJDb2xvcjogcmdiKDg3LCAxMiwgODcpO1xcbiAgICAtLWhlYWRlclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tc2lkZWJhckNvbG9yOiByZ2IoODgsIDEwLCA4OCk7XFxuICAgIC0tc2lkZWJhclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tY29udGFpbmVyQmFja2dyb3VuZDogcmdiKDE0MSwgMTE0LCAxNTYpO1xcbiAgICAtLXBvcHVwQmFja2dyb3VuZDogcmdiKDIwNiwgMTg3LCAyMTYpO1xcblxcbiAgICAtLWRvQm94Q29sb3I6IHJnYigyMjAsIDIwMCwgMjIwKTtcXG4gICAgLS1kb0JveEhvdmVyQ29sb3I6IHJnYigyNTUsIDIzNSwgMjU1KTtcXG4gICAgLS1kb0JveFRleHRDb2xvcjogYmxhY2s7XFxuXFxuICAgIC0taGlnaFByaW9yaXR5OiByZ2IoMjU1LCAwLCA1MCk7XFxuICAgIC0tbWlkUHJpb3JpdHk6IHJnYigyNTUsIDIwNSwgMCk7XFxuICAgIC0tbG93UHJpb3JpdHk6IHJnYigwLCAyMzUsIDUwKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi5kb0RhdGV7XFxuICAgIGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcik7XFxufVxcblxcbiNhZGRUb0RvLCAjcHJvamVjdGFkZGVye1xcbiAgICBjb2xvcjp2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI2FkZFRvRG97XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvcGNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBtaW5tYXgoNTAwcHgsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiAwcHg7XFxufVxcblxcblxcbiNsb2dvQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4jdGFza2NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lckJhY2tncm91bmQpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG59XFxuXFxuLmRvQm94e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveENvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHZhcigtLWhpZ2hQcmlvcml0eSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiA1cHggMTVweCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxufVxcblxcbi5kb0JveDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveEhvdmVyQ29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHkye1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1pZFByaW9yaXR5KTtcXG59XFxuXFxuLnByaW9yaXR5MXtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi5kb0JveCAudG9Eb05hbWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxufVxcblxcbiNsZWZ0U2lkZWJhcntcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsZWZ0U2lkZWJhciBidXR0b257XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3Byb2plY3RIZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEJveHtcXG4gICAgcGFkZGluZzogMHB4IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0YWRkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdE5hbWV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3RCb3g6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdEJveHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5wcm9qZWN0Qm94OjpiZWZvcmV7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3BvcFVwQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tcG9wdXBCYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKVxcbn1cXG5cXG4jcG9wVXBIZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHRDb2xvcik7XFxufVxcblxcbiNwb3BVcENsb3Nle1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXG59XFxuXFxuI3RvZGF5U2VsZWN0LCAjd2Vla1NlbGVjdHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RpbWVzZWxlY3RvcntcXG4gICAgbWFyZ2luOiA1cHggMHB4IDE1cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxubGFiZWx7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWx7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgYmxvY2tTY3JlZW4sIHVuQmxvY2tTY3JlZW4gfSBmcm9tICcuL3NjcmVlbmJsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQb3BVcCh0aXRsZSwgYmxvY2tJbmRleCA9IDEwMCkge1xuICBibG9ja1NjcmVlbihibG9ja0luZGV4KTtcbiAgY29uc3QgcG9wQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHBvcEJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3BvcFVwQm94Jyk7XG4gIHBvcEJveC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICBwb3BCb3guc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICBwb3BCb3guc3R5bGUud2lkdGggPSAnNTAlJztcbiAgcG9wQm94LnN0eWxlLmhlaWdodCA9ICc2MCUnO1xuICBwb3BCb3guc3R5bGUuekluZGV4ID0gYCR7YmxvY2tJbmRleCArIDF9YDtcblxuICBwb3BCb3guc3R5bGUudG9wID0gJzUwJSc7XG4gIHBvcEJveC5zdHlsZS5sZWZ0ID0gJzUwJSc7XG4gIHBvcEJveC5zdHlsZS5tYXJnaW5Ub3AgPSAnLTMwdmgnO1xuICBwb3BCb3guc3R5bGUubWFyZ2luTGVmdCA9ICctMjV2dyc7XG4gIHBvcEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gIHBvcEJveC5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNnB4JztcbiAgcG9wQm94LnN0eWxlLmJveFNoYWRvdyA9ICc1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDVweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiknO1xuICBwb3BCb3guc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICBjb25zdCBwb3BVcEhlYWRlciA9IG1ha2VCb3hIZWFkZXIodGl0bGUpO1xuICBjb25zdCBwb3BVcGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcG9wVXBjb250ZW50LnN0eWxlLmhlaWdodCA9ICc5MCUnO1xuICBwb3BVcGNvbnRlbnQuc3R5bGUucGFkZGluZyA9ICc4cHggMTVweCA1cHggMTVweCc7XG4gIHBvcEJveC5hcHBlbmRDaGlsZChwb3BVcEhlYWRlcik7XG4gIHBvcEJveC5hcHBlbmRDaGlsZChwb3BVcGNvbnRlbnQpO1xuICByZXR1cm4geyBwb3BCb3gsIHBvcFVwSGVhZGVyLCBwb3BVcGNvbnRlbnQgfTtcbn1cblxuZnVuY3Rpb24gbWFrZUJveEhlYWRlcihoZWFkVGl0bGUpIHtcbiAgY29uc3QgYm94SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgYm94SGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wVXBIZWFkZXInKTtcbiAgYm94SGVhZGVyLnN0eWxlLmhlaWdodCA9ICcxMCUnO1xuICBib3hIZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgYm94SGVhZGVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ3NwYWNlLWJldHdlZW4nO1xuICBib3hIZWFkZXIuc3R5bGUucGFkZGluZyA9ICcwcHggMTJweCAwcHggMTJweCc7XG4gIGJveEhlYWRlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSAnNnB4IDZweCAwcHggMHB4JztcbiAgYm94SGVhZGVyLnN0eWxlLmZvbnRXZWlnaHQgPSAnYm9sZCc7XG4gIGJveEhlYWRlci5zdHlsZS5saW5lSGVpZ2h0ID0gJ21heCg2dmgsIDQwcHgpJztcbiAgYm94SGVhZGVyLnN0eWxlLmZvbnRTaXplID0gJ21heCg0dmgsIDMwcHgpJztcblxuICBjb25zdCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBoZWFkVGl0bGU7XG4gIGhlYWRlclRleHQubWFyZ2luUmlnaHQgPSAnYXV0byc7XG5cbiAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdwb3BVcENsb3NlJyk7XG4gIGNsb3NlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUHVwVXAoKSk7XG5cbiAgYm94SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICBib3hIZWFkZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICByZXR1cm4gYm94SGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQdXBVcCgpIHtcbiAgY29uc3QgcG9wVXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBCb3gnKTtcbiAgcG9wVXBCb3gucmVtb3ZlKCk7XG4gIHVuQmxvY2tTY3JlZW4oKTtcbn1cbiIsImZ1bmN0aW9uIGJsb2NrU2NyZWVuKHpJbmRleCl7XG4gICAgbGV0IGsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmxvY2tlclwiKTtcbiAgICBrLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIGsuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGsuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgay5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICBrLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBrLnN0eWxlLnpJbmRleCA9IFwiXCIrekluZGV4O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoayk7XG4gICAgay5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZHJvcC1maWx0ZXIgMC4yc1wiXG4gICAgay5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kLWNvbG9yIDAuMnNcIlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC40KVwiOyBrLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDJweClcIjt9LCAwKTtcbn1cblxuZnVuY3Rpb24gdW5CbG9ja1NjcmVlbigpe1xuICAgIGxldCBrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9ja2VyXCIpO1xuICAgIGsuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2Ryb3AtZmlsdGVyIDAuMnNcIlxuICAgIGsuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2dyb3VuZC1jb2xvciAwLjJzXCJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMClcIjsgay5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwcHgpXCI7fSwgMCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe2sucmVtb3ZlKCk7fSwgMjAwKTtcbn1cblxuZXhwb3J0IHtibG9ja1NjcmVlbiwgdW5CbG9ja1NjcmVlbn07IiwiZXhwb3J0IGxldCBpZFNlZWQgPSAwO1xuXG5leHBvcnQgbGV0IHRvRG9MaXN0ID0gW107XG5leHBvcnQgbGV0IHByb2plY3RMaXN0ID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiB0b2RvRmFjdG9yeShkb05hbWUsIGRvUHJvamVjdCA9IG51bGwsIGRvRGF0ZSwgZG9EZXNjcmlwLCBjb21wbGV0ZWQgPSBmYWxzZSwgZG9Qcmlvcml0eSA9IDApe1xuICAgIFxuICAgIGxldCBpZCA9IGlkU2VlZCsrO1xuICAgIHJldHVybiB7ZG9OYW1lLCBkb1Byb2plY3QsIGRvRGF0ZSwgZG9Qcmlvcml0eSwgZG9EZXNjcmlwLCBpZCwgY29tcGxldGVkfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0RmFjdG9yeShwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uKXtcbiAgICBsZXQgaWQgPSBpZFNlZWQrKztcbiAgICByZXR1cm4ge3Byb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24sIGlkfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRvRG8oZG9JZCl7XG4gICAgbGV0IGluZGV4O1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRvRG9MaXN0Lmxlbmd0aDsgaW5kZXgrKyl7XG4gICAgICAgIGlmICh0b0RvTGlzdFtpbmRleF0uaWQgPT0gZG9JZCl7XG4gICAgICAgICAgICB0b0RvTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZCl7XG4gICAgbGV0IGluZGV4O1xuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaW5kZXgrKyl7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdFtpbmRleF0uaWQgPT0gcHJvamVjdElkKXtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvRG8odG9Ebyl7XG4gICAgdG9Eb0xpc3QucHVzaCh0b0RvKTsgICBcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0KXtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN0b3JhZ2UoKXtcbiAgICBsZXQgcHJvamVjdFN0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSk7XG4gICAgbGV0IHRvZG9TdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvRG9MaXN0JykpO1xuICAgIGxldCBpZFN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZFNlZWQnKSk7XG4gICAgaWYgKHByb2plY3RTdG9yZSAhPSBudWxsKSBwcm9qZWN0TGlzdCA9IHByb2plY3RTdG9yZTtcbiAgICBpZiAodG9kb1N0b3JlICE9IG51bGwpIHRvRG9MaXN0ID0gdG9kb1N0b3JlO1xuICAgIGlmIChpZFN0b3JhZ2UgIT0gbnVsbCkgaWRTZWVkID0gaWRTdG9yYWdlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7XG4gIHRvZG9GYWN0b3J5LFxuICBwcm9qZWN0RmFjdG9yeSxcbiAgdG9Eb0xpc3QsXG4gIHByb2plY3RMaXN0LFxuICBkZWxldGVUb0RvLFxuICBkZWxldGVQcm9qZWN0LFxuICBhZGRUb0RvLFxuICBhZGRQcm9qZWN0LFxuICBsb2FkU3RvcmFnZSxcbiAgaWRTZWVkLFxufSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHsgbWFrZVBvcFVwLCBjbG9zZVB1cFVwIH0gZnJvbSAnLi9wb3B1cCc7XG5cbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG5sZXQgYWN0aXZlUHJvamVjdCA9IG51bGw7XG5jb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdOT05FJywgJ2RlZmF1bHQgcHJvamVjdCcpO1xuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IGRvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tjb250YWluZXInKTtcbmNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdExpc3QnKTtcbmNvbnN0IHRvZGF5U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5U2VsZWN0Jyk7XG5jb25zdCB3ZWVrU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlZWtTZWxlY3QnKTtcblxuY29uc3QgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRUb0RvJyk7XG5jb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RhZGRlcicpO1xuXG5mdW5jdGlvbiByZWZyZXNoVG9Eb3MoKSB7XG4gIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgY29uc3Qgd2VlayA9IG5ldyBEYXRlKCk7XG4gIHdlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KTtcbiAgdG9Eb0xpc3Quc29ydCgoYSwgYikgPT4ge1xuICAgIGNvbnN0IGEyID0gbmV3IERhdGUoYS5kb0RhdGUpO1xuICAgIGNvbnN0IGIyID0gbmV3IERhdGUoYi5kb0RhdGUpO1xuICAgIGlmIChhMiA+IGIyKSByZXR1cm4gMTtcbiAgICBpZiAoYjIgPiBhMikgcmV0dXJuIC0xO1xuICAgIGlmIChhLmRvTmFtZSA+IGIuZG9OYW1lKSByZXR1cm4gMTtcbiAgICByZXR1cm4gLTE7XG4gIH0pO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZG9Cb3gnKS5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgZnVuY3Rpb24gY2hlY2tEYXRlKHRvRG8pIHtcbiAgICBjb25zdCB0b0RvRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZG9EYXRlKS5nZXREYXRlKCk7XG4gICAgaWYgKCF0b2RheVNlbGVjdC5jaGVja2VkICYmICF3ZWVrU2VsZWN0LmNoZWNrZWQpIGRpc3BsYXlUb0RvKHRvRG8pO1xuICAgIGVsc2UgaWYgKHRvZGF5U2VsZWN0LmNoZWNrZWQgJiYgdG9Eb0RhdGUgPT0gdG9kYXkuZ2V0RGF0ZSgpKSB7IGRpc3BsYXlUb0RvKHRvRG8pOyB9IGVsc2UgaWYgKHdlZWtTZWxlY3QuY2hlY2tlZCAmJiB0b0RvRGF0ZSA8PSB3ZWVrLmdldERhdGUoKSkgeyBkaXNwbGF5VG9Ebyh0b0RvKTsgfVxuICB9XG4gIGlmIChhY3RpdmVQcm9qZWN0ID09IG51bGwpIHRvRG9MaXN0LmZvckVhY2goKHRvRG8pID0+IGNoZWNrRGF0ZSh0b0RvKSk7XG4gIGVsc2Uge1xuICAgIHRvRG9MaXN0XG4gICAgICAuZmlsdGVyKCh0b0RvKSA9PiB0b0RvLmRvUHJvamVjdC5pZCA9PSBhY3RpdmVQcm9qZWN0KVxuICAgICAgLmZvckVhY2goKHRvRG8pID0+IGNoZWNrRGF0ZSh0b0RvKSk7XG4gIH1cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkU2VlZCcsIEpTT04uc3RyaW5naWZ5KGlkU2VlZCkpO1xufVxuXG50b2RheVNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gIGlmICh0b2RheVNlbGVjdC5jaGVja2VkKSB3ZWVrU2VsZWN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgcmVmcmVzaFRvRG9zKCk7XG59KTtcbndlZWtTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICBpZiAod2Vla1NlbGVjdC5jaGVja2VkKSB0b2RheVNlbGVjdC5jaGVja2VkID0gZmFsc2U7XG4gIHJlZnJlc2hUb0RvcygpO1xufSk7XG5cbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0cygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3RCb3gnKS5mb3JFYWNoKChlbGVtKSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbiAgfVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRTZWVkJywgSlNPTi5zdHJpbmdpZnkoaWRTZWVkKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvKHRvRG8pIHtcbiAgY29uc3QgZG9Cb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZG9Cb3guaWQgPSBgdG9EbyR7dG9Eby5kb05hbWV9YDtcbiAgZG9Cb3guY2xhc3NMaXN0LmFkZCgnZG9Cb3gnKTtcbiAgZG9Cb3guY2xhc3NMaXN0LmFkZChgcHJpb3JpdHkke3RvRG8uZG9Qcmlvcml0eX1gKTtcbiAgY29uc3QgZG9OYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRvTmFtZURpdi50ZXh0Q29udGVudCA9IHRvRG8uZG9OYW1lO1xuICBkb05hbWVEaXYuY2xhc3NMaXN0LmFkZCgndG9Eb05hbWUnKTtcbiAgZG9OYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1RvRG9EZXRhaWxzKHRvRG8pKTtcbiAgY29uc3QgZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkb0RhdGUnKTtcbiAgZG9EYXRlRGl2LnRleHRDb250ZW50ID0gbmV3IERhdGUodG9Eby5kb0RhdGUpLnRvRGF0ZVN0cmluZygpO1xuICBpZiAodG9Eby5jb21wbGV0ZWQpIGRvTmFtZURpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xuICBlbHNlIGRvTmFtZURpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdub25lJztcblxuICAvLyBkZWxldGUgdG9kb1xuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvRG9EZWxldGUnKTtcbiAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkZWxldGVUb0RvKHRvRG8uaWQpO1xuICAgIHJlZnJlc2hUb0RvcygpO1xuICB9KTtcblxuICAvLyBlZGl0IHRvZG9cbiAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvRG9FZGl0Jyk7XG4gIGVkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gZGlzcGxheSBzdHVmZlxuICAgIGVkaXRUb0RvRGV0YWlscyh0b0RvKTtcbiAgfSk7XG4gIC8vIGNvbXBsZXRlIHRvZG9cbiAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9Eb0NvbXBsZXRlJyk7XG4gIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gdG9Eby5jb21wbGV0ZWQgPyAnVW5kbycgOiAnQ29tcGxldGUnO1xuICBjb21wbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9IHRvRG8uY29tcGxldGVkID8gJzM1cHgnIDogJzVweCc7XG4gIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHRvRG8uY29tcGxldGVkID0gIXRvRG8uY29tcGxldGVkO1xuICAgIGlmICh0b0RvLmNvbXBsZXRlZCkge1xuICAgICAgZG9OYW1lRGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XG4gICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdVbmRvJztcbiAgICB9IGVsc2Uge1xuICAgICAgZG9OYW1lRGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ25vbmUnO1xuICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICAgIH1cbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgfSk7XG5cbiAgZG9Cb3guYXBwZW5kQ2hpbGQoZG9OYW1lRGl2KTtcbiAgZG9Cb3guYXBwZW5kQ2hpbGQoZG9EYXRlRGl2KTtcbiAgZG9Cb3guYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gIGRvQm94LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pO1xuICBkb0JveC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBkb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb0JveCk7XG59XG5cbmFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNvbnN0IG5ld1RvRG9Cb3ggPSBtYWtlUG9wVXAoJ05ldyBUb0RvLi4uJyk7XG4gIGNvbnN0IGZvcm1Cb3ggPSBuZXdUb0RvQm94LnBvcFVwY29udGVudDtcbiAgZm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICBmb3JtQm94LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSAnMWZyIDFmciAxZnIgMWZyJztcbiAgZm9ybUJveC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gJzE1cHggMjBweCAxNXB4IDFmciA0MHB4JztcbiAgZm9ybUJveC5zdHlsZS5mb250U2l6ZSA9ICcxLjFyZW0nO1xuICBmb3JtQm94LnN0eWxlLmdhcCA9ICc1cHgnO1xuXG4gIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmV3VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgY29uc3QgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5yZXNpemUgPSAnbm9uZSc7XG4gIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRSb3cgPSAnNC81JztcbiAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZ3JpZENvbHVtbiA9ICcxLzUnO1xuICBjb25zdCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGFkZFRvRG9CdXR0b24uc3R5bGUuZ3JpZFJvdyA9ICc1LzYnO1xuICBhZGRUb0RvQnV0dG9uLnN0eWxlLmdyaWRDb2x1bW4gPSAnMS8yJztcbiAgYWRkVG9Eb0J1dHRvbi5zdHlsZS5qdXN0aWZ5U2VsZiA9ICdzdGFydCc7XG4gIGFkZFRvRG9CdXR0b24uaW5uZXJIVE1MID0gJ0FkZCBUb0RvJztcbiAgYWRkVG9Eb0J1dHRvbi5zdHlsZS5mb250U2l6ZSA9ICcxLjNyZW0nO1xuXG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgcE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHBPcHRpb24udmFsdWUgPSBgJHtpfWA7XG4gICAgcE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0W2ldLnByb2plY3ROYW1lO1xuICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocE9wdGlvbik7XG4gIH1cbiAgY29uc3QgZGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGRhdGVTZWxlY3QudHlwZSA9ICdkYXRlJztcbiAgZGF0ZVNlbGVjdC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGNvbnN0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgbG93UC52YWx1ZSA9ICcxJztcbiAgbG93UC50ZXh0Q29udGVudCA9ICdMb3cnO1xuICBjb25zdCBtZWRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG1lZFAudmFsdWUgPSAnMic7XG4gIG1lZFAudGV4dENvbnRlbnQgPSAnTWVkaXVtJztcbiAgY29uc3QgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgaGlnaFAudmFsdWUgPSAnMyc7XG4gIGhpZ2hQLnRleHRDb250ZW50ID0gJ0hpZ2gnO1xuXG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd1ApO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRQKTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQoaGlnaFApO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gIGNvbnN0IHByb2plY3RMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICBjb25zdCBkYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEYXRlJztcbiAgY29uc3QgcHJpb0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcmlvTGFiZWwudGV4dENvbnRlbnQgPSAnUHJpb3JpdHknO1xuICBjb25zdCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdEZXNjcmlwdGlvbic7XG5cbiAgZm9ybUJveC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJpb0xhYmVsKTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJvamVjdFNlbGVjdCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGF0ZVNlbGVjdCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGFkZFRvRG9CdXR0b24pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3VG9Eb0JveC5wb3BCb3gpO1xuXG4gIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKG5ld1RpdGxlLnZhbHVlID09IG51bGwgfHwgbmV3VGl0bGUudmFsdWUgPT0gJycpIHJldHVybjtcbiAgICBjb25zdCBtMSA9IHRvZG9GYWN0b3J5KFxuICAgICAgbmV3VGl0bGUudmFsdWUsXG4gICAgICBwcm9qZWN0TGlzdFtwcm9qZWN0U2VsZWN0LnZhbHVlXSxcbiAgICAgIGRhdGVTZWxlY3QudmFsdWVBc0RhdGUsXG4gICAgICBuZXdEZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgIGZhbHNlLFxuICAgICAgcHJpb3JpdHlTZWxlY3QudmFsdWUsXG4gICAgKTtcbiAgICBhZGRUb0RvKG0xKTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICBjbG9zZVB1cFVwKCk7XG4gIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwcm9qZWN0Qm94LmlkID0gYHByb2plY3Qke3Byb2plY3QucHJvamVjdE5hbWV9YDtcbiAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Qm94Jyk7XG4gIGNvbnN0IHByb2plY3RGb2N1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBwcm9qZWN0Rm9jdXMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICBwcm9qZWN0Rm9jdXMuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcblxuICBwcm9qZWN0Rm9jdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gcHJvamVjdC5pZCkge1xuICAgICAgYWN0aXZlUHJvamVjdCA9IG51bGw7XG4gICAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZVByb2plY3RCb3gnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGFjdGl2ZVByb2plY3QgIT0gbnVsbCkge1xuICAgICAgICBjb25zdCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY3RpdmVQcm9qZWN0Qm94JylbMF07XG4gICAgICAgIG9sZC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVQcm9qZWN0Qm94Jyk7XG4gICAgICB9XG4gICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdC5pZDtcbiAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZCgnYWN0aXZlUHJvamVjdEJveCcpO1xuICAgIH1cbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVsZXRlJyk7XG5cbiAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgfSk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBkZXNjcmlwdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0RGVzY3JpcHRpb24nKTtcbiAgZGVzY3JpcHRpb25CdXR0b24udGV4dENvbnRlbnQgPSAnPyc7XG4gIGRlc2NyaXB0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQm94ID0gbWFrZVBvcFVwKHByb2plY3QucHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uQ29udGVudCA9IGRlc2NyaXB0aW9uQm94LnBvcFVwY29udGVudDtcbiAgICBkZXNjcmlwdGlvbkNvbnRlbnQudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3REZXNjcmlwdGlvbjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm94LnBvcEJveCk7XG4gIH0pO1xuXG4gIHByb2plY3RCb3guYXBwZW5kQ2hpbGQocHJvamVjdEZvY3VzKTtcbiAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQnV0dG9uKTtcbiAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcbn1cblxuYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEJveCA9IG1ha2VQb3BVcCgnTmV3IFByb2plY3QuLi4nKTtcbiAgY29uc3QgZm9ybUJveCA9IG5ld1Byb2plY3RCb3gucG9wVXBjb250ZW50O1xuXG4gIGZvcm1Cb3guc3R5bGUuZm9udFNpemUgPSAnMS4zcmVtJztcbiAgZm9ybUJveC5zdHlsZS5nYXAgPSAnMTBweCc7XG4gIGZvcm1Cb3guc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgZm9ybUJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGVMYWJlbC5zdHlsZS5mb250U2l6ZSA9ICcxLjFyZW0nO1xuICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgVGl0bGU6ICc7XG4gIGNvbnN0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgbmV3VGl0bGUudHlwZSA9ICd0ZXh0JztcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGl0bGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgdGl0bGVDb250YWluZXIuc3R5bGUuZ2FwID0gJzVweCc7XG4gIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY0xhYmVsLnN0eWxlLmZvbnRTaXplID0gJzEuMXJlbSc7XG4gIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0IERlc2NyaXB0aW9uOic7XG4gIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbmV3RGVzY3JpcHRpb24uc3R5bGUucmVzaXplID0gJ25vbmUnO1xuICBuZXdEZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgbmV3RGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gJzc1JSc7XG4gIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLm1hcmdpblRvcCA9ICctNXB4JztcbiAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGFkZFByb2plY3RCdXR0b24uc3R5bGUuYWxpZ25TZWxmID0gJ3N0YXJ0JztcbiAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSAnQWRkIFByb2plY3QnO1xuXG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCb3gucG9wQm94KTtcblxuICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmIChuZXdUaXRsZS52YWx1ZSA9PSBudWxsIHx8IG5ld1RpdGxlLnZhbHVlID09ICcnKSByZXR1cm47XG4gICAgY29uc3QgbTEgPSBwcm9qZWN0RmFjdG9yeShuZXdUaXRsZS52YWx1ZSwgbmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgIGFkZFByb2plY3QobTEpO1xuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIGNsb3NlUHVwVXAoKTtcbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gZWRpdFRvRG9EZXRhaWxzKHRvRG8pIHtcbiAgY29uc3QgZWRpdFRvRG9Cb3ggPSBtYWtlUG9wVXAoYEVkaXQ6ICR7dG9Eby5kb05hbWV9YCk7XG4gIGNvbnN0IGZvcm1Cb3ggPSBlZGl0VG9Eb0JveC5wb3BVcGNvbnRlbnQ7XG4gIGZvcm1Cb3guc3R5bGUuZGlzcGxheSA9ICdncmlkJztcbiAgZm9ybUJveC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gJzFmciAxZnIgMWZyIDFmcic7XG4gIGZvcm1Cb3guc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9ICcxNXB4IDIwcHggMTVweCAxZnIgNDBweCc7XG4gIGZvcm1Cb3guc3R5bGUuZm9udFNpemUgPSAnMS4xcmVtJztcbiAgZm9ybUJveC5zdHlsZS5nYXAgPSAnNXB4JztcblxuICBjb25zdCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIG5ld1RpdGxlLnR5cGUgPSAndGV4dCc7XG4gIG5ld1RpdGxlLnZhbHVlID0gdG9Eby5kb05hbWU7XG4gIGNvbnN0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgbmV3RGVzY3JpcHRpb24udmFsdWUgPSB0b0RvLmRvRGVzY3JpcDtcbiAgbmV3RGVzY3JpcHRpb24uc3R5bGUucmVzaXplID0gJ25vbmUnO1xuICBuZXdEZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgbmV3RGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gJzEwMCUnO1xuICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5ncmlkUm93ID0gJzQvNSc7XG4gIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRDb2x1bW4gPSAnMS81JztcbiAgY29uc3QgZWRpdFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZWRpdFRvRG9CdXR0b24uc3R5bGUuZ3JpZFJvdyA9ICc1LzYnO1xuICBlZGl0VG9Eb0J1dHRvbi5zdHlsZS5ncmlkQ29sdW1uID0gJzEvMic7XG4gIGVkaXRUb0RvQnV0dG9uLnN0eWxlLmp1c3RpZnlTZWxmID0gJ3N0YXJ0JztcbiAgZWRpdFRvRG9CdXR0b24uaW5uZXJIVE1MID0gJ1NhdmUgQ2hhbmdlcyc7XG4gIGVkaXRUb0RvQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gJzEuM3JlbSc7XG5cbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBwT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcE9wdGlvbi52YWx1ZSA9IGAke2l9YDtcbiAgICBwT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWU7XG4gICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgfVxuICBjb25zdCBkYXRlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZGF0ZVNlbGVjdC50eXBlID0gJ2RhdGUnO1xuICBkYXRlU2VsZWN0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUodG9Eby5kb0RhdGUpO1xuICBjb25zdCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBjb25zdCBvbGRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9sZFAudmFsdWUgPSB0b0RvLmRvUHJpb3JpdHk7XG4gIG9sZFAudGV4dENvbnRlbnQgPSAnICAgICAnO1xuICBjb25zdCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGxvd1AudmFsdWUgPSAnMSc7XG4gIGxvd1AudGV4dENvbnRlbnQgPSAnTG93JztcbiAgY29uc3QgbWVkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICBtZWRQLnZhbHVlID0gJzInO1xuICBtZWRQLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gIGNvbnN0IGhpZ2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIGhpZ2hQLnZhbHVlID0gJzMnO1xuICBoaWdoUC50ZXh0Q29udGVudCA9ICdIaWdoJztcblxuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvbGRQKTtcbiAgcHJpb3JpdHlTZWxlY3QuYXBwZW5kQ2hpbGQobG93UCk7XG4gIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG1lZFApO1xuICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChoaWdoUCk7XG5cbiAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgY29uc3QgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdCc7XG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0RhdGUnO1xuICBjb25zdCBwcmlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIHByaW9MYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSc7XG4gIGNvbnN0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJztcblxuICBmb3JtQm94LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChwcmlvTGFiZWwpO1xuICBmb3JtQm94LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChkYXRlU2VsZWN0KTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZWRpdFRvRG9CdXR0b24pO1xuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdFRvRG9Cb3gucG9wQm94KTtcblxuICBlZGl0VG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAobmV3VGl0bGUudmFsdWUgPT0gbnVsbCB8fCBuZXdUaXRsZS52YWx1ZSA9PSAnJykgcmV0dXJuO1xuICAgIHRvRG8uZG9OYW1lID0gbmV3VGl0bGUudmFsdWU7XG4gICAgdG9Eby5kb1Byb2plY3QgPSBwcm9qZWN0TGlzdFtwcm9qZWN0U2VsZWN0LnZhbHVlXTtcbiAgICB0b0RvLmRvRGF0ZSA9IGRhdGVTZWxlY3QudmFsdWVBc0RhdGU7XG4gICAgdG9Eby5kb0Rlc2NyaXAgPSBuZXdEZXNjcmlwdGlvbi52YWx1ZTtcbiAgICB0b0RvLmRvUHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICBjbG9zZVB1cFVwKCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VG9Eb0RldGFpbHModG9Ebykge1xuICBjb25zdCBkZXRhaWxzQm94ID0gbWFrZVBvcFVwKHRvRG8uZG9OYW1lKTtcbiAgY29uc3QgaW5mb0JveCA9IGRldGFpbHNCb3gucG9wVXBjb250ZW50O1xuICBpbmZvQm94LnN0eWxlLmZvbnRTaXplID0gJzEuMnJlbSc7XG4gIGluZm9Cb3guc3R5bGUubGluZUhlaWdodCA9ICcxLjJyZW0nO1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IHRvRG8uZG9Qcm9qZWN0LnByb2plY3ROYW1lID09ICdOT05FJ1xuICAgID8gJydcbiAgICA6IGBQcm9qZWN0OiAke3RvRG8uZG9Qcm9qZWN0LnByb2plY3ROYW1lfWA7XG4gIGNvbnN0IHNob3dEYXRlID0gbmV3IERhdGUodG9Eby5kb0RhdGUpO1xuICBpbmZvQm94LmlubmVySFRNTCA9IGA8cD4ke3Byb2plY3ROYW1lfTwvcD5cbiAgICA8cD5Qcmlvcml0eTogJHt0b0RvLmRvUHJpb3JpdHl9PC9wPlxuICAgIDxwPkR1ZSBEYXRlOiAke3Nob3dEYXRlLnRvRGF0ZVN0cmluZygpfTwvcD5cbiAgICA8YnI+XG4gICAgPHA+RGVzY3JpcHRpb246ICR7dG9Eby5kb0Rlc2NyaXB9PC9wPmA7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxzQm94LnBvcEJveCk7XG59XG5cbmxvYWRTdG9yYWdlKCk7XG5yZWZyZXNoUHJvamVjdHMoKTtcbnJlZnJlc2hUb0RvcygpO1xuXG5pZiAocHJvamVjdExpc3QubGVuZ3RoID09IDEgJiYgdG9Eb0xpc3QubGVuZ3RoID09IDApIHBvcHVsYXRlKCk7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlKCkge1xuICBjb25zdCBwcm8xID0gcHJvamVjdEZhY3RvcnkoJ1Byb2dyYW1taW5nJywgJ3RyeWluZyB0byBsZWFybiB0byBwcm9ncmFtJyk7XG4gIGNvbnN0IHBybzIgPSBwcm9qZWN0RmFjdG9yeShcbiAgICAnV2ViIERlc2lnbicsXG4gICAgJ2NhbnQgcmVhbGx5IGNhbGwgdGhpcyBwcm9ncmFtbWluZycsXG4gICk7XG4gIGNvbnN0IHBybzMgPSBwcm9qZWN0RmFjdG9yeSgnQWxnb3JpdGhtcycsICdvcmRvIG5vdGF0aW9uIGFuZCBzdHVmZicpO1xuICBhZGRQcm9qZWN0KHBybzEpO1xuICBhZGRQcm9qZWN0KHBybzIpO1xuICBhZGRQcm9qZWN0KHBybzMpO1xuICByZWZyZXNoUHJvamVjdHMoKTtcbiAgY29uc3QgcCA9IG5ldyBEYXRlKCk7XG4gIGNvbnN0IGsgPSBuZXcgRGF0ZSgpO1xuICBrLnNldERhdGUocC5nZXREYXRlKCkgKyA0KTtcblxuICBjb25zdCBtID0gdG9kb0ZhY3RvcnkoJ3Rlc3RpbmcxJywgcHJvMSwgcCwgJ2RvIHN0dWZmJywgZmFsc2UsIDMpO1xuICBjb25zdCBzID0gdG9kb0ZhY3RvcnkoXG4gICAgJ3Rlc3RpbmcyJyxcbiAgICBwcm8yLFxuICAgIGssXG4gICAgJ2RvIHN0dWZmYXNmZGRzZHNmc2QgIHNkZmdzZGZnIHNkZ2YgZ3MgZGdmIGZnZHNmZ2RzZ3MgIGcgZ2cgZGZzIGdkZnNnIGZkc2cgZnNkIGdmZCBnIGdmZGZnIHNkZyBkZnMgZmdkcyBnZmRzZyBmc2QgZ2Zkc2cgZmRzZyBmZHMgZ2Zkc2cgc2cgZmRzZyBmZHNnIGYgZ2RmcyBnZmRzIGdkZnMgZ2RzZiBnZmRzZ2Rmc2ZhZHNmYScsXG4gICAgZmFsc2UsXG4gICAgMSxcbiAgKTtcbiAgY29uc3QgbyA9IHRvZG9GYWN0b3J5KCd0ZXN0aW5nMycsIHBybzMsIHAsICdkbyBzdHVmZicsIGZhbHNlLCAyKTtcblxuICBhZGRUb0RvKG0pO1xuICBhZGRUb0RvKHMpO1xuICBhZGRUb0RvKG8pO1xuICByZWZyZXNoVG9Eb3MoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==