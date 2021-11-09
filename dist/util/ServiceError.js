"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ServiceError extends Error {
  constructor(status, ...args) {
    super(args);
    this.status = status;
    Error.captureStackTrace(this, ServiceError);
  }

}

var _default = ServiceError;
exports.default = _default;