"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GetCustomerWithStatus = _interopRequireDefault(require("./GetCustomerWithStatus"));

var _GetCustomerInfo = _interopRequireDefault(require("./GetCustomerInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetCustomerEmail {
  async run({
    document
  }) {
    const {
      codcli
    } = await _GetCustomerWithStatus.default.run({
      document
    });
    const {
      e_mail
    } = await _GetCustomerInfo.default.run({
      codcli
    });
    return e_mail;
  }

}

var _default = new GetCustomerEmail();

exports.default = _default;