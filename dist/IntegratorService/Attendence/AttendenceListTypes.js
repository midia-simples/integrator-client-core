"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListTypes {
  async run() {
    var _await$Integrator$Att, _await$Integrator$Att2;

    const types = (_await$Integrator$Att = (await _Integrator.default.Attendence.listTypes()).data) === null || _await$Integrator$Att === void 0 ? void 0 : (_await$Integrator$Att2 = _await$Integrator$Att.data) === null || _await$Integrator$Att2 === void 0 ? void 0 : _await$Integrator$Att2.results;
    return types.filter(type => type.ativo === 'S').map(type => ({
      codocop: type.codocop,
      name: type.nome_ocop
    }));
  }

}

var _default = new ListTypes();

exports.default = _default;