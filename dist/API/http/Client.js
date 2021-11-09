"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _clientConfig = require("../../config/clientConfig");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Client {
  constructor() {
    this._api = async (data, additionalHeaders = {}) => {
      const {
        url
      } = (0, _clientConfig.getConfig)();
      const request = await _axios.default.post(url, data, {
        responseType: 'text',
        headers: {
          'Content-Type': 'application/json',
          'Accept-Encoding': 'gzip',
          ...additionalHeaders
        }
      });
      return {
        status: request.status,
        data: request.data
      };
    };

    this._createBody = (method = 'list', submethod, params) => {
      const {
        user,
        pass
      } = (0, _clientConfig.getConfig)();
      const paramsWithCredentials = { ...params,
        _user: user,
        _passwd: pass
      };
      return {
        request: {
          sendRequest: 'integrator.server',
          method,
          submethod,
          params: paramsWithCredentials
        }
      };
    };
  }

  get api() {
    return this._api;
  }

  get createBody() {
    return this._createBody;
  }

}

var _default = Client;
exports.default = _default;