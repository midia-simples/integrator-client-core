"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Client = _interopRequireDefault(require("../http/Client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Resource {
  constructor() {
    this.client = new _Client.default();
    this.api = this.client.api;
  }

  async request(methodName, params) {
    const body = this.client.createBody('list', methodName, params);
    const response = await this.api(body);
    return response;
  }

  async execute(methodName, params) {
    const body = this.client.createBody('execute', methodName, params);
    const response = await this.api(body);
    return response;
  }

}

var _default = Resource;
exports.default = _default;