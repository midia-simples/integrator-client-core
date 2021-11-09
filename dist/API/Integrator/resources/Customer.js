"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Resource = _interopRequireDefault(require("./Resource"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Customer extends _Resource.default {
  exists(data) {
    return this.request('client.exists', data);
  }

  changePassword(data) {
    return this.request('client.changePassword', data);
  }

  getInfo({
    codcli
  }) {
    return this.request('client.getInfo', {
      codcli
    });
  }

  contacts({
    codcli
  }) {
    return this.request('contacts.list', {
      codcli
    });
  }

}

var _default = Customer;
exports.default = _default;