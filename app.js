'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./index.css');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _reportWebVitals = require('./reportWebVitals');

var _reportWebVitals2 = _interopRequireDefault(_reportWebVitals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var temp = _react2.default.createElement(
  'h1',
  null,
  'WELCOME!!!'
);
_reactDom2.default.render(temp, document.getElementById('root'));
_reactDom2.default.render(_react2.default.createElement(
  _react2.default.StrictMode,
  null,
  _react2.default.createElement(_App2.default, null)
), document.getElementById('king'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, _reportWebVitals2.default)();
