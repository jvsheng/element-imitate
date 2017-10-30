"use strict";

var uppercamelcase = require('uppercamelcase');
var path = require('path');
var fileSave = require('file-save');

const componentsFile = (path.join(__dirname, '../../packages'));
console.log(componentsFile)
console.log(path.join(componentsFile,path.join('../../test/unit', 'test.js')))