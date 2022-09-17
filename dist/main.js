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


function refreshProjects(){
    document.querySelectorAll(".projectBox").forEach(elem => elem.remove());
    for (let i = 1; i < _todo__WEBPACK_IMPORTED_MODULE_0__.projectList.length; i++){
        displayProject(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList[i]);
    }
    localStorage.setItem('projectList', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.projectList));
    localStorage.setItem('idSeed', JSON.stringify(_todo__WEBPACK_IMPORTED_MODULE_0__.idSeed));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0Esa0RBQWtELHFDQUFxQywrQkFBK0Isc0NBQXNDLGdDQUFnQyxnREFBZ0QsNENBQTRDLHlDQUF5Qyw0Q0FBNEMsOEJBQThCLHdDQUF3QyxzQ0FBc0MscUNBQXFDLEdBQUcsT0FBTyxrQkFBa0IsbUJBQW1CLHlDQUF5Qyw2QkFBNkIsR0FBRyxZQUFZLHFCQUFxQixpQ0FBaUMsaUJBQWlCLGVBQWUsa0JBQWtCLG9CQUFvQixxQkFBcUIsR0FBRyxZQUFZLG1DQUFtQyxHQUFHLDRCQUE0QixvQ0FBb0MsR0FBRyxhQUFhLHdCQUF3Qix1QkFBdUIsMEJBQTBCLHdCQUF3QixHQUFHLGtCQUFrQixvQkFBb0Isc0RBQXNELDhCQUE4Qix3QkFBd0IsZUFBZSxHQUFHLHFCQUFxQiw0Q0FBNEMscUNBQXFDLG9CQUFvQiwwQkFBMEIsOEJBQThCLEdBQUcscUJBQXFCLGlCQUFpQixHQUFHLHFCQUFxQix3QkFBd0IsbURBQW1ELHlCQUF5QixzQkFBc0IsR0FBRyxXQUFXLDRDQUE0QyxvQkFBb0IsZ0NBQWdDLDBCQUEwQixnQkFBZ0IsNkJBQTZCLG1DQUFtQyxpREFBaUQseUJBQXlCLGlDQUFpQyxpREFBaUQsa0NBQWtDLHdDQUF3QyxLQUFLLGlCQUFpQixpREFBaUQsK0NBQStDLEdBQUcsZUFBZSx1Q0FBdUMsR0FBRyxlQUFlLHVDQUF1QyxHQUFHLHNCQUFzQix5QkFBeUIsS0FBSyxpQkFBaUIscUNBQXFDLDRDQUE0QyxxQ0FBcUMseUJBQXlCLHNCQUFzQiw2QkFBNkIsb0JBQW9CLHlCQUF5QixpQkFBaUIsaURBQWlELG9CQUFvQiw2QkFBNkIsZ0JBQWdCLHFDQUFxQyxHQUFHLHdCQUF3QixxQ0FBcUMsR0FBRyxtQkFBbUIsd0JBQXdCLHdCQUF3QixHQUFHLGlCQUFpQix3QkFBd0Isb0JBQW9CLDZCQUE2QixtQkFBbUIsR0FBRyxnQkFBZ0IsdUJBQXVCLG9CQUFvQixxQ0FBcUMsNkJBQTZCLGdCQUFnQixHQUFHLGtCQUFrQix3QkFBd0Isd0JBQXdCLHNCQUFzQixHQUFHLGlCQUFpQix5QkFBeUIsR0FBRyxzQkFBc0IscURBQXFELHdCQUF3QixHQUFHLHNCQUFzQixxREFBcUQsd0JBQXdCLEdBQUcsd0JBQXdCLGtCQUFrQiwwQkFBMEIsZ0RBQWdELEdBQUcsY0FBYyxnREFBZ0QscUNBQXFDLGlCQUFpQiwyQ0FBMkMsb0NBQW9DLEdBQUcsZ0JBQWdCLG9DQUFvQyxHQUFHLDhCQUE4QixrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLCtCQUErQixvQkFBb0IsNkJBQTZCLHlCQUF5QixnQkFBZ0IsR0FBRyxjQUFjLHNCQUFzQixHQUFHLHVCQUF1Qix3QkFBd0Isd0JBQXdCLHdCQUF3QixLQUFLLHFDQUFxQyx3QkFBd0IsR0FBRyw2Q0FBNkMscURBQXFELHdCQUF3QixHQUFHLGlCQUFpQiw0RUFBNEUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGtDQUFrQyxxQ0FBcUMsK0JBQStCLHNDQUFzQyxnQ0FBZ0MsZ0RBQWdELDRDQUE0Qyx5Q0FBeUMsNENBQTRDLDhCQUE4Qix3Q0FBd0Msc0NBQXNDLHFDQUFxQyxHQUFHLE9BQU8sa0JBQWtCLG1CQUFtQix5Q0FBeUMsNkJBQTZCLEdBQUcsWUFBWSxxQkFBcUIsaUNBQWlDLGlCQUFpQixlQUFlLGtCQUFrQixvQkFBb0IscUJBQXFCLEdBQUcsWUFBWSxtQ0FBbUMsR0FBRyw0QkFBNEIsb0NBQW9DLEdBQUcsYUFBYSx3QkFBd0IsdUJBQXVCLDBCQUEwQix3QkFBd0IsR0FBRyxrQkFBa0Isb0JBQW9CLHNEQUFzRCw4QkFBOEIsd0JBQXdCLGVBQWUsR0FBRyxxQkFBcUIsNENBQTRDLHFDQUFxQyxvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLHFCQUFxQixpQkFBaUIsR0FBRyxxQkFBcUIsd0JBQXdCLG1EQUFtRCx5QkFBeUIsc0JBQXNCLEdBQUcsV0FBVyw0Q0FBNEMsb0JBQW9CLGdDQUFnQywwQkFBMEIsZ0JBQWdCLDZCQUE2QixtQ0FBbUMsaURBQWlELHlCQUF5QixpQ0FBaUMsaURBQWlELGtDQUFrQyx3Q0FBd0MsS0FBSyxpQkFBaUIsaURBQWlELCtDQUErQyxHQUFHLGVBQWUsdUNBQXVDLEdBQUcsZUFBZSx1Q0FBdUMsR0FBRyxzQkFBc0IseUJBQXlCLEtBQUssaUJBQWlCLHFDQUFxQyw0Q0FBNEMscUNBQXFDLHlCQUF5QixzQkFBc0IsNkJBQTZCLG9CQUFvQix5QkFBeUIsaUJBQWlCLGlEQUFpRCxvQkFBb0IsNkJBQTZCLGdCQUFnQixxQ0FBcUMsR0FBRyx3QkFBd0IscUNBQXFDLEdBQUcsbUJBQW1CLHdCQUF3Qix3QkFBd0IsR0FBRyxpQkFBaUIsd0JBQXdCLG9CQUFvQiw2QkFBNkIsbUJBQW1CLEdBQUcsZ0JBQWdCLHVCQUF1QixvQkFBb0IscUNBQXFDLDZCQUE2QixnQkFBZ0IsR0FBRyxrQkFBa0Isd0JBQXdCLHdCQUF3QixzQkFBc0IsR0FBRyxpQkFBaUIseUJBQXlCLEdBQUcsc0JBQXNCLHFEQUFxRCx3QkFBd0IsR0FBRyxzQkFBc0IscURBQXFELHdCQUF3QixHQUFHLHdCQUF3QixrQkFBa0IsMEJBQTBCLGdEQUFnRCxHQUFHLGNBQWMsZ0RBQWdELHFDQUFxQyxpQkFBaUIsMkNBQTJDLG9DQUFvQyxHQUFHLGdCQUFnQixvQ0FBb0MsR0FBRyw4QkFBOEIsa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQiwrQkFBK0Isb0JBQW9CLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLEdBQUcsY0FBYyxzQkFBc0IsR0FBRyx1QkFBdUIsd0JBQXdCLHdCQUF3Qix3QkFBd0IsS0FBSyxxQ0FBcUMsd0JBQXdCLEdBQUcsNkNBQTZDLHFEQUFxRCx3QkFBd0IsR0FBRyw2QkFBNkI7QUFDMzRVO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscURBQXFEO0FBQ3JEOztBQUVBO0FBQ0EsZ0RBQWdEO0FBQ2hEOztBQUVBO0FBQ0EscUZBQXFGO0FBQ3JGOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQkEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTs7QUFFYjs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1ZhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTs7QUFFakY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEQ7O0FBRXJEO0FBQ1AsSUFBSSw0REFBVztBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsYUFBYTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQSxJQUFJLDhEQUFhO0FBQ2pCOzs7Ozs7Ozs7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGdEQUFnRCxzQ0FBc0M7QUFDakg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0RBQWdELHNDQUFzQztBQUNqSCwwQkFBMEIsWUFBWTtBQUN0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCTzs7QUFFQTtBQUNBOztBQUVBO0FBQ1A7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFTztBQUNQO0FBQ0EsWUFBWTtBQUNaOztBQUVPO0FBQ1A7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDcERBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0ErSTtBQUNqRzs7QUFFekI7O0FBRXJCO0FBQ0EscUJBQXFCLHFEQUFjO0FBQ25DLGlEQUFVOztBQUVWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFhO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IsbURBQWdCO0FBQy9DLFNBQVMsa0RBQWU7QUFDeEIsb0RBQW9ELDJDQUFRO0FBQzVELGtEQUFrRCx5Q0FBTTtBQUN4RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBLG9CQUFvQixJQUFJLHFEQUFrQixFQUFFO0FBQzVDLHVCQUF1Qiw4Q0FBVztBQUNsQztBQUNBLHVEQUF1RCw4Q0FBVztBQUNsRSxrREFBa0QseUNBQU07QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQVU7QUFDbEI7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EscUJBQXFCLGlEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixJQUFJLHFEQUFrQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSw4QkFBOEIsOENBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCLGtEQUFXLGlCQUFpQiw4Q0FBVztBQUN4RCxRQUFRLDhDQUFPO0FBQ2Y7QUFDQSxRQUFRLGtEQUFVO0FBQ2xCLEtBQUs7QUFDTCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixpREFBUztBQUN0QztBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLHdCQUF3QixpREFBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIscURBQWM7QUFDL0IsUUFBUSxpREFBVTtBQUNsQjtBQUNBLFFBQVEsa0RBQVU7QUFDbEIsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQSxzQkFBc0IsaURBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQixJQUFJLHFEQUFrQixFQUFFO0FBQzVDO0FBQ0E7QUFDQSw4QkFBOEIsOENBQVc7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVU7QUFDbEIsS0FBSztBQUNMOztBQUVBO0FBQ0EscUJBQXFCLGlEQUFTO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTtBQUMxQyxtQkFBbUIsZ0JBQWdCO0FBQ25DLG1CQUFtQix3QkFBd0I7QUFDM0M7QUFDQSxzQkFBc0IsZUFBZTs7QUFFckM7QUFDQTs7OztBQUlBLGtEQUFXO0FBQ1g7QUFDQTs7QUFFQSxJQUFJLHFEQUFrQixTQUFTLGtEQUFlOztBQUU5QztBQUNBLGVBQWUscURBQWM7QUFDN0IsZUFBZSxxREFBYztBQUM3QixlQUFlLHFEQUFjO0FBQzdCLElBQUksaURBQVU7QUFDZCxJQUFJLGlEQUFVO0FBQ2QsSUFBSSxpREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFlBQVksa0RBQVc7QUFDdkIsWUFBWSxrREFBVztBQUN2QixZQUFZLGtEQUFXOztBQUV2QixJQUFJLDhDQUFPO0FBQ1gsSUFBSSw4Q0FBTztBQUNYLElBQUksOENBQU87QUFDWDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3BvcHVwLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvc2NyZWVuYmxvY2suanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG46cm9vdHtcXG4gICAgLS1oZWFkZXJDb2xvcjogcmdiKDg3LCAxMiwgODcpO1xcbiAgICAtLWhlYWRlclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tc2lkZWJhckNvbG9yOiByZ2IoODgsIDEwLCA4OCk7XFxuICAgIC0tc2lkZWJhclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tY29udGFpbmVyQmFja2dyb3VuZDogcmdiKDE0MSwgMTE0LCAxNTYpO1xcbiAgICAtLXBvcHVwQmFja2dyb3VuZDogcmdiKDIwNiwgMTg3LCAyMTYpO1xcblxcbiAgICAtLWRvQm94Q29sb3I6IHJnYigyMjAsIDIwMCwgMjIwKTtcXG4gICAgLS1kb0JveEhvdmVyQ29sb3I6IHJnYigyNTUsIDIzNSwgMjU1KTtcXG4gICAgLS1kb0JveFRleHRDb2xvcjogYmxhY2s7XFxuXFxuICAgIC0taGlnaFByaW9yaXR5OiByZ2IoMjU1LCAwLCA1MCk7XFxuICAgIC0tbWlkUHJpb3JpdHk6IHJnYigyNTUsIDIwNSwgMCk7XFxuICAgIC0tbG93UHJpb3JpdHk6IHJnYigwLCAyMzUsIDUwKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi5kb0RhdGV7XFxuICAgIGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcik7XFxufVxcblxcbiNhZGRUb0RvLCAjcHJvamVjdGFkZGVye1xcbiAgICBjb2xvcjp2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI2FkZFRvRG97XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvcGNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBtaW5tYXgoNTAwcHgsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiAwcHg7XFxufVxcblxcblxcbiNsb2dvQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4jdGFza2NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lckJhY2tncm91bmQpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG59XFxuXFxuLmRvQm94e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveENvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHZhcigtLWhpZ2hQcmlvcml0eSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiA1cHggMTVweCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxufVxcblxcbi5kb0JveDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveEhvdmVyQ29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHkye1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1pZFByaW9yaXR5KTtcXG59XFxuXFxuLnByaW9yaXR5MXtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi5kb0JveCAudG9Eb05hbWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxufVxcblxcbiNsZWZ0U2lkZWJhcntcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsZWZ0U2lkZWJhciBidXR0b257XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3Byb2plY3RIZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEJveHtcXG4gICAgcGFkZGluZzogMHB4IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0YWRkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdE5hbWV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3RCb3g6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdEJveHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5wcm9qZWN0Qm94OjpiZWZvcmV7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3BvcFVwQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tcG9wdXBCYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKVxcbn1cXG5cXG4jcG9wVXBIZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHRDb2xvcik7XFxufVxcblxcbiNwb3BVcENsb3Nle1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXG59XFxuXFxuI3RvZGF5U2VsZWN0LCAjd2Vla1NlbGVjdHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RpbWVzZWxlY3RvcntcXG4gICAgbWFyZ2luOiA1cHggMHB4IDE1cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxubGFiZWx7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWx7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcblxcblxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0lBQ0ksOEJBQThCO0lBQzlCLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLHlDQUF5QztJQUN6QyxxQ0FBcUM7O0lBRXJDLGdDQUFnQztJQUNoQyxxQ0FBcUM7SUFDckMsdUJBQXVCOztJQUV2QiwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLHNCQUFzQjtBQUMxQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQiw0QkFBNEI7Q0FDNUIsWUFBWTtDQUNaLFVBQVU7Q0FDVixhQUFhO0NBQ2IsZUFBZTtDQUNmLGdCQUFnQjtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0MsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixRQUFRO0FBQ1o7OztBQUdBO0lBQ0kscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtHQUNHLFdBQVc7QUFDZDs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQiwwQ0FBMEM7SUFDMUMsMkJBQTJCO0lBQzNCLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSwwQ0FBMEM7SUFDMUMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixxQ0FBcUM7SUFDckMsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4Q0FBOEM7SUFDOUMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztBQUNiOzs7O0FBSUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksOENBQThDO0lBQzlDLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJcXG46cm9vdHtcXG4gICAgLS1oZWFkZXJDb2xvcjogcmdiKDg3LCAxMiwgODcpO1xcbiAgICAtLWhlYWRlclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tc2lkZWJhckNvbG9yOiByZ2IoODgsIDEwLCA4OCk7XFxuICAgIC0tc2lkZWJhclRleHRDb2xvcjogd2hpdGU7XFxuICAgIC0tY29udGFpbmVyQmFja2dyb3VuZDogcmdiKDE0MSwgMTE0LCAxNTYpO1xcbiAgICAtLXBvcHVwQmFja2dyb3VuZDogcmdiKDIwNiwgMTg3LCAyMTYpO1xcblxcbiAgICAtLWRvQm94Q29sb3I6IHJnYigyMjAsIDIwMCwgMjIwKTtcXG4gICAgLS1kb0JveEhvdmVyQ29sb3I6IHJnYigyNTUsIDIzNSwgMjU1KTtcXG4gICAgLS1kb0JveFRleHRDb2xvcjogYmxhY2s7XFxuXFxuICAgIC0taGlnaFByaW9yaXR5OiByZ2IoMjU1LCAwLCA1MCk7XFxuICAgIC0tbWlkUHJpb3JpdHk6IHJnYigyNTUsIDIwNSwgMCk7XFxuICAgIC0tbG93UHJpb3JpdHk6IHJnYigwLCAyMzUsIDUwKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJ1dHRvbiB7XFxuXFx0YmFja2dyb3VuZDogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tZG9Cb3hUZXh0Q29sb3IpO1xcblxcdGJvcmRlcjogbm9uZTtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdG91dGxpbmU6IGluaGVyaXQ7XFxufVxcblxcbi5kb0RhdGV7XFxuICAgIGNvbG9yOiB2YXIoLS1kb0JveFRleHRDb2xvcik7XFxufVxcblxcbiNhZGRUb0RvLCAjcHJvamVjdGFkZGVye1xcbiAgICBjb2xvcjp2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI2FkZFRvRG97XFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3RvcGNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCBtaW5tYXgoNTAwcHgsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgZ2FwOiAwcHg7XFxufVxcblxcblxcbiNsb2dvQ29udGFpbmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jbGVmdFNpZGViYXIgaW1ne1xcbiAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5cXG4jdGFza2NvbnRhaW5lcntcXG4gICAgcGFkZGluZzogMTBweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhaW5lckJhY2tncm91bmQpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAgIGdyaWQtcm93OiAxIC8gNDtcXG59XFxuXFxuLmRvQm94e1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveENvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xcbiAgICBib3JkZXItbGVmdDogN3B4IHNvbGlkIHZhcigtLWhpZ2hQcmlvcml0eSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgbWFyZ2luOiA1cHggMTVweCAxMHB4IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuXFxufVxcblxcbi5kb0JveDpob3ZlcntcXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kb0JveEhvdmVyQ29sb3IpO1xcbn1cXG5cXG4ucHJpb3JpdHkye1xcbiAgICBib3JkZXItY29sb3I6IHZhcigtLW1pZFByaW9yaXR5KTtcXG59XFxuXFxuLnByaW9yaXR5MXtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1sb3dQcmlvcml0eSk7XFxufVxcblxcbi5kb0JveCAudG9Eb05hbWUge1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuXFxufVxcblxcbiNsZWZ0U2lkZWJhcntcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyQ29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDI7XFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiNsZWZ0U2lkZWJhciBidXR0b257XFxuICAgIGNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3Byb2plY3RIZWFkZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuI3Byb2plY3RMaXN0e1xcbiAgICBtYXJnaW46IDEwcHggMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdEJveHtcXG4gICAgcGFkZGluZzogMHB4IDZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgY29sb3I6IHZhcigtLXNpZGViYXJUZXh0Q29sb3IpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0YWRkZXJ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbn1cXG5cXG4ucHJvamVjdE5hbWV7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLnByb2plY3RCb3g6aG92ZXJ7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgdmFyKC0tc2lkZWJhclRleHRDb2xvcik7XFxuICAgIHBhZGRpbmctbGVmdDogNHB4O1xcbn1cXG5cXG4uYWN0aXZlUHJvamVjdEJveHtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA0cHg7XFxufVxcblxcbi5wcm9qZWN0Qm94OjpiZWZvcmV7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG59XFxuXFxuI3BvcFVwQm94e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoIC0tcG9wdXBCYWNrZ3JvdW5kKTtcXG4gICAgY29sb3I6IHZhcigtLWRvQm94VGV4dENvbG9yKVxcbn1cXG5cXG4jcG9wVXBIZWFkZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhlYWRlckNvbG9yKTtcXG4gICAgY29sb3I6IHZhcigtLWhlYWRlclRleHRDb2xvcik7XFxufVxcblxcbiNwb3BVcENsb3Nle1xcbiAgICBjb2xvcjogdmFyKC0taGVhZGVyVGV4dENvbG9yKTtcXG59XFxuXFxuI3RvZGF5U2VsZWN0LCAjd2Vla1NlbGVjdHtcXG4gICAgb3BhY2l0eTogMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RpbWVzZWxlY3RvcntcXG4gICAgbWFyZ2luOiA1cHggMHB4IDE1cHggMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuXFxuXFxubGFiZWx7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2xlZnRTaWRlYmFyIGxhYmVse1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcblxcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdICsgbGFiZWx7XFxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbHtcXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB2YXIoLS1zaWRlYmFyVGV4dENvbG9yKTtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxufVxcblxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHtibG9ja1NjcmVlbiwgdW5CbG9ja1NjcmVlbn0gZnJvbSAnLi9zY3JlZW5ibG9jay5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWtlUG9wVXAodGl0bGUsIGJsb2NrSW5kZXggPSAxMDApe1xuICAgIGJsb2NrU2NyZWVuKGJsb2NrSW5kZXgpO1xuICAgIGxldCBwb3BCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb3BCb3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwb3BVcEJveFwiKTtcbiAgICBwb3BCb3guc3R5bGUubWluV2lkdGggPSBcIjYwMHB4XCI7XG4gICAgcG9wQm94LnN0eWxlLm1pbkhlaWdodCA9IFwiNDAwcHhcIjtcbiAgICBwb3BCb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHBvcEJveC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICBwb3BCb3guc3R5bGUud2lkdGggPSBcIjUwJVwiO1xuICAgIHBvcEJveC5zdHlsZS5oZWlnaHQgPSBcIjYwJVwiO1xuICAgIHBvcEJveC5zdHlsZS56SW5kZXggPSBgJHtibG9ja0luZGV4KzF9YDtcbiAgICBcbiAgICBwb3BCb3guc3R5bGUudG9wID0gXCI1MCVcIjtcbiAgICBwb3BCb3guc3R5bGUubGVmdCA9IFwiNTAlXCI7XG4gICAgcG9wQm94LnN0eWxlLm1hcmdpblRvcCA9IFwibWluKC0yMDBweCwgLTMwdmgpXCI7XG4gICAgcG9wQm94LnN0eWxlLm1hcmdpbkxlZnQgPSBcIm1pbigtMzAwcHgsIC0yNXZ3KVwiO1xuICAgIHBvcEJveC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICBwb3BCb3guc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHhcIjtcbiAgICBwb3BCb3guc3R5bGUuYm94U2hhZG93ID0gXCI1cHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDVweCAtMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMilcIjtcbiAgICBwb3BCb3guc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgbGV0IHBvcFVwSGVhZGVyID0gbWFrZUJveEhlYWRlcih0aXRsZSk7XG4gICAgbGV0IHBvcFVwY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvcFVwY29udGVudC5zdHlsZS5oZWlnaHQgPSBcIjkwJVwiO1xuICAgIHBvcFVwY29udGVudC5zdHlsZS5wYWRkaW5nID0gXCI4cHggMTVweCA1cHggMTVweFwiO1xuICAgIHBvcEJveC5hcHBlbmRDaGlsZChwb3BVcEhlYWRlcik7XG4gICAgcG9wQm94LmFwcGVuZENoaWxkKHBvcFVwY29udGVudCk7XG4gICAgcmV0dXJuIHtwb3BCb3gsIHBvcFVwSGVhZGVyLCBwb3BVcGNvbnRlbnR9O1xufVxuXG5mdW5jdGlvbiBtYWtlQm94SGVhZGVyKGhlYWRUaXRsZSl7XG4gICAgbGV0IGJveEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYm94SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicG9wVXBIZWFkZXJcIik7XG4gICAgYm94SGVhZGVyLnN0eWxlLmhlaWdodCA9IFwiMTAlXCI7XG4gICAgYm94SGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBib3hIZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgICBib3hIZWFkZXIuc3R5bGUucGFkZGluZyA9IFwiMHB4IDEycHggMHB4IDEycHhcIjtcbiAgICBib3hIZWFkZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI2cHggNnB4IDBweCAwcHhcIjtcbiAgICBib3hIZWFkZXIuc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5saW5lSGVpZ2h0ID0gXCJtYXgoNnZoLCA0MHB4KVwiO1xuICAgIGJveEhlYWRlci5zdHlsZS5mb250U2l6ZSA9IFwibWF4KDR2aCwgMzBweClcIjtcblxuICAgIGxldCBoZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGhlYWRUaXRsZTtcbiAgICBoZWFkZXJUZXh0Lm1hcmdpblJpZ2h0ID0gXCJhdXRvXCI7XG5cbiAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInBvcFVwQ2xvc2VcIik7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNsb3NlUHVwVXAoKSk7XG4gXG4gICAgYm94SGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgIGJveEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgcmV0dXJuIGJveEhlYWRlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb3NlUHVwVXAoKXtcbiAgICBsZXQgcG9wVXBCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBvcFVwQm94XCIpO1xuICAgIHBvcFVwQm94LnJlbW92ZSgpO1xuICAgIHVuQmxvY2tTY3JlZW4oKTtcbn0iLCJmdW5jdGlvbiBibG9ja1NjcmVlbih6SW5kZXgpe1xuICAgIGxldCBrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2NrZXJcIik7XG4gICAgay5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICBrLnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBrLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIGsuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgay5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgay5zdHlsZS56SW5kZXggPSBcIlwiK3pJbmRleDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGspO1xuICAgIGsuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2Ryb3AtZmlsdGVyIDAuMnNcIlxuICAgIGsuc3R5bGUudHJhbnNpdGlvbiA9IFwiYmFja2dyb3VuZC1jb2xvciAwLjJzXCJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IGsuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuNClcIjsgay5zdHlsZS5iYWNrZHJvcEZpbHRlciA9IFwiYmx1cigycHgpXCI7fSwgMCk7XG59XG5cbmZ1bmN0aW9uIHVuQmxvY2tTY3JlZW4oKXtcbiAgICBsZXQgayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmxvY2tlclwiKTtcbiAgICBrLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tkcm9wLWZpbHRlciAwLjJzXCJcbiAgICBrLnN0eWxlLnRyYW5zaXRpb24gPSBcImJhY2tncm91bmQtY29sb3IgMC4yc1wiXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpeyBrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjApXCI7IGsuc3R5bGUuYmFja2Ryb3BGaWx0ZXIgPSBcImJsdXIoMHB4KVwiO30sIDApO1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtrLnJlbW92ZSgpO30sIDIwMCk7XG59XG5cbmV4cG9ydCB7YmxvY2tTY3JlZW4sIHVuQmxvY2tTY3JlZW59OyIsImV4cG9ydCBsZXQgaWRTZWVkID0gMDtcblxuZXhwb3J0IGxldCB0b0RvTGlzdCA9IFtdO1xuZXhwb3J0IGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9kb0ZhY3RvcnkoZG9OYW1lLCBkb1Byb2plY3QgPSBudWxsLCBkb0RhdGUsIGRvRGVzY3JpcCwgY29tcGxldGVkID0gZmFsc2UsIGRvUHJpb3JpdHkgPSAwKXtcbiAgICBcbiAgICBsZXQgaWQgPSBpZFNlZWQrKztcbiAgICByZXR1cm4ge2RvTmFtZSwgZG9Qcm9qZWN0LCBkb0RhdGUsIGRvUHJpb3JpdHksIGRvRGVzY3JpcCwgaWQsIGNvbXBsZXRlZH07XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdEZhY3RvcnkocHJvamVjdE5hbWUsIHByb2plY3REZXNjcmlwdGlvbil7XG4gICAgbGV0IGlkID0gaWRTZWVkKys7XG4gICAgcmV0dXJuIHtwcm9qZWN0TmFtZSwgcHJvamVjdERlc2NyaXB0aW9uLCBpZH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUb0RvKGRvSWQpe1xuICAgIGxldCBpbmRleDtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCB0b0RvTGlzdC5sZW5ndGg7IGluZGV4Kyspe1xuICAgICAgICBpZiAodG9Eb0xpc3RbaW5kZXhdLmlkID09IGRvSWQpe1xuICAgICAgICAgICAgdG9Eb0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpe1xuICAgIGxldCBpbmRleDtcbiAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGluZGV4Kyspe1xuICAgICAgICBpZiAocHJvamVjdExpc3RbaW5kZXhdLmlkID09IHByb2plY3RJZCl7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0RvKHRvRG8pe1xuICAgIHRvRG9MaXN0LnB1c2godG9Ebyk7ICAgXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3QocHJvamVjdCl7XG4gICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTdG9yYWdlKCl7XG4gICAgbGV0IHByb2plY3RTdG9yZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICAgIGxldCB0b2RvU3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b0RvTGlzdCcpKTtcbiAgICBsZXQgaWRTdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRTZWVkJykpO1xuICAgIGlmIChwcm9qZWN0U3RvcmUgIT0gbnVsbCkgcHJvamVjdExpc3QgPSBwcm9qZWN0U3RvcmU7XG4gICAgaWYgKHRvZG9TdG9yZSAhPSBudWxsKSB0b0RvTGlzdCA9IHRvZG9TdG9yZTtcbiAgICBpZiAoaWRTdG9yYWdlICE9IG51bGwpIGlkU2VlZCA9IGlkU3RvcmFnZTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge3RvZG9GYWN0b3J5LCBwcm9qZWN0RmFjdG9yeSwgdG9Eb0xpc3QsIHByb2plY3RMaXN0LCBkZWxldGVUb0RvLCBkZWxldGVQcm9qZWN0LCBhZGRUb0RvLCBhZGRQcm9qZWN0LCBsb2FkU3RvcmFnZSwgaWRTZWVkfSBmcm9tICcuL3RvZG8nO1xuaW1wb3J0IHttYWtlUG9wVXAsIGNsb3NlUHVwVXB9IGZyb20gJy4vcG9wdXAnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxubGV0IGFjdGl2ZVByb2plY3QgPSBudWxsO1xubGV0IGRlZmF1bHRQcm9qZWN0ID0gcHJvamVjdEZhY3RvcnkoXCJOT05FXCIsIFwiZGVmYXVsdCBwcm9qZWN0XCIpO1xuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG5cbmNvbnN0IGRvQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrY29udGFpbmVyXCIpO1xuY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdExpc3RcIik7XG5jb25zdCB0b2RheVNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlTZWxlY3RcIik7XG5jb25zdCB3ZWVrU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWVrU2VsZWN0XCIpO1xuXG5jb25zdCBhZGRUb0RvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUb0RvXCIpO1xuY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdGFkZGVyXCIpO1xuXG5mdW5jdGlvbiByZWZyZXNoVG9Eb3MoKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHdlZWsgPSBuZXcgRGF0ZSgpO1xuICAgIHdlZWsuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkgKyA3KTtcbiAgICB0b0RvTGlzdC5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBhMiA9IG5ldyBEYXRlKGEuZG9EYXRlKTtcbiAgICAgICAgbGV0IGIyID0gbmV3IERhdGUoYi5kb0RhdGUpO1xuICAgICAgICBpZiAoYTIgPiBiMikgcmV0dXJuIDE7XG4gICAgICAgIGlmIChiMiA+IGEyKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChhLmRvTmFtZSA+IGIuZG9OYW1lKSByZXR1cm4gMTtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZG9Cb3hcIikuZm9yRWFjaChlbGVtID0+IGVsZW0ucmVtb3ZlKCkpO1xuICAgIGZ1bmN0aW9uIGNoZWNrRGF0ZSh0b0RvKXtcbiAgICAgICAgbGV0IHRvRG9EYXRlID0gbmV3IERhdGUodG9Eby5kb0RhdGUpLmdldERhdGUoKTtcbiAgICAgICAgaWYgKCF0b2RheVNlbGVjdC5jaGVja2VkICYmICF3ZWVrU2VsZWN0LmNoZWNrZWQpIGRpc3BsYXlUb0RvKHRvRG8pO1xuICAgICAgICBlbHNlIGlmICh0b2RheVNlbGVjdC5jaGVja2VkICYmIHRvRG9EYXRlID09IHRvZGF5LmdldERhdGUoKSkgZGlzcGxheVRvRG8odG9Ebyk7XG4gICAgICAgIGVsc2UgaWYgKHdlZWtTZWxlY3QuY2hlY2tlZCAmJiB0b0RvRGF0ZSA8PSB3ZWVrLmdldERhdGUoKSkgZGlzcGxheVRvRG8odG9Ebyk7XG5cbiAgICB9XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT0gbnVsbCkgdG9Eb0xpc3QuZm9yRWFjaCh0b0RvID0+IGNoZWNrRGF0ZSh0b0RvKSk7IFxuICAgIGVsc2UgdG9Eb0xpc3QuZmlsdGVyKHRvRG8gPT4gdG9Eby5kb1Byb2plY3QuaWQgPT0gYWN0aXZlUHJvamVjdCkuZm9yRWFjaCh0b0RvID0+IGNoZWNrRGF0ZSh0b0RvKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvRG9MaXN0JywgSlNPTi5zdHJpbmdpZnkodG9Eb0xpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRTZWVkJywgSlNPTi5zdHJpbmdpZnkoaWRTZWVkKSk7XG59XG5cbnRvZGF5U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBpZiAodG9kYXlTZWxlY3QuY2hlY2tlZCkgd2Vla1NlbGVjdC5jaGVja2VkID0gZmFsc2U7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG59KTtcbndlZWtTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGlmICh3ZWVrU2VsZWN0LmNoZWNrZWQpIHRvZGF5U2VsZWN0LmNoZWNrZWQgPSBmYWxzZTtcbiAgICByZWZyZXNoVG9Eb3MoKTtcbn0pO1xuXG5cbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0cygpe1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdEJveFwiKS5mb3JFYWNoKGVsZW0gPT4gZWxlbS5yZW1vdmUoKSk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGRpc3BsYXlQcm9qZWN0KHByb2plY3RMaXN0W2ldKTtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RMaXN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdExpc3QpKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRTZWVkJywgSlNPTi5zdHJpbmdpZnkoaWRTZWVkKSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvKHRvRG8pe1xuICAgIGNvbnN0IGRvQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9Cb3guaWQgPSBcInRvRG9cIiArIHRvRG8uZG9OYW1lO1xuICAgIGRvQm94LmNsYXNzTGlzdC5hZGQoXCJkb0JveFwiKTtcbiAgICBkb0JveC5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIiArIHRvRG8uZG9Qcmlvcml0eSk7XG4gICAgbGV0IGRvTmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRvTmFtZURpdi50ZXh0Q29udGVudCA9IHRvRG8uZG9OYW1lO1xuICAgIGRvTmFtZURpdi5jbGFzc0xpc3QuYWRkKFwidG9Eb05hbWVcIik7XG4gICAgZG9OYW1lRGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd1RvRG9EZXRhaWxzKHRvRG8pKTtcbiAgICBsZXQgZG9EYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9EYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJkb0RhdGVcIik7XG4gICAgZG9EYXRlRGl2LnRleHRDb250ZW50ID0gbmV3IERhdGUodG9Eby5kb0RhdGUpLnRvRGF0ZVN0cmluZygpO1xuICAgIGlmICh0b0RvLmNvbXBsZXRlZCkgZG9OYW1lRGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcbiAgICBlbHNlIGRvTmFtZURpdi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIFxuICAgIC8vZGVsZXRlIHRvZG9cbiAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRGVsZXRlXCIpO1xuICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVUb0RvKHRvRG8uaWQpO1xuICAgICAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICB9KTtcblxuICAgIC8vZWRpdCB0b2RvXG4gICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b0RvRWRpdFwiKTtcbiAgICBlZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgLy9kaXNwbGF5IHN0dWZmXG4gICAgICAgIGVkaXRUb0RvRGV0YWlscyh0b0RvKTtcbiAgICB9KTtcbiAgICAvL2NvbXBsZXRlIHRvZG9cbiAgICBsZXQgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9Eb0NvbXBsZXRlXCIpO1xuICAgIGNvbXBsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gdG9Eby5jb21wbGV0ZWQgPyBcIlVuZG9cIiA6IFwiQ29tcGxldGVcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5zdHlsZS5tYXJnaW5SaWdodCA9ICB0b0RvLmNvbXBsZXRlZCA/IFwiMzVweFwiIDogXCI1cHhcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdG9Eby5jb21wbGV0ZWQgPSAhdG9Eby5jb21wbGV0ZWQ7XG4gICAgICAgIGlmICh0b0RvLmNvbXBsZXRlZCl7XG4gICAgICAgICAgICBkb05hbWVEaXYuc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xuICAgICAgICAgICAgY29tcGxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIlVuZG9cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZG9OYW1lRGl2LnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICAgICAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICB9KTtcblxuICAgIGRvQm94LmFwcGVuZENoaWxkKGRvTmFtZURpdik7XG4gICAgZG9Cb3guYXBwZW5kQ2hpbGQoZG9EYXRlRGl2KTtcbiAgICBkb0JveC5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgICBkb0JveC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBkb0JveC5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuICAgIGRvQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvQm94KTtcbn1cblxuXG5hZGRUb0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGxldCBuZXdUb0RvQm94ID0gbWFrZVBvcFVwKFwiTmV3IFRvRG8uLi5cIik7XG4gICAgbGV0IGZvcm1Cb3ggPSBuZXdUb0RvQm94LnBvcFVwY29udGVudDtcbiAgICBmb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBmb3JtQm94LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjFmciAxZnIgMWZyIDFmclwiXG4gICAgZm9ybUJveC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCIxNXB4IDIwcHggMTVweCAxZnIgNDBweFwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZm9udFNpemUgPSBcIjEuMXJlbVwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZ2FwID0gXCI1cHhcIjtcblxuICAgIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLnJlc2l6ZSA9IFwibm9uZVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuaGVpZ2h0ID0gXCIxMDAlXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZ3JpZFJvdyA9IFwiNC81XCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUuZ3JpZENvbHVtbiA9IFwiMS81XCJcbiAgICBsZXQgYWRkVG9Eb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkVG9Eb0J1dHRvbi5zdHlsZS5ncmlkUm93ID0gXCI1LzZcIjtcbiAgICBhZGRUb0RvQnV0dG9uLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvMlwiO1xuICAgIGFkZFRvRG9CdXR0b24uc3R5bGUuanVzdGlmeVNlbGYgPSBcInN0YXJ0XCI7XG4gICAgYWRkVG9Eb0J1dHRvbi5pbm5lckhUTUwgPSBcIkFkZCBUb0RvXCI7XG4gICAgYWRkVG9Eb0J1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMS4zcmVtXCI7XG5cbiAgICBsZXQgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbGV0IHBPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBwT3B0aW9uLnZhbHVlID0gXCJcIitpO1xuICAgICAgICBwT3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdExpc3RbaV0ucHJvamVjdE5hbWU7XG4gICAgICAgIHByb2plY3RTZWxlY3QuYXBwZW5kQ2hpbGQocE9wdGlvbik7XG4gICAgfVxuICAgIGxldCBkYXRlU2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGRhdGVTZWxlY3QudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGRhdGVTZWxlY3QudmFsdWVBc0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBwcmlvcml0eVNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgbGV0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvd1AudmFsdWUgPSBcIjFcIjtcbiAgICBsb3dQLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBsZXQgbWVkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkUC52YWx1ZSA9IFwiMlwiO1xuICAgIG1lZFAudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIGxldCBoaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaFAudmFsdWUgPSBcIjNcIjtcbiAgICBoaWdoUC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIFxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd1ApO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG1lZFApO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGhpZ2hQKTtcblxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgbGV0IHByaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICBsZXQgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJpb0xhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGF0ZVNlbGVjdCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoYWRkVG9Eb0J1dHRvbik7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld1RvRG9Cb3gucG9wQm94KTtcblxuICAgIGFkZFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgaWYgKG5ld1RpdGxlLnZhbHVlID09IG51bGwgfHwgbmV3VGl0bGUudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xuICAgICAgICBsZXQgbTEgPSB0b2RvRmFjdG9yeShuZXdUaXRsZS52YWx1ZSwgcHJvamVjdExpc3RbcHJvamVjdFNlbGVjdC52YWx1ZV0sIGRhdGVTZWxlY3QudmFsdWVBc0RhdGUsIG5ld0Rlc2NyaXB0aW9uLnZhbHVlLCBmYWxzZSwgcHJpb3JpdHlTZWxlY3QudmFsdWUpO1xuICAgICAgICBhZGRUb0RvKG0xKTtcbiAgICAgICAgcmVmcmVzaFRvRG9zKCk7XG4gICAgICAgIGNsb3NlUHVwVXAoKTtcbiAgICB9KTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwbGF5UHJvamVjdChwcm9qZWN0KXtcbiAgICBjb25zdCBwcm9qZWN0Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdEJveC5pZCA9IFwicHJvamVjdFwiICsgcHJvamVjdC5wcm9qZWN0TmFtZTtcbiAgICBwcm9qZWN0Qm94LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0Qm94XCIpO1xuICAgIGxldCBwcm9qZWN0Rm9jdXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0Rm9jdXMudGV4dENvbnRlbnQgPSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIHByb2plY3RGb2N1cy5jbGFzc0xpc3QuYWRkKFwicHJvamVjdE5hbWVcIik7XG5cbiAgICBwcm9qZWN0Rm9jdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBpZiAoYWN0aXZlUHJvamVjdCA9PSBwcm9qZWN0LmlkKXtcbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBudWxsO1xuICAgICAgICAgICAgcHJvamVjdEJveC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdEJveFwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVByb2plY3QgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgbGV0IG9sZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVQcm9qZWN0Qm94XCIpWzBdO1xuICAgICAgICAgICAgICAgIG9sZC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlUHJvamVjdEJveFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0LmlkO1xuICAgICAgICAgICAgcHJvamVjdEJveC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlUHJvamVjdEJveFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICB9KTtcblxuICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcInByb2plY3REZWxldGVcIik7XG4gICAgXG4gICAgZGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkZWxldGVQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgICAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICB9KTtcbiAgICBcbiAgICBsZXQgZGVzY3JpcHRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBidXR0b25gKTtcbiAgICBcbiAgICBkZXNjcmlwdGlvbkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdERlc2NyaXB0aW9uXCIpO1xuICAgIGRlc2NyaXB0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gXCI/XCI7XG4gICAgZGVzY3JpcHRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbkJveCA9IG1ha2VQb3BVcChwcm9qZWN0LnByb2plY3ROYW1lKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9uQ29udGVudCA9IGRlc2NyaXB0aW9uQm94LnBvcFVwY29udGVudDtcbiAgICAgICAgZGVzY3JpcHRpb25Db250ZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5wcm9qZWN0RGVzY3JpcHRpb247XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25Cb3gucG9wQm94KTtcbiAgICB9KTtcblxuICAgIHByb2plY3RCb3guYXBwZW5kQ2hpbGQocHJvamVjdEZvY3VzKTtcbiAgICBwcm9qZWN0Qm94LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG4gICAgcHJvamVjdEJveC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkJ1dHRvbik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0Qm94KTtcbn1cblxuXG5cbmFkZFByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICBsZXQgbmV3UHJvamVjdEJveCA9IG1ha2VQb3BVcChcIk5ldyBQcm9qZWN0Li4uXCIpO1xuICAgIGxldCBmb3JtQm94ID0gbmV3UHJvamVjdEJveC5wb3BVcGNvbnRlbnQ7XG5cbiAgICBmb3JtQm94LnN0eWxlLmZvbnRTaXplID0gXCIxLjNyZW1cIjtcbiAgICBmb3JtQm94LnN0eWxlLmdhcCA9IFwiMTBweFwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gXG4gICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZUxhYmVsLnN0eWxlLmZvbnRTaXplID0gXCIxLjFyZW1cIjtcbiAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IFRpdGxlOiBcIjtcbiAgICBsZXQgbmV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgbmV3VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIGxldCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGl0bGVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIHRpdGxlQ29udGFpbmVyLnN0eWxlLmdhcCA9IFwiNXB4XCI7XG4gICAgbGV0IGRlc2NMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NMYWJlbC5zdHlsZS5mb250U2l6ZSA9IFwiMS4xcmVtXCI7XG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJQcm9qZWN0IERlc2NyaXB0aW9uOlwiO1xuICAgIGxldCBuZXdEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IFwiNzUlXCI7XG4gICAgbmV3RGVzY3JpcHRpb24uc3R5bGUubWFyZ2luVG9wID0gXCItNXB4XCJcbiAgICBsZXQgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICBhZGRQcm9qZWN0QnV0dG9uLnN0eWxlLmFsaWduU2VsZiA9IFwic3RhcnRcIjtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVySFRNTCA9IFwiQWRkIFByb2plY3RcIjtcblxuXG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gICAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3VGl0bGUpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQodGl0bGVDb250YWluZXIpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGVzY0xhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKG5ld0Rlc2NyaXB0aW9uKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdXR0b24pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJveC5wb3BCb3gpO1xuICAgIFxuXG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgICAgICBpZiAobmV3VGl0bGUudmFsdWUgPT0gbnVsbCB8fCBuZXdUaXRsZS52YWx1ZSA9PSBcIlwiKSByZXR1cm47XG4gICAgICAgIGxldCBtMSA9IHByb2plY3RGYWN0b3J5KG5ld1RpdGxlLnZhbHVlLCBuZXdEZXNjcmlwdGlvbi52YWx1ZSk7XG4gICAgICAgIGFkZFByb2plY3QobTEpO1xuICAgICAgICByZWZyZXNoUHJvamVjdHMoKTtcbiAgICAgICAgY2xvc2VQdXBVcCgpO1xuICAgIH0pO1xufSk7XG5cbmZ1bmN0aW9uIGVkaXRUb0RvRGV0YWlscyh0b0RvKXtcbiAgICBsZXQgZWRpdFRvRG9Cb3ggPSBtYWtlUG9wVXAoXCJFZGl0OiBcIiArIHRvRG8uZG9OYW1lKTtcbiAgICBsZXQgZm9ybUJveCA9IGVkaXRUb0RvQm94LnBvcFVwY29udGVudDtcbiAgICBmb3JtQm94LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBmb3JtQm94LnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjFmciAxZnIgMWZyIDFmclwiXG4gICAgZm9ybUJveC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gXCIxNXB4IDIwcHggMTVweCAxZnIgNDBweFwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZm9udFNpemUgPSBcIjEuMXJlbVwiO1xuICAgIGZvcm1Cb3guc3R5bGUuZ2FwID0gXCI1cHhcIjtcblxuICAgIGxldCBuZXdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBuZXdUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgbmV3VGl0bGUudmFsdWUgPSB0b0RvLmRvTmFtZTtcbiAgICBsZXQgbmV3RGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgbmV3RGVzY3JpcHRpb24udmFsdWUgPSB0b0RvLmRvRGVzY3JpcDtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcbiAgICBuZXdEZXNjcmlwdGlvbi5zdHlsZS53aWR0aCA9IFwiMTAwJVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmhlaWdodCA9IFwiMTAwJVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRSb3cgPSBcIjQvNVwiO1xuICAgIG5ld0Rlc2NyaXB0aW9uLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEvNVwiXG4gICAgbGV0IGVkaXRUb0RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0VG9Eb0J1dHRvbi5zdHlsZS5ncmlkUm93ID0gXCI1LzZcIjtcbiAgICBlZGl0VG9Eb0J1dHRvbi5zdHlsZS5ncmlkQ29sdW1uID0gXCIxLzJcIjtcbiAgICBlZGl0VG9Eb0J1dHRvbi5zdHlsZS5qdXN0aWZ5U2VsZiA9IFwic3RhcnRcIjtcbiAgICBlZGl0VG9Eb0J1dHRvbi5pbm5lckhUTUwgPSBcIlNhdmUgQ2hhbmdlc1wiO1xuICAgIGVkaXRUb0RvQnV0dG9uLnN0eWxlLmZvbnRTaXplID0gXCIxLjNyZW1cIjtcblxuICAgIGxldCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBsZXQgcE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIHBPcHRpb24udmFsdWUgPSBcIlwiK2k7XG4gICAgICAgIHBPcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0TGlzdFtpXS5wcm9qZWN0TmFtZTtcbiAgICAgICAgcHJvamVjdFNlbGVjdC5hcHBlbmRDaGlsZChwT3B0aW9uKTtcbiAgICB9XG4gICAgbGV0IGRhdGVTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZGF0ZVNlbGVjdC50eXBlID0gXCJkYXRlXCI7XG4gICAgZGF0ZVNlbGVjdC52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKHRvRG8uZG9EYXRlKTtcbiAgICBsZXQgcHJpb3JpdHlTZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIGxldCBvbGRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvbGRQLnZhbHVlID0gdG9Eby5kb1ByaW9yaXR5O1xuICAgIG9sZFAudGV4dENvbnRlbnQgPSBcIiAgICAgXCI7XG4gICAgbGV0IGxvd1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvd1AudmFsdWUgPSBcIjFcIjtcbiAgICBsb3dQLnRleHRDb250ZW50ID0gXCJMb3dcIjtcbiAgICBsZXQgbWVkUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgbWVkUC52YWx1ZSA9IFwiMlwiO1xuICAgIG1lZFAudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xuICAgIGxldCBoaWdoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgaGlnaFAudmFsdWUgPSBcIjNcIjtcbiAgICBoaWdoUC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xuICAgIFxuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG9sZFApO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGxvd1ApO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKG1lZFApO1xuICAgIHByaW9yaXR5U2VsZWN0LmFwcGVuZENoaWxkKGhpZ2hQKTtcblxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmFtZVwiO1xuICAgIGxldCBwcm9qZWN0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwcm9qZWN0TGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RcIjtcbiAgICBsZXQgZGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgbGV0IHByaW9MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHByaW9MYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHlcIjtcbiAgICBsZXQgZGVzY0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGVzY0xhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvblwiO1xuXG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2plY3RMYWJlbCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkYXRlTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQocHJpb0xhYmVsKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKG5ld1RpdGxlKTtcbiAgICBmb3JtQm94LmFwcGVuZENoaWxkKHByb2plY3RTZWxlY3QpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZGF0ZVNlbGVjdCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChwcmlvcml0eVNlbGVjdCk7XG4gICAgZm9ybUJveC5hcHBlbmRDaGlsZChkZXNjTGFiZWwpO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQobmV3RGVzY3JpcHRpb24pO1xuICAgIGZvcm1Cb3guYXBwZW5kQ2hpbGQoZWRpdFRvRG9CdXR0b24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlZGl0VG9Eb0JveC5wb3BCb3gpO1xuXG4gICAgZWRpdFRvRG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICAgICAgaWYgKG5ld1RpdGxlLnZhbHVlID09IG51bGwgfHwgbmV3VGl0bGUudmFsdWUgPT0gXCJcIikgcmV0dXJuO1xuICAgICAgICB0b0RvLmRvTmFtZSA9IG5ld1RpdGxlLnZhbHVlO1xuICAgICAgICB0b0RvLmRvUHJvamVjdCA9IHByb2plY3RMaXN0W3Byb2plY3RTZWxlY3QudmFsdWVdO1xuICAgICAgICB0b0RvLmRvRGF0ZSA9IGRhdGVTZWxlY3QudmFsdWVBc0RhdGU7XG4gICAgICAgIHRvRG8uZG9EZXNjcmlwID0gbmV3RGVzY3JpcHRpb24udmFsdWU7XG4gICAgICAgIHRvRG8uZG9Qcmlvcml0eSA9IHByaW9yaXR5U2VsZWN0LnZhbHVlO1xuICAgICAgICByZWZyZXNoVG9Eb3MoKTtcbiAgICAgICAgY2xvc2VQdXBVcCgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaG93VG9Eb0RldGFpbHModG9Ebyl7XG4gICAgbGV0IGRldGFpbHNCb3ggPSBtYWtlUG9wVXAodG9Eby5kb05hbWUpO1xuICAgIGxldCBpbmZvQm94ID0gZGV0YWlsc0JveC5wb3BVcGNvbnRlbnQ7XG4gICAgaW5mb0JveC5zdHlsZS5mb250U2l6ZSA9IFwiMS4ycmVtXCI7XG4gICAgaW5mb0JveC5zdHlsZS5saW5lSGVpZ2h0ID0gXCIxLjJyZW1cIjtcbiAgICBsZXQgcHJvamVjdE5hbWUgPSB0b0RvLmRvUHJvamVjdC5wcm9qZWN0TmFtZSA9PSAnTk9ORScgPyBcIlwiIDogXCJQcm9qZWN0OiBcIiArIHRvRG8uZG9Qcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIGxldCBzaG93RGF0ZSA9bmV3IERhdGUodG9Eby5kb0RhdGUpO1xuICAgIGluZm9Cb3guaW5uZXJIVE1MID0gYDxwPiR7cHJvamVjdE5hbWV9PC9wPlxuICAgIDxwPlByaW9yaXR5OiAke3RvRG8uZG9Qcmlvcml0eX08L3A+XG4gICAgPHA+RHVlIERhdGU6ICR7c2hvd0RhdGUudG9EYXRlU3RyaW5nKCl9PC9wPlxuICAgIDxicj5cbiAgICA8cD5EZXNjcmlwdGlvbjogJHt0b0RvLmRvRGVzY3JpcH08L3A+YDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGV0YWlsc0JveC5wb3BCb3gpO1xufVxuXG5cblxubG9hZFN0b3JhZ2UoKTtcbnJlZnJlc2hQcm9qZWN0cygpO1xucmVmcmVzaFRvRG9zKCk7XG5cbmlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT0gMSAmJiB0b0RvTGlzdC5sZW5ndGggPT0gMCkgcG9wdWxhdGUoKTtcblxuZnVuY3Rpb24gcG9wdWxhdGUoKXtcbiAgICBsZXQgcHJvMSA9IHByb2plY3RGYWN0b3J5KFwiUHJvZ3JhbW1pbmdcIiwgXCJ0cnlpbmcgdG8gbGVhcm4gdG8gcHJvZ3JhbVwiKTtcbiAgICBsZXQgcHJvMiA9IHByb2plY3RGYWN0b3J5KFwiV2ViIERlc2lnblwiLCBcImNhbnQgcmVhbGx5IGNhbGwgdGhpcyBwcm9ncmFtbWluZ1wiKTtcbiAgICBsZXQgcHJvMyA9IHByb2plY3RGYWN0b3J5KFwiQWxnb3JpdGhtc1wiLCBcIm9yZG8gbm90YXRpb24gYW5kIHN0dWZmXCIpO1xuICAgIGFkZFByb2plY3QocHJvMSk7XG4gICAgYWRkUHJvamVjdChwcm8yKTtcbiAgICBhZGRQcm9qZWN0KHBybzMpO1xuICAgIHJlZnJlc2hQcm9qZWN0cygpO1xuICAgIGxldCBwID0gbmV3IERhdGUoKTtcbiAgICBsZXQgayA9IG5ldyBEYXRlKCk7XG4gICAgay5zZXREYXRlKHAuZ2V0RGF0ZSgpICs0KVxuXG4gICAgbGV0IG0gPSB0b2RvRmFjdG9yeShcInRlc3RpbmcxXCIsIHBybzEsIHAsIFwiZG8gc3R1ZmZcIiwgZmFsc2UsIDMpO1xuICAgIGxldCBzID0gdG9kb0ZhY3RvcnkoXCJ0ZXN0aW5nMlwiLCBwcm8yLCBrLCBcImRvIHN0dWZmYXNmZGRzZHNmc2QgIHNkZmdzZGZnIHNkZ2YgZ3MgZGdmIGZnZHNmZ2RzZ3MgIGcgZ2cgZGZzIGdkZnNnIGZkc2cgZnNkIGdmZCBnIGdmZGZnIHNkZyBkZnMgZmdkcyBnZmRzZyBmc2QgZ2Zkc2cgZmRzZyBmZHMgZ2Zkc2cgc2cgZmRzZyBmZHNnIGYgZ2RmcyBnZmRzIGdkZnMgZ2RzZiBnZmRzZ2Rmc2ZhZHNmYVwiLCBmYWxzZSwgMSk7XG4gICAgbGV0IG8gPSB0b2RvRmFjdG9yeShcInRlc3RpbmczXCIsIHBybzMsIHAsIFwiZG8gc3R1ZmZcIiwgZmFsc2UsIDIpO1xuXG4gICAgYWRkVG9EbyhtKTtcbiAgICBhZGRUb0RvKHMpO1xuICAgIGFkZFRvRG8obyk7XG4gICAgcmVmcmVzaFRvRG9zKCk7XG59XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==