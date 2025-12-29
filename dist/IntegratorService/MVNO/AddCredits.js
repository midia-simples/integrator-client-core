"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

var _isJSON = _interopRequireDefault(require("../../util/isJSON"));

var _ServiceError = _interopRequireDefault(require("../../util/ServiceError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AddCredits {
  async run({
    codvcre,
    codsercli
  }) {
    const {
      data
    } = await _Integrator.default.Credits.add({
      codvcre,
      codsercli
    });
    const {
      error,
      exception
    } = data;

    if (error) {
      throw new _ServiceError.default(400, exception);
    } else if ( // eslint-disable-next-line operator-linebreak
    typeof data === 'string' && !(0, _isJSON.default)(data) || !data.data.results) {
      throw new _ServiceError.default(400, 'Não foi possível adicionar créditos');
    }

    return data.data.results[0];
  }

}

var _default = new AddCredits();

exports.default = _default;