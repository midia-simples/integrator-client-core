"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.protectPhoneNumber = exports.protectEmail = void 0;

var _removeNotNumbers = require("./removeNotNumbers");

var _phoneMask = require("./phoneMask");

// eslint-disable-next-line
const protectEmail = str => {
  const username = str.split('@')[0];
  const domain = str.split('@')[1];
  const start = username.slice(0, 3);
  const end = username.slice(3);
  let ended = '';

  for (let i = 0; i < end.length; i += 1) {
    ended += '*';
  }

  return `${start + ended}@${domain}`;
}; // eslint-disable-next-line


exports.protectEmail = protectEmail;

const protectPhoneNumber = str => {
  const value = (0, _phoneMask.celphoneMask)((0, _removeNotNumbers.removeNotNumbers)(str));
  const regex = /\((\d.+)\)(\d.+)-(\d.+)/gm;
  const subst = '($1)*****$3';
  return value.replace(regex, subst);
};

exports.protectPhoneNumber = protectPhoneNumber;