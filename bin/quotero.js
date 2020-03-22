#!/usr/bin/env node
const { pckg, cli } = require('../index')

if (require.main === module) {
  cli()
} else {
  module.exports = pckg()
}
