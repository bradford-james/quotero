#!/usr/bin/env node
const { pckg, cli } = require('..')

if (require.main === module) {
  cli()
} else {
  module.exports = pckg()
}
