"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Credits extends _Resource.default {
  list(data) {
    return this.request('creditos.list', data);
  }

  add(data) {
    return this.execute('creditos.add', data);
  }

}

var _default = new Credits();

exports.default = _default;