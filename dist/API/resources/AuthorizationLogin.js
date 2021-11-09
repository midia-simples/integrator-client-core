"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AuthorizationLogin extends _Resource.default {
  list(data) {
    return this.request('sap.lista_login', data);
  }

}

var _default = AuthorizationLogin;
exports.default = _default;