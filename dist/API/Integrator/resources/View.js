"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class View extends _Resource.default {
  execute(data) {
    return this.request('view.execute', data);
  }

}

var _default = new View();

exports.default = _default;