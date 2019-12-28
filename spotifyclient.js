const {app, BrowserWindow} = require('electron');
const path  = require('path');
const url = require('url');

let win;
app.commandLine.appendSwitch('widevine-cdm-path', '/path/to/widevine_library')
// The version of plugin can be got from `chrome://components` page in Chrome.
app.commandLine.appendSwitch('widevine-cdm-version', '1.4.8.866')
function createWindow(){
    let win = new BrowserWindow({
        width: 800, height: 600, icon:__dirname+'/img/bb.ico',
        webPreferences: {
            nodeIntegration: false
        }
    })
    win.loadURL('https://krunker.io')

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