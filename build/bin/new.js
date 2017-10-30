"use strict";

process.on('exit', function () {
    console.log('exit！');
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
const PackagePath = path.resolve(__dirname, '../../packages', componentname);
const Files = [{
    filename: 'index.js',
    content: `import EL${ComponentName} from './src/main.vue'
    
/* istanbul ignore next */
EL${ComponentName}.install = function(Vue){
    Vue.component(EL${ComponentName}.name, EL${ComponentName});
}
export default EL${ComponentName}`
}, {
    filename: 'src/main.vue',
    content: `<template>
    <div class="el-${componentname}"></div>
</template>

<script>
export default {
    name: 'EL${ComponentName}'
}
</script>`
}, {
    filename: path.join('../../test/unit/specs', `${componentname}.spec.js`),
    content: `import {createTest, destoryVM} from '../util'
import EL${ComponentName} from 'packages/${componentname}'

describe(EL${ComponentName}, () => {
    let vm;
    afterEach(() => {
        destoryVM(vm);
    });
    
    it('create', () => {
        createTest(EL${ComponentName}, true);
        expect(vm.$el).to.exist;
    });
});`
}];

Files.forEach(function (file) {
    fileSave(path.join(PackagePath, file.filename))
        .write(file.content)
        .end('\n');
});