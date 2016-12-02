echo "Removing previous node_modules"
rm -rf ./node_modules
echo "Finished removing previous node_modules"
echo "Installing npm packages"
npm install
echo "Finished installing npm packages"

echo "Cleaning up typings..."
rm -rf ./typings/globals
echo "Finished cleaning up typings"
echo "Reinstalling typings..."
node ./node_modules/typings install --save --global dt~react dt~react-dom dt~node
echo "Finished reinstalling typings"
