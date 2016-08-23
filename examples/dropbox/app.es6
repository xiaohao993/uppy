import Uppy from '../../../../src/core/Core.js'
import Dropbox from '../../../../src/plugins/GoogleDrive'

const uppy = new Uppy({wait: false})
uppy
  .use(Dropbox, {selector: '#target'})
  .run()

const drop = new Dropbox()

console.log(uppy.type)
console.dir(drop)
