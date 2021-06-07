import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		reactRefresh(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				"short_name": "todoList App",
				"name": "todoList App",
				"description": "control de tareas",
				"icons": [
					{
						"src": "iconPWA/windows10/SmallTile.scale-100.png",
						"sizes": "71x71"
					},
					{
						"src": "iconPWA/windows10/SmallTile.scale-125.png",
						"sizes": "89x89"
					},
					{
						"src": "iconPWA/windows10/SmallTile.scale-150.png",
						"sizes": "107x107"
					},
					{
						"src": "iconPWA/windows10/SmallTile.scale-200.png",
						"sizes": "142x142"
					},
					{
						"src": "iconPWA/windows10/SmallTile.scale-400.png",
						"sizes": "284x284"
					},
					{
						"src": "iconPWA/windows10/Square150x150Logo.scale-100.png",
						"sizes": "150x150"
					},
					{
						"src": "iconPWA/windows10/Square150x150Logo.scale-125.png",
						"sizes": "188x188"
					},
					{
						"src": "iconPWA/windows10/Square150x150Logo.scale-150.png",
						"sizes": "225x225"
					},
					{
						"src": "iconPWA/windows10/Square150x150Logo.scale-200.png",
						"sizes": "300x300"
					},
					{
						"src": "iconPWA/windows10/Square150x150Logo.scale-400.png",
						"sizes": "600x600"
					},
					{
						"src": "iconPWA/windows10/Wide310x150Logo.scale-100.png",
						"sizes": "310x150"
					},
					{
						"src": "iconPWA/windows10/Wide310x150Logo.scale-125.png",
						"sizes": "388x188"
					},
					{
						"src": "iconPWA/windows10/Wide310x150Logo.scale-150.png",
						"sizes": "465x225"
					},
					{
						"src": "iconPWA/windows10/Wide310x150Logo.scale-200.png",
						"sizes": "620x300"
					},
					{
						"src": "iconPWA/windows10/Wide310x150Logo.scale-400.png",
						"sizes": "1240x600"
					},
					{
						"src": "iconPWA/windows10/LargeTile.scale-100.png",
						"sizes": "310x310"
					},
					{
						"src": "iconPWA/windows10/LargeTile.scale-125.png",
						"sizes": "388x388"
					},
					{
						"src": "iconPWA/windows10/LargeTile.scale-150.png",
						"sizes": "465x465"
					},
					{
						"src": "iconPWA/windows10/LargeTile.scale-200.png",
						"sizes": "620x620"
					},
					{
						"src": "iconPWA/windows10/LargeTile.scale-400.png",
						"sizes": "1240x1240"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.scale-100.png",
						"sizes": "44x44"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.scale-125.png",
						"sizes": "55x55"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.scale-150.png",
						"sizes": "66x66"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.scale-200.png",
						"sizes": "88x88"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.scale-400.png",
						"sizes": "176x176"
					},
					{
						"src": "iconPWA/windows10/StoreLogo.scale-100.png",
						"sizes": "50x50"
					},
					{
						"src": "iconPWA/windows10/StoreLogo.scale-125.png",
						"sizes": "63x63"
					},
					{
						"src": "iconPWA/windows10/StoreLogo.scale-150.png",
						"sizes": "75x75"
					},
					{
						"src": "iconPWA/windows10/StoreLogo.scale-200.png",
						"sizes": "100x100"
					},
					{
						"src": "iconPWA/windows10/StoreLogo.scale-400.png",
						"sizes": "200x200"
					},
					{
						"src": "iconPWA/windows10/SplashScreen.scale-100.png",
						"sizes": "620x300"
					},
					{
						"src": "iconPWA/windows10/SplashScreen.scale-125.png",
						"sizes": "775x375"
					},
					{
						"src": "iconPWA/windows10/SplashScreen.scale-150.png",
						"sizes": "930x450"
					},
					{
						"src": "iconPWA/windows10/SplashScreen.scale-200.png",
						"sizes": "1240x600"
					},
					{
						"src": "iconPWA/windows10/SplashScreen.scale-400.png",
						"sizes": "2480x1200"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-16.png",
						"sizes": "16x16"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-20.png",
						"sizes": "20x20"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-24.png",
						"sizes": "24x24"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-30.png",
						"sizes": "30x30"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-32.png",
						"sizes": "32x32"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-36.png",
						"sizes": "36x36"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-40.png",
						"sizes": "40x40"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-44.png",
						"sizes": "44x44"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-48.png",
						"sizes": "48x48"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-60.png",
						"sizes": "60x60"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-64.png",
						"sizes": "64x64"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-72.png",
						"sizes": "72x72"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-80.png",
						"sizes": "80x80"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-96.png",
						"sizes": "96x96"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.targetsize-256.png",
						"sizes": "256x256"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-16.png",
						"sizes": "16x16"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-20.png",
						"sizes": "20x20"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-24.png",
						"sizes": "24x24"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-30.png",
						"sizes": "30x30"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-32.png",
						"sizes": "32x32"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-36.png",
						"sizes": "36x36"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-40.png",
						"sizes": "40x40"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-44.png",
						"sizes": "44x44"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-48.png",
						"sizes": "48x48"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-60.png",
						"sizes": "60x60"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-64.png",
						"sizes": "64x64"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-72.png",
						"sizes": "72x72"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-80.png",
						"sizes": "80x80"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-96.png",
						"sizes": "96x96"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-unplated_targetsize-256.png",
						"sizes": "256x256"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-16.png",
						"sizes": "16x16"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-20.png",
						"sizes": "20x20"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-24.png",
						"sizes": "24x24"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-30.png",
						"sizes": "30x30"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-32.png",
						"sizes": "32x32"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-36.png",
						"sizes": "36x36"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-40.png",
						"sizes": "40x40"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-44.png",
						"sizes": "44x44"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-48.png",
						"sizes": "48x48"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-60.png",
						"sizes": "60x60"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-64.png",
						"sizes": "64x64"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-72.png",
						"sizes": "72x72"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-80.png",
						"sizes": "80x80"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-96.png",
						"sizes": "96x96"
					},
					{
						"src": "iconPWA/windows10/Square44x44Logo.altform-lightunplated_targetsize-256.png",
						"sizes": "256x256"
					},
					{
						"src": "iconPWA/windows/windows-smallsquare-24-24.png",
						"sizes": "24x24"
					},
					{
						"src": "iconPWA/windows/windows-smallsquare-30-30.png",
						"sizes": "30x30"
					},
					{
						"src": "iconPWA/windows/windows-smallsquare-42-42.png",
						"sizes": "42x42"
					},
					{
						"src": "iconPWA/windows/windows-smallsquare-54-54.png",
						"sizes": "54x54"
					},
					{
						"src": "iconPWA/windows/windows-splashscreen-1116-540.png",
						"sizes": "1116x540"
					},
					{
						"src": "iconPWA/windows/windows-splashscreen-868-420.png",
						"sizes": "868x420"
					},
					{
						"src": "iconPWA/windows/windows-splashscreen-620-300.png",
						"sizes": "620x300"
					},
					{
						"src": "iconPWA/windows/windows-squarelogo-270-270.png",
						"sizes": "270x270"
					},
					{
						"src": "iconPWA/windows/windows-squarelogo-210-210.png",
						"sizes": "210x210"
					},
					{
						"src": "iconPWA/windows/windows-squarelogo-150-150.png",
						"sizes": "150x150"
					},
					{
						"src": "iconPWA/windows/windows-squarelogo-120-120.png",
						"sizes": "120x120"
					},
					{
						"src": "iconPWA/windows/windows-storelogo-90-90.png",
						"sizes": "90x90"
					},
					{
						"src": "iconPWA/windows/windows-storelogo-70-70.png",
						"sizes": "70x70"
					},
					{
						"src": "iconPWA/windows/windows-storelogo-50-50.png",
						"sizes": "50x50"
					},
					{
						"src": "iconPWA/windows/windowsphone-appicon-106-106.png",
						"sizes": "106x106"
					},
					{
						"src": "iconPWA/windows/windowsphone-appicon-62-62.png",
						"sizes": "62x62"
					},
					{
						"src": "iconPWA/windows/windowsphone-appicon-44-44.png",
						"sizes": "44x44"
					},
					{
						"src": "iconPWA/windows/windowsphone-mediumtile-360-360.png",
						"sizes": "360x360"
					},
					{
						"src": "iconPWA/windows/windowsphone-mediumtile-210-210.png",
						"sizes": "210x210"
					},
					{
						"src": "iconPWA/windows/windowsphone-mediumtile-150-150.png",
						"sizes": "150x150"
					},
					{
						"src": "iconPWA/windows/windowsphone-smalltile-170-170.png",
						"sizes": "170x170"
					},
					{
						"src": "iconPWA/windows/windowsphone-smalltile-99-99.png",
						"sizes": "99x99"
					},
					{
						"src": "iconPWA/windows/windowsphone-smalltile-71-71.png",
						"sizes": "71x71"
					},
					{
						"src": "iconPWA/windows/windowsphone-storelogo-120-120.png",
						"sizes": "120x120"
					},
					{
						"src": "iconPWA/windows/windowsphone-storelogo-70-70.png",
						"sizes": "70x70"
					},
					{
						"src": "iconPWA/windows/windowsphone-storelogo-50-50.png",
						"sizes": "50x50"
					},
					{
						"src": "iconPWA/android/android-launchericon-512-512.png",
						"sizes": "512x512"
					},
					{
						"src": "iconPWA/android/android-launchericon-192-192.png",
						"sizes": "192x192"
					},
					{
						"src": "iconPWA/android/android-launchericon-144-144.png",
						"sizes": "144x144"
					},
					{
						"src": "iconPWA/android/android-launchericon-96-96.png",
						"sizes": "96x96"
					},
					{
						"src": "iconPWA/android/android-launchericon-72-72.png",
						"sizes": "72x72"
					},
					{
						"src": "iconPWA/android/android-launchericon-48-48.png",
						"sizes": "48x48"
					}
				],
				"start_url": ".",
				"scope": ".",
				"lang": "es-CO",
				"orientation": "portrait",
				"display": "standalone",
				"theme_color": "#0D1117",
				"background_color": "#0D1117"
			}
		})
	]
})
