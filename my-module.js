module.exports = {
    foo: "foo"
};

// my-module.jsモジュールをmyModuleオブジェクトとしてインポートする。
const myModule = require("./my-module");
console.log(myModule.foo); // => "foo"

const program = require("commander");