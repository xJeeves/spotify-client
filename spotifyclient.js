const {app, BrowserWindow} = require('electron');
const path  = require('path');
const url = require('url');

let win;
// DO NOT FORGETTT TOO ADD WIDEVINE PLUGIN TO YOUR CODEEEEEEEEEEEEEEEEREEEEE SPOTIFY WILL DENY PLAYBACK WITHOUT ITTTTTTTT
app.commandLine.appendSwitch('widevine-cdm-path', 'Program Files(x86)/Google/Chrome/Application/CHROME_VERSION/WidevineCdm/_platform_specific/win_(x86|x64)/') //windows user will have this as their default path
// The version of plugin can be got from `chrome://components` page in Chrome.
app.commandLine.appendSwitch('widevine-cdm-version', '1.4.8.866') //check the file to match 'libwidevinecdm.dylib'
function createWindow(){
    let win = new BrowserWindow({
        width: 800, height: 600, icon:__dirname+'/img/bb.ico',
        webPreferences: {
            nodeIntegration: false
        }
    })
    win.loadURL('https://open.spotify.com/') //make sure URL of it is directly linked to spotify's web based player!

    win.on('closed', () => {
        win = null;
    })
}
app.on('ready', createWindow);
app.on('window-all-close', () =>{
    if(process.platform !== 'darwin'){
        app.quit();
    }
})
