import { check } from './function.js';
// const { check }= require('./function.js');

// console.logで"Hello World !"
console.log("Hello World !")

// メインのファイルで別のファイルのfunctionを実行する
check(process.argv[2]);