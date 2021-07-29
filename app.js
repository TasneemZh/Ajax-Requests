const express = require('express');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const fetch = require('node-fetch');

const app = express();

app.use(express.static(join(__dirname, '/public')));

async function downloadImage(url) {
  try {
    const response = await fetch(url);
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
  downloadImage('https://tasneemzh-newspaper.herokuapp.com/images/news.jpg');
  res.sendFile(join(__dirname, '/public', 'home.html'));
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`The server is running on ${port}`);
});
