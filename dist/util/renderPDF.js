"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderPDF;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function renderPDF(url) {
  const {
    data: stream
  } = await (0, _axios.default)({
    url,
    method: 'GET',
    responseType: 'stream'
  });
  return {
    stream
  };
}