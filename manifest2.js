{
	"manifest_version": 2,
	"name": "'Improve YouTube!' (Video & YouTube Tools)🎧",
	"short_name": "ImprovedTube",
	"description": "__MSG_description_ext__",
	"version": "4.0.35",
	"default_locale": "en",
	"icons": {
								
		"16": "assets/icons/16.png",
		"32": "assets/icons/32.png",
		"48": "assets/icons/48.png",
		"128": "assets/icons/128.png"
	},
	"background": {
		"scripts": [
			"background.js"
		]
	},
	"browser_action": {
		"default_popup": "options-page/index.html"
	},
	"options_page": "options-page/index.html",
	"content_scripts": [
		{
			"all_frames": true,
			"css": [
				"content-scripts/extension-context/youtube-features/content-styles.css",
				"content-scripts/extension-context/youtube-features/night-mode/night-mode.css",
				"content-scripts/extension-context/youtube-features/general/general.css",
				"content-scripts/extension-context/youtube-features/appearance/header/header.css",
				"content-scripts/extension-context/youtube-features/appearance/player/player.css",
				"content-scripts/extension-context/youtube-features/appearance/details/details.css",
				"content-scripts/extension-context/youtube-features/appearance/sidebar/sidebar.css",
				"content-scripts/extension-context/youtube-features/appearance/comments/comments.css",
				"content-scripts/extension-context/youtube-features/appearance/footer/footer.css"
			],
			"exclude_matches": [
				"https://www.youtube.com/audiolibrary/*",
				"https://www.youtube.com/tv*"
			],
			"js": [
				"assets/satus/satus.js",
				"content-scripts/extension-context/core.js",
				"content-scripts/extension-context/functions.js",
				"content-scripts/extension-context/youtube-features/night-mode/night-mode.js",
				"content-scripts/extension-context/youtube-features/general/general.js",
				"content-scripts/extension-context/youtube-features/appearance/player/player.js",
				"content-scripts/extension-context/youtube-features/appearance/details/details.js",
				"content-scripts/extension-context/youtube-features/appearance/sidebar/sidebar.js",
				"content-scripts/extension-context/youtube-features/appearance/comments/comments.js",
				"content-scripts/extension-context/init.js"
			],
			"matches": [
				"https://www.youtube.com/*"
			],
			"run_at": "document_start"
		}
	],
	"offline_enabled": true,
	"optional_permissions": [
		"downloads"
	],
	"permissions": [
		"contextMenus",
		"storage"
	],
	"web_accessible_resources": [
			"options-page/index.html",
			"content-scripts/website-context/core.js",
			"content-scripts/website-context/functions.js",
			"content-scripts/website-context/youtube-features/appearance.js",
			"content-scripts/website-context/youtube-features/themes.js",
			"content-scripts/website-context/youtube-features/player.js",
			"content-scripts/website-context/youtube-features/playlist.js",
			"content-scripts/website-context/youtube-features/channel.js",
			"content-scripts/website-context/youtube-features/shortcuts.js",
			"content-scripts/website-context/youtube-features/blacklist.js",
			"content-scripts/website-context/youtube-features/settings.js",
			"content-scripts/website-context/init.js",
			"content-scripts/website-context/mutations.js"
			]
}
