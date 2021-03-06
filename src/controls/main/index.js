import autoLaunch from './auto-launch'
import downloadHash from './download-hash'
import files from './files'
import menuShortcuts from './menu-shortcuts'
import openFileDialog from './open-file-dialog'
import openUrl from './open-url'
import openWebUI from './open-webui'
import pinnedFiles from './pinned-files'
import settings from './settings'
import takeScreenshot from './take-screenshot'
import toggleSticky from './toggle-sticky'

export default function (opts) {
  autoLaunch(opts)
  downloadHash(opts)
  files(opts)
  menuShortcuts(opts)
  openFileDialog(opts)
  openUrl(opts)
  openWebUI(opts)
  pinnedFiles(opts)
  settings(opts)
  takeScreenshot(opts)
  toggleSticky(opts)
}
