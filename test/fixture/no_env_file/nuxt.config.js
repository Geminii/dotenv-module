module.exports = {
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [
    ['~/../..']
  ],
  env: {
    foo: 'oof'
  }
}