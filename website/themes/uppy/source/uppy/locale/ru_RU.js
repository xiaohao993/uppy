(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var ru = {};

ru.strings = {
  'choose_file': 'Выберите файл',
  'or_drag_drop': 'или перенесите его сюда',
  'number_of_files_chosen': 'выбран %{smart_count} файл |||| выбрано %{smart_count} файла |||| выбрано %{smart_count} файлов'
};

ru.pluralize = function (n) {
  return n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
};

Uppy.locale.ru = ru;
exports['default'] = ru;
module.exports = exports['default'];

},{}]},{},[1]);
