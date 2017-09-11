var chalk = require('chalk');
const log = console.log


function run () {
    var path = require('path');
    var fs = require('fs');

    var entry = 'index.js';
    var data = 'data.json';
    var root = '';

    arguments = process.argv;
    arguments.forEach((arg, index) => {
        if(arg === '-m') {
            entry = arguments[index + 1] || entry;
        }
        if(arg === '-p') {
            data = arguments[index + 1] || data;
        }
        if(arg === '-d') {
            process.env.INIT_CWD = arguments[index + 1] || process.env.INIT_CWD;
        }
    });


    var entryPath = path.resolve(process.env.INIT_CWD, entry);
    var dataPath = path.resolve(process.env.INIT_CWD, data);

    if(!fs.existsSync(entryPath)) {
        log(chalk.redBright('函数入口文件(index.js)不存在！'));
        return;
    }
    if(!fs.existsSync(dataPath)) {
        log(chalk.redBright('参数文件(daa.json)不存在！'));
        return;
    }

    var func = require(entryPath);
    var data = require(dataPath);

    func.handler(JSON.stringify(data), {}, function(error, data) {
        var now = new Date();
        var rtn = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate() + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        if (error) {
            rtn += '【error】';
        } else {
            rtn += '【info】';
        }
        rtn += '函数运行结果：';
        console.log(rtn);
        log(error || data);
    });
}

exports.run = run;