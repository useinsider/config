const defineConfig = require('@useinsider/release-config');
const { name } = require('./package.json');

module.exports = defineConfig({ tagFormat: `${name}@\${version}` });
