const { BrowserWindow, app, ipcMain } = require("electron")
const path = require('path')

app.whenReady().then(function() {
	const browserWindow = new BrowserWindow({
		show: false,
		width: 1172,
		height: 720,
		webPreferences: {
			preload: path.join(__dirname, 'preload.js')
		}
	})

	browserWindow.setMenu(null)

	browserWindow.loadFile('public/index.html')

	browserWindow.webContents.on('did-finish-load', () => browserWindow.show())

	ipcMain.on('toggleDevTools', () => browserWindow.webContents.toggleDevTools())

	ipcMain.on('setBounds', (_, bounds) => {
		browserWindow.setBounds(JSON.parse(bounds))
	})

	ipcMain.handle('getBounds', () => browserWindow.getBounds())
})