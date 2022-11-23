"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Provisional extends _Resource.default {
  details({
    codcli
  }) {
    return this.request('services.details', {
      codcli,
      status: 'I'
    });
  }

  execute({
    codsercli,
    modulo
  }) {
    return this.request('habilitacaoProvisoria.execute', {
      codsercli,
      modulo
    });
  }

  executeVelocidade({
    codsercli,
    modulo
  }) {
    return this.request('habilitacaoProvisoria.execute', {
      codsercli,
      modulo
    });
  }

}

var _default = new Provisional();

exports.default = _default;