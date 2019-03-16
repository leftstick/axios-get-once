'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var axios = _interopDefault(require('axios'));

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function create() {
  var previousCall = null;
  return function request(config) {
    if (previousCall) {
      previousCall.cancel('Only one request allowed at a time.');
    }

    previousCall = axios.CancelToken.source();
    return new Promise(function (resolve, reject) {
      axios(_objectSpread({}, config, {
        cancelToken: previousCall.token
      })).then(resolve).catch(function (err) {
        if (!axios.isCancel(err)) {
          reject(err);
        }
      });
    });
  };
}

exports.create = create;
