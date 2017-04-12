# Clean up previous distributions
echo "CLEAN - Previous distributions"
rm -rf dist
rm -rf build

# Variables
NGC="node node_modules/.bin/ngc"
TSC="node node_modules/.bin/tsc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
echo "NGC - Build ES2015"
$NGC -p src/tsconfig-build.json

# Rollup angular-emojione.js
echo "ROLLUP - Build ES2015"
$ROLLUP -e @angular/core,emojione,emojione/index -f es build/angular-emojione.js -o dist/angular-emojione.js

# Run Angular Compiler to ES5
echo "NGC - Build ES5"
$NGC -p src/tsconfig-es5.json

# Rollup angular-emojione.js
echo "ROLLUP - Build ES5"
$ROLLUP -e @angular/core,emojione,emojione/index -f es build/angular-emojione.js -o dist/angular-emojione.es5.js

# Copy non-js files from build
echo "COPY - Non-js Files"
rsync -a --exclude=*.js build/ dist

# Copy library package.json
echo "COPY - package.json"
cp ./src/package.json dist/package.json

echo "*** BUILD SUCCESSFUL ***"
