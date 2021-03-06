const { webpackConfig } = require('direflow-scripts')

module.exports = (config, env) => ({
  ...webpackConfig(config, env)
})
