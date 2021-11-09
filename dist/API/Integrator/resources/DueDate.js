"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class DueDate extends _Resource.default {
  list(data) {
    return this.request('vencimentos.list', data);
  }

}

var _default = DueDate;
exports.default = _default;