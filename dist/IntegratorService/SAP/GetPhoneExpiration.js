"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Integrator = _interopRequireDefault(require("../../API/Integrator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetPhoneExpiration {
  async run({
    codsercli
  }) {
    const {
      data
    } = await _Integrator.default.PhoneExpiration.list({
      codsercli
    });

    if (data.data) {
      const expirations = data.data.results;
      return expirations;
    }

    return [];
  }

}

var _default = new GetPhoneExpiration();

exports.default = _default;