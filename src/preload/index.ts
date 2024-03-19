import { contextBridge, ipcRenderer } from 'electron'

if (!process.contextIsolated) {
  throw new Error('contextIsolation must be enabled in the BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    getCredentials: () => ipcRenderer.invoke('getCredentials'),
    generateAccessToken: () => ipcRenderer.invoke('generateAccessToken'),
    readAccessToken: (type: 'default' | 'user') => ipcRenderer.invoke('readAccessToken', type),
    login: () => ipcRenderer.invoke('login')
  })
} catch (e) {
  console.error(e)
}
