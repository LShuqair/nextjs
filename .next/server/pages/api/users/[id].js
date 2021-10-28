module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/users/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/users.json":
/*!*************************!*\
  !*** ./data/users.json ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2RhdGEvdXNlcnMuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./data/users.json\n");

/***/ }),

/***/ "./helpers/fetch-wrapper.js":
/*!**********************************!*\
  !*** ./helpers/fetch-wrapper.js ***!
  \**********************************/
/*! exports provided: fetchWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchWrapper\", function() { return fetchWrapper; });\nconst fetchWrapper = {\n  get,\n  post,\n  put,\n  delete: _delete\n};\n\nfunction get(url) {\n  const requestOptions = {\n    method: 'GET'\n  };\n  return fetch(url, requestOptions).then(handleResponse);\n}\n\nfunction post(url, body) {\n  const requestOptions = {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(body)\n  };\n  return fetch(url, requestOptions).then(handleResponse);\n}\n\nfunction put(url, body) {\n  const requestOptions = {\n    method: 'PUT',\n    headers: {\n      'Content-Type': 'application/json'\n    },\n    body: JSON.stringify(body)\n  };\n  return fetch(url, requestOptions).then(handleResponse);\n} // prefixed with underscored because delete is a reserved word in javascript\n\n\nfunction _delete(url) {\n  const requestOptions = {\n    method: 'DELETE'\n  };\n  return fetch(url, requestOptions).then(handleResponse);\n} // helper functions\n\n\nfunction handleResponse(response) {\n  return response.text().then(text => {\n    const data = text && JSON.parse(text);\n\n    if (!response.ok) {\n      const error = data && data.message || response.statusText;\n      return Promise.reject(error);\n    }\n\n    return data;\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2ZldGNoLXdyYXBwZXIuanM/YjNjNyJdLCJuYW1lcyI6WyJmZXRjaFdyYXBwZXIiLCJnZXQiLCJwb3N0IiwicHV0IiwiZGVsZXRlIiwiX2RlbGV0ZSIsInVybCIsInJlcXVlc3RPcHRpb25zIiwibWV0aG9kIiwiZmV0Y2giLCJ0aGVuIiwiaGFuZGxlUmVzcG9uc2UiLCJib2R5IiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNwb25zZSIsInRleHQiLCJkYXRhIiwicGFyc2UiLCJvayIsImVycm9yIiwibWVzc2FnZSIsInN0YXR1c1RleHQiLCJQcm9taXNlIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sTUFBTUEsWUFBWSxHQUFHO0FBQ3hCQyxLQUR3QjtBQUV4QkMsTUFGd0I7QUFHeEJDLEtBSHdCO0FBSXhCQyxRQUFNLEVBQUVDO0FBSmdCLENBQXJCOztBQU9QLFNBQVNKLEdBQVQsQ0FBYUssR0FBYixFQUFrQjtBQUNkLFFBQU1DLGNBQWMsR0FBRztBQUNuQkMsVUFBTSxFQUFFO0FBRFcsR0FBdkI7QUFHQSxTQUFPQyxLQUFLLENBQUNILEdBQUQsRUFBTUMsY0FBTixDQUFMLENBQTJCRyxJQUEzQixDQUFnQ0MsY0FBaEMsQ0FBUDtBQUNIOztBQUVELFNBQVNULElBQVQsQ0FBY0ksR0FBZCxFQUFtQk0sSUFBbkIsRUFBeUI7QUFDckIsUUFBTUwsY0FBYyxHQUFHO0FBQ25CQyxVQUFNLEVBQUUsTUFEVztBQUVuQkssV0FBTyxFQUFFO0FBQUUsc0JBQWdCO0FBQWxCLEtBRlU7QUFHbkJELFFBQUksRUFBRUUsSUFBSSxDQUFDQyxTQUFMLENBQWVILElBQWY7QUFIYSxHQUF2QjtBQUtBLFNBQU9ILEtBQUssQ0FBQ0gsR0FBRCxFQUFNQyxjQUFOLENBQUwsQ0FBMkJHLElBQTNCLENBQWdDQyxjQUFoQyxDQUFQO0FBQ0g7O0FBRUQsU0FBU1IsR0FBVCxDQUFhRyxHQUFiLEVBQWtCTSxJQUFsQixFQUF3QjtBQUNwQixRQUFNTCxjQUFjLEdBQUc7QUFDbkJDLFVBQU0sRUFBRSxLQURXO0FBRW5CSyxXQUFPLEVBQUU7QUFBRSxzQkFBZ0I7QUFBbEIsS0FGVTtBQUduQkQsUUFBSSxFQUFFRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsSUFBZjtBQUhhLEdBQXZCO0FBS0EsU0FBT0gsS0FBSyxDQUFDSCxHQUFELEVBQU1DLGNBQU4sQ0FBTCxDQUEyQkcsSUFBM0IsQ0FBZ0NDLGNBQWhDLENBQVA7QUFDSCxDLENBRUQ7OztBQUNBLFNBQVNOLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCO0FBQ2xCLFFBQU1DLGNBQWMsR0FBRztBQUNuQkMsVUFBTSxFQUFFO0FBRFcsR0FBdkI7QUFHQSxTQUFPQyxLQUFLLENBQUNILEdBQUQsRUFBTUMsY0FBTixDQUFMLENBQTJCRyxJQUEzQixDQUFnQ0MsY0FBaEMsQ0FBUDtBQUNILEMsQ0FFRDs7O0FBRUEsU0FBU0EsY0FBVCxDQUF3QkssUUFBeEIsRUFBa0M7QUFDOUIsU0FBT0EsUUFBUSxDQUFDQyxJQUFULEdBQWdCUCxJQUFoQixDQUFxQk8sSUFBSSxJQUFJO0FBQ2hDLFVBQU1DLElBQUksR0FBR0QsSUFBSSxJQUFJSCxJQUFJLENBQUNLLEtBQUwsQ0FBV0YsSUFBWCxDQUFyQjs7QUFFQSxRQUFJLENBQUNELFFBQVEsQ0FBQ0ksRUFBZCxFQUFrQjtBQUNkLFlBQU1DLEtBQUssR0FBSUgsSUFBSSxJQUFJQSxJQUFJLENBQUNJLE9BQWQsSUFBMEJOLFFBQVEsQ0FBQ08sVUFBakQ7QUFDQSxhQUFPQyxPQUFPLENBQUNDLE1BQVIsQ0FBZUosS0FBZixDQUFQO0FBQ0g7O0FBRUQsV0FBT0gsSUFBUDtBQUNILEdBVE0sQ0FBUDtBQVVIIiwiZmlsZSI6Ii4vaGVscGVycy9mZXRjaC13cmFwcGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGZldGNoV3JhcHBlciA9IHtcbiAgICBnZXQsXG4gICAgcG9zdCxcbiAgICBwdXQsXG4gICAgZGVsZXRlOiBfZGVsZXRlXG59O1xuXG5mdW5jdGlvbiBnZXQodXJsKSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ0dFVCdcbiAgICB9O1xuICAgIHJldHVybiBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGhhbmRsZVJlc3BvbnNlKTtcbn1cblxuZnVuY3Rpb24gcG9zdCh1cmwsIGJvZHkpIHtcbiAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH07XG4gICAgcmV0dXJuIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xufVxuXG5mdW5jdGlvbiBwdXQodXJsLCBib2R5KSB7XG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KVxuICAgIH07XG4gICAgcmV0dXJuIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4oaGFuZGxlUmVzcG9uc2UpO1xufVxuXG4vLyBwcmVmaXhlZCB3aXRoIHVuZGVyc2NvcmVkIGJlY2F1c2UgZGVsZXRlIGlzIGEgcmVzZXJ2ZWQgd29yZCBpbiBqYXZhc2NyaXB0XG5mdW5jdGlvbiBfZGVsZXRlKHVybCkge1xuICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnXG4gICAgfTtcbiAgICByZXR1cm4gZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucykudGhlbihoYW5kbGVSZXNwb25zZSk7XG59XG5cbi8vIGhlbHBlciBmdW5jdGlvbnNcblxuZnVuY3Rpb24gaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB0ZXh0ICYmIEpTT04ucGFyc2UodGV4dCk7XG5cbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSAoZGF0YSAmJiBkYXRhLm1lc3NhZ2UpIHx8IHJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/fetch-wrapper.js\n");

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: fetchWrapper, usersRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fetch_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch-wrapper */ \"./helpers/fetch-wrapper.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fetchWrapper\", function() { return _fetch_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"fetchWrapper\"]; });\n\n/* harmony import */ var _users_repo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-repo */ \"./helpers/users-repo.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"usersRepo\", function() { return _users_repo__WEBPACK_IMPORTED_MODULE_1__[\"usersRepo\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2luZGV4LmpzP2E1MTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2hlbHBlcnMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgKiBmcm9tICcuL2ZldGNoLXdyYXBwZXInO1xuZXhwb3J0ICogZnJvbSAnLi91c2Vycy1yZXBvJzsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/index.js\n");

/***/ }),

/***/ "./helpers/users-repo.js":
/*!*******************************!*\
  !*** ./helpers/users-repo.js ***!
  \*******************************/
/*! exports provided: usersRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"usersRepo\", function() { return usersRepo; });\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\nlet users = __webpack_require__(/*! data/users.json */ \"./data/users.json\");\n\nconst usersRepo = {\n  getAll,\n  getById,\n  create,\n  update,\n  delete: _delete\n};\n\nfunction getAll() {\n  return users;\n}\n\nfunction getById(id) {\n  return users.find(x => x.id.toString() === id.toString());\n}\n\nfunction create({\n  name,\n  message\n}) {\n  const user = {\n    name,\n    message\n  }; // // validate\n  // if (users.find(x => x.email === user.email))\n  //     throw `User with the email ${user.email} already exists`;\n  // generate new user id\n\n  user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1; // set date created and updated\n\n  user.dateCreated = new Date().toISOString();\n  user.dateUpdated = new Date().toISOString(); // add and save user\n\n  users.push(user);\n  saveData();\n}\n\nfunction update(id, {\n  name,\n  message\n}) {\n  const params = {\n    name,\n    message\n  };\n  const user = users.find(x => x.id.toString() === id.toString()); // validate\n\n  if (params.email !== user.email && users.find(x => x.email === params.email)) throw `User with the email ${params.email} already exists`; // only update password if entered\n\n  if (!params.password) {\n    delete params.password;\n  } // set date updated\n\n\n  user.dateUpdated = new Date().toISOString(); // update and save\n\n  Object.assign(user, params);\n  saveData();\n} // prefixed with underscore '_' because 'delete' is a reserved word in javascript\n\n\nfunction _delete(id) {\n  // filter out deleted user and save\n  users = users.filter(x => x.id.toString() !== id.toString());\n  saveData();\n} // private helper functions\n\n\nfunction saveData() {\n  fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3VzZXJzLXJlcG8uanM/ODY1NCJdLCJuYW1lcyI6WyJmcyIsInJlcXVpcmUiLCJ1c2VycyIsInVzZXJzUmVwbyIsImdldEFsbCIsImdldEJ5SWQiLCJjcmVhdGUiLCJ1cGRhdGUiLCJkZWxldGUiLCJfZGVsZXRlIiwiaWQiLCJmaW5kIiwieCIsInRvU3RyaW5nIiwibmFtZSIsIm1lc3NhZ2UiLCJ1c2VyIiwibGVuZ3RoIiwiTWF0aCIsIm1heCIsIm1hcCIsImRhdGVDcmVhdGVkIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwiZGF0ZVVwZGF0ZWQiLCJwdXNoIiwic2F2ZURhdGEiLCJwYXJhbXMiLCJlbWFpbCIsInBhc3N3b3JkIiwiT2JqZWN0IiwiYXNzaWduIiwiZmlsdGVyIiwid3JpdGVGaWxlU3luYyIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxNQUFNQSxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBRCxDQUFsQjs7QUFFQSxJQUFJQyxLQUFLLEdBQUdELG1CQUFPLENBQUMsMENBQUQsQ0FBbkI7O0FBRU8sTUFBTUUsU0FBUyxHQUFHO0FBQ3JCQyxRQURxQjtBQUVyQkMsU0FGcUI7QUFHckJDLFFBSHFCO0FBSXJCQyxRQUpxQjtBQUtyQkMsUUFBTSxFQUFFQztBQUxhLENBQWxCOztBQVFQLFNBQVNMLE1BQVQsR0FBa0I7QUFDZCxTQUFPRixLQUFQO0FBQ0g7O0FBRUQsU0FBU0csT0FBVCxDQUFpQkssRUFBakIsRUFBcUI7QUFDakIsU0FBT1IsS0FBSyxDQUFDUyxJQUFOLENBQVdDLENBQUMsSUFBSUEsQ0FBQyxDQUFDRixFQUFGLENBQUtHLFFBQUwsT0FBb0JILEVBQUUsQ0FBQ0csUUFBSCxFQUFwQyxDQUFQO0FBQ0g7O0FBRUQsU0FBU1AsTUFBVCxDQUFnQjtBQUFHUSxNQUFIO0FBQVNDO0FBQVQsQ0FBaEIsRUFBb0M7QUFDaEMsUUFBTUMsSUFBSSxHQUFHO0FBQUVGLFFBQUY7QUFBUUM7QUFBUixHQUFiLENBRGdDLENBR2hDO0FBQ0E7QUFDQTtBQUVBOztBQUNBQyxNQUFJLENBQUNOLEVBQUwsR0FBVVIsS0FBSyxDQUFDZSxNQUFOLEdBQWVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEdBQUdqQixLQUFLLENBQUNrQixHQUFOLENBQVVSLENBQUMsSUFBSUEsQ0FBQyxDQUFDRixFQUFqQixDQUFaLElBQW9DLENBQW5ELEdBQXVELENBQWpFLENBUmdDLENBVWhDOztBQUNBTSxNQUFJLENBQUNLLFdBQUwsR0FBbUIsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQW5CO0FBQ0FQLE1BQUksQ0FBQ1EsV0FBTCxHQUFtQixJQUFJRixJQUFKLEdBQVdDLFdBQVgsRUFBbkIsQ0FaZ0MsQ0FjaEM7O0FBQ0FyQixPQUFLLENBQUN1QixJQUFOLENBQVdULElBQVg7QUFDQVUsVUFBUTtBQUNYOztBQUVELFNBQVNuQixNQUFULENBQWdCRyxFQUFoQixFQUFvQjtBQUFFSSxNQUFGO0FBQVFDO0FBQVIsQ0FBcEIsRUFBdUM7QUFDbkMsUUFBTVksTUFBTSxHQUFHO0FBQUViLFFBQUY7QUFBUUM7QUFBUixHQUFmO0FBQ0EsUUFBTUMsSUFBSSxHQUFHZCxLQUFLLENBQUNTLElBQU4sQ0FBV0MsQ0FBQyxJQUFJQSxDQUFDLENBQUNGLEVBQUYsQ0FBS0csUUFBTCxPQUFvQkgsRUFBRSxDQUFDRyxRQUFILEVBQXBDLENBQWIsQ0FGbUMsQ0FJbkM7O0FBQ0EsTUFBSWMsTUFBTSxDQUFDQyxLQUFQLEtBQWlCWixJQUFJLENBQUNZLEtBQXRCLElBQStCMUIsS0FBSyxDQUFDUyxJQUFOLENBQVdDLENBQUMsSUFBSUEsQ0FBQyxDQUFDZ0IsS0FBRixLQUFZRCxNQUFNLENBQUNDLEtBQW5DLENBQW5DLEVBQ0ksTUFBTyx1QkFBc0JELE1BQU0sQ0FBQ0MsS0FBTSxpQkFBMUMsQ0FOK0IsQ0FRbkM7O0FBQ0EsTUFBSSxDQUFDRCxNQUFNLENBQUNFLFFBQVosRUFBc0I7QUFDbEIsV0FBT0YsTUFBTSxDQUFDRSxRQUFkO0FBQ0gsR0FYa0MsQ0FhbkM7OztBQUNBYixNQUFJLENBQUNRLFdBQUwsR0FBbUIsSUFBSUYsSUFBSixHQUFXQyxXQUFYLEVBQW5CLENBZG1DLENBZ0JuQzs7QUFDQU8sUUFBTSxDQUFDQyxNQUFQLENBQWNmLElBQWQsRUFBb0JXLE1BQXBCO0FBQ0FELFVBQVE7QUFDWCxDLENBRUQ7OztBQUNBLFNBQVNqQixPQUFULENBQWlCQyxFQUFqQixFQUFxQjtBQUNqQjtBQUNBUixPQUFLLEdBQUdBLEtBQUssQ0FBQzhCLE1BQU4sQ0FBYXBCLENBQUMsSUFBSUEsQ0FBQyxDQUFDRixFQUFGLENBQUtHLFFBQUwsT0FBb0JILEVBQUUsQ0FBQ0csUUFBSCxFQUF0QyxDQUFSO0FBQ0FhLFVBQVE7QUFFWCxDLENBRUQ7OztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDaEIxQixJQUFFLENBQUNpQyxhQUFILENBQWlCLGlCQUFqQixFQUFvQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVqQyxLQUFmLEVBQXNCLElBQXRCLEVBQTRCLENBQTVCLENBQXBDO0FBQ0giLCJmaWxlIjoiLi9oZWxwZXJzL3VzZXJzLXJlcG8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmcyA9IHJlcXVpcmUoJ2ZzJyk7XG5cbmxldCB1c2VycyA9IHJlcXVpcmUoJ2RhdGEvdXNlcnMuanNvbicpO1xuXG5leHBvcnQgY29uc3QgdXNlcnNSZXBvID0ge1xuICAgIGdldEFsbCxcbiAgICBnZXRCeUlkLFxuICAgIGNyZWF0ZSxcbiAgICB1cGRhdGUsXG4gICAgZGVsZXRlOiBfZGVsZXRlXG59O1xuXG5mdW5jdGlvbiBnZXRBbGwoKSB7XG4gICAgcmV0dXJuIHVzZXJzO1xufVxuXG5mdW5jdGlvbiBnZXRCeUlkKGlkKSB7XG4gICAgcmV0dXJuIHVzZXJzLmZpbmQoeCA9PiB4LmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGUoeyAgbmFtZSwgbWVzc2FnZSB9KSB7XG4gICAgY29uc3QgdXNlciA9IHsgbmFtZSwgbWVzc2FnZSB9O1xuXG4gICAgLy8gLy8gdmFsaWRhdGVcbiAgICAvLyBpZiAodXNlcnMuZmluZCh4ID0+IHguZW1haWwgPT09IHVzZXIuZW1haWwpKVxuICAgIC8vICAgICB0aHJvdyBgVXNlciB3aXRoIHRoZSBlbWFpbCAke3VzZXIuZW1haWx9IGFscmVhZHkgZXhpc3RzYDtcblxuICAgIC8vIGdlbmVyYXRlIG5ldyB1c2VyIGlkXG4gICAgdXNlci5pZCA9IHVzZXJzLmxlbmd0aCA/IE1hdGgubWF4KC4uLnVzZXJzLm1hcCh4ID0+IHguaWQpKSArIDEgOiAxO1xuXG4gICAgLy8gc2V0IGRhdGUgY3JlYXRlZCBhbmQgdXBkYXRlZFxuICAgIHVzZXIuZGF0ZUNyZWF0ZWQgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XG4gICAgdXNlci5kYXRlVXBkYXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICAgIC8vIGFkZCBhbmQgc2F2ZSB1c2VyXG4gICAgdXNlcnMucHVzaCh1c2VyKTtcbiAgICBzYXZlRGF0YSgpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGUoaWQsIHsgbmFtZSwgbWVzc2FnZSB9KSB7XG4gICAgY29uc3QgcGFyYW1zID0geyBuYW1lLCBtZXNzYWdlfTtcbiAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCh4ID0+IHguaWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSk7XG5cbiAgICAvLyB2YWxpZGF0ZVxuICAgIGlmIChwYXJhbXMuZW1haWwgIT09IHVzZXIuZW1haWwgJiYgdXNlcnMuZmluZCh4ID0+IHguZW1haWwgPT09IHBhcmFtcy5lbWFpbCkpXG4gICAgICAgIHRocm93IGBVc2VyIHdpdGggdGhlIGVtYWlsICR7cGFyYW1zLmVtYWlsfSBhbHJlYWR5IGV4aXN0c2A7XG5cbiAgICAvLyBvbmx5IHVwZGF0ZSBwYXNzd29yZCBpZiBlbnRlcmVkXG4gICAgaWYgKCFwYXJhbXMucGFzc3dvcmQpIHtcbiAgICAgICAgZGVsZXRlIHBhcmFtcy5wYXNzd29yZDtcbiAgICB9XG5cbiAgICAvLyBzZXQgZGF0ZSB1cGRhdGVkXG4gICAgdXNlci5kYXRlVXBkYXRlZCA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcblxuICAgIC8vIHVwZGF0ZSBhbmQgc2F2ZVxuICAgIE9iamVjdC5hc3NpZ24odXNlciwgcGFyYW1zKTtcbiAgICBzYXZlRGF0YSgpO1xufVxuXG4vLyBwcmVmaXhlZCB3aXRoIHVuZGVyc2NvcmUgJ18nIGJlY2F1c2UgJ2RlbGV0ZScgaXMgYSByZXNlcnZlZCB3b3JkIGluIGphdmFzY3JpcHRcbmZ1bmN0aW9uIF9kZWxldGUoaWQpIHtcbiAgICAvLyBmaWx0ZXIgb3V0IGRlbGV0ZWQgdXNlciBhbmQgc2F2ZVxuICAgIHVzZXJzID0gdXNlcnMuZmlsdGVyKHggPT4geC5pZC50b1N0cmluZygpICE9PSBpZC50b1N0cmluZygpKTtcbiAgICBzYXZlRGF0YSgpO1xuICAgIFxufVxuXG4vLyBwcml2YXRlIGhlbHBlciBmdW5jdGlvbnNcblxuZnVuY3Rpb24gc2F2ZURhdGEoKSB7XG4gICAgZnMud3JpdGVGaWxlU3luYygnZGF0YS91c2Vycy5qc29uJywgSlNPTi5zdHJpbmdpZnkodXNlcnMsIG51bGwsIDQpKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/users-repo.js\n");

/***/ }),

/***/ "./pages/api/users/[id].js":
/*!*********************************!*\
  !*** ./pages/api/users/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helpers */ \"./helpers/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);\n\nfunction handler(req, res) {\n  switch (req.method) {\n    case 'GET':\n      return getUserById();\n\n    case 'PUT':\n      return updateUser();\n\n    case 'DELETE':\n      return deleteUser();\n\n    default:\n      return res.status(405).end(`Method ${req.method} Not Allowed`);\n  }\n\n  function getUserById() {\n    const user = helpers__WEBPACK_IMPORTED_MODULE_0__[\"usersRepo\"].getById(req.query.id);\n    return res.status(200).json(user);\n  }\n\n  function updateUser() {\n    try {\n      helpers__WEBPACK_IMPORTED_MODULE_0__[\"usersRepo\"].update(req.query.id, req.body);\n      return res.status(200).json({});\n    } catch (error) {\n      return res.status(400).json({\n        message: error\n      });\n    }\n  }\n\n  function deleteUser() {\n    helpers__WEBPACK_IMPORTED_MODULE_0__[\"usersRepo\"].delete(req.query.id);\n    return res.status(200).json({});\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlcnMvLmpzPzYxZTkiXSwibmFtZXMiOlsiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImdldFVzZXJCeUlkIiwidXBkYXRlVXNlciIsImRlbGV0ZVVzZXIiLCJzdGF0dXMiLCJlbmQiLCJ1c2VyIiwidXNlcnNSZXBvIiwiZ2V0QnlJZCIsInF1ZXJ5IiwiaWQiLCJqc29uIiwidXBkYXRlIiwiYm9keSIsImVycm9yIiwibWVzc2FnZSIsImRlbGV0ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRWVBLHNFQUFmOztBQUVBLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN2QixVQUFRRCxHQUFHLENBQUNFLE1BQVo7QUFDSSxTQUFLLEtBQUw7QUFDSSxhQUFPQyxXQUFXLEVBQWxCOztBQUNKLFNBQUssS0FBTDtBQUNJLGFBQU9DLFVBQVUsRUFBakI7O0FBQ0osU0FBSyxRQUFMO0FBQ0ksYUFBT0MsVUFBVSxFQUFqQjs7QUFDSjtBQUNJLGFBQU9KLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLENBQXFCLFVBQVNQLEdBQUcsQ0FBQ0UsTUFBTyxjQUF6QyxDQUFQO0FBUlI7O0FBV0EsV0FBU0MsV0FBVCxHQUF1QjtBQUNuQixVQUFNSyxJQUFJLEdBQUdDLGlEQUFTLENBQUNDLE9BQVYsQ0FBa0JWLEdBQUcsQ0FBQ1csS0FBSixDQUFVQyxFQUE1QixDQUFiO0FBQ0EsV0FBT1gsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUJMLElBQXJCLENBQVA7QUFDSDs7QUFFRCxXQUFTSixVQUFULEdBQXNCO0FBQ2xCLFFBQUk7QUFDQUssdURBQVMsQ0FBQ0ssTUFBVixDQUFpQmQsR0FBRyxDQUFDVyxLQUFKLENBQVVDLEVBQTNCLEVBQStCWixHQUFHLENBQUNlLElBQW5DO0FBQ0EsYUFBT2QsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQk8sSUFBaEIsQ0FBcUIsRUFBckIsQ0FBUDtBQUNILEtBSEQsQ0FHRSxPQUFPRyxLQUFQLEVBQWM7QUFDWixhQUFPZixHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCTyxJQUFoQixDQUFxQjtBQUFFSSxlQUFPLEVBQUVEO0FBQVgsT0FBckIsQ0FBUDtBQUNIO0FBQ0o7O0FBRUQsV0FBU1gsVUFBVCxHQUFzQjtBQUNsQkkscURBQVMsQ0FBQ1MsTUFBVixDQUFpQmxCLEdBQUcsQ0FBQ1csS0FBSixDQUFVQyxFQUEzQjtBQUNBLFdBQU9YLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JPLElBQWhCLENBQXFCLEVBQXJCLENBQVA7QUFDSDtBQUNKIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXJzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2Vyc1JlcG8gfSBmcm9tICdoZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcblxuZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgICAgICBjYXNlICdHRVQnOlxuICAgICAgICAgICAgcmV0dXJuIGdldFVzZXJCeUlkKCk7XG4gICAgICAgIGNhc2UgJ1BVVCc6XG4gICAgICAgICAgICByZXR1cm4gdXBkYXRlVXNlcigpO1xuICAgICAgICBjYXNlICdERUxFVEUnOlxuICAgICAgICAgICAgcmV0dXJuIGRlbGV0ZVVzZXIoKTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHtyZXEubWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VXNlckJ5SWQoKSB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vyc1JlcG8uZ2V0QnlJZChyZXEucXVlcnkuaWQpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24odXNlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVXNlcigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHVzZXJzUmVwby51cGRhdGUocmVxLnF1ZXJ5LmlkLCByZXEuYm9keSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe30pO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgbWVzc2FnZTogZXJyb3IgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVVc2VyKCkge1xuICAgICAgICB1c2Vyc1JlcG8uZGVsZXRlKHJlcS5xdWVyeS5pZCk7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7fSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/users/[id].js\n");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiP2E0MGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///fs\n");

/***/ })

/******/ });