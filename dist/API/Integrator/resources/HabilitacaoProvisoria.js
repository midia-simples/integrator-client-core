"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HabilitacaoProvisoria extends _Resource.default {
  execute({
    codsercli,
    modulo = 'W'
  }) {
    return this.request('habilitacaoProvisoriaVelocidade.execute', {
      codsercli,
      modulo
    });
  }

}

var _default = new HabilitacaoProvisoria();

exports.default = _default;