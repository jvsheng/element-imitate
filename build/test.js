"use strict";

var uppercamelcase = require('uppercamelcase');
var path = require('path');
var fileSave = require('file-save');

const componentsFile = require(path.join(__dirname, '../components.json'));
console.log(componentsFile['test'])

// fileSave("\\components.json").write('hello world', 'utf-8').end('\n');
