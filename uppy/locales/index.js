(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var en_US = {};

en_US.strings = {
  chooseFile: 'Choose a file',
  youHaveChosen: 'You have chosen: %{fileName}',
  orDragDrop: 'or drag it here',
  filesChosen: {
    0: '%{smart_count} file selected',
    1: '%{smart_count} files selected'
  },
  filesUploaded: {
    0: '%{smart_count} file uploaded',
    1: '%{smart_count} files uploaded'
  },
  files: {
    0: '%{smart_count} file',
    1: '%{smart_count} files'
  },
  uploadFiles: {
    0: 'Upload %{smart_count} file',
    1: 'Upload %{smart_count} files'
  },
  selectToUpload: 'Select files to upload',
  closeModal: 'Close Modal',
  upload: 'Upload'
};

en_US.pluralize = function (n) {
  if (n === 1) {
    return 0;
  }
  return 1;
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.en_US = en_US;
}

exports.default = en_US;

},{}],2:[function(require,module,exports){
'use strict';

var _en_US = require('./en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _ru_RU = require('./ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _pt_BR = require('./pt_BR');

var _pt_BR2 = _interopRequireDefault(_pt_BR);

var _zh_CN = require('./zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Parent
module.exports = {
  en_US: _en_US2.default,
  ru_RU: _ru_RU2.default,
  pt_BR: _pt_BR2.default,
  zh_CN: _zh_CN2.default
};

},{"./en_US":1,"./pt_BR":3,"./ru_RU":4,"./zh_CN":5}],3:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var pt_BR = {};

pt_BR.strings = {
  chooseFile: 'Escolha um arquivo',
  youHaveChosen: 'Você escolheu: %{fileName}',
  orDragDrop: 'ou arraste-o aqui',
  filesChosen: {
    0: '%{smart_count} arquivo selecionado',
    1: '%{smart_count} arquivos selecionados'
  },
  filesUploaded: {
    0: '%{smart_count} arquivo enviado',
    1: '%{smart_count} arquivos enviados'
  },
  files: {
    0: '%{smart_count} arquivo',
    1: '%{smart_count} arquivos'
  },
  uploadFiles: {
    0: 'Upload %{smart_count} arquivo',
    1: 'Upload %{smart_count} arquivos'
  },
  selectToUpload: 'Selecione arquivos para enviar',
  closeModal: 'Fechar Modal',
  upload: 'Enviar'
};

pt_BR.pluralize = function (n) {
  if (n === 1) {
    return 0;
  }
  return 1;
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.pt_BR = pt_BR;
}

exports.default = pt_BR;

},{}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var ru_RU = {};

ru_RU.strings = {
  chooseFile: 'Выберите файл',
  orDragDrop: 'или перенесите его сюда',
  youHaveChosen: 'Вы выбрали: %{file_name}',
  filesChosen: {
    0: 'Выбран %{smart_count} файл',
    1: 'Выбрано %{smart_count} файла',
    2: 'Выбрано %{smart_count} файлов'
  },
  upload: 'Загрузить'
};

ru_RU.pluralize = function (n) {
  if (n % 10 === 1 && n % 100 !== 11) {
    return 0;
  }

  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) {
    return 1;
  }

  return 2;
};

if (typeof window !== 'undefined' && typeof window.Uppy !== 'undefined') {
  window.Uppy.locales.ru_RU = ru_RU;
}

exports.default = ru_RU;

},{}],5:[function(require,module,exports){
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

},{}]},{},[2]);
