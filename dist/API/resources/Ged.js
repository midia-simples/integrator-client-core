"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Ged extends _Resource.default {
  addArquivo(data) {
    return this.request('ged.addArquivo', data);
  }

}

var _default = Ged;
exports.default = _default;