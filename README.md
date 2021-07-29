The project shows how AJAX requests work with URLs and local files.

### Some clarification about each type:

**Urls:**

The website, which is going to be connected to the URL section in the *open* function that is invoked by the XML-HTTP-request, has to have its CORS policy allowed.

In this project, we have used a URL of another project in which we have enabled the CORS policy in the response header to be able to use it here.

**Files:**

The *open* function doesn't take files since the CORS support a set of protocols schema and files are not one of them. In order to use them, you should allow the browser to access files since they are blocked by default.

To achieve that, do the following on your terminal:

* Move to the directory in which the executable chrome file is sets.

Example: `cd C:/Program\ Files/Google/Chrome/`

* Launch Chrome browser with the *--allow-file-access-from-files* flag.

Command: `start chrome.exe --allow-file-access-from-files`

### Steps to run the Project:

To run the project, do the following steps:

1) Install the dev/dependencies. Use `npm i` **and** `npm i -also=dev`

2) Install Browserify and Watchify globally, use the following commands:

`npm i -g browserify` **and** `npm i -g watchify`

3) Bundle the js files into one file by writing the following command, and watch for changes:

`watchify public/js/ajax_file.js public/js/ajax_url.js -o public/js/bundle.js -v`

Note: Don't attach the "v" flag if you don't want to see update states.

4) Launch the Chrome browser via the terminal with the --allow-file-access-from-files flag.

5) Copy the path of the home.html file, and paste it on the chrome browser you have launched.

### Notes:

- The moment you close the chrome, the flags will be reset. Meaning that you have to enable the file flag whenever you want to use the project. It is unsafe to use anyway, so this is for the best.

### Resources for Further Reading:

[AJAX - Asynchronous JavaScript And XMLs](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

[The CORS Issue - Where it all started](https://www.codeproject.com/Questions/1195078/How-to-fix-cross-origin-requests-are-only-supporte)

[The CORS Fix - Where it all ended](https://chrome-allow-file-access-from-file.com/windows.html)

[Browserify and Watchify Configuration](https://scotch.io/tutorials/getting-started-with-browserify#toc-under-the-hood)