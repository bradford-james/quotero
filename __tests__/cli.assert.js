const { cli } = require('..')
const { version } = require('../package.json')

// Set Up - Tear Down -----------------------------------

global.console.log = jest.fn()

beforeAll(() => {
  process.argv.push('')
  process.argv.push('')
})

afterEach(() => {
  process.argv.pop()
})

// Tests -----------------------------------

console.log(cli)
describe('Version Command Tests', () => {
  it('should log the CLI version to the console (test 1)', () => {
    process.argv.push('--version')
    cli()
    expect(global.console.log).toHaveBeenCalledWith(`v${version}`)
  })

  it('should log the CLI version to the console (test 2)', () => {
    process.argv.push('-v')
    cli()
    expect(global.console.log).toHaveBeenCalledWith(`v${version}`)
  })
})

describe('Help Command Tests', () => {
  it('should log the CLI help output to the console (test 1)', () => {
    process.argv.push('--help')
    cli()
    expect(global.console.log).toHaveBeenCalledWith(
      expect.stringMatching(/quoter[\s\S]+version[\s\S]+help/)
    )
  })

  it('should log the CLI help output to the console (test 2)', () => {
    process.argv.push('-h')
    cli()
    expect.stringMatching(/quoter[\s\S]+version[\s\S]+help/)
  })
})

describe('No-Command Test', () => {
  it('should log a random quote + author to the console in the form of a string', () => {
    cli()
    expect(global.console.log).toHaveBeenCalledWith(expect.any(String))
  })
})
