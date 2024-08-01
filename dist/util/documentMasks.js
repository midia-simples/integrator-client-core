"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cpfMask = exports.cnpjMask = exports.MaskCpfOrCnpjByLength = void 0;

var _removeNotNumbers = require("./removeNotNumbers");

const cpfMask = str => String(str).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');

exports.cpfMask = cpfMask;

const cnpjMask = str => String(str).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');

exports.cnpjMask = cnpjMask;

const MaskCpfOrCnpjByLength = (document, documentOnlyNumbers = (0, _removeNotNumbers.removeNotNumbers)(document)) => documentOnlyNumbers.length > 11 ? cnpjMask(documentOnlyNumbers) : cpfMask(documentOnlyNumbers);

exports.MaskCpfOrCnpjByLength = MaskCpfOrCnpjByLength;