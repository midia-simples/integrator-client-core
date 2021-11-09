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
    codsercli
  }) {
    return this.request('habilitacaoProvisoria.execute', {
      codsercli
    });
  }

}

var _default = Provisional;
exports.default = _default;