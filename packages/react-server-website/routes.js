
module.exports = {
	middleware: [
		'./middleware/RequestToPort',
		'./middleware/Theme',
		'./middleware/Favicon',
		'./middleware/PageHeader',
		'./middleware/PageFooter',
		'./middleware/Analytics',
		'./middleware/CacheControl',
		'./middleware/DataBundleCache',
	],
	routes: {
		homepage: {
			path: ['/'],
			method: 'get',
			page: './pages/homepage',
		},
		docs: {
			path: ['/docs:path(.*)'],
			method: 'get',
			page: './pages/docs',
		},
		source: {
			path: ['/source:path(.*)'],
			method: 'get',
			page: './pages/source',
		},
		DocsApi: {
			path: ['/api/docs'],
			method: 'get',
			page: './pages/docs-api',
		},
		ContentsApi: {
			path: ['/api/contents'],
			method: 'get',
			page: './pages/contents-api',
		},
		DoccoApi: {
			path: ['/api/source'],
			method: 'get',
			page: './pages/source-api',
		},
		SourceContentsApi: {
			path: ['/api/source-contents'],
			method: 'get',
			page: './pages/source-contents-api',
		},
	},
};
