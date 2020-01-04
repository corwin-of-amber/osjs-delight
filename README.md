# osjs-delight

This repo is designed to help with the basic scaffolding of OS.js.
Based on [os-js/OS.js](https://github.com/os-js/OS.js), it offers a quick peek into the workings of OS.js's core client modules:
 * [@osjs/client](https://github.com/os-js/osjs-client) – `Core` and core providers.
   (`CoreServiceProvider`, `DesktopServiceProvider`, `AuthServiceProvider`, `VFSServiceProvider` and a couple of others).
 * [@osjs/gui](https://github.com/os-js/osjs-gui) – `GUIServiceProvider`.
 * [@osjs/panels](https://github.com/os-js/osjs-panels) – `PanelServiceProvider`, responsible for the global menu,
   task bar, and tray.
 
This version includes these packages as Git submodules, and relies on [Parcel](https://parceljs.org)✨
for fast and intuitive bundle creation directly from source, including source maps for better developer
experience.

## Quick start

 1. Clone this repo recursively.
```sh
% git clone --recursive https://github.com/corwin-of-amber/osjs-delight
```

 2. Install dependencies.
```sh
% npm install
```

 3. Copy package assets to `dist/` (a poor-man's `package:discover`).
```sh
% ./collect-assets.sh
```

 4. Create the bundle!
```
% parcel watch src/index.html
```
 And serve the files from the `dist/` directory.
 
 Replace `watch` with `serve` to also run the Parcel development server, which serves outputs on
 `http://localhost:1234` and supports auto-refresh and hot swapping.
 
 Replace `watch` with `build` to create a production build suitable for hosting. 
