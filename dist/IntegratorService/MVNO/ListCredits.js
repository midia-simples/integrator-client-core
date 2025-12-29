"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ListCredits {
  async run() {
    const {
      data: creditsList
    } = await _Integrator.default.Credits.list();

    if (creditsList.data.results) {
      return creditsList.data.results;
    }

    throw new _ServiceError.default(500, 'Erro desconhecido');
  }

}

var _default = new ListCredits();

exports.default = _default;