'use strict'

const Yaml = require('js-yaml')
const Fs = require('fs')

try {
  const conf = Yaml.safeLoad(Fs.readFileSync('conf.yml', 'utf8'))
  const indentedJson = JSON.stringify(conf, null, 4)
  console.log(indentedJson)
} catch (err) {
  console.log(err)
}

module.exports = {
  conf
}
