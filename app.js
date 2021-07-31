const express = require('express');
const { join } = require('path');
const fetch = require('node-fetch');
const { writeFile } = require('fs/promises');
const browserify = require('browserify');
const { createWriteStream } = require('fs');

const app = express();

app.use(express.static(join(__dirname, '/public')));

async function downloadImage() {
  try {
    const response = await fetch('https://tasneemzh-newspaper.herokuapp.com/images/news.jpg');
    const buffer = await response.buffer();
    const destImage = join(__dirname, '/public', 'images', 'news.jpg');
    await writeFile(destImage, buffer, (error) => {
      if (error) {
        throw new Error(error);
      }
    });
  } catch (error) {
    console.error(`Well, errors can happen: ${error.message}`);
  }
}

function bundleFiles() {
  try {
    const bundled = browserify();
    bundled.add(join(__dirname, '/public', 'js', 'click-event.js'));
    const destFile = join(__dirname, '/public', 'js', 'bundle.js');
    const writable = createWriteStream(destFile);
    bundled.bundle().pipe(writable);
  } catch (error) {
    console.error(`Well, errors can happen: ${error.message}`);
  }
}

app.get('/', (_, res) => Promise.all([downloadImage(), bundleFiles()]).then(() => {
  res.sendFile(join(__dirname, '/public', 'home.html'));
}));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
