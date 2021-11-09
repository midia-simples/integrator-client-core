"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Service extends _Resource.default {
  list(data) {
    return this.request('service.list', data);
  }

  detail(data) {
    return this.request('service.detail', data);
  }

}

var _default = Service;
exports.default = _default;