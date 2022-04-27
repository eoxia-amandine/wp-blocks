/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 			// no module.id needed
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************************************************************!*\
  !*** ./inc/blocks/bf-mega-menu/assets/js/gutenberg-src/bf-mega-menu.js ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


function addMegaMenuAttributes(settings, name) {
  if (typeof settings.attributes !== 'undefined') {
    if (name == 'core/navigation-link') {
      settings.attributes = Object.assign(settings.attributes, {
        displayMegaMenu: {
          type: 'boolean'
        },
        megaMenuId: {
          type: 'string'
        }
      });
    }
  }

  return settings;
}

wp.hooks.addFilter('blocks.registerBlockType', 'beflex/mega-menu-custom-attribute', addMegaMenuAttributes);
const megaMenuAdvancedControls = wp.compose.createHigherOrderComponent(BlockEdit => {
  return props => {
    const {
      Fragment,
      useState
    } = wp.element;
    const {
      ToggleControl
    } = wp.components;
    const {
      TextControl
    } = wp.components;
    const {
      InspectorAdvancedControls
    } = wp.blockEditor;
    const {
      attributes,
      setAttributes,
      isSelected
    } = props;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, props), isSelected && props.name == 'core/navigation-link' && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorAdvancedControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: wp.i18n.__('Display Mega Menu', 'beflex-child'),
      help: attributes.displayMegaMenu ? 'Display Mega Menu' : 'Display standard menu',
      checked: !!attributes.displayMegaMenu,
      onChange: newval => setAttributes({
        displayMegaMenu: !attributes.displayMegaMenu
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TextControl, {
      label: wp.i18n.__('Mega Menu ID', 'beflex-child'),
      value: attributes.megaMenuId,
      onChange: value => setAttributes({
        megaMenuId: value
      })
    })));
  };
}, 'megaMenuAdvancedControls');
wp.hooks.addFilter('editor.BlockEdit', 'beflex/mega-menu-advanced-control', megaMenuAdvancedControls);

function headingApplyExtraClass(extraProps, blockType, attributes) {
  const {
    displayMegaMenu,
    megaMenuId
  } = attributes;
  let className = extraProps.className != undefined ? extraProps.className : '';
  console.log(displayMegaMenu);
  console.log(megaMenuId); // if (typeof animationIn !== 'undefined' && animationIn) {
  //     className += ' bf-block-animatein';
  //
  //     if ( animationInType ) {
  //         className += ' bf-block-animatein--type-' + animationInType;
  //     }
  // }

  extraProps.className = className;
  return extraProps;
}

wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'beflex/azezeaeazezaezae-apply-class', headingApplyExtraClass);
}();
/******/ })()
;
//# sourceMappingURL=bf-mega-menu.js.map