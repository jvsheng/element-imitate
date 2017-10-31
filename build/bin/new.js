"use strict";

process.on('exit', function() {
    console.log('Process exit.')
});

if(!process.argv[2]) {
    console.log('组件名必填！');
    process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const upperCamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const ComponentName = upperCamelcase(componentname);
const PackagePath = path.join(__dirname, '../../packages', componentname);

const Files = [{
    filename: 'index.js',
    content: `import EL${ComponentName} from './src/${componentname}'

/* istanbul ignore next */
EL${ComponentName}.install = function(Vue){
    Vue.component(EL${ComponentName}.name, EL${ComponentName});
};

export default 'EL${ComponentName};'`
}, {
    filename: `./src/${componentname}.vue`,
    content: `<template>
    <div class="el-${componentname}"></div>
</template>

export default {
    name: EL${ComponentName}
}`
}, {
    filename: `../../test/unit/specs/${componentname}.spec.js`,
    content: `import {createTest, destroyVM} from '../util';
import EL${ComponentName} from 'packages/${componentname}';

describe(EL${ComponentName}, () => {
    let vm;
    afterEach(() => {
        destroyVM(vm);
    });
    
    it('create', () => {
        vm = createTest(EL${ComponentName}, true);
        expect(vm.$el).to.be.exist;     
    });
});`
}];

// component.json
const componentsjson = require('../../components.json');
if(componentsjson[componentname]) {
    console.log(`${componentname}组件已存在！`);
    process.exit(1);
}

componentsjson[componentname] = `./packages/${componentname}/index.js`;
fileSave(path.join(__dirname, '../../components.json'))
    .write(JSON.stringify(componentsjson, null, '  '), 'utf-8')
    .end('\n');

// 添加package
Files.forEach(file => {
    fileSave(path.join(PackagePath, file.filename))
        .write(file.content, 'utf-8')
        .end('\n');
});