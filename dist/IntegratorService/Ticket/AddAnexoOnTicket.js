"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddAnexoOnTicket {
  async run({
    anexo_base64,
    codoco
  }) {
    var _data$data;

    const {
      data
    } = await _Integrator.default.Attendence.addAnexo({
      obs: 'Arquivo enviado pelo usuário',
      nome_anexo: 'arquivo_anexo.png',
      versao: '.png',
      codoca: '',
      anexo: anexo_base64,
      codoco
    });
    const {
      error
    } = data;

    if (error) {
      throw new _ServiceError.default(400, 'Erro ao enviar anexo.');
    }

    return data === null || data === void 0 ? void 0 : (_data$data = data.data) === null || _data$data === void 0 ? void 0 : _data$data.results[0];
  }

}

var _default = new AddAnexoOnTicket();

exports.default = _default;