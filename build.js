const packager = require('electron-packager')

const name = "hoge"
const platform = 'win32'
const arch = 'x64'
const exportDir = [name, platform, arch].join("-")
const options = {
    dir: './', // 対象
    name: name, // 名前
    platform: platform,
    arch: arch,
    version: '2.0.8', // electron のバージョン
    //icon: './assets/testicon.ico', // アイコン
    overwrite: true, // 上書き
    // 無視ファイル
    ignore: "build\.js|installer\.js|\.gitignore|" + exportDir,
}

packager(options)
.then(appPath => {
    console.log('Package is Done!! path:'+appPath)
})