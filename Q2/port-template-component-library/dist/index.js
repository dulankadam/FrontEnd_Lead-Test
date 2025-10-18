(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lucide-react"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "lucide-react"], factory);
	else if(typeof exports === 'object')
		exports["PortEditorLibrary"] = factory(require("react"), require("lucide-react"));
	else
		root["PortEditorLibrary"] = factory(root["react"], root["lucide-react"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_lucide_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/PortTemplate/PortTemplate.tsx":
/*!******************************************************!*\
  !*** ./src/components/PortTemplate/PortTemplate.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TreeItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TreeItem */ "./src/components/PortTemplate/TreeItem.tsx");
/* harmony import */ var _shared_HeaderTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/HeaderTabs */ "./src/components/shared/HeaderTabs.tsx");
/* harmony import */ var _shared_HeaderFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/HeaderFields */ "./src/components/shared/HeaderFields.tsx");
/* harmony import */ var _shared_DocumentsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/DocumentsSection */ "./src/components/shared/DocumentsSection.tsx");
/* harmony import */ var _utils_treeUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/treeUtils */ "./src/utils/treeUtils.ts");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lucide-react */ "lucide-react");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_6__);
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }








// Main container - composes shared components and tree
var PortTemplate = function PortTemplate() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
      return _utils_treeUtils__WEBPACK_IMPORTED_MODULE_5__.initialPortData;
    }),
    _useState2 = _slicedToArray(_useState, 2),
    ports = _useState2[0],
    setPorts = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Filter'),
    _useState4 = _slicedToArray(_useState3, 2),
    activeTab = _useState4[0],
    setActiveTab = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    totalPorts = _useState6[0],
    setTotalPorts = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var count = 0;
    var _walk = function walk(p) {
      count++;
      p.children.forEach(_walk);
    };
    ports.forEach(_walk);
    setTotalPorts(count);
  }, [ports]);
  var mutationHandler = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (m) {
    setPorts(function (prev) {
      return (0,_utils_treeUtils__WEBPACK_IMPORTED_MODULE_5__.applyMutation)(prev, m);
    });
  }, []);
  var addRoot = function addRoot() {
    var newRoot = {
      id: (0,_utils_treeUtils__WEBPACK_IMPORTED_MODULE_5__.generateId)(),
      name: 'New Port',
      isEditable: true,
      children: []
    };
    setPorts(function (p) {
      return [].concat(_toConsumableArray(p), [newRoot]);
    });
    // TODO: auto-select / open editing
  };
  var PortTree = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "space-y-4"
    }, ports.map(function (p, idx) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TreeItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
        key: p.id,
        port: p,
        depth: 0,
        mutationHandler: mutationHandler,
        isLastRoot: idx === ports.length - 1
      });
    }));
  }, [ports, mutationHandler]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "min-h-screen bg-gray-50 p-6 sm:p-8 lg:p-10 font-sans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-6 space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_HeaderTabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
    activeTab: activeTab,
    setActiveTab: setActiveTab
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, activeTab === 'Filter' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center pb-2 border-b border-gray-100 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, "Fields"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__.ChevronRight, {
    size: 24,
    className: "text-gray-500 transform rotate-90"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_HeaderFields__WEBPACK_IMPORTED_MODULE_3__["default"], {
    templateName: "Default Port Configuration",
    templateId: "A12-CFG-001"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-end pt-4 pb-2 border-b border-gray-100 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, "Port Template"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex space-x-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: addRoot,
    className: "flex items-center justify-center p-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md",
    title: "Add root port"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Plus, {
    size: 16
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-300 transition-colors shadow-md"
  }, "Back"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "px-3 py-1 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-colors shadow-md"
  }, "Save"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative pl-4"
  }, ports.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-0 left-0 bottom-0 w-[2px] bg-gray-300 pointer-events-none"
  }), ports.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-center py-10 text-gray-500 border border-dashed border-gray-300 rounded-lg"
  }, "No ports defined. Click the \"+\" button to add a root port.") : PortTree), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center pt-4 pb-2 border-b border-gray-100 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, "Documents"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_6__.Plus, {
    size: 24,
    className: "text-blue-500 hover:text-blue-700 cursor-pointer"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_DocumentsSection__WEBPACK_IMPORTED_MODULE_4__["default"], null)), activeTab === 'Details' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-gray-600"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-semibold mb-3"
  }, "Template Metadata"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-1 md:grid-cols-2 gap-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Status: Active"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Creator: System Admin"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Last Modified: 2025-10-19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Version: 1.5.0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Total ports: ", totalPorts))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortTemplate);

/***/ }),

/***/ "./src/components/PortTemplate/TreeItem.tsx":
/*!**************************************************!*\
  !*** ./src/components/PortTemplate/TreeItem.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "lucide-react");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
// Recursive tree item with edit/add/delete/toggle


var TreeItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(function (_ref) {
  var port = _ref.port,
    depth = _ref.depth,
    mutationHandler = _ref.mutationHandler,
    isLastRoot = _ref.isLastRoot;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isEditing = _useState2[0],
    setIsEditing = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(port.name),
    _useState4 = _slicedToArray(_useState3, 2),
    editedName = _useState4[0],
    setEditedName = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isSelected = _useState6[0],
    setIsSelected = _useState6[1];
  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setEditedName(port.name);
  }, [port.name]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);
  var saveName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var trimmed = editedName.trim();
    if (trimmed && trimmed !== port.name) {
      mutationHandler({
        type: 'UPDATE_NAME',
        targetId: port.id,
        payload: {
          name: trimmed
        }
      });
    }
    setIsEditing(false);
  }, [editedName, mutationHandler, port.id, port.name]);
  var addChild = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    var newPort = {
      id: "id-".concat(Date.now()),
      name: 'New Port',
      isEditable: true,
      children: []
    };
    mutationHandler({
      type: 'ADD_CHILD',
      targetId: port.id,
      payload: {
        newPort: newPort
      }
    });
  }, [mutationHandler, port.id]);
  var remove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    mutationHandler({
      type: 'DELETE',
      targetId: port.id
    });
    setIsSelected(false);
  }, [mutationHandler, port.id]);
  var toggleRO = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    mutationHandler({
      type: 'TOGGLE_READONLY',
      targetId: port.id
    });
  }, [mutationHandler, port.id]);
  var hasChildren = port.children && port.children.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative pt-3 ".concat(depth > 0 ? 'ml-6' : ''),
    tabIndex: 0,
    onBlur: function onBlur(e) {
      if (!e.currentTarget.contains(e.relatedTarget)) setIsSelected(false);
    }
  }, depth > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-4 left-[-16px] h-[2px] w-[16px] ".concat(isSelected ? 'bg-indigo-500' : 'bg-gray-300')
  }), depth > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute top-0 left-[-16px] w-[2px] ".concat(isSelected ? 'bg-indigo-500' : 'bg-gray-300', " ").concat(isLastRoot ? 'h-4' : 'bottom-0')
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center group relative p-1 rounded-lg transition-all cursor-pointer ".concat(isSelected ? 'bg-indigo-50' : ''),
    onClick: function onClick(e) {
      e.stopPropagation();
      setIsSelected(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center flex-grow min-w-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      // placeholder for collapse/expand
    },
    disabled: !hasChildren,
    className: "mr-2 text-gray-500 hover:text-gray-800",
    title: hasChildren ? 'Toggle' : 'No children'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__.ChevronRight, {
    size: 16,
    className: "".concat(hasChildren ? 'rotate-90' : 'opacity-0')
  })), isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    ref: inputRef,
    value: editedName,
    onChange: function onChange(e) {
      return setEditedName(e.target.value);
    },
    onBlur: function onBlur() {
      return saveName();
    },
    onKeyDown: function onKeyDown(e) {
      if (e.key === 'Enter') saveName();
      if (e.key === 'Escape') {
        setIsEditing(false);
        setEditedName(port.name);
      }
    },
    className: "flex-grow min-w-0 px-3 py-2 border border-blue-500 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-grow min-w-0 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "truncate ".concat(port.isEditable ? 'text-gray-800' : 'text-gray-500 italic'),
    onDoubleClick: function onDoubleClick() {
      if (port.isEditable) setIsEditing(true);
    }
  }, port.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute right-[-220px] top-1/2 -translate-y-1/2 flex items-center space-x-2 transition-opacity duration-200 ml-4 ".concat(isSelected ? 'opacity-100' : 'opacity-0', " group-hover:opacity-100 sm:relative sm:right-0 sm:top-0 sm:translate-y-0 sm:opacity-100")
  }, isSelected && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center space-x-3 bg-white p-2 rounded-xl shadow border border-gray-200"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center space-x-2 text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-600"
  }, "Read only"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "relative inline-flex items-center cursor-pointer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "checkbox",
    checked: !port.isEditable,
    onChange: function onChange(e) {
      e.stopPropagation();
      toggleRO();
    },
    className: "sr-only peer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-indigo-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      remove();
    },
    title: "Delete",
    className: "p-2 rounded-full text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__.X, {
    size: 18
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick(e) {
      e.stopPropagation();
      addChild();
    },
    title: "Add child",
    className: "p-2 rounded-full text-white bg-blue-500 hover:bg-blue-600 transition-colors shadow-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Plus, {
    size: 18
  }))))), hasChildren && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, port.children.map(function (child, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(TreeItem, {
      key: child.id,
      port: child,
      depth: depth + 1,
      mutationHandler: mutationHandler,
      isLastRoot: idx === port.children.length - 1
    });
  })));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TreeItem);

/***/ }),

/***/ "./src/components/shared/DocumentsSection.tsx":
/*!****************************************************!*\
  !*** ./src/components/shared/DocumentsSection.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var DocumentsSection = function DocumentsSection() {
  var docs = [{
    name: "Standard_Specs_v1.2.pdf",
    date: "2025-09-01"
  }, {
    name: "Configuration_Guide.docx",
    date: "2025-08-15"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "p-4 bg-white rounded-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "space-y-2"
  }, docs.map(function (d) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: d.name,
      className: "flex justify-between items-center text-sm text-gray-700 p-2 bg-gray-50 rounded-md"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-medium truncate"
    }, d.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-xs text-gray-400"
    }, d.date));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DocumentsSection);

/***/ }),

/***/ "./src/components/shared/FieldInput.tsx":
/*!**********************************************!*\
  !*** ./src/components/shared/FieldInput.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var FieldInput = function FieldInput(_ref) {
  var label = _ref.label,
    value = _ref.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col text-sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-500 font-medium"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "text-gray-800 font-semibold"
  }, value));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FieldInput);

/***/ }),

/***/ "./src/components/shared/HeaderFields.tsx":
/*!************************************************!*\
  !*** ./src/components/shared/HeaderFields.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FieldInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FieldInput */ "./src/components/shared/FieldInput.tsx");


var HeaderFields = function HeaderFields(_ref) {
  var templateName = _ref.templateName,
    templateId = _ref.templateId;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FieldInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Type",
    value: "Computer"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FieldInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Model",
    value: "Camera"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FieldInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Template Name",
    value: templateName
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FieldInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: "Template ID",
    value: templateId
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderFields);

/***/ }),

/***/ "./src/components/shared/HeaderTabs.tsx":
/*!**********************************************!*\
  !*** ./src/components/shared/HeaderTabs.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "lucide-react");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_1__);


var HeaderTabs = function HeaderTabs(_ref) {
  var activeTab = _ref.activeTab,
    setActiveTab = _ref.setActiveTab;
  var tabs = ["Filter", "Details"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex border-b border-gray-200"
  }, tabs.map(function (tab) {
    var selected = tab === activeTab;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: tab,
      onClick: function onClick() {
        return setActiveTab(tab);
      },
      className: "flex items-center space-x-2 px-4 py-2 text-sm font-semibold transition-colors ".concat(selected ? "border-b-2 border-indigo-600 text-indigo-700" : "text-gray-500 hover:text-gray-700")
    }, tab === "Filter" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Copy, {
      size: 16
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Check, {
      size: 16
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, tab));
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderTabs);

/***/ }),

/***/ "./src/components/shared/SectionHeader.tsx":
/*!*************************************************!*\
  !*** ./src/components/shared/SectionHeader.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lucide-react */ "lucide-react");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_1__);


var SectionHeader = function SectionHeader(_ref) {
  var title = _ref.title,
    buttonText = _ref.buttonText,
    onButtonClick = _ref.onButtonClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between items-center pb-2 border-b border-gray-100 mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: "text-xl font-bold text-gray-800"
  }, title), buttonText && onButtonClick && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: onButtonClick,
    className: "flex items-center space-x-1 px-3 py-1 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(lucide_react__WEBPACK_IMPORTED_MODULE_1__.Plus, {
    size: 16
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, buttonText)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionHeader);

/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/utils/treeUtils.ts":
/*!********************************!*\
  !*** ./src/utils/treeUtils.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyMutation: () => (/* binding */ _applyMutation),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   generateId: () => (/* binding */ generateId),
/* harmony export */   initialPortData: () => (/* binding */ initialPortData)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Tree helpers and initial data. small fallbacks and clear logic.

var generateId = function generateId() {
  try {
    // prefer crypto if available
    // @ts-ignore
    return typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : "id-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 10000));
  } catch (_unused) {
    return "id-".concat(Date.now(), "-").concat(Math.floor(Math.random() * 10000));
  }
};
var initialPortData = [{
  id: "root-0",
  name: "0",
  isEditable: true,
  children: []
}, {
  id: "root-1",
  name: "1",
  isEditable: true,
  children: []
}, {
  id: "root-2",
  name: "2",
  isEditable: true,
  children: [{
    id: "child-2-0",
    name: "2.0",
    isEditable: true,
    children: [{
      id: "grandchild-2-0-0",
      name: "2.0.0",
      isEditable: false,
      children: []
    }]
  }, {
    id: "child-2-1",
    name: "2.1",
    isEditable: true,
    children: []
  }]
}, {
  id: "root-3",
  name: "3",
  isEditable: true,
  children: []
}, {
  id: "root-4",
  name: "4",
  isEditable: true,
  children: []
}, {
  id: "root-5",
  name: "5",
  isEditable: true,
  children: []
}];

/**
 * Apply a mutation immutably.
 * - ADD_CHILD: append a child to target node
 * - UPDATE_NAME: rename target node
 * - TOGGLE_READONLY: flip isEditable flag
 * - DELETE: remove node (and its children)
 *
 * Note: children of deleted node are discarded in this implementation.
 */
var _applyMutation = function applyMutation(ports, mutation) {
  return ports.reduce(function (acc, port) {
    var _mutation$payload, _mutation$payload$nam, _mutation$payload2;
    if (port.id === mutation.targetId) {
      var copy = _objectSpread(_objectSpread({}, port), {}, {
        children: _toConsumableArray(port.children || [])
      });
      switch (mutation.type) {
        case "ADD_CHILD":
          if ((_mutation$payload = mutation.payload) !== null && _mutation$payload !== void 0 && _mutation$payload.newPort) {
            copy.children = [].concat(_toConsumableArray(copy.children), [mutation.payload.newPort]);
          }
          acc.push(copy);
          break;
        case "UPDATE_NAME":
          copy.name = (_mutation$payload$nam = (_mutation$payload2 = mutation.payload) === null || _mutation$payload2 === void 0 ? void 0 : _mutation$payload2.name) !== null && _mutation$payload$nam !== void 0 ? _mutation$payload$nam : copy.name;
          acc.push(copy);
          break;
        case "TOGGLE_READONLY":
          copy.isEditable = !copy.isEditable;
          acc.push(copy);
          break;
        case "DELETE":
          // skip (delete)
          break;
        default:
          acc.push(port);
      }
    } else if (port.children && port.children.length > 0) {
      var newChildren = _applyMutation(port.children, mutation);
      var changed = newChildren.length !== port.children.length || newChildren.some(function (c, i) {
        return c !== port.children[i];
      });
      if (changed) acc.push(_objectSpread(_objectSpread({}, port), {}, {
        children: newChildren
      }));else acc.push(port);
    } else {
      acc.push(port);
    }
    return acc;
  }, []);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  generateId: generateId,
  initialPortData: initialPortData,
  applyMutation: _applyMutation
});

/***/ }),

/***/ "lucide-react":
/*!*******************************!*\
  !*** external "lucide-react" ***!
  \*******************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_lucide_react__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderFields: () => (/* reexport safe */ _components_shared_HeaderFields__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   HeaderTabs: () => (/* reexport safe */ _components_shared_HeaderTabs__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   PortTemplate: () => (/* reexport safe */ _components_PortTemplate_PortTemplate__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   SectionHeader: () => (/* reexport safe */ _components_shared_SectionHeader__WEBPACK_IMPORTED_MODULE_4__["default"])
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/types.ts");
/* harmony import */ var _components_PortTemplate_PortTemplate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PortTemplate/PortTemplate */ "./src/components/PortTemplate/PortTemplate.tsx");
/* harmony import */ var _components_shared_HeaderTabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/HeaderTabs */ "./src/components/shared/HeaderTabs.tsx");
/* harmony import */ var _components_shared_HeaderFields__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/HeaderFields */ "./src/components/shared/HeaderFields.tsx");
/* harmony import */ var _components_shared_SectionHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/SectionHeader */ "./src/components/shared/SectionHeader.tsx");
// Export all types used by the library consumer


// Export the main components for consumption





// The App.tsx is now removed as it's the consuming application's responsibility.
// The main component exported is PortTemplate.
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map