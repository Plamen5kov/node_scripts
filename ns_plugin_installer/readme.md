### ns_plugin_installer

* **`ns_plugin_installer/downloader.js`** downloads all {N} plugins specified in `ns_plugin_installer/nativescript-plugins.txt`.

How to run:

this will search for `nativescript-plugins.txt` in the same folder `downloader.js` is.
```
node <path_to/downloader.js>
```

you can also pass path to your plugins file
```
node <path_to/downloader.js> <path_to/input_plugins.txt>
```

* **`ns_plugin_installer/delete_non_android.js`** deletes all non android plugins (those missing `platforms/android` folder)

How to run:

this will search for plugins `input` folder, in the same folder `delete_non_android.js` is.
```
node <path_to/delete_non_android.js>
```

you can also pass path to your plugins file
```
node <path_to/delete_non_android.js> <path_to/plugins_input_folder>
```