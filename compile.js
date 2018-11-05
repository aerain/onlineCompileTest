var express = require('express');
var router = express.Router();
const fs = require('fs');
const { spawnSync } = require('child_process');

var bufferData = '',
    bufferError = '';

router.post('/', function(req, res, next) {

    let { sourceCode } = req.body;
    console.log(sourceCode.match(/system/g));
    if(sourceCode.match(/system/g) !== null) {
        res.send('{"error": "system 함수는 사용할 수 없습니다."}');
        return;
    }
    fs.writeFile('compile/main.c', sourceCode, 'utf8', (err) => {
        if(err) {
            res.send(err);
        }
        let exec = spawnSync('bash', ['compile/build.sh']);
        let sendJson = {
            execute: exec.stdout.toString(),
            error: exec.stderr.toString(),
        }
        console.log(exec.stdout.toString());
        res.send(JSON.stringify(sendJson));
    });
});
// #include <stdio.h>

// int main(void) {
// printf("hello!");
// return 0;
// }
module.exports = router;
