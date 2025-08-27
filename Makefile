install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

brain-even:
	node bin/brain-even.js	

brain-calc:
	node bin/brain-calc.js	

brain-progression:
	node bin/brain-progression.js

brain-prime:
	node bin/brain-prime.js

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix
