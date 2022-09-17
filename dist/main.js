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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxrREFBVTtBQUNsQixLQUFLO0FBQ0w7O0FBRUE7QUFDQSxxQkFBcUIsaURBQVM7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDLG1CQUFtQixnQkFBZ0I7QUFDbkMsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBLHNCQUFzQixlQUFlOztBQUVyQztBQUNBOzs7O0FBSUEsa0RBQVc7QUFDWDtBQUNBOztBQUVBLElBQUkscURBQWtCLFNBQVMsa0RBQWU7O0FBRTlDO0FBQ0EsZUFBZSxxREFBYztBQUM3QixlQUFlLHFEQUFjO0FBQzdCLGVBQWUscURBQWM7QUFDN0IsSUFBSSxpREFBVTtBQUNkLElBQUksaURBQVU7QUFDZCxJQUFJLGlEQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWSxrREFBVztBQUN2QixZQUFZLGtEQUFXO0FBQ3ZCLFlBQVksa0RBQVc7O0FBRXZCLElBQUksOENBQU87QUFDWCxJQUFJLDhDQUFPO0FBQ1gsSUFBSSw4Q0FBTztBQUNYO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcG9wdXAuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zY3JlZW5ibG9jay5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcbjpyb290e1xcbiAgICAtLWhlYWRlckNvbG9yOiByZ2IoODcsIDEyLCA4Nyk7XFxuICAgIC0taGVhZGVyVGV4dENvbG9yOiB3aGl0ZTtcXG4gICAgLS1zaWRlYmFyQ29sb3I6IHJnYig4OCwgMTAsIDg4KTtcXG4gICAgLS1zaWRlYmFyVGV4dENvbG9yOiB3aGl0ZTtcXG4gICAgLS1jb250YWluZXJCYWNrZ3JvdW5kOiByZ2IoMTQxLCAxMTQsIDE1Nik7XFxuICAgIC0tcG9wdXBCYWNrZ3JvdW5kOiByZ2IoMjA2LCAxODcsIDIxNik7XFxuXFxuICAgIC0tZG9Cb3hDb2xvcjogcmdiKDIyMCwgMjAwLCAyMjApO1xcbiAgICAtLWRvQm94SG92ZXJDb2xvcjogcmdiKDI1NSwgMjM1LCAyNTUpO1xcbiAgICAtLWRvQm94VGV4dENvbG9yOiBibGFjaztcXG5cXG4gICAgLS1oaWdoUHJpb3JpdHk6IHJnYigyNTUsIDAsIDUwKTtcXG4gICAgLS1taWRQcmlvcml0eTogcmdiKDI1NSwgMjA1LCAwKTtcXG4gICAgLS1sb3dQcmlvcml0eTogcmdiKDAsIDIzNSwgNTApO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcik7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuLmRvRGF0ZXtcXG4gICAgY29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKTtcXG59XFxuXFxuI2FkZFRvRG8sICNwcm9qZWN0YWRkZXJ7XFxuICAgIGNvbG9yOnZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jYWRkVG9Eb3tcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdG9wY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IG1pbm1heCg1MDBweCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDBweDtcXG59XFxuXFxuXFxuI2xvZ29Db250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsZWZ0U2lkZWJhciBpbWd7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbiN0YXNrY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyQmFja2dyb3VuZCk7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbn1cXG5cXG4uZG9Cb3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvQm94Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdmFyKC0taGlnaFByaW9yaXR5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDVweCAxNXB4IDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG5cXG59XFxuXFxuLmRvQm94OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvQm94SG92ZXJDb2xvcik7XFxufVxcblxcbi5wcmlvcml0eTJ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWlkUHJpb3JpdHkpO1xcbn1cXG5cXG4ucHJpb3JpdHkxe1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxvd1ByaW9yaXR5KTtcXG59XFxuXFxuLmRvQm94IC50b0RvTmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG5cXG59XFxuXFxuI2xlZnRTaWRlYmFye1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGJ1dHRvbntcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jcHJvamVjdEhlYWRlcntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jcHJvamVjdExpc3R7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0Qm94e1xcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RhZGRlcntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0TmFtZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdEJveDpob3ZlcntcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0Qm94e1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuLnByb2plY3RCb3g6OmJlZm9yZXtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jcG9wVXBCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1wb3B1cEJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpXFxufVxcblxcbiNwb3BVcEhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXG59XFxuXFxuI3BvcFVwQ2xvc2V7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jdG9kYXlTZWxlY3QsICN3ZWVrU2VsZWN0e1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGltZXNlbGVjdG9ye1xcbiAgICBtYXJnaW46IDVweCAwcHggMTVweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5sYWJlbHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVse1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIseUNBQXlDO0lBQ3pDLHFDQUFxQzs7SUFFckMsZ0NBQWdDO0lBQ2hDLHFDQUFxQztJQUNyQyx1QkFBdUI7O0lBRXZCLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsc0JBQXNCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLDRCQUE0QjtDQUM1QixZQUFZO0NBQ1osVUFBVTtDQUNWLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLCtDQUErQztJQUMvQyx1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7O0FBR0E7SUFDSSxxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0dBQ0csV0FBVztBQUNkOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQiw0Q0FBNEM7SUFDNUMsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7O0lBRUksbUNBQW1DO0lBQ25DLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLDBDQUEwQztJQUMxQyxrQkFBa0I7SUFDbEIsMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQywyQkFBMkI7SUFDM0IsaUNBQWlDOztBQUVyQzs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztJQUNULDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhDQUE4QztJQUM5QyxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekM7QUFDSjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2I7Ozs7QUFJQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcbjpyb290e1xcbiAgICAtLWhlYWRlckNvbG9yOiByZ2IoODcsIDEyLCA4Nyk7XFxuICAgIC0taGVhZGVyVGV4dENvbG9yOiB3aGl0ZTtcXG4gICAgLS1zaWRlYmFyQ29sb3I6IHJnYig4OCwgMTAsIDg4KTtcXG4gICAgLS1zaWRlYmFyVGV4dENvbG9yOiB3aGl0ZTtcXG4gICAgLS1jb250YWluZXJCYWNrZ3JvdW5kOiByZ2IoMTQxLCAxMTQsIDE1Nik7XFxuICAgIC0tcG9wdXBCYWNrZ3JvdW5kOiByZ2IoMjA2LCAxODcsIDIxNik7XFxuXFxuICAgIC0tZG9Cb3hDb2xvcjogcmdiKDIyMCwgMjAwLCAyMjApO1xcbiAgICAtLWRvQm94SG92ZXJDb2xvcjogcmdiKDI1NSwgMjM1LCAyNTUpO1xcbiAgICAtLWRvQm94VGV4dENvbG9yOiBibGFjaztcXG5cXG4gICAgLS1oaWdoUHJpb3JpdHk6IHJnYigyNTUsIDAsIDUwKTtcXG4gICAgLS1taWRQcmlvcml0eTogcmdiKDI1NSwgMjA1LCAwKTtcXG4gICAgLS1sb3dQcmlvcml0eTogcmdiKDAsIDIzNSwgNTApO1xcbn1cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYnV0dG9uIHtcXG5cXHRiYWNrZ3JvdW5kOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcik7XFxuXFx0Ym9yZGVyOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0b3V0bGluZTogaW5oZXJpdDtcXG59XFxuXFxuLmRvRGF0ZXtcXG4gICAgY29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKTtcXG59XFxuXFxuI2FkZFRvRG8sICNwcm9qZWN0YWRkZXJ7XFxuICAgIGNvbG9yOnZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jYWRkVG9Eb3tcXG4gICAgZm9udC1zaXplOiAxLjZyZW07XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jdG9wY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IG1pbm1heCg1MDBweCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBnYXA6IDBweDtcXG59XFxuXFxuXFxuI2xvZ29Db250YWluZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNsZWZ0U2lkZWJhciBpbWd7XFxuICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbiN0YXNrY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFpbmVyQmFja2dyb3VuZCk7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbn1cXG5cXG4uZG9Cb3h7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvQm94Q29sb3IpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiA3cHggc29saWQgdmFyKC0taGlnaFByaW9yaXR5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXJnaW46IDVweCAxNXB4IDEwcHggMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXM7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcXG5cXG59XFxuXFxuLmRvQm94OmhvdmVye1xcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRvQm94SG92ZXJDb2xvcik7XFxufVxcblxcbi5wcmlvcml0eTJ7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWlkUHJpb3JpdHkpO1xcbn1cXG5cXG4ucHJpb3JpdHkxe1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWxvd1ByaW9yaXR5KTtcXG59XFxuXFxuLmRvQm94IC50b0RvTmFtZSB7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG5cXG59XFxuXFxuI2xlZnRTaWRlYmFye1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJDb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDQ7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDI1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgei1pbmRleDogMjtcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGJ1dHRvbntcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jcHJvamVjdEhlYWRlcntcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4jcHJvamVjdExpc3R7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0Qm94e1xcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RhZGRlcntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbi5wcm9qZWN0TmFtZXtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ucHJvamVjdEJveDpob3ZlcntcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5hY3RpdmVQcm9qZWN0Qm94e1xcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDRweDtcXG59XFxuXFxuLnByb2plY3RCb3g6OmJlZm9yZXtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jcG9wVXBCb3h7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhciggLS1wb3B1cEJhY2tncm91bmQpO1xcbiAgICBjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpXFxufVxcblxcbiNwb3BVcEhlYWRlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGVhZGVyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXG59XFxuXFxuI3BvcFVwQ2xvc2V7XFxuICAgIGNvbG9yOiB2YXIoLS1oZWFkZXJUZXh0Q29sb3IpO1xcbn1cXG5cXG4jdG9kYXlTZWxlY3QsICN3ZWVrU2VsZWN0e1xcbiAgICBvcGFjaXR5OiAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdGltZXNlbGVjdG9ye1xcbiAgICBtYXJnaW46IDVweCAwcHggMTVweCAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG5sYWJlbHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgbGFiZWx7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuXFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0gKyBsYWJlbHtcXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVse1xcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG59XFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2Jsb2NrU2NyZWVuLCB1bkJsb2NrU2NyZWVufSBmcm9tICcuL3NjcmVlbmJsb2NrLmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQb3BVcCh0aXRsZSwgYmxvY2tJbmRleCA9IDEwMCl7XG4gICAgYmxvY2tTY3JlZW4oYmxvY2tJbmRleCk7XG4gICAgbGV0IHBvcEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcEJveC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcFVwQm94XCIpO1xuICAgIHBvcEJveC5zdHlsZS5taW5XaWR0aCA9IFwiNjAwcHhcIjtcbiAgICBwb3BCb3guc3R5bGUubWluSGVpZ2h0ID0gXCI0MDBweFwiO1xuICAgIHBvcEJveC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgcG9wQm94LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgIHBvcEJveC5zdHlsZS53aWR0aCA9IFwiNTAlXCI7XG4gICAgcG9wQm94LnN0eWxlLmhlaWdodCA9IFwiNjAlXCI7XG4gICAgcG9wQm94LnN0eWxlLnpJbmRleCA9IGAke2Jsb2NrSW5kZXgrMX1gO1xuICAgIFxuICAgIHBvcEJveC5zdHlsZS50b3AgPSBcIjUwJVwiO1xuICAgIHBvcEJveC5zdHlsZS5sZWZ0ID0gXCI1MCVcIjtcbiAgICBwb3BCb3guc3R5bGUubWFyZ2luVG9wID0gXCJtaW4oLTIwMHB4LCAtMzB2aClcIjtcbiAgICBwb3BCb3guc3R5bGUubWFyZ2luTGVmdCA9IFwibWluKC0zMDBweCwgLTI1dncpXCI7XG4gICAgcG9wQm94LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIHBvcEJveC5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjZweFwiO1xuICAgIHBvcEJveC5zdHlsZS5ib3hTaGFkb3cgPSBcIjVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgNXB4IC0xcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgIHBvcEJveC5zdHlsZS5ib3hTaXppbmcgPSBcImJvcmRlci1ib3hcIjtcbiAgICBsZXQgcG9wVXBIZWFkZXIgPSBtYWtlQm94SGVhZGVyKHRpdGxlKTtcbiAgICBsZXQgcG9wVXBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9wVXBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiOTAlXCI7XG4gICAgcG9wVXBjb250ZW50LnN0eWxlLnBhZGRpbmcgPSBcIjhweCAxNXB4IDVweCAxNXB4XCI7XG4gICAgcG9wQm94LmFwcGVuZENoaWxkKHBvcFVwSGVhZGVyKTtcbiAgICBwb3BCb3guYXBwZW5kQ2hpbGQocG9wVXBjb250ZW50KTtcbiAgICByZXR1cm4ge3BvcEJveCwgcG9wVXBIZWFkZXIsIHBvcFVwY29udGVudH07XG59XG5cbmZ1bmN0aW9uIG1ha2VCb3hIZWFkZXIoaGVhZFRpdGxlKXtcbiAgICBsZXQgYm94SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBib3hIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3BVcEhlYWRlclwiKTtcbiAgICBib3hIZWFkZXIuc3R5bGUuaGVpZ2h0ID0gXCIxMCVcIjtcbiAgICBib3hIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5wYWRkaW5nID0gXCIwcHggMTJweCAwcHggMTJweFwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjZweCA2cHggMHB4IDBweFwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLmxpbmVIZWlnaHQgPSBcIm1heCg2dmgsIDQwcHgpXCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLmZvbnRTaXplID0gXCJtYXgoNHZoLCAzMHB4KVwiO1xuXG4gICAgbGV0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gaGVhZFRpdGxlO1xuICAgIGhlYWRlclRleHQubWFyZ2luUmlnaHQgPSBcImF1dG9cIjtcblxuICAgIGxldCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNsb3NlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wVXBDbG9zZVwiKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2xvc2VQdXBVcCgpKTtcbiBcbiAgICBib3hIZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG4gICAgYm94SGVhZGVyLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcbiAgICByZXR1cm4gYm94SGVhZGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQdXBVcCgpe1xuICAgIGxldCBwb3BVcEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBCb3hcIik7XG4gICAgcG9wVXBCb3gucmVtb3ZlKCk7XG4gICAgdW5CbG9ja1NjcmVlbigpO1xufSIsImZ1bmN0aW9uIGJsb2NrU2NyZWVuKHpJbmRleCl7XG4gICAgbGV0IGsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmxvY2tlclwiKTtcbiAgICBrLnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIGsuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGsuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgay5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICBrLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBrLnN0eWxlLnpJbmRleCA9IFwiXCIrekluZGV4O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoayk7XG4gICAgay5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZHJvcC1maWx0ZXIgMC4yc1wiXG4gICAgay5zdHlsZS50cmFuc2l0aW9uID0gXCJiYWNrZ3JvdW5kLWNvbG9yIDAuMnNcIlxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXsgay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC40KVwiOyBrLnN0eWxlLmJhY2tkcm9wRmlsdGVyID0gXCJibHVyKDJweClcIjt9LCAwKTtcbn1cblxuZnVuY3Rpb24gdW5CbG9ja1NjcmVlbigpe1xuICAgIGxldCBrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJibG9ja2VyXCIpO1xuICAgIGsuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2Ryb3AtZmlsdGVyIDAuMnNcIlxuICAgIGsuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2dyb3VuZC1jb2xvciAwLjJzXCJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMClcIjsgay5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigwcHgpXCI7fSwgMCk7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe2sucmVtb3ZlKCk7fSwgMjAwKTtcbn1cblxuZXhwb3J0IHtibG9ja1NjcmVlbiwgdW5CbG9ja1NjcmVlbn07IiwibGV0IGlkU2VlZCA9IDA7XG5cbmV4cG9ydCBsZXQgdG9Eb0xpc3QgPSBbXTtcbmV4cG9ydCBsZXQgcHJvamVjdExpc3QgPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZG9GYWN0b3J5KGRvTmFtZSwgZG9Qcm9qZWN0ID0gbnVsbCwgZG9EYXRlLCBkb0Rlc2NyaXAsIGNvbXBsZXRlZCA9IGZhbHNlLCBkb1ByaW9yaXR5ID0gMCl7XG4gICAgXG4gICAgbGV0IGlkID0gaWRTZWVkKys7XG4gICAgcmV0dXJuIHtkb05hbWUsIGRvUHJvamVjdCwgZG9EYXRlLCBkb1ByaW9yaXR5LCBkb0Rlc2NyaXAsIGlkLCBjb21wbGV0ZWR9O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb2plY3RGYWN0b3J5KHByb2plY3ROYW1lLCBwcm9qZWN0RGVzY3JpcHRpb24pe1xuICAgIGxldCBpZCA9IGlkU2VlZCsrO1xuICAgIHJldHVybiB7cHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbiwgaWR9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVG9Ebyhkb0lkKXtcbiAgICBsZXQgaW5kZXg7XG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgdG9Eb0xpc3QubGVuZ3RoOyBpbmRleCsrKXtcbiAgICAgICAgaWYgKHRvRG9MaXN0W2luZGV4XS5pZCA9PSBkb0lkKXtcbiAgICAgICAgICAgIHRvRG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkKXtcbiAgICBsZXQgaW5kZXg7XG4gICAgZm9yIChpbmRleCA9IDA7IGluZGV4IDwgcHJvamVjdExpc3QubGVuZ3RoOyBpbmRleCsrKXtcbiAgICAgICAgaWYgKHByb2plY3RMaXN0W2luZGV4XS5pZCA9PSBwcm9qZWN0SWQpe1xuICAgICAgICAgICAgcHJvamVjdExpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9Ebyh0b0RvKXtcbiAgICB0b0RvTGlzdC5wdXNoKHRvRG8pOyAgIFxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRQcm9qZWN0KHByb2plY3Qpe1xuICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkU3RvcmFnZSgpe1xuICAgIGxldCBwcm9qZWN0U3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0TGlzdCcpKTtcbiAgICBsZXQgdG9kb1N0b3JlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9Eb0xpc3QnKSk7XG4gICAgaWYgKHByb2plY3RTdG9yZSAhPSBudWxsKSBwcm9qZWN0TGlzdCA9IHByb2plY3RTdG9yZTtcbiAgICBpZiAodG9kb1N0b3JlICE9IG51bGwpIHRvRG9MaXN0ID0gdG9kb1N0b3JlO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7dG9kb0ZhY3RvcnksIHByb2plY3RGYWN0b3J5LCB0b0RvTGlzdCwgcHJvamVjdExpc3QsIGRlbGV0ZVRvRG8sIGRlbGV0ZVByb2plY3QsIGFkZFRvRG8sIGFkZFByb2plY3QsIGxvYWRTdG9yYWdlfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHttYWtlUG9wVXAsIGNsb3NlUHVwVXB9IGZyb20gJy4vcG9wdXAnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xubGV0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXCJOT05FXCIsIFwiZGVmYXVsdCBwcm9qZWN0XCIpO1xuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IGRvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrY29udGFpbmVyXCIpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5jb25zdCB0b2RheVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlTZWxlY3RcIik7XG5jb25zdCB3ZWVrU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrU2VsZWN0XCIpO1xuXG5jb25zdCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdGFkZGVyXCIpO1xuXG5mdW5jdGlvbiByZWZyZXNoVG9Eb3MoKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHdlZWsgPSBuZXcgRGF0ZSgpO1xuICAgIHdlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KTtcbiAgICB0b0RvTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBhMiA9IG5ldyBEYXRlKGEuZG9EYXRlKTtcbiAgICAgICAgbGV0IGIyID0gbmV3IERhdGUoYi5kb0RhdGUpO1xuICAgICAgICBpZiAoYTIgPiBiMikgcmV0dXJuIDE7XG4gICAgICAgIGlmIChiMiA+IGEyKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChhLmRvTmFtZSA+IGIuZG9OYW1lKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG9Cb3hcIikuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgIGZ1bmN0aW9uIGNoZWNrRGF0ZSh0b0RvKXtcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gbmV3IERhdGUodG9Eby5kb0RhdGUpLmdldERhdGUoKTtcbiAgICAgICAgaWYgKCF0b2RheVNlbGVjdC5jaGVja2VkICYmICF3ZWVrU2VsZWN0LmNoZWNrZWQpIGRpc3BsYXlUb0RvKHRvRG8pO1xuICAgICAgICBlbHNlIGlmICh0b2RheVNlbGVjdC5jaGVja2VkICYmIHRvRG9EYXRlID09IHRvZGF5LmdldERhdGUoKSkgZGlzcGxheVRvRG8odG9Ebyk7XG4gICAgICAgIGVsc2UgaWYgKHdlZWtTZWxlY3QuY2hlY2tlZCAmJiB0b0RvRGF0ZSA8PSB3ZWVrLmdldERhdGUoKSkgZGlzcGxheVRvRG8odG9Ebyk7XG5cbiAgICB9XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gbnVsbCkgdG9Eb0xpc3QuZm9yRWFjaCh0b0RvID0+IGNoZWNrRGF0ZSh0b0RvKSk7IFxuICAgIGVsc2UgdG9Eb0xpc3QuZmlsdGVyKHRvRG8gPT4gdG9Eby5kb1Byb2plY3QuaWQgPT0gYWN0aXZlUHJvamVjdCkuZm9yRWFjaCh0b0RvID0+IGNoZWNrRGF0ZSh0b0RvKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbn1cblxudG9kYXlTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICh0b2RheVNlbGVjdC5jaGVja2VkKSB3ZWVrU2VsZWN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbn0pO1xud2Vla1NlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgaWYgKHdlZWtTZWxlY3QuY2hlY2tlZCkgdG9kYXlTZWxlY3QuY2hlY2tlZCA9IGZhbHNlO1xuICAgIHJlZnJlc2hUb0RvcygpO1xufSk7XG5cblxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzKCl7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0Qm94XCIpLmZvckVhY2goZWxlbSA9PiBlbGVtLnJlbW92ZSgpKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGlzcGxheVByb2plY3QocHJvamVjdExpc3RbaV0pO1xuICAgIH1cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdExpc3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0TGlzdCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9Ebyh0b0RvKXtcbiAgICBjb25zdCBkb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvQm94LmlkID0gXCJ0b0RvXCIgKyB0b0RvLmRvTmFtZTtcbiAgICBkb0JveC5jbGFzc0xpc3QuYWRkKFwiZG9Cb3hcIik7XG4gICAgZG9Cb3guY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIgKyB0b0RvLmRvUHJpb3JpdHkpO1xuICAgIGxldCBkb05hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkb05hbWVEaXYudGV4dENvbnRlbnQgPSB0b0RvLmRvTmFtZTtcbiAgICBkb05hbWVEaXYuY2xhc3NMaXN0LmFkZChcInRvRG9OYW1lXCIpO1xuICAgIGRvTmFtZURpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dUb0RvRGV0YWlscyh0b0RvKSk7XG4gICAgbGV0IGRvRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZG9EYXRlXCIpO1xuICAgIGRvRGF0ZURpdi50ZXh0Q29udGVudCA9IG5ldyBEYXRlKHRvRG8uZG9EYXRlKS50b0RhdGVTdHJpbmcoKTtcbiAgICBpZiAodG9Eby5jb21wbGV0ZWQpIGRvTmFtZURpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XG4gICAgZWxzZSBkb05hbWVEaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICBcbiAgICAvL2RlbGV0ZSB0b2RvXG4gICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9Eb0RlbGV0ZVwiKTtcbiAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlVG9Ebyh0b0RvLmlkKTtcbiAgICAgICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgfSk7XG5cbiAgICAvL2VkaXQgdG9kb1xuICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9Eb0VkaXRcIik7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIC8vZGlzcGxheSBzdHVmZlxuICAgICAgICBlZGl0VG9Eb0RldGFpbHModG9Ebyk7XG4gICAgfSk7XG4gICAgLy9jb21wbGV0ZSB0b2RvXG4gICAgbGV0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvRG9Db21wbGV0ZVwiKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IHRvRG8uY29tcGxldGVkID8gXCJVbmRvXCIgOiBcIkNvbXBsZXRlXCI7XG4gICAgY29tcGxldGVCdXR0b24uc3R5bGUubWFyZ2luUmlnaHQgPSAgdG9Eby5jb21wbGV0ZWQgPyBcIjM1cHhcIiA6IFwiNXB4XCI7XG4gICAgY29tcGxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvRG8uY29tcGxldGVkID0gIXRvRG8uY29tcGxldGVkO1xuICAgICAgICBpZiAodG9Eby5jb21wbGV0ZWQpe1xuICAgICAgICAgICAgZG9OYW1lRGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICAgICAgICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJVbmRvXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGRvTmFtZURpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbXBsZXRlXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgfSk7XG5cbiAgICBkb0JveC5hcHBlbmRDaGlsZChkb05hbWVEaXYpO1xuICAgIGRvQm94LmFwcGVuZENoaWxkKGRvRGF0ZURpdik7XG4gICAgZG9Cb3guYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuXG4gICAgZG9Cb3guYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbik7XG4gICAgZG9Cb3guYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcbiAgICBkb0NvbnRhaW5lci5hcHBlbmRDaGlsZChkb0JveCk7XG59XG5cblxuYWRkVG9Eb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsZXQgbmV3VG9Eb0JveCA9IG1ha2VQb3BVcChcIk5ldyBUb0RvLi4uXCIpO1xuICAgIGxldCBmb3JtQm94ID0gbmV3VG9Eb0JveC5wb3BVcGNvbnRlbnQ7XG4gICAgZm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgZm9ybUJveC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxZnIgMWZyIDFmciAxZnJcIlxuICAgIGZvcm1Cb3guc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiMTVweCAyMHB4IDE1cHggMWZyIDQwcHhcIjtcbiAgICBmb3JtQm94LnN0eWxlLmZvbnRTaXplID0gXCIxLjFyZW1cIjtcbiAgICBmb3JtQm94LnN0eWxlLmdhcCA9IFwiNXB4XCI7XG5cbiAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRSb3cgPSBcIjQvNVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvNVwiXG4gICAgbGV0IGFkZFRvRG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZFRvRG9CdXR0b24uc3R5bGUuZ3JpZFJvdyA9IFwiNS82XCI7XG4gICAgYWRkVG9Eb0J1dHRvbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzJcIjtcbiAgICBhZGRUb0RvQnV0dG9uLnN0eWxlLmp1c3RpZnlTZWxmID0gXCJzdGFydFwiO1xuICAgIGFkZFRvRG9CdXR0b24uaW5uZXJIVE1MID0gXCJBZGQgVG9Eb1wiO1xuICAgIGFkZFRvRG9CdXR0b24uc3R5bGUuZm9udFNpemUgPSBcIjEuM3JlbVwiO1xuXG4gICAgbGV0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGxldCBwT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgcE9wdGlvbi52YWx1ZSA9IFwiXCIraTtcbiAgICAgICAgcE9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RMaXN0W2ldLnByb2plY3ROYW1lO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LmFwcGVuZENoaWxkKHBPcHRpb24pO1xuICAgIH1cbiAgICBsZXQgZGF0ZVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBkYXRlU2VsZWN0LnR5cGUgPSBcImRhdGVcIjtcbiAgICBkYXRlU2VsZWN0LnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGxldCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3dQLnZhbHVlID0gXCIxXCI7XG4gICAgbG93UC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgbGV0IG1lZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZFAudmFsdWUgPSBcIjJcIjtcbiAgICBtZWRQLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBsZXQgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2hQLnZhbHVlID0gXCIzXCI7XG4gICAgaGlnaFAudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICBcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChsb3dQKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRQKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChoaWdoUCk7XG5cbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZVwiO1xuICAgIGxldCBwcmlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByaW9MYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRhdGVTZWxlY3QpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGFkZFRvRG9CdXR0b24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChuZXdUb0RvQm94LnBvcEJveCk7XG5cbiAgICBhZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGlmIChuZXdUaXRsZS52YWx1ZSA9PSBudWxsIHx8IG5ld1RpdGxlLnZhbHVlID09IFwiXCIpIHJldHVybjtcbiAgICAgICAgbGV0IG0xID0gdG9kb0ZhY3RvcnkobmV3VGl0bGUudmFsdWUsIHByb2plY3RMaXN0W3Byb2plY3RTZWxlY3QudmFsdWVdLCBkYXRlU2VsZWN0LnZhbHVlQXNEYXRlLCBuZXdEZXNjcmlwdGlvbi52YWx1ZSwgZmFsc2UsIHByaW9yaXR5U2VsZWN0LnZhbHVlKTtcbiAgICAgICAgYWRkVG9EbyhtMSk7XG4gICAgICAgIHJlZnJlc2hUb0RvcygpO1xuICAgICAgICBjbG9zZVB1cFVwKCk7XG4gICAgfSk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGxheVByb2plY3QocHJvamVjdCl7XG4gICAgY29uc3QgcHJvamVjdEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RCb3guaWQgPSBcInByb2plY3RcIiArIHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdEJveFwiKTtcbiAgICBsZXQgcHJvamVjdEZvY3VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdEZvY3VzLnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0Rm9jdXMuY2xhc3NMaXN0LmFkZChcInByb2plY3ROYW1lXCIpO1xuXG4gICAgcHJvamVjdEZvY3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gcHJvamVjdC5pZCl7XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gbnVsbDtcbiAgICAgICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RCb3hcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGlmIChhY3RpdmVQcm9qZWN0ICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxldCBvbGQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYWN0aXZlUHJvamVjdEJveFwiKVswXTtcbiAgICAgICAgICAgICAgICBvbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVByb2plY3RCb3hcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdC5pZDtcbiAgICAgICAgICAgIHByb2plY3RCb3guY2xhc3NMaXN0LmFkZChcImFjdGl2ZVByb2plY3RCb3hcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgfSk7XG5cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0RGVsZXRlXCIpO1xuICAgIFxuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGVsZXRlUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgfSk7XG4gICAgXG4gICAgbGV0IGRlc2NyaXB0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgYnV0dG9uYCk7XG4gICAgXG4gICAgZGVzY3JpcHRpb25CdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3REZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9IFwiP1wiO1xuICAgIGRlc2NyaXB0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25Cb3ggPSBtYWtlUG9wVXAocHJvamVjdC5wcm9qZWN0TmFtZSk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkNvbnRlbnQgPSBkZXNjcmlwdGlvbkJveC5wb3BVcGNvbnRlbnQ7XG4gICAgICAgIGRlc2NyaXB0aW9uQ29udGVudC50ZXh0Q29udGVudCA9IHByb2plY3QucHJvamVjdERlc2NyaXB0aW9uO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uQm94LnBvcEJveCk7XG4gICAgfSk7XG5cbiAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKHByb2plY3RGb2N1cyk7XG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25CdXR0b24pO1xuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEJveCk7XG59XG5cblxuXG5hZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgbGV0IG5ld1Byb2plY3RCb3ggPSBtYWtlUG9wVXAoXCJOZXcgUHJvamVjdC4uLlwiKTtcbiAgICBsZXQgZm9ybUJveCA9IG5ld1Byb2plY3RCb3gucG9wVXBjb250ZW50O1xuXG4gICAgZm9ybUJveC5zdHlsZS5mb250U2l6ZSA9IFwiMS4zcmVtXCI7XG4gICAgZm9ybUJveC5zdHlsZS5nYXAgPSBcIjEwcHhcIjtcbiAgICBmb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBmb3JtQm94LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuIFxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVMYWJlbC5zdHlsZS5mb250U2l6ZSA9IFwiMS4xcmVtXCI7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBUaXRsZTogXCI7XG4gICAgbGV0IG5ld1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIG5ld1RpdGxlLnR5cGUgPSBcInRleHRcIjtcbiAgICBsZXQgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB0aXRsZUNvbnRhaW5lci5zdHlsZS5nYXAgPSBcIjVweFwiO1xuICAgIGxldCBkZXNjTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjTGFiZWwuc3R5bGUuZm9udFNpemUgPSBcIjEuMXJlbVwiO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJvamVjdCBEZXNjcmlwdGlvbjpcIjtcbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUucmVzaXplID0gXCJub25lXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPSBcIjc1JVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLm1hcmdpblRvcCA9IFwiLTVweFwiXG4gICAgbGV0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5zdHlsZS5hbGlnblNlbGYgPSBcInN0YXJ0XCI7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRlc2NMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdEZXNjcmlwdGlvbik7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnV0dG9uKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCb3gucG9wQm94KTtcbiAgICBcblxuICAgIGFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgaWYgKG5ld1RpdGxlLnZhbHVlID09IG51bGwgfHwgbmV3VGl0bGUudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xuICAgICAgICBsZXQgbTEgPSBwcm9qZWN0RmFjdG9yeShuZXdUaXRsZS52YWx1ZSwgbmV3RGVzY3JpcHRpb24udmFsdWUpO1xuICAgICAgICBhZGRQcm9qZWN0KG0xKTtcbiAgICAgICAgcmVmcmVzaFByb2plY3RzKCk7XG4gICAgICAgIGNsb3NlUHVwVXAoKTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBlZGl0VG9Eb0RldGFpbHModG9Ebyl7XG4gICAgbGV0IGVkaXRUb0RvQm94ID0gbWFrZVBvcFVwKFwiRWRpdDogXCIgKyB0b0RvLmRvTmFtZSk7XG4gICAgbGV0IGZvcm1Cb3ggPSBlZGl0VG9Eb0JveC5wb3BVcGNvbnRlbnQ7XG4gICAgZm9ybUJveC5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XG4gICAgZm9ybUJveC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCIxZnIgMWZyIDFmciAxZnJcIlxuICAgIGZvcm1Cb3guc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IFwiMTVweCAyMHB4IDE1cHggMWZyIDQwcHhcIjtcbiAgICBmb3JtQm94LnN0eWxlLmZvbnRTaXplID0gXCIxLjFyZW1cIjtcbiAgICBmb3JtQm94LnN0eWxlLmdhcCA9IFwiNXB4XCI7XG5cbiAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIG5ld1RpdGxlLnZhbHVlID0gdG9Eby5kb05hbWU7XG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnZhbHVlID0gdG9Eby5kb0Rlc2NyaXA7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUucmVzaXplID0gXCJub25lXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUud2lkdGggPSBcIjEwMCVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5oZWlnaHQgPSBcIjEwMCVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5ncmlkUm93ID0gXCI0LzVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzVcIlxuICAgIGxldCBlZGl0VG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdFRvRG9CdXR0b24uc3R5bGUuZ3JpZFJvdyA9IFwiNS82XCI7XG4gICAgZWRpdFRvRG9CdXR0b24uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS8yXCI7XG4gICAgZWRpdFRvRG9CdXR0b24uc3R5bGUuanVzdGlmeVNlbGYgPSBcInN0YXJ0XCI7XG4gICAgZWRpdFRvRG9CdXR0b24uaW5uZXJIVE1MID0gXCJTYXZlIENoYW5nZXNcIjtcbiAgICBlZGl0VG9Eb0J1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMS4zcmVtXCI7XG5cbiAgICBsZXQgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHBPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwT3B0aW9uLnZhbHVlID0gXCJcIitpO1xuICAgICAgICBwT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocE9wdGlvbik7XG4gICAgfVxuICAgIGxldCBkYXRlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVTZWxlY3QudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVTZWxlY3QudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSh0b0RvLmRvRGF0ZSk7XG4gICAgbGV0IHByaW9yaXR5U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICBsZXQgb2xkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb2xkUC52YWx1ZSA9IHRvRG8uZG9Qcmlvcml0eTtcbiAgICBvbGRQLnRleHRDb250ZW50ID0gXCIgICAgIFwiO1xuICAgIGxldCBsb3dQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBsb3dQLnZhbHVlID0gXCIxXCI7XG4gICAgbG93UC50ZXh0Q29udGVudCA9IFwiTG93XCI7XG4gICAgbGV0IG1lZFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZFAudmFsdWUgPSBcIjJcIjtcbiAgICBtZWRQLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbiAgICBsZXQgaGlnaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGhpZ2hQLnZhbHVlID0gXCIzXCI7XG4gICAgaGlnaFAudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbiAgICBcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChvbGRQKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChsb3dQKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChtZWRQKTtcbiAgICBwcmlvcml0eVNlbGVjdC5hcHBlbmRDaGlsZChoaWdoUCk7XG5cbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWVcIjtcbiAgICBsZXQgcHJvamVjdExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcHJvamVjdExhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0XCI7XG4gICAgbGV0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZVwiO1xuICAgIGxldCBwcmlvTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcmlvTGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5XCI7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NMYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb25cIjtcblxuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qZWN0TGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByaW9MYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChuZXdUaXRsZSk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcm9qZWN0U2VsZWN0KTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGRhdGVTZWxlY3QpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJpb3JpdHlTZWxlY3QpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGVkaXRUb0RvQnV0dG9uKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWRpdFRvRG9Cb3gucG9wQm94KTtcblxuICAgIGVkaXRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgIGlmIChuZXdUaXRsZS52YWx1ZSA9PSBudWxsIHx8IG5ld1RpdGxlLnZhbHVlID09IFwiXCIpIHJldHVybjtcbiAgICAgICAgdG9Eby5kb05hbWUgPSBuZXdUaXRsZS52YWx1ZTtcbiAgICAgICAgdG9Eby5kb1Byb2plY3QgPSBwcm9qZWN0TGlzdFtwcm9qZWN0U2VsZWN0LnZhbHVlXTtcbiAgICAgICAgdG9Eby5kb0RhdGUgPSBkYXRlU2VsZWN0LnZhbHVlQXNEYXRlO1xuICAgICAgICB0b0RvLmRvRGVzY3JpcCA9IG5ld0Rlc2NyaXB0aW9uLnZhbHVlO1xuICAgICAgICB0b0RvLmRvUHJpb3JpdHkgPSBwcmlvcml0eVNlbGVjdC52YWx1ZTtcbiAgICAgICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgICAgIGNsb3NlUHVwVXAoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2hvd1RvRG9EZXRhaWxzKHRvRG8pe1xuICAgIGxldCBkZXRhaWxzQm94ID0gbWFrZVBvcFVwKHRvRG8uZG9OYW1lKTtcbiAgICBsZXQgaW5mb0JveCA9IGRldGFpbHNCb3gucG9wVXBjb250ZW50O1xuICAgIGluZm9Cb3guc3R5bGUuZm9udFNpemUgPSBcIjEuMnJlbVwiO1xuICAgIGluZm9Cb3guc3R5bGUubGluZUhlaWdodCA9IFwiMS4ycmVtXCI7XG4gICAgbGV0IHByb2plY3ROYW1lID0gdG9Eby5kb1Byb2plY3QucHJvamVjdE5hbWUgPT0gJ05PTkUnID8gXCJcIiA6IFwiUHJvamVjdDogXCIgKyB0b0RvLmRvUHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBsZXQgc2hvd0RhdGUgPW5ldyBEYXRlKHRvRG8uZG9EYXRlKTtcbiAgICBpbmZvQm94LmlubmVySFRNTCA9IGA8cD4ke3Byb2plY3ROYW1lfTwvcD5cbiAgICA8cD5Qcmlvcml0eTogJHt0b0RvLmRvUHJpb3JpdHl9PC9wPlxuICAgIDxwPkR1ZSBEYXRlOiAke3Nob3dEYXRlLnRvRGF0ZVN0cmluZygpfTwvcD5cbiAgICA8YnI+XG4gICAgPHA+RGVzY3JpcHRpb246ICR7dG9Eby5kb0Rlc2NyaXB9PC9wPmA7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRldGFpbHNCb3gucG9wQm94KTtcbn1cblxuXG5cbmxvYWRTdG9yYWdlKCk7XG5yZWZyZXNoUHJvamVjdHMoKTtcbnJlZnJlc2hUb0RvcygpO1xuXG5pZiAocHJvamVjdExpc3QubGVuZ3RoID09IDEgJiYgdG9Eb0xpc3QubGVuZ3RoID09IDApIHBvcHVsYXRlKCk7XG5cbmZ1bmN0aW9uIHBvcHVsYXRlKCl7XG4gICAgbGV0IHBybzEgPSBwcm9qZWN0RmFjdG9yeShcIlByb2dyYW1taW5nXCIsIFwidHJ5aW5nIHRvIGxlYXJuIHRvIHByb2dyYW1cIik7XG4gICAgbGV0IHBybzIgPSBwcm9qZWN0RmFjdG9yeShcIldlYiBEZXNpZ25cIiwgXCJjYW50IHJlYWxseSBjYWxsIHRoaXMgcHJvZ3JhbW1pbmdcIik7XG4gICAgbGV0IHBybzMgPSBwcm9qZWN0RmFjdG9yeShcIkFsZ29yaXRobXNcIiwgXCJvcmRvIG5vdGF0aW9uIGFuZCBzdHVmZlwiKTtcbiAgICBhZGRQcm9qZWN0KHBybzEpO1xuICAgIGFkZFByb2plY3QocHJvMik7XG4gICAgYWRkUHJvamVjdChwcm8zKTtcbiAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICBsZXQgcCA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGsgPSBuZXcgRGF0ZSgpO1xuICAgIGsuc2V0RGF0ZShwLmdldERhdGUoKSArNClcblxuICAgIGxldCBtID0gdG9kb0ZhY3RvcnkoXCJ0ZXN0aW5nMVwiLCBwcm8xLCBwLCBcImRvIHN0dWZmXCIsIGZhbHNlLCAzKTtcbiAgICBsZXQgcyA9IHRvZG9GYWN0b3J5KFwidGVzdGluZzJcIiwgcHJvMiwgaywgXCJkbyBzdHVmZmFzZmRkc2RzZnNkICBzZGZnc2RmZyBzZGdmIGdzIGRnZiBmZ2RzZmdkc2dzICBnIGdnIGRmcyBnZGZzZyBmZHNnIGZzZCBnZmQgZyBnZmRmZyBzZGcgZGZzIGZnZHMgZ2Zkc2cgZnNkIGdmZHNnIGZkc2cgZmRzIGdmZHNnIHNnIGZkc2cgZmRzZyBmIGdkZnMgZ2ZkcyBnZGZzIGdkc2YgZ2Zkc2dkZnNmYWRzZmFcIiwgZmFsc2UsIDEpO1xuICAgIGxldCBvID0gdG9kb0ZhY3RvcnkoXCJ0ZXN0aW5nM1wiLCBwcm8zLCBwLCBcImRvIHN0dWZmXCIsIGZhbHNlLCAyKTtcblxuICAgIGFkZFRvRG8obSk7XG4gICAgYWRkVG9EbyhzKTtcbiAgICBhZGRUb0RvKG8pO1xuICAgIHJlZnJlc2hUb0RvcygpO1xufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=