"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class VerCadastro {
  async run({
    codcli
  }) {
    const {
      data
    } = await _Integrator.default.View.execute({
      _consulta: '01CLIENTE',
      codcli
    });
    return data;
  }

}

var _default = new VerCadastro();

exports.default = _default;