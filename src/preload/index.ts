import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    getCredentials: () => ipcRenderer.invoke('getCredentials'),
    generateAccessToken: () => ipcRenderer.invoke('generateAccessToken'),
    readAccessToken: () => ipcRenderer.invoke('readAccessToken')
  })
} catch (e) {
  console.error(e)
}
