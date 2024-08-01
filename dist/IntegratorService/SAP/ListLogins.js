"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListLogins {
  async run({
    codcli
  }) {
    const {
      data
    } = await _Integrator.default.AuthorizationLogin.list({
      codcli
    });

    if (data.data) {
      const list = data.data.results;
      return list.map(credenciais => ({
        login: credenciais.login,
        codsercli: credenciais.codsercli
      }));
    }

    return [];
  }

}

var _default = new ListLogins();

exports.default = _default;