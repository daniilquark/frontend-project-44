install:
	npm ci
brain-games:
	node bin/brain-games.mjs
publish:
	npm publish --dry-run
