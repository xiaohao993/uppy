(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var zh_CN = {};

zh_CN.strings = {
  chooseFile: '选择文件',
  youHaveChosen: '你已经选择了： %{fileName}',
  orDragDrop: '或者拖到这里来',
  filesChosen: {
    0: '已选 %{smart_count} 个文件'
  },
  filesUploaded: {
    0: '已上传 %{smart_count} 个文件'
  },
  files: {
    0: '%{smart_count} 个文件'
  },
  uploadFiles: {
    0: '上传 %{smart_count} 个文件'
  },
  selectToUpload: '选择文件以上传',
  closeModal: '关闭对话框',
  upload: '上传'
};

zh_CN.pluralize = function (n) {
  return 0;
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.zh_CN = zh_CN;
}

exports.default = zh_CN;

},{}]},{},[1]);
