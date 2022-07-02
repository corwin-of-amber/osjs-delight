mkdir -p dist/icons dist/themes
cp -r node_modules/@osjs/gnome-icons/dist/ dist/icons/GnomeIcons
cp -r node_modules/@osjs/standard-theme/dist/ dist/themes/StandardTheme
node -p 'JSON.stringify([
           require("@osjs/standard-theme/metadata.json"), 
           require("@osjs/gnome-icons/metadata.json")
         ])' > dist/metadata.json