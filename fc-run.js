var chalk = require('chalk');


function run () {
    var path = require('path');
    var fs = require('fs');

    var entry = 'index.js';
    var data = 'data.json';

    arguments = process.argv;
    arguments.forEach((arg, index) => {
        if(arg === '-m') {
            entry = arguments[index + 1] || entry;
        }
        if(arg === '-d') {
            data = arguments[index + 1] || data;
        }
    });

    var entryPath = path.resolve(__dirname, entry);
    var dataPath = path.resolve(__dirname, data);

    if(!fs.existsSync(entryPath)) {
        chalk.magenta('函数入口文件(index.js)不存在！');
        return;
    }
    if(!fs.existsSync(dataPath)) {
        chalk.magenta('参数文件(daa.json)不存在！');
        return;
    }

    var func = require('./' + entry);
    var data = require('./' + data);

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
        console.log(error || data);
    });
}

exports.run = run;