const path = require('path')
const electronInstaller = require('electron-winstaller')
console.log("Making Installer...(It takes a few minutes)")

// app名等にハイフンと日本語が使えない
// authorやdescription，nameなどのデフォルトはpackage.jsonから読まれるので注意
const appDir = './' + 'hoge' + '-win32-x64'

resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: appDir,
  outputDirectory: './installer',

  /*Windows Application Model ID (appId). Defaults to the name field in your app's package.json file.*/
  name: 'hoge',
  /*The title value for the nuget package metadata.
    Defaults to the productName field and then the name field from your app's package.json file when unspecified.*/
  title: 'hoge',

  //iconUrl: path.join(process.cwd(), 'assets/testicon.ico'),
  //loadingGif: path.join(process.cwd(), 'assets/testloading.gif'),

  /* The name to use for the generated Setup.exe file */
  setupExe: 'hoge' + '_Setup.exe',

  /*The name of your app's main .exe file.
    This uses the name field in your app's package.json file with an added .exe extension when unspecified.*/
  exe: 'hoge.exe',
  noMsi: 'Yes',

})

resultPromise
.then(
  () => console.log("Making Installer is Done!"),
  (e) => console.log(`No dice: ${e.message}`)
)