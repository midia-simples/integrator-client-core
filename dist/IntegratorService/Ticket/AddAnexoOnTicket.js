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
    codoco,
    description,
    fileName
  }) {
    var _data$data;

    const {
      data
    } = await _Integrator.default.Ged.addArquivo({
      obs: 'Arquivo enviado pelo usuário',
      descricao: description,
      codtarq: '01SW0MJ9VS',
      nome_arq: `${fileName}.png`,
      versao: '.png',
      codvin: 'OCORRENCIA',
      arquivo: anexo_base64,
      codigo_vin: codoco
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