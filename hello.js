import yargs from 'yargs/yargs';
import { check } from './function.js';
// const { check }= require('./function.js');

// console.logで"Hello World !"
console.log("Hello World !")

// メインのファイルで別のファイルのfunctionを実行する
check(process.argv[2]);

// yargsモジュールのメソッドを実行する
const myArgs = "--name 蔡 --age 0";
// parseメソッド実行 
const argv = yargs().parse(myArgs);
// 結果を表示する
console.log("名前:", argv.name); // 蔡 
console.log("年齢:", argv.age);  // 0
