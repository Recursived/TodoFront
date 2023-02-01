const {aliasWebpack, aliasJest} = require('react-app-alias')
const {alias} = require('react-app-rewire-alias');

const options = {}; // default is empty for most cases

module.exports.jest = aliasJest(options)

module.exports = aliasWebpack(options)

module.exports = function override(config) {
	const fallback = config.resolve.fallback || {};
	alias({
		'@components': 'src/components',
		'@containers': 'src/containers',
		'@utils': 'src/utils',
		'@hooks': 'src/hooks',
	})(config);
	return config;
};
