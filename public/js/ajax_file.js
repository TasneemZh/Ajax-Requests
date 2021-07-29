// eslint-disable-next-line no-var
var xhr;

function verifyRequest() {
  // Without the promise, the app would continue alerting until the request is ready and done
  return new Promise((resolve, reject) => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      document.getElementById('container').innerHTML = xhr.responseText;
      resolve(xhr.responseText);
    } else {
      reject(new Error('Error! The request couldn\'t be done'));
    }
  });
}

function makeRequest() {
  try {
    xhr = new XMLHttpRequest();

    if (!xhr) {
      throw new Error('Error! Couldn\'t create an XML-HTTP-Request');
    }
    xhr.onreadystatechange = verifyRequest;
    xhr.open('GET', 'result.html', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send();
  } catch (error) {
    alert(`Well, errors can happen: ${error.description}`);
  }
}

document.getElementById('reqs_btn_file').addEventListener('click', makeRequest);
