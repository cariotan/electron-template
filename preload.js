const { contextBridge, ipcRenderer, ipcMain } = require('electron');

contextBridge.exposeInMainWorld('electron', {
	setBounds: bounds => ipcRenderer.send('setBounds', bounds),
	getBounds: () => ipcRenderer.invoke('getBounds'),
	toggleDevTools: () => ipcRenderer.send('toggleDevTools')
})