"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Attendence extends _Resource.default {
  addAnexo(data) {
    return this.request('atendimento.addAnexo', data);
  }

}

var _default = new Attendence();

exports.default = _default;