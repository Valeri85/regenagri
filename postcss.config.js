const plugins = {
	autoprefixer: {},
	'postcss-preset-env': {
		stage: 3,
		features: {
			'nesting-rules': true,
		},
	},
	'@csstools/postcss-global-data': {
		files: ['./src/styles/medias.module.css'],
	},
	'postcss-custom-media': {},
};

export default { plugins };
