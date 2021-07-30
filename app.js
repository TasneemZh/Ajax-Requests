const express = require('express');
const { join } = require('path');
const browserify = require('browserify');
// const http = require('http');
const { writeFile } = require('fs/promises');
const { createWriteStream } = require('fs');
const fetch = require('node-fetch');

const app = express();

app.use(express.static(join(__dirname, '/public')));

// async function writeData(destFile, data) {
//   await writeFile(destFile, data, (error) => {
//     if (error) {
//       console.error(error.message);
//     }
//   });
// }

function bundleFiles() {
  const bundled = browserify();
  bundled.add([join(__dirname, '/public', 'js', 'ajax_file.js'), join(__dirname, '/public', 'js', 'ajax_url.js')]);
  const destFile = join(__dirname, '/public', 'js', 'bundle.js');
  const writable = createWriteStream(destFile);
  bundled.bundle().pipe(writable);

  // const options = {
  //   host: 'localhost',
  //   port: 3000,
  //   path: '/',
  // };

  // http.get(options, (receiver) => {
  //   receiver.on('data', (chunk) => {
  //     const destFile = join(__dirname, '/public', 'js', 'bundle.js');
  //     writeData(destFile, chunk);
  //   });
  // }).on('error', (error) => {
  //   console.error(error.message);
  // });
}

async function downloadImage() {
  try {
    const response = await fetch('https://tasneemzh-newspaper.herokuapp.com/images/news.jpg');
    const buffer = await response.buffer();
    const destImage = join(__dirname, '/public', 'images', 'news.jpg');
    await writeFile(destImage, buffer, (writeErr) => {
      if (writeErr) {
        throw new Error(writeErr.message);
      }
    });
  } catch (error) {
    console.error(error.message);
  }
}

app.get('/', (_, res) => {
  bundleFiles();
  downloadImage();
  res.sendFile(join(__dirname, '/public', 'home.html'));
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
